import { createSlice } from '@reduxjs/toolkit';

const skillsTagSlice = createSlice({
    name: 'skillsTag',
    initialState: {
        skills: [], // Initialize with one empty skill field
        error: ''
    },
    reducers: {
        addSkill: (state, action) => {
            state.skills = [...state.skills, action.payload]; 
        },
        removeSkill: (state, action) => {
            state.skills.splice(action.payload, 1); // Remove skill at the specified index
            state.error = ''; // Clear error message when removing a skill
        },
        updateSkill: (state, action) => {
            const { index, value } = action.payload;
            state.skills[index] = value; // Update skill at the specified index 
        },
        dragSkill: (state, action) => {
            const { tag, currPos, newPos } = action.payload;
            const newTags = state.skills.slice();

            newTags.splice(currPos, 1);
            newTags.splice(newPos, 0, tag);
            state.skills = newTags; 
        }
    }
});

export const { addSkill, removeSkill, updateSkill, dragSkill } = skillsTagSlice.actions;
export default skillsTagSlice.reducer;