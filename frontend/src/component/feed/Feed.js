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
                    <h3>Friends</h3>
                    <div style={{ height: '100%', overflow: 'auto' }}>
                        <CheckboxListSecondary/>
                    </div>
                    <BasicButtons/>
                </div>
                <div className='list' style={{ height: 'calc((100vh - 80px)/2)' }}>
                    <h3>Groups</h3>
                    <div style={{ height: '100%', overflow: 'auto' }}>
                        <CheckboxListSecondary/>
                    </div>
                    <BasicButtons />
                </div>
            </div>

            <div className="meatings">
                <h3>Monday</h3>
                <Meating/>
                <Meating/>
            </div>

            <div className="info">
                <h3>Info</h3>
            </div>
        </div>

    </div>
  );
}

export default Feed;