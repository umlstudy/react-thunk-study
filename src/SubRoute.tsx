import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ReactReduxThunkStudy from "./ReactReduxThunkStudy";
import { UseEffectTestor } from "./UseEffectTestor";

export const SubRoute: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/subroute/">redux thunk test</Link>
          </li>
          <li>
            <Link to="/subroute/useeffect">use effect test</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
