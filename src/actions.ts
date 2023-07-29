// actions.ts
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';
import { timer } from './timer';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// 액션 타입 정의
interface FetchDataRequestAction {
    type: typeof FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
    type: typeof FETCH_DATA_SUCCESS;
    payload: string[]; // 데이터의 타입을 string 배열로 가정
}

interface FetchDataFailureAction {
    type: typeof FETCH_DATA_FAILURE;
    payload: string; // 에러 메시지의 타입을 string으로 가정
}

export type DataActionTypes =
    | FetchDataRequestAction
    | FetchDataSuccessAction
    | FetchDataFailureAction;

// 비동기 작업을 수행하는 액션 생성자 함수
export const fetchData = (): ThunkAction<
    void,
    RootState,
    unknown,
    DataActionTypes
> => {
    return async (dispatch) => {
        console.log("fetchData start...")
        dispatch(fetchDataRequest());
        console.log("dispatch(fetchDataRequest())...")

        // 가상의 API 호출 (여기서는 setTimeout으로 대체)
        await timer(2000);

        // 성공적으로 데이터를 가져왔다고 가정합니다.
        try {
            // throw "에러가 발생했어요.";
            const data = ['데이터1', '데이터2', '데이터3'];
            dispatch(fetchDataSuccess(data));
        } catch ( e:any ) {
            dispatch(fetchDataFailure(e.toString()));
        }
        console.log("dispatch(fetchDataSuccess())...")
    };
};

export const fetchDataRequest = (): FetchDataRequestAction => {
    return {
        type: FETCH_DATA_REQUEST,
    };
};

export const fetchDataSuccess = (
    data: string[]
): FetchDataSuccessAction => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data,
    };
};

export const fetchDataFailure = (error: string): FetchDataFailureAction => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error,
    };
};
