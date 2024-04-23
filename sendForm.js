
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Ngăn chặn hành động mặc định của form

      // Lấy dữ liệu từ form
      var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };

      // Gửi dữ liệu qua API(loilinhlanh020@gmail.com)
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://6605116c2ca9478ea17f2d5d.mockapi.io/tenduongdanang/sendNail', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
        if (xhr.status === 200) {
          // Xử lý phản hồi từ API nếu cần
          console.log('Dữ liệu đã được gửi thành công');
        } else {
          alert('Send Inform success. We will contact soon !');
location.reload();
        }
      };
      xhr.send(JSON.stringify(formData));
    });
