import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Grid, Typography } from '@mui/material';
import WithHeader from '../../layout/WithHeader';
import { useTheme } from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const UserInfo = () => {
  const { id } = useParams();
  const theme = useTheme();
  const { users } = useSelector((state) => state.data);
  const navigation = useNavigate();

  const selectedUser = React.useMemo(
    () => users.find((item) => item.id == id),
    [id, users]
  );

  const handleBack = () => {
    navigation(-1);
  };

  return (
    <div
      style={{
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Typography variant='h1'>User Info</Typography>
      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        alignItems='center'
        style={{ maxWidth: '450px', padding: '15px' }}
        sx={{
          border: '2px solid',
          borderColor: theme.palette.primary.main,
          marginTop: '2rem',
        }}
      >
        {Object.entries(selectedUser).map(([key, value], idx) => (
          <Grid
            item
            key={'user' + idx}
            minWidth={'100%'}
            sx={{
              padding: '0.5rem 0',
              borderBottom: '1px solid',
              borderColor: theme.palette.primary.main,
            }}
          >
            <Grid container direction='row' justifyContent='space-between'>
              <Grid item flex={1}>
                <Typography textTransform='uppercase'>{key}:</Typography>
              </Grid>
              <Grid item flex={2}>
                <Typography>
                  {key === 'createdAt' || key === 'updatedAt'
                    ? new Date(value).toLocaleString()
                    : value}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Button
        variant='outlined'
        startIcon={<ArrowBackIcon />}
        sx={{ marginTop: '2rem' }}
        onClick={handleBack}
      >
        GO BACK
      </Button>
    </div>
  );
};

export default WithHeader(UserInfo);
