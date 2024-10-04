import React from 'react';

const styBtn = {
    marginTop: '5px',
    width: '48%',
    height: '30px',
    backgroundColor: '#d66536',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer'
}

const styDiv = {
    backgroundColor: '#f5f5f5',
    textAlign: 'left',
    margin: '20px 0',
    padding: '10px',
    borderRadius: '3px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)'
}

export function MeatingRequest() {
    return (
        <div style={styDiv}>
            <p style={{ fontSize: '25px' }}>New meating</p>
            <p>Sandra invited you to 'Planning'</p>
            <button style={{...styBtn, marginRight: '4%'}}>Accept</button>
            <button style={{...styBtn}}>Decline</button>
        </div>
    )    
}

export function FrienRequest() {
    return (
        <div style={styDiv}>
            <p style={{ fontSize: '25px' }}>New friend</p>
            <p>Sandra wants to add you as friend</p>
            <button style={{...styBtn, marginRight: '4%'}}>Accept</button>
            <button style={{...styBtn}}>Decline</button>
        </div>
    )    
}