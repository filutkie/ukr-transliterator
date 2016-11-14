/**
 * Ukrainian cyrillic to latin transliterator.
 *
 * Copyright (c) 2016 Herman Stankov
 * Licensed under MIT License.
 *
 * @link https://github.com/filutkie/ukr-transliterator
 */

var dict = [
    /* special rules */
    {'cyrillic': 'зг', 'latin': 'zgh'},
    {'cyrillic': 'Зг', 'latin': 'Zgh'},
    {'cyrillic': '’', 'latin': ''},
    {'cyrillic': '\`', 'latin': ''},
    {'cyrillic': '\'', 'latin': ''},

    /* unresolved yet */
    // {'cyrillic': 'ьо', 'latin': 'io'},
    // {'cyrillic': 'ьї', 'latin': 'ii'},

    /* word starting letters */
    {'cyrillic': '^є', 'latin': 'ye'},
    {'cyrillic': '^ї', 'latin': 'yi'},
    {'cyrillic': '^й', 'latin': 'y'},
    {'cyrillic': '^ю', 'latin': 'yu'},
    {'cyrillic': '^я', 'latin': 'ya'},
    {'cyrillic': '^Є', 'latin': 'Ye'},
    {'cyrillic': '^Ї', 'latin': 'Yi'},
    {'cyrillic': '^Й', 'latin': 'Y'},
    {'cyrillic': '^Ю', 'latin': 'Yu'},
    {'cyrillic': '^Я', 'latin': 'Ya'},

    /* regular letters */
    {'cyrillic': 'а', 'latin': 'a'},
    {'cyrillic': 'б', 'latin': 'b'},
    {'cyrillic': 'в', 'latin': 'v'},
    {'cyrillic': 'г', 'latin': 'h'},
    {'cyrillic': 'ґ', 'latin': 'g'},
    {'cyrillic': 'д', 'latin': 'd'},
    {'cyrillic': 'е', 'latin': 'e'},
    {'cyrillic': 'є', 'latin': 'ie'},
    {'cyrillic': 'ж', 'latin': 'zh'},
    {'cyrillic': 'з', 'latin': 'z'},
    {'cyrillic': 'и', 'latin': 'y'},
    {'cyrillic': 'і', 'latin': 'i'},
    {'cyrillic': 'ї', 'latin': 'i'},
    {'cyrillic': 'й', 'latin': 'i'},
    {'cyrillic': 'к', 'latin': 'k'},
    {'cyrillic': 'л', 'latin': 'l'},
    {'cyrillic': 'м', 'latin': 'm'},
    {'cyrillic': 'н', 'latin': 'n'},
    {'cyrillic': 'о', 'latin': 'o'},
    {'cyrillic': 'п', 'latin': 'p'},
    {'cyrillic': 'р', 'latin': 'r'},
    {'cyrillic': 'с', 'latin': 's'},
    {'cyrillic': 'т', 'latin': 't'},
    {'cyrillic': 'у', 'latin': 'u'},
    {'cyrillic': 'ф', 'latin': 'f'},
    {'cyrillic': 'х', 'latin': 'kh'},
    {'cyrillic': 'ц', 'latin': 'ts'},
    {'cyrillic': 'ч', 'latin': 'ch'},
    {'cyrillic': 'ш', 'latin': 'sh'},
    {'cyrillic': 'щ', 'latin': 'shch'},
    {'cyrillic': 'ь', 'latin': ''},
    {'cyrillic': 'ю', 'latin': 'iu'},
    {'cyrillic': 'я', 'latin': 'ia'},
    {'cyrillic': 'А', 'latin': 'A'},
    {'cyrillic': 'Б', 'latin': 'B'},
    {'cyrillic': 'В', 'latin': 'V'},
    {'cyrillic': 'Г', 'latin': 'H'},
    {'cyrillic': 'Ґ', 'latin': 'G'},
    {'cyrillic': 'Д', 'latin': 'D'},
    {'cyrillic': 'Е', 'latin': 'E'},
    {'cyrillic': 'Є', 'latin': 'Ie'},
    {'cyrillic': 'Ж', 'latin': 'Zh'},
    {'cyrillic': 'З', 'latin': 'Z'},
    {'cyrillic': 'И', 'latin': 'Y'},
    {'cyrillic': 'І', 'latin': 'I'},
    {'cyrillic': 'Ї', 'latin': 'I'},
    {'cyrillic': 'Й', 'latin': 'I'},
    {'cyrillic': 'К', 'latin': 'K'},
    {'cyrillic': 'Л', 'latin': 'L'},
    {'cyrillic': 'М', 'latin': 'M'},
    {'cyrillic': 'Н', 'latin': 'N'},
    {'cyrillic': 'О', 'latin': 'O'},
    {'cyrillic': 'П', 'latin': 'P'},
    {'cyrillic': 'Р', 'latin': 'R'},
    {'cyrillic': 'С', 'latin': 'S'},
    {'cyrillic': 'Т', 'latin': 'T'},
    {'cyrillic': 'У', 'latin': 'U'},
    {'cyrillic': 'Ф', 'latin': 'F'},
    {'cyrillic': 'Х', 'latin': 'Kh'},
    {'cyrillic': 'Ц', 'latin': 'Ts'},
    {'cyrillic': 'Ч', 'latin': 'Ch'},
    {'cyrillic': 'Ш', 'latin': 'Sh'},
    {'cyrillic': 'Щ', 'latin': 'Shch'},
    {'cyrillic': 'Ь', 'latin': ''},
    {'cyrillic': 'Ю', 'latin': 'Iu'},
    {'cyrillic': 'Я', 'latin': 'Ia'}
];

function translit(text) {
  for (var n in dict) {
    var text = text.replace(
      new RegExp(dict[n]['cyrillic'], 'gm'), dict[n]['latin']);
  }
  return text;
}

document.getElementById('input-txt').oninput = function() {
  var res = document.getElementById('result-txt');
  res.innerHTML = translit(this.value);
}
