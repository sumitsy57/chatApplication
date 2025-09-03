import React from 'react'
import { Box, Typography } from '@mui/material'
import { grayColor } from '../constants/color'
const Home = () => {
  return (
    <Box bgcolor={grayColor} height={"100%"}>
      <Typography p={"2rem"} variant='h5' textAlign={"center"}>
        Select a frind to start a conversation
      </Typography>
    </Box>
  )
}

export default Home