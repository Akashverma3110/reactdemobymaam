import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import './App.css';
import DisplayTable from './components/DisplayTable';

function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
    alert(`The password you entered was: ${pass}`)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label><br/>
      <label>Enter your Password:
        <input 
          type="password" 
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
    <DisplayTable></DisplayTable>
    </>
    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
