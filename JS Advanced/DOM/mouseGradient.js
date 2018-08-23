function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient-box');
    gradientBox.addEventListener('mousemove',function (ev) {
        let power = ev.offsetX / (ev.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + '%'
    })
    gradientBox.addEventListener('mouseout',function (ev) {
        document.getElementById('result').textContent = '';
    })
}