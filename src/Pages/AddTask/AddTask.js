import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const AddTask = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

  const handleSubmit = (event) => {
    
    event.preventDefault();
    const form = event.target;
    const task = form.task.value;
    const email = user.email;
    const alltask = {
      task,
      email,
    };

    console.log(alltask);

    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(alltask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // toast.success("successfully booked");
        }
      });

    form.reset();
    navigate('/mytask');
  };
  return (
    <div>
      <div>
        <div></div>
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="flex w-1/2 mx-auto mt-[20%] flex-col gap-8 bg-red-200"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Write your task" />
              </div>
              <TextInput
                id="email1"
                type="text"
                placeholder="write your task"
                required={true}
                name="task"
              />
            </div>

            <Button onSubmit={handleSubmit} type="submit">
              Add Task
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
