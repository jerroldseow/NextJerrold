import React from 'react';
import loaderSrc from '../src/Gif';
import './Loader.css';

const Loader = (props) => (
    <div>
        <img
            src={loaderSrc}
            alt="loading items"
        />
    </div>
);

export default Loader;