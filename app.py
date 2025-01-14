from flask import Flask, render_template
import sqlite3

app = Flask(__name__)


def get_db_data():
    conn = sqlite3.connect('data.db')
    conn.row_factory = sqlite3.Row  
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM content") 
    rows = cursor.fetchall()
    conn.close()
    return rows


@app.route('/')
def index():
    return render_template('index.html')  


@app.route('/mixes')
def mixes():
    data = get_db_data()
    return render_template('mixes.html', data=data)


@app.route('/table')
def table():
    data = get_db_data()
    return render_template('table.html', data=data)

@app.route('/regular')
def regular():
    data = get_db_data()
    return render_template('regular.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
