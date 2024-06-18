//attempt to show mouse over text//

fetch("https://yoga-api-nzy4.onrender.com/v1/poses")
.then(r => r.json())
.then(poses =>{

 poses.forEach((pose)=>{


    //   console.log(pose)
     displayPose(pose)
      
    

    })
    
  })
// function displayHowTo = {
//     const textHowto = fullDisplay.querySelector
// }

function displayPose(pose) {
    const fullDisplay = document.querySelector("#pose-display-image")

    const name = document.createElement("h2")
    const image = document.createElement("img")
    const benefits = document.createElement("h3")
    
    name.textContent = pose.english_name
    image.src = pose.url_png
    benefits.textContent = pose.pose_benefits

    fullDisplay.append(name, image, benefits)


    const textHowtoSel = document.querySelector("#hover-text")
    const textHowTo = document.createElement("p")
    image.addEventListener("mouseover", () => {
        console.log(pose.pose_description)   
        textHowTo.textContent = pose.pose_description
        textHowtoSel.append(textHowTo)
         console.log (textHowTo)    

    }
)

}