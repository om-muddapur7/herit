let namasteBtn = document.querySelector('button')
namasteBtn.addEventListener('click', showMsg);

function showMsg()
{
    //alert('Namaste!');
    let name = prompt('Enter your name');
    namasteBtn.textContent = 'Roll no ' + name;
}