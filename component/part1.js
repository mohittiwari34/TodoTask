import { useSelector } from "react-redux";
import { useLocation } from "react-router";

export default function Part1() {
  const tdou = useSelector((state) => state.todos.list);
  const location = useLocation();
  const { d } = location.state || {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#333" }}>
        Tasks for {d || "Unknown Date"}
      </h1>

      {tdou[d]?.length > 0 ? (
        tdou[d].map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              margin: "10px 0",
              width: "80%",
              maxWidth: "500px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2 style={{ margin: "0", fontSize: "18px", color: "#444" }}>
              {item.text}
            </h2>
          </div>
        ))
      ) : (
        <p style={{ color: "#888", fontSize: "16px" }}>No tasks available.</p>
      )}
    </div>
  );
}
