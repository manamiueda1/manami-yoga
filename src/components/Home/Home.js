import './Home.css';
import field from '../../images/field.jpg'

function Home() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={field} alt="image"></img>
          <p>"Be receptive to your inner most beautiful self.' ~ Sri Dharma Mittra</p>
        </header>
      </div>
    );
  }
  
  export default Home;