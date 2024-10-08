import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import DeleteFriendModal from '../../component/forms/delete_friend';

import { useLoaderData } from 'react-router-dom';

export default function ListOfFriends() {
  const [checked, setChecked] = React.useState([0]); // Default checked
  const user = useLoaderData();
  


  const friendList = user.friendList;
       

  console.log('Här finns: ', friendList.length)
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      {friendList.length > 0 ? (
        // loop through meetings and creates a div for each
        friendList.map((friend, value) => (
          <div className='listElement' 
            style={{ // Styling list elements
              width: 'calc(100% - 25px)' , 
              margin: '0px 5px 10px 5px', 
              padding: '5px', 
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              boxShadow: '3px',
              borderRadius: '2px',
              height: '40px'
            }}
            key={value}
          >
            <Avatar
              alt={`Avatar n°${value + 1}`}
              src={`/static/images/${value + 1}.jpg`}
              sx={{ float: 'left'}}
            />
            <p style={{
              float: 'left',
              marginTop: '5px',
              marginLeft: '15px'
            }}>
              {friend.username}
            </p>
            
            <Checkbox
                
                onChange={handleToggle(value)}
                checked={checked.includes(value)}
                inputProps={{ 'aria-labelledby': `checkbox-list-secondary-label-${value}` }}
                sx={{
                  marginTop: '-4px',
                  //marginRight: '10px',
                  float: 'right',
                  color: 'black', 
                  '&.Mui-checked': {color: '#d66536'}
                }}
              />
              <div style={{ float: 'right', marginRight: '5px'}}>
                <DeleteFriendModal 
                  displayText={"X"} 
                  friendsUsername={friend.username}
                  friendIdentifier={friend.identifier}
                />
              </div>

          </div>
        ))
      ) : (
        <p>You have no friends</p>
      )}
    </div>
  );
}
