import DeleteButton from '../../components/buttons/DeleteButton';
import EditButton from '../../components/buttons/EditButton';
import { Grid } from '@mui/material';
import ViewButton from '../../components/buttons/ViewButton';

export const userOptions = [
  { label: 'Active', value: 1 },
  { label: 'Inactive', value: 0 },
];

export const columns = (handleEdit, handleDelete, handleSelect) => [
  { field: 'id', headerName: 'id', minWidth: 50, flex: 1 },
  { field: 'name', headerName: 'name', minWidth: 100, flex: 2 },
  { field: 'email', headerName: 'email', minWidth: 100, flex: 2 },
  { field: 'phone', headerName: 'phone', minWidth: 100, flex: 2 },
  { field: 'country', headerName: 'country', minWidth: 100, flex: 2 },
  {
    field: 'activity',
    headerName: 'activity',
    minWidth: 100,
    flex: 2,
    filterable: false,
  },
  {
    field: 'createdAt',
    headerName: 'created',
    filterable: false,
    width: 200,
    valueGetter: (params) => new Date(params.row.createdAt).toLocaleString(),
  },
  {
    field: 'action',
    headerName: 'actions',
    minWidth: 220,
    sortable: false,
    filterable: false,
    disableClickEventBubbling: true,
    renderCell: (params) => {
      return (
        <Grid container justifyContent='space-between'>
          <Grid item>
            <EditButton
              onClick={(e) => {
                e.ignore = true;
                handleEdit(params.id);
              }}
            />
          </Grid>
          <Grid item>
            <DeleteButton
              onClick={(e) => {
                e.ignore = true;
                handleDelete(params.id);
              }}
            />
          </Grid>
          <Grid item>
            <ViewButton
              onClick={(e) => {
                e.ignore = true;
                handleSelect(params.id);
              }}
            />
          </Grid>
        </Grid>
      );
    },
  },
];

export const filterModelOptions = [
  { columnField: 'id', operatorValue: 'contains', value: '' },
  { columnField: 'name', operatorValue: 'contains', value: '' },
  { columnField: 'email', operatorValue: 'contains', value: '' },
  { columnField: 'phone', operatorValue: 'contains', value: '' },
  { columnField: 'country', operatorValue: 'contains', value: '' },
];
