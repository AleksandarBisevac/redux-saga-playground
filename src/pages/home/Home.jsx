import React from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteUserStart,
  loadUsersStart,
  searchUsersStart,
} from '../../redux/actions';
//components
import WithHeader from '../../layout/WithHeader';
import { Button, Grid, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import AccessibleIcon from '@mui/icons-material/Accessible';
import GroupIcon from '@mui/icons-material/Group';
//config
import { columns, filterModelOptions, userOptions } from './config';
//utils & services
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const { users, loading, error } = useSelector((state) => state.data);
  const [filterModel, setFilterModel] = React.useState({
    items: [filterModelOptions[0]],
  });
  const [filters, setFilters] = React.useState();
  const [rows, setRows] = React.useState([]);

  const handleRowClick = (id) => {
    navigate(`/user-info/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure that you want to delete selected user?'))
      dispatch(deleteUserStart(id));
  };
  const handleEdit = (id) => {
    navigate(`/edit-user/${id}`);
  };

  const handleFilterChange = (key, value, filters) => {
    let filtersCopy = { ...filters };
    if (!value && value !== 0 && key) {
      delete filtersCopy[key];
      setFilters({ ...filtersCopy });
    } else {
      setFilters({ ...filtersCopy, [key]: value });
    }
  };

  const dataColumns = React.useMemo(() => {
    return columns(handleEdit, handleDelete, handleRowClick);
  }, [users]);

  React.useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  React.useEffect(() => {
    setRows([...users]);
  }, [users]);

  React.useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  React.useEffect(() => {
    dispatch(searchUsersStart(filters));
  }, [filters]);

  console.log(filters);
  return (
    <>
      <Typography variant='h1'>Home</Typography>
      <Grid container style={{ height: 600, minWidth: 800, width: '100%' }}>
        <Grid
          container
          flexDirection='column'
          backgroundColor={theme.palette.primary.main}
          minHeight={80}
        >
          <Grid item>
            <Typography variant='h6'>Users list</Typography>
          </Grid>
          <Grid item>
            <Grid container columnGap={5} paddingX={'24px'} paddingY={'12px'}>
              <Grid item>
                <Button
                  startIcon={<GroupIcon />}
                  variant='outlined'
                  style={
                    !filters?.activity && filters?.activity !== 0
                      ? {
                          backgroundColor: theme.palette.common.dark,
                          color: theme.palette.primary.light,
                        }
                      : { backgroundColor: theme.palette.common.white }
                  }
                  onClick={() => handleFilterChange('activity', '', filters)}
                >
                  All
                </Button>
              </Grid>
              <Grid item>
                <Button
                  startIcon={<SportsMartialArtsIcon />}
                  variant='outlined'
                  style={
                    filters?.activity
                      ? {
                          backgroundColor: theme.palette.common.dark,
                          color: theme.palette.primary.light,
                        }
                      : { backgroundColor: theme.palette.common.white }
                  }
                  onClick={() => handleFilterChange('activity', 1, filters)}
                >
                  Active
                </Button>
              </Grid>
              <Grid item>
                <Button
                  startIcon={<AccessibleIcon />}
                  variant='outlined'
                  style={
                    filters?.activity === 0
                      ? {
                          backgroundColor: theme.palette.common.dark,
                          color: theme.palette.primary.light,
                        }
                      : { backgroundColor: theme.palette.common.white }
                  }
                  onClick={() => handleFilterChange('activity', 0, filters)}
                >
                  Inactive
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <DataGrid
          components={{
            Toolbar: () => (
              <div>
                <GridToolbar />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 20,
                  }}
                >
                  {filters
                    ? Object.entries(filters).map(([key, value]) => (
                        <p key={key}>
                          {key}
                          {' : '}
                          {value}
                        </p>
                      ))
                    : null}
                </div>
              </div>
            ),
            LoadingOverlay: LinearProgress,
          }}
          componentsProps={{
            filterPanel: {
              // Display columns by ascending alphabetical order
              columnsSort: 'asc',
              filterFormProps: {
                // Customize inputs by passing props
                linkOperatorInputProps: {
                  variant: 'outlined',
                  size: 'small',
                },
                columnInputProps: {
                  variant: 'outlined',
                  size: 'small',
                  sx: { mt: 'auto' },
                },
                operatorInputProps: {
                  variant: 'outlined',
                  size: 'small',
                  sx: { mt: 'auto' },
                },
                valueInputProps: {
                  InputComponentProps: {
                    variant: 'outlined',
                    size: 'small',
                  },
                },
                deleteIconProps: {
                  sx: {
                    '& .MuiSvgIcon-root': { color: '#d32f2f' },
                  },
                },
              },
              sx: {
                // Customize inputs using css selectors
                '& .MuiDataGrid-filterForm': { p: 2 },
                '& .MuiDataGrid-filterForm":nth-of-type"(even)': {
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#444' : '#f5f5f5',
                },
                '& .MuiDataGrid-filterFormLinkOperatorInput': { mr: 2 },
                '& .MuiDataGrid-filterFormColumnInput': { mr: 2, width: 150 },
                '& .MuiDataGrid-filterFormOperatorInput': { mr: 2 },
                '& .MuiDataGrid-filterFormValueInput': { width: 200 },
              },
            },
          }}
          loading={loading}
          filterMode='server'
          rows={rows}
          columns={dataColumns}
          isRowSelectable={() => false}
          isCellEditable={() => false}
          sx={{
            '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
              outline: 'none',
            },
          }}
          filterModel={filterModel}
          onFilterModelChange={(a) => {
            let newFilterModel = filterModelOptions.find(
              (x) => x.columnField === a.items[0].columnField
            );
            setFilterModel({ items: [newFilterModel] });
            handleFilterChange(
              a.items[0].columnField,
              a.items[0].value,
              filters
            );
          }}
        />
      </Grid>
    </>
  );
};

export default WithHeader(Home);
