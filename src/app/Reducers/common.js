import { createSlice } from '@reduxjs/toolkit'; 
 
const commonSlice = createSlice({
    name: 'commonInfo',
    initialState: {
        isLastStep: false,
        resumeDownload: false,
        resumImgSrc: '',
        userImgSrc: ''
    },
    reducers: {
        lastStepInfo: (state, action) => { 
            state.isLastStep = action.payload
        }, 
        resumeDownloadInfo: (state, action) => { 
            state.resumeDownload = action.payload
        }, 
        resumeImgInfo: (state, action) => { 
            state.resumImgSrc = action.payload
        }, 
        userImgInfo: (state, action) => { 
            state.userImgSrc = action.payload
        }, 
    }
});



export const { lastStepInfo , resumeDownloadInfo, resumeImgInfo, userImgInfo } = commonSlice.actions;
export default commonSlice.reducer;