import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateTask = () => {
  const data = useLoaderData();
  const [task, setTask] = useState({});
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    // console.log(user);
    fetch(`http://localhost:5000/task1/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Task updated");
          console.log(data);
        }
      
    navigate('/mytask');
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newTask = { ...task };
    newTask[field] = value;
    setTask(newTask);
  };
  return (
    <div>
      <h1 className="mt-20 text-green-700  text-4xl">
        Please Update the following task{" "}
      </h1>
      <form
        onSubmit={handleUpdate}
        className="flex w-1/2 mx-auto mt-[20%] flex-col gap-8 bg-red-200"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Write your task" />
          </div>
          <TextInput
            onChange={handleInputChange}
            className="text-2xl"
            id="email1"
            type="text"
            defaultValue={data.task}
            // placeholder="write your task"
            required={true}
            name="task"
          />
        </div>

        <Button onSubmit={handleUpdate} type="submit">
          Update task
        </Button>
      </form>
    </div>
  );
};

export default UpdateTask;
