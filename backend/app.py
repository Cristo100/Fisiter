from flask import Flask, request, jsonify
from flask_jwt_extended import (
    JWTManager, create_access_token,
    jwt_required, get_jwt_identity
)
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'clave-super-secreta')
jwt = JWTManager(app)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if data['email'] == 'admin@admin.com' and data['password'] == '123':
        access_token = create_access_token(identity=data['email'])
        return jsonify(access_token=access_token)
    return jsonify({"msg": "Credenciales inválidas"}), 401
