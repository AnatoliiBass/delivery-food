const menu = () => {
   const restourant = 'food-band'

   const renderItems = data => {
      data.forEach(item => console.log(item))
   }


   fetch(`https://deliveryfood-289ca-default-rtdb.firebaseio.com/db/${restourant}.json`)
      .then(res => res.json())
      .then(data => renderItems(data))
      .catch(err => console.log(err))
}

export default menu