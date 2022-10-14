import { configureStore, createSlice } from "@reduxjs/toolkit";

const word = createSlice({
    name: '글자',
    // initialState: '나는 글자입니다.',
    initialState: 1,
    reducers: {
        up: (state) => state + 1
    }
})

const { up } = word.actions;
export { up }

const changeMode = createSlice({
    name: '다크모드',
    initialState: false,
    reducers: {
        change: state => !state
    }
});

export const { change } = changeMode.actions;

const createInput = createSlice({
    name: '포함한 값 받기',
    initialState: [],
    reducers: {
        create: (state, action) => {state.push("value is in here")}
    }
})

export const { create } = createInput.actions;

const store = configureStore({
    reducer: {
        word: word.reducer,
        changeMode: changeMode.reducer,
        createInput: createInput.reducer
    }
});

export default store