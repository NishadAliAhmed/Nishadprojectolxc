const cityUrl =  "https://nishadaliahmed.github.io/Nishadlocationdataolx/"
const productUrl = "https://nishadaliahmed.github.io/Nishadproductsdataolx/"
const languageUrl = "https://nishadaliahmed.github.io/Nishadlanguagedataolx/"

  const getCity = async() =>{
      let response = await fetch(cityUrl,{method:'GET'})
      let data = await response.json()
      data.map((item)=> {
          let element = document.createElement('option')
          let text = document.createTextNode(item.state)
          element.appendChild(text)
          element.value = item.state_id
          document.getElementById('city').appendChild(element) 
      })
   }

   const getProduct = async() =>{
    let response = await fetch(productUrl,{method:'GET'})
    let data = await response.json()
    data.map((item)=> {
        let element = document.createElement('option')
        let text = document.createTextNode(item.product_name)
        element.appendChild(text)
        element.value = item.product_id
        document.getElementById('products').appendChild(element) 
    })
 }

 const getLanguage = async() =>{
    let response = await fetch(languageUrl,{method:'GET'})
    let data = await response.json()
    data.map((item)=> {
        let element = document.createElement('option')
        let text = document.createTextNode(item.language)
        element.appendChild(text)
        element.value = item.id
        document.getElementById('language').appendChild(element) 
    })
 }



   






//   const getProduct = async() =>{
//      let cityId = document.getElementById('city').value;
//      let product = document.getElementById('si')[0];

//      while(product.length > 0){
//         product.remove(0)
//      }


//      let response = await fetch(`${productUrl}${cityId}`,{method:'GET'})
//      let data = await response.json()
//      data.map((item)=> {
//          let element = document.createElement('option')
//          let text = document.createTextNode(item.product_name)
//          element.appendChild(text)
//          item.appendChild(element) 
//      })
//   }


//function getCity(){
    //fetch(cityUrl,{method:'GET'})
   // .then((res)=> res.json())
   // .then((data)=> {
        //data.map((item)=> {
           // let element = document.createElement('option')
           // let text = document.createTextNode(item.state)
           // element.appendChild(text)
           // element.value = item.state_id
           // document.getElementById('city').appendChild(element)

       // })
    //})
//}
 

// async function getCity(){
//     let response = await fetch(cityUrl,{method:'GET'})
//     let data = await response.json()
//     data.map((item)=> {
//         let element = document.createElement('option')
//         let text = document.createTextNode(item.state)
//         element.appendChild(text)
//         element.value = item.state_id
//         document.getElementById('city').appendChild(element) 
//     })
//  }

 