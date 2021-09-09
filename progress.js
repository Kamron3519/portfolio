window.addEventListener('load', () => {
    let progressBar = document.querySelectorAll('.progress-bar');
    let value = ['90%', '80%', '60%'];
    progressBar.forEach((progress,index) => {
        progress.style.width = value[index]
    })
})