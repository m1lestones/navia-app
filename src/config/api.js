// API Configuration for Navia App
// Add your API keys and endpoints here

export const API_CONFIG = {
  // Base API URL
  BASE_URL: process.env.REACT_APP_API_URL || 'https://api.navia.com',
  
  // Flight APIs
  FLIGHT_API_KEY: process.env.REACT_APP_FLIGHT_API_KEY || 'your_flight_api_key_here',
  FLIGHT_API_URL: 'https://aeroapi.flightaware.com/aeroapi',
  
  // Maps API
  MAPS_API_KEY: process.env.REACT_APP_MAPS_API_KEY || 'your_maps_api_key_here',
  
  // Ride Sharing APIs
  UBER_API_KEY: process.env.REACT_APP_UBER_API_KEY || 'your_uber_api_key_here',
  LYFT_API_KEY: process.env.REACT_APP_LYFT_API_KEY || 'your_lyft_api_key_here',
};

export default API_CONFIG;
