const axios = require('axios');

const AVIATIONSTACK_API_KEY = process.env.AVIATIONSTACK_API_KEY;
const AVIATIONSTACK_BASE_URL = 'http://api.aviationstack.com/v1';

class FlightService {
  // Get real-time flight status
  async getFlightStatus(flightNumber) {
    try {
      const response = await axios.get(`${AVIATIONSTACK_BASE_URL}/flights`, {
        params: {
          access_key: AVIATIONSTACK_API_KEY,
          flight_iata: flightNumber
        }
      });

      if (response.data.data && response.data.data.length > 0) {
        const flight = response.data.data[0];
        return {
          success: true,
          flight: {
            number: flight.flight.iata,
            airline: flight.airline.name,
            status: flight.flight_status,
            departure: {
              airport: flight.departure.airport,
              iata: flight.departure.iata,
              scheduled: flight.departure.scheduled,
              estimated: flight.departure.estimated,
              actual: flight.departure.actual,
              gate: flight.departure.gate,
              terminal: flight.departure.terminal,
              delay: flight.departure.delay
            },
            arrival: {
              airport: flight.arrival.airport,
              iata: flight.arrival.iata,
              scheduled: flight.arrival.scheduled,
              estimated: flight.arrival.estimated,
              actual: flight.arrival.actual,
              gate: flight.arrival.gate,
              terminal: flight.arrival.terminal,
              delay: flight.arrival.delay
            }
          }
        };
      } else {
        return {
          success: false,
          error: 'Flight not found'
        };
      }
    } catch (error) {
      console.error('Flight API Error:', error.message);
      return {
        success: false,
        error: 'Unable to fetch flight data'
      };
    }
  }

  // Check if flight is delayed
  isDelayed(flightData) {
    return flightData.departure?.delay > 0 || flightData.arrival?.delay > 0;
  }

  // Get human-readable flight status
  getStatusMessage(flightData) {
    const status = flightData.status.toLowerCase();
    
    if (status === 'scheduled') return 'Flight is scheduled and on time';
    if (status === 'active') return 'Flight is currently in the air';
    if (status === 'landed') return 'Flight has landed';
    if (status === 'cancelled') return 'Flight has been cancelled';
    if (status === 'delayed') return 'Flight is delayed';
    
    return `Flight status: ${flightData.status}`;
  }
}

module.exports = new FlightService();