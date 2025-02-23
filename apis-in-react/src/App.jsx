import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

axios.interceptors.request.use((request) => {
  console.log('Request Interceptor:', request);
  return request;
});

axios.interceptors.response.use((response) => {
  console.log('Response Interceptor:', response);
  return response;
});

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Authorization': 'Bearer <my-token>'
  }
});

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', username: '' });
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.all([
      api.get('/posts'),
      api.get('/users')
    ])
    .then(axios.spread((postsResponse, usersResponse) => {
      setPosts(postsResponse.data);
      setUsers(usersResponse.data);
      setLoading(false);
    }))
    .catch(error => {
      console.error('Error fetching data: ', error);
      setError('Error fetching data');
      setLoading(false);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...newUser, id: users.length + 1 };
    setUsers([user, ...users]);
    setNewUser({ name: '', email: '', username: '' });
    setSelectedUserId(user.id);
  };
  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="app-container">
      <h1>API Data</h1>
      <form onSubmit={handleSubmit} className="user-form">
        <h2>Add New User</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={newUser.username}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
      <div className="data-container">
        <div className="posts-container">
          <h2>Posts</h2>
          <ul>
            {posts.map(post => (
              <li key={post.id} className="list-item">
                <strong>User ID:</strong> {post.userId} <br />
                <strong>Title:</strong> {post.title} <br />
                <strong>ID:</strong> {post.id} <br />
                <strong>Body:</strong> {post.body}
              </li>
            ))}
          </ul>
        </div>
        <div className="users-container">
          <h2>Users</h2>
          <ul>
            {users.map(user => (
              <li key={user.id} className="list-item">
                <strong>ID:</strong> {user.id} <br />
                <strong>Name:</strong> {user.name} <br />
                <strong>Email:</strong> {user.email} <br />
                <strong>Username:</strong> {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
