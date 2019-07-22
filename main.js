var area = document.getElementById('area')
function makebold() {
    if (area.style.fontWeight == "bold") {
        area.style.fontWeight = "normal"
    }
    else {
        area.style.fontWeight = "bold"
    }
}

function makeitalic() {
    if (area.style.fontStyle == "italic") {
        area.style.fontStyle = "normal"
    }
    else {
        area.style.fontStyle = "italic"
    }
}
function makeunderline() {
    if (area.style.textDecoration == "underline") {
        area.style.textDecoration = "none"
    }
    else {
        area.style.textDecoration = "underline"
    }
} 

function changeSize(){
    area.style.fontSize= document.getElementById('selectSize').value
}
function changefamily(){
    area.style.fontFamily=document.getElementById('selectfamily').value
}