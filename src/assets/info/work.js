const work = [
  {
    head: 'Professional Experience',
    leaf: false,
    key: 'work-1',
    items: [
      {
        head: 'Full-Time Roles',
        leaf: false,
        key: 'work-1-1',
        items: [
          {
            head: 'Blockchain and Machine Learning Technologist / Full-Stack Developer @ John Hancock',
            leaf: true,
            key: 'work-1-1-1',
            items: [
              'Employed 4/18 - Present',
              'Boston, MA',
              'Integrating Blockchain and Machine Learning technology and decentralized architectures into John Hancock’s business units as part of the LOFT Innovation team'
            ]
          },
          {
            head: 'Tech Lead, Instructor @ Wantagh TechDay',
            leaf: true,
            key: 'work-1-1-2',
            items: [
              'Employed 1/14 - 1/18',
              'Wantagh, NY',
              "Helped start an annual initiative within hometown to spur an interest in computer science among young students",
              "Designed and created Meteor.js-based CRUD website devoted to hosting curriculum content and student’s code created in TechDay’s educational workshops or at home",
              "Managed a team of eight to create Python curriculum for the workshops, as well as teached Python workshops"
            ]
          }
        ]
      },
      {
        head: 'Internships',
        leaf: false,
        key: 'work-1-2',
        items: [
          {
            head: 'Summer Associate @ Bulger Partners',
            leaf: true,
            key: 'work-1-2-1',
            items: [
              'Performed product and commercial due diligence assessments of software and software-enabled firms, including evaluations of a firm’s organization, processes, technology, competitive landscape, market trends, and market size',
              'Day-to-day responsibilities included primary and secondary market research, qualitative and quantitative analysis, and a presentation of these findings internally and to the client',
              'Created educational training materials on artificial intelligence and its market trends, which was sent to a private equity firm client, as well as presented to the entire Bulger Partners staff'
            ]
          },
          {
            head: 'Business Intelligence Intern @ KVH Industries',
            leaf: true,
            key: 'work-1-2-2',
            items: [
              'Developed a logistic regression classifier in Python to predict customer data overage with 82% accuracy',
              'Introduced a Cygwin-Python interface to make these predictions accessible to sales representatives, which allows them to suggest upgrades to customers when needed; expected to save KVH $188,600/month',
              'Generated a detailed report of customer churn between data plans and presented it to the CEO and CIO',
              'Constructed a SQL database with relevant queries to easily track the movements of vessels; this allowed KVH to more efficiently convert customers from its provider’s satellites to in-house satellites, to find trends in how this process is executed, and to maintain a monthly savings of no less than $30,000/month',
              'Aided in building, testing and documenting the Wave Analytics platform; released for customer and intra-firm use'
            ]
          },
          {
            head: 'Lead Programmer @ Radium2 Capital',
            leaf: true,
            key: 'work-1-2-3',
            items: [
              'Created an automated CRM system in VBA with employee analytic and payroll functions used by six companies',
              'Trained new analysts and executives how to operate programs that I developed'
            ]
          }
        ]
      },
      {
        head: 'Research',
        leaf: false,
        key: 'work-1-3',
        items: [
          {
            head: 'Applied Math Honors Thesis @ Brown University',
            leaf: true,
            key: 'work-1-3-1',
            items: [
              '9/17 - 4/18',
              'Providence, RI',
              'Developed multiple algorithms to find an optimal transition matrix for a given stationary distribution',
              'Created an algorithm to generate all possible restricted and successively-restricted weak compositions',
              "Enter the 'Files' section of this website to view my thesis!"
            ]
          },
          {
            head: 'Psychology Research @ Sloman Lab, Brown University',
            leaf: true,
            key: 'work-1-3-2',
            items: [
              'Conducted 5/15 - 8/15',
              'Providence, RI',
              'Attempted to map Reddit explanations to logical and causal diagrams, which were in turn mapped to Bayesian network models. Each model was used to predict the quality of its respective explanation as determined from aggregate Mechanical Turk survey data.',
              'Utilized MATLAB and Python (Sympy and libpgm)'
            ]
          }
        ]
      }
    ]
  }
]

export default work;

