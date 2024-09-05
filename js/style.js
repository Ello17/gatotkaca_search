function hilangkanTeks(){
    let el = document.getElementById('text');
    el.classList.toggle('d-none');
}
document.getElementById('tombol').addEventListener('click', hilangkanTeks)

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    let el = document.getElementById('text1');
  }