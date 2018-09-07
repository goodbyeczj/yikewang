
function register()
{
var a=form1.name.value;
var b=form1.password1.value;
var c=form1.password2.value;
var d=form1.address.value;
var n=1;
var m=d.indexOf("@");
if(a.length==0)
{
alert("用户名不能为空");
n=0;
}
else if(a.length<6||a.length>20)
{
alert("用户名必须大于6个字符小于20个字符");
n=0;
}
if(b.length==0)
{
alert("密码不能为空");
n=0;
}
else if(a==b)
{
alert("用户名和密码不能相同");
n=0;
}
if(c.length==0)
{
alert("确认密码不能为空");
n=0;
}
else if(b!=c)
{
alert("确认密码和密码不一致");
n=0;
}
if(d.length==0)
{
alert("邮箱不能为空");
n=0;
}
if(m==-1)
{
alert("邮箱格式不正确");
n=0;
}
if(n==1)alert("注册成功");
}
