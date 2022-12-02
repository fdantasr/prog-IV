from flask import Flask, render_template, url_for, json
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from flask_bootstrap import Bootstrap
import requests
import json, os

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
boostrap = Bootstrap(app)

class PokeForm(FlaskForm):
	name = StringField('Nome')
	type = SelectField('Tipo', choices=[('',''),('grass','Grama'),('electric','Elétrico'),('dragon','Dragão')])
	submit = SubmitField('Enviar')

def getjson():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "static/", "pokedex.json")
    data = json.load(open(json_url))
    return data

pokemons = getjson()


@app.route('/',methods=['GET','POST'])
def home():
	pf = PokeForm()
	pokelist = list()
	if pf.validate_on_submit():
		for pkm in pokemons:
			if (pf.name.data in pkm['name'].lower()) and getType(pf.type.data,pkm['type']):
				pokelist.append(pkm)

	return render_template('home.html', pokemons=pokelist, form = pf)

def getType(type, types):
	if type in types or type == '':
		return True
	else:
		return False


if __name__ == '__main__':
  app.run(debug=True)
