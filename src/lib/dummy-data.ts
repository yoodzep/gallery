// Dummy data for development - uses Unsplash images
// Replace with Sanity data in production

export interface Photo {
  _id: string;
  title: string;
  slug: string;
  image: string;
  width: number;
  height: number;
  description?: string;
  camera?: string;
  lens?: string;
  aperture?: string;
  shutterSpeed?: string;
  iso?: string;
  location?: string;
  dateTaken?: string;
  tags?: string[];
  album?: {
    title: string;
    slug: string;
  };
}

export interface Album {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  coverImage: string;
  photoCount: number;
  category: string;
  date?: string;
  featured?: boolean;
  photos?: Photo[];
}

export interface ClientGallery {
  _id: string;
  clientName: string;
  slug: string;
  eventName: string;
  eventDate: string;
  coverImage: string;
  password: string;
  downloadEnabled: boolean;
  expiresAt?: string;
  message?: string;
  photos?: Photo[];
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  photographerName: string;
  bio: string;
  profileImage: string;
  email: string;
  phone?: string;
  location: string;
  social: {
    instagram?: string;
    twitter?: string;
    behance?: string;
    flickr?: string;
  };
}

// Site Settings
export const dummySiteSettings: SiteSettings = {
  siteName: 'Lumina Studios',
  tagline: 'Capturing moments, creating memories',
  photographerName: 'Alexandra Chen',
  bio: 'Award-winning photographer specialising in landscape, portrait, and event photography. With over 10 years of experience, I bring a unique perspective to every shoot, focusing on natural light and authentic moments.',
  profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  email: 'hello@luminastudios.com',
  phone: '+61 400 123 456',
  location: 'Sydney, Australia',
  social: {
    instagram: 'https://instagram.com/luminastudios',
    twitter: 'https://twitter.com/luminastudios',
    behance: 'https://behance.net/luminastudios',
  },
};

