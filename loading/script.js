document.addEventListener('DOMContentLoaded', (event) => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingVideo = document.getElementById('loading-video');
    const mainContent = document.getElementById('main-content');

    // 1. Ensure the video and all page assets are loaded
    window.addEventListener('load', () => {
        // 2. Play the warp animation (defined in CSS)
        loadingVideo.style.animationPlayState = 'running';

        // 3. Wait for the warp animation to finish, then fade out the screen
        loadingVideo.addEventListener('animationend', () => {
            // Un-hide the main content before fade-out begins
            mainContent.classList.remove('hidden');

            // Start the fade-out of the loading screen
            loadingScreen.classList.add('fade-out');

            // 4. Clean up after the fade-out
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 1000); // Should match the CSS transition time for opacity
        });
    });

    // NOTE: For the warp-in animation to work, you may need to dynamically update the
    // feDisplacementMap 'scale' and feTurbulence 'baseFrequency' attributes
    // using JavaScript/GSAP for a smoother, more complex effect than pure CSS keyframes.
    // The CSS example above is a simplified approach.
});