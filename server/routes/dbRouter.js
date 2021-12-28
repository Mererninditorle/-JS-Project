const router = require("express").Router();
const db = require("./db.js")
module.exports = router;

router.post("/add", (req,res) => {
    console.log(res.body);
    const client = db();
    client.connect(err => {
        if (err) {
            console.log("error")
        } else {
            const table = client.db("knives");
            const col = table.collection("products");
            col.insertOne(req.body, err => {
                if (err) {
                    console.log(err);
                    client.close();
                } else {
                    res.send({msg: "Succesfully added"}); 
                };
                client.close();
            });
            
        };
    });
});


router.get("/products", (req,res) => {
    const client = db();
    client.connect(err => {
        if (err) {
            console.log("error")
        } else {
            const table = client.db("knives");
            const col = table.collection("products");
            col.insertOne(req.body, err => {
                if (err) {
                    res.send({"msg": "Connection Error"});
                } else {
                    col.find({"type" : {$eq: "knife"}}).toArray((err, data) => {
                        if (err) {
                            console.log(err);
                            client.close();
                        } else {
                            console.log(data);
                            res.send({"data": data});
                            client.close();
                        };
                    });
                };
            });
        };
    });
});

// Spyderco
// router.get("/spyderco", (req,res) => {
//     const client = db();
//     client.connect(err => {
//         if (err) {
//             console.log("error")
//         } else {
//             const table = client.db("knives");
//             const col = table.collection("products");
//             col.insertOne(req.body, err => {
//                 if (err) {
//                     res.send({"msg": "Connection Error"});
//                 } else {
//                     col.find({"brand": {$eq: "Spyderco"}}).toArray((err, data) => {
//                         if (err) {
//                             console.log(err);
//                             client.close();
//                         } else {
//                             console.log(data);
//                             res.send({"data": data});
//                             client.close();
//                         };
//                     });
//                 };
//             });
//         };
//     });
// });

// Benchmade
// router.get("/benchmade", (req,res) => {
//     const client = db();
//     client.connect(err => {
//         if (err) {
//             console.log("error")
//         } else {
//             const table = client.db("knives");
//             const col = table.collection("products");
//             col.insertOne(req.body, err => {
//                 if (err) {
//                     res.send({"msg": "Connection Error"});
//                 } else {
//                     col.find({"brand": {$eq:"Benchmade"}}).toArray((err, data) => {
//                         if (err) {
//                             console.log(err);
//                             client.close();
//                         } else {
//                             console.log(data);
//                             res.send({"data": data});
//                             client.close();
//                         };
//                     });
//                 };
//             });
//         };
//     });
// });

// Microtech
// router.get("/microtech", (req,res) => {
//     const client = db();
//     client.connect(err => {
//         if (err) {
//             console.log("error")
//         } else {
//             const table = client.db("knives");
//             const col = table.collection("products");
//             col.insertOne(req.body, err => {
//                 if (err) {
//                     res.send({"msg": "Connection Error"});
//                 } else {
//                     col.find({"brand": {$eq:"Microtech"}}).toArray((err, data) => {
//                         if (err) {
//                             console.log(err);
//                             client.close();
//                         } else {
//                             console.log(data);
//                             res.send({"data": data});
//                             client.close();
//                         };
//                     });
//                 };
//             });
//         };
//     });
// });

// Zero Tolerance
// router.get("/zero_tolerance", (req,res) => {
//     const client = db();
//     client.connect(err => {
//         if (err) {
//             console.log("error")
//         } else {
//             const table = client.db("knives");
//             const col = table.collection("products");
//             col.insertOne(req.body, err => {
//                 if (err) {
//                     res.send({"msg": "Connection Error"});
//                 } else {
//                     col.find({"brand": {$eq:"Zero Tolerance"}}).toArray((err, data) => {
//                         if (err) {
//                             console.log(err);
//                             client.close();
//                         } else {
//                             console.log(data);
//                             res.send({"data": data});
//                             client.close();
//                         };
//                     });
//                 };
//             });
//         };
//     });
// });