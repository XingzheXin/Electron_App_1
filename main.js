//const electron = require('electron');
const { app, BrowserWindow, Menu } = require('electron');
const { dialog } = require('electron');

const gotTheLock = app.requestSingleInstanceLock();

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
    mainWindow.setMenu(childWindowMenuBar);
    mainWindow.loadFile('./html/东风路周三周六班.html');
    mainWindow.webContents.openDevTools();
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
    mainWindow.setMenu(childWindowMenuBar);
    mainWindow.loadFile('./html/东风路新二（1）班.html');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

function insertDb() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        minHeight: 600,
        minWidth: 800
    });
    mainWindow.setMenu(childWindowMenuBar);
    mainWindow.loadFile('./html/insert.html');

    let mysql = require('mysql');
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Hbar^2/2m',
        database: 'walkerenglishdb',
    });

    let sql = `INSERT INTO parents (first_name, last_name)
               VALUES ("大智", "贺") `;

    let todo = ['Insert one parent into the parent table', false];

    connection.query(sql, todo, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
    });

    connection.end();
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}
