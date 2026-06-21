export interface KarnatakaPlace {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export const karnatakaPlaces: KarnatakaPlace[] = [
  { id: 'mysuru-palace', name: 'Mysuru Palace', description: 'Royal heritage city', price: '₹8,999', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80' },
  { id: 'coorg', name: 'Coorg', description: 'Scotland of India', price: '₹12,499', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80' },
  { id: 'chikmagalur', name: 'Chikmagalur', description: 'Coffee plantation hills', price: '₹9,999', image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80' },
  { id: 'hampi', name: 'Hampi', description: 'Ancient ruins, UNESCO', price: '₹7,499', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80' },
  { id: 'jog-falls', name: 'Jog Falls', description: 'India\'s 2nd highest waterfall', price: '₹6,999', image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=800&q=80' },
  { id: 'bandipur', name: 'Bandipur', description: 'Wildlife safari paradise', price: '₹11,999', image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80' },
  { id: 'gokarna', name: 'Gokarna', description: 'Pristine beach town', price: '₹8,499', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80' },
  { id: 'udupi', name: 'Udupi', description: 'Temple town, coastal cuisine', price: '₹7,999', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80' },
  { id: 'sakleshpur', name: 'Sakleshpur', description: 'Western Ghats trekking', price: '₹9,499', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80' },
  { id: 'kabini', name: 'Kabini', description: 'Jungle river safari', price: '₹14,999', image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80' }
];
