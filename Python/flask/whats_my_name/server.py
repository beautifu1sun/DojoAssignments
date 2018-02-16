from flask import Flask, render_template, request, redirect

server = Flask(__name__)

@server.route('/')
def home():
    return render_template('index.html')

@server.route('/process', methods = ['POST'])
def process_name():
    name = request.form['name']
    print (name)
    return redirect('/')

server.run(debug = True)