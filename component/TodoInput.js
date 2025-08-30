import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addTodo } from "../feature/storeSlice";
import TodoList from "./TodoList";

const dayu = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const generate7days = () => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const dayname = dayu[d.getDay()];
    const datee = d.toISOString().split("T")[0];
    days.push({ day: dayname, data: datee });
  }
  return days;
};

export default function Todo() {
  const [part, setpart] = useState(generate7days()[0].data);
  const navigate = useNavigate();
  const [text, settext] = useState("");
  const [selecteddate, setSelected] = useState(generate7days()[0].data);
  const dispatch = useDispatch();
  const tdo = useSelector((state) => state.todos.list);

  function handele() {
    if (text.trim()) {
      dispatch(addTodo({ date: selecteddate, text }));
      settext("");
    }
  }

  function handleSearch() {
    navigate("/task", { state: { d: part } });
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "28px", color: "#333" }}>
          Date: {new Date().toLocaleDateString()}
        </h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        {generate7days().map(({ day, data }) => (
          <button
            key={data}
            onClick={() => setSelected(data)}
            style={{
              padding: "10px 15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              backgroundColor: selecteddate === data ? "#4CAF50" : "#f9f9f9",
              color: selecteddate === data ? "white" : "#333",
              cursor: "pointer",
              fontWeight: selecteddate === data ? "bold" : "normal",
              transition: "0.3s",
            }}
          >
            {day}
            <br />
            {data}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        <input
          style={{
            height: "50px",
            width: "400px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            padding: "0 15px",
            fontSize: "16px",
            outline: "none",
            boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
          }}
          placeholder="Enter your task"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />

        <button
          style={{
            height: "50px",
            width: "120px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          onClick={handele}
        >
          Add Task
        </button>
      </div>

      <TodoList selecteddate={selecteddate} />

      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginTop: "40px",
        }}
      >
        <input
          type="date"
          onChange={(e) => setpart(e.target.value)}
          value={part}
          style={{
            height: "45px",
            padding: "0 15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            outline: "none",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            height: "45px",
            padding: "0 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#2196F3",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1976D2")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2196F3 ")}
        >
          Search By Date
        </button>
      </div>
    </>
  );
}
