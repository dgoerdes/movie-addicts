
const registerServiceWorker = () => {
    if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return;

    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                // eslint-disable-next-line no-console
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                // eslint-disable-next-line no-console
                console.log('SW registration failed: ', registrationError);
            });
    });
};

export default registerServiceWorker;
