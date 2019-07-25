import { createStore } from 'redux'
import dogImages from './reducers/dogImages'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(dogImages, enhancer)

export default store