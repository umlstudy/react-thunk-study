// App.tsx
import React from 'react';
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import ReactReduxThunkStudy from './ReactReduxThunkStudy';
import { UseEffectTestor } from './UseEffectTestor';
import { SubRoute } from './SubRoute';
import { RootMenu } from './RootMenu';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RootMenu />} />
          <Route path="/reduxthunk" element={<ReactReduxThunkStudy />} />
          <Route path="/useeffect" element={<UseEffectTestor />} />
          <Route path="/subroute/*" element={<SubRoute />} />
          <Route path="/subroute/useeffect" element={<UseEffectTestor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
