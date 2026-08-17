import { useEffect, useState } from 'react';
import { getPackages, savePackage, deletePackage } from '../../services/api';
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';

export default function AdminPackages() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    id: null, name: '', tier: 'SIGNATURE', scope: '', priceRange: '', 
    category: 'WEDDING', features: '', isPopular: false, displayOrder: 0
  });

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const res = await getPackages();
      setItems(res.data || []);
    } catch (error) { console.error('Failed to fetch:', error); } 
    finally { setLoading(false); }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const openModal = (item = null) => {
    if (item) setFormData(item);
    else setFormData({ id: null, name: '', tier: 'SIGNATURE', scope: '', priceRange: '', category: 'WEDDING', features: '', isPopular: false, displayOrder: 0 });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await savePackage(formData);
      setIsModalOpen(false);
      fetchData();
    } catch (error) { alert('Failed to save item'); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure?')) return;
    try { await deletePackage(id); fetchData(); } 
    catch (error) { alert('Failed to delete item'); }
  };

  return (
    <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: '24px', borderBottom: 'var(--border-thin)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Packages</h3>
        <button className="btn-primary" onClick={() => openModal()} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px' }}><FaPlus /> Add New</button>
      </div>
      {loading ? (
        <div style={{ padding: '48px', textAlign: 'center' }}><div className="spinner" style={{ margin: '0 auto' }}></div></div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="admin-table">
            <thead>
              <tr><th>Name</th><th>Tier</th><th>Category</th><th>Price Range</th><th>Popular</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td style={{ fontWeight: 500, color: 'var(--ivory)' }}>{item.name}</td>
                  <td>{item.tier}</td><td>{item.category}</td><td>{item.priceRange}</td><td>{item.isPopular ? 'Yes' : 'No'}</td>
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
            <h3 style={{ marginBottom: '24px' }}>{formData.id ? 'Edit' : 'Add'} Package</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}><label style={{ display: 'block', marginBottom: '8px' }}>Name *</label><input type="text" className="form-input" name="name" value={formData.name} onChange={handleInputChange} required /></div>
                <div style={{ flex: 1 }}><label style={{ display: 'block', marginBottom: '8px' }}>Tier *</label><select className="form-input" name="tier" value={formData.tier} onChange={handleInputChange}><option value="SIGNATURE">Signature</option><option value="BESPOKE">Bespoke</option><option value="FULL_SCALE">Full Scale</option><option value="ESSENTIAL">Essential</option><option value="PREMIUM">Premium</option><option value="FLAGSHIP">Flagship</option></select></div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                 <div style={{ flex: 1 }}><label style={{ display: 'block', marginBottom: '8px' }}>Category *</label><select className="form-input" name="category" value={formData.category} onChange={handleInputChange}><option value="WEDDING">Wedding</option><option value="CORPORATE">Corporate</option></select></div>
                 <div style={{ flex: 1 }}><label style={{ display: 'block', marginBottom: '8px' }}>Price Range *</label><input type="text" className="form-input" name="priceRange" value={formData.priceRange} onChange={handleInputChange} required placeholder="e.g., $5,000 - $10,000" /></div>
              </div>
              <div><label style={{ display: 'block', marginBottom: '8px' }}>Scope</label><textarea className="form-input" name="scope" value={formData.scope} onChange={handleInputChange} rows="2" /></div>
              <div><label style={{ display: 'block', marginBottom: '8px' }}>Features (comma-separated)</label><textarea className="form-input" name="features" value={formData.features} onChange={handleInputChange} rows="3" /></div>
              
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="isPopular" checked={formData.isPopular} onChange={handleInputChange} /> Popular</label>
                <div><label style={{ display: 'inline-block', marginRight: '8px' }}>Order:</label><input type="number" className="form-input" style={{ width: '80px', padding: '4px 8px' }} name="displayOrder" value={formData.displayOrder} onChange={handleInputChange} /></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '16px' }}>
                <button type="button" className="btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Save Item</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
