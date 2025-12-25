import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/tasks/tasksSlice";

export default function FilterBar() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasks.filter);
  const filters = ["All", "Pending", "Completed"];

  return (
    <div className="flex justify-center gap-3">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => dispatch(setFilter(f))}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currentFilter === f
              ? "bg-teal-600 text-white shadow-md"
              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
