from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import MySQLConnector
from datetime import datetime
import re, md5

app = Flask(__name__)
mysql = MySQLConnector(app, 'mydb')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app.secret_key = "key"

def suffix(d):
    return 'th' if 11<=d<=13 else {1:'st',2:'nd',3:'rd'}.get(d%10, 'th')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=["POST"])
def registration():
    email = request.form['email']
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    password = request.form['password']
    password_conf = request.form['password_conf']
    errors = 0
    # validation process
    if len(email)<1 or len(first_name)<1 or len(last_name)<1 or len(password)<1 :
        flash('All fields are required and must not be blank', 'error')
        errors += 1
    else: 
        if not first_name.isalpha() or not last_name.isalpha() :
            flash('First and Last Name cannot contain any numbers', 'error')
            errors += 1
        if len(first_name)<2 or len(last_name)<2 :
            flash('First name and Last name must be at least 2 characters long', 'error')
            errors += 1
        if len(password)<8 :
            flash('Password should be at least 8 characters long', 'error')
            errors+=1
        if password!=password_conf :
            flash("Passwords don't match", 'error')
            errors += 1
        if not EMAIL_REGEX.match(email):
            flash('Email should be a valid email', 'error')
            errors += 1
    if errors > 0:
        return redirect('/')
    #adding user
    else: 
        data = {
            'email': email,
            'first_name': first_name,
            'last_name': last_name,
            'password': password
            }
        query = "SELECT * FROM mydb.users WHERE email = :email"
        #validation-database
        if len(mysql.query_db(query, data)) == 0:
            query = 'INSERT INTO mydb.users (email, first_name, last_name, password, created_at, updated_at) VALUES (:email, :first_name, :last_name, :password, NOW(), NOW())'
            data['password']=md5.new(password).hexdigest()
            session['activeUser'] = mysql.query_db(query, data)
            session['userName'] = mysql.query_db('SELECT CONCAT_WS(" ",first_name) as name FROM users where id = {}'.format(session['activeUser']))
            return redirect('/wall')
        else:
            flash('This email address is already exist', 'error')
            return redirect('/')

@app.route('/login', methods=["POST"])
def login():
    email = request.form['email']
    password = request.form['password']
    data = {
        'email': email
        }
    query = "SELECT * FROM mydb.users WHERE email = :email"
    existingUser = mysql.query_db(query, data)
    #validation
    if len(existingUser) > 0:
        query = "SELECT * FROM mydb.users WHERE email = :email"
        if existingUser[0]['password'] == md5.new(password).hexdigest():
            session['activeUser'] = mysql.query_db(query, data)[0]['id']
            session['userName'] = mysql.query_db('SELECT CONCAT_WS(" ",first_name) as name FROM users where id = {}'.format(session['activeUser']))
            return redirect('/wall')
        else:
            flash("Email and/or password are incorrect!", "error")
            return redirect('/')
    else:
        flash("Email and/or password are incorrect!", "error")
        return redirect('/')

@app.route('/wall')
def confirm():
    query = "SELECT mydb.messages.id, mydb.messages.message, mydb.messages.created_at, mydb.users.first_name, mydb.users.last_name FROM mydb.messages JOIN mydb.users ON mydb.users.id = mydb.messages.user_id group by id desc"
    messages = mysql.query_db(query)
    for message in messages: 
        message['suffix']=((suffix(message['created_at'].day)))
        query = "SELECT mydb.comments.comment, mydb.comments.created_at, mydb.users.first_name, mydb.users.last_name FROM mydb.comments JOIN mydb.users ON mydb.users.id = mydb.comments.user_id WHERE message_id = {}".format(message['id'])
        message['comments'] = mysql.query_db(query)
        for comment in message['comments']:
            comment['suffix']=((suffix(comment['created_at'].day)))
    return render_template('wall.html', messages=messages)

@app.route('/newMessage', methods = ["POST"])
def message():
    data = {
        'text': request.form['newMessage'],
        'user_id': session['activeUser']
    }
    query = 'INSERT INTO mydb.messages (message, created_at, updated_at, user_id) VALUES (:text, NOW(), NOW(), :user_id)'
    mysql.query_db(query, data)
    return redirect('/wall')

@app.route('/newComment', methods = ["POST"])
def comment():
    data = {
        'text': request.form['newComment'],
        'user_id': session['activeUser'],
        'message_id': request.form['post_id']
    }
    query = 'INSERT INTO mydb.comments (comment, created_at, updated_at, message_id, user_id) VALUES (:text, NOW(), NOW(), :message_id, :user_id)'
    mysql.query_db(query, data)
    return redirect('/wall')

@app.route('/logout', methods = ["POST"])
def logout():
    session.clear()
    return redirect('/')

app.run(debug=True)