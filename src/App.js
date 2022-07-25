import profileImg from "./congrats-card-profile-img.png";
import watchImg from "./congrats-card-watch-img.png";
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Congratulations</h1>
      <div className="card">
        <img src={profileImg} alt="profileImg" className="profile-img"/>
        <h1 className="card-title">Kiran V</h1>
        <p className="card-description">Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
        <img src={watchImg} alt="watchImg" className="watch-img" />
      </div>
    </div>
  );
}

export default App;
