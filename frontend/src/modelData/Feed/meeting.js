import React, { useState, useEffect } from 'react';
import { getEvents } from '../event';
import { useLoaderData } from 'react-router-dom';
// css
import './meeting.css';
import DeleteEventModal from '../../component/forms/delete_event';

export default function Meeting() {
    // get curent user
    const user = useLoaderData();

    // states
    const [meetings, setMeeting] = useState([]);
    const [isOpen, setIsOpen] = useState(null);
    

    // get events
    useEffect(() => {
        const fetchEvent = async () => {
            let event = await getEvents(user);

            //sorts the events in the feed by date and time
            event = event.sort((a, b) => {
                const dateA = new Date(a.date).toLocaleDateString(navigator.language, {month: 'long', day: 'numeric'});
                const dateB = new Date(b.date).toLocaleDateString(navigator.language, {month: 'long', day: 'numeric'});

                if (dateA !== dateB) {
                    // Sort by date
                    return dateA - dateB;
                }

                const fromA = new Date(a.date).toLocaleDateString(navigator.language, { hour: '2-digit', minute: '2-digit' });
                const fromB = new Date(b.date).toLocaleDateString(navigator.language, { hour: '2-digit', minute: '2-digit' });

                // Sort by time
                return fromA - fromB;
            });
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
                    
                    <div 
                    key={value} className="meeting" 
                    onClick={() => toggleIsOpen(value)} 
                    style={{ border: `3px solid ${meeting.color}`, borderStyle: meeting.visibility === "private" ? 'dashed' : 'solid'}}
                    >
                        <p>
                            <span style={{ fontSize: '20px', fontWeight: 'bold' }}> 
                                | {new Date(meeting.date).toLocaleDateString(navigator.language, { month: 'long', day: 'numeric' })}
                            </span>
                            <span style={{ float: 'right' }}>
                                {meeting.createdBy.username === user.username ? (
                                    <DeleteEventModal
                                        eventTitle={meeting.title}
                                        eventID={meeting._id}
                                    />
                                ) : null}
                                
                            </span>
                        </p>
                        <p style={{ fontSize: '20px' }}>
                                <span>
                                    <span>
                                        {new Date(meeting.fromTime).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}
                                    </span> - {''}
                                    <span>
                                        {new Date(meeting.toTime).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </span> 

                                <span style={{ fontWeight: 'normal' }}> {' '} | </span>
                                <b>{meeting.title}</b>
                            </p>
                        <div className="collapsible" >
                            <p>        
                                <span style={{ fontWeight: 'bold' }}>Creator: </span> 
                                <span style={{ fontWeight: 'normal' }}> {meeting.createdBy.username}</span>
                            </p>
                            <p>
                                <span style={{fontWeight: 'bold'}}> Place: </span>
                                <span>{meeting.location}</span>
                            </p>
                        </div>
                        <div className="content" style={{ display: isOpen === value ? 'block' : 'none'}}>
                            <p>
                                <span style={{fontWeight: 'bold'}}>Description: </span>
                                <span>{meeting.description}</span>
                            </p>
                            <p style={{fontWeight: 'bold'}}>Participants: </p>
                                {meeting.invitePeople.length > 0 ? (
                                    meeting.invitePeople.map((people) => (
                                        <p style={{ fontSize: '13px', color: 'black' }}>{people.username} </p>
                                ))
                            ) : (
                                <p style={{ fontSize: '13px', color: 'black' }}>You will do this alone</p>
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
