import { useEffect, useRef } from "react";
import { ChatBox } from "../components/chat-box";

function Home() {
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatBoxRef.current?.innerHTML]);

  return (
    <div className="wrapper">
      <section>
        <h1>OpenAI ChatGPT</h1>
        <p>This is a project that uses Chatgpt bot to help you with anything</p>
      </section>
      <section ref={chatBoxRef}>
        <ChatBox />
      </section>
    </div>
  );
}

export default Home;
