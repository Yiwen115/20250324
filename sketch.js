// 宣告變數
let button1, button2;
let sprite1 = false, sprite2 = false;
let img1, img2;
let frame1 = 0;
const frameRate1 = 5; // 控制動畫速度
const sprite1Width = 42.5, sprite1Height = 65, sprite1Frames = 7;
const sprite2Width = 45, sprite2Height = 61, sprite2Frames = 6;
let iframe; // 宣告 iframe 變數

// 預載入圖片
function preload() {
  img1 = loadImage('all_1.png'); // 載入第一個精靈圖
  img2 = loadImage('all_2.png'); // 載入第二個精靈圖
}

// 設置畫布和按鈕
function setup() {
  createCanvas(windowWidth, windowHeight); // 創建全螢幕畫布

  // 創建第一個按鈕
  button1 = createButton('自我介紹');
  styleButton(button1, 150, 50, showIframe, showSprite1, hideSprite1);

  // 創建第二個按鈕
  button2 = createButton('作品簡介');
  styleButton(button2, 280, 50, null, showSprite2, hideSprite2);
}

// 繪製函數，每幀執行一次
function draw() {
  background(220); // 設置背景顏色
  drawSprite1(); // 繪製精靈圖1
  drawSprite2(); // 繪製精靈圖2
}

// 按鈕樣式設置函數
function styleButton(button, x, y, onClick, onHover, onOut) {
  button.position(x, y); // 設置按鈕位置
  button.style('font-size', '20px'); // 設置按鈕字體大小
  if (onClick) button.mousePressed(onClick); // 設置按下事件
  if (onHover) button.mouseOver(onHover); // 設置滑鼠移入事件
  if (onOut) button.mouseOut(onOut); // 設置滑鼠移出事件
}

// 繪製精靈圖1的函數
function drawSprite1() {
  if (sprite1) {
    let sx = frame1 * sprite1Width; // 計算當前幀的起始 x 座標
    image(img1, 50, 50, sprite1Width * 2, sprite1Height * 2, sx, 0, sprite1Width, sprite1Height); // 放置在左上角
    updateFrame(sprite1Frames); // 更新幀數
  }
}

// 繪製精靈圖2的函數
function drawSprite2() {
  if (sprite2) {
    let sx = frame1 * sprite2Width; // 計算當前幀的起始 x 座標
    image(img2, 50, 50, sprite2Width * 2, sprite2Height * 2, sx, 0, sprite2Width, sprite2Height); // 與精靈圖1位置相同
    updateFrame(sprite2Frames); // 更新幀數
  }
}

// 更新幀數的函數
function updateFrame(totalFrames) {
  if (frameCount % frameRate1 === 0) {
    frame1 = (frame1 + 1) % totalFrames; // 更新幀數
  }
}

// 顯示精靈圖1的函數
function showSprite1() {
  sprite1 = true; // 設置 sprite1 為 true
  frame1 = 0; // 重置幀數
}

// 隱藏精靈圖1的函數
function hideSprite1() {
  sprite1 = false; // 設置 sprite1 為 false
}

// 顯示精靈圖2的函數
function showSprite2() {
  sprite2 = true; // 設置 sprite2 炯 true
  frame1 = 0; // 重置幀數
}

// 隱藏精靈圖2的函數
function hideSprite2() {
  sprite2 = false; // 設置 sprite2 炯 false
}

// 顯示 iframe 的函數
function showIframe() {
  if (!iframe) {
    iframe = createElement('iframe');
    iframe.attribute('src', 'https://yiwen115.github.io/20250317/');
    iframe.position(windowWidth * 0.1, windowHeight * 0.2);
    iframe.size(windowWidth * 0.8, windowHeight * 0.6);
  }
}