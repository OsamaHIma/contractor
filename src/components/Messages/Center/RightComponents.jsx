import { useState, useRef } from "react";
import { format } from "date-fns";
import SendIcon from "@mui/icons-material/Send";
import AttachmentIcon from "@mui/icons-material/Attachment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircularProgress from "@mui/material/CircularProgress";

const RightComponents = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputFileRef = useRef(null);

  const sendMessage = () => {
    if (isLoading || !message) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const newMessage = { sender: "me", text: message };
      setMessages([...messages, newMessage]);
      setIsLoading(false);
      setMessage("");
    }, 1000);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const newMessage = { sender: "me", text: file.name };
    setMessages([...messages, newMessage]);
  };

  const ComingMessage = ({ message }) => {
    const time = format(Date.now(), "hh:mm");
    return (
      <div className="mb-8 flex">
        <div className="max-w-1/2 relative ml-4 rounded-lg bg-blue-900 px-6 py-4">
          <p className="text-white">{message}</p>
          <p className="absolute bottom-0 right-0 -mb-5 text-xs text-gray-200">
            {time}
          </p>
        </div>
      </div>
    );
  };

  const SendMessage = ({ message }) => {
    const time = format(Date.now(), "hh:mm");
    return (
      <div className="mb-8 flex flex-row-reverse">
        <div className="max-w-1/2 relative mr-4 rounded-lg bg-green-400 bg-opacity-60 px-6 py-4">
          <p>{message}</p>
          <p className="absolute bottom-0 right-0 -mb-5 text-xs text-gray-200">
            {time}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section>
      <div className="flex items-center justify-between rounded-lg bg-blue-100 px-4 py-2 dark:bg-slate-900/70">
        <div className="flex items-center">
          <div className="ml-4">
            <p className="font-bold text-slate-800 dark:text-green-50">Ahmed</p>
            <p className="text-green-400">online</p>
          </div>
        </div>
        <div className="cursor-pointer text-xs text-gray-400">
          <MoreVertIcon size={25} />
        </div>
      </div>

      <div
        className="relative mt-4 flex flex-col justify-between"
        style={{ height: "695px" }}
      >
        <div className="overflow-y-auto rounded-lg bg-slate-200/50 p-6 dark:bg-slate-900/50">
          <ComingMessage message="Hello there 🙌" />
          <ComingMessage message="Give it a try and response to this Message!" />
          {messages.map((message, index) =>
            message.sender === "me" ? (
              <SendMessage key={index} message={message.text} />
            ) : (
              <ComingMessage key={index} message={message.text} />
            )
          )}
        </div>

        <div className="w-full py-2">
          <div className="flex items-center justify-between rounded-lg border border-gray-400 dark:border-gray-200">
            <input
              placeholder="Write a message..."
              type="text"
              className="w-full bg-transparent px-10 py-2 text-slate-900 outline-none dark:text-slate-100"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <div className="flex items-center gap-1 p-2">
              <div className="mr-4 cursor-pointer">
                <input
                  type="file"
                  accept=".doc,.docx,.pdf,.jpg,.jpeg,.png"
                  ref={inputFileRef}
                  onChange={handleFileUpload}
                  hidden
                />
                <AttachmentIcon
                  size={25}
                  onClick={() => inputFileRef.current.click()}
                />
              </div>
              <div
                className={`cursor-pointer rounded p-1 ${
                  isLoading ? "bg-gray-400" : "bg-green-600"
                }`}
                onClick={sendMessage}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="animate-spin">
                    <CircularProgress size={25} className="text-gray-200" />
                  </div>
                ) : (
                  <SendIcon size={25} className="text-gray-200" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightComponents;
