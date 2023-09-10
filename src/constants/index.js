// export const fieldList = {
//     email: "email",
//     firstName: "firstName",
//     checkbox:"checkbox",
//     lastName: "lastName",
//     addresses: "addresses",
//     company: "company",
//     voidField:'voidField',
//     aaaaaaaa:'aaaaaa',
//     ssssssss:"sssssss",
//     pppppppp:"pppppp",
//     ttttttt:"tttttt",
//     qqqqqqq:"qqqq",
// }
//
// export const permanentFields = {
//     checkbox:"checkbox",
//     email: "email",
//     firstName: "firstname",
//     lastName: "lastname",
//     addresses: "addresses",
// }
export const fieldList = {
    email: "email",
    firstname: "firstname",
    lastname: "lastname",
    addresses: "addresses",
    company: "company",
    voidField:'voidField',
    aaaaaaaa:'aaaaaa',
    ssssssss:"sssssss",
    pppppppp:"pppppp",
    ttttttt:"tttttt",
    qqqqqqq:"qqqq",
}

export const permanentFields = {
    email: "email",
    firstname: "firstname",
    lastname: "lastname",
    addresses: "addresses",
}

export const data = [
    {checkbox:false, email:"dolores.chambers@example.com", firstname:"ast aarp", lastname:"Yonkers", addresses:"NY"},
    {checkbox:false, email:"curtis.weaver@example.com", firstname:"jost Cop", lastname:"ccccc", addresses:"NY"},
    {checkbox:false, email:"jackson.graham@example.com", firstname:"Tac rp", lastname:"12222", addresses:"KZ"},
    {checkbox:false, email:"sara.cruz@example.com", firstname:"avs pro", lastname:"ggg", addresses:"UA"},
    {checkbox:false, email:"felicia.reid@example.com", firstname:"gpos v", lastname:"Yonkedgffrs", addresses:"BL"},
    {checkbox:false, email:"deanna.curtis@example.com", firstname:"dsc Corp", lastname:"f", addresses:"NY"},
];

export const restructuredDataColumns =  Object.keys(data[0]);

export const changeTags = [
    {
        isChecked: false,
        name: "#Passive"
    },
    {
        isChecked: false,
        name: "#Subs"
    },
    {
        isChecked: false,
        name: "#Active"
    },
    {
        isChecked: false,
        name: "#Customers"
    },
    {
        isChecked: false,
        name: "#Important"
    },
]

{/*
const restructuredColumns = useMemo(()=> {
        return columns.map((columnName, index) => {
            const label = columnName.charAt(0).toUpperCase() + columnName.slice(1);
            console.log(index, "index column")
            if (columnName === "checkbox") {
                return {
                    name: columnName,
                    header: () => test(), // Render checkbox in header
                    // options: {
                    //     customBodyRender: (value, tableMeta, updateValue) => {
                    //         return <input
                    //                     type="checkbox"
                    //                     checked={value === false ? true : null}
                    //                     onChange={updateValue}
                    //                     className={'custom-checkbox'}/>; // Custom checkbox rendering in body
                    //     },
                    // },
                };
            }
            return {
                name: columnName,
                label: label,
                options: {
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return <TableCell sx={{padding:"2px"}}>{value}</TableCell>
                    },
                },
            };
        });
    },[columns])

*/}