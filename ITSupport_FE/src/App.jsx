import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ITSNav from './components/ITSNav';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <>
      <ITSNav />
      <ChatInterface />
    </>
  );
}

export default App;
