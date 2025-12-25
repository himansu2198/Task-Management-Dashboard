import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTaskAsync, updateTaskAsync, toggleStatus }from "../features/tasks/tasksSlice";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleUpdate = () => {
    if (editTitle.trim()) {
      dispatch(updateTaskAsync({ id: task.id, title: editTitle }));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 hover:shadow-sm transition-all duration-200">
      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="flex-1 bg-white dark:bg-gray-600 border border-teal-300 dark:border-teal-500 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800 dark:text-gray-100"
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 ${
            task.status === "Completed"
              ? "line-through text-gray-400 dark:text-gray-500"
              : "text-gray-800 dark:text-gray-100"
          }`}
        >
          {task.title}
        </span>
      )}

      <div className="flex gap-2 items-center ml-3">
        {isEditing ? (
          <>
            <button
              onClick={handleUpdate}
              className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm font-medium transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 text-sm font-medium transition-colors"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-lg hover:bg-teal-200 dark:hover:bg-teal-800 text-sm font-medium transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(toggleStatus(task.id))}

                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                task.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              {task.status}
            </button>
            <button
              onClick={() => dispatch(deleteTaskAsync(task.id))}
              className="text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium transition-colors"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}