let fillVal = 126;
let dKey = '';
var rColor;

function setup() {
  createCanvas(210, 200);
  fill(fillVal);
}

function draw() {
  background(200);
  textSize(20);
  fill('black');
  text('Typing in Dvorak', 25, 20);
  text('Simulator', 60, 40);

  textSize(50);
  randomColor = color(random(255), random(255), random(255));
  fill(randomColor);
  text(key, 100, 85);
  text(dKey, 100, 150);

  textSize(25);
  fill('white');
  text('qwerty:', 15, 85);
  text('dvorak:', 15, 150);

  textSize(10);
  fill('maroon');
  text('* does not handle shift-cases', 5, 195);
}

//"reprograms" key pressed to be Dvorak. Does not currently handle shift cases. 
function keyTyped() {
  switch (key) {
    //row: 0 **************************
    case '\-':
      dKey = '\[';
      break;
    case '\=':
      dKey = '\]';
      break;

      //row: 1 **************************
    case 'q':
      dKey = '\'';
      break;
    case 'w':
      dKey = '\,';
      break;
    case 'e':
      dKey = '\.';
      break;
    case 'r':
      dKey = 'p';
      break;
    case 't':
      dKey = 'y';
      break;
    case 'y':
      dKey = 'f';
      break;
    case 'u':
      dKey = 'g';
      break;
    case 'i':
      dKey = 'c';
      break;
    case 'o':
      dKey = 'r';
      break;
    case 'p':
      dKey = 'l';
      break;
    case '\[':
      dKey = '/';
      break;
    case '\]':
      dKey = '=';
      break;

      //row: 2 ************************************
    case 'a':
      dKey = 'a';
      break;
    case 's':
      dKey = 'o';
      break;
    case 'd':
      dKey = 'e';
      break;
    case 'f':
      dKey = 'u';
      break;
    case 'g':
      dKey = 'i';
      break;
    case 'h':
      dKey = 'd';
      break;
    case 'j':
      dKey = 'h';
      break;
    case 'k':
      dKey = 't';
      break;
    case 'l':
      dKey = 'n';
      break;
    case '\;':
      dKey = 's';
      break;
    case '\'':
      dKey = '\-';
      break;
    case '\"': //above shift-case
      dKey = '\-';
      break;

      //row: 3 ****************************************
    case 'z':
      dKey = '\;';
      break;
    case 'x':
      dKey = 'q';
      break;
    case 'c':
      dKey = 'j';
      break;
    case 'v':
      dKey = 'k';
      break;
    case 'b':
      dKey = 'x';
      break;
    case 'n':
      dKey = 'b';
      break;
    case 'm':
      dKey = 'm';
      break;
    case '\,':
      dKey = 'w';
      break;
    case '\.':
      dKey = 'v';
      break;
    case '\/':
      dKey = 'z';
      break;
    default:
      dKey = key;
      break;
  }
  return false;
}