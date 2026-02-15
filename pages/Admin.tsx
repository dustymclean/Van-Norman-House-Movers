
import React, { useState, useEffect } from 'react';
import { StorageService } from '../services/storage';
import { GalleryItem } from '../types';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    url: '',
    category: 'moving' as const
  });

  useEffect(() => {
    // Check if previously logged in (session storage)
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadGallery();
    }
  }, [isAuthenticated]);

  const loadGallery = async () => {
    setLoading(true);
    const data = await StorageService.getGallery();
    setItems(data);
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
    } else {
      alert('Incorrect Password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const updated = await StorageService.saveItem(formData);
    setItems(updated);
    setShowAddModal(false);
    setLoading(false);
    setFormData({ title: '', location: '', description: '', url: '', category: 'moving' });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this project? This will remove it from the public website immediately.')) {
      setLoading(true);
      const updated = await StorageService.deleteItem(id);
      setItems(updated);
      setLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, url: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-10 rounded-sm shadow-2xl border-t-8 border-brand-gold">
          <h1 className="font-heading text-3xl font-black text-brand-blue mb-8 uppercase text-center">Admin Portal</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-black text-brand-blue uppercase tracking-widest mb-2">Access Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-brand-gold outline-none transition font-bold"
              />
            </div>
            <button type="submit" className="w-full bg-brand-blue text-white py-4 font-black uppercase tracking-widest hover:bg-brand-slate transition shadow-lg">
              Unlock Dashboard
            </button>
          </form>
          <p className="mt-8 text-center text-xs text-gray-400 uppercase tracking-widest italic">Authorized Personal Only</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {loading && (
        <div className="fixed inset-0 z-[200] bg-brand-blue/20 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-sm shadow-xl flex items-center border-t-4 border-brand-gold">
            <div className="animate-spin rounded-full h-8 w-8 border-b-4 border-brand-gold mr-4"></div>
            <span className="font-bold text-brand-blue uppercase tracking-widest">Database Syncing...</span>
          </div>
        </div>
      )}

      <div className="bg-brand-blue py-12 text-white px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="font-heading text-4xl font-black uppercase">Content Manager</h1>
            <p className="text-brand-gold font-bold uppercase tracking-widest text-sm flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Secure Database Online
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-brand-gold text-brand-blue px-8 py-3 font-black uppercase tracking-widest hover:bg-white transition flex items-center shadow-lg"
            >
              + Add Project
            </button>
            <button 
              onClick={handleLogout}
              className="bg-white/10 text-white px-6 py-3 font-bold uppercase tracking-widest text-xs border border-white/20 hover:bg-red-500 hover:border-red-500 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-sm shadow-md overflow-hidden border border-gray-200 relative group hover:border-brand-gold transition-colors">
              <div className="aspect-video bg-gray-100 relative">
                <img src={item.url} alt="" className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-brand-gold text-brand-blue text-[10px] font-black px-2 py-1 uppercase shadow-md">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-blue uppercase mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400 font-bold mb-4 uppercase tracking-widest">{item.location}</p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="flex-grow border-2 border-red-100 text-red-500 py-2 font-bold uppercase tracking-widest text-[10px] hover:bg-red-500 hover:text-white hover:border-red-500 transition"
                  >
                    Remove Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-[100] bg-brand-blue/90 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white max-w-2xl w-full p-8 md:p-12 rounded-sm shadow-2xl relative max-h-[90vh] overflow-y-auto border-t-8 border-brand-gold">
            <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 text-brand-blue text-3xl font-black hover:text-brand-gold transition">×</button>
            <h2 className="font-heading text-3xl font-black text-brand-blue mb-8 uppercase">Publish New Project</h2>
            <form onSubmit={handleAdd} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-brand-blue uppercase tracking-widest mb-2">Internal Title</label>
                  <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 font-bold outline-none focus:border-brand-gold" placeholder="e.g. Historic Move" />
                </div>
                <div>
                  <label className="block text-xs font-black text-brand-blue uppercase tracking-widest mb-2">Location</label>
                  <input required type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 font-bold outline-none focus:border-brand-gold" placeholder="Jackson, MS" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-brand-blue uppercase tracking-widest mb-2">Service Type (SEO Category)</label>
                <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value as any})} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 font-bold outline-none cursor-pointer">
                  <option value="moving">House Moving</option>
                  <option value="raising">House Raising</option>
                  <option value="leveling">Structural Leveling</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-brand-blue uppercase tracking-widest mb-2">Project Photo</label>
                <input required type="file" accept="image/*" onChange={handleImageUpload} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 font-bold cursor-pointer" />
                {formData.url && (
                  <div className="mt-4 aspect-video bg-gray-100 rounded-sm border-2 border-brand-gold overflow-hidden">
                    <img src={formData.url} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-black text-brand-blue uppercase tracking-widest mb-2">SEO Context (Alt Text)</label>
                <textarea required rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 font-bold outline-none" placeholder="Explain the move for search engine optimization..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-gold text-brand-blue py-5 font-black uppercase tracking-widest hover:bg-brand-blue hover:text-white transition shadow-xl">
                Upload & Sync Live
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
