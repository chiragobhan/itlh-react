import React, { useState } from 'react';

function MyToDoHooksComponent()
{
    let [task,setTask] = useState('');
    let [pendingTaskList,setPendingTaskList] = useState([]);
    let [completedTaskList, setCompletedTaskList] = useState([]);
    let [checked,setChecked] = useState(false);

    function handleChange(event) 
    {
        setTask(event.target.value);
    }

    function addItemToTask()
    {
        let pendingTaskListCopy = pendingTaskList;
        pendingTaskListCopy.push(task);
        setPendingTaskList(pendingTaskListCopy);
        setTask('');
    }

    function markDone(task)
    {
        let pendingTaskListCopy = pendingTaskList;
        let completedTaskListCopy = completedTaskList;
        for (let i = 0; i < pendingTaskListCopy.length; i++) {
            if (pendingTaskListCopy[i] === task)
            {
                pendingTaskListCopy.splice(i,1);
                break;
            }
        }
        completedTaskListCopy.push(task);
        setCompletedTaskList(completedTaskListCopy);
        setTask('');
    }

    return (
        /* Creating a div element which will center align all its child elements */
        <div style={{
            display: 'table',
            margin: '0 auto'
        }}>
            <h1>My ToDo App by Hooks</h1>
            <input type="text" placeholder="Enter a task" value={task} onChange={handleChange} />
            <button onClick={addItemToTask}>Add</button>
            {pendingTaskList.length > 0 ? <h3>Pending Tasks:</h3> : null}
            <ul>
                <table>
                    <tbody>
                        {
                            pendingTaskList.map((task) =>
                                <tr>
                                    <td><li><input type="checkbox" checked={false} onClick={() => markDone(task)} onChange={e => setChecked(!checked)} /></li></td>
                                    <td style={{ padding: '5px' }}>{task}</td>
                                    {/* A button can also be used instead of a checkbox */}
                                    {/* <td><button onClick={() => markDone(task)}>Done</button></td> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </ul>
            {completedTaskList.length > 0 ? <h3>Completed Tasks:</h3> : null}
            <ul>
                <table>
                    <tbody>
                        {
                            completedTaskList.map((task) =>
                                <tr>
                                    <td style={{
                                        padding: '5px', textDecorationLine: 'line-through',
                                        textDecorationStyle: 'solid'
                                    }}>
                                        <li>{task}</li>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </ul>
            </div>
    );
}

export default MyToDoHooksComponent;