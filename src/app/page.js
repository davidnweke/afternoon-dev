"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";

function Page() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const yourName = "Mark";
  const age = 21;
  const city = "New York";

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  function handleClickIncrease() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleClickDecrease() {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  }

  return (
    <>
      <Header name={yourName} age={age} city={city} />
      <Header name="David" age="20" city="Los Angeles" />
      <Header name="Sarah" age="25" city="Chicago" />

      <button className="btn" onClick={handleClickDecrease}>
        Decrease
      </button>

      <h1 className="count-title">Count: {count}</h1>

      <button className="btn" onClick={handleClickIncrease}>
        Increase
      </button>

      <div className="main-container">
        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && products.length === 0 && (
          <p>No products found.</p>
        )}

        {products.map((item) => (
          <div className="container" key={item.id}>
            <img
              className="image"
              src={item.image}
              alt={item.title}
            />

            <div className="text-content">
              <h1 className="title">{item.title}</h1>
              <h2 className="price">${item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Page;