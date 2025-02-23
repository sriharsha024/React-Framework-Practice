import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Authorization': 'Bearer <my-token>'
  }
});

// Request interceptor
api.interceptors.request.use(
  (request) => {
    console.log('Request Interceptor:', request);
    return request;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log('Response Interceptor:', response);
    return response;
  },
  (error) => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

export default api;