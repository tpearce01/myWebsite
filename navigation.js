var currentiframe = document.getElementById("ifr2");
var lastFrameGame = false;

function LoadHome() {
    SwapFrame()
    currentiframe.src = "home.html";
    currentiframe.height = "1000vw";
    lastFrameGame = false;
}

function LoadResume() {
    SwapFrame()
    currentiframe.src = "resume.html";
    currentiframe.height = "1000vw";
    lastFrameGame = false;
}

function LoadFlappy() {
    SwapFrame()
    currentiframe.src = "FlappyWeb/index.html";
    currentiframe.height = "1000px";
    lastFrameGame = true;
}

function LoadSC() {
    SwapFrame();
    currentiframe.src = "SCWeb/index.html"
    currentiframe.height = "1400px";
    lastFrameGame = true;
}

function LoadFinalTrial() {
    SwapFrame();
    currentiframe.src = "FinalTrial/index.html"
    currentiframe.height = "1000px";
    lastFrameGame = true;
}

function LoadCOTE(){
  SwapFrame();
  currentiframe.src = "CoTE/index.html"
  currentiframe.height = "1000px";
  lastFrameGame = true;
}

function LoadContact() {
    SwapFrame();
    currentiframe.src = "contact.html";
    currentiframe.height = "600vw";
    lastFrameGame = false;
}

function LoadWebsiteInfo() {
    SwapFrame();
    currentiframe.src = "website_info.html";
    currentiframe.height = "600vw";
    lastFrameGame = false;
}

function SwapFrame() {
    if (lastFrameGame) {
        currentiframe.src = "none.html";
    }
    currentiframe.height = "0px";
    if (currentiframe == document.getElementById("ifr1")) {
        currentiframe = document.getElementById("ifr2");
    } else {
        currentiframe = document.getElementById("ifr1");
    }
}

setTimeout(function () { LoadHome(); }, 100);
write();
