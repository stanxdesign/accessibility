const commonTags = document.querySelectorAll('#common_fac1 .tag');

commonTags.forEach(labelTag => {
    labelTag.setAttribute('tabindex', '0');
});

document.body.addEventListener('keydown', function (e) {
    // 僅處理 Enter 或 Space 鍵
    if (e.key !== 'Enter' && e.key !== ' ') return;

    // 確認觸發的元素是 <label> 且具有 tabindex="0"
    const label = e.target.closest('label[tabindex="0"]');
    if (!label) return;

    // 阻止預設滾動等行為
    e.preventDefault();

    // 嘗試找到對應的 input（label 裡的 input 或 label[for] 對應的 input）
    const input = label.control || label.querySelector('input');

    if (input && !input.disabled) {
        input.click(); // 模擬點擊
    }
});