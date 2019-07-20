//const electron = require('electron');
const { app, BrowserWindow, Menu } = require('electron');
const { dialog } = require('electron');

//const gotTheLock = app.requestSingleInstanceLock();

const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Select Journal File',
            },
            {
                label: 'Test Insert Into DB',
                click() {
                    insertDb();
                }
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
                                    createClassSigninWindow('东风路周三周六班');
                                }
                            },
                            {
                                label: '东风路新二（1）班',
                                click() {
                                    createClassSigninWindow('东风路新二（1）班');
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
        label: 'Actions',
        submenu: [
            {
                label: 'Quit',
                click() {
                    app.quit();
                }
            }
        ]
    }
]

const mainWindowMenuBar = Menu.buildFromTemplate(mainMenuTemplate);
const childWindowMenuBar = Menu.buildFromTemplate(childMenuTemplate);
var fs = require('fs');

let mainWindow;
let addWindow;

function createMainWindow() {
    //Create a new window
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        },
        minHeight: 600,
        minWidth: 800,
        backgroundColor: '#373947',
        
    })
    mainWindow.setMenu(mainWindowMenuBar);
    mainWindow.loadFile('./html/index.html');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null;
    })

}

app.on('ready', function () {
    createMainWindow();
    mainWindow.on('closed', function () {
        app.quit();
    })
});

/*
//Handle create Select Journal File Window
function createSelectJournalFileWindow() {
    mainWindow = new BrowserWindow({
        width: 1600,
        height: 1200,
        webPreferences: {
            nodeIntegration: true
        },
        minWidth: 800,
        minHeight: 600
    });

    mainWindow.setMenu(childWindowMenuBar);
    mainWindow.loadFile('./html/addWindow.html');
    mainWindow.webContents.openDevTools();
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
*/

function createClassSigninWindow(classname) {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        },
        minWidth: 800,
        minHeight: 600
    });
    mainWindow.setMenu(childWindowMenuBar);
    var html_path = './html/' + classname + '.html';
    mainWindow.loadFile(html_path);
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}