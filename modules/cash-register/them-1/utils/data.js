import { v4 as uuidv4 } from 'uuid';

export const columns = [
    // {id: uuidv4(), title: 'Фото'},
    {id: uuidv4(), title: 'Наименование'},
    {id: uuidv4(), title: 'Штрихкод'},
    // {id: uuidv4(), title: 'ИКПУ'},
    {id: uuidv4(), title: 'Количество'},
    {id: uuidv4(), title: 'Цена'},
];
export const columnsTable = [
    // {id: uuidv4(), title: '№'},
    {id: uuidv4(), title: 'Наименование'},
    {id: uuidv4(), title: 'Штрихкод'},
    {id: uuidv4(), title: 'Количество'},
    {id: uuidv4(), title: 'Цена'},
    {id: uuidv4(), title: 'Сумма'},
    // {id: uuidv4(), title: 'Наценка'},
    // {id: uuidv4(), title: 'Скидка'},
];
export const searchTable = [
    {id: uuidv4(), title: '№'},
    {id: uuidv4(), title: 'Наименование'},
    {id: uuidv4(), title: 'Цена'},
    // {id: uuidv4(), title: 'Наценка'},
    {id: uuidv4(), title: 'Штрихкод'},
    {id: uuidv4(), title: 'Количество'},
    // {id: uuidv4(), title: 'Скидка'},
    {id: uuidv4(), title: 'Сумма'},
];
export const headerSum = [
    {id: uuidv4(), title: 'Наименование', amount: 0},
    {id: uuidv4(), title: 'Скидки', amount: 0},
    {id: uuidv4(), title: 'Наценка', amount: 0},
    {id: uuidv4(), title: 'К оплате', amount: 0},
]
export const kassaMethodsItem = [
    {id: uuidv4(), title: 'Наличка', color: '#9d7333'},
    {id: uuidv4(), title: 'Перечисление', color: '#7bac66'},
    {id: uuidv4(), title: 'Электронные кошельки', color: '#6c85de'},
]
export const menuListAll = [
    {id: uuidv4(), title: 'Выдача денег из кассы'},
    {id: uuidv4(), title: 'Развестной товар'},
    {id: uuidv4(), title: 'Возврат по чеку'},
    {id: uuidv4(), title: 'Сумма в кассе'},
    {id: uuidv4(), title: 'Онлфйн касса'},
    {id: uuidv4(), title: 'Открыть смену'},
    {id: uuidv4(), title: 'Товар без штрих кода'},
    {id: uuidv4(), title: 'Внессение денег в кассу'},
    {id: uuidv4(), title: 'Продажа за мену'},
    {id: uuidv4(), title: 'Открыть денеж. ящик'},
    {id: uuidv4(), title: 'Закрыть смену'},
    {id: uuidv4(), title: 'Промеж. итог (X-отчет)'},
]
export const menuListShow = [
    {id: uuidv4(), title: 'Выдача денег из кассы'},
    {id: uuidv4(), title: 'Развестной товар'},
    {id: uuidv4(), title: 'Возврат по чеку'},
    {id: uuidv4(), title: 'Сумма в кассе'},
    {id: uuidv4(), title: 'Онлфйн касса'},
    {id: uuidv4(), title: 'Открыть смену'},
    {id: uuidv4(), title: 'Товар без штрих кода'},
    {id: uuidv4(), title: 'Внессение денег в кассу'},
    {id: uuidv4(), title: 'Продажа за мену'},
    {id: uuidv4(), title: 'Открыть денеж. ящик'},
    {id: uuidv4(), title: 'Закрыть смену'},
    {id: uuidv4(), title: 'Промеж. итог (X-отчет)'},
]
export const payNumberList = [
    {id: uuidv4(), value: '1'},
    {id: uuidv4(), value: '2'},
    {id: uuidv4(), value: '3'},
    {id: uuidv4(), value: '4'},
    {id: uuidv4(), value: '5'},
    {id: uuidv4(), value: '6'},
    {id: uuidv4(), value: '7'},
    {id: uuidv4(), value: '8'},
    {id: uuidv4(), value: '9'},
    {id: uuidv4(), value: '0'},
    {id: uuidv4(), value: '00'},
    {id: uuidv4(), value: '000'},
    {id: uuidv4(), value: ','},
    {id: uuidv4(), value: '<'},
]
export const menuBtns = [
    {id: uuidv4(), title: 'Левое меню'},
    {id: uuidv4(), title: 'Список товаров'},
    {id: uuidv4(), title: 'Поиск товара в ручном режиме'},
    {id: uuidv4(), title: 'Вид кассы'},
]

