import React from 'react';

// Makes the meatings collapsible
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

export default function Meating() {
    return (
        <div style={{
            backgroundColor: '#f5f5f5',
            textAlign: 'left',
            margin: '20px 10px',
            padding: '10px',
            borderRadius: '3px',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)'
        }}>
            <p style={{ fontSize: '25px' }}><b>18:30 - 19:30</b> Planning</p>
            <div style={{ cursor: 'pointer' }} class="collapsible">
                <p>Place:</p>
                <p>Description:</p>
            </div>
            <div class="content" style={{ owerflow: 'hidden', display: 'none'}}>
                <p>Participents:</p>
                <p>Declined:</p>
                <p>Creator:</p>
            </div>
        
        </div>
    );
  }