import React, { useEffect, useState } from "react";
import axios from "axios";
import { createuserapi, getuserapi } from "../service/api";

const EmployeeCards = () => {
  const [users, setUsers] = useState([]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    empId: "",
  });

  async function getUserData() {
    try {
      const response = await axios.get(getuserapi);
      setUsers(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  function changeHandler(e) {
    const { name, value } = e.target;

    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function createUser() {
    try {
      await axios.post(createuserapi, newUser);
      getUserData();

      setNewUser({
        name: "",
        email: "",
        empId: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    createUser();
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#1e293b)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#38bdf8",
          marginBottom: "0pc",
          fontSize: "42px",
          fontWeight: "bold",
        }}
      >
        Employee System App
      </h1>

      <form
        onSubmit={submitHandler}
        style={{
          width: "450px",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "18px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          marginBottom: "50px",
        }}
      >
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={changeHandler}
          placeholder="Name"
          style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "15px",
          marginBottom: "20px",
          border: "none",
          borderRadius: "10px",
          outline: "none",
          fontSize: "16px",
        }}
        />

        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={changeHandler}
          placeholder="Email"
          style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "15px",
          marginBottom: "20px",
          border: "none",
          borderRadius: "10px",
          outline: "none",
          fontSize: "16px",
        }}
        />

        <input
          type="text"
          name="empId"
          value={newUser.empId}
          onChange={changeHandler}
          placeholder="Emp. Id"
          style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "15px",
          marginBottom: "20px",
          border: "none",
          borderRadius: "10px",
          outline: "none",
          fontSize: "16px",
        }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            background: "#0ea5e9",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {users.map((item, i) => (
          <div
            key={i}
            style={{
              width: "320px",
              background: "#1e293b",
              color: "white",
              padding: "25px",
              borderRadius: "18px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "#38bdf8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto 20px",
                fontSize: "28px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              {item.name?.charAt(0).toUpperCase()}
            </div>

            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#38bdf8",
              }}
            >
              Employee
            </h2>

            <p style={{ marginBottom: "10px" }}>
              <strong>Name:</strong> {item.name}
            </p>

            <p style={{ marginBottom: "10px" }}>
              <strong>Email:</strong> {item.email}
            </p>

            <p style={{ marginBottom: "20px" }}>
              <strong>Emp. Id:</strong> {item.empId}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                style={{
                  width: "48%",
                  padding: "10px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#ef4444",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Delete
              </button>

              <button
                style={{
                  width: "48%",
                  padding: "10px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#22c55e",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeCards;