import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { getAllGroups } from '../group';
import DeleteFriendModal from '../../component/forms/delete_friend';

import { useLoaderData } from 'react-router-dom';

// list of curent users friends
export function ListOfFriends() {
  const [checked, setChecked] = React.useState([0]);
  const user = useLoaderData();

  const friendList = user.friendList;
  const updateFriendList = [user, ...friendList];

  // console.log('Här finns: ', friendList.length)
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
      {updateFriendList.length > 0 ? (
        // loop through meetings and creates a div for each
        updateFriendList.map((friend, value) => (
          <div className='listElement' 
            style={{ // Styling list elements
              width: 'calc(100% - 25px)' ,
              marginBottom: '10px', 
              // margin: '0px 5px 10px 0px', 
              padding: '5px', 
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              border: '2px solid rgba(0,0,0,0.2)',
              borderRadius: '3px',
              height: '50px'
            }}
            key={value}
          >
            <Avatar
              alt={`Avatar n°${value + 1}`}
              src={`/static/images/${value + 1}.jpg`}
              sx={{ float: 'left',marginTop: '5px', }}
            />
            <p style={{
              float: 'left',
              marginTop: '10px',
              marginLeft: '15px'
            }}>
              {friend.username}
            </p>
            
            <Checkbox
                onChange={handleToggle(value)}
                checked={checked.includes(value)}
                inputProps={{ 'aria-labelledby': `checkbox-list-secondary-label-${value}` }}
                sx={{
                  //marginRight: '10px',
                  float: 'right',
                  color: 'black', 
                  '&.Mui-checked': {color: '#d66536'}
                }}
              />
              <div style={{ float: 'right'}}>
                {friend.username !== user.username && friend.identifier !== user.identifier ? (
                  <DeleteFriendModal 
                    displayText={"x"} 
                    friendsUsername={friend.username}
                    friendIdentifier={friend.identifier}
                  />
                ) : null}
              </div>
          </div>
        ))
      ) : (
        <p>You have no friends</p>
      )}
    </div>
  );
}

// list of curent users groups
export function ListOfGroups() {
  // get curent user
  const user = useLoaderData();

  // states
  const [groups, setGroup] = React.useState([]);
  const [checked, setChecked] = React.useState([]); // Default checked

  React.useEffect(() => {
    const fetchGroups = async () => {
        let group = await getAllGroups(user);
        setGroup(group);
    }
    fetchGroups();
  }, [user]);

  //console.log("Detta ger: ", groups.length);
  
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
  //console.log('Jag får: ' + groups.length + ' och ', groups)
  return (
    <div>
      {groups.length > 0 && groups !== "Failed to get groups info" ? (
        // loop through meetings and creates a div for each
        groups.map((member, value) => (
          <div className='listElement' 
            style={{ // Styling list elements
              width: 'calc(100% - 25px)' ,
              marginBottom: '10px', 
              // margin: '0px 5px 10px 0px', 
              padding: '5px', 
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              border: '2px solid rgba(0,0,0,0.2)',
              boxShadow: '3px',
              borderRadius: '2px',
              height: '50px'
            }}
            key={value}
          >
            <p style={{
              float: 'left',
              marginTop: '10px',
              marginLeft: '15px'
            }}>
              {member.groupName}
            </p>
            
            <Checkbox
                onChange={handleToggle(value)}
                checked={checked.includes(value)}
                inputProps={{ 'aria-labelledby': `checkbox-list-secondary-label-${value}` }}
                sx={{
                  //marginRight: '10px',
                  float: 'right',
                  color: 'black', 
                  '&.Mui-checked': {color: '#d66536'}
                }}
              />
          </div>
        ))
      ) : (
        <p>You're not part of any groups</p>
      )}
    </div>
  );
}
