from flask import Flask, render_template, request, session, redirect
import random, datetime

server = Flask(__name__)
server.secret_key = "key"

@server.before_first_request
def start():
    session['gold'] = 0
    session['log'] = []
    return redirect('/')

@server.route('/')
def index():
    return render_template('index.html')

@server.route('/process_money', methods = ["POST"])
def process():
    if (request.form['place'] == 'farm'):
        earn = random.randint(10,20)
        session['gold'] += earn
        session['log'].append({ 'text' : "Earned " + str(earn) + " gold from the farm! " + datetime.datetime.now().strftime("%Y/%m/%d %I:%M %p"), 'color' : 'green' })
    elif (request.form['place'] == 'cave'):
        earn = random.randint(5,10)
        session['gold'] += earn
        session['log'].append({ 'text' : "Earned " + str(earn) + " gold from the cave! " + datetime.datetime.now().strftime("%Y/%m/%d %I:%M %p"), 'color' : 'green' })
    elif (request.form['place'] == 'house'):
        earn = random.randint(2,5)
        session['gold'] += earn
        session['log'].append({ 'text' : "Earned " + str(earn) + " gold from the house! " + datetime.datetime.now().strftime("%Y/%m/%d %I:%M %p"), 'color' : 'green' })
    elif (request.form['place'] == 'casino'):
        earn = random.randint(-50,50)
        session['gold'] += earn
        if (earn > 0):
            session['log'].append({ 'text' : "Entered the casino and earned " + str(earn) + " gold! Hooray! " + datetime.datetime.now().strftime("%Y/%m/%d %I:%M %p"), 'color' : 'green' })
        elif (earn < 0):
            session['log'].append({ 'text' : "Entered the casino and lost " + str(-earn) + " gold... Ouch... " + datetime.datetime.now().strftime("%Y/%m/%d %I:%M %p"), 'color' : 'red' })
        else:
            session['log'].append({ 'text' : "Entered the casino and earned " + str(earn) + " gold! Still better than losing, right? " + datetime.datetime.now().strftime("%Y/%m/%d %I:%M %p"), 'color' : 'gray' })
    return redirect('/')

server.run(debug = True)

