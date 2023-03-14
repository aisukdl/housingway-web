import './App.css';
import Router from './route/Router';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer autoClose="1000" theme="light" position="bottom-center" />
    </div>
  );
}

export default App;
