import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getInquiries, updateInquiryStatus, deleteInquiry } from '../services/api';
import { FaHome, FaEnvelope, FaImages, FaQuoteRight, FaUsers, FaTrash } from 'react-icons/fa';

export default function Admin() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('inquiries');

  useEffect(() => {
    document.title = 'Admin — Storyline Design & Events';
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

  const getStatusClass = (status) => {
    switch (status) {
      case 'NEW': return 'status-badge new';
      case 'CONTACTED': return 'status-badge contacted';
      case 'IN_PROGRESS': return 'status-badge in-progress';
      case 'CLOSED': return 'status-badge closed';
      default: return 'status-badge';
    }
  };

  return (
    <div className="admin-layout" id="admin-page">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <Link to="/" style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white-muted)' }}>
          <FaHome /> Back to Site
        </Link>
        <div style={{ padding: '0 24px', margin: '16px 0 8px' }}>
          <span className="label" style={{ fontSize: 'var(--fs-xs)' }}>Management</span>
        </div>
        <a
          href="#"
          className={activeSection === 'inquiries' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); setActiveSection('inquiries'); }}
        >
          <FaEnvelope /> Inquiries
        </a>
        <a
          href="#"
          className={activeSection === 'portfolio' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); setActiveSection('portfolio'); }}
        >
          <FaImages /> Portfolio
        </a>
        <a
          href="#"
          className={activeSection === 'testimonials' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); setActiveSection('testimonials'); }}
        >
          <FaQuoteRight /> Testimonials
        </a>
        <a
          href="#"
          className={activeSection === 'team' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); setActiveSection('team'); }}
        >
          <FaUsers /> Team
        </a>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <div className="admin-header">
          <div>
            <h1>Dashboard</h1>
            <p className="text-muted">Manage your Storyline website content</p>
          </div>
        </div>

        {/* Stats */}
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

        {/* Inquiries Table */}
        {activeSection === 'inquiries' && (
          <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
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
                      <th>Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiries.map((inquiry) => (
                      <tr key={inquiry.id}>
                        <td style={{ fontWeight: 500, color: 'var(--ivory)' }}>{inquiry.name}</td>
                        <td>
                          <span className="label" style={{ fontSize: 'var(--fs-xs)' }}>
                            {inquiry.enquiryType}
                          </span>
                        </td>
                        <td>{inquiry.email}</td>
                        <td>{inquiry.phone}</td>
                        <td>{inquiry.createdAt ? new Date(inquiry.createdAt).toLocaleDateString() : '-'}</td>
                        <td>
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
                        <td>
                          <button
                            onClick={() => handleDelete(inquiry.id)}
                            style={{
                              background: 'none', border: 'none',
                              color: 'var(--error)', cursor: 'pointer', padding: '4px',
                            }}
                            title="Delete inquiry"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Portfolio Management Placeholder */}
        {activeSection === 'portfolio' && (
          <div className="glass-card" style={{ textAlign: 'center', padding: '48px' }}>
            <FaImages style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: '16px' }} />
            <h3>Portfolio Management</h3>
            <p className="text-muted">Manage your portfolio projects — add, edit, and delete case studies.</p>
            <p className="text-muted" style={{ marginTop: '8px', fontSize: 'var(--fs-small)' }}>
              Use the API endpoints: POST /api/admin/portfolio and DELETE /api/admin/portfolio/:id
            </p>
          </div>
        )}

        {/* Testimonials Management Placeholder */}
        {activeSection === 'testimonials' && (
          <div className="glass-card" style={{ textAlign: 'center', padding: '48px' }}>
            <FaQuoteRight style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: '16px' }} />
            <h3>Testimonials Management</h3>
            <p className="text-muted">Manage client testimonials.</p>
            <p className="text-muted" style={{ marginTop: '8px', fontSize: 'var(--fs-small)' }}>
              Use the API endpoints: POST /api/admin/testimonials and DELETE /api/admin/testimonials/:id
            </p>
          </div>
        )}

        {/* Team Management Placeholder */}
        {activeSection === 'team' && (
          <div className="glass-card" style={{ textAlign: 'center', padding: '48px' }}>
            <FaUsers style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: '16px' }} />
            <h3>Team Management</h3>
            <p className="text-muted">Manage team members.</p>
            <p className="text-muted" style={{ marginTop: '8px', fontSize: 'var(--fs-small)' }}>
              Use the API endpoints: POST /api/admin/team and DELETE /api/admin/team/:id
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
