from flask import Flask, render_template

server = Flask(__name__)
@server.route('/')
def main():
    return render_template('index.html')
@server.route('/ninjas')
def ninjas():
    return render_template('ninjas.html')
@server.route('/dojos/new')
def dojos_new():
    return render_template('dojos_new.html')

server.run(debug = True)