from app import app
from flask import render_template


@app.route('/')
@app.route('/index')  # rota alternativa
def index():
    nome = "Alba"
    return render_template("index.html")


@app.errorhandler(404)  # Página de diretório não encontrado
def page_not_found(e):
    return render_template('404.html'), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

