/*window.onload = function(){};*/

    var images = ['url(../kaien_kihon_imitate/image/cat.jpg) ',
    'url(image/hato.jpg)', 
    'url(image/inko.jpg)', 
    'url(image/sheep.jpg', 
    'url(image/carp.jpg)'
    ];

    var target = document.getElementById('slide');
    var sp_target = document.getElementById('sp_slide');
    /*var right = document.getElementById('right');
    var left = document.getElementById('left');
    var right_btn = document.getElementById('right');
    var left_btn = document.getElementById('left');*/


    var count = 0;

    function change() {
        target.style.backgroundImage = images[count];
        sp_target.style.backgroundImage = images[count];
    }


    function Next() {
        if(count == images.length - 1){
            count = 0;
        } else {
            count++;
        }
        change();
    }

    function Back() {
        if(count == 0){
            count = images.length - 1
        } else {
            count--
        }
        change();
    }

    /*
    right_btn.addEventListener('click', Next);

    left_btn.addEventListener   ('click', Back);



    /*
    function goNext(){
        if(count == images.length - 1){
            count = 0;
        } else {
            count++;
        }
        change();
    }

    function goBack(){
        if(count == 0){
            count = images.length - 1;
        } else {
            count--;
        }
        change();
    }

    right.addEventListener('click',goNext,false);
    left.addEventListener('click',goBack,false);*/
