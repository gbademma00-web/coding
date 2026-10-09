const pupils = [
    {id:1, name: "Akin", age: 17, isPresent: true},
    {id:2, name: "Tunde", age: 16, isPresent: false},
    {id:3, name: "Makinde", age: 18, isPresent: true},
    {id:4, name: "Abdul", age: 16, isPresent: false},
];

const output = document.getElementById("output")
const showBtn = document.getElementById("showBtn")
const clrBtn = document.getElementById("clrBtn")

showBtn.addEventListener("click", function() {
    let html = "<ul>";

for (let ilo of pupils) {
    if (ilo.isPresent) {
        html += "<li> ${iho.name} - ${iho.age}</li>"
    }
}
html += "</ul>";
output.innerHTML = html;
})
clrBtn.addEventListener("click", function() {
    output.innerHTML = ""
})