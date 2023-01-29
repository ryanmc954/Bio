// console.log("sum",sum)

let form, list, image, span
window.addEventListener('load',()=>{
   form = document.querySelector("#form")
   list = document.querySelector("#list")
   image = document.querySelector("userimage")
   span = document.querySelector("#username")


   form.addEventListener("submit",(event)=>{


        event.preventDefault()
        const formData = new FormData(form)
        console.log("formData", formData)
        const data = Object.fromEntries(formData)
        console.log("data", data)
        const username = data.username
        fetch(`https://api.github.com/users/${data.username}`)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            // const avatar_url = data.avata_url
            // const public_repo = data.public_repose
            // const followers = data.followers
            const {avatar_url, public_repos, followers} = data
            image.setAttribute("src", avatar_url)
            span.innerHTML = username
            const li1 = document.createElement(`li`)
            li2.innerHTML = `Followers: ${followers}`

         list.appendChild(li1)
         list.appendChild(li2)
         console.log("response", data)
        })
    })
})