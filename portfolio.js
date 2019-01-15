let partTwo_top = document.getElementById("partTwo-top");
let partTwo_bottom = document.getElementById("partTwo-bottom");
let partTwo_filter = document.getElementById("partTwo-filter");
let text = document.getElementsByTagName("textarea");
let input_title = document.getElementsByClassName("input-title");
let partOne_portrait = document.getElementById("partOne-portrait");
let partOne_add = document.getElementById("partOne-add");

/*点击头像显示文字*/
let index = 0;
let time;
let str = "--- is a beautiful and clever girl   ";
partOne_portrait.onmouseover = function(){
  if(partOne_add.innerText !== ""){
    partOne_add.innerText = " ";
  }
  time = setInterval(add,100);
};
function add(){
  partOne_add.style.borderRight = "1px solid #565656";
  partOne_add.innerText = str.substring(0,index++);
  setTimeout(function (){
    partOne_add.style.borderRight = "none"
  },180);
}
partOne_portrait.onmouseout = function(){
  partOne_add.style.borderRight = "none";
  index = 0;
  partOne_add.innerText = " ";
  clearInterval(time);
};

/*鼠标文字移动*/
partTwo_bottom.onmouseover = function () {
   partTwo_filter.style.backgroundColor = 'rgba(161, 157, 126, 0.5)';
};
partTwo_bottom.onmouseout =function () {
  partTwo_filter.style.backgroundColor = '';
};
partTwo_top.onmouseover = function () {
  partTwo_filter.style.backgroundColor = 'rgba(161, 157, 126, 0.5)';
};
partTwo_top.onmouseout =function () {
  partTwo_filter.style.backgroundColor = '';
};

/*输入框*/
function one() {
  if(text[0].value !== ""){
    input_title[0].style.transform = 'translateY(-30px)';
    input_title[0].style.visibility = 'visible';
    input_title[0].style.transition = '.3s';
  }
  else{
    input_title[0].style.transform = 'translateY(0)';
    input_title[0].style.visibility = 'hidden';
    input_title[0].style.transition = 'none';

  }
}
function two() {
  if(text[1].value !== ""){
    input_title[1].style.transform = 'translateY(-30px)';
    input_title[1].style.visibility = 'visible';
    input_title[1].style.transition = '.3s';
  }
  else{
    input_title[1].style.transform = 'translateY(0)';
    input_title[1].style.visibility = 'hidden';
    input_title[1].style.transition = 'none';

  }
}

/*页面滚动则到对应的导航*/
const  partOne = document.getElementById("content-partOne").offsetTop;
const  partTwo = document.getElementById("content-partTwo").offsetTop;
const  partThree = document.getElementById("content-partThree").offsetTop;
const  list = [partOne,partTwo,partThree];
function scrollFunc() {
  let pageTop = window.pageYOffset;
  if (pageTop === list[0]) {
    pageChange(2);
  }
  if (pageTop > (list[1] - (3.5 * 23))) {
    pageChange(1);
  }
  if (pageTop >= document.body.scrollHeight - document.body.clientHeight + 80) {
    pageChange(0);
  }
  /*导航栏进度条*/
  const nav_scorll = document.getElementById("nav-scroll");
  const winHeight = document.documentElement.clientHeight - 80;
  const pageHeight = document.body.scrollHeight - winHeight;
  nav_scorll.style.width = pageTop/pageHeight * 100 + "%";
}


function pageChange(num) {
  let navList = document.getElementById("content-nav-ul").children;
  for(let i =0;i<navList.length;i++){
    if(i !== num){
      navList[i].classList.remove("nav-change");
    }
    navList[num].classList.add("nav-change");
  }
}
/*导航对应页面的滚动*/
function pageGo(num) {
   window.scrollTo({
     top: list[num]- 3.5*23,
     behavior:"smooth"
   })
}

window.onload = function () {
  document.body.onscroll = scrollFunc;
  document.getElementById("three").onclick = ()=>pageGo(2);
  document.getElementById("two").onclick = ()=>pageGo(1);
  document.getElementById("one").onclick = ()=>pageGo(0);
  document.getElementById("email-button").onclick = sendEmail;
};

/*Email to*/
function sendEmail() {
  const oneText = document.getElementById("partThree-subject").value;
  const twoText = document.getElementById("partThree-content").value;
  const emailAddress = "mailto:3462823968@qq.com?subject="+oneText+"&body="+twoText;
  if(oneText === "" || twoText === ""){
    alert("你必须填完整内容");
    return;
  }

  const confirm = window.confirm("点击确认发邮件给我");
  if(confirm === true){
    window.location.href = emailAddress;
  }
}

