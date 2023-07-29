import React from 'react';
import styled from 'styled-components';

// Styled-component와 Tailwind 함께 사용하기 참조해서 적용해볼것
// https://itchallenger.tistory.com/569

const PopupOverlay = styled.div`
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

const PopupContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 4px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
`;

// 템플릿 tsrf

type Props = { isOpen: boolean, onClose: ()=>void, children: React.ReactElement[] }

const ReactPopup = ({ isOpen, onClose, children }: Props) => {
    if (!isOpen) return null;

    return (
        <PopupOverlay>
            <PopupContent>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {children}
                <div>hello</div>
            </PopupContent>
        </PopupOverlay>
    );
};

export default ReactPopup