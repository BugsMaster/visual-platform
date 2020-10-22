# visual-platform
	基于Vue的可视化大屏开发GUI框架 ------ CreatedBy ©漆黑小T

## 构建用于开发可视化大屏项目的自适应布局的GUI框架。 ##

>github仓库: [https://github.com/BugsMaster/visual-platform](https://github.com/BugsMaster/visual-platform)

开发环境

- Node.js: ^8.9.1
- Vue: ^2.6.10
- element-ui: ^2.11.1
- DataV（默认不引入）："@jiaminghi/data-view": "^2.9.4"
- sass-loader：^7.1.0

安装：

	$ npm install visual-platform

Notice：单元边框样式基于 [DataV](http://datav.jiaminghi.com/guide/borderBox.html "DataV") 二次封装，默认不引入（type=0），如果设置type=1、2...，则该值与DataV边框样式的Index值映射。
> 
>DataV地址： [http://datav.jiaminghi.com/guide/borderBox.html](http://datav.jiaminghi.com/guide/borderBox.html "DataV")

----------

### Config属性 ###

<table border="0" align="center" cellspacing="0" cellpadding="0">
    <tr>
        <th>Option</th>
		<th>Sub</th>
        <th>Description</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
    </tr>
 	<tr align="center">
		<td>bgcPath</td>
		<td>--</td>
        <td>背景图片地址</td>
        <td>String</td>
        <td>true</td>
		<td>''</td>
    </tr>
	<tr align="center">
        <td rowspan="5">title</td>
		<td>name</td>
		<td>标题</td>
        <td>String</td>
		<td>false</td>
        <td>'可视化平台'</td>
    </tr>
	<tr align="center">
		<td>top</td>
        <td>高度</td>
        <td>Number</td>
        <td>false</td>
		<td>0</td>
    </tr>
	<tr align="center">
		<td>size</td>
        <td>文字大小</td>
        <td>Number</td>
        <td>false</td>
		<td>16</td>
    </tr>
	<tr align="center">
		<td>color</td>
        <td>文字颜色</td>
        <td>String</td>
        <td>false</td>
		<td>'#fff'</td>
    </tr>
	<tr align="center">
		<td>timeShow</td>
        <td>显示时间戳</td>
        <td>Boolean</td>
        <td>false</td>
		<td>true</td>
    </tr>
    <tr align="center">
        <td>sectionArr</td>
		<td>--</td>
        <td>单元配置</td>
        <td>Array</td>
        <td>true</td>
		<td>[]</td>
    </tr>
</table>

### sectionArr 单元配置 ###

<table border="0" align="center" cellspacing="0" cellpadding="0">
	<tr>
        <th>Option</th>
		<th>Sub</th>
        <th>Description</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
    </tr>
	<tr align="center">
		<td>id</td>
		<td>--</td>
		<td>slot唯一标识</td>
        <td>String</td>
		<td>true</td>
        <td>0</td>
    </tr>
	<tr align="center">
		<td>width</td>
		<td>--</td>
		<td>宽度</td>
        <td>Number</td>
		<td>false</td>
        <td>500</td>
    </tr>
	<tr align="center">
		<td>height</td>
		<td>--</td>
		<td>高度</td>
        <td>Number</td>
		<td>false</td>
        <td>300</td>
    </tr>
	<tr align="center">
		<td>position</td>
		<td>x / y</td>
		<td>绝对定位</td>
        <td>Number</td>
		<td>false</td>
        <td>{ x:0,y:0 }</td>
    </tr>
	<tr align="center">
		<td rowspan="5">title</td>
		<td>name</td>
		<td>标题</td>
        <td>String</td>
		<td>false</td>
        <td>' '</td>
    </tr>
	<tr align="center">
		<td>size</td>
        <td>文字大小</td>
        <td>Number</td>
        <td>false</td>
		<td>16</td>
    </tr>
	<tr align="center">
		<td>color</td>
        <td>文字颜色</td>
        <td>String</td>
        <td>false</td>
		<td>'#fff'</td>
    </tr>
	<tr align="center">
		<td>position</td>
        <td>标题位置</td>
        <td>Object</td>
        <td>false</td>
		<td>{x:20,y:20}</td>
    </tr>
	<tr align="center">
		<td>isShow</td>
        <td>显示/隐藏</td>
        <td>Boolean</td>
        <td>false</td>
		<td>true</td>
    </tr>
	<tr align="center">
		<td rowspan="8">borderOptions</td>
		<td>type</td>
		<td>边框类型</td>
        <td>Number</td>
		<td>true</td>
        <td>0 (无边框，默认不引入DataV)，index和DataV对应</td>
    </tr>
	<tr align="center">
		<td>colorArr</td>
		<td>边框颜色</td>
        <td>Array</td>
		<td>false</td>
        <td>['red', 'green']</td>
    </tr>
	<tr align="center">
		<td>bgColor</td>
		<td>背景颜色</td>
        <td>String</td>
		<td>false</td>
        <td>'blue'</td>
    </tr>
	<tr align="center">
		<td>reverse</td>
		<td>反向</td>
        <td>Boolean</td>
        <td>false</td>
		<td>true</td>
    </tr>
	<tr align="center">
		<td>dur</td>
		<td>动画时长</td>
        <td>Number</td>
        <td>false</td>
		<td>3</td>
    </tr>
	<tr align="center">
		<td>title</td>
		<td>边框标题</td>
        <td>String</td>
        <td>false</td>
		<td>' '</td>
    </tr>
	<tr align="center">
		<td>titleWidth</td>
		<td>边框宽度</td>
        <td>Number</td>
        <td>false</td>
		<td>250</td>
    </tr>
</table>

控制台操作的回调函数：

	 保存配置：@saveConfig 参数为修改后的Config

	 清空配置：@clearConfig

默认配置：

    visualConfig ={
	    bgcPath:'/img/bg_index.jpg',//背景图在线地址 http://ids.nuctech.com/static/img/bg_index.9af20a2.jpg
	    title:{
	        name:'可视化平台',
	        top:0,//主title高度
	        size:16,//文字大小
	        color:'#fff',//文字颜色
	        timeShow:true//是否显示时间戳
	    },
	    sectionArr:[
	        {
				id:'partOne',
	           	title:{name:'one',size:16,position:{x:20,y:20},color:'#fff',isShow:true},//单元名设置
	           	width:500,
	           	height:300,
				//边框，type=0，代表无边框(默认不引入DataV)，type的index值和DataV对应
	           	borderOptions:{
	             	type:0,
	             	colorArr:"[]",
	             	bgColor:'blue',
	             	reverse:false,
	             	dur:3,
	             	title:'',
	             	titleWidth:250
	           	},
				//单元位置
	           	position:{
	             	x:0,
	             	y:0
	           	},
	        },
	    ]
	};
	
使用：

	组件：
	<VisualTemplate :option="mainConfig" @clearConfig="clearConfig" @saveConfig="saveConfig">
            <!-- 依次写出需要展示的单元，单元数（sectionArr.length）
            <div class="box" :slot="index" v-for="(item,index) in mainConfig.sectionArr">
                <span>{{item}}</span>   
            </div> -->
            <div slot="1">
                <!-- 第一个单元 -->
            </div>
            <div slot="2">
				<!-- 第一个单元 -->
            </div>
            <div slot="3">
				<!-- 第三个单元 -->
                <!--<dv-decoration-3 style="width:250px;height:30px;" /> DataV装饰器-->
            </div>
    </VisualTemplate>

	引入：
	import VisualTemplate, { visualConfig,visualSetOptions} from 'visual-platform'
	
	自定义配置：
		let	defConfig = {
               	title:{
                  timeShow:false  
                },
                sectionArr:[
                    {
						id:'1',//对应的slot标识
                        title:{name:'one',size:18,position:{x:20,y:20},color:'#fff',isShow:true},
                        width:500,
                        height:300,
                        position:{
                            x:0,
                            y:0
                        },
                    },
                    {
                        borderOptions:{
                            type:0
                        },
                        position:{
                            x:500,
                            y:0
                        },
                    },
                    {
                        title:{name:'eight',size:18,position:{x:20,y:20},color:'#fff',isShow:true},
                        borderOptions:{
                            type:0,//DataV border-11
                            title:'打豆豆',
                            titleWidth:200,
                        },
                        position:{
                            x:0,
                            y:220
                        },
                    },
                ]
            }
	调用 `visualSetOptions`方法，设置自定义参数
	this.mainConfig = visualSetOptions(this.defConfig);
	
	注：
		- 初始化设置参数时在Created生命周期内
		- visualConfig 可以导出完整的默认配置
		- 按`H`键隐藏/显示操作台(默认隐藏)
		- 按`E`键编辑模式切换

## 效果： ##

![](https://img2020.cnblogs.com/blog/1079640/202008/1079640-20200810164306795-1780057224.png)

> E-mail: lixingtan163@163.com