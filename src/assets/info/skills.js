import React from 'react';

const skills = [
  {
    head: 'Skills',
    leaf: false,
    key: 'skills-1',
    items: [
      {
        head: 'Languages',
        leaf: false,
        key: 'skills-1-1',
        items: [
          {
            head: 'Python',
            leaf: true,
            key: 'skills-1-1-1',
            items: [
              'Proficiency: 9/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2012')) / (1000*60*60*24*365.25))),
              'Libraries/Modules: Tensorflow, numpy, sckikit-learn, libpgm, sympy'
            ]
          },
          {
            head: 'Javascript',
            leaf: true,
            key: 'skills-1-1-2',
            items: [
              'Proficiency: 9/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2016')) / (1000*60*60*24*365.25))),
              'Libraries and Frameworks: Meteor.js, D3.js, React, Redux'
            ]
          },
          {
            head: 'C++',
            leaf: true,
            key: 'skills-1-1-3',
            items: [
              'Proficiency: 7/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2016')) / (1000*60*60*24*365.25))),
              'Libraries: OpenFOAM',
              'I used C++ primarily for creating simulations of fluid dynamics'
            ]
          },
          {
            head: 'VBA',
            leaf: true,
            key: 'skills-1-1-4',
            items: [
              'Proficiency: 9/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2015')) / (1000*60*60*24*365.25))),
              'I used VBA to build a CRM utilized by 6 different cash advance companies, among other accounting-related tasks'
            ]
          },
          {
            head: 'HTML/CSS',
            leaf: true,
            key: 'skills-1-1-5',
            items: [
              'Proficiency: 9/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2012')) / (1000*60*60*24*365.25)))
            ]
          },
          {
            head: 'Bash',
            leaf: true,
            key: 'skills-1-1-6',
            items: [
              'Proficiency: 7/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2014')) / (1000*60*60*24*365.25)))
            ]
          },
          {
            head: 'Racket',
            leaf: true,
            key: 'skills-1-1-7',
            items: [
              'Proficiency: 7/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2015')) / (1000*60*60*24*365.25))),
              'This functional language is a subset of both Lisp and Scheme. I used it heavily in my introductory programming class.'
            ]
          },
          {
            head: 'Pyret',
            leaf: true,
            key: 'skills-1-1-8',
            items: [
              'Proficiency: 7/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2015')) / (1000*60*60*24*365.25))),
              'This functional language was developed by one of my professors, Shriram Krishnamurthi. I used it heavily in my introductory programming class.'
            ]
          },
          {
            head: 'MATLAB',
            leaf: true,
            key: 'skills-1-1-9',
            items: [
              'Proficiency: 9/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2015')) / (1000*60*60*24*365.25)))
            ]
          }
        ]
      },
      {
        head: 'Databases & Related',
        leaf: false,
        key: 'skills-1-2',
        items: [
          {
            head: 'SQL',
            leaf: true,
            key: 'skills-1-2-1',
            items: [
              'Proficiency: 9/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2016')) / (1000*60*60*24*365.25))),
              'Dialects: SQL Server, MySQL, SQLite'
            ]
          },
          {
            head: 'MongoDB',
            leaf: true,
            key: 'skills-1-2-2',
            items: [
              'Proficiency: 9/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2017')) / (1000*60*60*24*365.25))),
              'Used in all of my websites.'
            ]
          },
          {
            head: 'Amazon Redshift',
            leaf: true,
            key: 'skills-1-2-3',
            items: [
              'Proficiency: 6/10',
              'Years of experience: 1'
            ]
          }
        ]
      },
      {
        head: 'Other Technical Tools',
        leaf: false,
        key: 'skills-1-3',
        items: [
          {
            head: 'Git & GitHub',
            leaf: true,
            key: 'skills-1-3-1',
            items: [
              'Proficiency: 9/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2016')) / (1000*60*60*24*365.25))),
              'Used in all of my projects.'
            ]
          },
          {
            head: 'Tableau',
            leaf: true,
            key: 'skills-1-3-2',
            items: [
              'Proficiency: 8/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2016')) / (1000*60*60*24*365.25)))
            ]
          },
          {
            head: 'Wave Analytics by Salesforce',
            leaf: true,
            key: 'skills-1-3-3',
            items: [
              'Proficiency: 7/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2016')) / (1000*60*60*24*365.25)))
            ]
          },
          {
            head: 'LaTeX',
            leaf: true,
            key: 'skills-1-3-4',
            items: [
              'Proficiency: 9/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2015')) / (1000*60*60*24*365.25)))
            ]
          },
          {
            head: 'Arduino & RaspberryPi',
            leaf: true,
            key: 'skills-1-3-5',
            items: [
              'Proficiency: 7/10',
              'Years of experience: ' + String(Math.floor((new Date() - new Date('2016')) / (1000*60*60*24*365.25)))
            ]
          }
        ]
      },
      {
        head: 'Soft Skills',
        leaf: false,
        key: 'skills-1-4',
        items: [
          {
            head: 'Public Speaking',
            leaf: true,
            key: 'skills-1-4-1',
            items: [
              <p>I'm a loud Italian-American and a proud former-student of <a href='https://www.wellesley.edu/albright/about/faculty/barbara-tannenbaum' rel="noopener noreferrer" target="_blank">Barbara Tannenbaum</a></p>
            ]
          },
          {
            head: 'Basic Italian',
            leaf: true,
            key: 'skills-1-4-2',
            items: [
              "I'm 52% proficient according to DuoLingo"
            ]
          },
          {
            head: 'Autodidactic',
            leaf: true,
            key: 'skills-1-4-3',
            items: [
              'For instance, I taught myself 2 semesters worth of college calculus in 2 months while only a sophomore in high school'
            ]
          },
          {
            head: 'Sociable',
            leaf: true,
            key: 'skills-1-4-4',
            items: [
              "Let's get coffee"
            ]
          },
          {
            head: 'Fierce Tenacity',
            leaf: true,
            key: 'skills-1-4-5',
            items: [
              "I'm unafraid of doling out criticism where it's due, and luckily previous employers have only viewed this as an asset",
              "In teams, I seek the most adept member and push for their appointment as leader",
              "If I can't find such an adept teammate, I tend to make myself the leader"
            ]
          }
        ]
      }
    ]
  }
]

export default skills;

