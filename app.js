const quiz = [
  {
    question: '三大旨味成分と言われているのはグアニル酸、イノシン酸、もう一つは次のうちどれか？',
    answers: [
      'アミノ酸',
      'コハク酸',
      'アスパラギン酸',
      'グルタミン酸'
    ],
    correct: 'グルタミン酸'
  }, {
    question: 'ロマンシングサガシリーズで吟遊詩人が登場するのはどのシリーズ',
    answers: [
      'ロマンシングサガ',
      'ロマンシングサガ2',
      'ロマンシングサガ3',
      'ロマンシングサガ4'
    ],
    correct: 'ロマンシングサガ3'
  }, {
    question: '木戸孝允の前名は次のうちどれ？',
    answers: [
      '桂小五郎',
      '坂本龍馬',
      '武市半平太',
      '高杉晋作'
    ],
    correct: '桂小五郎'
  }
];

const quizLength = quiz.length
let quizIndex = 0;


const question = '三大旨味成分と言われているのはグアニル酸、イノシン酸、もう一つは次のうちどれか？';
const answers = [
  'アミノ酸',
  'コハク酸',
  'アスパラギン酸',
  'グルタミン酸'
];
const correct = 'グルタミン酸';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length; 
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert('正解!');
  } else {
    window.alert('不正解!');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}