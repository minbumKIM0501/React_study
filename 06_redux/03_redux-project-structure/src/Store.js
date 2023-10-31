import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
/* createStore가 deprecated되어 있느나 구동에 문제는 없다.
삭선을 없애려면 이름을 명시적으로 아래처럼 작성하면 된다.
(향후에는 @reduxjs/toolkit을 사용하려고 권고하고자 함이고 없어진 기능은 아니다.*/
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './modules';


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;