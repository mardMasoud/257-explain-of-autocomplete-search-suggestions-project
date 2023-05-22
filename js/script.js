let inputElm = document.querySelector("input");
let autocomBoxElm = document.querySelector(".autocom-box");
let suggestions = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vechiles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to become Freelancer",
  "How to become Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];
const searchInput = document.querySelector('.search-input')
inputElm.addEventListener("keyup", function (e) {
  let inputValue = e.target.value;
  console.log(inputValue.length);
  if(inputValue.length>0)
  searchInput.classList.add('active')
 else
 searchInput.classList.remove('active')

let filterdItems = suggestions.filter(function (suggestion) {
    return suggestion.toLowerCase().includes(inputValue.toLowerCase());
  });

  let liItems = filterdItems.map(function (filterItem) {
    return "<li>" + filterItem + "</li>";
  });
   
  autocomBoxElm.innerHTML=''
  liItems.forEach(function(liItem){
    autocomBoxElm.insertAdjacentHTML('beforeend',liItem)

  })
  let lis = document.querySelectorAll('li')
  console.log(lis);
  lis.forEach(function(l){
      l.addEventListener('click',function(e){
        
          inputElm.value=e.target.textContent
          searchInput.classList.remove('active')
      })
     
  })
});




