import './App.css';
import Header from './Header';
import Footer from './Footer';
import registrationModal from './registrationModal';
import loginModal from './loginModal';
import treasure from './images/treasure.jpg';


function App() {
  return (
    <div className="App">
      <Header />
      <body>
        body
        <img className="Pic" src={treasure} alt="Treasure Chest" />
        <button type="button" class="btn btn-info">Login</button>
        <loginModal />
        <button type="button" class="btn btn-info">Register</button>
        <registrationModal />
      </body>
      <Footer />
    </div>
  );
}

export default App;
