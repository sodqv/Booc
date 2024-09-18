//import logo from './logo.svg';
import './Feed.css';
import React from 'react';
// MUI
//import BasicTabs from './tabs';
import BasicButtons from './button';
import CheckboxListSecondary from './list';
import LetterAvatars from './avatar';
// Self created
import Meating from './meating';

function Feed() {
  return (
    <div className="Feed">
        
        <div className="header">
            <h1>Booc</h1>
            <div className='avatar'><LetterAvatars/></div>
        </div>

        <div className="grid-container">
            <div className="contacts">
                <div className='list'>
                    <h2>Friends</h2>
                    <CheckboxListSecondary/>
                    <BasicButtons/>
                </div>
                <div className='list'>
                    <h2>Groups</h2>
                    <CheckboxListSecondary/>
                    <BasicButtons/>
                </div>
            </div>

            <div className="meatings">
                <h2>Monday</h2>
                <Meating/>
                <Meating/>
            </div>

            <div className="info">
                <h2>Info</h2>
            </div>
        </div>

    </div>
  );
}

export default Feed;