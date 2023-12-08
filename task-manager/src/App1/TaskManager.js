
import { useState } from 'react';
import './style.css';
function TaskManager() {
    const [tasks, setTasks] = useState([])
    const [inputvalue, setInputvalue] = useState("")
    function addData() {
        if (inputvalue.length === 0) { return; }
        setTasks([
            ...tasks,
            {
                content: inputvalue,
                isComplete: false,
                isEditing: false
            }
        ]);
        setInputvalue("");

    }
    function deletetask(taskIndex) {
        tasks.splice(taskIndex, 1)
        setTasks([
            ...tasks
        ]
            /* tasks.filter(
              (t)=>t!==task)*/

        )
    }
    function markcompleted(taskIndex) {
        tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete;
        setTasks([
            ...tasks
        ])
    }
    function editTask(taskIndex) {
        tasks[taskIndex].isEditing = true;
        setTasks([
            ...
            tasks])
    }
    function updateValue(taskIndex, value) {
        tasks[taskIndex].content = value;
        setTasks([
            ...
            tasks])
    }
    function saveTask(taskIndex) {
        tasks[taskIndex].isEditing = false;
        setTasks([
            ...
            tasks])
    }
    return (
        <div className="task-manager">
            <h1>Task manager</h1>
            <div className="tasks" >
                {
                    tasks.sort((a) => a.isComplete ? 1 : -1).map(
                        (task, index) => <div key={index} className="task">
                            <input type="checkbox" checked={task.isComplete} onChange={() => markcompleted(index)} />
                            {
                                task.isEditing ?
                                    <input value={task.content} onChange={(event) => updateValue(index, event.target.value)} className='editinput' /> :


                                    <span className='content'>
                                        {

                                                task.isComplete ?
                                                <del>{task.content}</del> :
                                                task.content
                                        }
                                    </span>
                            }
                            {task.isEditing ?
                                <button onClick={() => saveTask(index)} className='save'>save</button> :
                                <button onClick={() => editTask(index)} className='edit'>edit</button>
                            }
                            <button onClick={() => deletetask(index)} className='delete'>delete </button>
                        </div>
                    )
                }

            </div>
            <div className='addtaskcontainer'>
                <input value={inputvalue} onChange={(event) => setInputvalue(event.target.value)}placeholder='enter a task' />
                <button onClick={addData}>add task</button>
            </div>
        </div>);
}
export default TaskManager;
