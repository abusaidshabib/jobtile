import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalData: {},
  educationData: [],
  skills: [],
  languageData: [],
  webLink: [],
  experience: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setPersonal: (state, action) => {
      state.personalData = action.payload;
    },
    setEducationData: (state, action) => {
      state.educationData = action.payload;
    },
    setLanguageData: (state, action) => {
      state.languageData = action.payload;
    },
    setSkillsData: (state, action) => {
      state.skills = action.payload;
    },
    setWebLinks: (state, action) => {
      state.webLink = action.payload;
    },
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
  },
});

export const {
  setEducationData,
  setLanguageData,
  setSkillsData,
  setWebLinks,
  setExperience,
  setPersonal,
} = formSlice.actions;
export default formSlice.reducer;
