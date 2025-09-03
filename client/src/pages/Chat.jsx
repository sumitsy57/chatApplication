import React, { Fragment, useRef } from "react";
import { IconButton, Stack, Box } from "@mui/material";
import { grayColor, orange } from "../constants/color";
import { AttachFile as AttachFileIcon, Send as SendIcon } from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessages } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

const user = {
  _id: "erfff",
  name: "John Doe",
}

const Chat = () => {
  const containerRef = useRef(null);


  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >

        {
          sampleMessages.map((i) => (
            <MessageComponent key={i._id} message={i} user={user} />
          ))
        }

      </Stack>
      
      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"0.5rem 1rem"}
          alignItems={"center"}
        >

          <Box
            sx={{
              position: "relative",
              flex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            
            <IconButton
              sx={{
                position: "absolute",
                left: "0.5rem",
                transform: "rotate(45deg)",
              }}
              
              >
              <AttachFileIcon />
            </IconButton>

            <InputBox
              placeholder="Type Message Here"
              style={{
                width: "100%",
                paddingLeft: "3rem",
              }}
            />
          </Box>

          <IconButton
            type="submit"
            sx={{
              transform: "rotate(-30deg)",
              backgroundColor: orange,
              color: "white",
              marginLeft: "0.5rem",
              padding: "0.5rem",
              "&:hover": {
                backgroundColor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <FileMenu />
    </Fragment>
  );
};

export default Chat;
