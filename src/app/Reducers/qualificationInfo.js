import { createSlice } from '@reduxjs/toolkit';

const qualificationInfoSlice = createSlice({
    name: 'instituteInfo',
    initialState: {
        qualificationDetails: [{
            name: '',
            degree: '',
            state: '',
            country: '',
            startDate: '',
            endDate: '',
            currentlyStudy: false
        }],
        error: null,
    },
    reducers: {
        addQualification: (state) => {
            state.qualificationDetails.push({
                name: '',
                degree: '',
                state: '',
                country: '',
                startDate: '',
                endDate: '',
                currentlyStudy: false
            })
        },
        updateQualification: (state, action) => {
            const { index, name, value, checked } = action.payload;
            let data = [...state.qualificationDetails]
            let newdata = data.map((e, i) => {
                if (index == i) {
                    if (name === 'currentlyStudy') { 
                        let dtToday = new Date();
                        let month = dtToday.getMonth() + 1;
                        let day = dtToday.getDate();
                        let year = dtToday.getFullYear();
                        if (month < 10)
                            month = '0' + month.toString();
                        if (day < 10)
                            day = '0' + day.toString();
    
                        const maxDate = year + '-' + month + '-' + day;
                        return { ...e, currentlyStudy: checked, endDate: maxDate }; // Update the current entry
                    }
                    return { ...e, [name]: value }

                }
                return e
            }
            )
            state.qualificationDetails = newdata
        },
        removeQualification: (state, action) => {
            if (action.payload > 0) {
                const newSkills = state.qualificationDetails.filter((_, i) => i !== action.payload);
                state.qualificationDetails = newSkills;
            }
        },
    }
});

export const { addQualification, updateQualification, removeQualification } = qualificationInfoSlice.actions;
export default qualificationInfoSlice.reducer;