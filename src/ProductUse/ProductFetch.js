const ProductFetch = async () => {
  try {
    const res = await fetch("/data/products.json"); // Ensure this path is correct

    const result = await res.json(); // Await the JSON parsing
    console.log(result);
    return result;
  } catch (error) {
    console.error("Data fetching error:", error);
  }
};

export default ProductFetch;
