# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d).

## Table of contents

- [Frontend Mentor - Product list with cart solution](#frontend-mentor---product-list-with-cart-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [AI Collaboration](#ai-collaboration)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/public/assets/screenshots/dessert-app-desktop.png)
![](/public/assets/screenshots/dessert-selected.png)
![](/public/assets/screenshots/dessert-modal-desktop.png)
![](/public/assets/screenshots/dessert-app-mobile.png)
![](/public/assets/screenshots/desset-selected-mobile.png)
![](/public/assets/screenshots/dessert-modal-mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [[Add live site URL here](https://dessert-app-ashen.vercel.app/)](https://dessert-app-ashen.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [clsx](https://github.com/lukeed/clsx)

### What I learned

The biggest challenge was managing shared state between `DessertCard` and `Cart`. 
I learned that when two sibling components need the same data, 
the state must live in their closest common parent — in this case `App`.

Instead of storing quantity locally in each `DessertCard`, 
I lifted it up to `App` using a `CartItemsType[]` array, 
and passed down `onIncrementQuantity` and `onDecrementQuantity` as props.

This kept each component's responsibility clear:
- `App` owns the state and the logic
- `DessertCard` displays and triggers actions
- `Cart` reads and displays the cart data

### Continued development

- Improve accessibility (keyboard navigation, ARIA attributes)
- Add animations on the modal and cart updates
- Explore global state management with Zustand or Context API for larger scale projects

### AI Collaboration

I used Claude (by Anthropic) during this project for guidance on specific problems.

- **How I used it**: I wrote all the code myself. I used Claude to help me think through 
state management logic, debug TypeScript errors, and fix calculation bugs in the cart.
- **What worked well**: Talking through the architecture before writing code 
helped me avoid bad patterns like passing `setCartItems` directly as a prop, 
or storing quantity inside the JSON data.
- **What didn't**: Sometimes I had to push back and re-explain my exact problem 
to get the most relevant answer.

## Author

- Frontend Mentor - [@NitiemaAllassane](https://www.frontendmentor.io/profile/NitiemaAllassane)
- My Blog (In french) - [Nitiema Allassane](https://nitiema-allassane.vercel.app/)