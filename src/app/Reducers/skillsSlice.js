import { createSlice } from '@reduxjs/toolkit';

const skillsSlice = createSlice({
    name: 'skills',
    initialState: {
        skills: [''], // Initialize with one empty skill field
        error: ''
    },
    reducers: {
        addSkill: (state) => {
            if (state.skills[state.skills.length - 1] === '') {
                state.error = 'Please enter a skill before adding another.';
            } else {
                state.error = '';
                state.skills.push(''); // Add a new empty skill field
            }
        },
        removeSkill: (state, action) => {
            state.skills.splice(action.payload, 1); // Remove skill at the specified index
            state.error = ''; // Clear error message when removing a skill
        },
        updateSkill: (state, action) => {
            const { index, value } = action.payload;
            state.skills[index] = value; // Update skill at the specified index
            state.error = ''; // Clear error message when updating a skill
        }
    }
});

export const { addSkill, removeSkill, updateSkill } = skillsSlice.actions;
export default skillsSlice.reducer;