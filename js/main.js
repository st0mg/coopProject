window.addEventListener("scroll", function(event){
    hideHeader(event)
})

let old = 0

const header = document.querySelector("header")

function hideHeader(event){
    current = window.scrollY
    down = current > old
    old = current
    console.log(current, old);
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