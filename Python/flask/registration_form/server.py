from flask import Flask, render_template, request, redirect, flash
import re, datetime

server = Flask(__name__)
server.secret_key = "key"

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r'.*\d.*[A-Z].*|.*[A-Z].*\d.*')
today = datetime.datetime.now().date()

@server.route('/')
def home():
    return render_template('index.html')

@server.route('/process', methods=['POST'])
def processForm():
    email = request.form['email']
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    password = request.form['password']
    conf_password = request.form['pass_confirm']
    
    errors = 0

    if len(email)<1 or len(first_name)<1 or len(last_name)<1 or len(password)<1 or len(request.form['DOB'].split("-"))<3 :
        flash('All fields are required and must not be blank', 'error')
        errors+=1
    else:
        dob = datetime.date(*[int(i) for i in request.form['DOB'].split("-")])
        if today < dob: 
            flash('Birthdate must be in the past', 'error')
            errors+=1
        if not first_name.isalpha() or not last_name.isalpha() :
            flash('First and Last Name cannot contain any numbers', 'error')
            errors+=1
        if len(password)<9 :
            flash('Password should be more than 8 characters', 'error')
            errors+=1
        if password!=conf_password :
            flash("Passwords don't match", 'error')
            errors+=1
        if not EMAIL_REGEX.match(email):
            flash('Email should be a valid email', 'error')
            errors+=1
        if not PASSWORD_REGEX.match(password):
            flash('Password must include at least 1 uppercase letter and 1 numeric value', 'error')
            errors+=1

    if (errors == 0):
        flash("Thanks for submitting your information.")

    return redirect('/')

server.run(debug = True)