//import logo from './logo.svg';
import './Feed.css';
import React from 'react';
// MUI
//import BasicTabs from './tabs';
import BasicButtons from './button';
import CheckboxListSecondary from '../../modelData/Feed/list';
import LetterAvatars from './avatar';
// Self created
import Meeting from '../../modelData/Feed/meeting';
import Navbar from './navbar';
import {MeatingRequest, FrienRequest} from '../../modelData/Feed/notification';

import BasicFriendModal from '../forms/add_friend';
import GroupModal from '../forms/create_group';

function Feed() {
  return (
    <div style={{ height: '100vh', width: '100%', overflow: 'hidden'  }}>
        <Navbar page={'Feed'}/>

        <div className="grid-container" style={{
                display: 'grid',
                gridTemplateColumns: '25% 50% 25%',
                height: 'calc(100vh - 65px)'
            }}>
            <div className="contacts" >
                <div className='list' style={{ height: 'calc((100vh - 90px)/2)', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2>Friends</h2>
                        <BasicFriendModal/> 
                    </div>
                    <div style={{ height: 'calc((100vh - 90px)/2 - 61px)', overflow: 'auto' }}>
                        <CheckboxListSecondary/>
                    </div>
                </div>
                <div className='list' style={{ height: 'calc((100vh - 90px)/2)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2>Groups</h2>
                        <GroupModal /> 
                    </div>
                    <div style={{ height: 'calc((100vh - 90px)/2 - 61px)', overflow: 'auto' }}>
                        <CheckboxListSecondary/>
                    </div>
                </div>
            </div>

            <div className="meatings" >
                <h2>Monday</h2>
                <Meeting/>
                <Meeting/>
                <Meeting/>
                <Meeting/>
                <Meeting/>
            </div>

            <div className="info">
                <h2>Info</h2>
                <MeatingRequest/>
                <FrienRequest/>
            </div>
        </div>

    </div>
  );
}

export default Feed;