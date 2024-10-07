import React, { useState, useEffect } from 'react';
import { getEvents } from '../event';
import { useLoaderData } from 'react-router-dom';
// css
import './meeting.css';

export default function Meeting() {
    // get curent user
    const user = useLoaderData();

    // states
    const [meetings, setMeeting] = useState([]);
    const [isOpen, setIsOpen] = useState(null);
    

    // get events
    useEffect(() => {
        const fetchEvent = async () => {
            const event = await getEvents(user);
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
                    <p style={{ fontSize: '25px' }}>
                        <b>{
                        new Date(meeting.fromTime).toLocaleTimeString(
                            navigator.language, {hour: '2-digit', minute:'2-digit'})} - {
                        new Date(meeting.toTime).toLocaleTimeString(
                            navigator.language, {hour: '2-digit', minute:'2-digit'})
                        }</b> {meeting.title} 
                    </p>
                    <div className="collapsible" >
                        <p>Creator: {meeting.createdBy.username}</p>
                        <p>Place: {meeting.location}</p>
                    </div>
                    <div className="content" style={{ display: isOpen === value ? 'block' : 'none'}}>
                        <p>Description: {meeting.description}</p>
                        <p>Participents: </p>
                        {meeting.invitePeople.length > 0 ? (
                            meeting.invitePeople.map((people) => (
                                <p>{people.username}</p>
                            ))
                        ) : (
                            <p>You will do this alone</p>
                        )}
                    </div>
                </div>
                ))
            ) : (
                <p>You have no meetings booked</p>
            )}
        </div>
    );
  }