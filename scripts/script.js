// DROPDOWN CODE
  // Select necessary elements
  const dropbtn = document.querySelector('.dropbtn');
  const dropdown = document.querySelector('.dropdown');

  // Toggle dropdown visibility when the button is clicked
  dropbtn.addEventListener('click', () => {
    dropdown.classList.toggle('active');
    document.getElementById("dropbutton").innerHTML = "Elevators ▼";
  });

  // Close the dropdown if clicking outside of it
// Create a MutationObserver to detect when the 'active' class is removed
const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      if (!dropdown.classList.contains('active')) {
        document.getElementById("dropbutton").innerHTML = "Elevators ►";
      }
    }
  });
});

// Observe the dropdown for class attribute changes
observer.observe(dropdown, { attributes: true });

// DROPDOWN CODE END
