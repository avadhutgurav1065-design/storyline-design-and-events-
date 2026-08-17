import { useEffect, useState } from 'react';
import { getTestimonials, saveTestimonial, deleteTestimonialItem, uploadFile } from '../../services/api';
import { FaTrash, FaEdit, FaPlus, FaUpload } from 'react-icons/fa';

export default function AdminTestimonials() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    id: null, clientName: '', role: '', quote: '', rating: 5,
    photoUrl: '', category: 'WEDDING', isActive: true, displayOrder: 0
  });

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const res = await getTestimonials();
      setItems(res.data || []);
    } catch (error) { console.error('Failed to fetch:', error); } 
    finally { setLoading(false); }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const res = await uploadFile(file);
      if (res.success) setFormData(prev => ({ ...prev, photoUrl: res.data }));
    } catch (err) { alert("Failed to upload image."); } 
    finally { setUploading(false); }
  };

  const openModal = (item = null) => {
    if (item) setFormData(item);
    else setFormData({ id: null, clientName: '', role: '', quote: '', rating: 5, photoUrl: '', category: 'WEDDING', isActive: true, displayOrder: 0 });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveTestimonial(formData);
      setIsModalOpen(false);
      fetchData();
    } catch (error) { alert('Failed to save item'); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure?')) return;
    try { await deleteTestimonialItem(id); fetchData(); } 
    catch (error) { alert('Failed to delete item'); }
  };

  return (
    <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: '24px', borderBottom: 'var(--border-thin)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Testimonials</h3>
        <button className="btn-primary" onClick={() => openModal()} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px' }}><FaPlus /> Add New</button>
      </div>
      {loading ? (
        <div style={{ padding: '48px', textAlign: 'center' }}><div className="spinner" style={{ margin: '0 auto' }}></div></div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="admin-table">
            <thead>
              <tr><th>Photo</th><th>Client</th><th>Role</th><th>Category</th><th>Active</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.photoUrl && <img src={item.photoUrl} alt="client" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />}</td>
                  <td style={{ fontWeight: 500, color: 'var(--ivory)' }}>{item.clientName}</td>
                  <td>{item.role}</td><td>{item.category}</td><td>{item.isActive ? 'Yes' : 'No'}</td>
                  <td>
                    <button onClick={() => openModal(item)} style={{ background: 'none', border: 'none', color: 'var(--info)', cursor: 'pointer', padding: '4px', marginRight: '8px' }}><FaEdit /></button>
                    <button onClick={() => handleDelete(item.id)} style={{ background: 'none', border: 'none', color: 'var(--error)', cursor: 'pointer', padding: '4px' }}><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 style={{ marginBottom: '24px' }}>{formData.id ? 'Edit' : 'Add'} Testimonial</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}><label style={{ display: 'block', marginBottom: '8px' }}>Client Name *</label><input type="text" className="form-input" name="clientName" value={formData.clientName} onChange={handleInputChange} required /></div>
                <div style={{ flex: 1 }}><label style={{ display: 'block', marginBottom: '8px' }}>Role</label><input type="text" className="form-input" name="role" value={formData.role} onChange={handleInputChange} /></div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                 <div style={{ flex: 1 }}><label style={{ display: 'block', marginBottom: '8px' }}>Category *</label><select className="form-input" name="category" value={formData.category} onChange={handleInputChange}><option value="WEDDING">Wedding</option><option value="CORPORATE">Corporate</option></select></div>
                 <div style={{ flex: 1 }}><label style={{ display: 'block', marginBottom: '8px' }}>Rating</label><input type="number" min="1" max="5" className="form-input" name="rating" value={formData.rating} onChange={handleInputChange} /></div>
              </div>
              <div><label style={{ display: 'block', marginBottom: '8px' }}>Quote *</label><textarea className="form-input" name="quote" value={formData.quote} onChange={handleInputChange} rows="4" required /></div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>Photo</label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input type="file" onChange={handleFileChange} accept="image/*" style={{ display: 'none' }} id="file-upload-testi" />
                  <label htmlFor="file-upload-testi" className="btn-secondary" style={{ cursor: 'pointer', padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}><FaUpload /> {uploading ? 'Uploading...' : 'Choose File'}</label>
                  {formData.photoUrl && <span style={{ fontSize: '12px', color: 'var(--success)' }}>Photo uploaded</span>}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleInputChange} /> Active</label>
                <div><label style={{ display: 'inline-block', marginRight: '8px' }}>Order:</label><input type="number" className="form-input" style={{ width: '80px', padding: '4px 8px' }} name="displayOrder" value={formData.displayOrder} onChange={handleInputChange} /></div>
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
