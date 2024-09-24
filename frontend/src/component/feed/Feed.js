//import logo from './logo.svg';
import './Feed.css';
import React from 'react';
// MUI
//import BasicTabs from './tabs';
import BasicButtons from './button';
import CheckboxListSecondary from '../../modelData/Feed/list';
import LetterAvatars from './avatar';
// Self created
import Meating from '../../modelData/Feed/meating';
import Header from './header';

function Feed() {
  return (
    <div style={{ height: '100vh', width: '100%', overflow: 'hidden'  }}>
        <Header page={'Feed'}/>

        <div className="grid-container" style={{
                display: 'grid',
                gridTemplateColumns: '25% 50% 25%',
                height: 'calc(100vh - 65px)'
            }}>
            <div className="contacts" >
                <div className='list' style={{ height: 'calc((100vh - 90px)/2)', marginBottom: '10px' }}>
                    <h2>Friends</h2>
                    <div style={{ height: 'calc((100vh - 90px)/2 - 61px)', overflow: 'auto' }}>
                        <CheckboxListSecondary/>
                    </div>
                    <BasicButtons/>
                </div>
                <div className='list' style={{ height: 'calc((100vh - 90px)/2)' }}>
                    <h2>Groups</h2>
                    <div style={{ height: 'calc((100vh - 90px)/2 - 61px)', overflow: 'auto' }}>
                        <CheckboxListSecondary/>
                    </div>
                    <BasicButtons />
                </div>
            </div>

            <div className="meatings" >
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