import React, {useState} from "react";

const GameSearch = ({handleSearchResult}) => {

    const [searchGames, setSearchGames] = useState("");

    const handleChangeSearch = (event) => {
        !event.target.value ? setSearchGames("") : setSearchGames(event.target.value)
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        handleSearchResult(searchGames)
    };

    return (
        <div className="game-search-box">
            <form onSubmit={handleSearchSubmit}>
                <input 
                type="text" 
                placeholder="Search..."
                value={searchGames}
                onChange={handleChangeSearch}
                ></input>  
            </form>       
        </div>
    );
};

export default GameSearch;