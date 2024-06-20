// fetch("https://yoga-api-nzy4.onrender.com/v1/categories")
// .then(r => r.json())
// .then(categories =>{
// function displayEach(input){
//  categories.forEach((category)=>{
//   // console.log(categorie.poses)
// //gets all the categories of the poses like all the core ones 
// console.log(category)
//     console.log(input)
//     // const panel = document.querySelector("#pose-display-image")
//     const fullDisplay = document.querySelector("#pose-display-image")
//       // fullDisplay.innerHTML = ""
//     category.poses.forEach((categoriesPoses)=>{
//     if (categoriesPoses.category_name === input ){
//         console.log(fullDisplay)
//         const name = document.createElement("h2")
//         const image = document.createElement("img")
//         const benefits = document.createElement("h3")
//         const button = document.createElement("button")

//         button.textContent = "Show Me How"
//         name.textContent = categoriesPoses.english_name
//         image.src = categoriesPoses.url_png
//         benefits.textContent = categoriesPoses.pose_benefits

//         fullDisplay.append(name, image, benefits, button)

//         button.addEventListener("click", () => {
//             const textHowtoSel = document.querySelector("#hover-text")
//             const textHowTo = document.createElement("p")
            
//             textHowTo.textContent = categoriesPoses.pose_description
//             button.append(textHowTo)
//             console.log (textHowTo.textContent)
            
//               }
        
//     )

        
        
//     }

//     })
//   })
// }

//   const dropdownBtn = document.querySelector("#tweleve-options")
//   dropdownBtn.addEventListener("change", function (e) {
//     const fullDisplay = document.querySelector("#pose-display-image")
//       fullDisplay.innerText = ""
//       console.log("Trigger")
//     displayEach(e.target.value)
//   })

//   })


//   const goGo = document.querySelector("#emptyStudio")
//   goGo.addEventListener("click", ()=>{
//     alert("Take a breath of fresh air and try yoga outside🎶")
//   })


fetch("https://yoga-api-nzy4.onrender.com/v1/categories")
.then(r => r.json())
.then(categories =>{
function displayEach(input){
 categories.forEach((category)=>{
 
   //Below we are adding a display for each "pose" of the yoga api. Showing the image, benefits, name of pose, and the "how to text." We also added a class called hidden to prepare for the mouseover, where the "how to text" and image will swap out//
    const fullDisplay = document.querySelector("#pose-display-image")
    category.poses.forEach((categoriesPoses)=>{
    if (categoriesPoses.category_name === input ){
        console.log(fullDisplay)
        const name = document.createElement("h2")
        const image = document.createElement("img")
        const benefits = document.createElement("h3")
        const fullDiv = document.createElement("div")
        const textHowTo = document.createElement("p")
        fullDiv.setAttribute("id", categoriesPoses.english_name)

        textHowTo.classList.add("hidden")
        textHowTo.textContent = categoriesPoses.pose_description
        name.textContent = categoriesPoses.english_name
        image.src = categoriesPoses.url_png
        benefits.textContent = categoriesPoses.pose_benefits

        fullDiv.append(name, image, textHowTo, benefits)
        fullDisplay.append(fullDiv)


        // here we are showing the mouseover/mouseout event that will swap the "how to text" and image based on mouse plaement //
        image.addEventListener("mouseover", () => {
       
          image.classList.add("hidden")
          textHowTo.classList.remove("hidden")
          
       
          console.log (textHowTo.textContent)
      

      textHowTo.addEventListener("mouseout", () => {
    
          textHowTo.classList.add("hidden")
          image.classList.remove("hidden")
        
      }
    )
      }
    )
       
        
    }

    })
  })
}

// below is where we are using the drop down button and change event listener to show only poses which are filtered by category by creating a dynamic variable//
  const dropdownBtn = document.querySelector("#tweleve-options")
  dropdownBtn.addEventListener("change", function (e) {
    const fullDisplay = document.querySelector("#pose-display-image")
      fullDisplay.innerText = ""
    
    displayEach(e.target.value)
  })

  })
  
  const aDisplay = document.querySelector("#affirmation-display")    
  const button = document.createElement("button")
  
  // below is where we added our third event listener that will show an inspirtional quote from a different API source, when the button we created is clicked//
  button.textContent = "Click me for a Pick me up!"

    aDisplay.append(button)
      
  button.addEventListener("click", () => {
      fetch("https://cors-anywhere.herokuapp.com/https://www.affirmations.dev") 
  .then(r => r.json())
  .then(affirmation => {
      button.textContent = affirmation["affirmation"]
      aDisplay.append(button)
     
  })
}
  )