// Photos
export const dummyPhotos: Photo[] = [
  // Landscape Photos
  {
    _id: 'photo-1',
    title: 'Mountain Sunrise',
    slug: 'mountain-sunrise',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    description: 'Golden hour light illuminating the peaks of the Swiss Alps',
    camera: 'Sony A7R IV',
    lens: '24-70mm f/2.8',
    aperture: 'f/11',
    shutterSpeed: '1/125s',
    iso: '100',
    location: 'Swiss Alps, Switzerland',
    dateTaken: '2024-03-15',
    tags: ['landscape', 'mountains', 'sunrise', 'switzerland'],
    album: { title: 'Alpine Dreams', slug: 'alpine-dreams' },
  },
  {
    _id: 'photo-2',
    title: 'Ocean Waves',
    slug: 'ocean-waves',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    description: 'Powerful waves crashing against the rocky coastline at sunset',
    camera: 'Sony A7R IV',
    lens: '16-35mm f/2.8',
    aperture: 'f/8',
    shutterSpeed: '1/500s',
    iso: '200',
    location: 'Great Ocean Road, Australia',
    dateTaken: '2024-02-20',
    tags: ['landscape', 'ocean', 'waves', 'australia'],
    album: { title: 'Coastal Moods', slug: 'coastal-moods' },
  },
  {
    _id: 'photo-3',
    title: 'Forest Mist',
    slug: 'forest-mist',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    description: 'Early morning mist weaving through ancient redwood trees',
    camera: 'Sony A7R IV',
    lens: '24-70mm f/2.8',
    aperture: 'f/5.6',
    shutterSpeed: '1/60s',
    iso: '400',
    location: 'Redwood National Park, USA',
    dateTaken: '2024-01-10',
    tags: ['landscape', 'forest', 'mist', 'nature'],
    album: { title: 'Into the Wild', slug: 'into-the-wild' },
  },
  {
    _id: 'photo-4',
    title: 'Desert Dunes',
    slug: 'desert-dunes',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    description: 'Wind-sculpted sand dunes under a brilliant blue sky',
    camera: 'Sony A7R IV',
    lens: '70-200mm f/2.8',
    aperture: 'f/11',
    shutterSpeed: '1/250s',
    iso: '100',
    location: 'Sahara Desert, Morocco',
    dateTaken: '2023-11-05',
    tags: ['landscape', 'desert', 'dunes', 'morocco'],
    album: { title: 'Desert Solitude', slug: 'desert-solitude' },
  },
  {
    _id: 'photo-5',
    title: 'Northern Lights',
    slug: 'northern-lights',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    description: 'Dancing aurora borealis over a frozen lake',
    camera: 'Sony A7S III',
    lens: '14mm f/1.8',
    aperture: 'f/1.8',
    shutterSpeed: '15s',
    iso: '3200',
    location: 'Tromsø, Norway',
    dateTaken: '2024-01-22',
    tags: ['landscape', 'aurora', 'night', 'norway'],
    album: { title: 'Nordic Nights', slug: 'nordic-nights' },
  },
  // Portrait Photos
  {
    _id: 'photo-6',
    title: 'Golden Hour Portrait',
    slug: 'golden-hour-portrait',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop',
    width: 800,
    height: 1200,
    description: 'Natural light portrait during golden hour',
    camera: 'Sony A7R IV',
    lens: '85mm f/1.4',
    aperture: 'f/1.8',
    shutterSpeed: '1/500s',
    iso: '100',
    location: 'Sydney, Australia',
    dateTaken: '2024-03-01',
    tags: ['portrait', 'golden hour', 'natural light'],
    album: { title: 'Faces & Stories', slug: 'faces-stories' },
  },
  {
    _id: 'photo-7',
    title: 'Urban Portrait',
    slug: 'urban-portrait',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop',
    width: 800,
    height: 1200,
    description: 'Street style portrait in the city',
    camera: 'Sony A7R IV',
    lens: '35mm f/1.4',
    aperture: 'f/2',
    shutterSpeed: '1/250s',
    iso: '200',
    location: 'Melbourne, Australia',
    dateTaken: '2024-02-15',
    tags: ['portrait', 'urban', 'street'],
    album: { title: 'Faces & Stories', slug: 'faces-stories' },
  },
  {
    _id: 'photo-8',
    title: 'Studio Portrait',
    slug: 'studio-portrait',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1200&fit=crop',
    width: 800,
    height: 1200,
    description: 'Professional studio portrait with dramatic lighting',
    camera: 'Sony A7R IV',
    lens: '85mm f/1.4',
    aperture: 'f/8',
    shutterSpeed: '1/200s',
    iso: '100',
    location: 'Studio',
    dateTaken: '2024-02-28',
    tags: ['portrait', 'studio', 'dramatic'],
    album: { title: 'Faces & Stories', slug: 'faces-stories' },
  },
  // Street Photos
  {
    _id: 'photo-9',
    title: 'Tokyo Nights',
    slug: 'tokyo-nights',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    description: 'Neon-lit streets of Shibuya at night',
    camera: 'Sony A7S III',
    lens: '35mm f/1.4',
    aperture: 'f/1.4',
    shutterSpeed: '1/125s',
    iso: '1600',
    location: 'Tokyo, Japan',
    dateTaken: '2023-12-10',
    tags: ['street', 'night', 'tokyo', 'urban'],
    album: { title: 'Urban Pulse', slug: 'urban-pulse' },
  },
  {
    _id: 'photo-10',
    title: 'Morning Market',
    slug: 'morning-market',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    description: 'Bustling morning market scene',
    camera: 'Leica Q2',
    lens: '28mm f/1.7',
    aperture: 'f/4',
    shutterSpeed: '1/250s',
    iso: '400',
    location: 'Bangkok, Thailand',
    dateTaken: '2023-10-18',
    tags: ['street', 'market', 'travel', 'asia'],
    album: { title: 'Urban Pulse', slug: 'urban-pulse' },
  },
  {
    _id: 'photo-11',
    title: 'Rainy Reflections',
    slug: 'rainy-reflections',
    image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    description: 'City lights reflected in rain-soaked streets',
    camera: 'Sony A7S III',
    lens: '50mm f/1.2',
    aperture: 'f/1.4',
    shutterSpeed: '1/60s',
    iso: '3200',
    location: 'New York City, USA',
    dateTaken: '2023-11-22',
    tags: ['street', 'night', 'rain', 'reflections'],
    album: { title: 'Urban Pulse', slug: 'urban-pulse' },
  },
  // Architecture
  {
    _id: 'photo-12',
    title: 'Modern Lines',
    slug: 'modern-lines',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    description: 'Abstract architectural patterns in modern building',
    camera: 'Sony A7R IV',
    lens: '24mm f/1.4',
    aperture: 'f/8',
    shutterSpeed: '1/250s',
    iso: '100',
    location: 'Dubai, UAE',
    dateTaken: '2023-09-15',
    tags: ['architecture', 'modern', 'abstract', 'lines'],
    album: { title: 'Built Forms', slug: 'built-forms' },
  },
  {
    _id: 'photo-13',
    title: 'Gothic Cathedral',
    slug: 'gothic-cathedral',
    image: 'https://images.unsplash.com/photo-1548248823-ce16a73b6d49?w=800&h=1200&fit=crop',
    width: 800,
    height: 1200,
    description: 'Interior of a historic Gothic cathedral',
    camera: 'Sony A7R IV',
    lens: '16-35mm f/2.8',
    aperture: 'f/5.6',
    shutterSpeed: '1/30s',
    iso: '800',
    location: 'Barcelona, Spain',
    dateTaken: '2023-08-20',
    tags: ['architecture', 'gothic', 'cathedral', 'historic'],
    album: { title: 'Built Forms', slug: 'built-forms' },
  },
  // Nature Close-ups
  {
    _id: 'photo-14',
    title: 'Dewdrop Macro',
    slug: 'dewdrop-macro',
    image: 'https://images.unsplash.com/photo-1518882605630-8996a190a41a?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    description: 'Morning dew on a delicate flower petal',
    camera: 'Sony A7R IV',
    lens: '90mm Macro f/2.8',
    aperture: 'f/4',
    shutterSpeed: '1/250s',
    iso: '200',
    location: 'Sydney, Australia',
    dateTaken: '2024-03-08',
    tags: ['macro', 'nature', 'flower', 'dew'],
    album: { title: 'Tiny Worlds', slug: 'tiny-worlds' },
  },
  {
    _id: 'photo-15',
    title: 'Butterfly Wings',
    slug: 'butterfly-wings',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    description: 'Detailed shot of butterfly wing patterns',
    camera: 'Sony A7R IV',
    lens: '90mm Macro f/2.8',
    aperture: 'f/5.6',
    shutterSpeed: '1/500s',
    iso: '400',
    location: 'Blue Mountains, Australia',
    dateTaken: '2024-02-10',
    tags: ['macro', 'nature', 'butterfly', 'wildlife'],
    album: { title: 'Tiny Worlds', slug: 'tiny-worlds' },
  },
  // More landscape variety
  {
    _id: 'photo-16',
    title: 'Waterfall Cascade',
    slug: 'waterfall-cascade',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=1200&fit=crop',
    width: 800,
    height: 1200,
    description: 'Long exposure of cascading waterfall',
    camera: 'Sony A7R IV',
    lens: '24-70mm f/2.8',
    aperture: 'f/16',
    shutterSpeed: '2s',
    iso: '50',
    location: 'Iceland',
    dateTaken: '2023-07-15',
    tags: ['landscape', 'waterfall', 'long exposure', 'iceland'],
    album: { title: 'Water & Light', slug: 'water-light' },
  },
  {
    _id: 'photo-17',
    title: 'Lavender Fields',
    slug: 'lavender-fields',
    image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    description: 'Endless rows of lavender under sunset sky',
    camera: 'Sony A7R IV',
    lens: '24-70mm f/2.8',
    aperture: 'f/8',
    shutterSpeed: '1/125s',
    iso: '100',
    location: 'Provence, France',
    dateTaken: '2023-06-25',
    tags: ['landscape', 'lavender', 'sunset', 'france'],
    album: { title: 'European Summer', slug: 'european-summer' },
  },
  {
    _id: 'photo-18',
    title: 'Starry Night',
    slug: 'starry-night',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    description: 'Milky Way over mountain landscape',
    camera: 'Sony A7S III',
    lens: '14mm f/1.8',
    aperture: 'f/1.8',
    shutterSpeed: '25s',
    iso: '6400',
    location: 'New Zealand',
    dateTaken: '2023-05-12',
    tags: ['landscape', 'astrophotography', 'milky way', 'night'],
    album: { title: 'Nordic Nights', slug: 'nordic-nights' },
  },
];

