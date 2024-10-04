import React from 'react';
// import ImageAvatars from './avatars'; 
import BasicTable from '../../modelData/Profile/table'; 
import TimeTable from '../../modelData/Profile/timeTable';
import BasicModal from '../forms/create_new_event';
import BasicDateCalendar from './calendar';
import Navbar from '../feed/navbar';
import CheckboxListSecondary from '../../modelData/Feed/list';
import BasicFriendModal from '../forms/add_friend';
import GroupModal from '../forms/create_group';


export default function Profile() {
    return (
        <div style={{
            // Fix the basic display
            height: '100vh',  
            width: '100%'
        }} >
            <Navbar page={'Profile'}/>
            
            {/* Grid layout */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '25% 3% 72%',
                backgroundColor: '#f5ebe0',
                height: 'calc(100vh - 60px)',
                boxSizing: 'border-box',
                padding: '15px',
                overflow: 'hidden',
            }}>
                {/* Container for Left box */}
                <div
                    style={{
                        paddingRight: '16px',
                        height: 'calc((100vh - 60px))',
                        boxSizing: 'border-box'
                    }}
                >
                    {/* Calender */}
                    <BasicDateCalendar/>

                    {/* Form button */}
                    <div style={{ margin: '15px 0'}}>
                        <BasicModal/>
                    </div>


                    {/* Friend button */}
                    <div style={{ margin: '15px 0'}}>
                        <BasicFriendModal/>
                    </div>


                    {/* Group button */}
                    <div style={{ margin: '15px 0'}}>
                        <GroupModal/>
                    </div>



                    {/* List */}
                    <div style={{boxSizing: 'border-box', overflow: 'auto',  height: 'calc((100vh - 460px))' }}>
                        <CheckboxListSecondary/>
                    </div>
                </div>
                
                {/* Container for TimeTable*/}
                <div
                    style={{
                        boxSizing: 'border-box',
                        height: 'calc(100vh - 90px)',
                        padding: '7px 5px 0 0'
                    }}
                >
                    <TimeTable />
                </div>

                {/* Container for BasicTable */}
                <div
                    style={{
                        width: '100%', 
                        height: 'calc(100vh - 90px)',
                        boxSizing: 'border-box'  
                    }}
                >
                    <BasicTable />
                </div>
            </div>
        {/* </Box> */}
        </div>
    );
}