import sys,requests
reload(sys)
from flask import Flask,render_template,url_for,jsonify
sys.setdefaultencoding("utf-8")
app = Flask(__name__, static_url_path='/static')
base_url="https://disease.sh/v2/"

@app.route("/")
def index():
    globalData = requests.get(base_url + "all")
    countriesData = requests.get(base_url + "countries")
    return render_template("index.html", globalData = globalData, countriesData = countriesData)

if __name__ == "__main__":
    app.run(debug = True)