import React from 'react';

import cv from '../files/KennethPeluso_CV.pdf';
import transcript from '../files/InternalRecord.pdf';
import thesis_overview from '../files/Thesis_overview.pdf';
import thesis_article from '../files/Thesis_asArticle.pdf';
import thesis from '../files/Thesis.pdf';
import blackjack from '../files/My_Blackjack_Strategy.pdf';

const files = [
  {
    head: 'Files',
    leaf: false,
    key: 'files-1',
    items: [
      {
        head: 'Resume',
        leaf: true,
        key: 'files-1-1',
        items: [
          <a href={cv} target="_blank">Click to view or download my resume.</a>
        ]
      },
      {
        head: 'Brown University Transcript',
        leaf: true,
        key: 'files-1-2',
        items: [
          <a href={transcript} target="_blank">Click to view or download my undergraduate transcript.</a>
        ]
      },
      {
        head: 'Overview of Honors Thesis',
        leaf: true,
        key: 'files-1-3',
        items: [
          <a href={thesis_overview} target="_blank">Click to view or download the high-level overview of my honors thesis.</a>
        ]
      },
      {
        head: 'Honors Thesis as Article',
        leaf: true,
        key: 'files-1-4',
        items: [
          <a href={thesis_article} target="_blank">Click to view or download my honors thesis configured as an article.</a>
        ]
      },
      {
        head: 'Applied Math Honors Thesis',
        leaf: true,
        key: 'files-1-5',
        items: [
          <a href={thesis} target="_blank">Click to view or download my honors thesis.</a>
        ]
      },
      {
        head: 'Analysis of Blackjack Strategy',
        leaf: true,
        key: 'files-1-6',
        items: [
          <a href={blackjack} target="_blank">Click to view or download an anlysis of my betting strategy.</a>
        ]
      }
    ]
  }
]

export default files;

