const router = require("express").Router();
const fs = require("fs");

//  Index page
router.get("/", (req,res) => {
    res.render("index", {
        title: "Knife Party"
    });
});

// Category (Brands)
router.get("/admin", (req,res) => {
    res.render("admin", {
        title: "Admin"
    })
});

router.get("/products", (req, res) => {
    res.render("Category", {
        title: "All knives"
    });
});

// Spyderco
router.get("/spyderco", (req, res) => {
    res.render("Category", {
        title: "Spyderco"
    });
});

// Benchmade
router.get("/benchmade", (req, res) => {
    res.render("Category", {
        title: "Benchmade"
    });
});

// Microtech
router.get("/microtech", (req, res) => {
    res.render("Category", {
        title: "Microtech"
    });
});

// Zero Tolerance
router.get("/zero_tolerance", (req, res) => {
    res.render("Category", {
        title: "Zero Tolerance"
    });
});

module.exports = router;