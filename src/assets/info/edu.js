const edu = [
  {
    head: 'Education',
    leaf: false,
    key: 'edu-1',
    items: [
      {
        head: 'Schools',
        leaf: false,
        key: 'edu-1-1',
        items: [
          {
            head: 'Brown University',
            leaf: true,
            key: 'edu-1-1-1',
            items: [
              'Providence, RI',
              'ScB Applied Math with Honors, completed 2018',
              'Attended 2014-2018',
              'GPA: 3.7/4.0',
              'TA for ENGN 0090 - Management of Industrial and Nonprofit Organizations'
            ]
          }
        ]
      },
      {
        head: 'Courses',
        leaf: false,
        key: 'edu-1-2',
        items: [
          {
            head: 'Mathematics Courses (14)',
            leaf: false,
            key: 'edu-1-2-1',
            items: [
              {
                head: 'Independent Study - Honors Thesis',
                leaf: true,
                key: 'edu-1-2-1-1',
                items: [
                  'APMA 1970',
                  'Senior Fall, 2017, and Senior Spring, 2018',
                  'Advisor: Bjorn Sandstede',
                  'Second Reader: Anastasios Matzavinos'
                ]
              },
              {
                head: 'Operations Research: Deterministic Models',
                leaf: true,
                key: 'edu-1-2-1-2',
                items: [
                  'APMA 1210',
                  'Senior Fall, 2017',
                  'An introduction to the basic mathematical ideas and computational methods of optimizing allocation of effort or resources, with or without constraints. Linear programming, network models, dynamic programming, and integer programming.',
                  'Taught by Boris Rozovsky.'
                ]
              },
              {
                head: 'Topics in Chaotic Dynamics',
                leaf: true,
                key: 'edu-1-2-1-3',
                items: [
                  'APMA 1360',
                  'Junior Spring, 2017',
                  'This course gives an overview of the theory and applications of dynamical systems modeled by differential equations and maps. We will discuss changes of the dynamics when parameters are varied, investigate periodic and homoclinic solutions that arise in applications, and study the impact of additional structures such as time reversibility and conserved quantities on the dynamics. We will also study systems with complicated "chaotic" dynamics that possess attracting sets which do not have an integer dimension. Applications to chemical reactions, climate, epidemiology, and phase transitions will be discussed.',
                  'Taught by Bjorn Sandstede.'
                ]
              },
              {
                head: 'Analysis: Functions of One Variable',
                leaf: true,
                key: 'edu-1-2-1-4',
                items: [
                  'MATH 1010',
                  'Junior Spring, 2017',
                  'Completeness properties of the real number system, topology of the real line. Proof of basic theorems in calculus, infinite series. Topics selected from ordinary differential equations. Fourier series, Gamma functions, and the topology of Euclidean plane and 3-space.',
                  'Taught by Justin Holmer.'
                ]
              },
              {
                head: 'Monte Carlo Simulation with Applications to Finance',
                leaf: true,
                key: 'edu-1-2-1-5',
                items: [
                  'APMA 1720',
                  'Junior Fall, 2016',
                  'The course will cover the basics of Monte Carlo and its applications to financial engineering: generating random variables and simulating stochastic processes; analysis of simulated data; variance reduction techniques; binomial trees and option pricing; Black-Scholes formula; portfolio optimization; interest rate models. The course will use MATLAB as the standard simulation tool.',
                  'Taught by Nicolas Garcia Trillos.'
                ]
              },
              {
                head: 'Probabilities in Quantum Mechanics',
                leaf: true,
                key: 'edu-1-2-1-6',
                items: [
                  'APMA 1930R',
                  'Junior Fall, 2016',
                  'We will start from scratch. The only prerequisites are some probability and a good facility with mathematics. We will be rigorous, while making a careful accounting of the (surprisingly few) conceptual assumptions that lead inexorably to consequences that are almost impossible to believe. With an eye on some of the most startling and vexing of these, we will construct a minimum mathematical foundation sufficient to explore: the abrupt transition from the weird quantum to the familiar classical world; the uncertainty principles; teleportation; Bell’s theorem and the Einstein-Bohr debates; quantum erasure; the Conway-Kochen “free-will theorem”; and (unbreakable) quantum encryption.',
                  'Taught by Stuart Geman.'
                ]
              },
              {
                head: 'Quantitative Models of Biological Systems',
                leaf: true,
                key: 'edu-1-2-1-7',
                items: [
                  'APMA 1070',
                  'Junior Fall, 2016',
                  'Quantitative dynamic models help understand problems in biology and there has been rapid progress in recent years. The course provides an introduction to the concepts and techniques, with applications to population dynamics, infectious diseases, enzyme kinetics, aspects of cellular biology. Additional topics covered will vary. Mathematical techniques will be discussed as they arise in the context of biological problems.',
                  'Taught by Anastasios Matzavinos.'
                ]
              },
              {
                head: 'Operations Research: Probabilistic Models',
                leaf: true,
                key: 'edu-1-2-1-8',
                items: [
                  'APMA 1200',
                  'Sophomore Spring, 2016',
                  'Basic probabilistic problems and methods in operations research and management science. Methods of problem formulation and solution. Markov chains, birth-death processes, stochastic service and queueing systems, the theory of sequential decisions under uncertainty, dynamic programming.',
                  'Taught by Hui Wang.'
                ]
              },
              {
                head: 'Finite Volume Method for CFD',
                leaf: true,
                key: 'edu-1-2-1-9',
                items: [
                  'APMA 1190',
                  'Sophomore Spring, 2016',
                  'Finite Difference Method, Finite Volume Method, modeling of various fluid dynamics including Navier-Stokes Equations. Uses OpenFOAM C++ library as modeling tool.',
                  'Taught by Nat Trask.'
                ]
              },
              {
                head: 'Methods of Applied Math II',
                leaf: true,
                key: 'edu-1-2-1-10',
                items: [
                  'APMA 0360',
                  'Sophomore Fall, 2015',
                  'Mathematical techniques involving differential equations used in the analysis of physical, biological and economic phenomena. Emphasis on the use of established methods, rather than rigorous foundations. I: First and second order differential equations. II: Applications of linear algebra to systems of equations; numerical methods; nonlinear problems and stability; introduction to partial differential equations; introduction to statistics.',
                  'Taught by David Lipshutz.'
                ]
              },
              {
                head: 'Methods of Applied Math I',
                leaf: true,
                key: 'edu-1-2-1-11',
                items: [
                  'APMA 0350',
                  'Freshman Spring, 2015',
                  'This course gives a comprehensive introduction to the qualitative and quantitative theory of ordinary differential equations and their applications. Specific topics covered include applications of differential equations in biology, chemistry, economics, and physics; integrating factors and separable equations; techniques for solving linear systems of differential equations; numerical approaches to solving differential equations; phase-plane analysis of planar nonlinear systems; rigorous theoretical foundations of differential equations.',
                  'Taught by David Lipshutz.'
                ]
              },
              {
                head: 'Honors Linear Algebra',
                leaf: true,
                key: 'edu-1-2-1-12',
                items: [
                  'MATH 0540',
                  'Freshman Spring, 2015',
                  'Linear algebra for students of greater aptitude and motivation, especially mathematics and science concentrators with a good mathematical preparation. Matrices, linear equations, determinants, and eigenvalues; vector spaces and linear transformations; inner products; Hermitian, orthogonal, and unitary matrices; and Jordan normal forms.',
                  'Taught by Francesco Di Plinio.'
                ]
              },
              {
                head: 'Statistical Inference I',
                leaf: true,
                key: 'edu-1-2-1-13',
                items: [
                  'APMA 1650',
                  'Freshman Fall, 2014',
                  'An integrated first course in mathematical statistics. The first half of APMA 1650 covers probability and the last half is statistics, integrated with its probabilistic foundation. Specific topics include probability spaces, discrete and continuous random variables, methods for parameter estimation, confidence intervals, and hypothesis testing.',
                  'Taught by Caroline Klivans.'
                ]
              },
              {
                head: 'Honors Calculus',
                leaf: true,
                key: 'edu-1-2-1-14',
                items: [
                  'MATH 0350',
                  'Freshman Fall, 2014',
                  "A third-semester calculus course for students of greater aptitude and motivation. Topics include vector analysis, multiple integration, partial differentiation, line integrals, Green's theorem, Stokes' theorem, the divergence theorem, and additional material selected by the instructor.",
                  'Taught by Joseph Silverman.'
                ]
              }
            ]
          },
          {
            head: 'Computer Science Courses (6)',
            leaf: false,
            key: 'edu-1-2-2',
            items: [
              {
                head: 'Deep Learning',
                leaf: true,
                key: 'edu-1-2-2-1',
                items: [
                  'CSCI 1470',
                  'Senior Fall, 2017',
                  'Deep learning is the name for a particular version of neural networks--a version that emphasizes multiple layers of networks. Deep leaning, plus the specialized techniques that it has inspired (e.g. convolutional features and word embeddings) have lead to rapid improvements in many applications such as computer vision, machine translation, and computer Go. This course intends to give students a practical understanding of deep learning as applied in these and other areas. It also teaches the Tensorflow programming language for the expression of deep leaning algorithms.',
                  'Taught by Eugene Charniak.'
                ]
              },
              {
                head: 'Machine Learning',
                leaf: true,
                key: 'edu-1-2-2-2',
                items: [
                  'CSCI 1420',
                  'Junior Spring, 2017',
                  'We explore the theory and practice of statistical machine learning, focusing on computational methods for supervised and unsupervised data analysis. Specific topics include Bayesian and maximum likelihood parameter estimation, regularization and sparsity-promoting priors, kernel methods, the expectation maximization algorithm, and models for data with temporal or hierarchical structure. Applications to regression, categorization, clustering, and dimensionality reduction problems are illustrated by examples from vision, language, bioinformatics, and information retrieval.',
                  'Taught by Pedro Felipe Felzenszwalb.'
                ]
              },
              {
                head: 'Artificial Intelligence',
                leaf: true,
                key: 'edu-1-2-2-3',
                items: [
                  'CSCI 1410',
                  'Junior Spring, 2017',
                  'Practical approaches to designing intelligent systems. Topics include search and optimization, uncertainty, learning, and decision making. Application areas include natural language processing, machine vision, machine learning, and robotics.',
                  'Taught by George Konidaris.'
                ]
              },
              {
                head: 'Real-Time and Embedded Systems',
                leaf: true,
                key: 'edu-1-2-2-4',
                items: [
                  'CSCI 1600',
                  'Junior Fall, 2016',
                  'Comprehensive introduction to the design and implementation of software for programmable embedded computing systems, those enclosed in devices such as cellular phones, game consoles, and car engines. Includes the overall embedded real-time software design and development processes, as well as aspects of embedded hardware and real-time, small-footprint operating systems. Major project component.',
                  'Taught by Steven Reiss.'
                ]
              },
              {
                head: 'Data Science',
                leaf: true,
                key: 'edu-1-2-2-5',
                items: [
                  'CSCI 1951A',
                  'Sophomore Spring, 2016',
                  'Mastering big data requires skills spanning a variety of disciplines: distributed systems over statistics, machine learning, and a deep understanding of a complex ecosystem of tools and platforms. Data Science refers to the intersection of these skills and how to transform data into actionable knowledge. This course provides an overview of techniques and tools involved and how they work together: SQL and NoSQL solutions for massive data management, basic algorithms for data mining and machine learning, information retrieval techniques, and visualization methods.',
                  'Taught by Tim Kraska.'
                ]
              },
              {
                head: 'Accelerated Introduction to Computer Science',
                leaf: true,
                key: 'edu-1-2-2-6',
                items: [
                  'CSCI 0190',
                  'Sophomore Fall, 2015',
                  'A one-semester introduction to CS covering programming integrated with core data structures, algorithms, and analysis techniques, similar to the two-course introductory sequences.',
                  'Taught by Shriram Krishnamurthi.'
                ]
              }
            ]
          },
          {
            head: 'Business Courses (4)',
            leaf: false,
            key: 'edu-1-2-3',
            items: [
              {
                head: 'Persuasive Communication',
                leaf: true,
                key: 'edu-1-2-3-1',
                items: [
                  'TAPS 0220',
                  'Senior Spring, 2018',
                  'Provides an introduction to public speaking, and helps students develop confidence in public speaking through the presentation of persuasive speeches.',
                  'Taught by Barbara Tannenbaum.'
                ]
              },
              {
                head: 'Market Research in Public and Private Sectors',
                leaf: true,
                key: 'edu-1-2-3-2',
                items: [
                  'SOC 1260',
                  'Sophomore Spring, 2016',
                  'Introduction to data and research methods for private and public sector organizations. Data used in market research include trends in the population of consumers, economic trends, trends within sectors and industries, analyses of product sales and services, and specific studies of products, promotional efforts, and consumer reactions. Emphasizes the use of demographic, GIS, and other available data.',
                  'Taught by Carrie Spearin.'
                ]
              },
              {
                head: 'Principles of Economics',
                leaf: true,
                key: 'edu-1-2-3-3',
                items: [
                  'ECON 0110',
                  'Sophomore Fall, 2015',
                  'Extensive coverage of economic issues, institutions, and terminology, plus an introduction to economic analysis and its application to current social problems.',
                  'Taught by Rachel Friedberg.'
                ]
              },
              {
                head: 'Management of Industrial and Nonprofit Organizations',
                leaf: true,
                key: 'edu-1-2-3-4',
                items: [
                  'ENGN 0090',
                  'Freshman Fall, 2014',
                  'Exposes students to the concepts and techniques of management. Topics include marketing, strategy, finance, operations, organizational structure, and human relations. Guest lecturers describe aspects of actual organizations. Lectures and discussions.',
                  'Taught by Barrett Hazeltine.'
                ]
              }
            ]
          },
          {
            head: 'Other Courses (7)',
            leaf: false,
            key: '2-edu-1-2-4',
            items: [
              {
                head: 'Special Topics in Cognition: Collective Cognition',
                leaf: true,
                key: 'edu-1-2-4-1',
                items: [
                  'CLPS 1280B',
                  'Senior Spring, 2018',
                  "As individuals, we know little. We overestimate our knowledge of common objects and political policies, and the depth of our arguments. But humanity has achieved great things using its mental powers. The most likely reason is that we live in a community of knowledge, guided by shared intentionality. Communities understand how things work, and individuals fail to distinguish what they know from the knowledge that resides in other people's heads. In this course, we will evaluate these claims and discuss how they constrain theorizing in cognitive science. We will draw from literatures in psychology, philosophy, and computer science.",
                  'Taught by Steven Sloman.'
                ]
              },
              {
                head: 'Introduction to Music Theory',
                leaf: true,
                key: 'edu-1-2-4-2',
                items: [
                  'MUSC 0400',
                  'Senior Fall, 2017',
                  'An introduction to musical terms, elements, and techniques, including notation, intervals, scales and modes, triads and seventh chords, modulation, melody writing and harmonization, analysis, and composition. Ear-training and sight-singing are included. For students with some musical training.',
                  'Taught by Linda Jiorle-Nagy.'
                ]
              },
              {
                head: 'Economics for Public Policy',
                leaf: true,
                key: 'edu-1-2-4-3',
                items: [
                  'PLCY 1600',
                  'Junior Fall, 2016',
                  'This course examines the role of the public sector in the economy. We begin by exploring when and how the government intervenes in the economy. We also consider the impact of government intervention. We then use this theoretical foundation to examine current issues in expenditure, education, health, retirement, business competition, environment, cybersecurity, crime, financial, and tax policy. The student will acquire analytical skills to better evaluate existing and alternative public policy alternatives. Qualitative and quantitative methods will be used throughout the course.',
                  'Taught by Thanh Nguyen.'
                ]
              },
              {
                head: 'Comedy from Athens to Hollywood',
                leaf: true,
                key: 'edu-1-2-4-4',
                items: [
                  'COLT 0701Z',
                  'Sophomore Spring, 2016',
                  'A literary study of Western comedy across all recorded time, from Aristophanes to Monty Python.',
                  'Taught by Molly Ierulli.'
                ]
              },
              {
                head: 'Making Decisions',
                leaf: true,
                key: 'edu-1-2-4-5',
                items: [
                  'CLPS 0220',
                  'Freshman Spring, 2015',
                  'Life is full of decisions. Some decisions are made rationally, others could be improved. This course considers the psychology of human decision-making, the analysis of optimal decision-making, and implications for individual action and social policy. Topics include: chance and preference (e.g., how do consumers weigh attributes when making purchases?); the value of information (e.g., when should physicians order expensive diagnostic tests?); risky choice (e.g., is it rational to play the lottery?).',
                  'Taught by Steven Sloman.'
                ]
              },
              {
                head: 'Weather and Climante',
                leaf: true,
                key: 'edu-1-2-4-6',
                items: [
                  'GEOL 1350',
                  'Freshman Spring, 2015',
                  'Weather phenomena occur on short time scales, and form the basis for understanding climate, the study of changes over longer time scales. This course aims to provide an understanding of the processes that drive weather patterns, the general circulation of the atmosphere, and climate on Earth. Topics include: structure and composition of the atmosphere; sources of energy driving atmospheric processes; weather forecasting; the hydrological cycle; the forces that create severe weather; the influence of humans on the atmosphere; and factors that influence climate, climate variability and climate change.',
                  'Taught by Meredith K Hastings.'
                ]
              },
              {
                head: 'Martial Arts, Culture, and Society',
                leaf: true,
                key: 'edu-1-2-4-7',
                items: [
                  'SOC 1871Z',
                  'Freshman Fall, 2014',
                  'A sociological perspective of the embodied practice, moving meditation, and customs associated with the martial arts.',
                  'Taught by Michael Kennedy.'
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

export default edu;

