async function fetchPhotos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const photos = await response.json();
        groupPhotosByAlbum(photos);
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
}

function groupPhotosByAlbum(photos) {
    const albums = {};

    // Группируем фото по albumId
    photos.forEach(photo => {
        const { albumId, thumbnailUrl, url, title } = photo;

        if (!albums[albumId]) {
            albums[albumId] = [];
        }

        albums[albumId].push({ thumbnailUrl, url, title });
    });

    renderAlbums(albums);
}

function renderAlbums(albums) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    Object.keys(albums).forEach(albumId => {
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');
        const albumTitle = document.createElement('h3');
        albumTitle.innerText = `Album ${albumId}`;
        albumDiv.appendChild(albumTitle);

        albums[albumId].forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.thumbnailUrl;
            img.classList.add('thumbnail');
            img.alt = photo.title;
            img.onerror = () => {
                img.src = 'https://via.placeholder.com/100'; // Установка дефолтного изображения
            };

            img.addEventListener('click', () => openModal(photo.url, photo.title));

            albumDiv.appendChild(img);
        });

        gallery.appendChild(albumDiv);
    });
}

function openModal(imageSrc, title) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');

    modalImage.src = imageSrc;
    caption.innerText = title;
    modal.style.display = 'block';
}

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Запуск функции
fetchPhotos();