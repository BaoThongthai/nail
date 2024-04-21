window.addEventListener('DOMContentLoaded', () => {
    const folderPath = 'Phukienganmong/';
    const productsRow = document.getElementById('phukienganmong');
    const toggleBtn = document.getElementById('toggleBtn_phukienganmong');
    let showAllProducts = false;

    // Đường dẫn đến tập tin JSON chứa danh sách tên tệp ảnh
    const jsonFilePath = 'Phukienganmong/phukienganmong.json';

    // Sự kiện click cho nút "Xem thêm" hoặc "Thu gọn"
    toggleBtn.addEventListener('click', () => {
        showAllProducts = !showAllProducts;
        fetchImages();
        toggleBtn.textContent = showAllProducts ? 'Thu gọn' : 'Xem thêm';
    });

    // Lấy danh sách tên các tệp ảnh từ tập tin JSON và hiển thị chúng
    fetchImages();

    async function fetchImages() {
        try {
            const response = await fetch(jsonFilePath);
            const imageNames = await response.json();
            productsRow.innerHTML = ''; // Xóa sản phẩm hiện tại trước khi thêm mới
            let limit = showAllProducts ? imageNames.length : 4;
            for (let i = 0; i < limit; i++) {
                
                const imageName = imageNames[i];
                // Bỏ phần đuôi của tên sản phẩm
                const imageNameWithoutExtension = imageName.split('.').slice(0, -1).join('.');
                const imageUrl = folderPath + imageName;
                const productHTML = `
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="card">
                            <img src="${imageUrl}" class="card-img-top" alt="${imageName}">
                            <div class="card-body">
                            <h5 class="card-title"> Code : ${imageNameWithoutExtension}</h5>
                                <!-- Bạn có thể thêm mô tả cho mỗi ảnh nếu cần -->
                            </div>
                        </div>
                    </div>
                `;
                productsRow.innerHTML += productHTML;
            }
        } catch (error) {
            console.error('Lỗi:', error);
        }
    }
});
