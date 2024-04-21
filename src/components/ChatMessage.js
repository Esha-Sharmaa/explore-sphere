import userIcon from "../images/userIcon.png";
const ChatMessage = ({name, message}) => {
    return (
      <div className="flex gap-2 px-4 py-[6px]">
        <img src={userIcon} alt="user" className="w-8 h-8" />
        <div>
          <span className="font-bold font-roboto mr-2 text-sm"> {name}</span>
                <span className="text-sm"> {message}</span>
        </div>
      </div>
    );
}

export default ChatMessage;
