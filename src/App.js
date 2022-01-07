import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  <div>
    <MyComponent />
  </div>;
}

function MyComponent() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState("");

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  };

  const addMsg = async () => {
    const url = "http://localhost:4000/send";
    const data = {
      msg: msg,
    };
    await axios.post(url, data);
    const newList = [data, ...list];
    setList(newList);
    setMsg("");
  };

  const getMsg = async () => {
    const url = "http://localhost:4000/msgs";
    const result = await axios.get(url);
    const list = result.data;
    const newList = [...list];
    setList(newList);
  };

  useEffect(() => getMsg(), []);

  return (
    <div>
      <h1>MyChatApp</h1>
      <div className="bg-dark">
        <div>
          <input
            type="text"
            name=""
            id=""
            value={msg}
            onChange={handleMsgChange}
            placeholder="Let's Chat Here....."
          />
        </div>

        <div>
          <input type="button" name="" value="Register" onClick={addMsg} />
        </div>
      </div>
      <h1>Chats</h1>
      {list.map((item, index) => (
        <div key={index}>{item.msg}</div>
      ))}
    </div>
  );
}
