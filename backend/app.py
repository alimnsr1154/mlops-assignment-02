# app.py
from flask import Flask
from flask_jwt_extended import JWTManager
from config import Config
from app.db import db
from app.auth.auth import auth_bp

app = Flask(__name__)
app.config.from_object(Config)

# Initialize extensions
db.init_app(app)
jwt = JWTManager(app)

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')

# Create all database tables
with app.app_context():
    db.create_all()

@app.route('/test-db')
def test_db():
    try:
        db.session.execute('SELECT 1')
        return {"message": "Database connected successfully!"}, 200
    except Exception as e:
        return {"error": str(e)}, 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)