import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
    const [title, setNewTitle] = useState("");
    const [description, setNewDescription] = useState("");
    const [dueDate, setNewDueDate] = useState("");
    const [tags, setNewTags] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title || !description || !dueDate || !tags) return;
        const id = crypto.randomUUID();
        const newTask = {
            id,
            title,
            description,
            dueDate,
            tags,
        };
        onAddTask(newTask);
        setNewTitle("");
        setNewDescription("");
        setNewDueDate("");
        setNewTags("");
    };

    return (
        <form onSubmit={handleSubmit} className="form-add-task">
            <label htmlFor="">📑Title</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setNewTitle(e.target.value)}
            />

            <label htmlFor="">📃Description</label>
            <input
                type="text"
                value={description}
                onChange={(e) => setNewDescription(e.target.value)}
            />

            <label htmlFor="">📅Due Date</label>
            <input
                type="dateTime"
                value={dueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
            />

            <label htmlFor="">🏷️Tags</label>
            <input
                type="text"
                value={tags}
                onChange={(e) => setNewTags(e.target.value)}
            />
            <button>Submit</button>
        </form>
    );
};

export default TaskForm;
