import './App.css';
import GameContainer from './containers/GameContainer';

function App() {

  const links = [
    {name: "All", url: "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games"},
    {name: "Genres", url: "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games?category="}
  ];

  return (
    <>
      <h1>Games to play:</h1>
      <GameContainer links={links}/>
    </>
  );
};

export default App;
