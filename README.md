[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/zPbKt7gk)
# Требования

* Нельзя менять уже написанный код, тесты и другие файлы добавленные в проект
* Помимо стандартной библиотеки, вы можете использовать все что импортировано. Что не импортировано, то не используется.
* Выполняйте коммиты и пуши как можно чаще. Так вы будете видеть какие из тестов сработают, а какие нет.
* Во время работы не забывайте запускать саму утилиту и npm test

# Задание

Ваша задача написать консольную утилиту, которая анализирует переданный файл с информацией о звездах и выводит на экран некоторую статистику по данным из файла. Файлы хранятся в директории *__fixtures__* в формате CSV. Они используются для тестов и понадобятся вам, для запуска и проверки утилиты в терминале. Вся информация уже прочитана и содержится в константе content. Вам остается только написать и экспортировать функцию в файле index.js, которая принимает данные в виде строки и работает с ними. Программа выводит строки в консоль, каждая строка является решением определенного шага. Таким образом 5 шагов предполагает 5 строк в консоли.

Пример запуска утилиты:

```bash
bin/stars.js __fixtures__/stars1.csv
Count: 18
Galaxies: Андромеда, Журавль, Млечный путь
Farest from earth: 2500000 light years, closest to Earth: 4.24 light years
Closest to Earth: Proxima Centauri in Млечный путь galaxy
Star with largest radius from heaviest galaxy is Andromeda XIX
```

Вывод содержит фиксированный набор строк (Count, Cities, ...), каждая из которых соответствует какой-то агрегированной информации по данным из файла. Например первая строка содержит количество записей в переданном файле. Значения в этих строках зависят от данных внутри переданного файла. В примере выше число 20, в вашем случае может быть другое, зависит от того, с каким файлом ведется работа.

Каждая строчка в выводе утилиты, представляет из себя небольшое отдельное вычислительное задание. Вам предстоит решать эти задачи по очереди. Ниже список этих заданий:

## 1 шаг

Выведите количество звезд в переданном файле. Учтите, что первая строчка в CVS файле является заголовочной, она не содержит данных и не должна учитываться, вторая срока с разделителем нам тоже не нужна. Вывод утилиты будет таким:

```bash
bin/stars.js __fixtures__/stars1.csv
Count: 18
```

## 2 шаг

Выведите список разных галактик, которые есть в таблице. Галактики должны быть отсортированы в алфавитном порядке.

```bash
bin/stars.js __fixtures__/stars1.csv
Count: 18
Galaxies: Андромеда, Журавль, Млечный путь
```

## 3 шаг

Выведите самое большое расстояние от звезды из таблицы до Земли и самое маленькое.

```bash
bin/stars.js __fixtures__/stars1.csv
Count: 18
Galaxies: Андромеда, Журавль, Млечный путь
Farest from Earth: 2500000 light years, closest to Earth: 4.24 light years
```

## 4 шаг

Выведите имя самой близкой к земле звезды и галактику, к которой она относится.

```bash
bin/stars.js __fixtures__/stars1.csv
Count: 18
Galaxies: Андромеда, Журавль, Млечный путь
Farest from earth: 2500000 light years, closest to Earth: 4.24 light years
Closest to Earth: Proxima Centauri in Млечный путь galaxy
```

## 5 шаг

Выведите планету c наибольшим радиусом из галактики, общая масса звезд в которой имеет наибольший вес.

```bash
bin/stars.js __fixtures__/stars1.csv
Count: 18
Galaxies: Андромеда, Журавль, Млечный путь
Farest from earth: 2500000 light years, closest to Earth: 4.24 light years
Closest to Earth: Proxima Centauri in Млечный путь galaxy
Star with largest radius from heaviest galaxy is Andromeda XIX
```

# Список доступных сайтов

- [Javascript](https://developer.mozilla.org/ru/docs/Learn/JavaScript)
- [Web development](https://developer.mozilla.org/en-US/docs/Learn)
- [Node](https://nodejs.org/ru/docs)
- [Hexlet](https://hexlet.io)
- [NPM](https://docs.npmjs.com/)
- [lodash](https://lodash.com/docs)
- [Github](https://github.com/)
- [Github Classrom](https://classroom.github.com/)
- [Github Docs](https://docs.github.com/ru)
- [ESLint](https://eslint.org/docs/latest/)

# Примечание

При возникновении проблем с линтером на определенной строке, вы можете отключить линтер для этой строки, написав выше:
```bash
// eslint-disable-next-line
```