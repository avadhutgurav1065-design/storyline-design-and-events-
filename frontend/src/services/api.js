import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add JWT token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// ---- Auth API ----
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

// ---- File Upload API ----
export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await api.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// ---- Public API ----

export const getServices = async (category = null) => {
  const url = category ? `/services/category/${category}` : '/services';
  const response = await api.get(url);
  return response.data;
};

export const getPortfolio = async (category = null) => {
  const url = category ? `/portfolio/category/${category}` : '/portfolio';
  const response = await api.get(url);
  return response.data;
};

export const getFeaturedPortfolio = async () => {
  const response = await api.get('/portfolio/featured');
  return response.data;
};

export const getPortfolioById = async (id) => {
  const response = await api.get(`/portfolio/${id}`);
  return response.data;
};

export const getTestimonials = async (category = null) => {
  const url = category ? `/testimonials/category/${category}` : '/testimonials';
  const response = await api.get(url);
  return response.data;
};

export const getTeam = async () => {
  const response = await api.get('/team');
  return response.data;
};

export const getPackages = async (category = null) => {
  const url = category ? `/packages/category/${category}` : '/packages';
  const response = await api.get(url);
  return response.data;
};

export const submitInquiry = async (data) => {
  const response = await api.post('/inquiries', data);
  return response.data;
};

// ---- Admin API ----

export const getInquiries = async () => {
  const response = await api.get('/inquiries');
  return response.data;
};

export const updateInquiryStatus = async (id, status) => {
  const response = await api.patch(`/inquiries/${id}/status?status=${status}`);
  return response.data;
};

export const deleteInquiry = async (id) => {
  const response = await api.delete(`/inquiries/${id}`);
  return response.data;
};

export const savePortfolio = async (data) => {
  const response = await api.post('/admin/portfolio', data);
  return response.data;
};

export const deletePortfolioItem = async (id) => {
  const response = await api.delete(`/admin/portfolio/${id}`);
  return response.data;
};

export const saveTestimonial = async (data) => {
  const response = await api.post('/admin/testimonials', data);
  return response.data;
};

export const deleteTestimonialItem = async (id) => {
  const response = await api.delete(`/admin/testimonials/${id}`);
  return response.data;
};

export const saveTeamMember = async (data) => {
  const response = await api.post('/admin/team', data);
  return response.data;
};

export const deleteTeamMember = async (id) => {
  const response = await api.delete(`/admin/team/${id}`);
  return response.data;
};

export const saveService = async (data) => {
  const response = await api.post('/admin/services', data);
  return response.data;
};

export const deleteService = async (id) => {
  const response = await api.delete(`/admin/services/${id}`);
  return response.data;
};

export const savePackage = async (data) => {
  const response = await api.post('/admin/packages', data);
  return response.data;
};

export const deletePackage = async (id) => {
  const response = await api.delete(`/admin/packages/${id}`);
  return response.data;
};

export default api;
