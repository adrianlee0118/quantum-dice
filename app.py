# Dummy Flask app to facilitate test rendering of dice-roller html page
from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('dice-roller.html')

if __name__ == '__main__':
    app.run(debug=True)