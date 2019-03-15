let map = new BMap.Map("container");
// 创建地图实例  
let point = new BMap.Point(114.420, 30.520);
// 创建点坐标  
map.centerAndZoom(point, 16);
// 初始化地图，设置中心点坐标和地图级别 

let geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function(r){
	if(this.getStatus() == BMAP_STATUS_SUCCESS){
		let mk = new BMap.Marker(r.point);
		map.addOverlay(mk);
		map.panTo(r.point);
		// alert('您的位置：'+r.point.lng+','+r.point.lat);
	}
	else {
		alert('failed'+this.getStatus());
	}
});

let lineNum = [1, 1, 1];
let buttons = document.getElementsByClassName('line-button');

const ClickButton = (n) => {
    // body...
    if (lineNum[n] === 1) {
	    lineNum[n] = 0;
    	buttons[n].classList.remove("active-button");
	} else {
		lineNum[n] = 1;
    	buttons[n].classList.add("active-button");
	}
   
}