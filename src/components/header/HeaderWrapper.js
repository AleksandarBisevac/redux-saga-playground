import { styled } from '@mui/material';

export const Wrapper = styled('div')(({ theme }) => ({
  '.background': { backgroundColor: theme.palette.common.dark },
  '.linkHeader': {
    textTransform: 'uppercase',
    fontSize: '1.25rem',
    color: theme.palette.common.white,
    textDecoration: 'none',
    padding: '0 1rem',
    transition: 'all 300ms',
    '&:hover': {
      opacity: 0.7,
    },
  },
  '.active': {
    color: theme.palette.primary.light,
  },
}));
