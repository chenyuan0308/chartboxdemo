import { MessageBox, Input } from "react-chat-elements";
import { useState, useEffect, useMemo, useCallback, createRef, useRef } from "react";
import { Image, Avatar } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import getRem from "@/utils/getRem";

import "react-chat-elements/dist/main.css";
import api from "@/pages/api";
  const DialogBox = ({setShowChatBox, setRecommendEventInfo}) => {
  const [messageList, setMessageList] = useState([{
    position: "left",
    type: "text",
    text: 'Hi, how can I help you today?',
    date: new Date(),
    user: "servicer",
    flag:false
    }] as any);
  const [inputValue, setInputValue] = useState("");
  const inputReferance = createRef()
  const messageContainerRef = useRef<HTMLDivElement | null>();
  const [loading, setLoading] = useState(false)
  const handleSendMessage = () => {
    if(!inputValue||loading) return
    const userMessage = {
      position: "right",
      type: "text",
      text: inputValue,
      date: new Date(),
      user: "user",
    };

    const newMessageList = [...messageList, userMessage];
    setMessageList(newMessageList);

    if(inputReferance.current)(inputReferance.current as any).value=''
    setLoading(true)
    api.postChartBox({question:inputValue}).then((res:any)=>{
      setLoading(false)
      const backendResponse = {
        position: "left",
        type: "text",
        // text: res.answer,
        text: 'mock answer',
        date: new Date(),
        user: "servicer",
        flag:inputValue==='1'?true:false
        };
        const {flag} = backendResponse
        if(flag){
            console.log('flag',flag);
            setRecommendEventInfo({
                date:'2023-12-18',
                title:'Christmas Celebration',
                describe:'Annual festival celebration Annual festival celebration celebrationAnnual festival celebration celebrationAnnual festival celebration celebrationfestival celebration celebration',
                participants:310,
                participationRate:'50.45%'
            })
        }
        setMessageList([...newMessageList, backendResponse]);
    })
    setInputValue("");
};

  const handleInputChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  },[]);

  const isUser = useCallback(({ position }) => position === "right", []);

  useEffect(() => {
    if (messageContainerRef.current) {
        (messageContainerRef.current as HTMLDivElement).scrollTop = (messageContainerRef.current as HTMLDivElement).scrollHeight;
    }
  }, [inputValue, messageList]);

  return (
    <div className="bg-[#F7F8FA] w-[30rem] h-[37.8rem] flex flex-col rounded-2xl overflow-hidden dashboard">
      <div className="bg-[#1174D0] px-6 py-4 flex items-center">
        <span className="font-bold text-base text-white">
          Assistant
        </span>
        <span className="ml-auto cursor-pointer" onClick={()=>{setShowChatBox(false)}}>
          <CloseCircleOutlined style={{ color: "white", fontSize: "1rem" }} />
        </span>
      </div>
      <div className="mt-2 h-full overflow-y-auto" ref={messageContainerRef}>
        {messageList.length > 0 &&
          messageList.map((message, index) => (
            <div
              className="flex mt-[1rem] px-4"
              key={index}
              style={{ justifyContent: isUser(message) ? "flex-end" : "" }}
            >
              {!isUser(message) && (
                <Avatar style={{ flexShrink: 0 }} src="/feed_back.png" />
              )}
              <MessageBox
                styles={{ maxWidth: "22.75rem", backgroundColor:isUser(message)?'#73f87c':'' }}
                key={index}
                id={message.text}
                title={message.position === "left" ? "Digital Concierge" : "Me"}
                titleColor={"red"}
                removeButton={false}
                replyButton={false}
                focus={false}
                position={message.position}
                type={message.type}
                text={message.text}
                date={message.date}
                forwarded={message.forwarded}
                status={message.user === "user" ? "received" : "read"}
                notch={false}
                retracted={message.retracted}
              />
              {isUser(message) && (
                <Avatar style={{ flexShrink: 0 }} src="/user.png" />
              )}
            </div>
          ))}
      </div>
      <div className="px-4 bg-[white] mt-auto">
        <Input
          referance={inputReferance}
          placeholder="Enter your question here"
          maxHeight={getRem(72)}
          onChange={handleInputChange}
          value={inputValue}
          onKeyDown={(e)=>{e.key === 'Enter'&&handleSendMessage()}}
          rightButtons={
            <Image
              style={{ marginRight: "4rem", cursor: "pointer" }}
              src="/send.png"
              preview={false}
              width={getRem(24)}
              onClick={handleSendMessage}
            />
          }
        />
      </div>
    </div>
  );
};

export default DialogBox;
