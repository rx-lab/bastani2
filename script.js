$(document).ready(function () {
  // آرایه بستنی‌ها
  const icecreams = [
    {
      img: "img/ice2.png",
      title: "بستنی چوبی دبل شکلات فوردو",
      desc: "بستنی چوبی دبل شکلات فوردو، تجربه‌ای از لذت بی‌پایان طعم شکلات خالص..."
    },
    {
      img: "img/xc.png",
      title: "بستنی میوه‌های قرمز فوردو",
      desc: "بستنی فروتیس میوه‌های قرمز، با بیس وانیلی و روکش میوه‌های تازه ترکیبی از طراوت و شیرینی است."
    },
    {
      img: "img/ice4.png",
      title: "بستنی دولایه شاتوت شکلات",
      desc: "بستنی دولایه شاتوت شکلات با بافت کرمی و روکشی از شکلات و شاتوت، حس خنکی و تازگی تابستان را می‌دهد."
    },
    {
      img: "img/ice5.png",
      title: "بستنی ناتر بادام شکلات فوردو",
      desc: "بستنی بادام شکلات ناتر فوردو با تکه‌های بادام و غلات درون روکش شکلاتی، طعمی خاص و متفاوت دارد."
    }
  ];

  let counter = 0;

  // تابع برای بروزرسانی محتوا
  function updateContent(index) {
    if (index < 0) index = 0;
    if (index >= icecreams.length) index = icecreams.length - 1;

    const item = icecreams[index];
    $('.img1').fadeOut(800, function () {
      $(this).attr('src', item.img).fadeIn(800);
    });
    $('h1').fadeOut(600, function () {
      $(this).html(item.title).fadeIn(600);
    });
    $('p').fadeOut(600, function () {
      $(this).html(item.desc).fadeIn(600);
    });
  }

  // انیمیشن hover برای img2
  $('.img1').hover(function () {
    $('.img2').addClass('rotate-show');
  }, function () {
    $('.img2').removeClass('rotate-show');
  });

  // دکمه پایین (بعدی)
  $('.down').click(function () {
    counter++;
    if (counter >= icecreams.length) counter = icecreams.length - 1;
    updateContent(counter);
  });

  // دکمه بالا (قبلی)
  $('.up').click(function () {
    counter--;
    if (counter < 0) counter = 0;
    updateContent(counter);
  });
  $('.nav li').hover(function(){
    $(this).find('.nav2').slideDown("fast");
  })
  $('.nav li').mouseleave(function(){
    $(this).find('.nav2').slideUp("fast")
  })
});
