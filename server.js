/*********************************************************************************
* WEB322 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
of this
* assignment has been copied manually or electronically from any other source (including web sites)
or
* distributed to other students.
*
* Name: Dhruv Harshadbhai Patel Student ID: 161904214 Date: 31/10/2022
*
* Online (Cyclic) Link: ________________________________________________________
*
********************************************************************************/
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   cartItem.classList.remove('active');
}
let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
   cartItem.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
}
window.onscroll = () => {
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   cartItem.classList.remove('active');
}
