import React from "react";

const List = ({ key, task }) => {
    return (
        <li key={key} className="card-task">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>
                Tags:{" "}
                {Array.isArray(task.tags) ? task.tags.join(", ") : "No Tags"}
            </p>

            <h3>Checklists:</h3>

            {task.checklists.map((item, checklistIndex) => (
                <p key={checklistIndex}>
                    {item.isDone ? "✅" : "❌"} {item.checklistItem}
                </p>
            ))}

            <h3>Attachments:</h3>
            {task.attachments.map((attachment, attachmentIndex) => (
                <p key={attachmentIndex}>
                    <a
                        href={attachment.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {attachment.displayText}
                    </a>
                </p>
            ))}
        </li>
    );
};

export default List;
