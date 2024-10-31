# app/db.py
from app import db
from app.models import User

def init_db():
    db.create_all()
