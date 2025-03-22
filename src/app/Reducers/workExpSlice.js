import { createSlice } from '@reduxjs/toolkit';

const workExpSlice = createSlice({
    name: 'workExp',
    initialState: {
        workDetails: [{
            name: '',
            role: '',
            state: '',
            country: '',
            startDate: '',
            endDate: '',
            workhere: false,
            professionalSummary: ''
        }],
        error: null,
    },
    reducers: {
        addWorkExperience: (state) => {
            state.workDetails.push({
                name: '',
                role: '',
                state: '',
                country: '',
                startDate: '',
                endDate: '',
                workhere: false,
                professionalSummary: ''
            })
        },
        updateWorkExperience: (state, action) => {
            const { index, name, value, checked } = action.payload;
            let data = [...state.workDetails]
            // let newdata = data.map((e, i) => {
            //     if (index == i) {
            //         if (name === 'workhere') {

            //             // return { ...e, workhere: checked }; // Update workhere based on checked 
            //             data = data.map((e, i) => {
            //                 if (i !== index) {
            //                     return { ...e, workhere: false };
            //                 }
            //                 return { ...e, workhere: checked }; // Update the current entry
            //             });
            //         }
            //         return { ...e, [name]: value }
            //     }
            //     return e
            // }
            // )
            // If the 'workhere' field is being updated
            if (name === 'workhere') {
                // Set all other workhere fields to false
                data = data.map((e, i) => {
                    if (i !== index) {
                        return { ...e, workhere: false };
                    }
                    let dtToday = new Date();
                    let month = dtToday.getMonth() + 1;
                    let day = dtToday.getDate();
                    let year = dtToday.getFullYear();
                    if (month < 10)
                        month = '0' + month.toString();
                    if (day < 10)
                        day = '0' + day.toString();

                    const maxDate = year + '-' + month + '-' + day;
                    return { ...e, workhere: checked, endDate: maxDate }; // Update the current entry
                });
            } else {
                // Update other fields
                data = data.map((e, i) => {
                    if (i === index) {
                        return { ...e, [name]: value };
                    }
                    return e;
                });
            }
            state.workDetails = data
        },
        removeWorkExperience: (state, action) => {
            if (action.payload > 0) {
                const newSkills = state.workDetails.filter((_, i) => i !== action.payload);
                state.workDetails = newSkills;
            }
        },
    }
});

export const { addWorkExperience, updateWorkExperience, removeWorkExperience } = workExpSlice.actions;
export default workExpSlice.reducer;