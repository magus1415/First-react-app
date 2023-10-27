import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'

// returning my components here and feeding to app function 
function App() {
  return (
  <>
  <Navbar/>
  <LoginForm/>

  </>
  );
}

export default App;
