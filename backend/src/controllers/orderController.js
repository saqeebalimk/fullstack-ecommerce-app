export const placeOrder = (req, res) => {
    const { firstName, lastName, address, cart } = req.body;
  
    if (!firstName || !lastName || !address) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    // Simulate order placement
    console.log("Order placed:", { firstName, lastName, address, cart });
  
    res.json({ message: "Order placed successfully!" });
  };
  