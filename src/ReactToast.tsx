import styled from 'styled-components';

// Styled-component와 Tailwind 함께 사용하기 참조해서 적용해볼것
// https://itchallenger.tistory.com/569

const ToastOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ToastContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 4px;
`;

// 템플릿 tsrf

type Props = { message: string }

const ReactToast = ({ message }:Props) => {
    return (
        <ToastOverlay>
            <ToastContent>
                {message}
            </ToastContent>
        </ToastOverlay>
    );
};

export const showToast = (message:string) => {
    // 메시지를 보여주는 함수
    // 일정 시간 후에 자동으로 사라지는 효과를 구현할 수도 있습니다.
    return <ReactToast message={message}/>
};


export default ReactToast;
