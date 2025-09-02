import requests
import json

# Test data that matches the form structure
test_data = {
    "fname": "John",
    "lname": "Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "age": "30",
    "height": "5'10",
    "weight": "180",
    "commit": "Yes",
    "hasJob": "Yes",
    "monthlyIncome": "$3000",
    "whatsapp": "",
    "goal": "170",
    "stuck": "Need motivation",
    "start": "Immediately",
    "signature": "John Doe",
    "signup": True,
    "date": "2024-01-15"
}

# Test the local backend
try:
    response = requests.post(
        'http://localhost:8000/submit/',
        json=test_data,
        headers={'Content-Type': 'application/json'}
    )
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Error: {e}")

