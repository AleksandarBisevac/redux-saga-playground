import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { EditSharp } from '@mui/icons-material';

export const StyledEditButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
  color: theme.palette.common.white,
  borderWidth: '1px',
  borderColor: theme.palette.info.main,
  borderStyle: 'solid',
  '&:hover': {
    color: theme.palette.info.main,
    backgroundColor: theme.palette.common.white,
  },
  transition: theme.transitions.create(['background-color', 'transform'], {
    duration: 500,
    easing: theme.transitions.easing.easeInOut,
  }),
}));

const EditButton = (props) => {
  return (
    <StyledEditButton size='medium' variant='contained' onClick={props.onClick}>
      <EditSharp />
    </StyledEditButton>
  );
};

export default EditButton;
