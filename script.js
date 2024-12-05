document.addEventListener('click', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    const isDropdownBtn = event.target.classList.contains('dropdown-btn');
    
    dropdowns.forEach((dropdown) => {
      if (!dropdown.parentElement.contains(event.target)) {
        dropdown.style.display = 'none'; // Hide dropdown
      }
    });
  
    if (isDropdownBtn) {
      const targetDropdown = event.target.nextElementSibling;
      targetDropdown.style.display = targetDropdown.style.display === 'block' ? 'none' : 'block';
    }
  });
  