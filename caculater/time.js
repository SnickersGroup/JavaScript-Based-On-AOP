var numresult; 
var str; 
function onclicknum(nums) { 
str = document.getElementById("nummessege"); 
str.value = str.value + nums; 
} 
function onclickclear() { 
str = document.getElementById("nummessege"); 
str.value = ""; 
} 
function onclickresult() { 
str = document.getElementById("nummessege"); 
numresult = eval(str.value);
var i=0;
for(var j=0;j<1000000;j++)
i++; 
str.value = numresult; 
} 
		Function.prototype.before=function(func){//advice:before
	var self=this;
		return function(){
		if(func.apply(this,arguments)===false)
		{	
			return false;
		}
		return self.apply(this,arguments);	
		}
 }; 
		Function.prototype.after=function(func){//advice:after
		var self=this;
		return function(){
		var te=self.apply(this,arguments);
		if(te===false)
		{	
			return false;
		}
		func.apply(this,arguments);
		return te;
		}
 }; 
	
  $(document).ready(function(){ 
	var beforetime;
	onclickresult=onclickresult.before(function(){//设置切点
	beforetime = new Date().getTime();// 记录当前时间
	}).after(function(){
	var aftertime;
	aftertime=new Date().getTime() - beforetime;
	alert(aftertime + "ms");// 得到执行时间
        }); 
    }); 