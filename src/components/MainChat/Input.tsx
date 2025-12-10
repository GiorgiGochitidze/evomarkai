import { FaArrowUp } from "react-icons/fa";
import "./CSS/input.css";
import { IoIosSquare } from "react-icons/io";

interface InputProps {
  input: string;
  setInput: (value: string) => void;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  sendMessage: () => void;
  loading: boolean;
  stopMessage: () => void;
}

const Input = ({
  input,
  setInput,
  handleKeyPress,
  sendMessage,
  loading,
  stopMessage,
}: InputProps) => {
  return (
    <div className="input-container">
      <label htmlFor="chat-input">
        <div
          onClick={loading ? stopMessage : sendMessage}
          className="arrowup-container"
        >
          {!loading && (
            <FaArrowUp style={{ marginLeft: "0px" }} size={15} fill="black" />
          )}
          {loading && <IoIosSquare size={15} />}
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
