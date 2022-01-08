import axios from 'axios';
import React, {useEffect, useState} from 'react';
import GameList from '../components/GameList';
import GameSelector from '../components/GameSelector';


const GameContainer = ({links}) => {
    const [games, setGames] = useState([]);


    useEffect(() => {
        console.log("links", links);
        loadGames(links[0].url);
    },[]);


    const loadGames = (url) => {
        // axios takes care to convert to json. And works same as fetch
        axios.get(url)
        .then(response => setGames(response.data));
    };

    return (
        <div>
            { games.length > 0 ? <GameSelector games={games}/> : null}
            <GameList games={games}/>
        </div>
    );
};

export default GameContainer;