from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import MySQLConnector
import re, md5

app = Flask(__name__)
mysql = MySQLConnector(app, 'mydb')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app.secret_key = "key"

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
    else: 
        data = {
            'email': email,
            'first_name': first_name,
            'last_name': last_name,
            'password': password
            }
        query = "SELECT * FROM mydb.users WHERE email = :email"
        #validation N2
        if len(mysql.query_db(query, data)) == 0:
            query = 'INSERT INTO mydb.users (email, first_name, last_name, password, created_at, updated_at) VALUES (:email, :first_name, :last_name, :password, NOW(), NOW())'
            data['password']=md5.new(password).hexdigest()
            session['activeUser'] = mysql.query_db(query, data)
            session['userName'] = mysql.query_db('SELECT CONCAT_WS(" ",first_name,last_name) as name FROM users where user_id = {}'.format(session['activeUser']))
            flash("You've successfully registered")
            return redirect('/success')
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
            flash("You've successfully loged in!")
            session['activeUser'] = mysql.query_db(query, data)[0]['user_id']
            session['userName'] = mysql.query_db('SELECT CONCAT_WS(" ",first_name,last_name) as name FROM users where user_id = {}'.format(session['activeUser']))
            return redirect('/success')
        else:
            flash("Email and/or password are incorrect!", "error")
            return redirect('/')
    else:
        flash("Email and/or password are incorrect!", "error")
        return redirect('/')

@app.route('/success')
def confirm():
    return render_template('success.html')

@app.route('/logout', methods = ["POST"])
def logout():
    session.clear()
    return redirect('/')

app.run(debug=True)