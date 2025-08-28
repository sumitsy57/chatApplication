import { Dialog, DialogTitle, Stack, TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import UserItem from '../shared/UserItem'
import { sampleUsers } from '../../constants/sampleData'
import useInputValidation from '../../hooks/useInputValidation'

const NewGroup = () => {

  const groupName = useInputValidation("");

  const [members, setMemebers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) => [...prev, id]);
  };
  console.log(selectedMembers);
  

  const submitHandler = () => { };

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "3rem" }} sx={{ width: "25rem" }} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant='h4'>
          New Group
        </DialogTitle>

        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />

        <Typography variant='body1'>
          Members
        </Typography>

        <Stack>
          {members.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectMemberHandler}
            />
          ))}
        </Stack>

        <Stack direction="row" justifyContent={"space-evenly"} >
          <Button variant="text" color="error" size='large'>
            Cancel
          </Button>
          <Button variant="contained" size='large' onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup
