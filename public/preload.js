const { contextBridge, ipcRenderer, contentTracing } = require("electron");

process.once("loaded", () => {
    contextBridge.exposeInMainWorld("versions", process.versions)
    contextBridge.exposeInMainWorld('electronAPI', {
        sendEmail: (email) => ipcRenderer.send('sendEmail', email)
    })
    
})