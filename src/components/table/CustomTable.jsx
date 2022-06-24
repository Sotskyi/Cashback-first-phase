import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@material-ui/core';

import CustomTableHeader from './CustomTableHeader';

const CustomTable = () => {
  const classes = useStyles();

  const stores = [
    {
      name: 'Apple',
      affiliateLink: 'apple.com',
      affiliateNetwork: 'impact',
      cashBack: '3,444',
      status: 'published',
    },
    {
      name: 'Apple',
      affiliateLink: 'apple.com',
      affiliateNetwork: 'impact',
      cashBack: '3,444',
      status: 'published',
    },
    {
      name: 'Apple',
      affiliateLink: 'apple.com',
      affiliateNetwork: 'impact',
      cashBack: '3,444',
      status: 'published',
    },
    {
      name: 'Apple',
      affiliateLink: 'apple.com',
      affiliateNetwork: 'impact',
      cashBack: '3,444',
      status: 'published',
    },
  ];
  return (
    <div className={classes.container}>
      <Table stickyHeader aria-labelledby='tableTitle'>
        <CustomTableHeader />
        <TableBody>
          {stores.map((n) => {
            return (
              <TableRow
                hover
                role='checkbox'
                tabIndex={-1}
                key={n.id}
                // onClick={(event) => handleClick(n)}
              >
                {/* <TableCell
                      className="w-40 md:w-64 text-center"
                      padding="none"
                    >
                      <Checkbox
                        checked={isSelected}
                        onClick={(event) => event.stopPropagation()}
                        onChange={(event) => handleCheck(event, n.id)}
                      />
                    </TableCell> */}

                <TableCell
                  // className="w-52 px-4 md:px-12 "
                  // className="px-10"
                  // className='px-[15px] truncate'
                  className={classes.tableCell}
                  component='th'
                  scope='row'
                >
                  {n.name}
                  <div className={classes.divider} />
                </TableCell>

                <TableCell
                  className={classes.tableCell}
                  component='th'
                  scope='row'
                >
                  {n.affiliateLink}
                  <div className={classes.divider} />
                </TableCell>

                <TableCell
                  className={classes.tableCell}
                  component='th'
                  scope='row'
                >
                  {n.cashBack}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  component='th'
                  scope='row'
                >
                  {n?.Organization?.name}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  component='th'
                  scope='row'
                  align='right'
                >
                  {n.status}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default CustomTable;

const useStyles = makeStyles(() => ({
  container: {},
  tableCell: {
    textAlign: 'left',
    padding: '8px',
    minWidth: '206px',
    position: 'relative',
  },
  tableRow: {
    width: '1136px',
    height: '52px',
    display: 'flex',
    flexDirection: '',
  },
  divider: {
    position: 'absolute',
    top: '50%',
    right: '0',
    width: '1px',
    height: '1.6em',
    backgroundColor: '#0000000f',
    transform: 'translateY(-50%)',

    // border: '1px solid red',
  },
}));
