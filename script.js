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

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (faqItems.length > 0) {
    faqItems[0].classList.add('open');
  }

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      faqItems.forEach((faq) => {
        if (faq !== item) {
          faq.classList.remove('open');
        }
      });

      item.classList.toggle('open');
    });
  });
});

// country flag logic 
function updateFlag() {
  const selectElement = document.getElementById('country');
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const flagSrc = selectedOption.getAttribute('data-flag');
  document.getElementById('flag').src = flagSrc;
}