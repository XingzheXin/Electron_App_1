//const electron = require('electron');
const { app, BrowserWindow, Menu } = require('electron');
const { dialog } = require('electron');

const mainWindowMenuBar = Menu.buildFromTemplate(mainMenuTemplate);
const childWindowMenuBar = Menu.buildFromTemplate(childMenuTemplate);
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
    mainWindow.setMenu(mainWindowMenuBar);
    mainWindow.loadFile('index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    })

}

app.on('ready', function () {

    createWindow();

    // Build menu from template
    //const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    mainWindow.on('closed', function () {
        app.quit();
    })

    // Insert the Menu
    //Menu.setApplicationMenu(mainMenu);

});

//Handle create Select Journal File Window
function createSelectJournalFileWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        minHeight: 600,
        minWidth: 800
    });

    mainMenu.setMenu(childWindowMenuBar);
    mainWindow.loadFile('addWindow.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

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

function createDongFengLuZhouSanZhouLiuBanWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        minHeight: 600,
        minWidth: 800
    });
    mainMenu.setMenu(childWindowMenuBar);
    mainWindow.loadFile('东风路周三周六班.html');
    mainWindow.setApplicationMenu(null);
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

function createDongFengLuXinErYiBanWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        minHeight: 600,
        minWidth: 800
    });
    mainMenu.setMenu(childWindowMenuBar);
    mainWindow.loadFile('东风路新二（1）班.html');
    mainWindow.setApplicationMenu(null);
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Select Journal File',
            },
            {
                label: 'Choose Class',
                submenu: [
                    {
                        label: '东风路',
                        submenu: [
                            {
                                label: '东风路周三周六班',
                                click() {
                                    createDongFengLuZhouSanZhouLiuBanWindow();
                                }
                            },
                            {
                                label: '东风路新二（1）班',
                                click() {
                                    createDongFengLuXinErYiBanWindow();
                                }
                            },
                            {
                                label: '东风路新二（2）班',
                            },
                            {
                                label: '东风路小升初冲刺班',
                            },
                        ]
                    },
                    {
                        label: '工人路',
                        submenu: [
                            {
                                label: '工人路新一（2）班',
                            },
                            {
                                label: '工人路周三周日班',
                            },
                            {
                                label: '工人路周四周六班',
                            },
                            {
                                label: '工人路周五晚',
                            },
                        ]
                    },
                    {
                        label: '纬二路',
                        submenu: [
                            {
                                label: '纬二路周一周日班',
                            },
                            {
                                label: '纬二路周二周日班',
                            },
                            {
                                label: '纬二路周五周日班',
                            },
                            {
                                label: '纬二路幼儿班',
                            },
                        ]
                    },
                    {
                        label: '高新区',
                        submenu: [
                            {
                                label: '高新区周三周日班',
                            },
                            {
                                label: '高新区周日一次班',
                            },
                            {
                                label: '高新区幼儿班',
                            },
                        ]
                    },
                    {
                        label: '郑东新区',
                        submenu: [
                            {
                                label: '郑东新区新一（1）班',
                            },
                        ]
                    },
                    {
                        label: '小课',
                        submenu: [
                            {
                                label: '刘佳臻一对一',
                            },
                            {
                                label: '王博睿刘怡廷一对二',
                            },
                            {
                                label: '工人路一对三',
                            },
                        ]
                    },
                ]
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

const childMenuTemplate = [
    {
        label: Quit,
        click() {
            app.quit;
        }
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