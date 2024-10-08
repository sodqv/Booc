import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {getGroup, getAllGroups, createGroup, updateGroup, deleteGroup} from "../../modelData/group.js";
import { useLoaderData } from 'react-router-dom';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Group_Selector({ value, onChange }) {
    const [groups, setGroups] = React.useState([]);
  //const [personName, setPersonName] = React.useState([]);

  React.useEffect(() => {
    async function getGroups(){
        setGroups((await getAllGroups()));
    }

    getGroups();
  }, [])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    onChange(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, backgroundColor: '#ffff' }}>
        <InputLabel id="demo-multiple-name-label"> </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={value}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
        >
          {groups.map((group, index) => (
            <MenuItem
              key={index}
              value={group.groupName}
            >
              {group.groupName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
