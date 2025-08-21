import { Box, Skeleton, Stack } from '@mui/material'
import React from 'react'



export const LayoutLoader = () => { 
    return <Box display="flex" height={"calc(100vh - 4rem)"} spacing={"1rem"} >
        <Box
            flex={{ sm: "0 0 30%", md: "0 0 25%" }}
            display={{ xs: "none", sm: "block" }}
            height="100%"
        >
            <Skeleton variant='rectangular' height={"100vh"}/>
        </Box>

        <Box
            flex={1}
            display={{ xs: "block", md: "flex" }}
            // item xs={12} sm={8} md={5} lg={6} height={"100%"}
        >

            <Stack spacing={"1rem"}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <Skeleton key={index} variant='rectangular' height={"10rem"}
                    />
                ))}
            </Stack>

        </Box>

        <Box
            flex={{ md: "0 0 30%", lg: "0 0 25%" }}
            display={{ xs: "none", md: "block" }}
            bgcolor="rgba(0,0,0,0.85)"
            color="white"
            height="100%"
        >
            <Skeleton variant='rectangular' height={"100vh"}/>
        </Box>
    </Box>
    
}