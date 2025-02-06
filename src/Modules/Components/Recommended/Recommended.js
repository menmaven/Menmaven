import Link from 'next/link';
import React from 'react';

const Recommended = ({recommend,currentsuggestion}) => {

    const { id, img } = recommend;
    return (
        <Link href={`/shoes/${id}`}>
            <img
                className={id === currentsuggestion?.id ? 'selected moor-images mr-3' : 'moor-images mr-3'}
                src={img}
                height='150px'
                alt=" "
            />
            </Link>
    );
};

export default Recommended;