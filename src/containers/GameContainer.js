import axios from 'axios';
import React, {useEffect, useState} from 'react';
import GameList from '../components/GameList';
import GameSelector from '../components/GameSelector';


const GameContainer = ({links}) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        // console.log("links", links);
        loadGames(links[0].url);
    },[]);

    const loadGames = (url) => {
        // axios takes care to convert to json. And works same as fetch
        axios.get(url)
        .then(response => setGames(response.data))
        .catch(error => console.log(error))
    };

    const selectedGenre = (genre) => {
        // If " " exist
        if (genre.indexOf(" ") !== -1) {
            loadGames(links[1].url + genre.substring(0, genre.indexOf(" ")));
            console.log("Genre without space", links[1].url + genre.substring(0, genre.indexOf(" ")));
        } else {
            loadGames(links[1].url + genre)
            console.log("Genre with space", links[1].url + genre);
        };
    };

    return (
        <div>
            { games.length > 0 ? <GameSelector games={games} selectedGenre={selectedGenre}/> : null}
            <GameList games={games}/>
        </div>
    );
};

export default GameContainer;