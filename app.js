document.addEventListener('DOMContentLoaded', function() {
    const player = new MediaElementPlayer('audio-player', {
        // Options
        features: ['playpause', 'progress', 'volume', 'sourcechooser'],
        alwaysShowControls: true,
        audioVolume: 'horizontal',
        audioWidth: 400,
        audioHeight: 120
    });
});
