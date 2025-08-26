import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import { Avatar, Box, Stack, Typography } from '@mui/material'

const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index = 0,
    handleDeleteChat,
}) => {
 
    return (
        <Link
            sx={{
                padding: "0",
            }}
            to={`/chat/${_id}`}
            onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)} 
        >
            <div style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                padding: "1rem",
                backgroundColor: sameSender ? "black" : "unset",
                color: sameSender ? "white" : "unset",
                position: "relative",
            }}>
                {/* {Avatar card} */}
                <Stack>
                    <Typography>{name}</Typography>
                    {
                        newMessageAlert && (
                            <Typography>{newMessageAlert.count} New Message</Typography>
                        )
                    }
                </Stack>

                {isOnline && (
                    <Box
                        sx={{
                            width: "10px",
                            height: "10px",
                            backgroundColor: "green",
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            right: "1rem",
                            transform: "translateY(-50%)",
                        }}
                    />
                )}
            </div>
        </Link>
    )
}

export default memo(ChatItem)