document.addEventListener("DOMContentLoaded", function() {
    function SideBar(){
        const menuBtn = document.querySelector('.menu-btn');
        const closeBtn = document.querySelector('.close-btn');
        const subBtns = document.querySelectorAll('.sub-btn');

        menuBtn.addEventListener('click', function() {
            document.querySelector('.side-bar').classList.add('active');
            menuBtn.style.visibility = 'hidden';
        });

        closeBtn.addEventListener('click', function() {
            document.querySelector('.side-bar').classList.remove('active');
            menuBtn.style.visibility = 'visible';
        });

        subBtns.forEach(function(subBtn) {
            subBtn.addEventListener('click', function(event) {
                event.stopPropagation();
                const subMenu = this.nextElementSibling;
                subMenu.style.display = (subMenu.style.display === 'block') ? 'none' : 'block';

                const chevronIcon = this.querySelector('.bx-chevron-right');
                chevronIcon.classList.toggle('rotate');
            });
        });
    };
    SideBar();
    function Typing() {
        var typed = new Typed(".multiple_text", {
            strings:['junior Programming', 'Frontend Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }
    Typing(); // Call the Typing function to initialize Typed

    function initMap() {
        var location = {lat: your_latitude, lng: your_longitude};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

    // Replace 'your_latitude' and 'your_longitude' with actual coordinates
    var your_latitude = 40.7128; // Example latitude
    var your_longitude = -74.0060; // Example longitude

    // Call initMap function
    initMap();
});
