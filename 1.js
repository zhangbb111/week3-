// 获取元素
let count = 0;
let countElement = document.querySelector('p');
let countBtn = document.querySelector('.count-btn');
let bgChangeBtn = document.querySelector('.bg-change-btn');

// 计数按钮点击事件
countBtn.addEventListener('click', () => {
  count++;
  countElement.innerHTML = count;
});

// 背景变换按钮点击事件
bgChangeBtn.addEventListener('click', () => {
  let randomColor1 = Math.floor(Math.random()*256);
  let randomColor2 = Math.floor(Math.random()*256);
  let randomColor3 = Math.floor(Math.random()*256);
  document.body.style.background = `linear-gradient(to bottom right, rgb(${randomColor1},${randomColor2},${randomColor3}), white)`;
});