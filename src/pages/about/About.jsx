import { Grid, Typography } from '@mui/material';
import React from 'react';
import WithHeader from '../../layout/WithHeader';

const About = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <Typography variant='h1' textAlign='center'>
        About
      </Typography>
      <Grid
        container
        direction='row'
        columnSpacing={5}
        padding='2rem'
        maxWidth={'100%'}
      >
        <Grid item flex={2}>
          <Typography>
            This small app has purpose of learning multiple technologies in
            Front End development. For start, I'm using ReactJS as my choice for
            developing fast and reactive web app. Alongside ReactJS, there is
            the MUI5 library for creating UI and making custom themes. State
            management is important in modern web apps, so I implemented Redux
            and Redux Saga. At the end, I've setup the json-server for
            implementing AJAX logic and have database that I can work with.
            Also, I am looking to expand this project with learning new
            technologies and making complex bushiness logic.
          </Typography>
        </Grid>
        <Grid item flex={1}>
          <Typography>
            Hi, my name is Aleksandar. I'm a frontend React developer,
            primarily. I also have knowledge and experience in React Native and
            Node/Express. My goal is to enjoy in making apps and time that I put
            into the coding. Always looking for new opportunities and
            challenges.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default WithHeader(About);
