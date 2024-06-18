
// THIS has the mouse over consoe logged correctly but doesn't actually load and unstyled//
fetch("https://yoga-api-nzy4.onrender.com/v1/categories")
.then(r => r.json())
.then(categories =>{
function displayEach(input){
 categories.forEach((category)=>{
  // console.log(categorie.poses)
  
//gets all the categories of the poses like all the core ones 
console.log(category)
    console.log(input)
    // const panel = document.querySelector("#pose-display-image")
    const fullDisplay = document.querySelector("#pose-display-image")
      // fullDisplay.innerHTML = ""
    category.poses.forEach((categoriesPoses)=>{
    if (categoriesPoses.category_name === input ){
      console.log("UrMom")
        console.log(fullDisplay)
        const name = document.createElement("h2")
        const image = document.createElement("img")
        const benefits = document.createElement("h3")
        
        name.textContent = categoriesPoses.english_name
        image.src = categoriesPoses.url_png
        benefits.textContent = categoriesPoses.pose_benefits
    
        fullDisplay.append(name, image, benefits)

        // panel.append(name, image, benefits)
    }
      
    })
  })
}

  const dropdownBtn = document.querySelector("#tweleve-options")
  dropdownBtn.addEventListener("change", function (e) {
    const fullDisplay = document.querySelector("#pose-display-image")
      fullDisplay.innerText = ""
      console.log("Trigger")
    displayEach(e.target.value)
  })
  

  })
// function displayPose(pose) {
//     const fullDisplay = document.querySelector("#pose-display-image")

//     const name = document.createElement("h2")
//     const image = document.createElement("img")
//     const benefits = document.createElement("h3")
    
//     name.textContent = pose.english_name
//     image.src = pose.url_png
//     benefits.textContent = pose.pose_benefits

//     fullDisplay.append(name, image, benefits)
// }
// )



    
//     image.addEventListener("mouseover", () => {
//      const textHowtoSel = document.querySelector(".container")
//      const textHowTo = document.createElement("div")
//         console.log(pose.pose_description)   
//         textHowTo.textContent = pose.pose_description
//         textHowtoSel.append(textHowTo)
             
    
// }

// )

//     image.addEventListener("mouseout", () => {
//         textHowto.textContent= 'none';
//     }
//     )
//     }



    
// function displayHowTo(poseHow) {
//             const textHowtoSel = document.querySelector(".gallery")
//             const textHowTo = document.createElement("h4")

//             textHowTo.textContent = pose.pose_description
            
//             console.log(poseHow)
//             textHowtoSel.append(textHowTo)
//             console.log(poseHow)

//             fullDisplay.addEventListener("click", () => {
//                 displayHowTo(poseHow)
//                 console.log(poseHow)
                
//             }
//             )
//         }

   


// https://yoga-api-nzy4.onrender.com/v1/categories?id=5&level=beginner

// "https://yoga-api-nzy4.onrender.com/v1/poses"