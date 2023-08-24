import './style.scss';
import React, {useState} from "react";
import MUIDataTable, {TableFilterList} from "mui-datatables";
import deleteImg from "../../../../../assets/images/deleteTag.png";
import editImg from "../../../../../assets/images/editTag.png";
import {permanentFields} from "../../../../../constants";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import arrow from "../../../../../assets/images/greyTagArrow.png";

function CustomRowComponent(props) {
    const [isSelected, setIsSelected] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleRowHover = (event, rowIndex) => setHoveredIndex(rowIndex);
    const handleRowHoverLeave = (event, rowIndex) => setHoveredIndex(null);
    const { checkbox, email, firstname, lastname, addresses, index } = props;
    const toggleSelect = () => {
        setIsSelected(prev => !prev)
    }
    return(
        <TableRow
            key={email}
            onMouseEnter={e => handleRowHover(e, index)}
            onMouseLeave={e => handleRowHoverLeave(e, index)}
            style={{position:"relative"}}
        >
            <TableCell>
                <input
                    checked={isSelected}
                    onClick={toggleSelect}
                    type={'checkbox'}
                />
            </TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{firstname}</TableCell>
            <TableCell>{lastname}</TableCell>
            <TableCell>{addresses}</TableCell>
            <div className={'img-box'}
                 style={hoveredIndex === index ?
                     {display:"flex", right:"7%", top:"2%"}
                     :
                     {display:"none"}}
            >
                <img src={deleteImg} alt={'del-img'} className={'del-img'} style={{marginRight:"5px"}}/>
                <img src={editImg} alt={'edit-img'}/>
            </div>
        </TableRow>
    )
}


export const UsersTable = ({columns, data}) => {

    const options = {
        filter:false,
        print:false,
        download: false,
        resizableColumns:true,
        pagination:false,
        search:false,
        viewColumns:false,
        searchable:false,
        selectableRows:true,
        rowHover:false,
        // customRowRender: (rowData, index) => {
        //     const [checkbox, email, firstname, lastname, addresses] = rowData;
        //     return(
        //         <CustomRowComponent
        //             checkbox={checkbox}
        //             email={email}
        //             firstname={firstname}
        //             lastname={lastname}
        //             addresses={addresses}
        //             index={index}
        //         />
        //     )
        // },
    }

    return(
        <MUIDataTable
            className={'container'}
            data={data}
            columns={columns}
            options={options}
            sx={{boxShadow:'none'}}
        />
    )
}