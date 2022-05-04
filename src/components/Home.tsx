import logo from "assets/logo.svg";
import { getGames } from "epic-free-games";

const Home = () => {
  
  getGames("JP", true).then(res => {
  console.log(res)
  }).catch(err => {
  // Do something
  });

  return(
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit components in <code>src/components/</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </div>
)};

export default Home;
