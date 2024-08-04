import Converstaion from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const{message} = req.body;
        const{id : receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await  Converstaion.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if(!conversation){
            conversation = await Converstaion.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //SOCKET IO IMPLEMENTATION

        //await conversation.save();
        //await newMessage.save();
        await Promise.all([conversation.save(), newMessage.save()]); // to save both conversation and message parellely

        res.status(200).json({ newMessage });

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getMessages = async (req, res) => {
    try {
        const{id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Converstaion.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages"); // \populate to get all the messages in the conversation

        if(!conversation){
            return res.status(200).json([]); //return empty array if no conversation found
        }

        const messages = conversation.messages;
        res.status(200).json(messages);



    } catch (error) {
        console.log("Error in getMessage controller: ", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}