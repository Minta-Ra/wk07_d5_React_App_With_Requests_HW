import React from 'react';

const ListItem = ({game}) => {

    return (
    
        <li className="list-item">
            <a href={game.game_url}>
                
            <img src={game.thumbnail}></img>

            <div>
                {game.title}
            </div>
            <hr></hr>
            </a>
        </li>
    );
};

export default ListItem;