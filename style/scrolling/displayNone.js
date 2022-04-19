window.addEventListener('scroll' , ()=>{ 
   let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
//document.documentElement.clientHeight =817 
let headDisplayNone = document.getElementsByClassName('headDisplayNone');
let head1 = headDisplayNone[0]; 
    // если пользователь прокрутил достаточно далеко (< 100px до конца)
    if (windowRelativeBottom < document.documentElement.clientHeight + 500) {
      // добавим больше данных
      head1.style.display = 'block'
   }

   if (windowRelativeBottom > document.documentElement.clientHeight + 700) {
      // добавим больше данных
      head1.style.display = 'none';

   }
})

