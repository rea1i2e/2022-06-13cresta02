
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  // ハンバーガーアイコンをクリックすると、ドロワーメニューが開閉する
  $('.js-hamburger').on('click', function () {
    $(this).toggleClass('is-open');
    $('.js-header-nav').toggleClass('is-open');
  });

  // ドロワーメニューを開いているときにどこかタップすると、ドロワーメニューが閉じる
  $('.js-header-nav').on('click', function () {
    $('.js-header-nav').toggleClass('is-open');
    $('.js-hamburger').removeClass('is-open');
  });

  // メインビュー通過後ヘッダーの背景色を変更
  // ヘーダーとpagetopボタン
  $(window).on('scroll', function () {
    if (jQuery('.p-mainview, .p-sub-mainview').height() < jQuery(this).scrollTop()) {
      jQuery('.js-header').addClass('is-black');
    } else {
      jQuery('.js-header').removeClass('is-black');
    }
  });

  // 下層ページ
  // $(window).on('scroll', function () {
  //   if (jQuery('.p-sub-mainview').height() < jQuery(this).scrollTop()) {
  //     jQuery('.js-header').addClass('is-black');
  //   } else {
  //     jQuery('.js-header').removeClass('is-black');
  //   }
  // });




  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});

Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
});