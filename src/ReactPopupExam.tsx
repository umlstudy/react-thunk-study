import { useState } from 'react';
import ReactPopup from './ReactPopup';

type Props = {}

const ReactPopupExam = (props: Props) => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div>
            <h1>React Popup Example</h1>
            <button onClick={handleOpenPopup}>Open Popup</button>

            <ReactPopup isOpen={isPopupOpen} onClose={handleClosePopup}>
                <h2>Popup Content</h2>
                <p>This is the content of the popup.</p>
            </ReactPopup>
        </div>
    );
}

export default ReactPopupExam