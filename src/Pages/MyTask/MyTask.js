import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyTask = () => {
  const item = useLoaderData();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // const [tasks, setTasks] = useState([]);
  // const url = `http://localhost:5000/tasks1?email=${user?.email}`;
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setTasks(data));
  // }, []);

  const url = `http://localhost:5000/tasks1?email=${user?.email}`;

  const { data = [], refetch } = useQuery({
    queryKey: [],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  const handleDelete = (task) => {
    const agree = window.confirm(`Are you sure you want to delete ${task._id}`);
    if (agree) {
      fetch(`http://localhost:5000/tasks1/${task._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
            // toast.success("User deleted successfully");
          }
        });
    }
  };

  const handleCompleted = (data) => {
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // toast.success("successfully done");
        }
      });

    navigate("/completedtask");
  };

  return (
    <div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Task name</Table.HeadCell>
          <Table.HeadCell>Update</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
          <Table.HeadCell>status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((task) => (
            <Table.Row
              key={task._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {task.task}
              </Table.Cell>
              <Table.Cell>
                {" "}
                <Link to={`/updatetask/${task._id}`}>
                  <Button>Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                {" "}
                <Button onClick={() => handleDelete(task)} color="failure">
                  Delete
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleCompleted(data)} color="success">
                  Completed
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyTask;
