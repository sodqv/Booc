import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

export default function CheckboxListSecondary() {
  const [checked, setChecked] = React.useState([0]); // Default checked

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
    <List dense sx={{ width: '100%', maxWidth: 360, overflow: 'auto' }}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => { // Adding more lines
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            sx={{ // Styling list elements
              width: 95/100 , 
              margin: '0px 5px 10px 5px', 
              padding: '5px', 
              bgcolor: 'rgba(255, 255, 255, 0.7)',
              boxShadow: 3,
              borderRadius: 2
            }}
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.includes(value)}
                inputProps={{ 'aria-labelledby': labelId }}
                sx={{color: 'black', '&.Mui-checked': {color: '#d66536'}}}
              />
            }
            disablePadding
          >
            <ListItemButton>
               <ListItemAvatar> {/* Profile pic */}
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Person ${value + 1}`} /> {/* Name */}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}