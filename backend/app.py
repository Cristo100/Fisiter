from flask import Flask, request, jsonify
from flask_jwt_extended import (
    JWTManager, create_access_token,
    jwt_required, get_jwt_identity
)
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['JWT_SECRET_KEY'] = 'clave-super-secreta'  # Cambia esta clave en producción
jwt = JWTManager(app)

# Simulación simple de usuarios en memoria
USUARIOS = {
    "usuario@correo.com": "123456"
}

@app.route('/api/register', methods=['POST'])
def register():
    email = request.json.get('email')
    password = request.json.get('password')

    if not email or not password:
        return jsonify({"msg": "Faltan datos"}), 400

    if email in USUARIOS:
        return jsonify({"msg": "Usuario ya existe"}), 409

    USUARIOS[email] = password
    return jsonify({"msg": "Usuario creado con éxito"}), 201

@app.route('/api/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    if not email or not password:
        return jsonify({"msg": "Faltan credenciales"}), 400

    if USUARIOS.get(email) == password:
        token = create_access_token(identity=email)
        return jsonify(token=token)

    return jsonify({"msg": "Credenciales incorrectas"}), 401

@app.route('/api/actividades', methods=['GET'])
@jwt_required()
def actividades():
    user = get_jwt_identity()
    return jsonify([
        {"id": 1, "tipo": "Caminar", "duracion": 30},
        {"id": 2, "tipo": "Correr", "duracion": 20}
    ])

if __name__ == '__main__':
    app.run(debug=True, port=5001)
