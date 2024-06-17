let myInput = document.getElementById("inputsText")
let inputBtn     = document.getElementById("savebtn")
let deleteTab    = document.getElementById("delete")
let saveTab      = document.getElementById("savetab")
let list         = document.getElementById("list")


let myLead =  []

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("miLeads"))
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage){
    myLead = leadsFromLocalStorage
    render(myLead)
    console.log(leadsFromLocalStorage)
}

deleteTab.addEventListener("click",
function(){
    localStorage.clear()
    myLead  = []
    render(myLead)
    console.log(leadsFromLocalStorage)
    // list.innerHTML = ""
    console.log(localStorage)
})

saveTab.addEventListener("click",
function (){
    chrome.tabs.query({active: true, currentWindow: true},
    function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("miLeads",JSON.stringify(myLead))
        render(myLead)
    console.log(leadsFromLocalStorage)
        
    })
})




inputBtn.addEventListener("click",
()=>{
    myLead.push(myInput.value)
    localStorage.setItem("miLeads", JSON.stringify(myLead))

    render(myLead)
    myInput.value = ""

})

function render(lead){
    let listItem =  ""

    for (let i = 0; i < lead.length; i++){
        listItem +=
       `<li>
            <a href = 'google.com' target = '_blank'> ${lead[i]}</a>
        </li>`
    }
    list.innerHTML = listItem

console.log(myLead)
}


