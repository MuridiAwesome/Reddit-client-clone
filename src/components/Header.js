import React from 'react';
import { Searchbar } from './Searchbar';
import { Button } from './Button';
export function Header(){
    return(
        <header>
            <div className='flex-container'>
                <div className='flex-img'>
                    <img id='logo' src="https://pngimg.com/uploads/letter_r/letter_r_PNG93897.png" alt='reddit logo' />
                    <p style={{display: 'inline'}}>Clone</p>
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