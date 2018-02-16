from flask import Flask, render_template, request, redirect

server = Flask(__name__)

@server.route('/')
def home():
    return render_template('index.html')

@server.route('/ninja')
def ninja():
    return render_template('ninja.html')

@server.route('/ninja/<color>')
def ninjaOne(color):
    if (color=='blue' or color=='orange' or color=='red' or color=='purple'):
        return render_template('warrior.html', color = color)
    else:
        return render_template('404.html')

server.run(debug = True)