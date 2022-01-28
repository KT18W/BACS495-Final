import './App.css';
import Header from './Header';
import Footer from './Footer';
import treasure from './images/treasure.jpg';


function App() {
  return (
    <div className="App">
      <Header />
      <body>
        body
        <img className="Pic" src={treasure} alt="Treasure Chest" />
      </body>
      <Footer />
    </div>
  );
}

export default App;
