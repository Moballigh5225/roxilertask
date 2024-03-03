"use client";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const TableScreen = () => {
  const [apiData, setApiData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://roxiler-interviews.s3.amazonaws.com/product_transaction.json"
        );
        setApiData(response);
        setFilterData(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  console.log(apiData);

  const handleSearch = (e) => {
    const getSearch = e.target.value;
    if (getSearch.length > 0) {
      const searchData = apiData.filter((item) =>
        item.title.toLowerCase().includes(getSearch)
      );
      setApiData(searchData);
    } else {
      setApiData(filterData);
    }
    setQuery(getSearch);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "80%" }}>
        <div className="col-md-1">
          <input
            type="text"
            name="name"
            value={query}
            onChange={(e) => handleSearch(e)}
            className="search-control"
            placeholder="Search..."
          />
        </div>
        <Table striped border hover responsive className="table-sm">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>category</th>
              <th>date of sale</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.title.substring(0, 50)}</td>
                <td>{order.price.toFixed(2)}</td>
                <td>{order.category}</td>
                <td>{order.dateOfSale.substring(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="images">
        <label htmlFor="">images</label>
        {apiData.map((imageData) => (
          <img
            src={imageData.image}
            key={imageData.id}
            alt=""
            width={30}
            className="image-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default TableScreen;
