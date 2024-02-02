const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "sql10.freesqldatabase.com",
  user: 'sql10681085',
  password: "Jlpe1dXUWE",
  database: "sql10681085"
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  jwt.verify(token.split(' ')[1], 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    req.user = user;
    next();
  });
};
app.use(express.json());

app.post('/signup', (req, resp) => {
    const { email, name, Age, Contact, password } = req.body;
    const sql = "INSERT INTO Signup (email, name, Age, Contact, password) VALUES (?, ?, ?, ?, ?)";
    const values = [email, name, Age, Contact, password];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        console.error('Error during signup:', err);
        return resp.status(500).json({ error: "Error occurred during signup" });
      }
      console.log('Signup successful');
      return resp.json({ success: true, message: "Signup successful", data });
    });
  });

app.post('/login', (req, resp) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM Signup WHERE email=? AND password=?";
  const values = [email, password];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error('Error during login:', err);
      return resp.json('Error');
    }
    if (data.length > 0) {
      console.log('Login successful');
      return resp.json("Success");
    } else {
      console.log('Login failed');
      return resp.json("Failed");
    }
  });
});


app.get('/user', (req, res) => {
  const { email, password } = req.query;
  const sql = 'SELECT name, Age, Contact FROM Signup WHERE email = ? AND password = ?';

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Error fetching user details:', err);
      res.status(500).json({ error: 'Error fetching user details' });
    } else {
      if (result.length > 0) {
        const userDetails = {
          name: result[0].name,
          Age: result[0].Age,
          Contact: result[0].Contact,
        };
        res.json(userDetails);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    }
  });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
