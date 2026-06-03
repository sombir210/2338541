import { useEffect, useState } from "react";
import { getNotifications } from "./services/notifications";

function App() {
const [notifications, setNotifications] = useState([]);
const [filter, setFilter] = useState("All");
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5;
useEffect(() => {
const loadData = async () => {
const data = await getNotifications();

  if (!data || !data.notifications) return;

  const priority = {
    Placement: 100,
    Event: 90,
    Result: 80,
  };

  const sortedNotifications = [...data.notifications].sort((a, b) => {
    if (priority[b.Type] !== priority[a.Type]) {
      return priority[b.Type] - priority[a.Type];
    }

    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });

  setNotifications(sortedNotifications);
};

loadData();


}, []);

const filteredNotifications =
filter === "All"
? notifications
: notifications.filter((item) => item.Type === filter);
  
// Pagination logic
const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);
const paginatedNotifications = filteredNotifications.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

return (
<div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
<h1 style={{ textAlign: "center" }}>Campus Notifications</h1>


  <div
    style={{
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      marginBottom: "20px",
    }}
  >
    <button onClick={() => setFilter("All")}>All</button>
    <button onClick={() => setFilter("Placement")}>Placement</button>
    <button onClick={() => setFilter("Event")}>Event</button>
    <button onClick={() => setFilter("Result")}>Result</button>
  </div>

  {paginatedNotifications.map((item) => (
    <div
      key={item.ID}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "15px",
      }}
    >
      <h3>{item.Type}</h3>
      <p>{item.Message}</p>
      <small>{item.Timestamp}</small>
    </div>
  ))}
  <div style={{ textAlign: "center", marginTop: "20px" }}>
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
  >
    Previous
  </button>

  <span style={{ margin: "0 10px" }}>
    Page {currentPage} of {totalPages}
  </span>

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    Next
  </button>
</div>
</div>

);
}

export default App;
