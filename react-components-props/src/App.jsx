import React from 'react';
import MyButton from './MyButton';
import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  // API call -> Fetch users from the server -> we use props

  const handleHobbyClick=(hobby)=>{
    alert(`You clicked on ${hobby}`); 
  }

  const ALiceProfile={
          name:"Bob", 
          age:20 ,
          isMember:true ,
          hobbies:["Reading", "Cooking", "Gaming"],
          onHobbyClick:handleHobbyClick
  }

  const BobProfile={
          name:"Bob", 
          age:20 ,
          isMember:true ,
          hobbies:["Traveling", "Writing"],
          onHobbyClick:handleHobbyClick
  }
  return (
    <div id="root">
      <header>
        <h1>Welcome to My App</h1>
      </header>
      <main>
        <h2>Profile Cards</h2>
        <ProfileCard{...ALiceProfile}/>
        <ProfileCard{...BobProfile}/>
      </main>
      <footer>
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;