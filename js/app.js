$(document).ready(function() {

    // Start Left Sidebar
    $(".sidebarlinks").click(function() {
        $(".sidebarlinks").removeClass("currents");
        $(this).addClass("currents"); 
    });
    // End Left Sidebar
})

// Star JS Area

// Stat Sidebar

// Stat notify & userlogout

// Start dropdown
function dropbtn(e){
    // console.log(e.target);

    e.target.parentElement.nextElementSibling.classList.toggle("show");

}
// End dropdown

// End notify & userlogout

// End Sidebar

// End JS Area