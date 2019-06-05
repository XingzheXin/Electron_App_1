//const electron = require('electron');
const { app, BrowserWindow, Menu } = require('electron');
const { dialog } = require('electron');
var fs = require('fs');

let mainWindow;
let addWindow;

function createWindow() {
    //Create a new window
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        },
        minHeight: 600,
        minWidth: 800
    })
    mainWindow.loadFile('index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    })

}

app.on('ready', function () {

    createWindow();

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    mainWindow.on('closed', function () {
        app.quit();
    })

    // Insert the Menu
    Menu.setApplicationMenu(mainMenu);

});

//Handle create add window
function createAddWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        minHeight: 600,
        minWidth: 800
    })
    mainWindow.loadFile('addWindow.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    })

    let content = 'Some text that you can save to a file';
    dialog.showSaveDialog((fileName) => {
        if (fileName === undefined) {
            console.log('You did not save the file');
            return;
        }

        fs.writeFile(fileName, content, (err) => {
            if (err) {
                console.log("There was an Error");
            }
        });
    });
}

const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add Item',
                click() {
                    createAddWindow();
                }
            },
            {
                label: 'Clear Items'
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' :
                    'Ctrl+Q',
                click() {
                    app.quit();
                }
            },
        ]
    }
]
//app.on('ready', createWindow);

// How to create an interactive message box
//let options = {
//    type: 'question',
//    buttons: ['Cancel', 'Yes, please', 'No, thanks'],
//    defaultID: ,
//    title: 'Question',
//    message: 'Do you reall wanna do this?',
//    detail: 'It does not really matter',
//    checkboxLabel: 'Remember my answer',
//    checkboxChecked: true,
//};
//let response = dialog.showMessageBox(null, options, (response, checkboxChecked) => {
//    console.log(response);
//    console.log(checkboxChecked);
//});