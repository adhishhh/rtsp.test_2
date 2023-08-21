document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('stream-video');
    const streamContainer = document.querySelector('.stream-container');

    videoElement.addEventListener('loadeddata', () => {
        videoElement.style.opacity = 1;
    });

    videoElement.addEventListener('click', () => {
        streamContainer.classList.toggle('zoomed');
    });
});