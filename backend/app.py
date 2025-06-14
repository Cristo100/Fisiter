from flask import Flask, request, jsonify
from flask_jwt_extended import (
    JWTManager, create_access_token
)
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'clave-super-secreta')
jwt = JWTManager(app)

# ---- AUTH ------------------------------------------------------------------
@app.post('/login')
def login():
    data = request.get_json()
    if data['email'] == 'admin@admin.com' and data['password'] == '123':
        token = create_access_token(identity=data['email'])
        return jsonify(access_token=token)
    return jsonify(msg='Credenciales inválidas'), 401


@app.post('/register')
def register():
    #  👉  Registro simulado - solo eco de lo recibido
    data = request.get_json()
    return jsonify(msg='Usuario registrado', email=data.get('email')), 201


# ---- HEALTH CHECK ----------------------------------------------------------
@app.get('/ping')
def ping():
    return jsonify(msg='pong'), 200


if __name__ == '__main__':
    app.run(debug=True)
