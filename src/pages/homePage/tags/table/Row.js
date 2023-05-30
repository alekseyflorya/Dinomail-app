import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import * as React from 'react';
import hash from "../../../../assets/images/greenHash.png";

function createData(name, calories, fat, carbs, protein) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
    };
}

const rows = [
    createData('customer', "1 day ago", 3, 27),
    createData('passive', "1 day ago", 1, 57),
    createData('active', "1 day ago", 15, 97),
    createData('user', "1 day ago", 3, 1123),
    createData('important', "1 day ago", 3.7, 67),
    createData('general', "1 day ago", 3.7, 67),
];

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
}

export const Row = () => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [show, setShow] = React.useState(false);
    
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
        setSelected(newSelected);
    };
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
          const newSelected = rows.map((n) => n.name);
          setSelected(newSelected);
          return;
        }
        setSelected([]);
    };
    const visibleRows = React.useMemo(
        () =>
          stableSort(rows, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage,
          ),
        [order, orderBy, page, rowsPerPage],
    );
    const isSelected = (name) => selected.indexOf(name) !== -1;
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    return(
        <>
            {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <div className='row-wrapper'>
                    <TableRow
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer', position:"relative"}}
                      style={index %2 !== 0 ? {background:`#F7F7F7`} : null}
                    >
                      <TableCell padding="checkbox" sx={{borderBottom:"none"}}>
                        
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"                      
                        style={{alignItems:"center", display:"flex", height:"55.2px", borderBottom:"none"}}
                      >
                          <img 
                              src={hash}
                              style={{width:"24px", height:"24px", marginRight:"10px"}}
                              alt="hash-table"
                          />
                          <span>{row.name}</span>
                      </TableCell>
                      <TableCell sx={{borderBottom:"none"}} align="left">{row.calories}</TableCell>
                      <TableCell sx={{borderBottom:"none"}} align="left">{row.fat}</TableCell>
                      <TableCell sx={{borderBottom:"none"}} align="left">{row.carbs}</TableCell>
                      <TableCell sx={{borderBottom:"none"}} align="left">{row.protein}</TableCell>
                    </TableRow>
                    <Row/>
                  </div>
                );
              })}
            {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                  className={show ? "cellStyle" : ""}
                >
                  <TableCell colSpan={6} />
                </TableRow>
            )}
        </>
    )
}

               