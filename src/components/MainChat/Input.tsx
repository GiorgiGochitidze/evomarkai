import { FaArrowUp } from "react-icons/fa";
import "./CSS/input.css";

interface InputProps {
  input: string;
  setInput: (value: string) => void;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  sendMessage: () => void;
}

const Input = ({
  input,
  setInput,
  handleKeyPress,
  sendMessage,
}: InputProps) => {
  return (
    <div className="input-container">
      <label htmlFor="chat-input">
        <div onClick={sendMessage} className="arrowup-container">
          <FaArrowUp style={{ marginLeft: "0px" }} size={15} fill="black" />
        </div>
        <input
          type="text"
          id="chat-input"
          placeholder="Start Chatting with EvoMarkAI"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </label>
    </div>
  );
};

export default Input;
