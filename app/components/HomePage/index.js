/*
* HomePage
*
* This is the first thing users see of our App, at the '/' route
*
* NOTE: while this component should technically be a stateless functional
* component (SFC), hot reloading does not currently support SFCs. If hot
* reloading is not a neccessity for you then you can refactor it and remove
* the linting exception.
*/

import React from 'react';
import BackgroundImage from './BackgroundImage';
import Stl from './home.css';


/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {

    render() {
        const source = 'https://static.pexels.com/photos/39688/training-train-lime-barbell-39688-large.jpeg';
        const localImage = '';

        return (
            <BackgroundImage src={source} placeholder={localImage} className={Stl.bg}>
                <div className="something-else">
                    Some more markup
                </div>
            </BackgroundImage>
        );
    }
}
