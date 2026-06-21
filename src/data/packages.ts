export interface IndianPackage {
  id: string;
  name: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
}

export const indianPackages: IndianPackage[] = [
  { id: 'golden-triangle', name: 'Golden Triangle', duration: '6 Days', price: '₹24,999', rating: 4.8, image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80' },
  { id: 'kashmir-paradise', name: 'Kashmir Paradise', duration: '7 Days', price: '₹29,999', rating: 4.9, image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80' },
  { id: 'kerala-backwaters', name: 'Kerala Backwaters', duration: '5 Days', price: '₹19,999', rating: 4.7, image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80' },
  { id: 'rajasthan-heritage', name: 'Rajasthan Heritage', duration: '8 Days', price: '₹32,999', rating: 4.8, image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80' },
  { id: 'himalayan-adventure', name: 'Himalayan Adventure', duration: '10 Days', price: '₹34,999', rating: 4.9, image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80' },
  { id: 'goa-escape', name: 'Goa Beach Escape', duration: '4 Days', price: '₹14,999', rating: 4.6, image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80' },
  { id: 'northeast-explorer', name: 'Northeast Explorer', duration: '9 Days', price: '₹27,999', rating: 4.8, image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80' },
  { id: 'spiritual-varanasi', name: 'Spiritual Varanasi', duration: '4 Days', price: '₹12,999', rating: 4.7, image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80' },
  { id: 'andaman-islands', name: 'Andaman Islands', duration: '6 Days', price: '₹35,999', rating: 4.9, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80' }
];
