from flask import Flask, render_template, request, redirect, session

server = Flask(__name__)
server.secret_key = "key"

@server.route('/')
def index():  
    session['num'] += 1
    return render_template('index.html')

@server.route('/button', methods = ["POST"])
def button():
    session['num'] += 1
    return redirect('/')

@server.route('/reset', methods = ["POST"])
def reset():
    session['num'] = 0
    return redirect('/')

server.run(debug = True)
