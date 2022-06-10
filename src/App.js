import React, { useReducer } from "react";
import "./App.css";
import UseCustomCount from "./components/hooks/customeHooks/UseCustomCount";
import UseCustomCountTwo from "./components/hooks/customeHooks/UseCustomCountTwo";
import UseDocHook from "./components/hooks/customeHooks/UseDocHook";
import UseDocHookOne from "./components/hooks/customeHooks/UseDocHookOne";
import UseFetch from "./components/hooks/customeHooks/UseFetch";
import UserForm from "./components/hooks/customeHooks/UserForm";
import HookCall from "./components/hooks/useCallBack/HookCall";
import ParentCompoCall from "./components/hooks/useCallBack/ParentCompoCall";
import Todos from "./components/hooks/useCallBack/Todos";
import MemoHook from "./components/hooks/useMemo/MemoHook";
import ClassCounter from "./components/hooks/useRef/ClassCounter";
import FocusInpHook from "./components/hooks/useRef/FocusInpHook";
import HookTimer from "./components/hooks/useRef/HookTimer";
import RefHook from "./components/hooks/useRef/RefHook";

function App() {
  return (
    <div className="App">
      <UseFetch />
    </div>
  );
}

export default App;
