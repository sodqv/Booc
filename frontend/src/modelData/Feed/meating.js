import React from 'react';


export default function Meating() {
    
    return (
        <div style={{
            backgroundColor: '#f5f5f5',
            //border: '1px solid black',
            textAlign: 'left',
            margin: '20px 0',
            padding: '10px',
            borderRadius: '3px',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)'
        }}>
            <p style={{ fontSize: '25px'}}><b>18:30 - 19:30</b> Planning</p>
            <div style={{  }}>
                <p>Place:</p>
                <p>Description:</p>
            </div>
            
        </div>
    );
  }