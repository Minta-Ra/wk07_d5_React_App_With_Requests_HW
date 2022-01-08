import React from 'react';
import ListItem from './ListItem';

const GameList = ({games}) => {

    const gameItems = games.map((game, index) => {
        return <ListItem game={game} key={index}/>
    });

    return (
        <>
            <div className="list">
                {gameItems}
            </div>
        </>
    );
};

export default GameList;
