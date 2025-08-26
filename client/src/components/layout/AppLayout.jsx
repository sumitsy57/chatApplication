import React, { use } from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
import Title from "../shared/Title";
import { Box } from "@mui/material";
import ChatList from "./ChatList";
import { sampleChats } from "../../constants/sampleData";

export default function AppLayout() {
    const headerHeight = "4rem";    

    const params = useParams(); 
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
        e.preventDefault();
        console.log("Delete chat", _id, groupChat);
    }
        

    return (
        <Box height="100vh" display="flex" flexDirection="column">

            <Box>
                <Title />
                <Header />
            </Box>

            <Box display="flex" height={`calc(100vh - ${headerHeight})`}>
                <Box
                    flex={{ sm: "0 0 30%", md: "0 0 25%" }}
                    display={{ xs: "none", sm: "block" }}
                    height="100%"
                >
                    <ChatList
                        chats={sampleChats}
                        chatId={chatId}
                        handleDeleteChat={handleDeleteChat}
                    />
                </Box>

                <Box
                    flex={1}
                    display={{ xs: "block", md: "flex" }}
                >

                    <Outlet />
                </Box>

                <Box
                    flex={{ md: "0 0 30%", lg: "0 0 25%" }}
                    display={{ xs: "none", md: "block" }}
                    bgcolor="rgba(0,0,0,0.85)"
                    color="white"
                    height="100%"
                >
                    Third
                </Box>
            </Box>
        </Box>
    );
}
