import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App bg-pink-900">

       <FontAwesomeIcon icon={faCheckCircle} className="text-blue-800 mr-3"/> hello 
    </div>
  );
}

export default App;
