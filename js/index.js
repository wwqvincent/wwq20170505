$("#mainTop #p1").click(function(){
	$("#mainTop #p1")[0].style.cssText="width: 232px;float: left;text-align: center;font-size: 21px;line-height: 44px;position: relative;background: #666666;color: #FFFFFF;";
	$("#mainTop #p1 span")[0].style.cssText="position: absolute;top:44px;left:103px;border: 10px solid transparent;border-top: 10px solid #666666;border-bottom: 0px;";
	$("#mainTop #p2")[0].style.cssText="width: 232px;float: left;text-align: center;font-size: 21px;line-height: 44px;position: relative;color: #666666;";
	$("#mainTop #p2 span")[0].style.cssText="position: absolute;top:44px;left:103px;border: 10px solid transparent;border-top: 10px solid #666666;border-bottom: 0px;display: none;";
    $("#content #contentkuang .div1")[0].style.cssText="display: block;"
    $("#content #contentkuang .div2")[0].style.cssText="display: none;"
})

$("#mainTop #p2").click(function(){
	$("#mainTop #p2")[0].style.cssText="width: 232px;float: left;text-align: center;font-size: 21px;line-height: 44px;position: relative;background: #666666;color: #FFFFFF;";
	$("#mainTop #p2 span")[0].style.cssText="position: absolute;top:44px;left:103px;border: 10px solid transparent;border-top: 10px solid #666666;border-bottom: 0px;";
	$("#mainTop #p1")[0].style.cssText="width: 232px;float: left;text-align: center;font-size: 21px;line-height: 44px;position: relative;color: #666666;";
	$("#mainTop #p1 span")[0].style.cssText="position: absolute;top:44px;left:103px;border: 10px solid transparent;border-top: 10px solid #666666;border-bottom: 0px;display: none;";
    $("#content #contentkuang .div2")[0].style.cssText="display: block;"
    $("#content #contentkuang .div1")[0].style.cssText="display: none;"
})

window.onload=function(){
	$("#mainTop #p1")[0].style.cssText="width: 232px;float: left;text-align: center;font-size: 21px;line-height: 44px;position: relative;background: #666666;color: #FFFFFF;";
	$("#mainTop #p1 span")[0].style.cssText="position: absolute;top:44px;left:103px;border: 10px solid transparent;border-top: 10px solid #666666;border-bottom: 0px;";
	$("#mainTop #p2")[0].style.cssText="width: 232px;float: left;text-align: center;font-size: 21px;line-height: 44px;position: relative;color: #666666;";
	$("#mainTop #p2 span")[0].style.cssText="position: absolute;top:44px;left:103px;border: 10px solid transparent;border-top: 10px solid #666666;border-bottom: 0px;display: none;";
    $("#content #contentkuang .div1")[0].style.cssText="display: block;"
    $("#content #contentkuang .div2")[0].style.cssText="display: none;"
}