var jsonModel = [
    "https://unpkg.com/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json"
    ];
    L2Dwidget.init({ 
        "model": { 
            "jsonPath": jsonModel[Math.floor(Math.random()*(jsonModel.length-1))],
            "scale": 1 
        }, 
        "display": { 
            "position": "right", // 位置left、right
            "width": 100, // 宽度
            "height": 200, // 高度
            "hOffset": -10, // 横向边距
            "vOffset": -50 // 众向边距
        }, 
        "mobile": { 
            "show": false, // 手机是否显示
            "scale": 0.5 // 移动设备上的缩放
        },
    });