const buttonAuth = document.querySelector('.button-auth')
const buttonOut = document.querySelector('.button-out')
const buttonLogin = document.querySelector('.button-login')
const buttonClose = document.querySelector('.close-auth')
const userName = document.querySelector('.user-name')
const modalAuth = document.querySelector('.modal-auth')
const logInForm = document.getElementById('logInForm')
const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')

const login = (user) => {
   buttonAuth.style.display = 'none'
   buttonOut.style.display = 'flex'
   userName.style.display = 'flex'
   userName.textContent = user.login
   modalAuth.style.display = 'none'
}
const logout = () => {
   buttonAuth.style.display = 'flex'
   buttonOut.style.display = 'none'
   userName.style.display = 'none'
   userName.textContent = ''
   localStorage.removeItem('user')
}

buttonAuth.addEventListener('click', () => {
   modalAuth.style.display = 'flex'
   inputLogin.addEventListener('focus', () => {
      inputLogin.value = ''
      inputLogin.style.color = 'inherit'
      inputLogin.style.border = '1px solid grey'
   })
})

buttonClose.addEventListener('click', () => {
   modalAuth.style.display = 'none'
})

buttonOut.addEventListener('click', logout)

logInForm.addEventListener('submit', (event) => {
   event.preventDefault()
   if (inputLogin.value) {
      const user = {
         login: inputLogin.value,
         password: inputPassword.value
      }
      localStorage.setItem('user', JSON.stringify(user))
      login(user)
   } else {
      inputLogin.style.color = 'red'
      inputLogin.style.border = '1px solid red'
      inputLogin.value = 'Ведите логин'
   }
})

if (localStorage.getItem('user')) {
   login(JSON.parse(localStorage.getItem('user')))
}