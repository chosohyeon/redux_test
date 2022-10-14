# 리덕스 툴킷 기본 사용...

1. npm i react-redux @reactjs/toolkit

```
npm install @reduxjs/toolkit react-redux
````


2. store.js (state 모아둘 곳) 만들기
// ./store.js
```
import { configureStore } from "@reduxjs/toolkit";
export default store = configureStore({
    reducer: {},
})
```


3. Provider 로 앱 싸주기
```
import { Provider } from 'react-redux';
import store from './data/store';
<Provider store={store}>
    <App />
</Provider>
```

4. createSlice로 state 추가하기

```
import { configureStore, createSlice(추가) } from "@reduxjs/toolkit";
const test = createSlice({
    name: 'test',
    initialState: '나는 테스트 텍스트임...'
})
```