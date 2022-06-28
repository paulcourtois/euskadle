import { createSlice, configureStore } from '@reduxjs/toolkit'

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'french'
  },
  reducers: {
    changeToSpanish: state => {return {...state, language: 'spanish'}}
    ,
    changeToFrench: state => {return {...state, language: 'french'}}
  }
})

export const { changeToSpanish, changeToFrench } = languageSlice.actions

const store = configureStore({
  reducer: languageSlice.reducer
})

export default store