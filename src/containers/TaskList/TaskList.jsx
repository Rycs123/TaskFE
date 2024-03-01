import React from "react";
import List from "../List/List";

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <List task={task} key={task.id} />
            ))}
        </ul>
    );
};

export default TaskList;