export const products = [
    {
        id: uuidv4(),
        "Наименование": "Молоко",
        "Штрихкод": "1234567890123",
        "Количество": 10,
        "Цена": 60,
        "Сумма": 600
    },
    {
        id: uuidv4(),
"Наименование": "Хлеб",
        "Штрихкод": "1234567890124",
        "Количество": 15,
        "Цена": 40,
        "Сумма": 600
    },
    {
        id: uuidv4(),
"Наименование": "Яблоки",
        "Штрихкод": "1234567890125",
        "Количество": 5,
        "Цена": 100,
        "Сумма": 500
    },
    {
        id: uuidv4(),
"Наименование": "Сахар",
        "Штрихкод": "1234567890126",
        "Количество": 8,
        "Цена": 50,
        "Сумма": 400
    },
    {
        id: uuidv4(),
"Наименование": "Соль",
        "Штрихкод": "1234567890127",
        "Количество": 12,
        "Цена": 20,
        "Сумма": 240
    },
    {
        id: uuidv4(),
"Наименование": "Макароны",
        "Штрихкод": "1234567890128",
        "Количество": 6,
        "Цена": 80,
        "Сумма": 480
    },
    {
        id: uuidv4(),
"Наименование": "Курица",
        "Штрихкод": "1234567890129",
        "Количество": 4,
        "Цена": 200,
        "Сумма": 800
    },
    {
        id: uuidv4(),
"Наименование": "Колбаса",
        "Штрихкод": "1234567890130",
        "Количество": 3,
        "Цена": 300,
        "Сумма": 900
    },
    {
        id: uuidv4(),
"Наименование": "Сыр",
        "Штрихкод": "1234567890131",
        "Количество": 4,
        "Цена": 250,
        "Сумма": 1000
    },
    {
        id: uuidv4(),
"Наименование": "Йогурт",
        "Штрихкод": "1234567890132",
        "Количество": 10,
        "Цена": 70,
        "Сумма": 700
    },
    {
        id: uuidv4(),
"Наименование": "Картофель",
        "Штрихкод": "1234567890133",
        "Количество": 20,
        "Цена": 30,
        "Сумма": 600
    },
    {
        id: uuidv4(),
"Наименование": "Морковь",
        "Штрихкод": "1234567890134",
        "Количество": 10,
        "Цена": 40,
        "Сумма": 400
    },
    {
        id: uuidv4(),
"Наименование": "Вода минеральная",
        "Штрихкод": "1234567890135",
        "Количество": 20,
        "Цена": 25,
        "Сумма": 500
    },
    {
        id: uuidv4(),
"Наименование": "Чай",
        "Штрихкод": "1234567890136",
        "Количество": 6,
        "Цена": 150,
        "Сумма": 900
    },
    {
        id: uuidv4(),
"Наименование": "Кофе",
        "Штрихкод": "1234567890137",
        "Количество": 5,
        "Цена": 200,
        "Сумма": 1000
    },
    {
        id: uuidv4(),
"Наименование": "Шоколад",
        "Штрихкод": "1234567890138",
        "Количество": 10,
        "Цена": 90,
        "Сумма": 900
    },
    {
        id: uuidv4(),
"Наименование": "Яйца",
        "Штрихкод": "1234567890139",
        "Количество": 12,
        "Цена": 70,
        "Сумма": 840
    },
    {
        id: uuidv4(),
"Наименование": "Сок",
        "Штрихкод": "1234567890140",
        "Количество": 8,
        "Цена": 120,
        "Сумма": 960
    },
    {
        id: uuidv4(),
"Наименование": "Мука",
        "Штрихкод": "1234567890141",
        "Количество": 10,
        "Цена": 50,
        "Сумма": 500
    },
    {
        id: uuidv4(),
"Наименование": "Рис",
        "Штрихкод": "1234567890142",
        "Количество": 7,
        "Цена": 80,
        "Сумма": 560
    }
];
