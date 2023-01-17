import React from 'react'
import styled from 'styled-components'

function SearchInput({width, className, background}) {
  return (
    <SearchStyle width={width} className={className} background={background}>
        <input className="Search" placeholder='search'></input>
    </SearchStyle>
  )
}
export default SearchInput

const SearchStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 12px;
    width: ${props => props.width};
    height: 56px;
    border: 1px solid #CDD4DD;
    border-radius: 4px;
    background: ${props => props.background};
    .search{
        width: 100%;
        height: 90%;
        border: none;
        background: transparent;
        font-family: Quicksand;
        
        ::placeholder{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            letter-spacing: 0.005em;
            color: #8796A7;
        }
        :focus {
            outline-offset: 0px !important;
            outline: none !important;
        }

    }  

`