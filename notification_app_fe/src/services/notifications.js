import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzb251amFuZ3JhNTA1MEBnbWFpbC5jb20iLCJleHAiOjE3ODA0ODEwNjEsImlhdCI6MTc4MDQ4MDE2MSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjI2NzEyM2RjLWYwZjYtNDEzMi04NmRkLTM3N2I1NTFjOWU3OSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNvbWJpciIsInN1YiI6IjFiZDQwOTQ0LTZkZjYtNDJmNS04MzJhLTk0MjY1Y2IyMTYzOCJ9LCJlbWFpbCI6InNvbnVqYW5ncmE1MDUwQGdtYWlsLmNvbSIsIm5hbWUiOiJzb21iaXIiLCJyb2xsTm8iOiIyMzM4NTQxIiwiYWNjZXNzQ29kZSI6Im53d3NLeCIsImNsaWVudElEIjoiMWJkNDA5NDQtNmRmNi00MmY1LTgzMmEtOTQyNjVjYjIxNjM4IiwiY2xpZW50U2VjcmV0IjoiZVdmTldBVnB6WHBQdndIVyJ9.Oi6uwHuyy0H9BNbzVreCd0jLKAx5WaGe9oP4y0nisAI";

export const getNotifications = async () => {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};