const awan = document.querySelectorAll('.awan');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');


let awanSebelumnya;
let selesai;
let skor;

//untuk menghitung keluar nya target
function randomawan(awan) {
  const t = Math.floor(Math.random() * awan.length);
  const cek = awan[t];
  if (cek == awanSebelumnya) {
    randomawan(awan);
  }
  awanSebelumnya = cek;
  return cek;
}


function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// waktu lama nya muncul 
function munculkanTikus() {
  const cek = randomawan(awan);
  const wRandom = randomWaktu(300, 1000);
  cek.classList.add('muncul');

  setTimeout(() => {
    cek.classList.remove('muncul');
    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanTikus();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove('muncul');
  pop.play();
  papanSkor.textContent = skor;
}

tikus.forEach(t => {
  hitung.addEventListener('click', pukul);
});