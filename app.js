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
let score = 0;

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
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  } else {
    window.alert('不正解!');
  }
  quizIndex++;

  if(quizIndex < quizLength){
    //問題数があればこちらを実行
    setupQuiz();
  } else {
    //問題数が無ければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
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