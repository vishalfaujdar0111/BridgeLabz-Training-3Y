// Q6 — Fetch product data from Fake Store API and render cards in the page.
(() => {
  const API_URL = "https://fakestoreapi.com/products";

  window.assignmentRunners.q6 = async function () {
    const logs = ["Loading products from Fake Store API..."];
    const productContainer = document.getElementById("products");
    productContainer.replaceChildren();
    showOutput("q6", logs);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const products = await response.json();

      if (!Array.isArray(products)) {
        throw new Error("Unexpected product data format.");
      }

      products.forEach(product => {
        // Required console output: title, dollar price, and image URL.
        console.log(`Product: ${product.title}`);
        console.log(`Price: $${Number(product.price).toFixed(2)}`);
        console.log(`Image: ${product.image}`);

        const card = document.createElement("article");
        card.className = "product-card";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.title;
        image.loading = "lazy";

        const title = document.createElement("h3");
        title.textContent = product.title;

        const price = document.createElement("strong");
        price.textContent = `$${Number(product.price).toFixed(2)}`;

        card.append(image, title, price);
        productContainer.appendChild(card);
      });

      logs.push(`Successfully loaded ${products.length} products.`, "Product details are logged in the browser console and displayed as cards.");
    } catch (error) {
      console.error("Failed to load products:", error);
      logs.push("Failed to load products. Please try again.");
    }

    showOutput("q6", logs);
  };
})();
