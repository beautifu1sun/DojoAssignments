from flask import Flask, render_template, request, redirect, flash
from mysqlconnection import MySQLConnector
import re

app = Flask(__name__)
mysql = MySQLConnector(app, 'mydb')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app.secret_key = "key"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/addEmail', methods = ["POST"])
def addEmail():
    email = request.form['email']
    if not EMAIL_REGEX.match(email):
        flash('Email is not valid!')
        return redirect('/')
    else:
        data = {
            'address': email
            }
        query = "SELECT * FROM mydb.emails WHERE address = :address"
        if len(mysql.query_db(query, data)) == 0:
            query = 'INSERT INTO mydb.emails (address, created_at, updated_at) VALUES (:address, NOW(), NOW())'
            mysql.query_db(query, data)
            flash(email)
            return redirect('/success')
        else:
            flash('Email is not valid!')
            return redirect('/')

@app.route('/success')
def submitted():
    query = "SELECT * FROM mydb.emails"
    emails = mysql.query_db(query)
    return render_template('success.html', emails = emails)

app.run(debug=True)