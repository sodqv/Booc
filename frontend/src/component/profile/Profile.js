import React from 'react';
import { Box } from '@mui/material'; //Typography
// import ImageAvatars from './avatars'; 
import BasicTable from './table'; 
import TimeTable from './timeTable';
import FriendList from './friendList';
import BasicModal from '../forms/create_new_event';
import BasicDateCalendar from './calendar';
import Header from '../feed/header';

export default function Profile() {
    return (
        <div style={{
            // Fix the basic display
            height: '100vh',  
            width: '100%', 
            backgroundColor: 'black',
            // No scrolling able
            // overflow: 'hidden', 
        }} >
            <Header page={'Profile'}/>
            {/* Grid layout */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '25% 75%',
                height: 'calc(100vh - 60px)',
                
            }}>
                {/* Left box */}
                <div
                    style={{
                        backgroundColor: '#f5ebe0',  
                        padding: '16px'
                    }}
                >
                    {/* Calender */}
                    <BasicDateCalendar/>

                    {/* Form button */}
                    <div style={{ margin: '10px 0'}}>
                        <BasicModal/>
                    </div>

                    {/* List */}
                    <FriendList/>

                </div>

                {/* Box for Schedule */}
                <div
                    style={{
                        // position: 'absolute',
                        // top: '10%',
                        // right: '0px',
                        // width: '1000px',
                        height: '100%',
                        backgroundColor: '#f5ebe0',
                        padding: 1.5,
                        boxSizing: 'border-box',
                        overflow: 'hidden',
                        display: 'flex',  
                        flexDirection: 'row'
                    }}
                >
                    {/* Container for TimeTable*/}
                    <Box
                        sx={{
                            width: '5%',
                            height: '100%',
                            padding: 1,
                            paddingTop: 3,
                            paddingRight: 0,
                        }}
                    >
                        <TimeTable />
                    </Box>
                    {/* Container for BasicTable */}
                    <Box
                        sx={{
                            width: '100%', 
                            height: '100%',
                            padding: 1,
                            paddingLeft: 0  
                        }}
                    >
                        <BasicTable />
                    </Box>
                </div>
            </div>
        {/* </Box> */}
        </div>
    );
}