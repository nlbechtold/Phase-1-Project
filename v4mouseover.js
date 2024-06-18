
// THIS has the mouse over and filter correct, but no mouse out- see v5//
fetch("https://yoga-api-nzy4.onrender.com/v1/categories")
.then(r => r.json())
.then(categories =>{
function displayEach(input){
 categories.forEach((category)=>{
  // console.log(categorie.poses)
  
//gets all the categories of the poses like all the core ones 

    // const panel = document.querySelector("#pose-display-image")
    const fullDisplay = document.querySelector("#pose-display-image")
      // fullDisplay.innerHTML = ""
    category.poses.forEach((categoriesPoses)=>{
    if (categoriesPoses.category_name === input ){
        
        const div = document.createElement("div")
        const name = document.createElement("h2")
        const image = document.createElement("img")
        const benefits = document.createElement("h3")
        
        name.textContent = categoriesPoses.english_name
        image.src = categoriesPoses.url_png
        benefits.textContent = categoriesPoses.pose_benefits
    
        div.append(name, benefits, image)
        fullDisplay.append(div)

        
        image.addEventListener("mouseover", () => {
            
            const textHowtoSel = document.querySelector("#hover-text")
            const textHowTo = document.createElement("p")
            image.remove()
            
            
            textHowTo.textContent = categoriesPoses.pose_description
            div.append(textHowTo)
            console.log (textHowTo.textContent)
            document.getElementById("hover-text").style.display = 'block';
              }
        
    )
      
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