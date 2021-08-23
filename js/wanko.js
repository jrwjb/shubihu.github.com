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
            "width": 120, // 宽度
            "height": 220, // 高度
            "hOffset": 0, // 横向边距
            "vOffset": 0 // 众向边距
        }, 
        "mobile": { 
            "show": true // 手机是否显示
        },
    });