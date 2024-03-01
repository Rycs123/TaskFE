import React from "react";
import AddTask from "../AddTask/AddTask";

const IsDone = () => {
    return (
        <div className="done border-done">
            <div className="done-header">
                <p className="done-status">Status</p>
                <h2 className="new-status">Is Done</h2>
            </div>
            <div className="add-btn-done">
                <AddTask />
            </div>
            <div className="all-done">
                <div className="card-task">
                    <h3>Makan</h3>
                </div>
                <div className="card-task">
                    <h3>Makan</h3>
                </div>
                <div className="card-task">
                    <h3>Makan</h3>
                </div>
            </div>
        </div>
    );
};

export default IsDone;
