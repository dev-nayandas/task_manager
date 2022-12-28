import { useQuery } from '@tanstack/react-query';
import { Button, Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CompletedTask = () => {
    const { user, logOut } = useContext(AuthContext);

    const url = `http://localhost:5000/completed?email=${user?.email}`;

  const { data = [], refetch } = useQuery({
    queryKey: [],
    queryFn: () => fetch(url).then((res) => res.json()),
  });


  const handleDelete = (task) => {
    const agree = window.confirm(`Are you sure you want to delete ${task._id}`);
    if (agree) {
      fetch(`http://localhost:5000/completed/${task._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
            
          }
        });
    }
  };
    return (
        <div>
            <h1 className='text-4xl text-green-500 mt-20'>Your Completed task are as following</h1>
            <Table>
        <Table.Head>
          <Table.HeadCell>Task name</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell>Comments</Table.HeadCell>
          <Table.HeadCell>status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((task) => (
            <Table.Row
              key={task._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800 "
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {task.task}
              </Table.Cell>
              <Table.Cell>
                {" "}
                <Link >
                  <Button onClick={() => handleDelete(task)} color="failure">Delete</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                {" "}
               <input type="text" placeholder='your comment here' className='bg-green-100 p-6'></input>
              </Table.Cell>
              <Table.Cell>
              <Link to='/mytask' >
                  <Button > Not Completed</Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    );
};

export default CompletedTask;