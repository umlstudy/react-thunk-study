// App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactPopupExam from './ReactPopupExam';
import ReactReduxThunkStudy from './ReactReduxThunkStudy';
import { RootMenu } from './RootMenu';
import { SubRoute } from './SubRoute';
import { UseEffectTestor } from './UseEffectTestor';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RootMenu />} />
          <Route path="/reduxthunk" element={<ReactReduxThunkStudy />} />
          <Route path="/popuptest" element={<ReactPopupExam />} />
          <Route path="/useeffect" element={<UseEffectTestor />} />
          <Route path="/subroute/*" element={<SubRoute />} />
          <Route path="/subroute/useeffect" element={<UseEffectTestor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
