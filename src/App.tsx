// App.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';
import { RootState } from './store';
import { UseEffectTestor } from './UseEffectTestor';


const App: React.FC = () => {
  const data = useSelector((state: RootState) => state.data);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);
  const dispatch = useDispatch();

  const [cnt, setCnt] = useState(1);

  useEffect(() => {
    console.log('마운트... => ' + cnt);
    dispatch(fetchData() as any);
    return ()=>{
      console.log("언마운드되었음...");
    }
  }, []);

  const renderCount = useRef(0);
  renderCount.current = renderCount.current+1;

  console.log('렌더링 발생... => ' + renderCount.current);
  console.log('data ... => ' + data);
  console.log('loading ... => ' + loading);
  console.log('error ... => ' + renderCount.current);

  if (loading) {
    return <div>LLL2 Loading...</div>;
  }

  if (error) {
    return <div>Error: {error} r</div>;
  }

  return (
    <div>
      <h1>데이터 목록 renderCount </h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <UseEffectTestor/>
    </div>
  );
};

export default App;
