const textArea = document.querySelector('#content');
const wordsCount = document.querySelector('#wordCount');

textArea.oninput = () => {
        
    let words = textArea.value.split(' ').filter
    ((item) => {
    return item != '';
    });
    wordsCount.textContent = words.length;
};