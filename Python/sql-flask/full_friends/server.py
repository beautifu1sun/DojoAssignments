from flask import Flask, render_template, request, redirect
from mysqlconnection import MySQLConnector
from datetime import datetime

app = Flask(__name__)
mysql = MySQLConnector(app, 'friends')

def suffix(d):
    return 'th' if 11<=d<=13 else {1:'st',2:'nd',3:'rd'}.get(d%10, 'th')

@app.route('/')
def home():
    query = "SELECT * FROM friend"
    friends = mysql.query_db(query)
    for friend in friends: 
        friend['suffix']=((suffix(friend['created_at'].day)))
    return render_template('index.html', friends=friends)

@app.route('/addFriend', methods = ["POST"])
def add():
    data = {
        'name': request.form['name'],
        'age': request.form['age']
    }
    query = "INSERT INTO friend (name, age, created_at, updated_at) VALUES (:name, :age, NOW(), NOW())"
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)