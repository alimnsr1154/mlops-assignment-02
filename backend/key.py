import secrets
secret_key = secrets.token_hex(16)  # 32-character hex key
jwt_secret = secrets.token_hex(16)  # Another 32-character hex key

print("SECRET_KEY:", secret_key)
print("JWT_SECRET:", jwt_secret)
