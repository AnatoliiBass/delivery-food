const partners = () => {
   const renderItems = data => {
      data.forEach(item => console.log(item))
   }


   fetch('https://deliveryfood-289ca-default-rtdb.firebaseio.com/db/partners.json')
      .then(res => res.json())
      .then(data => renderItems(data))
      .catch(err => console.log(err))
}

export default partners