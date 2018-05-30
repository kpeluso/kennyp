import React from 'react';

const contact = [
  {
    head: 'Contact & Links',
    leaf: false,
    key: 'contact-1',
    items: [
      {
        head: 'Email',
        leaf: true,
        key: 'contact-1-1',
        items: [
          'pelusoken (at) gmail (dot) com'
        ]
      },
      {
        head: 'LinkedIn',
        leaf: true,
        key: 'contact-1-2',
        items: [
          <a href='https://www.linkedin.com/in/kenny-peluso-03a58bb1/' rel='noopener noreferrer' target="_blank">Jump to my LinkedIn</a>
        ]
      },
      {
        head: 'GitHub',
        leaf: true,
        key: 'contact-1-3',
        items: [
          <a href='https://github.com/kpeluso' rel="noopener noreferrer" target="_blank">Jump to my GitHub</a>
        ]
      },
      {
        head: 'Medium',
        leaf: true,
        key: 'contact-1-4',
        items: [
          <a href='https://medium.com/@kennypeluso' rel="noopener noreferrer" target="_blank">Jump to my Medium</a>
        ]
      }
    ]
  }
]

export default contact;

