import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './counter/Counter'
import Todo from "./todo/Todo";
import Condition from "./conditional/Condition";
import Test from "./Test";
import UserForm from "./form/user/UserForm";
// import HookCounter from './hooks/HookCounter3'
import NewApp from "./test/NewApp";
import NewCounter from "./counter/NewCounter";
import NewTODO from "./todo/NewTODO";

// import MemeGenerator from "./meme/MemeGenerator";
import MemeGenerator from "./hooks/memeGenerator/MemeGenerator"

import TestApp from "./hooks/Test"
import HookCounter from "./hooks/Test"
import NewToDo from "./hooks/Test";
import HookTodoApp from "./hooks/todoaapp/TodoApp";
import LoadingButton from "./hooks/LoadingButton";
import TestLoadingBtn from "./hooks/TestLoadingBtn";
import HookCounter3 from "./hooks/HookCounter3";
import TestCss from './test/css/TestCss'
import TestBootstrap from "./test/css/TestBootstrap";
import TestForm from "./form/TestForm";
import TestComponent from "./test/NewTest";

ReactDOM.render(
    <React.StrictMode>
        {/*<Counter />*/}
        {/*{<HookCounter />}*/}
        {/*{<App />}*/}
        {/*{<Todo />}*/}
        {/*{<Condition />}*/}
        {/*{<Test />}*/}
        {/*{<UserForm />}*/}
        {/*{<TestForm />}*/}
        {/*{<NewApp />}*/}
        {/*{<NewCounter />}*/}
        {/*{<NewTODO />}*/}
        {<MemeGenerator />}
        {/*<TestApp />*/}
        {/*<HookCounter />*/}
        {/*<NewToDo />*/}
        {/*<HookTodoApp/>*/}
        {/*<TestLoadingBtn/>*/}
        {/* <HookCounter3 /> */}
        {/* <TestCss/> */}
        {/*<TestBootstrap/>*/}
        {/*<TestComponent/>*/}

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
