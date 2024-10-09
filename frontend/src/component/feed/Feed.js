//import logo from './logo.svg';
import './Feed.css';
import React from 'react';
// MUI
//import BasicTabs from './tabs';
import BasicButtons from './button';
import {ListOfFriends, ListOfGroups} from '../../modelData/Feed/list';
import LetterAvatars from './avatar';
// Self created
import Meeting from '../../modelData/Feed/meeting';
import Navbar from './navbar';
import Notification from '../../modelData/Feed/notification';

import BasicFriendModal from '../forms/add_friend';
import GroupModal from '../forms/create_group';
import ModifyGroupModal from '../forms/modify_group_form';

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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <h2>Friends</h2>
                        <BasicFriendModal displayText={"+"}/> 
                    </div>
                    <div style={{ height: 'calc((100vh - 90px)/2 - 61px)', overflow: 'auto' }}>
                        <ListOfFriends/>
                    </div>
                </div>
                <div className='list' style={{ height: 'calc((100vh - 90px)/2)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <h2>Groups</h2>
                        <div>
                            <div style={{ float: 'right' }}>
                                <GroupModal displayText={"+"}/> 
                            </div>
                            <div style={{ float: 'right', marginRight: '5px'}}>
                                <ModifyGroupModal displayText={"✎"}/>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: 'calc((100vh - 90px)/2 - 61px)', overflow: 'auto' }}>
                        <ListOfGroups/>
                    </div>
                </div>
            </div>

            <div className="meatings">
                <h2>Events</h2>
                 <Meeting/>
            </div>

            <div className="info">
                <h2>Notifications</h2>
                <Notification/>
                <Notification/>
            </div>
        </div>

    </div>
  );
}

export default Feed;