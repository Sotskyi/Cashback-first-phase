import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';

const headerRows = [
  {
    id: 'image',
    align: 'left',
    disablePadding: true,
    label: 'name',
    sort: false,
  },
  {
    id: 'userName',
    align: 'left',
    disablePadding: false,
    label: 'affiliateLink',
    sort: true,
  },
  {
    id: 'userName',
    align: 'left',
    disablePadding: false,
    label: 'affiliateNetwork',
    sort: true,
  },
  {
    id: 'traineesCounter',
    align: 'left',
    disablePadding: false,
    label: 'Status',
    sort: true,
  },
  {
    id: 'userName',
    align: 'left',
    disablePadding: false,
    label: 'cashBack',
    sort: true,
  },
];

const CustomTableHeader = () => {
  return (
    <TableHead>
      <TableRow className='h-48 sm:h-64'>
        {headerRows.map((row) => {
          return (
            <TableCell
              key={row.id}
              align={row.align}
              padding={row.disablePadding ? 'none' : 'normal'}
              //   sortDirection={
              //     props.order.id === row.id
              //       ? props.order.sorting.toLowerCase()
              //       : false
              //   }
            >
              {row.sort ? (
                <Tooltip
                  title='Sort'
                  placement={
                    row.align === 'right' ? 'bottom-end' : 'bottom-start'
                  }
                  enterDelay={300}
                >
                  <TableSortLabel>
                    {/* // active={props.order.id === row.id}
                    // direction={props.order.sorting.toLowerCase()}
                    // onClick={createSortHandler(row.id)}
                    // className='font-semibold' */}
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              ) : (
                <div>{row.label}</div>
              )}
            </TableCell>
          );
        }, this)}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHeader;
