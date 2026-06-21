export interface Destination {
  id: string;
  name: string;
  lat: number;
  lng: number;
  country: string;
  description: string;
}

export const destinations: Destination[] = [
  { id: 'bengaluru', name: 'Bengaluru', lat: 12.9716, lng: 77.5946, country: 'India', description: 'Silicon Valley of India' },
  { id: 'mysuru', name: 'Mysuru', lat: 12.2958, lng: 76.6394, country: 'India', description: 'Royal heritage city' },
  { id: 'coorg', name: 'Coorg', lat: 12.3375, lng: 75.8069, country: 'India', description: 'Scotland of India' },
  { id: 'chikmagalur', name: 'Chikmagalur', lat: 13.3161, lng: 75.7720, country: 'India', description: 'Coffee plantation hills' },
  { id: 'hampi', name: 'Hampi', lat: 15.3350, lng: 76.4600, country: 'India', description: 'Ancient ruins, UNESCO' },
  { id: 'gokarna', name: 'Gokarna', lat: 14.5398, lng: 74.3188, country: 'India', description: 'Pristine beach town' },
  { id: 'jogfalls', name: 'Jog Falls', lat: 14.2295, lng: 74.8080, country: 'India', description: 'India\'s 2nd highest waterfall' },
  { id: 'goa', name: 'Goa', lat: 15.2993, lng: 74.1240, country: 'India', description: 'Beach paradise' },
  { id: 'kashmir', name: 'Kashmir', lat: 33.7782, lng: 76.5762, country: 'India', description: 'Paradise on Earth' },
  { id: 'kerala', name: 'Kerala', lat: 10.8505, lng: 76.2711, country: 'India', description: 'God\'s Own Country' },
  { id: 'dubai', name: 'Dubai', lat: 25.2048, lng: 55.2708, country: 'UAE', description: 'City of Gold' },
  { id: 'paris', name: 'Paris', lat: 48.8566, lng: 2.3522, country: 'France', description: 'City of Love' },
  { id: 'bali', name: 'Bali', lat: -8.4095, lng: 115.1889, country: 'Indonesia', description: 'Island of the Gods' },
  { id: 'tokyo', name: 'Tokyo', lat: 35.6762, lng: 139.6503, country: 'Japan', description: 'Neon cyber-city' },
];
