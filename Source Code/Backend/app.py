from flask import Flask, request, jsonify
from flask_cors import CORS
import re
import secrets

app = Flask(__name__)
CORS(app)  # allow requests from React (localhost:3000)

# In-memory "database" for demo purposes
# In real apps, use a proper database and hashed passwords.
users = {}  # username -> {"email": ..., "password": ...}

EMAIL_REGEX = re.compile(r'^[^@]+@[^@]+\.[^@]+$')


def validate_register(data):
    errors = {}

    username = data.get("username", "").strip()
    email = data.get("email", "").strip()
    password = data.get("password", "")
    confirm_password = data.get("confirmPassword", "")

    if not username:
        errors["username"] = "Username is required."
    elif len(username) < 3:
        errors["username"] = "Username must be at least 3 characters."

    if not email:
        errors["email"] = "Email is required."
    elif not EMAIL_REGEX.match(email):
        errors["email"] = "Invalid email format."

    if not password:
        errors["password"] = "Password is required."
    elif len(password) < 6:
        errors["password"] = "Password must be at least 6 characters."
    else:
        # must contain at least one special character
        import re as _re
        if not _re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
            errors["password"] = "Password must contain at least one special character."

    if confirm_password != password:
        errors["confirmPassword"] = "Passwords do not match."

    # username uniqueness
    if username in users:
        errors["username"] = "Username is already taken."

    # email uniqueness (check all existing users)
    for u in users.values():
        if u["email"].lower() == email.lower():
            errors["email"] = "Email is already registered."
            break

    return errors


def validate_login(data):
    errors = {}

    username = data.get("username", "").strip()
    password = data.get("password", "")

    if not username:
        errors["username"] = "Username is required."
    if not password:
        errors["password"] = "Password is required."

    # Only check creds if fields are present
    if username and password:
        user = users.get(username)
        if not user or user["password"] != password:
            errors["general"] = "Invalid username or password."

    return errors


@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json() or {}
    errors = validate_register(data)

    if errors:
        return jsonify({"errors": errors}), 400

    username = data["username"].strip()
    email = data["email"].strip()
    password = data["password"]  # plain for demo only

    users[username] = {"email": email, "password": password}

    return jsonify({
        "message": "User registered successfully."
    }), 201


@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json() or {}
    errors = validate_login(data)

    if errors:
        return jsonify({"errors": errors}), 400

    token = secrets.token_hex(16)  # fake token for demo

    return jsonify({
        "message": "Login successful.",
        "token": token,
        "username": data["username"]
    })


@app.route("/api/me", methods=["GET"])
def me():
    # This is just a dummy endpoint to show protected-like behavior.
    # In a real app, you'd verify the token.
    return jsonify({"message": "This is a protected route example."})


if __name__ == "__main__":
    app.run(debug=True)
