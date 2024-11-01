# app/auth/utils.py
from flask_jwt_extended import create_access_token
from datetime import timedelta

def generate_jwt_token(user):
    expires = timedelta(days=1)
    token = create_access_token(identity=user.id, expires_delta=expires)
    return token
