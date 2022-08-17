import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux/es/exports';
//components
import { Check } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import WithHeader from '../../layout/WithHeader';
//config
import { initialState } from './config';
import { createUserStart, updateUserStart } from '../../redux/actions';
import { userOptions } from '../home/config';

const initValue = {
  name: '',
  email: '',
  phone: '',
  address: '',
  activity: '',
};

const AddEditUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  //components state
  const [editMode, setEditMode] = React.useState(false);
  const [formValue, setFormValue] = React.useState(initialState);
  const { name, email, phone, country, activity } = formValue;
  const [error, setError] = React.useState();
  //redux entities
  const { users } = useSelector((state) => state.data);

  //private
  const resetForm = () => {
    setFormValue({ ...initValue });
  };
  //handlers
  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();

      if (
        name.trim() &&
        email.length > 3 &&
        phone &&
        country.trim() &&
        isFinite(activity)
      ) {
        if (!editMode)
          dispatch(createUserStart({ ...formValue, createdAt: new Date() }));
        else {
          dispatch(
            updateUserStart({
              id: id,
              user: { ...formValue, updatedAt: new Date() },
            })
          );
        }
        setTimeout(() => navigate('/'), 500);
      }
    },
    [country, phone, name, email, activity]
  );

  React.useLayoutEffect(() => {
    if (location?.pathname === '/add-user') {
      setEditMode(false);
      resetForm();
    } else setEditMode(true);
  }, [location]);

  React.useEffect(() => {
    if (id) {
      const selectedUser = users.find((item) => item.id == id);
      setFormValue({ ...selectedUser });
    }
  }, [id]);

  return (
    <Box>
      <Grid container width='100%'>
        <Grid item width={'100%'} style={{ marginTop: '100px' }}>
          <Typography textAlign={'center'} variant='h1'>
            {editMode ? 'edit' : 'add'} User
          </Typography>
        </Grid>
        <Grid
          item
          width='100%'
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <Grid
            container
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Grid item>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                <FormControl error={!!error?.name}>
                  <InputLabel htmlFor='name'>Name</InputLabel>
                  <Input
                    id='name'
                    aria-describedby='name-error'
                    onChange={handleChange}
                    value={name || ''}
                  />
                  {error?.email ? (
                    <FormHelperText id='name-error'>
                      We'll never share your data.
                    </FormHelperText>
                  ) : null}
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor='email'>Email</InputLabel>
                  <Input
                    id='email'
                    aria-describedby='error-email'
                    onChange={handleChange}
                    value={email || ''}
                  />
                  <FormHelperText id='error-email'></FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor='phone'>Phone</InputLabel>
                  <Input
                    id='phone'
                    aria-describedby='error-phone'
                    onChange={handleChange}
                    value={phone || ''}
                  />
                  <FormHelperText id='error-phone'></FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor='country'>Country</InputLabel>
                  <Input
                    id='country'
                    aria-describedby='error-country'
                    onChange={handleChange}
                    value={country || ''}
                  />
                  <FormHelperText id='error-country'></FormHelperText>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id='user-activity-label'>
                    User Activity
                  </InputLabel>
                  <Select
                    labelId='user-activity-label'
                    id='activity'
                    value={activity || ''}
                    label='User Activity'
                    onChange={(e) => {
                      e.target.id = 'activity';
                      handleChange(e);
                    }}
                  >
                    <MenuItem value={userOptions[0].value}>
                      {userOptions[0].label}
                    </MenuItem>
                    <MenuItem value={userOptions[1].value}>
                      {userOptions[1].label}
                    </MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant='outlined'
                  type='submit'
                  startIcon={<Check />}
                  style={{ marginTop: 20 }}
                >
                  {editMode ? 'edit' : 'add'}
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WithHeader(AddEditUser);
