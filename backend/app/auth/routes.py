# app/auth/routes.py
from flask import Blueprint, request, jsonify
from app import db
from app.models import User
from app.auth.utils import generate_jwt_token
from werkzeug.security import generate_password_hash

auth_bp = Blueprint("auth", __name__)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if User.query.filter_by(email=email).first():
        return jsonify({"message": "Email already registered"}), 400

    new_user = User(email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({"message": "Invalid email or password"}), 401

    token = generate_jwt_token(user)
    return jsonify({"token": token}), 200

@auth_bp.route('/forgot-password', methods=['POST'])
def forgot_password():
    data = request.get_json()
    email = data.get("email")

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message": "Email not found"}), 404

    # In a real application, you’d send an email to reset the password.
    return jsonify({"message": "Password reset link sent to your email"}), 200
