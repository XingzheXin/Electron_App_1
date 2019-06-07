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

exports.getMainMenuTemplate = function () {
    return mainMenuTemplate;
};
exports.getChildMenuTemplate = function () {
    return childMenuTemplate;
};