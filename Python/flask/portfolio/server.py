from flask import Flask, render_template

server = Flask(__name__)

@server.route("/")
def welcome():
    return render_template("welcome.html")

@server.route("/projects")
def projects():
    return render_template("projects.html")

@server.route("/about")
def about():
    return render_template("about.html")

server.run(debug = True)
