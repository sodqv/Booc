import React, { useState } from 'react';
import './meeting.css';

export default function Meeting() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {setIsOpen(!isOpen)};

    return (
        <div className="meating">
            <p style={{ fontSize: '25px' }}><b>18:30 - 19:30</b> Planning</p>
            <div className="collapsible" onClick={toggleIsOpen}>
                <p>Place:</p>
                <p>Description:</p>
            </div>
            <div className="content" style={{ display: isOpen ? 'block' : 'none'}}>
                <p>Participents:</p>
                <p>Declined:</p>
                <p>Creator:</p>
            </div>
        </div>
    );
  }