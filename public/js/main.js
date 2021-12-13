const thumbUp = document.getElementsByClassName("fa-thumbs-up");
const thumbDown = document.getElementsByClassName("fa-thumbs-down");
const trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(el) {
  el.addEventListener('click', likeMessages)
})

Array.from(thumbDown).forEach(function(el) {
  el.addEventListener('click', dislikeMessages)
})

Array.from(trash).forEach(function(el) {
  el.addEventListener('click', deleteMessages)
})

async function likeMessages(){
  const name = this.parentNode.parentNode.childNodes[1].innerText
  const message = this.parentNode.parentNode.childNodes[3].innerText
  const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)

    try{
        const response = await fetch('thumbUp', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'message': message,
            'thumbUp': thumbUp
          })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function dislikeMessages(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const message = this.parentNode.parentNode.childNodes[3].innerText
    const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)

    try{
        const response = await fetch('thumbDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'message': message,
            'thumbDown': thumbDown
          })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function deleteMessages(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const message = this.parentNode.parentNode.childNodes[3].innerText

        try{
            const response = await fetch('deleteMessage', {
              method: 'delete',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                'name': name,
                'message': message,
                })
            })
              const data = await response.json()
              console.log(data)
              location.reload()
        }catch(err){
            console.log(err)
        }
}
