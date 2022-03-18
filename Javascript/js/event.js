function onClick() {
    setTimeout(function () {
        document.getElementById('name').style.cssText = 'font: bold; font-size: 30px; color: white; padding: 80px;';
        document.getElementById('name').innerHTML = "Kiggo";
        document.getElementById('call').style.display = 'none';
        document.getElementById('phone').style.cssText = 'color: white; font-size: 20px;';
        document.getElementById('phone').innerHTML = "010-0202-0000";
        document.getElementById('container').style.cssText = 'width: 300px; height: 400px; background-color: black; text-align: center;';
        document.getElementById('box').style.cssText = 'padding: 5px; margin: 55px; border-radius: 10px; width: 180px; background-color: green; display:block;'
    }, 2000);

}
document.getElementById('call').addEventListener('click', onClick); //이벤트 연결