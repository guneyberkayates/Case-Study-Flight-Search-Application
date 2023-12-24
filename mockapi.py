from flask import Flask, jsonify, request
from datetime import datetime, timedelta
from flask_cors import CORS
import random
from faker import Faker
import time

app = Flask(__name__)
CORS(app)
fake = Faker()


@app.route('/api/airports', methods=['GET'])
def get_airports():
    airports = [
   {'code': 'IST', 'name': 'Istanbul Airport', 'city': 'Istanbul'},
  {'code': 'ATL', 'name': 'Hartsfield-Jackson Atlanta International Airport', 'city': 'Atlanta'},
  {'code': 'LHR', 'name': 'Heathrow Airport', 'city': 'London'},
  {'code': 'CDG', 'name': 'Charles de Gaulle Airport', 'city': 'Paris'},
  {'code': 'FRA', 'name': 'Frankfurt Airport', 'city': 'Frankfurt'},
  {'code': 'AMS', 'name': 'Amsterdam Airport Schiphol', 'city': 'Amsterdam'},
  {'code': 'BCN', 'name': 'Barcelona-El Prat Airport', 'city': 'Barcelona'},
  {'code': 'ATH', 'name': 'Athens International Airport', 'city': 'Athens'},
  {'code': 'IST', 'name': 'Sabiha Gökçen International Airport', 'city': 'Istanbul'},
  {'code': 'ANK', 'name': 'Esenboğa Airport', 'city': 'Ankara'},
  {'code': 'AYT', 'name': 'Antalya Airport', 'city': 'Antalya'},
  {'code': 'ADB', 'name': 'Adnan Menderes Airport', 'city': 'Izmir'},
  {'code': 'DLM', 'name': 'Dalaman Airport', 'city': 'Muğla'},
  {'code': 'ASR', 'name': 'Kayseri Erkilet Airport', 'city': 'Kayseri'},
  {'code': 'BJV', 'name': 'Milas–Bodrum Airport', 'city': 'Muğla'},
  {'code': 'DIY', 'name': 'Diyarbakır Airport', 'city': 'Diyarbakır'},
  {'code': 'ERC', 'name': 'Erzincan Airport', 'city': 'Erzincan'},
  {'code': 'ISE', 'name': 'Isparta Süleyman Demirel Airport', 'city': 'Isparta'},
  {'code': 'VAN', 'name': 'Van Ferit Melen Airport', 'city': 'Van'},
  {'code': 'BCN', 'name': 'Barcelona–El Prat Airport', 'city': 'Barcelona'},
{'code': 'VIE', 'name': 'Vienna International Airport', 'city': 'Vienna'},
{'code': 'BRU', 'name': 'Brussels Airport', 'city': 'Brussels'},
{'code': 'LIS', 'name': 'Lisbon Airport', 'city': 'Lisbon'},
{'code': 'ZAG', 'name': 'Zagreb Airport', 'city': 'Zagreb'},
{'code': 'PRG', 'name': 'Václav Havel Airport Prague', 'city': 'Prague'},
{'code': 'CPH', 'name': 'Copenhagen Airport', 'city': 'Copenhagen'},
{'code': 'DUB', 'name': 'Dublin Airport', 'city': 'Dublin'},
{'code': 'MXP', 'name': 'Milan Malpensa Airport', 'city': 'Milan'},
{'code': 'GVA', 'name': 'Geneva Airport', 'city': 'Geneva'},
{'code': 'OSL', 'name': 'Oslo Airport', 'city': 'Oslo'},
{'code': 'ARN', 'name': 'Stockholm Arlanda Airport', 'city': 'Stockholm'},
{'code': 'MAN', 'name': 'Manchester Airport', 'city': 'Manchester'},
{'code': 'DUS', 'name': 'Düsseldorf Airport', 'city': 'Düsseldorf'},
{'code': 'HAM', 'name': 'Hamburg Airport', 'city': 'Hamburg'},
    
]
    query = request.args.get('query', '').lower()
    filtered_airports = []

    if query:
        filtered_airports = [
            airport for airport in airports
            if query in airport['code'].lower() or query in airport['name'].lower() or query in airport['city'].lower()
        ]
    else:
        None

    return jsonify({'airports': filtered_airports})



def generate_flight_data(departure_location, arrival_location, start_date, end_date, round_trip=False):
    airline_companies = ["Lufthansa", "Emirates", "Air France", "Qatar Airways", "Singapore Airlines", "Türk Havayolları", "Atlasjet", "Pegasus"]
    airline = random.choice(airline_companies)

    departure_time = fake.date_time_between_dates(datetime.strptime(start_date, '%Y-%m-%d'),
                                                  datetime.strptime(end_date, '%Y-%m-%d'))

    arrival_time = departure_time + timedelta(hours=random.randint(1, 12), minutes=random.randint(0, 59))

    flight_duration = arrival_time - departure_time
    price = round(random.uniform(100, 1000), 2)

    return {
        'departure_location': departure_location,
        'arrival_location': arrival_location,
        'departure_time': departure_time.isoformat(),
        'arrival_time': arrival_time.isoformat(),
        'airline': airline,
        'flight_duration': str(flight_duration),
        'price': price
    }
def generate_flight_data2(departure_location, arrival_location, start_date, end_date=None, round_trip=False):
    airline_companies = ["Lufthansa", "Emirates", "Air France", "Qatar Airways", "Singapore Airlines", "Türk Havayolları", "Atlasjet", "Pegasus"]
    airline = random.choice(airline_companies)

    departure_time = fake.date_time_between_dates(datetime.strptime(start_date, '%Y-%m-%d'),
                                                  datetime.strptime(end_date, '%Y-%m-%d')) if end_date else fake.date_time_between_dates(datetime.strptime(start_date, '%Y-%m-%d'), datetime.strptime(start_date, '%Y-%m-%d'))

    arrival_time = departure_time + timedelta(hours=random.randint(1, 12), minutes=random.randint(0, 59))

    flight_duration = arrival_time - departure_time
    price = round(random.uniform(100, 1000), 2)

    return {
        'departure_location': departure_location,
        'arrival_location': arrival_location,
        'departure_time': departure_time.isoformat(),
        'arrival_time': arrival_time.isoformat(),
        'airline': airline,
        'flight_duration': str(flight_duration),
        'price': price
    }


@app.route('/api/flights', methods=['GET'])
def get_flights():
    departure_location = request.args.get('departure_location')
    arrival_location = request.args.get('arrival_location')
    start_date = request.args.get('start_date')

    if not all([departure_location, arrival_location, start_date]):
        return jsonify({'error': 'Please provide all required parameters'})

    num_flights = 10

    flights = [generate_flight_data2(departure_location, arrival_location, start_date, round_trip=False) for _ in
               range(num_flights)]
    time.sleep(0.25)
    return jsonify({'flights': flights})


@app.route('/api/roundtripflights', methods=['GET'])
def get_round_trip_flights():
    departure_location = request.args.get('departure_location')
    arrival_location = request.args.get('arrival_location')
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')

    if not all([departure_location, arrival_location, start_date, end_date]):
        return jsonify({'error': 'Please provide all required parameters'})

    num_round_trip_flights = 10

    round_trip_flights = [
        generate_flight_data(departure_location, arrival_location, start_date, end_date, round_trip=True)
        for _ in range(num_round_trip_flights)
    ] + [
        generate_flight_data(arrival_location, departure_location, end_date, end_date, round_trip=True)
        for _ in range(num_round_trip_flights)
    ]
    time.sleep(0.25)
    return jsonify({'flights': round_trip_flights})



if __name__ == '__main__':
    app.run(debug=True)
