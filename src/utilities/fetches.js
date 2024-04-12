

app.get("/api/carts/:cartId", async (req, res) => {
    res.send(rows);
});

app,.delete("/api/carts/:cartId"), async (erq, res) => {
    const SQL =`
    SELECT product_id, qty
    FROM cart_products
    WHERE cart_id = $1
    `;
//get a list of all products in a cart, including quantity
    const result = await client.query(CART_SQL, [req.params.cartId])
    const inventoryToRemove = [
        {
            producy_id: 1,
            quantity: 2
        }
    ];
for (let product of inventoryToRemove) {
    const UPDATE_SQL = `
    UDPATE products
    SET quantity = $1
    WHERE id = $2
    `;
    const inventoryResult = await client.query(UPDATE_SQL,
        [product.product_id, product.qty])
}
}