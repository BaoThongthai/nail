window.addEventListener('DOMContentLoaded', () => {
    const folderPath = 'vochai/';
    const productsRow = document.getElementById('vochai');
    const toggleBtn = document.getElementById('toggleBtn_vochai');
    let showAllProducts = false;

    // ???ng d?n ??n t?p tin JSON ch?a danh sách tên t?p ?nh
    const jsonFilePath = 'vochai/vochai.json';

    // S? ki?n click cho nút "See more" ho?c "Collapse"
    toggleBtn.addEventListener('click', () => {
        showAllProducts = !showAllProducts;
        fetchImages();
        toggleBtn.textContent = showAllProducts ? 'Collapse' : 'See more';
    });

    // L?y danh sách tên các t?p ?nh t? t?p tin JSON và hi?n th? chúng
    fetchImages();

    async function fetchImages() {
        try {
            const response = await fetch(jsonFilePath);
            const imageNames = await response.json();
            productsRow.innerHTML = ''; // Xóa s?n ph?m hi?n t?i tr??c khi thêm m?i
            let limit = showAllProducts ? imageNames.length : 4;
            for (let i = 0; i < limit; i++) {

                const imageName = imageNames[i];
                // B? ph?n ?uôi c?a tên s?n ph?m
                const imageNameWithoutExtension = imageName.split('.').slice(0, -1).join('.');
                const imageUrl = folderPath + imageName;
                const productHTML = `
                    <div class="col-md-4 col-sm-6 mb-4">
                        <div class="card">
                            <img src="${imageUrl}" class="card-img-top" alt="${imageName}">
                            <div class="card-body">
                            <h5 class="card-title"> Product code : ${imageNameWithoutExtension}</h5>
                                <!-- B?n có th? thêm mô t? cho m?i ?nh n?u c?n -->
                            </div>
                        </div>
                    </div>
                `;
                productsRow.innerHTML += productHTML;
            }
        } catch (error) {
            console.error('L?i:', error);
        }
    }
});
