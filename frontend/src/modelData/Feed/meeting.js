import React, { useState, useEffect } from 'react';
import { getEvents } from '../event';
import { useLoaderData } from 'react-router-dom';
// css
import './meeting.css';

export default function Meeting() {
    const user = useLoaderData();

    // const meetings = getEvents(user);
    // console.log("Full response:", meetings);

    // const meetingName = `${meetings.title}`
    const [isOpen, setIsOpen] = useState(false);
    const [meetings, setMeeting] = useState(false);

    useEffect(() => {
        const fetchEvent = async () => {
            const event = await getEvents(user);
            setMeeting(event);
        }
        fetchEvent();
    }, [user]);

    
    const toggleIsOpen = () => {setIsOpen(!isOpen)};
    console.log(`Vad finns här:`, meetings);
    return (
        <div className="meating">
            <p style={{ fontSize: '25px' }}><b>18:30 - 19:30</b> {meetings[0].title} </p>
            <div className="collapsible" onClick={toggleIsOpen}>
                <p>Creator:</p>
                <p>Place:</p>
            </div>
            <div className="content" style={{ display: isOpen ? 'block' : 'none'}}>
                <p>Description:</p>
                <p>Participents:</p>
            </div>
        </div>
    );
  }