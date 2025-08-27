import React, { memo } from 'react'
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import { sampleNotification } from '../../constants/sampleData';

const Notifications = () => {

  const friendRequestHandler = ({ _id, accept }) => {
    
  }

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>

        {sampleNotification.length > 0 ? (
          sampleNotification.map((notification) => (
            <NotificationItem
              sender={notification.sender}
              _id={notification._id}
              handler={friendRequestHandler}
              key={notification._id}
            />
          ))
        ) : (
          <Typography textAlign={'center'}>0 notifications</Typography>
        )}

      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack
        direction="row"
        alignItems="center"
        spacing={"1rem"}
        width="100%"
      >
        <Avatar src={avatar} alt={name} />

        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {`${name} sent you a friend request`}
        </Typography>

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={1}
        >
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color='error' onClick={() => handler({ _id, accept: false })}>Reject</Button>
        </Stack>

      </Stack>
    </ListItem>
  )
});

export default Notifications;