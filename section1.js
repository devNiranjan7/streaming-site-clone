const track = document.getElementById('carouselTrack');
const cards = track.querySelectorAll('.card');
let currentIndex = 0;

function getCardsPerView() {
  const containerWidth = document.querySelector('.carousel-viewport').offsetWidth;
  const card = cards[0];
  const cardStyle = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth + 
                    parseInt(cardStyle.marginLeft) + 
                    parseInt(cardStyle.marginRight);

  return Math.floor(containerWidth / cardWidth);
}

function moveCarousel(direction) {
  const card = cards[0];
  const cardStyle = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth + 
                    parseInt(cardStyle.marginLeft) + 
                    parseInt(cardStyle.marginRight);

  const visibleCards = getCardsPerView();
  const totalCards = cards.length;

  const maxShiftIndex = totalCards - visibleCards;
  currentIndex += direction * visibleCards;

  if (currentIndex > maxShiftIndex) {
    currentIndex = maxShiftIndex;
  }
  if (currentIndex < 0) {
    currentIndex = 0;
  }

  const moveAmount = currentIndex * cardWidth;
  track.style.transform = `translateX(-${moveAmount}px)`;
}

window.addEventListener('resize', () => {
  currentIndex = 0;
  track.style.transform = 'translateX(0px)';
});

window.moveCarousel = moveCarousel;