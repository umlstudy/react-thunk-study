import ReactToast, { showToast } from "./ReactToast";

type Props = {}

// https://blog.logrocket.com/how-to-create-custom-toast-component-react/

const ReactToastExam = (props: Props) => {

    const handleOpenToast = () => {
        showToast('true');
    };

    return (
        <div>
            <h1>React Toast Example</h1>
            <button onClick={handleOpenToast}>Show Toast</button>
            <ReactToast message='hello'/>
        </div>
    );
}

export default ReactToastExam