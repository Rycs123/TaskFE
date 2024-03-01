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
            <ul>
                {task.checklists.map((item, checklistIndex) => (
                    <li key={checklistIndex}>
                        {item.isDone ? "✅" : "❌"} {item.checklistItem}
                    </li>
                ))}
            </ul>
            <h3>Attachments:</h3>
            <ul>
                {task.attachments.map((attachment, attachmentIndex) => (
                    <li key={attachmentIndex}>
                        <a
                            href={attachment.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {attachment.displayText}
                        </a>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default List;
