const weatherForm=document.querySelector('form')

const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messagetow=document.querySelector('#message-2')
messageOne.textContent=''
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value;
    messageOne.textContent='Loading...'
    messagetow.textContent=''

    fetch('/weather?address='+encodeURIComponent(location)).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent=data.error
            }
            else{
            
                messageOne.textContent=data.forecast.data
                messagetow.textContent=data.location
            }
        })
    })
    
    console.log(location);
})