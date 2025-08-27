import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material';
import {
    Face as FaceIcon,
    AlternateEmail as UsernameIcon,
    CalendarMonth as CalendarIcon
} from '@mui/icons-material';
import moment from 'moment';


const Profile = () => {
    return (
        <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
            <Avatar
                sx={{
                    width: 200,
                    height: 200,
                    objectFit: "contain",
                    marginBottom: "1rem",
                    border: "5px solid white",
                }}
            />
            <ProfileCard
                heading={"Bio"}
                text={"i am a best coder"}
            />
            <ProfileCard
                heading={"Username"}
                text={"sumit_sy5"}
                Icon={<UsernameIcon />}
            />
            <ProfileCard
                heading={"Name"}
                text={"Sumit Yadav"}
                Icon={<FaceIcon />}
            />
            <ProfileCard
                heading={"Joined"}
                text={moment('2025-03-05T18:30:00.000Z').fromNow( )}
                Icon={<CalendarIcon />}
            />
        </Stack>
    );
};

const ProfileCard = ({ text, Icon, heading }) => {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"1rem"}
            color={"white"}
            textAlign={"center"}
        >
            {Icon && Icon}

            <Stack>
                <Typography variant="body1">{text}</Typography>
                <Typography color={"gray"} variant="caption">{heading}</Typography>
            </Stack>



        </Stack>
    );
};

export default Profile