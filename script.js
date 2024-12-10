document.addEventListener('click', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    const isDropdownBtn = event.target.classList.contains('dropdown-btn');
    
    dropdowns.forEach((dropdown) => {
      if (!dropdown.parentElement.contains(event.target)) {
        dropdown.style.display = 'none'; 
      }
    });
  
    if (isDropdownBtn) {
      const targetDropdown = event.target.nextElementSibling;
      targetDropdown.style.display = targetDropdown.style.display === 'block' ? 'none' : 'block';
    }
  });
  
  const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = '0'; 
    setTimeout(() => {
      slide.style.display = i === index ? 'flex' : 'none';
      if (i === index) slide.style.opacity = '1'; 
    }, 200); 
  });
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
  showSlide(currentSlide);
});

// Initialize
showSlide(currentSlide);

function toggleFAQ(element) {
  const parent = element.parentElement;
  parent.classList.toggle('open');
}
