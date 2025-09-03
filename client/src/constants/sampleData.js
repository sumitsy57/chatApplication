export const sampleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
        groupChat: false,
        members: ["1", "2"],
    },
    
    {
        avatar: [
            "https://www.w3schools.com/howto/img_avatar.png",
        ],
        name: "John Boi",
        _id: "2",
        groupChat: true,
        members: ["1", "2"],
    }
];

export const sampleUsers = [
    {
        name: "John Doe",
        _id: "1",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
        name: "Jane Smith",
        _id: "2",
        avatar: "https://www.w3schools.com/howto/img_avatar2.png",
    },
    
];

export const sampleNotification = [
    {
        sender: {
            name: "John Doe",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        _id: "1",
    },
    {
        sender: {
            name: "Jane Smith",
            avatar: "https://www.w3schools.com/howto/img_avatar2.png",
        },
        _id: "2", 
    },
    
];

export const sampleMessages = [
    {
        attachments: [
           
        ],
        content: "Hello, how are you?",
        _id: "rergrfsfgffg",
        sender: {
            _id: "user._id",
            name: "sumit",
        },
        chat: "chatId",
        createdAt: "2025-09-03T01:00:00Z",
    },

    {
        attachments: [
            {
                public_id: "sfsa",
                url:"https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "",
        _id: "rergrfsfgffgsss",
        sender: {
            _id: "erfff",
            name: "Riya",
        },
        chat: "chatId",
        createdAt: "2025-09-03T01:00:00Z",
    },
];