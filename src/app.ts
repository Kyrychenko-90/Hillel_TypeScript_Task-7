showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

/*
Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання.
Наприклад, тип значення для кожного ключа може бути число | рядок.
 */
interface firstInterface {
    [key: string]: number | string;
}
/*
Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями.
Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
 */
interface secondInterface {
    [key: string]: (...args: any[]) => any;
}
/*
Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта,
подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
 */
interface thirdInterface {
    [key: number]: string;
}
/*
Створіть інтерфейс з певними властивостями та індексною сигнатурою.
Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
 */
interface fourthInterface {
    [key: string]: string | number | boolean;
    name: string;
}
/*
Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
 */
interface fifthInterface {
    [key: string]: string | number;
}
interface newInterface extends fifthInterface{
    name: string;
    age: number;
}
/*
Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє,
чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
 */
function valueNumbers<T>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => typeof obj[key] === 'number');
}

interface Person {
    [key: string]: string | number;
}

const Jane: Person = {
    name: 'Jane',
    age: 27,
    city: 'Berlin',
    money: 1000,
}

const isNumbers: boolean = valueNumbers(Jane, ['age', 'money']);

console.log(isNumbers);