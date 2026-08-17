import { useEffect, useState } from 'react';
import { getPortfolio, savePortfolio, deletePortfolioItem, uploadFile } from '../../services/api';
import { FaTrash, FaEdit, FaPlus, FaUpload } from 'react-icons/fa';

export default function AdminPortfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    description: '',
    category: 'WEDDING',
    imageUrl: '',
    clientName: '',
    eventDate: '',
    location: '',
    isFeatured: false,
    displayOrder: 0
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getPortfolio();
      setPortfolioItems(res.data || []);
    } catch (error) {
      console.error('Failed to fetch:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setUploading(true);
    try {
      const res = await uploadFile(file);
      if (res.success) {
        setFormData(prev => ({ ...prev, imageUrl: res.data }));
      }
    } catch (err) {
      console.error("Upload failed", err);
      alert("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  const openModal = (item = null) => {
    if (item) {
      setFormData(item);
    } else {
      setFormData({
        id: null, title: '', description: '', category: 'WEDDING',
        imageUrl: '', clientName: '', eventDate: '', location: '',
        isFeatured: false, displayOrder: 0
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await savePortfolio(formData);
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
      console.error('Failed to save:', error);
      alert('Failed to save item');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    try {
      await deletePortfolioItem(id);
      fetchData();
    } catch (error) {
      console.error('Failed to delete:', error);
      alert('Failed to delete item');
    }
  };

  return (
    <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: '24px', borderBottom: 'var(--border-thin)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Portfolio Management</h3>
        <button className="btn-primary" onClick={() => openModal()} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px' }}>
          <FaPlus /> Add New
        </button>
      </div>

      {loading ? (
        <div style={{ padding: '48px', textAlign: 'center' }}><div className="spinner" style={{ margin: '0 auto' }}></div></div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Featured</th>
                <th>Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {portfolioItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.imageUrl && (
                      <img src={item.imageUrl} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
                    )}
                  </td>
                  <td style={{ fontWeight: 500, color: 'var(--ivory)' }}>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.isFeatured ? 'Yes' : 'No'}</td>
                  <td>{item.displayOrder}</td>
                  <td>
                    <button onClick={() => openModal(item)} style={{ background: 'none', border: 'none', color: 'var(--info)', cursor: 'pointer', padding: '4px', marginRight: '8px' }}><FaEdit /></button>
                    <button onClick={() => handleDelete(item.id)} style={{ background: 'none', border: 'none', color: 'var(--error)', cursor: 'pointer', padding: '4px' }}><FaTrash /></button>
                  </td>
                </tr>
              ))}
              {portfolioItems.length === 0 && (
                <tr><td colSpan="6" style={{ textAlign: 'center', padding: '24px' }}>No portfolio items found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 style={{ marginBottom: '24px' }}>{formData.id ? 'Edit' : 'Add'} Portfolio Item</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>Title *</label>
                <input type="text" className="form-input" name="title" value={formData.title} onChange={handleInputChange} required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>Category *</label>
                <select className="form-input" name="category" value={formData.category} onChange={handleInputChange}>
                  <option value="WEDDING">Wedding</option>
                  <option value="CORPORATE">Corporate</option>
                  <option value="DESIGN_STUDIO">Design Studio</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>Image</label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input type="file" onChange={handleFileChange} accept="image/*" style={{ display: 'none' }} id="file-upload" />
                  <label htmlFor="file-upload" className="btn-secondary" style={{ cursor: 'pointer', padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <FaUpload /> {uploading ? 'Uploading...' : 'Choose File'}
                  </label>
                  {formData.imageUrl && <span style={{ fontSize: '12px', color: 'var(--success)' }}>Image uploaded</span>}
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>Description</label>
                <textarea className="form-input" name="description" value={formData.description} onChange={handleInputChange} rows="3" />
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px' }}>Client Name</label>
                  <input type="text" className="form-input" name="clientName" value={formData.clientName} onChange={handleInputChange} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px' }}>Location</label>
                  <input type="text" className="form-input" name="location" value={formData.location} onChange={handleInputChange} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px' }}>Event Date</label>
                  <input type="text" className="form-input" name="eventDate" value={formData.eventDate} onChange={handleInputChange} placeholder="e.g., Dec 2024" />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px' }}>Display Order</label>
                  <input type="number" className="form-input" name="displayOrder" value={formData.displayOrder} onChange={handleInputChange} />
                </div>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleInputChange} />
                  Feature on Homepage
                </label>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '16px' }}>
                <button type="button" className="btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={uploading}>Save Item</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
