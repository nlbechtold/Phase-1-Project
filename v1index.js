
// THIS has the mouse over consoe logged correctly but doesn't actually load and unstyled//


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


    const textHowtoSel = document.querySelector(".container")
    const textHowTo = document.createElement("div")
    image.addEventListener("mouseover", () => {
        console.log(pose.pose_description)   
        textHowTo.textContent = pose.pose_description
        textHowtoSel.append(textHowTo)
             

    }
)

}

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