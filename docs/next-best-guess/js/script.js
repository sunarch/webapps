
const letters_abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letters_frequency = 'EARIOTNSLCUDPMHGBFYWKVXZJQ';

// get hash


function get_hash() {
    let hash = window.location.hash.substr(1);

    let result = hash.split('&').reduce(function (res, item) {
        let parts = item.split('=');
        res[parts[0]] = parts[1];
        return res;
    }, {});
    
    return result;
}

let hash = get_hash()

// setting: letter list
const letters = letters_abc;

const letter_id_prefix = 'letter-list-';


for (let i = 0; i < letters.length; i++) {

    let tr;

    if (i < Math.floor(letters.length / 2)) {
        tr = document.getElementById('letters-first-row');
    }
    else {
        tr = document.getElementById('letters-second-row');
    }

    let td = document.createElement("td");
    td.id = letter_id_prefix + letters[i];
    td.innerHTML = letters[i];
    tr.appendChild(td);
}

// setting: word count
let letter_count = 5;
document.getElementById('letter_count').innerHTML = letter_count;

switch(letter_count) {
    case 2:
        word_list = words_with_2_letters;
        break;
    case 3:
        word_list = words_with_3_letters;
        break;
    case 4:
        word_list = words_with_4_letters;
        break;
    case 5:
        word_list = words_with_5_letters;
        break;
    case 6:
        word_list = words_with_6_letters;
        break;
    case 7:
        word_list = words_with_7_letters;
        break;
    case 8:
        word_list = words_with_8_letters;
        break;
    default:
        word_list = words_with_5_letters;
} 

word_index = Math.floor(Math.random() * word_list.length);
document.getElementById('word_index').innerHTML = word_index;

word = word_list[word_index];

window.location.hash = 'letter_count=' + letter_count
window.location.hash += '&' + 'word_index=' + word_index

// grid

const grid = document.getElementById('grid');

function add_row(number) {
    let tr = document.createElement('tr');

    for (let i = 0; i < letter_count; i++) {
        let td = document.createElement('td');
        let input = document.createElement('input');
        input.type = 'text';
        input.id = 'row-' + number + '-letter-' + (i + 1);
        input.maxlength = '1';
        td.appendChild(input);
        tr.appendChild(td);
    }
    
    grid.appendChild(tr);
}

add_row(1)

