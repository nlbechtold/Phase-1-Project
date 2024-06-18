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
        const button = document.createElement("button")

        button.textContent = "Show Me How"
        name.textContent = categoriesPoses.english_name
        image.src = categoriesPoses.url_png
        benefits.textContent = categoriesPoses.pose_benefits

        fullDisplay.append(name, image, benefits, button)

        button.addEventListener("click", () => {
            const textHowtoSel = document.querySelector("#hover-text")
            const textHowTo = document.createElement("p")
            
            textHowTo.textContent = categoriesPoses.pose_description
            button.append(textHowTo)
            console.log (textHowTo.textContent)
            
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