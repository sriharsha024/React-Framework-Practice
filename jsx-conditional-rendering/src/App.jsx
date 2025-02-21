import './App.css'

function App() {
  const isLoggedIn=true;
  const messages=["1","2"];
  /*if(isLoggedIn){
    return <h1>Welcome</h1>
  }
  return <h1>Please log in</h1>*/
  const element=<h1>{isLoggedIn? "Welcome" :"Please log in"}</h1>
  return (
    <div>
      {element}
      {messages.length>0 && <h2>You have {messages.length} unread messages.</h2>}
    </div>
  )

  
}

export default App
