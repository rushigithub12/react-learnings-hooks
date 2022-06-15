import { useState, useTransition } from "react";
import Greet from "./components/Greet";
import "./App.css";
import Message from "./components/Message";
import EventHandler from "./components/EventHandler";
import { ParentComponent } from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import { Inline } from "./components/Inline";
import "./appStyle.css";
import styles from "./appStyle.module.css";
import Form from "./components/Form";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import NAMES from "./components/MOCK_DATA.json";
import PureComp, { PureComponent } from "./components/PureComponent";
import CompContainer from "./components/CompContainer";
import RefsDemo from "./components/RefsDemo";
import Input from "./components/Input";
import FocusInput from "./components/FocusInput";
import ForwrdParent from "./components/ForwrdParent";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCount from "./components/HoverCount";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User1 from "./components/User1";

function App() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const changeHandler = (e) => {
    setInputValue(e.target.value);
    startTransition(() => setQuery(e.target.value));
  };

  const filteredNames = NAMES.filter((item) => {
    return (
      item.first_name.toLowerCase().includes(query) ||
      item.last_name.toLowerCase().includes(query)
    );
  });

  return (
    <div className="App">
      {/* <h3>learn react</h3>
      <Greet name = 'Bruce' heroName = 'batman'/>
      <Greet name = 'Clark' heroName = 'Superman'>
        <button>Action</button>
      </Greet>
      <Greet name = 'Diana' heroName = 'Wonder Woman'>
        <p>This is childern prop</p>
      </Greet > */}
      {/* <Message /> */}
      {/* <EventHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet /> */}
      {/* <Inline /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Form /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
      {/* <input type="text" value={inputValue} onChange={changeHandler}/>
      {isPending && <p>Updating List...</p>}
      {
        filteredNames.map((name) => {
          return <p key={name.id}>{name.first_name} {name.last_name}</p>
        })
      } */}
      {/* <CompContainer /> */}
      {/* <RefsDemo /> */}
      {/* <Input /> */}
      {/* <FocusInput /> */}
      {/* <ForwrdParent /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <ClickCounter name="Javascript"/> */}
      {/* <HoverCount name= "Javascript"/> */}
      <ClickCounterTwo />
      <HoverCounterTwo />
      <User1 name={(isLoggedIn) => isLoggedIn ?  "James" : "Guest"}/>
    </div>
  );
}

export default App;
