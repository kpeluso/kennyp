import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './Header';
import Landing from './Landing';
import RecurSect from './RecurSect';
import Bottom from './Bottom';

import titles from '../assets/info/titles';

import '../assets/style/App.css';

class App extends Component {
  fill(ls) {
    return ls.map(item => {
      if (item) {
        return <Row key={item.title}>
          <Col>
            <RecurSect data={item.data}/>
          </Col>
        </Row>
      } else {
        return <hr/>
      }
    })
  }
  convertTitles(ls) {
    return ls.map(item => {
      return item ? item.title : item;
    })
  }
  render() {
    return (
      <div className='app-Comp'>
        <Header title='Kenny Peluso' dests={this.convertTitles(titles)}/>
        <Landing/>
        <Container>
          {this.fill(titles)}
          <hr/>
          <Bottom/>
        </Container>
      </div>
    );
  }
}

export default App;

