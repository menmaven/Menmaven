import React from 'react';
import { Link } from 'react-router-dom';

const Recommended = ({recommend,currentsuggestion}) => {

    const { id, img } = recommend;

console.log(recommend, "RECOMMENDEDOPTIONSSS")


    return (
        // <Link to={'../food/' + id}>
            <img
                className={id === currentsuggestion.id ? 'selected moor-images mr-3' : 'moor-images mr-3'}
                src={img}
                height='150px'
                // alt="food-image"
                alt=" "
            />
        // </Link>
    );
};

export default Recommended;