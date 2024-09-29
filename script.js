// Auto play the audio when the page loads (optional)
window.onload = function() {
    const audio = document.querySelector("audio");
    if (audio) {
        audio.play().catch(error => console.log('Auto play not allowed by browser', error));
    }
};

// Log a message to indicate the page loaded successfully
console.log("Page loaded successfully!");