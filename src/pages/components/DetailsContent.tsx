import React, {
  useCallback,
  Suspense,
  useEffect,
  useState,
  useMemo,
} from "react";
import RouterView from "@/router/routets";
import { Avatar ,Spin, Carousel, Modal } from "antd";
import DialogBox from "./dialogBox";
const App: React.FC = () => {
const [showChatBox, setShowChatBox] = useState<boolean>(false)
const [recommendEventInfo, setRecommendEventInfo] = useState()

  const chatBoxProps = useMemo(() => {
    return {
      setShowChatBox,
      setRecommendEventInfo,
    };
  }, [setRecommendEventInfo]);

  return (
    <Suspense>
      <RouterView />
      {showChatBox ? <div style={{position:'fixed',right:'2rem',bottom:'2rem'}}>
                    <DialogBox {...chatBoxProps}/>
                </div>:<div onClick={()=>{setShowChatBox(true)}} className="bg-slate-300 rounded-3xl fixed bottom-[1.5rem] right-[-9rem] px-4 py-2  cursor-pointer transition-right duration-500 ease-out hover:right-0">
                    <Avatar size="small" style={{ flexShrink: 0 }} src="/feed_back.png" />
                    <span className="text-base ml-[0.8rem]">Click here to chat</span>
                </div>}
    </Suspense>
  );
};

export default App;
