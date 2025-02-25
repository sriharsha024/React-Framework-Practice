import React from 'react';
import PostList from './PostList';
import './App.css';

function App() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-blue-500 mb-4">Posts</h1>
            <PostList />
        </div>
    );
}

export default App;