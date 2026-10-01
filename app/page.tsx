"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function Home() {
  const [status, setStatus] = useState("Checking...");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Backend connection failed"));

    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <h1>My Amplify Website</h1>

      <p>Backend Status: {status}</p>

      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
        </div>
      ))}
    </main>
  );
}