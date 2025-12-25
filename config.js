// config.js

const API_CONFIG = {
  // 正式環境的 API URL
  apiUrl: "https://script.google.com/macros/s/AKfycbwTyhpVyGV_LGYbYDB-1AdHliMcq-HW1gS-DCWS55Zz8D-GP-MZ0ppRZV6Nyxq8j5BZDg/exec",
  
  // 新增回呼網址
  redirectUrl: "https://eric693.github.io/Allianz_check_manager/"
  // 你也可以在這裡加入其他設定，例如：
  // timeout: 5000,
  // version: 'v4.2.7'
};
// 👇 新增：為了兼容性，同時定義全域變數 apiUrl
const apiUrl = API_CONFIG.apiUrl;


