import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./component/TodoList";
import Todo from "./component/TodoInput";
import { Provider } from 'react-redux';
import Partic from "./component/partic";
import Part1 from "./component/part1";
import { BrowserRouter,Route,Routes,Link } from "react-router";
import { store } from "./app/store";



export default function App(){
    useEffect(()=>{
    document.body.style.backgroundColor="#f0f8ff";
},[])
    return(
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Partic></Partic>}></Route>
            <Route path="/task" element={<Part1></Part1>}></Route>


        </Routes>
        
        
        </BrowserRouter>
        </Provider>
        
        
        </>
        
    )

}




ReactDOM.createRoot(document.getElementById("root")).render(<App />);