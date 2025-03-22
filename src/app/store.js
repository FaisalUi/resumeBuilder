import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from './Reducers/skillsSlice';
import skillsTagReducer from './Reducers/skillsTagSlice';
import personalinfoReducer from './Reducers/personalInfo';
import workExpReducer from './Reducers/workExpSlice';
import qualificationInfoReducer from './Reducers/qualificationInfo';
import commonSliceReducer from './Reducers/common';
import projectSliceReducer from './Reducers/projectSlice';

const store = configureStore({
    reducer: {
        skills: skillsReducer,
        skillsTag: skillsTagReducer,
        personalInfo: personalinfoReducer,
        workExp: workExpReducer,
        qualificationInfo: qualificationInfoReducer,
        commonInfo: commonSliceReducer,
        projectList: projectSliceReducer
    }
});

export default store;