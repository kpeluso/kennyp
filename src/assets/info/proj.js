const proj = [
  {
    head: 'Projects',
    leaf: false,
    key: 'proj-1',
    items: [
      {
        head: 'Head-Controlled RC Car, 2016',
        leaf: true,
        key: 'proj-1-1',
        items: [
          'Completed in a team of 3',
          'Developed a means of controlling an RC using only head movements for the purpose of prototyping an assistive technology',
          'Used Python, Bash, a Rasberry Pi, and other hardware'
        ]
      },
      {
        head: 'Biotech Stock Prediction, 2016',
        leaf: true,
        key: 'proj-1-2',
        items: [
          'Completed in a team of 4',
          'Developed decision tree, logistic regression, SVM, and naïve bayes classifiers in Python to predict the movement of biotech stock prices using clinical trial data, and visualized insights in D3.js'
        ]
      },
      {
        head: 'Wayvepool, 2015',
        leaf: true,
        key: 'proj-1-3',
        items: [
          'Completed during Hack@Brown, 2015',
          'Completed in a team of 4',
          'Designed and wrote the front-end for a webapp in HTML/CSS/JS that enables multiple Spotify users to automatically mix their music interests into a single playlist'
        ]
      }
    ]
  }
]

export default proj;

