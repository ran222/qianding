// 滚动
$(function () {
  $('#qianding').fullpage({
    // sectionsColor: ['#ffffff', '#fc4c35', '#f5f6fa', '#03132a', '#ffffff', '#e8fbff', '#ffffff', '#ffffff'],
    anchors: ['home', 'platform', 'product', 'hardware', 'about', 'outlook', 'jobs', 'partners'],
    menu: '#anchors',
    scrollingSpeed: 700
  });
});