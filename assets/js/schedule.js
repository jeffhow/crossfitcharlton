const cal = document.querySelector('#calendar');
const breakpoint = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-breakpoint'));

if (window.innerWidth < breakpoint) {
    let endpoint = "https://crossfitcharlton.pushpress.com/open/calendar?framed=1&view=week&type=list"
    cal.src = endpoint;
}

window.onresize = function() {
    if(window.innerWidth >= breakpoint) {
        let endpoint = "https://crossfitcharlton.pushpress.com/open/calendar?framed=1"
        cal.src = endpoint;
    }
    if (window.innerWidth < breakpoint) {
        let endpoint = "https://crossfitcharlton.pushpress.com/open/calendar?framed=1&view=week&type=list"
        cal.src = endpoint;
    }
}
