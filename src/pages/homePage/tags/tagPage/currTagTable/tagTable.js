import './style.scss';
import React from "react";
import MUIDataTable,{TableFilterList} from "mui-datatables";

export const UsersTable = ({columns, data}) => {
    const options = {
        filter:false,
        print:false,
        download:false,
        resizableColumns:true,
        pagination:false,
        search:false,
        viewColumns:false,
        searchable:false
    }

    return(
        <MUIDataTable
            className={'container'}
            columns={columns}
            data={data}
            options={options}
            sx={{boxShadow:'none'}}
        />
    )
}