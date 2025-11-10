let art1;
let art2;
let art3;
function total() {
 art1 = parseFloat(document.getElementById('art1').value);
 art2 = parseFloat(document.getElementById('art2').value);
 art3 = parseFloat(document.getElementById('art3').value);

 let total = art1 + art2 +art3 ;
  document.getElementById('result').innerText = `Merci de me payer: ${total}`;
}

