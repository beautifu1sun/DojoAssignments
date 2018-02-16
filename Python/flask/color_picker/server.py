from flask import Flask, render_template, request, redirect, session

server = Flask(__name__)
server.secret_key = "key"

@server.before_first_request
def start():
    session['color'] = "rgb(255,255,255)"

@server.route("/")
def index():
    return render_template('index.html')

@server.route("/handle", methods = ["POST"])
def handle():
    red = request.form['red']
    green = request.form['green']
    blue = request.form['blue']
    session['color'] = "rgb("+red+","+green+","+blue+")"
    return redirect('/')

server.run(debug = True)
