const Message = () => {
    return(
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className={"chat-bubble text-white bg-blue-400"}>  Hi whats up?   </div>
            <div className="chat-footer text-white text-xs flex gap-1">12:46</div>
        </div>
    );
};
export default Message;