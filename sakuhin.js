window.addEventListener('scroll', function () {
    const careers = document.querySelectorAll('.career');
    const windowHeight = window.innerHeight;
    const triggerOffset = 200;

    careers.forEach(function (career) {
        const rect = career.getBoundingClientRect();

        if (rect.top < windowHeight - triggerOffset && rect.bottom > 0) {
            career.classList.add('visible');  // 画面に入ったら出現アニメーション
            career.classList.remove('invisible'); // 画面に入ったら消えるアニメーションを削除
        } else {
            career.classList.add('invisible'); // 画面外に出たら消えるアニメーション
            career.classList.remove('visible'); // 画面外に出たら出現アニメーションを削除
            }
        });
    });

    const scrollContainer = document.querySelector('.scroll-container');
    const scrollContent = document.querySelector('.scroll-content');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    const itemWidth = 420; // アイテムの幅
    let currentIndex = 0; // いま表示してるアイテムの番号
    
    arrowLeft.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + 3) % 3; // 3個アイテムがある前提
        updateScroll();
    });
        
    arrowRight.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % 3;
        updateScroll();
    });
        
    function updateScroll() {
        scrollContainer.scrollLeft = itemWidth * currentIndex;
    }