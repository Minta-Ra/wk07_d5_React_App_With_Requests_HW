import React from 'react';

const ListItem = ({game}) => {

    return (
    
        <li className="list-item">
            <a href={game.game_url}>
            <img src={game.thumbnail}></img>
            </a>

            <div>
                {game.title}
            </div>
            <hr></hr>
        </li>
    );
};

export default ListItem;