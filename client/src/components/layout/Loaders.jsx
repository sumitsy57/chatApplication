import { Box, Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'

export const LayoutLoader = () => {
    return (
        <Box display="flex" height="calc(100vh - 4rem)">
            <Box
                sx={{
                    flexBasis: { sm: "30%", md: "25%" },
                    display: { xs: "none", sm: "block" },
                    height: "100%"
                }}
            >
                <Skeleton variant="rectangular" height="100%" />
            </Box>

            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "block", md: "flex" },
                    height: "100%",
                    flexBasis: { xs: "auto", sm: "auto", md: "auto" }
                }}
            >
                <Stack spacing={2} width="100%">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <Skeleton key={index} variant="rounded" height={80} />
                    ))}
                </Stack>
            </Box>

            <Box
                sx={{
                    flexBasis: { md: "30%", lg: "25%" },
                    display: { xs: "none", md: "block" },
                    bgcolor: "rgba(0,0,0,0.85)",
                    color: "white",
                    height: "100%"
                }}
            >
                <Skeleton variant="rectangular" height="100%" />
            </Box>
        </Box>
    )
}
