import React from 'react';
import styled from 'styled-components';
import { WasabiLogo } from '../assets/Wasabilogo';
import UserLogo from "../assets/user-logo.png";
import SearchInput from './library/search';

function Header() {
    const navigation = [
        {
            title: "Home"
        },
        {
            title: "About"
        },
        {
            title: "Solutions"
        },
        {
            title: "Pricing"
        },
        {
            title: "Contact"
        },
    ]
  return (
    <StyledHeader>
        <div className='header-section'>
            <div className='left-section'>
                <WasabiLogo/>
                {navigation.map((item, index) => (
                    <p className='nav-text'key={index}>{item.title}</p>
                ))}
            </div>
            <div className='right-section'>
                <SearchInput width={"200px"}/>
                <div className='profile-image'>
                    <img src={UserLogo}/>
                </div>
            </div>
        </div>

    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: #ffffff;
    width: 100%;
    .header-section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
    }
    .left-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 554px;
    }
    .right-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-text{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0.005em;
        cursor: pointer;
        color: #062A54;
    }
    .search-input{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px 12px;
        width: 200px;
        height: 56px;
        border: 1px solid #CDD4DD;
        border-radius: 4px;
        .search{
            width: 100%;
            height: 90%;
            border: none;
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
    }
    .profile-image{
        margin-left: 20px;
    }
`