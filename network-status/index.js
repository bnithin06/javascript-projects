console.log('Network status script loaded');
const statusElement = document.getElementById('status');
console.log(statusElement);

window.addEventListener('online', () => {
    statusElement.innerHTML='🌍 You are online';
});

window.addEventListener('offline', () => {
    statusElement.innerHTML='🌐 You are offline';
});


// navigator.onLine ? statusElement.innerHTML='🌍 You are online' : statusElement.innerHTML='🌐 You are offline';