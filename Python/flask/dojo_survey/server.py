from flask import Flask, render_template, request, redirect, flash

server = Flask(__name__)
server.secret_key = "key"

@server.route('/')
def form():
    return render_template('index.html')

@server.route('/result', methods = ["POST"])
def submit():
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    if (len(name) < 1):
        flash('Invalid name (Name cannot be empty!)')
    if (len(comment) < 1):
        flash('Invalid comment (Comment cannot be empty!)')        
    if (len(comment) > 120):
        flash('Invalid comment (Must be less than 120 characters)')   
    return render_template('result.html', name=name, location=location, language=language, comment=comment)

server.run(debug = True)