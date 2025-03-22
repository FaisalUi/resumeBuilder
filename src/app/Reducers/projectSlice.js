import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
    name: 'projectList',
    initialState: {
        projects: [''], // Initialize with one empty skill field
        error: ''
    },
    reducers: {
        addProject: (state) => {
            if (state.projects[state.projects.length - 1] === '') {
                state.error = 'Please enter a Project before adding another.';
            } else {
                state.error = '';
                state.projects.push(''); // Add a new empty Project field
            }
        },
        removeProject: (state, action) => {
            if(action.payload >0){
                state.projects.splice(action.payload, 1); // Remove Project at the specified index
                state.error = ''; // Clear error message when removing a Project
            }
        },
        updateProject: (state, action) => {
            const { index, value } = action.payload; 
            state.projects[index] = value; // Update Project at the specified index
            state.error = ''; // Clear error message when updating a Project
        }
    }
});

export const { addProject, removeProject, updateProject } = projectSlice.actions;
export default projectSlice.reducer;