function toggleNav() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
    const content = document.querySelector('.content');
    content.classList.toggle('shifted');
  } 

  function Submit()
  {
       alert("Your  Message is Send");
  }