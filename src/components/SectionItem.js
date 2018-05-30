import React from 'react';
import PropTypes from 'prop-types';

export default class SectionItem extends React.Component {
  listItems(ls) {
    return ls.map(item => <p key={item}>{item}</p>)
  }
  line(b) {
    return (b ? <hr/> : null);
  }
  render() {
    return <div className='sectionItem-Comp'>
      {this.line(this.props.line)}
      <div className='sectionItemTitle'>
        <h4>{this.props.head}</h4>
      </div>
      <span>{this.listItems(this.props.items)}</span>
    </div>
  }
};

SectionItem.propTypes = {
  head: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  line: PropTypes.bool.isRequired
};

