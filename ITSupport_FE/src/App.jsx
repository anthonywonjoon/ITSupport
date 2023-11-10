import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ITSNav from './components/ITSNav';
import ChatInterface from './components/ChatInterface';
import ITSFooter from './components/ITSFooter';

function App() {
  return (
    <>
      <ITSNav />
      <ChatInterface />
      <ITSFooter />
    </>
  );
}

export default App;
