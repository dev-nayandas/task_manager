import { Button, Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyTask = () => {
    const { user, logOut } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);
  const url = `http://localhost:5000/tasks1?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
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



        {
            tasks.map(task => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">

            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             {task.task}
            </Table.Cell>
            <Table.Cell> <Button>
     Update
    </Button></Table.Cell>
            <Table.Cell>  <Button color="failure">
      Delete
    </Button></Table.Cell>
            <Table.Cell><Button color="success">
      Completed
    </Button></Table.Cell>
            
          </Table.Row>)
        }

         
   
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyTask;
