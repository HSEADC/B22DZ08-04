/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/images/A_test_image_result_outline_test4.png
const A_test_image_result_outline_test4_namespaceObject = __webpack_require__.p + "images/99250982174d652b9db9.png";
;// CONCATENATED MODULE: ./src/testsJs/test4.js
 // база данных: вопросы и ответы

var stages = [{
  question: ['При употреблении сочных фруктов следует:'],
  answers: [{
    text: 'взять их руками и съесть',
    count: 0
  }, {
    text: 'использовать нож и вилку, чтобы разрезать и съесть их',
    count: 1
  }, {
    text: 'использовать только зубочистку, чтобы наколоть фрукт',
    count: 0
  }, {
    text: 'использовать только вилку, чтобы съесть фркут',
    count: 1
  }]
}, {
  question: ['Что делать, если во время еды из фруктов вытек сок?'],
  answers: [{
    text: 'протереть его рукой и облизнуть руку',
    count: 0
  }, {
    text: 'вытереть сок салфеткой',
    count: 1
  }, {
    text: 'извиниться и уйти мыть руки',
    count: 1
  }, {
    text: 'не обращать внимание и продолжать есть',
    count: 0
  }]
}, {
  question: ['Правда ли, что при употреблении сочных фруктов допустимо прихлебывать сок?'],
  answers: [{
    text: 'конечно, чем сочнее, тем звонче должен быть звук',
    count: 0
  }, {
    text: 'допустимо слегка причмокивать',
    count: 0
  }, {
    text: 'конечно нет! запритесь в туалете и ешьте свои фрукты там!',
    count: 0
  }, {
    text: 'не желательно, но и не критично, если вы слегка прихлебываете',
    count: 1
  }]
}, {
  question: ['Как следует избавляться от семян и косточек при употреблении в пищу сочных фруктов?'],
  answers: [{
    text: 'положите их на край тарелки',
    count: 1
  }, {
    text: 'проглотите их вместе с фруктами',
    count: 0
  }, {
    text: 'используйте отдельную тарелку для семян и косточек',
    count: 0
  }, {
    text: 'осторожно выплюньте их в салфетку',
    count: 1
  }]
}, {
  question: ['Куда следует поставить посуду после того, как вы поели сочные фрукты?'],
  answers: [{
    text: 'помойте ее и уберите на место',
    count: 1
  }, {
    text: 'попроите хозяина или официанта убрать ее',
    count: 0
  }, {
    text: 'выбросите тарелку в окно',
    count: 0
  }, {
    text: 'оставьте ее на столе',
    count: 0
  }]
}]; // база данных: результаты

var resultTable = [{
  preview: 'Вы просто великолепный хозяин! Попробуйте как-нибудь устроить приём!',
  text: 'Ваши друзья просто обожают собираться у вас в гостях, чтобы почувствовать атмосферу любви и уюта. О ваших посиделках уже давно ходят легенды, ваши друзья, вероятно, уже рассказали своим знакомым о том, какой вы прекрасный организатор посиделок!'
}, {
  preview: 'Вы хороший хозяин! Продолжайте совершенствоваться!',
  text: 'Вы уже достаточно знаете о том, как принимать гостей, но вам нужно ещё немного потрудиться, чтобы быть профи. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
}, {
  preview: 'Гости к вам не спешат... Вы хороший человек, но не очень гостеприимный',
  text: 'Вас, вероятно, очень любят ваши друзья, семья и знакомые. Но у вас не хватает должных знаний в области этикета, чтобы искуссно ориентироваться при приеме гостей в вашем доме. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
}]; //функции

document.addEventListener('DOMContentLoaded', function () {
  initTest();
  chooseAnswer();
});
var currentStage = 0;
var resultCount = 0;

function initTest() {
  var formNote = document.querySelector('.A_form_note');
  var question = document.querySelector('.A_test_subtitle');
  var answers = document.querySelectorAll('.Q_test_variant');
  var checkboxes = document.querySelectorAll('input[type=checkbox]');
  formNote.innerHTML = "\u0432\u043E\u043F\u0440\u043E\u0441 ".concat(currentStage + 1, "/").concat(stages.length); //выводим номер вопроса

  question.innerHTML = stages[currentStage].question; //выводим вопрос
  //проверяем количество html-тегов для ответов и выводим в них текст

  for (var i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[currentStage].answers[i].text; //вывести текст ответа
  } //проверяем количество html-тегов c checkbox


  for (var _i = 0; _i < checkboxes.length; _i++) {
    checkboxes[_i].dataset.count = stages[currentStage].answers[_i].count; //добавить дата-атрибут с баллами
  }
} //при выборе ответа


function chooseAnswer() {
  var checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      //если кликнут чекбокс
      if (checkbox.checked) {
        resultCount += Number(checkbox.dataset.count); //добавляем баллы

        setTimeout(function () {
          updateStage(); //меняем вопросы

          checkbox.checked = false; // "отжимаем чекбокс"
        }, 400);
      }
    });
  });
} //пока не закончатся вопросы в списке


function updateStage() {
  if (currentStage + 1 < stages.length) {
    currentStage++; //повышаем счётчик вопросов

    initTest(); // выводим новые вопросы-ответы
  } else {
    showResult(); // показываем результат
  }
}

function showResult() {
  document.querySelector('#S_TestHeading').remove();
  var block = document.querySelector('#S_TestBlock');
  block.innerHTML = '';
  block.classList.add('result');
  var textBlock = document.createElement('div');
  textBlock.classList.add('W_TestResult');
  var formNote = document.createElement('div');
  var title = document.createElement('div');
  var text = document.createElement('div');
  var imageResult = document.createElement('div');
  imageResult.innerHTML = "<img src=".concat(A_test_image_result_outline_test4_namespaceObject, ">");
  formNote.classList.add('A_resultItog');
  title.classList.add('A_resultTitle');
  text.classList.add('A_resultText');
  imageResult.classList.add('A_resultImage');
  textBlock.appendChild(formNote);
  textBlock.appendChild(title);
  textBlock.appendChild(text);
  block.appendChild(textBlock);
  block.appendChild(imageResult); //добавила класс result к элементам, чтобы можно было переписать стили для показа результат, не меняя структуру

  formNote.innerHTML = 'итог'; // switch работает как if с условиями ИЛИ, но проверяет только одно значение

  switch (resultCount) {
    case 5:
      // если результат равен 5
      title.innerHTML = resultTable[0].preview;
      text.innerHTML = resultTable[0].text;
      break;

    case 4: // если результат равен 4 или 3

    case 3:
      title.innerHTML = resultTable[1].preview;
      text.innerHTML = resultTable[1].text;
      break;

    case 2: // если результат равен 2, 1 или 0

    case 1:
    case 0:
      title.innerHTML = resultTable[2].preview;
      text.innerHTML = resultTable[2].text;
      break;
  }
}
/******/ })()
;