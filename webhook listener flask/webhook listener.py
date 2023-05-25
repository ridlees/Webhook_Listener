#!/bin/python3

from flask import Flask, render_template, request
import requests
import json
from datetime import datetime

def save(data):
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    with open(f"{timestamp}.json", 'w') as file:
        file.write(json.dumps(data))
    

app = Flask(__name__, template_folder='./conf/templates')

@app.route("/webhook", methods=['GET', 'POST'])
def webhook():
    if request.method == 'GET':
        return "This is Webhook endpoint that accepts data through POST"

    if request.method == 'POST':
        save(request.get_json())
        return request.get_json(), 201

app.run(host="0.0.0.0",port=80)
