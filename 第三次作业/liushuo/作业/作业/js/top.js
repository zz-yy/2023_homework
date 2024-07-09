// 获取按钮和窗口对象
var backToTopButton = document.getElementById('backToTop');
var rootElement = document.documentElement;

// 监听滚动事件
window.addEventListener('scroll', function () {
    // 判断页面滚动的距离
    if (rootElement.scrollTop > 10) { // 当滚动超过100像素时显示按钮
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// 监听按钮点击事件
backToTopButton.addEventListener('click', function () {
    // 滚动到页面顶部
    rootElement.scrollTop = 0;
});


if (backToTopButton) {
    alert('获取到了对象');
} else {
    alert('没有获取到对象');
}