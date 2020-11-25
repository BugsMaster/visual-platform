// 可视化配置项----- ©漆黑小T 
const visualConfig ={
    bgcPath:'/img/bg_index.jpg',
    title:{
        name:"可视化平台",
        top:0,
        size:16,
        color:'#fff',
        timeShow:true
    },
    sectionArr:[
        {
            title:{name:'one',size:18,position:{x:20,y:20},color:'#fff',isShow:true},
            width:500,
            height:300,
            borderOptions:{
                type:1,
                colorArr:"['red', 'green']",
                bgColor:'blue',
                reverse:false,
                dur:3,
                title:'',
                titleWidth:250
            },
            position:{
                x:0,
                y:0,
                zIndex:1
            },
        }
    ]
};
function isRepeat(arr) {
    var hash = {};
    for (var i in arr) {
        if (hash[arr[i]]){
            return true; 
        }
        hash[arr[i]] = true;
    }
    return false;
}
const visualSetOptions = function(deconfig){
    let tempDeconfig = deconfig.sectionArr.map(item=>{
        if(!item.id) console.error('单元块ID缺失！');
        return item.id||0;
    });
    if(isRepeat(tempDeconfig)) return console.error('单元块ID必须唯一！');
    let initconfig = visualConfig;
    for (const key in initconfig) {
        if (initconfig.hasOwnProperty(key)) {
            switch (key) {
                case 'bgcPath':
                    if(!deconfig.hasOwnProperty('bgcPath')) { deconfig.bgcPath = initconfig.bgcPath; };
                    break;
                case 'title':
                    if(deconfig.hasOwnProperty('title')){
                        if(!deconfig.title.hasOwnProperty('name')) { deconfig.title['name'] = initconfig.title['name']; };
                        if(!deconfig.title.hasOwnProperty('top')) { deconfig.title['top'] = initconfig.title['top']; };
                        if(!deconfig.title.hasOwnProperty('size')) { deconfig.title['size'] = initconfig.title['size']; };
                        if(!deconfig.title.hasOwnProperty('color')) { deconfig.title['color'] = initconfig.title['color']; };
                        if(!deconfig.title.hasOwnProperty('timeShow')) { deconfig.title['timeShow'] = initconfig.title['timeShow']; };
                    }else{
                        deconfig.title = {
                            name:"可视化平台",
                            size:16,
                            color:'#fff',
                            timeShow:true
                        }
                    }
                    break;
                case 'sectionArr':
                    if(deconfig.sectionArr.length){
                        deconfig.sectionArr.forEach((item,index)=>{
                            if(item.hasOwnProperty('title')){
                                if(!item.title.hasOwnProperty('name')) { item.title['name'] = '' };
                                if(!item.title.hasOwnProperty('size')) { item.title['size'] = 16 };
                                if(!item.title.hasOwnProperty('color')) { item.title['color'] = '#fff' };
                                if(!item.title.hasOwnProperty('isShow')) { item.title['isShow'] = true };
                                if(!item.title.hasOwnProperty('position')) { item.title['position'] = {x:20,y:20} };
                            }else{
                                item.title = {
                                    name:'',size:16,position:{x:20,y:20},color:'#fff',isShow:false
                                }
                            }
                            if(!item.hasOwnProperty('width')){ item.width = 500 };
                            if(!item.hasOwnProperty('height')){ item.height = 300 };
                            if(!item.hasOwnProperty('position')){ 
                                item.position = {x:20*index,y:20*index,zIndex:1}
                            }else{
                                item.position.zIndex = item.position.zIndex||1;
                            }
                            // borderOptions
                            if(item.hasOwnProperty('borderOptions')){
                                if(!item.borderOptions.hasOwnProperty('type')) { item.borderOptions['type'] = 0};
                                if(!item.borderOptions.hasOwnProperty('colorArr')) { item.borderOptions['colorArr'] = ['steelblue'] };
                                if(!item.borderOptions.hasOwnProperty('bgColor')) { item.borderOptions['bgColor'] = 'rgba(25,25,40,.5)' };
                                if(!item.borderOptions.hasOwnProperty('reverse')) { item.borderOptions['reverse'] = false };
                                if(!item.borderOptions.hasOwnProperty('dur')) { item.borderOptions['dur'] = 3;};
                                if(!item.borderOptions.hasOwnProperty('title')) { item.borderOptions['title'] = '';};
                                if(!item.borderOptions.hasOwnProperty('titleWidth')) { item.borderOptions['titleWidth'] = 250;};
                            }else{
                                item.borderOptions = {
                                    type:0,
                                    colorArr:['steelblue'],
                                    bgColor:'rgba(25,25,40,.5)',
                                    reverse:false,
                                    dur:3,
                                    title:'',
                                    titleWidth:250
                                }
                            }
                        })
                    }
                    break;
                default:
                    break;
            }
        }
    }
    return deconfig;
}

export {
    visualConfig,
    visualSetOptions
}