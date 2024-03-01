import React from "react";
import PropTypes, { func } from "prop-types";
import TaskForm from "../../components/TaskForm";

const EditTask = (props) => {
  const handleSubmit = (event) => {
    console.log(event.value);
  };

  const data = {
    title: "Task 1",
    description: "Contoh description",
    dueDate: "2024-02-26",
  };

  return (
    <>
      <div>EditTask</div>
      <TaskForm
        onSubmit={handleSubmit}
        title={data.title}
        description={data.description}
        dueDate={data.dueDate}
      />
    </>
  );
};

EditTask.propTypes = {};

export default EditTask;
