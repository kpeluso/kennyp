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
        <p className="lead">Co-Founder / R&D @ <a href='upshot.io' rel="noopener noreferrer" target="_blank">upshot.io</a></p>
        <p className="lead">Long Island <> NYC</p>
        <hr className="my-2" />
        <p>Click any button below to learn more about me.</p>
      </Jumbotron>
    </div>
  );
};

export default Landing;

