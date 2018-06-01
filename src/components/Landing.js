import React from 'react';
import { Jumbotron } from 'reactstrap';

const Landing = () => {
  return (
    <div className='landing-Comp'>
      <div className='landing-Comp__img-background'>
        <img src={require('../assets/images/me.png')} alt='collage of Kenny Peluso'></img>
      </div>
      <Jumbotron className='landing-Comp__tron'>
        <h1 className="display-3">Hello, World!</h1>
        <h1 className="display-3">I'm Kenny Peluso.</h1>
        <p className="lead">Blockchain and Machine Learning Technologist / Full-Stack Developer @ John Hancock</p>
        <p className="lead">Long Island, NY <span role="img" aria-label="Airplane">✈️</span> Boston, MA</p>
        <hr className="my-2" />
        <p>I'm interested in Data Science, Operations Research, and Entre/Intrapreneurship.</p>
        <p>I’m always seeking to learn and build.</p>
        <p>I value the balance between <a href='https://en.wikipedia.org/wiki/Axiomatic_system#Properties' rel="noopener noreferrer" target="_blank">consistency under a set of axioms</a> and simplicity.</p>
        <p>You can usually find me reading psychology papers, philosophizing, modeling with Python, or developing websites with Meteor and React.</p>
        <hr className="my-2" />
        <p>Click any button below to learn more about me.</p>
      </Jumbotron>
    </div>
  );
};

export default Landing;

