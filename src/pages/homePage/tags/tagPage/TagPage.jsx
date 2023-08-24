import arrow from "../../../../assets/images/greenArrowDown.png";
import pencil from "../../../../assets/images/tagEdit.png";
import arrowUp from "../../../../assets/images/greenArrowUp.png";
import search from "../../../../assets/images/search.png";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import './style.scss';
import TableContact, {UsersTable} from "./currTagTable/tagTable";
import {useEffect, useState} from 'react';
import {fieldList} from "../../../../constants";
import {ColumnFieldSelector} from "./fieldSelector/columnFieldSelector";

export const TagPage = () => {
    const [visibleCol, setVisibleCol] = useState(
        [fieldList.email, fieldList.firstName, fieldList.lastName, fieldList.addresses,]
    )
    const [isClicked, setIsClicked] = React.useState(false);
    const [searchRow, setSearchRow] = useState()

    const navigate = useNavigate()

    let data = [
        {checkbox:'false', email:"dolores.chambers@example.com", firstName:"Test Corp", lastName:"Yonkers", addresses:"NY"},
        {checkbox:'false', email:"curtis.weaver@example.com", firstName:"Test Corp", lastName:"ccccc", addresses:"NY"},
        {checkbox:'false',email:"jackson.graham@example.com", firstName:"Test Corp", lastName:"12222", addresses:"KZ"},
        {checkbox:'false',email:"sara.cruz@example.com", firstName:"Test Corp", lastName:"ggg", addresses:"UA"},
        {checkbox:'false',email:"felicia.reid@example.com", firstName:"Test Corp", lastName:"Yonkedgffrs", addresses:"BL"},
        {checkbox:'false',email:"deanna.curtis@example.com", firstName:"Test Corp", lastName:"f", addresses:"NY"},
        {checkbox:'false',email:"michelle.rivera@example.com ", firstName:"Test Corp", lastName:"qqqqqqqq", addresses:"NY"},
        {checkbox:'false',email:"debbie.baker@example.com", firstName:"Test Corp", lastName:"ssssssssss", addresses:"US"},
        {checkbox:'false',email:"jesasdqwesica.non@example.com", firstName:"Test Corp", lastName:"Yondkers", addresses:"UK"},
        {checkbox:'false',email:"jessica.hanson@example.com", firstName:"Test Corp", lastName:"Yonkers", addresses:"MS"},
        {checkbox:'false',email:"deanna.csdaurtis@example.com", firstName:"Test Corp", lastName:"Yonkddders", addresses:"MX"},
    ];

    let dataArr = data.map((item, i) =>
        [item.email, item.firstname, item.lastname, item.addresses],
    )
    if(searchRow){
            data = data.filter(currentArr => {
            console.log(currentArr, "currentArr")
            return(
                Object.values(currentArr).some(arr => arr.toLowerCase().includes(searchRow.toLowerCase()))
            )
        })
    }

    const handleChangeFields = (newColumns) => {
        setVisibleCol(newColumns)
    }

    const handleChangeSearch = (e) => {
        setSearchRow(e.target.value)
    }

    const handleNavBack = () => {
        navigate('/tags/', {replace:true})
    }

    const handleClick = () => {
        setIsClicked(true)
        if(isClicked){
            setIsClicked(false)
        }
    }

    const renderedTable = () => {
        /*
        if(searchRow) {
            dataArr.map(item  => {
                console.log(item, "item")
                item.map(row => {
                    console.log(row, "row")
                    row.filter(value => {
                        console.log(value, 'value')
                        return(
                            value.toLowerCase().includes(searchRow.toLowerCase())
                        )
                    })
                })
            })
        }
         */
        return(
            <UsersTable columns={visibleCol} data={data}/>
        )
    }

    const pathname = window.location.pathname;
    let appId = pathname.split('/')[2];

    return(
        <div className="curr-tag">
            <div className='header'>
                <div className='content-box'>
                    <div className='route-status'>
                        <div className="manual-routes">
                            <span onClick={handleNavBack}>#Tags /</span>
                            <p>#{appId}</p>
                        </div>
                    </div>
                    <div className="btns">
                        <button className='back' onClick={handleClick}>
                            <span>Add contacts</span>
                            <img src={isClicked ? arrowUp : arrow} alt="greenArrow"/>
                        </button>
                        <button className='back'>
                            <span>Create new campaign</span>
                        </button>
                        <button 
                            className={"filled"} 
                            >
                                <span>Save and close</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='tag-box'>
                <div className='navigation'>
                    <div className="nav-title">
                        <h1>#{appId}</h1>
                        <img src={pencil} alt="pencil"/>
                    </div>
                    <div className='filter-component'>
                        <span>Tag includes 390 contacts</span>
                        <div className='search-input'>
                            <input
                                value={searchRow}
                                placeholder='Email, name, address, etc...'
                                onChange={handleChangeSearch}
                            />
                            <img src={search} alt="tag-search"/>
                        </div>
                        <ColumnFieldSelector selectedFields={visibleCol} handleChangeFields={handleChangeFields} />
                    </div>
                </div>
                {
                    /*<UsersTable columns={visibleCol} data={dataArr}/>*/
                    renderedTable()
                }
            </div>
        </div>
    )
}