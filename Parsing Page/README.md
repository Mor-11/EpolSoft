Что необходимо сделать:
1 Реализовать HTML страницу (HTML5, CSS3, JavaScript) со следующей структурой:

![](https://github.com/EpolSoft/TelcoTest/raw/master/image.png)

Где Number и Converted - поля для ввода. И ниже 5 Radio Group.

2 Сделать ограничение для ввода в первое поле - только цифры.Подсказка - посмотрите какие встроенные механизмы есть в HTML5.
Если в поле ничего не введено - выводить в нем текст "Number" - с использованием placeholder.

3 Написать JavaScript код, который проверяет является ли введенный номер четным или нечетным.
Если четный, то в поле Converted выводится текст "H'0"

Если нечетный, то в поле Converted выводится текст "H'8"

4 Далее Converted дополняется следующим образом: 
![](https://github.com/EpolSoft/TelcoTest/raw/master/image2.png)
Пример:H'8313, где

83 - первый октет в 16-ричном представлении

13 - второй октет в 16 ричном представлении

В двоичном соответственно:

‭1000 0011‬

‭0001 0011‬

Выставить в зависимости от выбранного поля NAI соответствующий бит в первом октете + учесть четность номера и вывести в поле Converted полученное значение.

Например: H'83 - значит 1000 0011‬, т.е. номер нечетный и выбрано значение NAI = National Significant

5 Для второго октета выставать второй октет в (пример) H'8313
Где значениям битов
![](https://github.com/EpolSoft/TelcoTest/raw/master/image3.png)


соответствуют значения в radio group
![](https://github.com/EpolSoft/TelcoTest/raw/master/image4.png)



Пример:

H'8313, где 13 (в 16-ричной система) значит ‭0001 0011‬

screening indicator: = -- x x x x x x 1 1 network provided

address presentation restricted indicator: = -- x x x x 0 0 x x presentation allowed

numbering plan indicator: -- x 0 0 1 x x x x ISDN numbering plan (E.164)

internal network number indicator: -- 0 x x x x x x x routing to internal network allowed

Код загрузить на GitHub.
