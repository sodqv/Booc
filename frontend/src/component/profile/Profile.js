import React, { useState } from 'react';
import dayjs from 'dayjs';
import BasicTable from '../../modelData/Profile/table'; 
import TimeTable from '../../modelData/Profile/timeTable';
import BasicModal from '../forms/create_new_event';
import BasicDateCalendar from './calendar';
import Navbar from '../feed/navbar';
import CheckboxListSecondary from '../../modelData/Feed/list';
import BasicFriendModal from '../forms/add_friend';
import GroupModal from '../forms/create_group';

export default function Profile() {

        // Lift the state to the Profile component
        const [selectedDate, setSelectedDate] = useState(dayjs());

        // New
        const [weekData, setWeekData] = useState(createWeekData(selectedDate.startOf('week'))); // Add state for week data



        // Handler to change the date
        const handleDateChange = (newDate) => {
            setSelectedDate(newDate);
        };


        // New
        const handleEventCreated = (eventTitle, eventDate) => {
            const day = eventDate.format('dddd D'); // Format to match weekData keys
            setWeekData((prevData) => ({
                ...prevData,
                [day]: [...(prevData[day] || []), eventTitle], // Add event title to the corresponding day
            }));
        };


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
                    <BasicDateCalendar
                        selectedDate={selectedDate} 
                        onDateChange={handleDateChange} 
                    />

                    {/* Form button */}
                    <div style={{ margin: '15px 0'}}>
                        <BasicModal onEventCreated={handleEventCreated} />
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
                    <BasicTable
                        selectedDate={selectedDate} 
                        onDateChange={handleDateChange}
                        weekData={weekData}
                    /> 
                </div>
            </div>
        {/* </Box> */}
        </div>
    );
}


const createWeekData = (startDate) => {
    const weekData = {};
    for (let i = 0; i < 7; i++) {
        const day = startDate.add(i, 'day').format('dddd D');
        weekData[day] = [];
    }
    return weekData;
};