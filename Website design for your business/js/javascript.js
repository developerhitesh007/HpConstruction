$(document).ready(function (){
    $('.menu-toggel').on('click', function (){
        $('#ul-item').toggleClass('show');
    })
});
$(document).ready(function (){
    $('#ul-item').on('click', function (){
        $('#ul-item').toggleClass('show');
    })
});

window.addEventListener("scroll", function () {
    var sticky = document.querySelector(".main-header");
    sticky.classList.toggle("sticky", window.scrollY > 0);
})
    
function reveal(){

        var scrolAnimation = document.querySelectorAll(".scrolAnimation");
         scrolAnimation.forEach(reveal => {
            var windowHeight = window.innerHeight;
            var elementTop = reveal.getBoundingClientRect().top;
            var elementVisiable = 100;

            if(elementTop = windowHeight - elementVisiable) {
                reveal.classList.add("active");
            }
            else{
                reveal.classList.remove("active");
            }
            
         });
        }
         window.addEventListener("scroll", reveal);
       
// slider col-50
         function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
          }

// data filter gallary
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active_all')
        }
        this.classList.add('active_all');

        let dataFilter = this.getAttribute('data-filter');

        for ( let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active_all');
            }
        }
    })
}
          