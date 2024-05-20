window.addEventListener("scroll", function(event){
    hideHeader(event)
    show()
})

show()

let old = 0

const header = document.querySelector("header")

function hideHeader(){
    current = window.scrollY
    down = current > old
    old = current
    // console.log(current, old);
    if (down)
    {
        if (!header.classList.contains("hideHeader"))
        {
            header.classList.add("hideHeader")
        }
    }
    else
    {
        header.classList.remove("hideHeader")
    }
}


function show(){
    let width = document.documentElement.clientWidth
    let height = document.documentElement.clientHeight

    let currentElem = document.elementFromPoint(width/2,height/4*3).closest("section")

    if (!currentElem.classList.contains("isShow"))
    {
        currentElem.classList.add("isShow")
    }
    
    console.log(currentElem);
}