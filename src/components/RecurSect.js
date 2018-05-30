import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import SectionItem from './SectionItem';

export default class RecurSect extends React.Component {
  buildSectItem = (item) => {
    if (!item.leaf) {
      return <Section
        head={item.head}
        style={item.key.split('-').length - 2}
        key={item.key}
      >
        {item.items.map(item => this.buildSectItem(item))}
      </Section>
    } else if (item.leaf) {
      return <SectionItem
        head={item.head}
        key={item.key}
        items={item.items}
        line={!(item.key.substr(item.key.length - 2) === '-1')}
      />
    }
  }
  render() {
    return <div className='recurSect-Comp'>
      {this.props.data.map(item => this.buildSectItem(item))}
    </div>
  }
};

RecurSect.propTypes = {
  data: PropTypes.array.isRequired
};

