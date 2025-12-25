import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { tasksAPI } from "./tasksAPI";


export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async () => {
    const response = await tasksAPI.fetchTasks();
    return response.data;
  }
);

export const addTaskAsync = createAsyncThunk(
  "tasks/addTask",
  async (task) => {
    const response = await tasksAPI.addTask(task);
    return response.data;
  }
);

export const updateTaskAsync = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, title }) => {
    const response = await tasksAPI.updateTask(id, { title });
    return response.data;
  }
);

export const deleteTaskAsync = createAsyncThunk(
  "tasks/deleteTask",
  async (id) => {
    await tasksAPI.deleteTask(id);
    return id;
  }
);




const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    filter: "All",
    search: "",
    loading: false,
    error: null,
  },
  reducers: {
  setFilter: (state, action) => {
    state.filter = action.payload;
  },
  setSearch: (state, action) => {
    state.search = action.payload;
  },
  toggleStatus: (state, action) => {
    const task = state.list.find(
      (t) => t.id === action.payload
    );
    if (task) {
      task.status =
        task.status === "Pending" ? "Completed" : "Pending";
    }
  },
},

  extraReducers: (builder) => {
    builder
      
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      .addCase(addTaskAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(addTaskAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      .addCase(updateTaskAsync.fulfilled, (state, action) => {
        const index = state.list.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.list = state.list.filter((task) => task.id !== action.payload);
      })
      
      
  },
});

export const { setFilter, setSearch, toggleStatus } = tasksSlice.actions;
export default tasksSlice.reducer;