const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// To get all information of a user to the landing page
app.get("/dashboard/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const dasboard_info = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
        res.json(dasboard_info.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})