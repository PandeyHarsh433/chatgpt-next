import { ChatBox } from "../components/chat-box";

function Home() {
  return (
    <div className="wrapper">
      <section>
        <h1>OpenAI ChatGPT</h1>
        <p>This is a project that uses Chatgpt bot to help you with anything</p>
      </section>
      <section>
        <ChatBox />
      </section>
    </div>
  );
}

export default Home;
