const question = '三大旨味成分と言われているのはグアニル酸、イノシン酸、もう一つは次のうちどれか？';
const answers = [
  'アミノ酸',
  'コハク酸',
  'アスパラギン酸',
  'グルタミン酸'
];
const correct = 'グルタミン酸';

//定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent = question;
document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];

//ボタンをクリックしたら正誤判定
document.getElementsByTagName('button')[0].addEventListener('click', () => {

});