from flask import Blueprint

# Create a blueprint for authentication
auth_bp = Blueprint('auth', __name__)

# Import the routes module to register routes with the auth blueprint
from .. import routes
