import React from 'react';
import styled from 'styled-components';
import { TableBodyArray } from '../data/tableArray';
import { useState } from 'react';


function ComparisonNavBar() {
    const tableArrayKeys = Object.keys(TableBodyArray)
    const [section, setSection] = useState(tableArrayKeys[0])

    const scrollToView = (e) => {
        console.log(e,"scroll")
        setSection(e)
        const element = document.getElementById(e);
        element.scrollIntoView(true);
    }
    
    
    return (
        <ComparisonNavBarStyle>
            {tableArrayKeys.map((item, index) => (
                <a key={index} onClick={()=>scrollToView(item)} className={`${section === item ? "active" : ""}`}>{item}</a>
            ))}
        </ComparisonNavBarStyle>
    )
}

export default ComparisonNavBar;

const ComparisonNavBarStyle = styled.div`
    display: flex;
    width: 720px;
    justify-content: space-around;
    >a{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        letter-spacing: 0.005em;
        color: #0B2F59;
        cursor: pointer;

        :hover {
            color: #0079D2;
            border-bottom: 2px solid #0079D2;
        }
        
    }
    .active{
        color: #0079D2;
        border-bottom: 2px solid #0079D2;
    }
`