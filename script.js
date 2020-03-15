function func(){ //рандомное перемещение картинок
var k, j, n, d, m, a;
a=document.getElementById("pictures").getElementsByTagName("img");
j=k=a.length;
m=[];
while(k--){m.push(a[k].src)};
k=j;
while(k--){
n=Math.floor(Math.random()*(k+1));
d=m[n];
m[n]=m[k];
m[k]=d};
k=j;
while(k--){a[k].src=m[k]};
};

const PICT = document.getElementById('pictures'); //рамка вокруг иконок портфолио
PICT.addEventListener('click', (event) => {
PICT.querySelectorAll('img').forEach(el => el.classList.remove('img_pic_active'));
event.target.classList.add('img_pic_active');
});

const MENU = document.getElementById('menu'); //активные пункты главная
MENU.addEventListener('click', (event) => {
MENU.querySelectorAll('li').forEach(el => el.classList.remove('nav_active'));
event.target.classList.add('nav_active');
});

const anchors = document.querySelectorAll('a[href*="#"]') //якорь по странице
for (let anchor of anchors) {
anchor.addEventListener('click', function (e) {
e.preventDefault()
const blockID = anchor.getAttribute('href').substr(1)
document.getElementById(blockID).scrollIntoView({
behavior: 'smooth',
block: 'start'
})})};

const TAGS = document.getElementById('tags'); //активные пункты портфолио
TAGS.addEventListener('click', (event) => {
TAGS.querySelectorAll('button').forEach(el => el.classList.remove('tags_active'));
event.target.classList.add('tags_active');
});

function validate_form(){ //валидация формы
  //Считаем значения из полей name и email в переменные x и y
  var x=document.forms["form"]["name"].value;
  var y=document.forms["form"]["email"].value;
  // var q=document.forms["form"]["subject"].value;
  // var w=document.forms["form"]["describe"].value;
  //Если поле name пустое выведем сообщение и предотвратим отправку формы
  if (x.length==0){
  return false;
  }
  //Если поле email пустое выведем сообщение и предотвратим отправку формы
  if (y.length==0){
  return false;
  }
  // if (q.length==0){
  // return false;
  // }
  // if (w.length==0){
  // return false;
  // }
  //Проверим содержит ли значение введенное в поле email символы @ и .
  at=y.indexOf("@");
  dot=y.indexOf(".");
  //Если поле не содержит эти символы знач email введен не верно
  if (at<1 || dot <1){
  return false;
  }
   else {
  const SUBMIT = document.getElementById('submit'); // отправка формы subject и describe
  SUBMIT.addEventListener('click', () => {
  const subject = document.getElementById('subject').value.toString();
  if (document.getElementById("subject").value == ''){
  document.getElementById('result').innerText="Без темы";}
  else {
  document.getElementById('result').innerText=subject;}

  const describe = document.getElementById('describe').value.toString();
  if (document.getElementById("describe").value == ''){
    document.getElementById('result_desc').innerText="Без описания";}
    else {
  document.getElementById('result_desc').innerText=describe;}
  document.getElementById('message_block').classList.remove('hidden');
    });}
  }

const CLOSE = document.getElementById('close_button'); //закрыть окошко
CLOSE.addEventListener('click', () => {
  document.getElementById('result').innerText="";
  document.getElementById('result_desc').innerText="";
  document.getElementById('message_block').classList.add('hidden');
});

/* Индекс слайда по умолчанию */  //слайдер
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

var pressed=0;  //фон
function fon()
{
document.getElementById('but').value = ++pressed;
if (pressed%2!=0)  {
document.getElementById('slider').style.backgroundColor='#648bf0';}
if (pressed%2==0)  {
document.getElementById('slider').style.backgroundColor='#f06c64';}
}

var vert=0;
const PHOTO = document.getElementById('photo'); // накладывание черного экрана
PHOTO.addEventListener('click', () => {
document.getElementsByClassName('tel1').value = ++vert;
if (vert%2!=0) {
document.getElementById('photo1').classList.remove('hidden');}
if (vert%2==0) {
document.getElementById('photo1').classList.add('hidden');}
});

var horiz=0;
const PHOTOO = document.getElementById('photo_'); // накладывание черного экрана
PHOTOO.addEventListener('click', () => {
document.getElementsByClassName('tel2').value = ++horiz;
if (horiz%2!=0) {
document.getElementById('photo1_').classList.remove('hidden');}
if (horiz%2==0) {
document.getElementById('photo1_').classList.add('hidden');}
});
