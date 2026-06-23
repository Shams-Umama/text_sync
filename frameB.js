const editor = document.getElementById("editor");

const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const strikeBtn = document.getElementById("strikeBtn");

let isRemoteUpdate = false;

function sendUpdate(action) {

    if (isRemoteUpdate) return;

    parent.postMessage({
        type: "FORMAT_SYNC",
        action: action,
        html: editor.innerHTML
    }, "*");

    console.log("Message sent to Host");
}

boldBtn.addEventListener("click", () => {
    document.execCommand("bold");
    sendUpdate("bold");
});

italicBtn.addEventListener("click", () => {
    document.execCommand("italic");
    sendUpdate("italic");
});

strikeBtn.addEventListener("click", () => {
    document.execCommand("strikeThrough");
    sendUpdate("strikeThrough");
});

editor.addEventListener("input", () => {

    sendUpdate("typing");

});

function updateToolbarState(){

    boldBtn.classList.toggle(
        "active",
        document.queryCommandState("bold")
    );

    italicBtn.classList.toggle(
        "active",
        document.queryCommandState("italic")
    );

    strikeBtn.classList.toggle(
        "active",
        document.queryCommandState("strikeThrough")
    );
}


editor.addEventListener("keyup", updateToolbarState);
editor.addEventListener("mouseup", updateToolbarState);

window.addEventListener("message", (event) => {

    if (event.data.type === "FORMAT_SYNC") {

        isRemoteUpdate = true;

        editor.innerHTML = event.data.html;

        isRemoteUpdate = false;

        console.log("Frame B Updated");
    }
});