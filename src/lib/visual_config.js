// 可视化配置项-----云臻智联出品 ©漆黑小T 
const visualConfig ={
    bgcPath:'/img/bg_index.jpg',
    title:{
        name:"可视化平台",
        size:16,
        color:'#fff'
    },
    sectionArr:[
        // {
            // title:{name:'one',size:18,position:{x:20,y:20},color:'#fff',isShow:true},
            // width:500,
            // height:300,
            // styleType:1,
            // position:{
            //     x:0,
            //     y:0
            // },
        // },
    ]
};
const visualSetOptions = function(deconfig,initconfig){
    for (const key in initconfig) {
        if (initconfig.hasOwnProperty(key)) {
            switch (key) {
                case 'bgcPath':
                    if(!deconfig.hasOwnProperty('bgcPath')) { deconfig.bgcPath = initconfig.bgcPath; };
                    break;
                case 'title':
                    if(deconfig.hasOwnProperty('title')){
                        if(!deconfig.title.hasOwnProperty('name')) { deconfig.title['name'] = initconfig.title['name']; };
                        if(!deconfig.title.hasOwnProperty('size')) { deconfig.title['size'] = initconfig.title['size']; };
                        if(!deconfig.title.hasOwnProperty('color')) { deconfig.title['color'] = initconfig.title['color']; };
                    }else{
                        deconfig.title = {
                            name:"可视化平台",
                            size:16,
                            color:'#fff'
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
                            if(!item.hasOwnProperty('styleType')){ item.styleType = 1 };
                            if(!item.hasOwnProperty('position')){ item.position = {x:20*index,y:20*index}};
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