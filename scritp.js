const inputForm=document.querySelectorAll('input')
const formToSubmit=document.querySelector('form')

formToSubmit.addEventListener('submit',(e)=>{
    let inputValue=inputForm[0].value
    let inputPass=inputForm[1].value
    e.preventDefault()
    let myData={
        user:inputValue,
        password:inputPass
    }
    console.log(myData)
})