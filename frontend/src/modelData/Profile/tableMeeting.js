import React, { useState, useEffect } from 'react';
import { getEvents } from '../event';
import { useLoaderData } from 'react-router-dom';


export default function TableMeeting() {
    // get curent user
    const user = useLoaderData();

    // states
    const [meetings, setMeeting] = useState([]);
    const [isOpen, setIsOpen] = useState(null);
    

    // get events
    useEffect(() => {
        const fetchEvent = async () => {
            const event = await getEvents(user);
            console.log('Fetched Events:', event);
            setMeeting(event);
        }
        fetchEvent();
    }, [user]);

    // function to toggel collapsible
    const toggleIsOpen = (value) => {
        setIsOpen(isOpen === value ? null : value);
    };

    //console.log(`Vad finns här:`, meetings);
    return (
        <div>
            {meetings.length > 0 ? (
                // loop through meetings and creates a div for each
                meetings.map((meeting, value) => (
                    
                    <div key={value} className="meeting" onClick={() => toggleIsOpen(value)}>
                   <p style={{ fontSize: '20px', fontWeight: 'bold' }}>| {new Date(meeting.date).toLocaleDateString(navigator.language, { month: 'long', day: 'numeric' })}</p>
                   <p style={{ fontSize: '20px' }}>
                        <span>
                            <span>
                                {new Date(meeting.fromTime).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}
                            </span> - 
                            <span>
                                {new Date(meeting.toTime).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </span> 

                        <span style={{ fontWeight: 'normal' }}> {' '} | </span>
                        <b>{meeting.title}</b>
                    </p>
                </div>
                ))
            ) : (
                <p>You have no meetings booked</p>
            )}
        </div>
    );
  }