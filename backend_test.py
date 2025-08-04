#!/usr/bin/env python3
"""
Backend API Testing for Amez's CV Website
Tests the Next.js API routes for proper functionality
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get the base URL from environment - use localhost for testing since external routing has issues
BASE_URL = "http://localhost:3000"
API_BASE_URL = f"{BASE_URL}/api"

def print_test_header(test_name):
    """Print a formatted test header"""
    print(f"\n{'='*60}")
    print(f"Testing: {test_name}")
    print(f"{'='*60}")

def print_test_result(test_name, success, message=""):
    """Print formatted test result"""
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status} - {test_name}")
    if message:
        print(f"   Details: {message}")

def test_get_endpoint():
    """Test the GET endpoint at /api/"""
    print_test_header("GET Endpoint at /api/")
    
    try:
        response = requests.get(API_BASE_URL, timeout=10)
        
        # Test 1: Status Code
        status_code_ok = response.status_code == 200
        print_test_result("Status Code (200)", status_code_ok, f"Got: {response.status_code}")
        
        # Test 2: Content Type
        content_type = response.headers.get('content-type', '')
        is_json = 'application/json' in content_type
        print_test_result("Content-Type is JSON", is_json, f"Got: {content_type}")
        
        # Test 3: Response Structure
        try:
            data = response.json()
            has_message = 'message' in data
            has_status = 'status' in data
            has_timestamp = 'timestamp' in data
            
            print_test_result("Has 'message' field", has_message, f"Message: {data.get('message', 'N/A')}")
            print_test_result("Has 'status' field", has_status, f"Status: {data.get('status', 'N/A')}")
            print_test_result("Has 'timestamp' field", has_timestamp, f"Timestamp: {data.get('timestamp', 'N/A')}")
            
            # Test 4: Status field value
            status_success = data.get('status') == 'success'
            print_test_result("Status is 'success'", status_success, f"Status: {data.get('status')}")
            
            # Test 5: Message content
            expected_message = 'Hello from Amez CV API!'
            message_correct = data.get('message') == expected_message
            print_test_result("Correct welcome message", message_correct, f"Message: {data.get('message')}")
            
            return status_code_ok and is_json and has_message and has_status and has_timestamp and status_success and message_correct
            
        except json.JSONDecodeError as e:
            print_test_result("Valid JSON Response", False, f"JSON decode error: {e}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("GET Request", False, f"Request failed: {e}")
        return False

def test_post_endpoint_contact_form():
    """Test the POST endpoint with contact form data"""
    print_test_header("POST Endpoint - Contact Form Submission")
    
    # Test data for contact form
    contact_data = {
        "type": "contact",
        "firstName": "John",
        "lastName": "Doe", 
        "email": "john.doe@example.com",
        "subject": "Project Inquiry",
        "message": "I would like to discuss a potential project collaboration."
    }
    
    try:
        response = requests.post(
            API_BASE_URL, 
            json=contact_data,
            headers={'Content-Type': 'application/json'},
            timeout=10
        )
        
        # Test 1: Status Code
        status_code_ok = response.status_code == 200
        print_test_result("Status Code (200)", status_code_ok, f"Got: {response.status_code}")
        
        # Test 2: Content Type
        content_type = response.headers.get('content-type', '')
        is_json = 'application/json' in content_type
        print_test_result("Content-Type is JSON", is_json, f"Got: {content_type}")
        
        # Test 3: Response Structure
        try:
            data = response.json()
            has_message = 'message' in data
            has_status = 'status' in data
            
            print_test_result("Has 'message' field", has_message, f"Message: {data.get('message', 'N/A')}")
            print_test_result("Has 'status' field", has_status, f"Status: {data.get('status', 'N/A')}")
            
            # Test 4: Status field value
            status_success = data.get('status') == 'success'
            print_test_result("Status is 'success'", status_success, f"Status: {data.get('status')}")
            
            # Test 5: Success message
            expected_message = 'Message sent successfully!'
            message_correct = data.get('message') == expected_message
            print_test_result("Correct success message", message_correct, f"Message: {data.get('message')}")
            
            return status_code_ok and is_json and has_message and has_status and status_success and message_correct
            
        except json.JSONDecodeError as e:
            print_test_result("Valid JSON Response", False, f"JSON decode error: {e}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("POST Request", False, f"Request failed: {e}")
        return False

def test_post_endpoint_generic():
    """Test the POST endpoint with generic data (not contact form)"""
    print_test_header("POST Endpoint - Generic Data")
    
    # Test data for generic request
    generic_data = {
        "type": "generic",
        "data": "test data",
        "timestamp": datetime.now().isoformat()
    }
    
    try:
        response = requests.post(
            API_BASE_URL, 
            json=generic_data,
            headers={'Content-Type': 'application/json'},
            timeout=10
        )
        
        # Test 1: Status Code
        status_code_ok = response.status_code == 200
        print_test_result("Status Code (200)", status_code_ok, f"Got: {response.status_code}")
        
        # Test 2: Response Structure
        try:
            data = response.json()
            has_message = 'message' in data
            has_status = 'status' in data
            has_received = 'received' in data
            
            print_test_result("Has 'message' field", has_message, f"Message: {data.get('message', 'N/A')}")
            print_test_result("Has 'status' field", has_status, f"Status: {data.get('status', 'N/A')}")
            print_test_result("Has 'received' field", has_received, f"Received data echoed back")
            
            # Test 3: Status field value
            status_success = data.get('status') == 'success'
            print_test_result("Status is 'success'", status_success, f"Status: {data.get('status')}")
            
            # Test 4: Generic message
            expected_message = 'Request processed'
            message_correct = data.get('message') == expected_message
            print_test_result("Correct generic message", message_correct, f"Message: {data.get('message')}")
            
            return status_code_ok and has_message and has_status and has_received and status_success and message_correct
            
        except json.JSONDecodeError as e:
            print_test_result("Valid JSON Response", False, f"JSON decode error: {e}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("POST Request", False, f"Request failed: {e}")
        return False

def test_error_handling():
    """Test error handling with invalid JSON"""
    print_test_header("Error Handling - Invalid JSON")
    
    try:
        # Send invalid JSON data
        response = requests.post(
            API_BASE_URL,
            data="invalid json data",
            headers={'Content-Type': 'application/json'},
            timeout=10
        )
        
        # Test 1: Error Status Code
        status_code_error = response.status_code == 500
        print_test_result("Error Status Code (500)", status_code_error, f"Got: {response.status_code}")
        
        # Test 2: Error Response Structure
        try:
            data = response.json()
            has_message = 'message' in data
            has_status = 'status' in data
            has_error = 'error' in data
            
            print_test_result("Has 'message' field", has_message, f"Message: {data.get('message', 'N/A')}")
            print_test_result("Has 'status' field", has_status, f"Status: {data.get('status', 'N/A')}")
            print_test_result("Has 'error' field", has_error, f"Error: {data.get('error', 'N/A')}")
            
            # Test 3: Status field value
            status_error = data.get('status') == 'error'
            print_test_result("Status is 'error'", status_error, f"Status: {data.get('status')}")
            
            # Test 4: Error message
            expected_message = 'Error processing request'
            message_correct = data.get('message') == expected_message
            print_test_result("Correct error message", message_correct, f"Message: {data.get('message')}")
            
            return status_code_error and has_message and has_status and has_error and status_error and message_correct
            
        except json.JSONDecodeError as e:
            print_test_result("Valid JSON Error Response", False, f"JSON decode error: {e}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("Error Handling Request", False, f"Request failed: {e}")
        return False

def test_post_empty_body():
    """Test POST endpoint with empty body"""
    print_test_header("POST Endpoint - Empty Body")
    
    try:
        response = requests.post(
            API_BASE_URL,
            json={},
            headers={'Content-Type': 'application/json'},
            timeout=10
        )
        
        # Should still return 200 with generic response
        status_code_ok = response.status_code == 200
        print_test_result("Status Code (200)", status_code_ok, f"Got: {response.status_code}")
        
        try:
            data = response.json()
            has_message = 'message' in data
            has_status = 'status' in data
            
            print_test_result("Has 'message' field", has_message, f"Message: {data.get('message', 'N/A')}")
            print_test_result("Has 'status' field", has_status, f"Status: {data.get('status', 'N/A')}")
            
            status_success = data.get('status') == 'success'
            print_test_result("Status is 'success'", status_success, f"Status: {data.get('status')}")
            
            return status_code_ok and has_message and has_status and status_success
            
        except json.JSONDecodeError as e:
            print_test_result("Valid JSON Response", False, f"JSON decode error: {e}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("Empty Body Request", False, f"Request failed: {e}")
        return False

def main():
    """Run all backend API tests"""
    print(f"Backend API Testing for Amez's CV Website")
    print(f"Testing API at: {API_BASE_URL}")
    print(f"Timestamp: {datetime.now().isoformat()}")
    
    # Track test results
    test_results = {}
    
    # Run all tests
    test_results['GET Endpoint'] = test_get_endpoint()
    test_results['POST Contact Form'] = test_post_endpoint_contact_form()
    test_results['POST Generic Data'] = test_post_endpoint_generic()
    test_results['Error Handling'] = test_error_handling()
    test_results['POST Empty Body'] = test_post_empty_body()
    
    # Summary
    print_test_header("TEST SUMMARY")
    
    passed = 0
    total = len(test_results)
    
    for test_name, result in test_results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} - {test_name}")
        if result:
            passed += 1
    
    print(f"\nOverall Result: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend API tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed. Check the details above.")
        return 1

if __name__ == "__main__":
    sys.exit(main())