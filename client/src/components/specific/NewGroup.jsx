import { Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { sampleUsers } from '../../constants/sampleData'
const NewGroup = () => {
  const selectMemberHandler = () => { };
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>New Group</DialogTitle>

        <TextField />
        <Stack>
          {sampleUsers.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectMemberHandler}
            />
          ))}

        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup