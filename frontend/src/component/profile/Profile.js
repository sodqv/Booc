import React, { useState } from 'react';
import dayjs from 'dayjs';
import BasicTable from '../../modelData/Profile/table'; 
import TimeTable from '../../modelData/Profile/timeTable';
import BasicModal from '../forms/create_new_event';
import BasicDateCalendar from './calendar';
import Navbar from '../feed/navbar';
import {ListOfFriends} from '../../modelData/Feed/list';
import BasicFriendModal from '../forms/add_friend';

export default function Profile() {

        const [selectedDate, setSelectedDate] = useState(dayjs());

        const [weekData, setWeekData] = useState({});

        // Handler to change the date
        const handleDateChange = (newDate) => {
            setSelectedDate(newDate);
        };

        const fetchEventsForWeek = async (startOfWeekISO) => {
            try {
              // Assuming you're fetching from a backend API
              const response = await fetch(`/api/events?weekStart=${startOfWeekISO}`);
              const data = await response.json();
        
              // Transform data if needed, assuming the backend returns { 'YYYY-MM-DD': [event1, event2, ...], ... }
              setWeekData(data);
        
              return data;
            } catch (error) {
              console.error('Error fetching events:', error);
              return {}; // Return an empty object if there's an error
            }
          };
        
          // New: To handle when an event is created
          const handleEventCreated = (eventTitle, eventDate) => {
            const day = eventDate.format('YYYY-MM-DD'); // Format to match weekData keys
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
                    <div style={{ width: '100%', margin: '15px 0' }}>
                        <BasicFriendModal displayText={"Add friend"}/>
                    </div>  

                    {/* List */}
                    <div style={{boxSizing: 'border-box', overflow: 'auto',  height: 'calc((100vh - 517px))' }}>
                        <ListOfFriends/>
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
                        // Get weekly events
                        fetchEventsForWeek={fetchEventsForWeek}
                    /> 
                </div>
            </div>
        </div>
    );
}