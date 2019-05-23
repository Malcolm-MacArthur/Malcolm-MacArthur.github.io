/*
This calculates if the cursor is in a hexagon that is a div with,
background: linear-gradient(135deg, transparent x%, #222831 x%,  #222831 (100 - x)%, transparent (100-x)%));

event - The usual event object
element - The div with the linear gradient
percent - the value of x used in the linear gradient
*/
function cursorInsideHexagon(event, element, percent){
  let rect = element.getBoundingClientRect();

  let TH = (rect.height + rect.width) * percent;
  let TW = TH;

  let W = rect.width;
  let H = rect.height;

  let MX = event.clientX - rect.left;
  let MY = event.clientY - rect.top;

  if (MX < 0 || MX > W || MY < 0 || MY > H){
    return false;

  } else if (MY < TH){
    let termOne = Math.sqrt(Math.pow(TH, 2) + Math.pow(TW, 2))*((TH-MY)/TH);
    let termTwo = TH - MY;
    let D = Math.sqrt(Math.pow(termOne, 2) - Math.pow(termTwo, 2));
    return (MX > D);

  } else if (MY > (H-TH)){
    let termOne = Math.sqrt(Math.pow(TH, 2) + Math.pow(TW, 2))*((TH-(H-MY))/TH);
    let termTwo = TH - (H-MY);
    let D = Math.sqrt(Math.pow(termOne, 2) - Math.pow(termTwo, 2));
    return (MX < (W-D));

  } else {
    return true;
  }
}