// Albums
export const dummyAlbums: Album[] = [
  {
    _id: 'album-1',
    title: 'Alpine Dreams',
    slug: 'alpine-dreams',
    description: 'A journey through the majestic peaks and valleys of the European Alps, capturing the raw beauty of mountain landscapes in all seasons.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    photoCount: 24,
    category: 'Landscape',
    date: '2024-03',
    featured: true,
    photos: dummyPhotos.filter(p => p.album?.slug === 'alpine-dreams'),
  },
  {
    _id: 'album-2',
    title: 'Coastal Moods',
    slug: 'coastal-moods',
    description: 'Exploring the dramatic Australian coastline, from serene beaches to powerful ocean storms.',
    coverImage: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=600&fit=crop',
    photoCount: 32,
    category: 'Landscape',
    date: '2024-02',
    featured: true,
    photos: dummyPhotos.filter(p => p.album?.slug === 'coastal-moods'),
  },
  {
    _id: 'album-3',
    title: 'Faces & Stories',
    slug: 'faces-stories',
    description: 'Portrait collection capturing authentic emotions and unique personalities.',
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop',
    photoCount: 18,
    category: 'Portrait',
    date: '2024-03',
    featured: true,
    photos: dummyPhotos.filter(p => p.album?.slug === 'faces-stories'),
  },
  {
    _id: 'album-4',
    title: 'Urban Pulse',
    slug: 'urban-pulse',
    description: 'Street photography from cities around the world, documenting life in urban environments.',
    coverImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
    photoCount: 45,
    category: 'Street',
    date: '2024-01',
    featured: false,
    photos: dummyPhotos.filter(p => p.album?.slug === 'urban-pulse'),
  },
  {
    _id: 'album-5',
    title: 'Into the Wild',
    slug: 'into-the-wild',
    description: 'Nature photography celebrating the untouched wilderness and its incredible diversity.',
    coverImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop',
    photoCount: 28,
    category: 'Nature',
    date: '2024-01',
    featured: false,
    photos: dummyPhotos.filter(p => p.album?.slug === 'into-the-wild'),
  },
  {
    _id: 'album-6',
    title: 'Nordic Nights',
    slug: 'nordic-nights',
    description: 'Capturing the magic of the northern lights and starry skies in Scandinavia.',
    coverImage: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop',
    photoCount: 15,
    category: 'Astrophotography',
    date: '2024-01',
    featured: true,
    photos: dummyPhotos.filter(p => p.album?.slug === 'nordic-nights'),
  },
  {
    _id: 'album-7',
    title: 'Built Forms',
    slug: 'built-forms',
    description: 'Architectural photography exploring modern and historical structures.',
    coverImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop',
    photoCount: 22,
    category: 'Architecture',
    date: '2023-09',
    featured: false,
    photos: dummyPhotos.filter(p => p.album?.slug === 'built-forms'),
  },
  {
    _id: 'album-8',
    title: 'Tiny Worlds',
    slug: 'tiny-worlds',
    description: 'Macro photography revealing the hidden beauty in small details of nature.',
    coverImage: 'https://images.unsplash.com/photo-1518882605630-8996a190a41a?w=800&h=600&fit=crop',
    photoCount: 20,
    category: 'Macro',
    date: '2024-03',
    featured: false,
    photos: dummyPhotos.filter(p => p.album?.slug === 'tiny-worlds'),
  },
  {
    _id: 'album-9',
    title: 'Desert Solitude',
    slug: 'desert-solitude',
    description: 'The stark beauty and endless horizons of desert landscapes.',
    coverImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop',
    photoCount: 16,
    category: 'Landscape',
    date: '2023-11',
    featured: false,
    photos: dummyPhotos.filter(p => p.album?.slug === 'desert-solitude'),
  },
];

