const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const moment = require('moment');

const app=express()
app.use(cors({origin: true, credentials: true}));
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'heartbud'
})

app.get('/',(re,res)=>{
    return res.json("From backend");
})

app.get('/patients', (req,res)=>{
    const sql="SELECT * FROM patient";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.get('/users', (req,res)=>{
  const sql="SELECT * FROM heartbud_users";
  db.query(sql,(err,data)=>{
      if(err) return res.json(err);
      return res.json(data);
  })
})

app.get('/userdiet', (req, res) => {
  const { email } = req.query;

  const sql = "SELECT * FROM diet WHERE patient_email LIKE ? ";
  db.query(sql, [email], (err, data) => {
    if (err) return res.json(err);
    console.log(data[0]);
    return res.json(data);
  });
});

app.get('/myprescription',(req,res)=>{
const {email}=req.query;
const sql= "SELECT * FROM prescription WHERE patient LIKE ? ORDER BY prescription.medicine DESC";

db.query(sql,[email],(err,data)=>{
  if (err) return res.json(err);
    console.log(data[0]);
    return res.json(data);
});
});

app.get('/user', (req,res)=>{
  const email = req.query.email;

    const sql="SELECT firstname FROM heartbud_users WHERE email LIKE ? ";
    db.query(sql, [email],(err,data)=>{
        if(err) return res.json(err);
        console.log(data[0].firstname)
        return res.json(data);
    })
})


app.post('/register', (req, res) => {
    const { name, email, password, dateOfBirth } = req.body;
  
    // Convert the date string to a Date object using moment.js
    const dateOfBirthFormatted = moment(dateOfBirth, 'DD/MM/YYYY').toDate();
  
    // Insert the registration data into the database, including the formatted date
    db.query('INSERT INTO user (name, email, password, date_of_birth) VALUES (?, ?, ?, ?)', [name, email, password, dateOfBirthFormatted], (error, results) => {
      if (error) {
        console.error('Error inserting data:', error);
        return res.status(500).json({ error: 'Failed to register' });
      }
  
      // Send a success response
      res.json({ message: 'Registration successful' });
    });
  });


  // Define the login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
   
    db.query(
      'SELECT * FROM heartbud_users WHERE email = ? AND password = ?',[email, password],
      (error, results) => {
        console.log(results)
        if (error) {
          console.error('Error querying the database:', error);
          res.status(500).json({ success: false, message: 'Server error' });
          return;
        }
  
        if (results.length === 0) {
         
          res.status(401).json({ success: false, message: 'Invalid email or password' });
          return;
        }
        const userRole= results[0].role
        res.json({ success: true, message: 'Login successful', role: userRole });
      }
    );
   });

   app.post('/loginP', (req, res) => {
    const { email, password } = req.body;
    //console.log(req.body)

    db.query(
      `SELECT * FROM doctor WHERE doctor_email = ? AND doctor_password = ?`,[email, password],
      (error, results) => {
        console.log(results)
        if (error) {
          console.error('Error querying the database:', error);
          res.status(500).json({ success: false, message: 'Server error' });
          return;
        }
  
        if (results.length === 0) {
         
          res.status(401).json({ success: false, message: 'Invalid email or password' });
          return;
        }
        const userRole= results[0]
        res.json({ success: true, message: 'Login successful' });
      }
    );
   });   
  
app.listen(8080,()=>{
    console.log("Server listening on port 8080")
})