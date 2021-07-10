import React from 'react';
import { Searchbar } from './Searchbar';
import { Button } from './Button';
export function Header(){
    return(
        <header>
            <div className='flex-container'>
                <div className='flex-img'>
                    <img id='logo' src="https://images.unsplash.com/photo-1625874588658-083b0f3868d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt='reddit logo' />
                </div>
                <div className='flex-searchbar'>
                    <Searchbar />
                </div>
                <div className="flex-btn">
                    <Button btnText={'Login'} className='btn' id="btnBlue" />
                    <Button btnText={'Sign Up'} className='btn' id="btnWhite" />
                </div>
            </div>
        </header>
    )
}