

function toggleMobileMenu()
{
    var mobileMenuList = document.getElementById("mobileMenuList");
    var navBarMobile = document.getElementById("headerNav-Mobile");
    var menuButton = document.getElementById("mobileMenuButton");
    var menuLines = document.getElementsByClassName("menuLine");

    if(mobileMenuList.style.display == "none" || mobileMenuList.style.display == "")
    {
        mobileMenuList.style.display = "block";
        navBarMobile.style.background = "#0065FF";
        menuLines[1].style.display = "none";
        menuLines[0].style.transform = "rotate(45deg)";
        menuLines[0].style.marginTop = "18px";
        menuLines[2].style.transform = "rotate(-45deg)";
        menuLines[2].style.marginTop = "-18px";
        menuButton.style.top = "-12px";
    }
    else
    {
        mobileMenuList.style.display = "none";
        navBarMobile.style.background = "transparent";
        menuLines[1].style.display = "block";
        menuLines[0].style.transform = "rotate(0deg)";
        menuLines[0].style.marginTop = "0px";
        menuLines[2].style.transform = "rotate(0deg)";
        menuLines[2].style.marginTop = "0px";
        menuButton.style.top = "0px";
    }
}