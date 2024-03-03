import React, { useState, useEffect } from "react";

const MonthlyStats = () => {
  const [selectedMonth, setSelectedMonth] = useState("01");
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({
    totalUnsoldItems: 0,
    totalUnsoldAmount: 0,
    totalSaleAmount: 0,
    totalSoldItems: 0,
  });

  const months = [
    { value: "01", label: "Jan" },
    { value: "02", label: "Feb" },
    { value: "03", label: "Mar" },
    { value: "04", label: "Apr" },
    { value: "05", label: "May" },
    { value: "06", label: "Jun" },
    { value: "07", label: "Jul" },
    { value: "08", label: "Aug" },
    { value: "09", label: "Sep" },
    { value: "10", label: "Oct" },
    { value: "11", label: "Nov" },
    { value: "12", label: "Dec" },
  ];

  useEffect(() => {
    // Fetch data from the API
    fetch(
      "https://roxiler-interviews.s3.amazonaws.com/product_transaction.json"
    )
      .then((response) => response.json())
      .then((data) => {
        // Convert the date to only the month part
        const modifiedData = data.map((item) => ({
          ...item,
          date: item.date.substring(0, 7),
        }));
        setData(modifiedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Filter data for the selected month
    const filteredData = data.filter(
      (item) => item.date.substring(5, 7) === selectedMonth
    );

    // Calculate statistics
    const unsoldItems = filteredData.filter((item) => item.status === "true");
    const soldItems = filteredData.filter((item) => item.status === "false");

    const totalUnsoldItems = unsoldItems.length;
    const totalUnsoldAmount = unsoldItems.reduce(
      (sum, item) => sum + item.amount,
      0
    );
    const totalSaleAmount = soldItems.reduce(
      (sum, item) => sum + item.amount,
      0
    );
    const totalSoldItems = soldItems.length;

    // Update stats state
    setStats({
      totalUnsoldItems,
      totalUnsoldAmount,
      totalSaleAmount,
      totalSoldItems,
    });
  }, [selectedMonth, data]);

  return (
    <div>
      <label className="" htmlFor="months">
        Select a month:
      </label>
      <select
        id="months"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>

      <div id="stats">
        <h3>
          Statistics for{" "}
          {months.find((month) => month.value === selectedMonth)?.label}
        </h3>
        <p>Total number of unsold items: {stats.totalUnsoldItems}</p>
        <p>Total amount of unsold items: {stats.totalUnsoldAmount}</p>
        <p>Total sale amount: {stats.totalSaleAmount}</p>
        <p>Total number of sold items: {stats.totalSoldItems}</p>
      </div>
    </div>
  );
};

export default MonthlyStats;
