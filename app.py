# Dummy Flask app to facilitate test rendering of dice-roller.html page and subsequently test javascript functions
#
# The app was designed using Jinja2 style url_fors used in Flask because the eventual intention is to present this web app 
# within a larger existing Flask app
from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('dice-roller.html')

if __name__ == '__main__':
    app.run(debug=True)