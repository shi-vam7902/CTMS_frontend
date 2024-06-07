import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addProject , getAllProject ,addTasks} from "./projectApi";

// Renamed thunk creator to avoid naming conflicts
export const getAllProjectsAsync = createAsyncThunk(
  'projects/getAllProject',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllProject();
      console.log("project slice data:",data.data.data);
      return data.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addProjectAsync = createAsyncThunk(
  'projects/addProject',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await addProject(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addTasksAsync = createAsyncThunk(
    'projects/addTasks',
    async (formData, { rejectWithValue }) => {
      try {
        const data = await addTasks(formData);
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );


const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    loading: false,
    projects: [],
    Task:[],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjectsAsync.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(getAllProjectsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getAllProjectsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(addProjectAsync.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(addProjectAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.projects.push(action.payload);
        state.status = 'succeeded';
      })
      .addCase(addProjectAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(addTasksAsync.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(addTasksAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.Task.push(action.payload);
        state.status = 'succeeded';
      })
      .addCase(addTasksAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = 'failed';
      });
  }
});

export default projectSlice.reducer;
export const selectProjects = (state) => state.projects.projects;
export const selectError = (state) => state.projects.error;
export const selectStatus = (state) => state.projects.status;
export const selectLoader = (state) => state.projects.loading;
