import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    let button_dict = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
    let button_type = button_dict[this.props.style];
		return (
      <div className='section-Comp'>
        <div className='sectionTitle'>
          <Button color={button_type} size='lg' block onClick={this.toggle} style={{ marginBottom: '0.4rem', marginTop: '0.4rem' }}>
            <a name={this.props.head}>{this.props.head}</a>
          </Button>
        </div>
        <div className='itemsContainer'>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                {this.props.children}
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    );
  }
};

Section.propTypes = {
  head: PropTypes.string.isRequired,
  style: PropTypes.number.isRequired
};

