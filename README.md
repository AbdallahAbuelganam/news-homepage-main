
# Frontend Mentor - News Homepage

This is my solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl).

## Table of Contents
- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)

## Overview

Users should be able to:
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


## Screenshots

**Desktop:**
![Desktop Screenshot](screenshot/desktop%20Screenshot.jpeg)

**Mobile:**
![Mobile Screenshot](screenshot/mobile%20Screenshot.jpeg)


## Links

- Live Site URL: [https://abdallahabuelganam.github.io/news-homepage-main/](https://abdallahabuelganam.github.io/news-homepage-main/)
- Solution URL: (to be added later)


## My Process

- Started with semantic HTML structure (see index.html)
- Added custom fonts using CSS (see CSS/fonts.css)
- Styled navigation links and hover effects in CSS/style.css
- Used JavaScript for responsive images and menu toggling (see main.js)
- Mobile-specific styles in CSS/mobile.css

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- JavaScript (for menu and responsive image)

## What I Learned

This project helped me understand how to perfectly use CSS Grid for complex layouts. I learned how to:

- Define grid areas for different sections (hero, news, blogs)
- Use `grid-template-columns` and `grid-template-rows` for responsive design
- Combine Grid and Flexbox for different layout needs

Example:

```css
main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 50px;
}
```


## Continued Development

Nothing for now.

## Useful Resources

Nothing for now.

## Author

- Name: Abdallah AbuElganam
- Frontend Mentor: [@AbdallahAbuelganam](https://www.frontendmentor.io/profile/AbdallahAbuelganam)
- Instagram: [@abdallah_abuelghanam](https://www.instagram.com/abdallah_abuelghanam)

## Acknowledgments

Nothing for now.
