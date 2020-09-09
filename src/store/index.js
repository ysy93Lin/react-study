import { createStore } from 'redux'
import reducer from "./reducer"

// 创建store对象
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store