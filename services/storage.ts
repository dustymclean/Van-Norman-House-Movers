
import { GalleryItem } from '../types';

/**
 * PRODUCTION DATABASE GUIDE:
 * To connect a real database (like Supabase):
 * 1. Run: npm install @supabase/supabase-js
 * 2. Import: import { createClient } from '@supabase/supabase-js'
 * 3. Initialize: const supabase = createClient('YOUR_URL', 'YOUR_KEY')
 * 4. Replace the functions below with Supabase calls.
 */

const STORAGE_KEY = 'vannorman_gallery_db';

const DEFAULT_PHOTOS: GalleryItem[] = [
  {
    id: '1',
    title: "Historic Victorian Relocation",
    location: "Natchez, MS",
    description: "2-story historic residence moved 15 miles to preserve architectural heritage.",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    category: 'moving',
    timestamp: Date.now()
  },
  {
    id: '2',
    title: "Flood Zone Elevation",
    location: "Slidell, LA",
    description: "Raising a residential structure 8 feet to meet new FEMA flood requirements.",
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    category: 'raising',
    timestamp: Date.now()
  }
];

export const StorageService = {
  // GET ALL PHOTOS
  getGallery: async (): Promise<GalleryItem[]> => {
    // SUPABASE VERSION:
    // const { data } = await supabase.from('gallery').select('*').order('timestamp', { ascending: false });
    // return data;

    await new Promise(resolve => setTimeout(resolve, 300));
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PHOTOS));
      return DEFAULT_PHOTOS;
    }
    return JSON.parse(saved);
  },

  // SAVE NEW PHOTO
  saveItem: async (item: Omit<GalleryItem, 'id' | 'timestamp'>): Promise<GalleryItem[]> => {
    // SUPABASE VERSION:
    // await supabase.from('gallery').insert([item]);
    // return StorageService.getGallery();

    await new Promise(resolve => setTimeout(resolve, 500));
    const current = await StorageService.getGallery();
    const newItem: GalleryItem = {
      ...item,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now()
    };
    const updated = [newItem, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  // DELETE PHOTO
  deleteItem: async (id: string): Promise<GalleryItem[]> => {
    // SUPABASE VERSION:
    // await supabase.from('gallery').delete().eq('id', id);
    // return StorageService.getGallery();

    await new Promise(resolve => setTimeout(resolve, 400));
    const current = await StorageService.getGallery();
    const updated = current.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  }
};
