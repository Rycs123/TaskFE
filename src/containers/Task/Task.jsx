import React, { useState } from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";

const initalTask = [
    {
        id: 118836,
        title: "Mengerjakan Tugas Frontend Disini",
        description:
            "Mengerjakan Tugas Frontend adalah hal yang membuatku bahagia",
        dueDate: "2022-03-25",
        tags: ["FE", "RPL"],
        checklists: [
            {
                checklistItem: "Membuat Admin",
                isDone: false,
            },
        ],
        attachments: [
            {
                link: "https://robbypambudi.com",
                displayText: "My Website",
            },
        ],
    },
    {
        id: 118837,
        title: "Mengerjakan Tugas Frontend Disini",
        description:
            "Mengerjakan Tugas Frontend adalah hal yang membuatku bahagia",
        dueDate: "2022-03-25",
        tags: ["FE", "RPL"],
        checklists: [
            {
                checklistItem: "Membuat Admin",
                isDone: true,
            },
        ],
        attachments: [
            {
                link: "https://robbypambudi.com",
                displayText: "My Website",
            },
        ],
    },
];

const Task = () => {
    const [tasks, setTask] = useState(initalTask);

    return (
        <div className="task border-task">
            <div className="task-header">
                <p className="task-status">Status</p>
                <h2 className="new-status">New</h2>
            </div>
            <div className="all-task">
                <TaskList tasks={tasks} />
            </div>
            <div className="add-btn-task">
                <AddTask setTask={setTask} tasks={tasks} />
            </div>
        </div>
    );
};

export default Task;
