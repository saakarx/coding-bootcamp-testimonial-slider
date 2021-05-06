'use strict';

let counter = 0;

// Selectors
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.user-name');
const userPosition = document.querySelector('.user-position');
const testimonialText = document.querySelector('.testimonial-text');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const testimonialContainer = document.querySelector('.testimonial-container');

const data = [
  {
    username: 'Tanya Sinclair',
    userposition: 'UX Engineer',
    text: ` “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about future. ”`,
    imgSrc: './assets/images/image-tanya.jpg',
  },
  {
    username: 'John Tarkpor',
    userposition: 'Junior Front-end Developer',
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    imgSrc: './assets/images/image-john.jpg',
  },
];

// Functions
const toggleActive = type => {
  if (type === 'add') {
    userImage.classList.add('active');
    testimonialContainer.classList.add('active');
  }
  if (type === 'remove') {
    userImage.classList.remove('active');
    testimonialContainer.classList.remove('active');
  }
};

const displayData = userdata => {
  const { username, userposition, text, imgSrc } = userdata;

  userImage.src = imgSrc;
  userName.textContent = username;
  userPosition.textContent = userposition;
  testimonialText.textContent = text;
};

const slideOut = count => {
  toggleActive('remove');
  setTimeout(() => {
    displayData(data[count]);
    setTimeout(() => toggleActive('add'), 300);
  }, 400);
};

const prevSlide = () => {
  counter <= 0 ? (counter = data.length - 1) : counter--;

  slideOut(counter);
};

const nextSlide = () => {
  counter >= data.length - 1 ? (counter = 0) : counter++;

  slideOut(counter);
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  displayData(data[counter]);
  toggleActive('add');
});

prevBtn.addEventListener('click', prevSlide);

nextBtn.addEventListener('click', nextSlide);
