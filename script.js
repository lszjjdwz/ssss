document.addEventListener('DOMContentLoaded', function() {
    const posterContainer = document.getElementById('poster-container');
    
    // 模拟从服务器获取商铺海报数据
    const posters = [
    { id: 1, imageUrl: 'https://via.placeholder.com/400x200', altText: '商铺海报1' },
    { id: 2, imageUrl: 'https://via.placeholder.com/400x200', altText: '商铺海报2' }
    ];
    
    posters.forEach(poster => {
    const imgElement = document.createElement('img');
    imgElement.src = poster.imageUrl;
    imgElement.alt = poster.altText;
    imgElement.style.margin = '10px';
    posterContainer.appendChild(imgElement);
    });
    });