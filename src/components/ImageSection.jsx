import React, { useState } from 'react'
import styled from 'styled-components';
import HideIcon from "../assets/HideIcon.png"
import { SchoolArray } from '../data/tableArray';
import EmptySymbol from '../assets/EmptySymbol';

function ImageSection({setHideSame, hideSame}) {
    
    const toggleHideFeature = () => {
        setHideSame(!hideSame)
    }


  return (
    <ImageSectionStyle>
        <div className='section'>
            <img src={HideIcon}/>
            <div className='margin-16'>
                <input type="checkbox" className='mr-5' onClick={toggleHideFeature}/>
                <p>Hide same features</p>
            </div>
        </div>
    
        {SchoolArray.map((item, index) => (
            <div className='section' key={index}>
                {item.name ? (
                    <img src={item.image} className="school-image"/>
                ):(
                    <div className='empty-section'>
                        <EmptySymbol/>
                    </div>
                )}
                
                <div className='margin-16'>
                    <p className='name'>{item.name}</p>
                </div>
            </div>
        ))}
            

    </ImageSectionStyle>
  )
}

export default ImageSection

const ImageSectionStyle = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    .section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center; 
        padding: 24px !important;
        width: 20%;
        /* max-width: 213px; */
        height: 272px;
        background: #F8F9FB;
        border: 2px solid #F0F4F8;
        .margin-16{
            display: flex;
            margin-top: 16px;
            >p{
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                letter-spacing: 0.005em;
                color: #0B2F59;
                margin: 0px;
            }
            >input{
                border: 1px solid #244872;
            }
            .name{
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.005em;
                color: #062A54;
            }
        }
    }
    .mr-5{
        margin-right: 10px;
    }
    .school-image{
        height: 160px;
        width: 100%;
        object-fit: cover;
        border-radius: 16px;
    }
    .empty-section{
        height: 160px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px dashed #CDD4DD;
        border-radius: 4px;
    }
`