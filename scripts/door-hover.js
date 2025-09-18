// JavaScript to swap door images on hover

document.addEventListener('DOMContentLoaded', function() {
    // Select all door images
    const doors = document.querySelectorAll('.gallery img');

    doors.forEach(function(door) {
        // Store the original src
        const closedSrc = door.getAttribute('src');
    // Assume open door image is named like door_1_opened.png
    const openSrc = closedSrc.replace('.png', '_opened.png');

        // Preload open image
        const img = new Image();
        img.src = openSrc;

        door.addEventListener('mouseenter', function() {
            door.src = openSrc;
        });
        door.addEventListener('mouseleave', function() {
            door.src = closedSrc;
        });
    });
});
