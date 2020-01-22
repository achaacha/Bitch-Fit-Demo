//Predefined Variables
const comics = document.querySelector('.comicpage');
const ahref = location.href;
const hun = /\d{3}/.exec(ahref);
const ten = /\d{2}/.exec(ahref);
const one = /\d/.exec(ahref);
let pn = 1; //Page Number

//Instant call function

(() => {
  if (hun) {
    pn = hun[0];
    comics.src="slide/" + pn + ".png";
  } else if (ten) {
    pn = ten[0];
    comics.src="slide/" + pn + ".png";
  } else if (one) {
    pn = one[0];
    comics.src="slide/" + pn + ".png";
  }
})();

const turnPage = (e) => {
  if (e.keyCode == '39' && pn < 6){
    ++pn;
    comics.src="slide/" + pn + ".png";
    location.href="#" + pn;
  } else if (e.keyCode == '37' && pn > 1){
    --pn;
    comics.src="slide/" + pn + ".png";
    location.href="#" + pn;
  } else if (e.keyCode == '39' && pn == 6){
  pn = 1;
  comics.src="slide/" + pn + ".png";
  location.href="#" + pn;
} else if (e.keyCode == '37' && pn == 1){
  pn = 6;
  comics.src="slide/" + pn + ".png";
  location.href="#" + pn;
  }
}

document.onkeydown = turnPage;
