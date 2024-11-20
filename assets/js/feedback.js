document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    let selectedIndex = -1;

    stars.forEach((star, index) => {
        star.addEventListener('mouseover', () => {   //illuminazione al passaggio
            resetStars();
            illuminateStars(index);
        });
   
        star.addEventListener('click', () => {   //rimane il colore
            selectedIndex = index; 
            resetStars();
            illuminateStars(selectedIndex, true);
        });

        star.addEventListener('mouseout', () => {   //cursore fuori spegne le stelle
            resetStars();
            if (selectedIndex >= 0) {
                illuminateStars(selectedIndex, true); 
            }
        });
    });

    function illuminateStars(index, select = false) {
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add(select ? 'selected' : 'active');
        }
    }

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('active', 'selected');
        });
    }
});
