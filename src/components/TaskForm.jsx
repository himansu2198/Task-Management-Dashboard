import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAsync } from "../features/tasks/tasksSlice";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(
      addTaskAsync({
        title,
        status: "Pending",
      })
    );

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        className="flex-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
        placeholder="Add a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
      />
      <button 
        className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </form>
  );
}
