    Function.prototype.before=function(func){
	    var self=this;
		return function(){
		if(func.apply(this,arguments)===false)
		{	
			return false;
		}
		return self.apply(this,arguments);	
		}
 
    }; 
	Function.prototype.after=function(func){
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
    function doCircle(){// 事件函数，指定次数的循环
 
        var total = 0; 
        for(var i=1;i<=10000000;i++){ 
            total += 1; 
        } 
		for(var i=1;i<=10000000;i++){ 
            total -= 1; 
        } 
		//alert(total);
                
    } 
	
    $(document).ready(function(){ 
	    var beforetime;
	    doCircle=doCircle.before(function(){//设置切点
	        beforetime = new Date().getTime();// 记录当前时间
	    }).after(function(){
	        alert((new Date().getTime() - beforetime) + " ms");	// 得到执行时间
        }); 
    }); 