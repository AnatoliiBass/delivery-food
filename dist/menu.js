/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\n\n\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBaUM7QUFDQTs7QUFFakMseURBQUk7QUFDSiwwREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5Zm9vZC8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGggZnJvbSAnLi9tb2R1bGVzL2F1dGgnXG5pbXBvcnQgbWVudSBmcm9tICcuL21vZHVsZXMvbWVudSdcblxuYXV0aCgpXG5tZW51KCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\n   const buttonAuth = document.querySelector('.button-auth')\n   const buttonOut = document.querySelector('.button-out')\n   const buttonLogin = document.querySelector('.button-login')\n   const buttonClose = document.querySelector('.close-auth')\n   const userName = document.querySelector('.user-name')\n   const modalAuth = document.querySelector('.modal-auth')\n   const logInForm = document.getElementById('logInForm')\n   const inputLogin = document.getElementById('login')\n   const inputPassword = document.getElementById('password')\n\n   const login = (user) => {\n      buttonAuth.style.display = 'none'\n      buttonOut.style.display = 'flex'\n      userName.style.display = 'flex'\n      userName.textContent = user.login\n      modalAuth.style.display = 'none'\n   }\n   const logout = () => {\n      buttonAuth.style.display = 'flex'\n      buttonOut.style.display = 'none'\n      userName.style.display = 'none'\n      userName.textContent = ''\n      localStorage.removeItem('user')\n   }\n\n   buttonAuth.addEventListener('click', () => {\n      modalAuth.style.display = 'flex'\n      inputLogin.addEventListener('focus', () => {\n         inputLogin.value = ''\n         inputLogin.style.color = 'inherit'\n         inputLogin.style.border = '1px solid grey'\n      })\n   })\n\n   buttonClose.addEventListener('click', () => {\n      modalAuth.style.display = 'none'\n   })\n\n   buttonOut.addEventListener('click', logout)\n\n   logInForm.addEventListener('submit', (event) => {\n      event.preventDefault()\n      if (inputLogin.value) {\n         const user = {\n            login: inputLogin.value,\n            password: inputPassword.value\n         }\n         localStorage.setItem('user', JSON.stringify(user))\n         login(user)\n      } else {\n         inputLogin.style.color = 'red'\n         inputLogin.style.border = '1px solid red'\n         inputLogin.value = 'Ведите логин'\n      }\n   })\n\n   if (localStorage.getItem('user')) {\n      login(JSON.parse(localStorage.getItem('user')))\n   }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeWZvb2QvLi9zcmMvbW9kdWxlcy9hdXRoLmpzP2U3YjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXV0aCA9ICgpID0+IHtcbiAgIGNvbnN0IGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWF1dGgnKVxuICAgY29uc3QgYnV0dG9uT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1vdXQnKVxuICAgY29uc3QgYnV0dG9uTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWxvZ2luJylcbiAgIGNvbnN0IGJ1dHRvbkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWF1dGgnKVxuICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJylcbiAgIGNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdXRoJylcbiAgIGNvbnN0IGxvZ0luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dJbkZvcm0nKVxuICAgY29uc3QgaW5wdXRMb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpXG4gICBjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJylcblxuICAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xuICAgICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSB1c2VyLmxvZ2luXG4gICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgfVxuICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxuICAgfVxuXG4gICBidXR0b25BdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgIGlucHV0TG9naW4uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICAgICBpbnB1dExvZ2luLnZhbHVlID0gJydcbiAgICAgICAgIGlucHV0TG9naW4uc3R5bGUuY29sb3IgPSAnaW5oZXJpdCdcbiAgICAgICAgIGlucHV0TG9naW4uc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBncmV5J1xuICAgICAgfSlcbiAgIH0pXG5cbiAgIGJ1dHRvbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgIH0pXG5cbiAgIGJ1dHRvbk91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ291dClcblxuICAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGlucHV0TG9naW4udmFsdWUpIHtcbiAgICAgICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAgICAgICBsb2dpbjogaW5wdXRMb2dpbi52YWx1ZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBpbnB1dFBhc3N3b3JkLnZhbHVlXG4gICAgICAgICB9XG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICAgICAgICAgbG9naW4odXNlcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICBpbnB1dExvZ2luLnN0eWxlLmNvbG9yID0gJ3JlZCdcbiAgICAgICAgIGlucHV0TG9naW4uc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnXG4gICAgICAgICBpbnB1dExvZ2luLnZhbHVlID0gJ9CS0LXQtNC40YLQtSDQu9C+0LPQuNC9J1xuICAgICAgfVxuICAgfSlcblxuICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcbiAgICAgIGxvZ2luKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkpXG4gICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGgiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n   const cardsMenu = document.querySelector('.cards-menu')\n\n   const changeTitle = ({ kitchen, name, price, stars }) => {\n      const title = document.querySelector('.section-heading')\n      title.innerHTML = `\n         <h2 class=\"section-title restaurant-title\">${name}</h2>\n\t\t\t\t\t<div class=\"card-info\">\n\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t${stars}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"price\">От ${price} ₽</div>\n\t\t\t\t\t\t<div class=\"category\">${kitchen}</div>\n\t\t\t\t\t</div>\n      `\n   }\n\n   const renderItems = data => {\n      data.forEach(({ description, id, image, name, price }) => {\n         const card = document.createElement('div')\n         card.classList.add('card')\n         card.innerHTML = `<img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\n\t\t\t\t\t\t<div class=\"card-text\">\n\t\t\t\t\t\t\t<div class=\"card-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"card-title card-title-reg\">${name}</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-info\">\n\t\t\t\t\t\t\t\t<div class=\"ingredients\">\n                        ${description}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-buttons\">\n\t\t\t\t\t\t\t\t<button class=\"button button-primary button-add-cart\">\n\t\t\t\t\t\t\t\t\t<span class=\"button-card-text\">В корзину</span>\n\t\t\t\t\t\t\t\t\t<span class=\"button-cart-svg\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<strong class=\"card-price-bold\">${price} ₽</strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>`\n\n         cardsMenu.append(card)\n      })\n   }\n\n   if (localStorage.getItem('restaurant')) {\n      const restaurant = JSON.parse(localStorage.getItem('restaurant'))\n      changeTitle(restaurant)\n      fetch(`https://deliveryfood-289ca-default-rtdb.firebaseio.com/db/${restaurant.products}`)\n         .then(res => res.json())\n         .then(data => renderItems(data))\n         .catch(err => console.log(err))\n   } else {\n      window.location.href = '/'\n   }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOztBQUVBLDBCQUEwQiw2QkFBNkI7QUFDdkQ7QUFDQTtBQUNBLHNEQUFzRCxLQUFLO0FBQzNEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw4QkFBOEIsT0FBTztBQUNyQyw4QkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0E7QUFDQSx1Q0FBdUMsTUFBTSxTQUFTLEtBQUs7QUFDM0Q7QUFDQTtBQUNBLGdEQUFnRCxLQUFLO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLG9CQUFvQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5Zm9vZC8uL3NyYy9tb2R1bGVzL21lbnUuanM/MmZhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gKCkgPT4ge1xuICAgY29uc3QgY2FyZHNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLW1lbnUnKVxuXG4gICBjb25zdCBjaGFuZ2VUaXRsZSA9ICh7IGtpdGNoZW4sIG5hbWUsIHByaWNlLCBzdGFycyB9KSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLWhlYWRpbmcnKVxuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZSByZXN0YXVyYW50LXRpdGxlXCI+JHtuYW1lfTwvaDI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJhdGluZ1wiPlxuXHRcdFx0XHRcdFx0XHQke3N0YXJzfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJpY2VcIj7QntGCICR7cHJpY2V9IOKCvTwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+JHtraXRjaGVufTwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgYFxuICAgfVxuXG4gICBjb25zdCByZW5kZXJJdGVtcyA9IGRhdGEgPT4ge1xuICAgICAgZGF0YS5mb3JFYWNoKCh7IGRlc2NyaXB0aW9uLCBpZCwgaW1hZ2UsIG5hbWUsIHByaWNlIH0pID0+IHtcbiAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICAgICAgIGNhcmQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCIke25hbWV9XCIgY2xhc3M9XCJjYXJkLWltYWdlXCIgLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtaGVhZGluZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS1yZWdcIj4ke25hbWV9PC9oMz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWluZm9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1idXR0b25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeSBidXR0b24tYWRkLWNhcnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcmQtdGV4dFwiPtCSINC60L7RgNC30LjQvdGDPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJidXR0b24tY2FydC1zdmdcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PHN0cm9uZyBjbGFzcz1cImNhcmQtcHJpY2UtYm9sZFwiPiR7cHJpY2V9IOKCvTwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PmBcblxuICAgICAgICAgY2FyZHNNZW51LmFwcGVuZChjYXJkKVxuICAgICAgfSlcbiAgIH1cblxuICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZXN0YXVyYW50JykpIHtcbiAgICAgIGNvbnN0IHJlc3RhdXJhbnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZXN0YXVyYW50JykpXG4gICAgICBjaGFuZ2VUaXRsZShyZXN0YXVyYW50KVxuICAgICAgZmV0Y2goYGh0dHBzOi8vZGVsaXZlcnlmb29kLTI4OWNhLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9kYi8ke3Jlc3RhdXJhbnQucHJvZHVjdHN9YClcbiAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgLnRoZW4oZGF0YSA9PiByZW5kZXJJdGVtcyhkYXRhKSlcbiAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJ1xuICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;