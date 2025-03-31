
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for footer links
    document.querySelectorAll('.footer a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionID = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionID);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Back to top button
    let topButton = document.createElement("button");
    topButton.innerText = "↑ Top";
    topButton.id = "topButton";
    topButton.style.position = "fixed";
    topButton.style.bottom = "50px";
    topButton.style.right = "20px";
    topButton.style.padding = "10px 15px";
    topButton.style.background = "#007bff";
    topButton.style.color = "white";
    topButton.style.border = "none";
    topButton.style.borderRadius = "5px";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";
    document.body.appendChild(topButton);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Update footer year dynamically
    let footer = document.querySelector(".footer");
    let year = new Date().getFullYear();
    let yearSpan = document.createElement("span");
    yearSpan.innerHTML = ` &copy; ${year} Real Estate Laws`;
    footer.appendChild(yearSpan);
});
 // Dynamically update the year
 document.getElementById("year").textContent = "© " + new Date().getFullYear();

 // Add an alert when a footer link is clicked
 document.querySelectorAll('.footer-link').forEach(link => {
     link.addEventListener('click', function(event) {
         event.preventDefault(); // Prevent default navigation (for testing)
         alert('You clicked on: ' + this.textContent);
     });
 });
 
