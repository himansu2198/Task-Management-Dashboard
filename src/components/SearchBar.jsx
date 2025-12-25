
import { useDispatch } from "react-redux";
import { setSearch } from "../features/tasks/tasksSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <input
      className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
      placeholder="Search tasks..."
      onChange={(e) => dispatch(setSearch(e.target.value))}
    />
  );
}
