console.log('task 2');


let x = 'true';
switch (typeof (x)) {
    case 'string':
        console.log(x + ' - строка');
        break;
    case 'boolean':
        console.log(x + ' - логический тип');
        break;
    case 'number':
        console.log(x + ' - число');
        break;
    default:
        console.log('Тип x не определен');
}