import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import MoreIcon from '@mui/icons-material/More';

export const StyledViewButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  color: theme.palette.common.white,
  borderWidth: '1px',
  borderColor: theme.palette.warning.main,
  borderStyle: 'solid',
  '&:hover': {
    color: theme.palette.warning.main,
    backgroundColor: theme.palette.common.white,
  },
  transition: theme.transitions.create(['background-color', 'transform'], {
    duration: 500,
    easing: theme.transitions.easing.easeInOut,
  }),
}));

const ViewButton = (props) => {
  return (
    <StyledViewButton size='medium' variant='contained' onClick={props.onClick}>
      <MoreIcon />
    </StyledViewButton>
  );
};

export default ViewButton;
