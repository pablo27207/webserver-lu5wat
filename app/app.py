from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "¡Hola mundo desde Flask + Gunicorn en Docker!"
