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
import Header from './header';

function Feed() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
        <Header/>

        <div className="grid-container" style={{
                display: 'grid',
                gridTemplateColumns: '25% 50% 25%',
                height: 'calc(100vh - 60px)'
            }}>
            <div className="contacts" >
                <div className='list' style={{ height: 'calc((100vh - 80px)/2)' }}>
                    <h2>Friends</h2>
                    <div style={{ height: '100%', overflow: 'auto' }}>
                        <CheckboxListSecondary/>
                    </div>
                    <BasicButtons/>
                </div>
                <div className='list' style={{ height: 'calc((100vh - 80px)/2)' }}>
                    <h2>Groups</h2>
                    <div style={{ height: '100%', overflow: 'auto' }}>
                        <CheckboxListSecondary/>
                    </div>
                    <BasicButtons />
                </div>
            </div>

            <div className="meatings">
                <h2>Monday</h2>
                <Meating/>
                <Meating/>
                <Meating/>
                <Meating/>
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