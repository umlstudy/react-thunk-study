// store.ts
import { AnyAction, Store, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from './reducers';

// 스토어 타입 정의
export type AppStore = Store<RootState, AnyAction> & {
    dispatch: DispatchType;
};

// 루트 리듀서 타입 정의
export type RootState = ReturnType<typeof rootReducer>;

// 디스패치 타입 정의
export type DispatchType = ThunkMiddleware<RootState, AnyAction>;

const store: AppStore = createStore(rootReducer, applyMiddleware(thunk));

export default store;