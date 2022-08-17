import { IconButton } from '@mui/material';
import { styled, css } from '@mui/material/styles';
import { DeleteSharp } from '@mui/icons-material';

export const StyleDeleteButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  borderWidth: '1px',
  borderColor: theme.palette.error.main,
  borderStyle: 'solid',
  transition: theme.transitions.create(['background-color', 'transform'], {
    duration: 500,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover': {
    color: theme.palette.error.main,
    backgroundColor: theme.palette.common.white,
  },
}));

const DeleteButton = (props) => {
  return (
    <StyleDeleteButton
      size='medium'
      variant='contained'
      onClick={props.onClick}
    >
      <DeleteSharp />
    </StyleDeleteButton>
  );
};

export default DeleteButton;
