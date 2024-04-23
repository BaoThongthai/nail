window.addEventListener('DOMContentLoaded', () => {
    const folderPath = 'zhiYaYapolish/';
    const productsRow = document.getElementById('zhiYaYapolish');
    const toggleBtn = document.getElementById('toggle_zhiYaYapolish');
    let showAllProducts = false;


    const jsonFilePath = 'zhiYaYapolish/zhiYaYapolish.json';

    // S? ki?n click cho n�t "See more" ho?c "Collapse"
    toggleBtn.addEventListener('click', () => {
        showAllProducts = !showAllProducts;
        fetchImages();
        toggleBtn.textContent = showAllProducts ? 'Collapse' : 'See more';
    });

    // L?y danh s�ch t�n c�c t?p ?nh t? t?p tin JSON v� hi?n th? ch�ng
    fetchImages();

    async function fetchImages() {
        try {
            const response = await fetch(jsonFilePath);
            const imageNames = await response.json();
            productsRow.innerHTML = ''; // X�a s?n ph?m hi?n t?i tr??c khi th�m m?i
            let limit = showAllProducts ? imageNames.length : 4;
            for (let i = 0; i < limit; i++) {

                const imageName = imageNames[i];
                // B? ph?n ?u�i c?a t�n s?n ph?m
                const imageNameWithoutExtension = imageName.split('.').slice(0, -1).join('.');
                const imageUrl = folderPath + imageName;
                const productHTML = `
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="card">
                            <img src="${imageUrl}" class="card-img-top" alt="${imageName}">
                            <div class="card-body">
                            <h5 class="card-title"> Product code : ${imageNameWithoutExtension}</h5>
                            </div>
                        </div>
                    </div>
                `;
                productsRow.innerHTML += productHTML;
            }
        } catch (error) {
            console.error('Loi:', error);
        }
    }
});
