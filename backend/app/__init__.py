# app/__init__.py
from flask import Flask
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from app.db import db

jwt = JWTManager()

def create_app(config_class):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)

    # Import blueprints
    from app.auth.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/auth")

    # Create all database tables
    with app.app_context():
        db.create_all()

    return app