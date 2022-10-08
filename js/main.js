/* eslint-disable no-console */


//ЗАДАЕМ ПАРАМЕТРЫ ДЛЯ ФОТОГРАФИЙ


const NAMES = [
  'Андрей',
  'Игорь',
  'Миша',
  'Костя',
  'Саша',
  'Даша',
  'Оля',
  'Аня',
  'Юля',
  'Лена',
  'Таня',
  'Кекс',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  '«Хотелось бы пожелать доброго утра, но когда утро было добрым». 😠',
  '«Как я себя чувствую, когда нет кофе? ДЕПРЕССО.» 😩',
  '«Позвони мне, позвони.» 🤳😊',
  '«Правда ранит, наденьте беруши или купите бинт.» 💊💉🤕',
  '«Самый лучший день.»',
  '«Чужая душа — потёмки, а своя ещё темнее.» 😈👹',
  '«Думаю…Я много думаю». 😜',
];


//ФУНКЦИЯ РАНДОМА
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive();

//ФУНКЦИЯ ДЛЯ ПРОВЕРКИ ДЛИНЫ СТРОКИ
const commentLength = (str, maxLength) => str.length < maxLength;

commentLength('kjdsklfjalksdjl', 10);


//функция для вызова случайного элемента в массиве

const getRandomElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

//функция для создания photo
const createPhoto = () => ({

  id: getRandomIntInclusive(1, 25),
  url: `photos/${getRandomIntInclusive(1, 25)}.jpg`,
  description: getRandomElement(DESCRIPTION),
  likes: getRandomIntInclusive(15, 200),
  comments: {
    id: getRandomIntInclusive(1, 200),
    avatar:` img/avatar-${getRandomIntInclusive(0, 6)}.svg`,
    message: getRandomElement(MESSAGES),
    name:getRandomElement(NAMES),
  },
});

console.log(createPhoto());
//СОЗДАНИЕ МАССИВА ИЗ N ЭЛЕМЕНТОВ
const photo = Array.from({length:25},createPhoto);

console.log(photo);
