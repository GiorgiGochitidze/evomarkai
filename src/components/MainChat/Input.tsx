import { FaArrowUp } from "react-icons/fa";
import "./CSS/input.css";

const Input = () => {
  return (
    <div className="input-container">
      <label htmlFor="chat-input">
        <div className="arrowup-container">
          <FaArrowUp style={{marginLeft: "1px"}} size={15} fill="black" />
        </div>
        <input
          type="text"
          id="chat-input"
          name="chat-input"
          placeholder="Start Chatting with EvoMarkAI"
        />
      </label>
    </div>
  );
};

export default Input;
