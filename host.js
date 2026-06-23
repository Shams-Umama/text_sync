const frameA = document.getElementById("frameA");
const frameB = document.getElementById("frameB");
const logDiv = document.getElementById("log");
const status = document.getElementById("status");

function addLog(message) {

    const logEntry = document.createElement("div");

    const time = new Date().toLocaleTimeString();

    logEntry.textContent = `[${time}] ${message}`;

    logDiv.prepend(logEntry);
}
function showSyncStatus() {

    status.textContent = "🟢 Synced";

    setTimeout(() => {
        status.textContent = "🟢 Ready";
    }, 1000);
}

window.addEventListener("message", (event) => {

    if(event.origin !== window.location.origin){
        return;
    }

    showSyncStatus();

    addLog(`Received: ${event.data.action}`);

    if (event.source === frameA.contentWindow) {

        frameB.contentWindow.postMessage(event.data, window.location.origin);

        addLog("Frame A → Frame B");

    } else if (event.source === frameB.contentWindow) {

        frameA.contentWindow.postMessage(event.data, window.location.origin);

        addLog("Frame B → Frame A");
    }
});