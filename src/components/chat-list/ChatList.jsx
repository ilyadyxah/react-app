import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import * as React from "react";

export const ChatList = ({chats}) => {
    return <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
        {
            chats.map((chat, index) => {
            return <div key={index}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={chat.name}
                        secondary={chat.text}
                    />
                </ListItem>
                <Divider variant="inset" component="li"/>
            </div>
        })
        }
    </List>
}


