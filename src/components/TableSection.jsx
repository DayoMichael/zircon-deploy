import React from 'react';
import styled from 'styled-components';
import { TableBodyArray } from '../data/tableArray';
import CheckIcon from '../assets/CheckIcon';

function TableSection({hideSame}) {
    const tableKeys =  Object.keys(TableBodyArray);
  return (
    <TableSectionStyle>
        {tableKeys.map((item, i) => {
            const innerTable= TableBodyArray[item]
            const innerTableKeys = Object.keys(innerTable);
            return (
                <div id={item} key={i}>
                    <div className='sections' >
                        <p>{item}</p>
                    </div>
                    <table className={`inner-section`}>
                        <tbody>
                        {innerTableKeys.map((item, index) => {
                            const isNumber = typeof innerTable[item]?.school1  === 'number' && typeof innerTable[item]?.school1  === 'number'
                            const isSame =  innerTable[item]?.school1 === innerTable[item]?.school2
                            return(
                                <>
                                {isSame && hideSame ? (
                                    <></>
                                    ):(
                                        <tr key={index}>
                                            <td className='section-heading'>{item}</td>
                                            <td>
                                                <div>
                                                    <p>{`${innerTable[item]?.school1}`}</p>
                                                    {isNumber && (innerTable[item]?.school1 > innerTable[item]?.school2) ? (
                                                        <CheckIcon/>
                                                    ): ""}
                                                
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p>{`${innerTable[item]?.school2}`}</p>
                                                    {isNumber && (innerTable[item]?.school1 < innerTable[item]?.school2) ? (
                                                        <CheckIcon/>
                                                    ): ""}
                                                </div></td>
                                            <td>{innerTable[item]?.school3}</td>
                                            <td>{innerTable[item]?.school4}</td>
                                        </tr>
                                    )}
                                </>
                            )
                        })}
                        </tbody>
                     </table>
                    
                </div>
            )
        })}
        

    </TableSectionStyle>
  )
}

export default TableSection

const TableSectionStyle = styled.div`
    width: 100%;
    max-height: 60vh;
    overflow-x: scroll;
    .sections{
        background: #F0F4F8;
        border: 1px solid #F0F4F8;
        width: 100%;
        padding: 16px 24px;
        >p{
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 0.005em;
            color: #062A54;
            margin: 0px;
        }
    }
    .inner-section{
        width: 100%;
        
    }
    table {
        border-collapse: collapse;
        width: 100%;
    }
    td{
        padding: 16px 24px;
        border: 1px solid #F0F4F8;
        width: 20%;
        background: transparent;
        >p{
            margin: 0px;
        }
        >div{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    tr{
        max-height: 53px !important;
    
        :nth-child(even) {
            background: #F8F9FB;
        }
        :nth-child(odd) {
            background: #ffffff
        }
    }  
    /* .grey-bg{
        background: #F8F9FB;
    }
    .bg-white{
        background: #ffffff;;
    } */

    .section-heading{
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.005em;
        color: #0B2F59;
    }
   
`