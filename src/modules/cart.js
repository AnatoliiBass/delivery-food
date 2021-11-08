const cart = () => {
   const buttonCart = document.getElementById('cart-button')
   const modalCart = document.querySelector('.modal-cart')
   const close = modalCart.querySelector('.close')
   const body = modalCart.querySelector('.modal-body')
   const buttonSend = modalCart.querySelector('.button-primary')
   const totalPrice = modalCart.querySelector('.modal-pricetag')
   const cancel = modalCart.querySelector('.clear-cart')

   const resetCart = () => {
      body.innerHTML = ''
      totalPrice.textContent = '0 ₽'
      localStorage.removeItem('cart')
      modalCart.classList.remove('is-open')
   }


   const decCount = (id) => {
      const cartArray = JSON.parse(localStorage.getItem('cart'))

      cartArray.map(item => {
         if (item.id === id) {
            item.count = item.count > 0 ? item.count - 1 : 0
         }
      })
      localStorage.setItem('cart', JSON.stringify(cartArray))
      renderItems(cartArray)
   }

   const incCount = (id) => {
      const cartArray = JSON.parse(localStorage.getItem('cart'))

      cartArray.map(item => {
         if (item.id === id) {
            item.count++
         }
      })
      localStorage.setItem('cart', JSON.stringify(cartArray))
      renderItems(cartArray)
   }

   const renderItems = data => {
      body.innerHTML = ''
      totalPrice.textContent = '0 ₽'

      data.forEach(({ name, price, id, count }) => {
         const cartElement = document.createElement('div')
         cartElement.classList.add('food-row')
         cartElement.innerHTML = `
         <span class="food-name">${name}</span>
			<strong class="food-price">${price} ₽</strong>
			<div class="food-counter">
				<button class="counter-button btn-dec" data-index="${id}">-</button>
				<span class="counter">${count}</span>
				<button class="counter-button btn-inc" data-index="${id}">+</button>
			</div>
         `

         body.append(cartElement)
      })

      const total = data.reduce((acc, { price, count }) => {
         return acc += (price * count)
      }, 0)
      totalPrice.textContent = `${total} ₽`
   }

   cancel.addEventListener('click', resetCart)

   buttonSend.addEventListener('click', () => {
      const cartArray = localStorage.getItem('cart')

      fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: cartArray
      })
         .then(res => {
            if (res.ok) {
               resetCart()
            }
         })
         .catch(err => console.error(err))
   })

   body.addEventListener('click', event => {
      event.preventDefault()
      if (event.target.classList.contains('btn-inc')) {
         incCount(event.target.dataset.index)
      } else if (event.target.classList.contains('btn-dec')) {
         decCount(event.target.dataset.index)
      }
   })

   buttonCart.addEventListener('click', () => {
      if (localStorage.getItem('cart')) {
         renderItems(JSON.parse(localStorage.getItem('cart')))
      }

      modalCart.classList.add('is-open')
   })

   close.addEventListener('click', () => {
      modalCart.classList.remove('is-open')
   })
}

export default cart