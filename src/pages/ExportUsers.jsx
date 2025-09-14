// src/pages/ExportUsers.jsx
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useAuth } from "../AuthContext";

export default function ExportUsers() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const adminEmails = ["satguruwebsite@gmail.com"]; // ✅ Add your email here

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userList = querySnapshot.docs.map((doc) => doc.data());
      setUsers(userList);
    };
    fetchUsers();
  }, []);

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "users.xlsx");
  };

  // 🚫 Not admin → hide page
  if (!user || !adminEmails.includes(user.email)) {
    return <p className="text-center mt-10 text-red-500">Access Denied</p>;
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Admin Export Panel</h1>
      <button
        onClick={handleExport}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow"
      >
        Export Users to Excel
      </button>
    </div>
  );
}
