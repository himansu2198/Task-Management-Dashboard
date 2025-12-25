import { tasksData } from "../../mock/tasksData";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


let mockDatabase = [...tasksData];

export const tasksAPI = {
  
  fetchTasks: async () => {
    await delay(500); 
    return { success: true, data: [...mockDatabase] };
  },

  
  addTask: async (task) => {
    await delay(300);
    const newTask = { ...task, id: Date.now() };
    mockDatabase.push(newTask);
    return { success: true, data: newTask };
  },

  
  updateTask: async (id, updates) => {
    await delay(300);
    const taskIndex = mockDatabase.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      mockDatabase[taskIndex] = { ...mockDatabase[taskIndex], ...updates };
      return { success: true, data: mockDatabase[taskIndex] };
    }
    return { success: false, error: "Task not found" };
  },

  
  deleteTask: async (id) => {
    await delay(300);
    const taskIndex = mockDatabase.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const deletedTask = mockDatabase.splice(taskIndex, 1)[0];
      return { success: true, data: deletedTask };
    }
    return { success: false, error: "Task not found" };
  },

  
  toggleTaskStatus: async (id) => {
    await delay(300);
    const task = mockDatabase.find((task) => task.id === id);
    if (task) {
      task.status = task.status === "Pending" ? "Completed" : "Pending";
      return { success: true, data: task };
    }
    return { success: false, error: "Task not found" };
  },
};