import React, {useState, useEffect} from 'react';

const GameSelector = (props) => {

    const [selectGenres, setSelectGenres] = useState([]);

    useEffect(() => {
        getGenres(props.games)
    },[]);


    const getGenres = (games) => {
        const uniqueGenres = []

        for (let gameGenre of games) {
            /////////////////////////////////////////
            // // Loop over genres
            // let alreadyExists = false
            // for (let genre of uniqueGenres) {

            //     if (genre === gameGenre.genre) {
            //         alreadyExists = true
            //     };
            // };
            // if (alreadyExists === false) {
            //     uniqueGenres.push(gameGenre.genre)
            // };
            /////////////////////////////////////////
            if (uniqueGenres.indexOf(gameGenre.genre) === -1) {
                uniqueGenres.push(gameGenre.genre);
            }
            /////////////////////////////////////////
        };
        setSelectGenres(uniqueGenres);
    };

    const displayGenreOptions = selectGenres.map((genre, index) => {
        return <option value={genre} key={index}>{genre}</option>
    });


    return (
        <div className="game-selector">
        <select>
            <option value="" >Choose a genre</option>
            {displayGenreOptions}
        </select>
        </div>
    );
};

export default GameSelector;