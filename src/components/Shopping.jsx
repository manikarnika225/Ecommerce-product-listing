import React, { useEffect, useState } from 'react';
import "./shopping.css";

const Shopping = () => {
    const [apiData, setApiData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [maxPrice, setMaxPrice] = useState(1000);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) throw new Error("Failed to fetch data");
                return response.json();
            })
            .then(json => {
                setApiData(json);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // Get categories
    const categories = ["All", ...new Set(apiData.map(item => item.category))];

    // Filtered products
    const filteredProducts = apiData
        .filter(product =>
            (selectedCategory === "All" || product.category === selectedCategory) &&
            (searchInput === "" || product.title.toLowerCase().includes(searchInput.toLowerCase())) &&
            product.price <= maxPrice
        );

    if (loading) return <p className="loading">Loading products...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="shopping-container">
            <h1>MythCart</h1>

            {/* Filters */}
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />

                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    {categories.map((cat, i) => (
                        <option key={i} value={cat}>{cat}</option>
                    ))}
                </select>

                <div className="price-filter">
                    <label>Max Price: ${maxPrice}</label>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                </div>
            </div>

            {/* Products */}
            <div className="product-wrapper">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((data) => (
                        <div key={data.id} className="product-card">
                            <div className="image-wrapper">
                                <img src={data.image} alt={data.title} />
                            </div>
                            <h3 className="product-name">{data.title}</h3>
                            <div className="cat-price-wrapper">
                                <p className="product-category">{data.category}</p>
                                <p className="product-price">${data.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default Shopping;
