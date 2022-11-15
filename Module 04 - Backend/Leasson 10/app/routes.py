from app import app
from flask import render_template, request, redirect, flash


from flask_sqlalchemy import SQLAlchemy
import os
basedir = os.path.abspath(os.path.dirname(__file__))

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'+os.path.join(basedir,'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'chave ultra secreta'
db = SQLAlchemy(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name_prod = db.Column(db.String(64), unique=True, index=True)
    marca = db.Column(db.String(64))
    value = db.Column(db.Float)

@app.route('/')
@app.route('/index')  # rota alternativa
def index():
    return render_template("index.html")

@app.route('/cadastro.html')
def cadastro():
    return render_template("cadastro.html")

@app.route('/form', methods = ['POST'])
def form():
    db.create_all()
    nome = request.form['nome_prod']
    marca = request.form['marca_prod']
    valor = request.form['value_prod']

    product = Product.query.filter_by(name_prod=nome).first()

    if product is None:
        product = product = Product(name_prod=nome,marca=marca,value=valor)
        db.session.add(product)
        db.session.commit()
        flash('Produto inserido com sucesso!','success')
        return redirect('http://127.0.0.1:5000/cadastro.html')
    else:
         flash('Produto já existe!','info')
         return redirect('http://127.0.0.1:5000/')


@app.route('/showdata.html')
def showdata():
    show = Product.query.all()
    return render_template("showdata.html", list = show)

@app.errorhandler(404)  # Página de diretório não encontrado
def page_not_found(e):
    return render_template('404.html'), 404
