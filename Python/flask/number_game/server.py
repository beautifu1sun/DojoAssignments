from flask import Flask, render_template, request, redirect, session
import random

server = Flask(__name__)
server.secret_key = "key"

@server.before_first_request
def init():
    session['num'] = random.randint(1,100)
    session['guess'] = 0
    print(session['num'])
    return redirect('/')

@server.route('/')
def start():
    return render_template('index.html')

@server.route('/guess', methods=["POST"])
def guess():
    session['guess'] = int(request.form['guess'])
    if session['guess'] == session['num']:
        session['result'] = 'even'
    elif session['guess'] > session['num']:
        session['result'] = 'high'
    else:
        session['result'] = 'low'
    return redirect('/')

@server.route('/again')
def again():
    session['num'] = random.randint(1,100)
    session['guess'] = 0
    print(session['num'])
    return redirect('/')

server.run(debug = True)

