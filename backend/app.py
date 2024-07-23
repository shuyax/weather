from flask import Flask, request, jsonify
import requests
import os


app = Flask(__name__)


@app.route("/data", methods=['GET', 'POST'])
def fetch_data():
    location = request.args.get('location')
    print(location)
    if not location:
        return jsonify({'error': 'Location parameter is missing'}), 400
    weather_api_key = os.getenv('WEATHER_API_KEY')
    if not weather_api_key:
        return jsonify({'error': 'API key is missing'}), 500
    response = requests.get(f'http://api.weatherapi.com/v1/forecast.json?key={weather_api_key}&q={location}&days=3&aqi=no&alerts=no')
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Failed to fetch data from the API'}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)