// Client Galleries
export const dummyClientGalleries: ClientGallery[] = [
  {
    _id: 'client-1',
    clientName: 'Sarah & James',
    slug: 'sarah-james-wedding',
    eventName: 'Wedding Ceremony',
    eventDate: '2024-02-14',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    password: 'love2024',
    downloadEnabled: true,
    expiresAt: '2024-06-14',
    message: 'Congratulations on your beautiful day! Here are your wedding photos. Feel free to download and share with family.',
    photos: [
      {
        _id: 'client-photo-1',
        title: 'First Dance',
        slug: 'first-dance',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
        width: 1200,
        height: 800,
      },
      {
        _id: 'client-photo-2',
        title: 'Ring Exchange',
        slug: 'ring-exchange',
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop',
        width: 1200,
        height: 800,
      },
      {
        _id: 'client-photo-3',
        title: 'Bridal Portrait',
        slug: 'bridal-portrait',
        image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=800&h=1200&fit=crop',
        width: 800,
        height: 1200,
      },
      {
        _id: 'client-photo-4',
        title: 'Ceremony',
        slug: 'ceremony',
        image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=800&fit=crop',
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    _id: 'client-2',
    clientName: 'TechStart Corp',
    slug: 'techstart-launch',
    eventName: 'Product Launch Event',
    eventDate: '2024-03-01',
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    password: 'techstart2024',
    downloadEnabled: true,
    message: 'Thank you for having us at your launch event! Here are the highlights.',
    photos: [
      {
        _id: 'client-photo-5',
        title: 'Keynote Speaker',
        slug: 'keynote-speaker',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop',
        width: 1200,
        height: 800,
      },
      {
        _id: 'client-photo-6',
        title: 'Product Demo',
        slug: 'product-demo',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=800&fit=crop',
        width: 1200,
        height: 800,
      },
      {
        _id: 'client-photo-7',
        title: 'Networking',
        slug: 'networking',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=800&fit=crop',
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    _id: 'client-3',
    clientName: 'Emma Thompson',
    slug: 'emma-portrait-session',
    eventName: 'Portrait Session',
    eventDate: '2024-03-10',
    coverImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop',
    password: 'emma2024',
    downloadEnabled: true,
    message: 'Hi Emma! It was wonderful working with you. Here are your portraits - hope you love them!',
    photos: [
      {
        _id: 'client-photo-8',
        title: 'Natural Light',
        slug: 'natural-light',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1200&fit=crop',
        width: 800,
        height: 1200,
      },
      {
        _id: 'client-photo-9',
        title: 'Studio Shot',
        slug: 'studio-shot',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1200&fit=crop',
        width: 800,
        height: 1200,
      },
    ],
  },
];

// Helper functions
export function getAlbumBySlug(slug: string): Album | undefined {
  return dummyAlbums.find(album => album.slug === slug);
}

export function getPhotosByAlbum(albumSlug: string): Photo[] {
  return dummyPhotos.filter(photo => photo.album?.slug === albumSlug);
}

export function getClientGalleryBySlug(slug: string): ClientGallery | undefined {
  return dummyClientGalleries.find(gallery => gallery.slug === slug);
}

export function getFeaturedAlbums(): Album[] {
  return dummyAlbums.filter(album => album.featured);
}

export function getAllCategories(): string[] {
  const categories = new Set(dummyAlbums.map(album => album.category));
  return Array.from(categories).sort();
}

export function getAlbumsByCategory(category: string): Album[] {
  return dummyAlbums.filter(album => album.category === category);
}
