import React, { useState } from 'react'

const TodoList = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tasklist, setTasklist] = useState([])

  const addList = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    setTasklist((prev) => [...prev, newTask]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (id) => {
    setTasklist((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleCompleteTask = (id) => {
    setTasklist((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        
        <h2 className="text-2xl font-bold mb-4 text-center">Todo List</h2>

        <input 
          type="text"
          placeholder="Enter what you need"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input 
          type="text"
          placeholder="Describe"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button 
          onClick={addList}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mb-5"
        >
          Add List
        </button>

        <ul className="space-y-3">
          {tasklist.map((task) => (
            <li 
              key={task.id}
              className="bg-gray-50 border rounded-xl p-4 shadow-sm"
            >
              <h3 
                className={`text-lg font-semibold ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.title}
              </h3>

              <p className="text-sm text-gray-600 mb-3">
                {task.description}
              </p>

              <div className="flex gap-2">
                <button 
                  onClick={() => deleteTask(task.id)}
                  className="text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>

                <button 
                  onClick={() => toggleCompleteTask(task.id)}
                  className={`text-sm px-3 py-1 rounded-md text-white transition ${
                    task.completed 
                      ? "bg-green-500 hover:bg-green-600" 
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default TodoList