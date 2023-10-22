import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Todos } from './components/Todos';
function App() {
  return (
    <>
      <Header/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
