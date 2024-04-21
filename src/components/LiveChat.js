import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRandomName, generateRandomString } from "./utils/helper";
import { AiOutlineSend } from "react-icons/ai";


const LiveChat = ({ name, message }) => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      const name = generateRandomName();
      const message = generateRandomString();
      dispatch(
        addMessage({
          name,
          message,
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div className="w-4/12 bg-slate-100 h-[65vh] border-2 rounded-lg overflow-hidden">
      <h3 className="font-roboto font-bold p-2  bg-white shadow-sm">
        Live Chat
      </h3>
      <div className="flex flex-col-reverse h-[78%] overflow-auto">
        {chatMessages &&
          chatMessages.map((msg, index) => (
            <ChatMessage key={index} name={msg.name} message={msg.message} />
          ))}
      </div>
      <div className="bg-white border-t-2">
        <input
          placeholder="Chat with everyone"
          value={liveMessage}
          type="text"
          onChange={(e) => setLiveMessage(e.target.value)}
          className="w-[90%] px-3 py-4  rounded-lg focus:outline-none border-none"
        />
        <button onClick={() => {
          dispatch(addMessage({ name: "You", message: liveMessage }));
          setLiveMessage("");
        }}>
          <AiOutlineSend size={25} className="text-black " />
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
