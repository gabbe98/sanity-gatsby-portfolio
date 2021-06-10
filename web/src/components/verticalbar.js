import React from 'react';
import { Bar } from 'react-chartjs-2';
import * as styles from "./verticalbar.module.css";

const data = {
  labels: ['HTML/CSS', 'React', 'Vue', 'Backend', 'Wordpress', 'Web Design'],
  datasets: [
    {
      label: 'Skillset data.',
      data: [9.5, 8.5, 7, 6, 7.5, 4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => (
  <>
    <h1 className={styles.title}>My skillset</h1>
    <Bar className={styles.verticalbarchart} data={data} options={options} />
  </>
);

export default VerticalBar;
