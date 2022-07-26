import express from "express";

const router = express.Router();

router.get("/books", (req,res) => {
    //db *findAll,
    //res.status(200).send("Book List");
    //res.status(200).send({ name: "Padam" }); 
    res.status(200).send(true); 
});

router.get("/books/add", (req,res) => {
    //
    //graphql
    //authentication

    //res.status(200).send("book added");
    res.status(200).json({ added: "true" });
});

// router.get("/delete", (req,res) => {
//     const {id,author,location} = req.query;
//     console.log(id,author,location);
//     res.status(200).json({delete:true});
// })

router.get("/delete/:id/settings/:author", (req,res) => {
    console.log(req.params);
    res.status(200).json({delete:true});
})

export default router;

