window.addEventListener('DOMContentLoaded', () => {
    const folderPath = 'may_ho_sun/';
    const productsRow = document.getElementById('mayhosun');
    const toggleBtn = document.getElementById('toggleBtn_mayhosun');
    let showAllProducts = false;

    // Đường dẫn đến tập tin JSON chứa danh sách tên tệp ảnh
    const jsonFilePath = 'mayhosun.json';

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
                const imageUrl = folderPath + imageName;
                const productHTML = `
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="card">
                            <img src="${imageUrl}" class="card-img-top" alt="${imageName}">
                            <div class="card-body">
                              
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
