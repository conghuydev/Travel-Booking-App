const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

// Kích hoạt CORS cho tất cả các yêu cầu
app.use(cors({
  origin: 'http://localhost:8081',
}));

// Middleware để xử lý JSON
app.use(express.json());

// Kết nối tới MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Nếu bạn có mật khẩu, nhập vào đây
  database: 'reactmysql', // Tên cơ sở dữ liệu
});

// Kiểm tra kết nối tới MySQL
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});
const queryDatabase = (sql, params, res, successCallback) => {
  connection.query(sql, params, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    successCallback(results);
  });
};
// API để lấy danh sách số điện thoại trong bảng mobile// API để lấy danh sách số điện thoại trong bảng mobile
app.get('/api/mobile', (req, res) => {
  const sql = "SELECT * FROM mobile";  // Truy vấn để lấy tất cả các số điện thoại trong bảng mobile
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json({ users: results });  // Trả về dữ liệu lấy được
  });
});


// API để xử lý đăng nhập bằng số điện thoại
app.post('/api/login', (req, res) => {
  const { mobile } = req.body; // Lấy số điện thoại từ yêu cầu của client
  const query = "SELECT * FROM mobile WHERE soDienThoai = ?"; 
  connection.query(query, [mobile], (err, results) => {
    if (err) {
      console.error('Error logging in:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (results.length > 0) {
      res.json({ message: 'Login successful' }); // Đăng nhập thành công
    } else {
      res.status(400).json({ message: 'Incorrect mobile' }); // Số điện thoại không đúng
    }
  });
});
app.post("/api/register", (req, res) => {
  const { mobile } = req.body;
  const sql = "INSERT INTO mobile (soDienThoai) VALUES (?)";
  queryDatabase(sql, [mobile], res, (results) => {
    res.status(201).json({ message: "Mobile resgister susscess!" });
  });
});

// Khởi động server
app.listen(4000, () => {
  console.log('App listening on port 4000');
});
