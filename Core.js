

function toggleMobileMenu()
{
    var mobileMenuList = document.getElementById("mobileMenuList");

    if(mobileMenuList.style.display == "none" || mobileMenuList.style.display == "")
        mobileMenuList.style.display = "block";
    else
        mobileMenuList.style.display = "none";
}