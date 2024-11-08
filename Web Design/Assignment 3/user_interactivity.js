// 1. Use JavaScript to change the HTML contents of one or more elements
const heroTitle = document.querySelector('.hero .container h1');
heroTitle.textContent = 'Welcome to Kalico Supermarket';

// 2. Use JavaScript to change the style of one or more elements in the website. Thats the navigation links.
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
  link.style.color = '#4CAF50';
  link.style.fontWeight = 'bold';
});

// 3. Use JavaScript to update the user interface. Thats in the Tips Section
const communitySection = document.querySelector('#tips');
communitySection.style.backgroundColor = '#D3D3D3';
communitySection.style.padding = '100px 0';

// 4. Use JavaScript to style a group of elements together. Thats the elements in the comminity section
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
  item.style.backgroundColor = '#DEDEDE';
  item.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
  item.style.transition = 'transform 0.3s ease';

  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateY(-10px)';
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translateY(0)';
  });
});

// 5. Use JavaScript to implement a custom relevant feature. The Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Please fill in all the required fields.');
    return;
  }

  alert('Thank you for your message. We will get back to you soon!');

  contactForm.reset();
});