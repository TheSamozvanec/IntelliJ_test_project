'use strict'
// canvas detected
let canvas=document.querySelector('canvas'),
	ctx = canvas.getContext('2d'),
	height=canvas.height, width=canvas.width;
//  objects
let star1 ={
	catalog:[
		{x:getX(80,270), y:getY(80,270), z:0}, //0
		{x:getX(30,306), y:getY(30,306), z:0}, //1
		{x:getX(80,342), y:getY(80,342), z:0}, //2
		{x:getX(30,18), y:getY(30,18), z:0}, //3
		{x:getX(80,54), y:getY(80,54), z:0}, //4
		{x:getX(30,90), y:getY(30,90), z:0}, //5
		{x:getX(80,126), y:getY(80,126), z:0}, //6
		{x:getX(30,162), y:getY(30,162), z:0}, //7
		{x:getX(80,198), y:getY(80,198), z:0}, //8
		{x:getX(30,234), y:getY(30,234), z:0}, //9
		{x:0,y:0,z:15}, //10
		{x:0,y:0,z:-15}, //11
	],
	path:[
		{point:0, line:false}, // звезда
		{point:1, line:true},
		{point:2, line:true},
		{point:3, line:true},
		{point:4, line:true},
		{point:5, line:true},
		{point:6, line:true},
		{point:7, line:true},
		{point:8, line:true},
		{point:9, line:true},
		{point:0, line:true},

		{point:10, line:true},
		{point:1, line:true},

		{point:2, line:false},
		{point:10, line:true},
		{point:3, line:true},

		{point:4, line:false},
		{point:10, line:true},
		{point:5, line:true},

		{point:6, line:false},
		{point:10, line:true},
		{point:7, line:true},

		{point:8, line:false},
		{point:10, line:true},
		{point:9, line:true,f:'red'},

		{point:0, line:false},
		{point:11, line:true},
		{point:1, line:true},

		{point:2, line:false},
		{point:11, line:true},
		{point:3, line:true},

		{point:4, line:false},
		{point:11, line:true},
		{point:5, line:true},

		{point:6, line:false},
		{point:11, line:true},
		{point:7, line:true},

		{point:8, line:false},
		{point:11, line:true},
		{point:9, line:true},

	],
	real:{xReal:width/3, yReal:height/5, zReal:80, degXY:0, degXZ:0, degYZ:0},
	behavior:{vx:3, vy:1, vz:10, DXY:rad(2), DXZ:rad(0), DYZ:rad(0.3)},
	nextStep: function(width,height){
		this.real.xReal=this.real.xReal+this.behavior.vx;
		this.real.yReal=this.real.yReal+this.behavior.vy;
		this.real.zReal=this.real.zReal+this.behavior.vz;
		this.real.degXY=this.real.degXY+this.behavior.DXY;
		this.real.degXZ=this.real.degXZ+this.behavior.DXZ;
		this.real.degYZ=this.real.degYZ+this.behavior.DYZ;
		if (this.real.xReal>(width-30) || this.real.xReal<30) this.behavior.vx=-this.behavior.vx;
		if (this.real.yReal>(height-30) || this.real.yReal<30) this.behavior.vy=-this.behavior.vy;
		if (this.real.zReal>10000 || this.real.zReal<0) this.behavior.vz=-this.behavior.vz;
	}
},
star2 ={
	catalog:[
		// внешний квадрат
		{x:getX(100,270), y:getY(100,270), z:0}, //0
		{x:getX(30,306), y:getY(30,306), z:0}, //1
		{x:getX(100,342), y:getY(100,342), z:0}, //2
		{x:getX(30,18), y:getY(30,18), z:0}, //3
		{x:getX(100,54), y:getY(100,54), z:0}, //4
		{x:getX(30,90), y:getY(30,90), z:0}, //5
		{x:getX(100,126), y:getY(100,126), z:0}, //6
		{x:getX(30,162), y:getY(30,162), z:0}, //7
		{x:getX(100,198), y:getY(100,198), z:0}, //8
		{x:getX(30,234), y:getY(30,234), z:0}, //9
		{x:0,y:0,z:15}, //10
		{x:0,y:0,z:-15}, //11
	],
	path:[
		{point:0, line:false}, // звезда
		{point:1, line:true},
		{point:2, line:true},
		{point:3, line:true},
		{point:4, line:true},
		{point:5, line:true},
		{point:6, line:true},
		{point:7, line:true},
		{point:8, line:true},
		{point:9, line:true},
		{point:0, line:true},

		{point:10, line:true},
		{point:1, line:true},

		{point:2, line:false},
		{point:10, line:true},
		{point:3, line:true},

		{point:4, line:false},
		{point:10, line:true},
		{point:5, line:true},

		{point:6, line:false},
		{point:10, line:true},
		{point:7, line:true},

		{point:8, line:false},
		{point:10, line:true},
		{point:9, line:true},

		{point:0, line:false},
		{point:11, line:true},
		{point:1, line:true},

		{point:2, line:false},
		{point:11, line:true},
		{point:3, line:true},

		{point:4, line:false},
		{point:11, line:true},
		{point:5, line:true},

		{point:6, line:false},
		{point:11, line:true},
		{point:7, line:true},

		{point:8, line:false},
		{point:11, line:true},
		{point:9, line:true, f:'blue'},

	],
	real:{xReal:width*2/3, yReal:height*4/5, zReal:30, degXY:0, degXZ:0, degYZ:0},
	behavior:{vx:0.5, vy:-0.2, vz:5, DXY:rad(1), DXZ:rad(0.03), DYZ:rad(0.01)},
	nextStep: function(width,height){
		this.real.xReal=this.real.xReal+this.behavior.vx;
		this.real.yReal=this.real.yReal+this.behavior.vy;
		this.real.zReal=this.real.zReal+this.behavior.vz;
		this.real.degXY=this.real.degXY+this.behavior.DXY;
		this.real.degXZ=this.real.degXZ+this.behavior.DXZ;
		this.real.degYZ=this.real.degYZ+this.behavior.DYZ;
		if (this.real.xReal>(width-30) || this.real.xReal<30) this.behavior.vx=-this.behavior.vx;
		if (this.real.yReal>(height-30) || this.real.yReal<30) this.behavior.vy=-this.behavior.vy;
		if (this.real.zReal>10000 || this.real.zReal<0) this.behavior.vz=-this.behavior.vz;
	}
},
cube1 ={
	catalog:[
		// внешний квадрат
		{x:-50, y:-50, z:-50}, //0
		{x:50, y:-50, z:-50}, //1
		{x:50, y:50, z:-50}, //2 
		{x:-50, y:50, z:-50}, //3
		// внутренний квадрат
		{x:-50, y:-50, z:50}, //4
		{x:50, y:-50, z:50}, //5
		{x:50, y:50, z:50}, //6
		{x:-50, y:50, z:50}, //7
	],
	path:[
		{point:0, line:false}, // старт пера
		{point:1, line:true}, // внешний квадрат
		{point:2, line:true},
		{point:3, line:true, f:'yellow'}, 
		{point:0, line:true}, 
		{point:4, line:true}, 
		{point:1, line:false}, 
		{point:5, line:true}, 
		{point:2, line:false}, 
		{point:6, line:true}, 
		{point:3, line:false}, 
		{point:7, line:true}, 
		{point:4, line:true}, 
		{point:5, line:true},
		{point:6, line:true},
		{point:7, line:true},
	],
	real:{xReal:width/2, yReal:height/2, zReal:80, degXY:0, degXZ:0, degYZ:0},
	behavior:{vx:3, vy:2, vz:30, DXY:rad(3), DXZ:rad(0), DYZ:rad(2)},
	nextStep: function(width,height){
		this.real.xReal=this.real.xReal+this.behavior.vx;
		this.real.yReal=this.real.yReal+this.behavior.vy;
		this.real.zReal=this.real.zReal+this.behavior.vz;
		this.real.degXY=this.real.degXY+this.behavior.DXY;
		this.real.degXZ=this.real.degXZ+this.behavior.DXZ;
		this.real.degYZ=this.real.degYZ+this.behavior.DYZ;
		if (this.real.xReal>(width-30) || this.real.xReal<30) this.behavior.vx=-this.behavior.vx;
		if (this.real.yReal>(height-30) || this.real.yReal<30) this.behavior.vy=-this.behavior.vy;
		if (this.real.zReal>10000 || this.real.zReal<0) this.behavior.vz=-this.behavior.vz;
	}
},
cube2 ={
	catalog:[
		// внешний квадрат
		{x:-80, y:-50, z:-50}, //0
		{x:80, y:-50, z:-50}, //1
		{x:80, y:50, z:-50}, //2 
		{x:-80, y:50, z:-50}, //3
		// внутренний квадрат
		{x:-80, y:-50, z:50}, //4
		{x:80, y:-50, z:50}, //5
		{x:80, y:50, z:50}, //6
		{x:-80, y:50, z:50}, //7
	],
	path:[
		{point:0, line:false}, // старт пера
		{point:1, line:true}, // внешний квадрат
		{point:2, line:true},
		{point:3, line:true}, 
		{point:0, line:true}, 
		{point:4, line:true,f:"#000"}, 
		{point:1, line:false}, 
		{point:5, line:true}, 
		{point:2, line:false}, 
		{point:6, line:true}, 
		{point:3, line:false}, 
		{point:7, line:true}, 
		{point:4, line:true}, 
		{point:5, line:true},
		{point:6, line:true},
		{point:7, line:true},
	],
	real:{xReal:width/6, yReal:height*4/5, zReal:30, degXY:0, degXZ:0, degYZ:0},
	behavior:{vx:0.05, vy:-0.5, vz:1, DXY:rad(0.01), DXZ:rad(1), DYZ:rad(0.02)},
	nextStep: function(width,height){
		this.real.xReal=this.real.xReal+this.behavior.vx;
		this.real.yReal=this.real.yReal+this.behavior.vy;
		this.real.zReal=this.real.zReal+this.behavior.vz;
		this.real.degXY=this.real.degXY+this.behavior.DXY;
		this.real.degXZ=this.real.degXZ+this.behavior.DXZ;
		this.real.degYZ=this.real.degYZ+this.behavior.DYZ;
		if (this.real.xReal>(width-30) || this.real.xReal<30) this.behavior.vx=-this.behavior.vx;
		if (this.real.yReal>(height-30) || this.real.yReal<30) this.behavior.vy=-this.behavior.vy;
		if (this.real.zReal>10000 || this.real.zReal<0) this.behavior.vz=-this.behavior.vz;
	}
},
stone = {
	catalog:[
		// внешний квадрат
		{x:-100, y:-100, z:0}, //0
		{x:100, y:-100, z:0}, //1
		{x:100, y:100, z:0}, //2 
		{x:-100, y:100, z:0}, //3
		// внутренний квадрат
		{x:0, y:0, z:50}, //4
		{x:0, y:0, z:-50}, //5
	],
	path:[
		{point:0, line:false}, // старт пера
		{point:1, line:true}, // внешний квадрат
		{point:2, line:true},
		{point:3, line:true}, 
		{point:0, line:true},

		{point:4, line:true}, 
		{point:1, line:true},
		{point:2, line:false},
		
		{point:4, line:true}, 
		{point:3, line:true, f:'green'},
		{point:0, line:false},

		{point:5, line:true}, 
		{point:1, line:true},
		{point:2, line:false},
		
		{point:5, line:true}, 
		{point:3, line:true},
		{point:5, line:false},

		{point:4, line:true},
	],
	real:{xReal:width/10, yReal:height/2, zReal:8000, degXY:0, degXZ:0, degYZ:0},
	behavior:{vx:3, vy:0, vz:0.5, DXY:rad(1), DXZ:rad(0), DYZ:rad(0.1)},
	nextStep: function(width,height){
		this.real.xReal=this.real.xReal+this.behavior.vx;
		this.real.yReal=this.real.yReal+this.behavior.vy;
		this.real.zReal=this.real.zReal+this.behavior.vz;
		this.real.degXY=this.real.degXY+this.behavior.DXY;
		this.real.degXZ=this.real.degXZ+this.behavior.DXZ;
		this.real.degYZ=this.real.degYZ+this.behavior.DYZ;
		if (this.real.xReal>(width-30) || this.real.xReal<30) this.behavior.vx=-this.behavior.vx;
		if (this.real.yReal>(height-30) || this.real.yReal<30) this.behavior.vy=-this.behavior.vy;
		if (this.real.zReal>10000 || this.real.zReal<0) this.behavior.vz=-this.behavior.vz;
	}
},
room ={
	catalog:[
		// внешний квадрат
		{x:0, y:0, z:10000}, //0
		{x:width, y:0, z:10000}, //1
		{x:width, y:height, z:10000}, //2 
		{x:0, y:height, z:10000}, //3
		// внутренний квадрат
		{x:0, y:0, z:0}, //4
		{x:width, y:0, z:0}, //5
		{x:width, y:height, z:0}, //6
		{x:0, y:height, z:0}, //7
	],
	path:[
		{point:0, line:false}, // старт пера
		{point:1, line:true}, // внешний квадрат
		{point:2, line:true},
		{point:3, line:true}, 
		{point:0, line:true, f:'rgb(144, 144, 184)'}, 
		{point:0, line:false},
		{point:4, line:true},
		{point:5, line:true},
		{point:1, line:true, f:"aqua"},
		{point:2, line:false},
		{point:6, line:true},
		{point:7, line:true},
		{point:3, line:true, f:'slategray'}
	],
	real:{xReal:0, yReal:0, zReal:0, degXY:0, degXZ:0, degYZ:0},
	behavior:{vx:0, vy:0, vz:0, DXY:rad(0), DXZ:rad(0), DYZ:rad(0)},
	nextStep: function(width,height){
		return
	}
},
collection=[room, star1, star2, cube1, cube2, stone];
//_________________________________________________________________________________


