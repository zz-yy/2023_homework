function toggleContent(id) {
    var currentContent = document.querySelector('.content-2.current');
    var targetContent = document.getElementById(id).querySelector('.content-2');

    if (currentContent === targetContent) {
        return;
    }

    var contents = document.querySelectorAll('.content-2');
    contents.forEach(function (content) {
        content.classList.remove('current');
        content.style.maxHeight = '0';
    });

    targetContent.classList.add('current');
    targetContent.style.maxHeight = targetContent.scrollHeight + 'px';

    var titles = document.querySelectorAll('h3');
    titles.forEach(function (title) {
        title.classList.remove('current');
    });

    var targetTitle = document.getElementById(id).querySelector('h3');
    targetTitle.classList.add('current');
}
