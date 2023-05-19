const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
app.use(express.json());

app.get("/bfhl", (req, res) => {
    const response = {
      operation_code: 1,
    };
    res.status(200).json(response);
  });
  
  app.post("/bfhl", (req, res) => {
    try {
      const { data } = req.body;
      const numbers = [];
      const alphabets = [];
      data.forEach((char) => {
        if (/\d/.test(char)) {
          numbers.push(char);
        } else {
          alphabets.push(char);
        }
      });
      const response = {
        is_success: true,
        user_id: "shameek_dutta_27072002",
        email: "sd7710@srmist.edu.in",
        roll_number: "RA2011003010282",
        numbers: numbers,
        alphabets: alphabets,
      };
      res.status(200).json(response);
    } catch (error) {
      const response = {
        is_success: false,
        user_id: "shameek_dutta_27072002",
        error_msg: `${error}`,
      };
      res.status(400).json(response);
    }
  });

  app.listen(PORT, function() {
    console.log(`Listening on Port ${PORT}`);
  });