let k=1500, k0=1;
function getX(l,deg){return Math.cos(rad(deg))*l}
function getY(l,deg){return Math.sin(rad(deg))*l}
function rad(deg){return deg*Math.PI/180}
function print(obj, ctx){
	let {catalog, path, real}=obj;
	ctx.beginPath();
	for (let {line, point,f} of path){
		let x=catalog[point].x-width/2,
			y=catalog[point].y-height/2,
			z=catalog[point].z;
			x=(x*k0)/(k0+z*(1/k))+width/2;
			y=(y*k0)/(k0+z*(1/k))+height/2
		if (line) {ctx.lineTo(x,y)} else {ctx.moveTo(x,y)}
		if (f) {
			ctx.fillStyle=f;
			ctx.fill();
			ctx.stroke();
			ctx.beginPath();
		}
	}
	ctx.stroke();	
}
function realFigure(obj){
	let {catalog, real, path}=obj,
		{xReal, yReal, zReal, degXY, degXZ, degYZ}=real,
		res={catalog:[], path:[], real:{}};
	for (let {x, y, z, f} of catalog){
		// XY
		let lXY = Math.sqrt(x**2+y**2),
			csXY = x/lXY,
			degXY0 = !isNaN(csXY)? Math.acos(csXY):0,
			DXY= y<0? degXY-degXY0 : degXY+degXY0;
			x=Math.cos(DXY)*lXY; y=Math.sin(DXY)*lXY;
		// XZ
		let lXZ=Math.sqrt(x**2+z**2),
			csXZ = x/lXZ,
			degXZ0 = !isNaN(csXZ)? Math.acos(csXZ):0,
			DXZ = z<0? degXZ-degXZ0 : degXZ + degXZ0;
			x=Math.cos(DXZ)*lXZ; z=Math.sin(DXZ)*lXZ;
		// YZ
		let lYZ=Math.sqrt(y**2+z**2),
			csYZ = z/lYZ,
			degYZ0 = !isNaN(csYZ)? Math.acos(csYZ):0,
			DYZ = y<0? degYZ-degYZ0 : degYZ + degYZ0;
			z=Math.cos(DYZ)*lYZ; y=Math.sin(DYZ)*lYZ;
		// results
		x=x+xReal;y=y+yReal;z=z+zReal;
		res.catalog.push({x, y, z})
	}
	res.path=path;
	return res;
}
function render(collection, ctx){
	ctx.clearRect(0,0,width,height);
for (let object of collection){
	print(realFigure(object),ctx);
	object.nextStep(width,height);	
}

}
setInterval(()=>render(collection,ctx), 10);

