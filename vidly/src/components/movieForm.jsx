import React from 'react';

const MovieForm = ({match}) => {
    return ( 
        <div>
        <h1>Movie Form</h1>
        <h3>Your Selected Movie Id : {match.params.id}</h3>
        </div>
     );
}
 
export default MovieForm;