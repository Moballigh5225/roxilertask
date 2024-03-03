"use client";
import "./Page.css";
import Profile from "./components/Profile";
import TableScreen from "./components/Table";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import Form from "react-bootstrap/Form";
import Stats from "./components/Stats";
import axios from "axios";

export default function Home() {
  return (
    <div className="App">
      <div className="dataCard dropdownCard">
        <Form.Select
          aria-label="Default select example"
          className="form-controller"
        >
          <option>Select Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </Form.Select>
      </div>
      <div className="dataCard profileCard " style={{ padding: "30px" }}>
        <Profile />
      </div>
      <div className="dataCard statsCard">
        <Stats />
      </div>
      <div className="dataCard customerCard">
        <BarChart />
      </div>
      <div className="dataCard categoryCard">
        <PieChart />
      </div>
      <div className="dataCard tableCard">
        <TableScreen />
      </div>
    </div>
  );
}
