import React, { useState } from 'react';
import { Check, Trash2, Plus } from 'lucide-react';
import "./TaskInput.css";

const TaskInput = ({ onAddTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onAddTask(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="task-input-container">
      <div className="task-input-wrapper">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          className="task-input-field"
        />
        <button onClick={handleSubmit} className="task-add-button">
          <Plus size={20} />
          Add
        </button>
      </div>
    </div>
  );
};