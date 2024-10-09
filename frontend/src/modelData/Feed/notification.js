import React from 'react';

const styBtn = {
    marginTop: '15px',
    height: '35px',
    backgroundColor: '#d66536',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    width: '100%'
}

const styDiv = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'left',
    margin: '20px 0',
    padding: '15px',
    borderRadius: '3px',
    border: '2px solid rgba(0,0,0,0.2)',
    lineHeight: '30px' 
}

export default function Notification() {
    return (
        <div style={styDiv}>
            <p style={{ fontSize: '25px', marginBottom: '3px', fontWeight: 'bold' }}>New meeting</p>
            <p>Sandra invited you to 'Planning'</p>
            <button style={{...styBtn}}>OK</button>
        </div>
    )    
}

// export function FrienRequest() {
//     return (
//         <div style={styDiv}>
//             <p style={{ fontSize: '25px', marginBottom: '3px', fontWeight: 'bold' }}>New friend</p>
//             <p>Sandra wants to add you as friend</p>
//             <button style={{...styBtn}}>OK</button>
//         </div>
//     )    
// }