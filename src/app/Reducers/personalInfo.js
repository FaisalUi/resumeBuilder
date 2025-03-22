import { createSlice } from '@reduxjs/toolkit'; 
 
const personalinfoSlice = createSlice({
    name: 'personalInfo',
    initialState: {
        information: {
            name: '',
            designation: '',
            email: '',
            number: '', 
            address: '',
            state: '',
            city: '',
            country: '',
            zipCode: '',
        },
        professional : ''

    },
    reducers: {
        updatePersonalInfo: (state, action) => { 
            const { name, value } = action.payload; 
            if(name === 'userDetails') {
                state.information =  { ...state.information, name: value?.userName, email: value?.userEmail }  
            }
            state.information =  {...state.information, [name]: value };
        },
        updateprofessionalSummary: (state, action) => { 
            state.professional = action.payload;  
        },
    }
});
 
export const { updatePersonalInfo, updateprofessionalSummary } = personalinfoSlice.actions;
export default personalinfoSlice.reducer;