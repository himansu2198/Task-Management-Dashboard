import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../features/tasks/tasksSlice";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import ThemeToggle from "../components/ThemeToggle";

export default function Dashboard() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const { loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 flex items-start justify-center p-6 transition-colors duration-200">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-lg w-full max-w-2xl p-6 space-y-6 transition-colors duration-200">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Task Management Dashboard
          </h1>
          <ThemeToggle />
        </div>

        {loading && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-500 border-t-transparent"></div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Loading tasks...</p>
          </div>
        )}

        <TaskForm />
        <SearchBar />
        <FilterBar />
        <TaskList />
      </div>
    </div>
  );
}
