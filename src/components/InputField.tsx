import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        placeholder="Enter A Task"
        className="input__box"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
