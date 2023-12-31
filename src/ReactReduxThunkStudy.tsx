// App.tsx
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';
import { RootState } from './store';

const ReactReduxThunkStudy: React.FC = () => {
  const data = useSelector((state: RootState) => state.data);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('마운트... ');
    dispatch(fetchData() as any);
    return () => {
      console.log("언마운드되었음...");
    }
  }, []);

  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  console.log('렌더링 발생... => ' + renderCount.current);
  console.log('data ... => ' + data);
  console.log('loading ... => ' + loading);
  console.log('error ... => ' + renderCount.current);

  if (loading) {
    return <div>로딩 중.....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>데이터 목록</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReactReduxThunkStudy;
