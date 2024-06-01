import React, { useRef } from "react";

const Header = ({ roomID }) => {
  const roomRef = useRef(null);

  const copyToClipboard = () => {
    if (roomRef.current) {
      const range = document.createRange();
      range.selectNodeContents(roomRef.current);

      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand("copy");
      selection.removeAllRanges();
    }
  };

  return (
    <div className="headerWrapper">
      <div className="logoWrapper">
        <p style={{  color: "white" , fontWeight:"bolder" , fontSize:"30px" }}>
        Let's Meet
      </p>
        <p style={{ margin: 0, color: "white" , fontWeight:"bolder" }}>by Somil</p>
      </div>
      <div className="roomInfo">
        <p style={{ margin: 0 }}>Meeting Code | </p>
        <div ref={roomRef}>{roomID}</div>
        <button className="copy" onClick={copyToClipboard}>
          <span className="material-symbols-outlined">content_copy</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
