from flask import Flask, render_template, request, redirect
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app, 'mydb')

@app.route('/users')
def index():
    return render_template

@app.route('/users/new')
def new():
    return render_template

@app.route(r'/users/(?P<number>\d+)')

@app.route()

app.run(debug=True)