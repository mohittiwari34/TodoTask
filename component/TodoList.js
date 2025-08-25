import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../feature/storeSlice";
import { useState } from "react";

export default function TodoList({selecteddate}) {
  const list = useSelector((state) => state.todos.list);
  const[butt,setbutt]=useState(false);
  const dispatch = useDispatch();
  const tudoo=list[selecteddate]||[];

  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
       marginTop: "30px",
        maxWidth: "500px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {tudoo.map((item, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 16px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
            backgroundColor: "#fff",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "16px",
              fontWeight: "500",
              color: "#333",
            }}
          >
            {item.text}
          </p>
  
          <button
            onClick={() => dispatch(deleteTodo({date:selecteddate,id:item.id}))}
            style={{
              padding: "8px 14px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#e63946",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d62828")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#e63946")}
          >
            Delete
          </button>
        </li>
      ))}
      
    </ul>
  );
}
