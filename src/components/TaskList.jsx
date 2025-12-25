import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { list, filter, search } = useSelector((state) => state.tasks);

  const filteredTasks = list.filter((task) => {
    const matchFilter = filter === "All" || task.status === filter;
    const matchSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  return (
    <div className="space-y-3">
      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No tasks found</p>
      ) : (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
}
