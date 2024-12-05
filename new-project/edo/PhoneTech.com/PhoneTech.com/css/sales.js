// scripts.js

let totalProfit = 0;

function calculateSales(event) {
    event.preventDefault();

    const item = document.getElementById('item').value;
    const price = parseFloat(document.getElementById('price').value);
    const stock = parseInt(document.getElementById('stock').value);
    const sold = parseInt(document.getElementById('sold').value);

    // Calculate total stock value and sales amount
    const totalStockValue = price * stock;
    const totalSales = price * sold;

    // Calculate profit (assuming the cost price is half of the selling price for simplicity)
    const costPrice = price / 2;
    const profit = totalSales - (costPrice * sold);

    // Update total profit
    totalProfit += profit;

    // Add report to the table
    const tableBody = document.getElementById('salesReport').getElementsByTagName('tbody')[0];
    const row = tableBody.insertRow();

    row.innerHTML = `
        <td>${item}</td>
        <td>$${price.toFixed(2)}</td>
        <td>${stock}</td>
        <td>${sold}</td>
        <td>$${totalStockValue.toFixed(2)}</td>
        <td>$${totalSales.toFixed(2)}</td>
        <td>$${profit.toFixed(2)}</td>
    `;

    // Update total profit display
    document.getElementById('profitAmount').textContent = totalProfit.toFixed(2);

    // Clear the form fields
    document.getElementById('salesForm').reset();
}
