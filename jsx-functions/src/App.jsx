import './App.css'

function WelcomeMessage(name){
  return <h1>Hello  {name}</h1>
}

function GreetingMessage(time){
  return <h4> Good {time} !</h4>
}

function alertBox(message){
  return <div className='alert'>{message}</div>
}
function showAlert(condition, message){
  if(condition){
    return alertBox(message)
  }
  return null;
}

function App() {
  const now=new Date();
  const isMorning=now.getHours<12;

  //This a single line comment
  /*
  This is a multi
  line comment
  */
  return (
    <div>
      {/* This is a comment
      This is a comment */}
      {WelcomeMessage("Alice")}
      {GreetingMessage("Night")}
      {WelcomeMessage("Bob")}
      {GreetingMessage("Morning")}
      {showAlert(true,"Message showing")}
    </div>
  )
}

export default App
