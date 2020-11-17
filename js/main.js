let pages = [
    {title: 'Welcome', path: 'frontpage'},
    {title: '<span>1.</span> Lorem', path: '01'},
    {title: '<span>2.</span> Lorem', path: '02'},
    {title: '<span>3.</span> Lorem', path: '03'},
];

let currentPage = 0;
let nextBtn = document.getElementById('next-btn');
let prevBtn = document.getElementById('prev-btn');
prevBtn.style.display = 'none';
nextBtn.style.display = 'none';

let progress = [];
let progressIn = [
    {pass: true},
    {pass: false},
    {pass: false},
    {pass: false}
];
if (progressIn === undefined) {
    for (i=0; i < pages.length; i++) {
        progress.push({
            pass: false
        })
    }
} else {
    progress = progressIn;
}

function navTo() {
    $("#content").empty();
    $("#content").load("content/" + pages[currentPage].path + "/index.html", function()	{
        $("#slide").fadeIn('slow');												  
    });
    setNavState();
}

function prevPage() {
    currentPage--;
    navTo();
}

function nextPage() {
    currentPage++;
    navTo();
}

function setNavState() {
    document.getElementById('header-title').innerHTML = pages[currentPage].title;
    nextBtn = document.getElementById('next-btn');
    prevBtn = document.getElementById('prev-btn');
    if(currentPage === 0) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'inline';
    } else if (currentPage === pages.length - 1) {
        prevBtn.style.display = 'inline';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline';
        nextBtn.style.display = 'inline';
    }
    if(!progress[currentPage].pass) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

function passPage() {
    progress[currentPage].pass = true;
    if(!progress[currentPage].pass) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

