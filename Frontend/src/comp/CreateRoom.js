import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
  const [username, setUserName] = useState("");
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const generateRandomId = () => {
    const characters = "abcdefghi2jklmnopqrstuvwxyz89";
    const left = Array.from({ length: 3 }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
    const middle = Array.from({ length: 2 }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
    const right = Array.from({ length: 4 }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
    // return `prt-${randomString.slice(0, 2)}-${randomString.slice(2)}`;
    return `${left}-${middle}-${right}`;
  };

  const joinRoom = () => {
    sessionStorage.setItem("user", username);
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="createRoomWrapper">
      <p style={{  color: "white" , fontWeight:"bolder" , fontSize:"60px" }}>
        Let's Meet 
      </p>
      
      <input
        type="text"
        placeholder="Enter room code"
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button style={{color:"black"}} onClick={joinRoom}>Join Room</button>
    </div>
  );
};

export default CreateRoom;
