import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';
import { Wrapper } from './HeaderWrapper';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function DenseAppBar() {
  const theme = useTheme();
  const location = useLocation().pathname;
  return (
    <Wrapper>
      <AppBar position='static' className={'background'}>
        <Toolbar variant='dense'>
          <BookIcon />
          <Link
            to={'/'}
            className={`linkHeader ${location === '/' ? 'active' : ''}`}
          >
            <Typography color='inherit' component='div'>
              home
            </Typography>
          </Link>
          <Link
            to={'/about'}
            className={`linkHeader ${location === '/about' ? 'active' : ''}`}
          >
            <Typography color='inherit' component='div'>
              about
            </Typography>
          </Link>
          <Link
            to={'/add-user'}
            className={`linkHeader ${location === '/add-user' ? 'active' : ''}`}
          >
            <Typography color='inherit' component='div'>
              add user
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
}
