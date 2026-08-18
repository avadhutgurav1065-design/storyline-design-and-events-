import React, { useEffect, useState } from 'react';
import { getInquiries, updateInquiryStatus, deleteInquiry } from '../../services/api';
import { FaTrash } from 'react-icons/fa';

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const res = await getInquiries();
      setInquiries(res.data || []);
    } catch (error) {
      console.error('Failed to fetch inquiries:', error);
      setInquiries([]);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await updateInquiryStatus(id, status);
      fetchInquiries();
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      await deleteInquiry(id);
      fetchInquiries();
    } catch (error) {
      console.error('Failed to delete:', error);
    }
  };

  const stats = {
    total: inquiries.length,
    new: inquiries.filter(i => i.status === 'NEW').length,
    contacted: inquiries.filter(i => i.status === 'CONTACTED').length,
    inProgress: inquiries.filter(i => i.status === 'IN_PROGRESS').length,
  };

  return (
    <>
      <div className="admin-stat-grid">
        <div className="admin-stat-card">
          <div className="value">{stats.total}</div>
          <div className="label" style={{ textTransform: 'none', letterSpacing: 'normal' }}>Total Inquiries</div>
        </div>
        <div className="admin-stat-card">
          <div className="value" style={{ color: 'var(--info)' }}>{stats.new}</div>
          <div className="label" style={{ textTransform: 'none', letterSpacing: 'normal' }}>New</div>
        </div>
        <div className="admin-stat-card">
          <div className="value" style={{ color: 'var(--gold)' }}>{stats.contacted}</div>
          <div className="label" style={{ textTransform: 'none', letterSpacing: 'normal' }}>Contacted</div>
        </div>
        <div className="admin-stat-card">
          <div className="value" style={{ color: 'var(--success)' }}>{stats.inProgress}</div>
          <div className="label" style={{ textTransform: 'none', letterSpacing: 'normal' }}>In Progress</div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: 0, overflow: 'hidden', marginTop: '24px' }}>
        <div style={{ padding: '24px', borderBottom: 'var(--border-thin)' }}>
          <h3>Inquiries</h3>
        </div>

        {loading ? (
          <div style={{ padding: '48px', textAlign: 'center' }}>
            <div className="spinner" style={{ margin: '0 auto' }}></div>
            <p className="text-muted" style={{ marginTop: '16px' }}>Loading inquiries...</p>
          </div>
        ) : inquiries.length === 0 ? (
          <div style={{ padding: '48px', textAlign: 'center' }}>
            <p className="text-muted">No inquiries yet. They will appear here when someone submits the contact form.</p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Event Date</th>
                  <th>Submitted</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inquiry) => (
                  <React.Fragment key={inquiry.id}>
                    <tr 
                      onClick={() => setExpandedId(expandedId === inquiry.id ? null : inquiry.id)}
                      style={{ cursor: 'pointer', background: expandedId === inquiry.id ? 'var(--charcoal-light)' : 'transparent' }}
                    >
                      <td style={{ fontWeight: 500, color: 'var(--ivory)' }}>{inquiry.name}</td>
                      <td>
                        <span className="label" style={{ fontSize: 'var(--fs-xs)' }}>
                          {inquiry.enquiryType}
                        </span>
                      </td>
                      <td>{inquiry.email}</td>
                      <td>{inquiry.phone}</td>
                      <td>{inquiry.eventDate || '-'}</td>
                      <td>{inquiry.createdAt ? new Date(inquiry.createdAt).toLocaleDateString() : '-'}</td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <select
                          value={inquiry.status}
                          onChange={(e) => handleStatusUpdate(inquiry.id, e.target.value)}
                          style={{
                            background: 'var(--charcoal-mid)',
                            border: '1px solid var(--charcoal-light)',
                            color: 'var(--ivory)',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: 'var(--fs-xs)',
                          }}
                        >
                          <option value="NEW">New</option>
                          <option value="CONTACTED">Contacted</option>
                          <option value="IN_PROGRESS">In Progress</option>
                          <option value="CLOSED">Closed</option>
                        </select>
                      </td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => handleDelete(inquiry.id)}
                          style={{ background: 'none', border: 'none', color: 'var(--error)', cursor: 'pointer', padding: '4px' }}
                          title="Delete inquiry"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                    {expandedId === inquiry.id && (
                      <tr style={{ background: 'var(--charcoal-dark)' }}>
                        <td colSpan="8" style={{ padding: '24px', borderBottom: '1px solid var(--charcoal-light)' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <div><strong style={{color: 'var(--ivory)'}}>City:</strong> {inquiry.city || '-'}</div>
                            <div><strong style={{color: 'var(--ivory)'}}>Event Date:</strong> {inquiry.eventDate || '-'}</div>
                            <div><strong style={{color: 'var(--ivory)'}}>Venue:</strong> {inquiry.venue || '-'}</div>
                            <div><strong style={{color: 'var(--ivory)'}}>Guests:</strong> {inquiry.guestCount || '-'}</div>
                            <div><strong style={{color: 'var(--ivory)'}}>Budget:</strong> {inquiry.budgetRange || '-'}</div>
                            <div><strong style={{color: 'var(--ivory)'}}>Reference:</strong> {inquiry.referenceLink ? <a href={inquiry.referenceLink} target="_blank" rel="noreferrer" style={{color: 'var(--rose)'}}>Link</a> : '-'}</div>
                            <div style={{ gridColumn: '1 / -1' }}><strong style={{color: 'var(--ivory)'}}>Message:</strong> <p style={{marginTop: '8px', whiteSpace: 'pre-wrap', color: 'var(--text-muted)'}}>{inquiry.message || 'No message provided.'}</p></div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
