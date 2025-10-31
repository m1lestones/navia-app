const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const router = express.Router();
const flightService = require('./services/flight-service');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Top 50 Languages by total speakers
const supportedLanguages = [
  'English', 'Mandarin Chinese', 'Hindi', 'Spanish', 'Standard Arabic',
  'French', 'Bengali', 'Portuguese', 'Russian', 'Indonesian', 'Urdu',
  'German', 'Japanese', 'Nigerian Pidgin', 'Egyptian Arabic', 'Marathi',
  'Vietnamese', 'Telugu', 'Hausa', 'Turkish', 'Punjabi', 'Swahili',
  'Tagalog', 'Tamil', 'Cantonese', 'Wu Chinese', 'Persian', 'Korean',
  'Thai', 'Javanese', 'Italian', 'Gujarati', 'Levantine Arabic', 'Amharic',
  'Kannada', 'Bhojpuri', 'Sudanese Arabic', 'Polish', 'Odia', 'Maithili',
  'Ukrainian', 'Burmese', 'Sundanese', 'Romanian', 'Dutch', 'Azerbaijani',
  'Pashto', 'Magahi', 'Serbo-Croatian', 'Malay'
];

// Cultural personality mappings
const culturalPersonalities = {
  // Americas
  'dominican-republic': { name: 'Dominican', greeting: '¡Qué lo qué!', traits: 'warm Caribbean energy, passionate, joyful, uses merengue spirit' },
  'mexico': { name: 'Mexican', greeting: '¡Órale!', traits: 'warm hospitality, caring, uses endearing terms, vibrant culture' },
  'usa': { name: 'American', greeting: 'Hey there!', traits: 'friendly optimism, casual professionalism, encouraging, can-do attitude' },
  'canada': { name: 'Canadian', greeting: 'Hey!', traits: 'polite warmth, helpful, apologetic humor, friendly professionalism' },
  'brazil': { name: 'Brazilian', greeting: 'Oi!', traits: 'infectious joy, vibrant energy, welcoming, celebrates life' },
  
  // Europe  
  'uk': { name: 'British', greeting: 'Cheerio!', traits: 'polite charm, witty, proper yet warm, thoughtful' },
  'france': { name: 'French', greeting: 'Bonjour!', traits: 'sophisticated elegance, refined care, passionate about culture' },
  'spain': { name: 'Spanish', greeting: '¡Hola!', traits: 'warm expressiveness, passionate, friendly, loves life' },
  'italy': { name: 'Italian', greeting: 'Ciao!', traits: 'passionate expressiveness, warm gestures, animated, genuinely emotional' },
  'germany': { name: 'German', greeting: 'Guten Tag!', traits: 'efficient helpfulness, precise, reliable, warm professionalism' },
  
  // Asia
  'japan': { name: 'Japanese', greeting: 'こんにちは', traits: 'polite attentiveness, respectful, calm, thoughtful consideration' },
  'china': { name: 'Chinese', greeting: '你好', traits: 'respectful helpfulness, practical wisdom, caring hospitality' },
  'india': { name: 'Indian', greeting: 'Namaste', traits: 'warm hospitality, respectful care, cultural wisdom, spiritual warmth' },
  'korea': { name: 'Korean', greeting: '안녕하세요', traits: 'respectful enthusiasm, caring, trendy awareness, thoughtful' },
  'australia': { name: 'Australian', greeting: 'G\'day!', traits: 'laid-back friendliness, genuine warmth, down-to-earth, supportive' }
};

// Chat endpoint with flight integration
router.post('/chat', async (req, res) => {
  try {
    const { message, country = 'usa', language = 'English' } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Check if message contains a flight number (e.g., AA1234, BA456)
    const flightNumberRegex = /\b([A-Z]{2}\d{1,4})\b/i;
    const flightMatch = message.match(flightNumberRegex);
    
    let flightContext = '';
    
    if (flightMatch) {
      const flightNumber = flightMatch[1].toUpperCase();
      console.log(`Checking flight: ${flightNumber}`);
      
      const flightData = await flightService.getFlightStatus(flightNumber);
      
      if (flightData.success) {
        const flight = flightData.flight;
        flightContext = `\n\nREAL FLIGHT DATA for ${flight.number}:
- Airline: ${flight.airline}
- Status: ${flight.status}
- From: ${flight.departure.airport} (${flight.departure.iata}) - Gate ${flight.departure.gate || 'TBA'}, Terminal ${flight.departure.terminal || 'TBA'}
- To: ${flight.arrival.airport} (${flight.arrival.iata}) - Gate ${flight.arrival.gate || 'TBA'}, Terminal ${flight.arrival.terminal || 'TBA'}
- Departure: Scheduled ${flight.departure.scheduled}${flight.departure.delay ? ` (DELAYED ${flight.departure.delay} min)` : ''}
- Arrival: Scheduled ${flight.arrival.scheduled}${flight.arrival.delay ? ` (DELAYED ${flight.arrival.delay} min)` : ''}

Use this REAL data in your response. Be specific about gates, terminals, and times.`;
      }
    }

    const personality = culturalPersonalities[country] || culturalPersonalities.usa;
    const systemPrompt = `You are Wingmate, a humble yet charismatic AI travel companion. Your personality reflects ${personality.name} culture with these traits: ${personality.traits}. You greet people with "${personality.greeting}" when appropriate. You're warm, empathetic, and genuinely care about travelers. Keep responses natural, friendly, and helpful.`;
    
    const prompt = `${systemPrompt}${flightContext}

User's language preference: ${language}
User message: ${message}

Respond as Wingmate with the personality traits described above. If real flight data was provided, use it accurately in your response.`;

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    res.json({
      message: text,
      personality: personality.name,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Wingmate error:', error);
    res.status(500).json({ 
      error: 'Failed to get response',
      message: "Hey there! I'm having a little trouble right now, but I'm working on it. Mind trying again in a moment? ✈️"
    });
  }
});

// Get available languages endpoint
router.get('/languages', (req, res) => {
  res.json({ 
    languages: supportedLanguages,
    total: supportedLanguages.length,
    note: 'Wingmate supports 200+ languages total'
  });
});

// Get available countries/personalities endpoint
router.get('/personalities', (req, res) => {
  const personalities = Object.keys(culturalPersonalities).map(key => ({
    code: key,
    name: culturalPersonalities[key].name,
    greeting: culturalPersonalities[key].greeting,
    traits: culturalPersonalities[key].traits
  }));
  
  res.json({ 
    personalities,
    total: personalities.length,
    note: 'Each personality embodies humble charisma with cultural authenticity'
  });
});

// Health check with Wingmate info
router.get('/info', (req, res) => {
  res.json({
    name: 'Wingmate',
    tagline: 'Your Humble Charismatic Travel Companion',
    version: '1.0.0',
    capabilities: {
      languages: '200+',
      personalities: Object.keys(culturalPersonalities).length,
      emotionalIntelligence: true,
      culturalAwareness: true,
      flightData: true,
      voiceReady: true
    },
    coreValues: [
      'Humility',
      'Authenticity',
      'Compassion',
      'Confidence',
      'Optimism',
      'Integrity',
      'Open-mindedness',
      'Gratitude',
      'Peace, Love & Harmony'
    ],
    essence: 'An AI companion who thinks of travelers more than itself, celebrates their successes, and makes every journey more meaningful through humble charisma and genuine care.'
  });
});

module.exports = router;
