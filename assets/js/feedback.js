document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".star");
    let selectedIndex = -1;
    const sound = new Audio("assets/audio/Fx Star-Sound Effect (HD).mp3"); 

    stars.forEach((star, index) => {
        star.addEventListener("mouseover", () => {
            if (!sound.paused) {
                sound.currentTime = 0;
            }
            sound.play();  
            resetStars();
            illuminateStars(index);
        });

        star.addEventListener("click", () => {
            selectedIndex = index; 
            resetStars();
            illuminateStars(selectedIndex, true);
        });

        star.addEventListener("mouseout", () => {
            resetStars();
            if (selectedIndex >= 0) {
                illuminateStars(selectedIndex, true); 
            }
            if (isSoundPlaying) {
                sound.pause();
                sound.currentTime = 0;
                isSoundPlaying = false;
            }
        });
    });

    function illuminateStars(index, select = false) {
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add(select ? "selected" : "active");
        }
    }

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove("active", "selected");
        });
    }
});
