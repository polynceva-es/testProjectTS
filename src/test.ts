//если функция ничего не возвращает, но функция завершится!
  //? если параметр не обязательный
  // const log = (name: string, userID?: string): void => {
  //   console.log(x, name, "with ID", userID || "anyOne");
  // };
  //если функция ничего не возвращает, но функция НЕ завершится! может закончится ошибкой
  // const carsh = (): never => {
  //   throw new Error("error!");
  // };

  //interface for typing objects!!!
  // interface Car {
  //   wheels: number;
  //   brand: string;
  //   type: string;
  //   isNew: boolean;
  //   name?: string;

  //   [key: string]: unknown;
  // }
  // const car: Car = {
  //   wheels: 4,
  //   brand: "BMW",
  //   type: "sedan",
  //   isNew: false,
  // };

  // car.go = true;

  // const obj1 = {
  //   firstName: "kate",
  //   lastName: '2',
  // };

  // const printPoint = (user: { firstName: string; lastName?: string }): void => {
  //   console.log(
  //     `firstName ${user.firstName.toUpperCase()} and lastName ${
  //       user.lastName ? user.lastName.toUpperCase() : "undefined"
  //     }`
  //   );
  // };

  // printPoint(obj1);

  // Создайте интерфейсы User и Admin.

  // interface User {
  //   login: string;
  //   email: string;
  //   password: string;
  //   isOnline: boolean;
  //   lastVisited: Date;
  // }

  // interface Admin {
  //   login: string;
  //   email: string;
  //   password: string;
  //   isOnline: boolean;
  //   lastVisited: Date;
  //   role: string;
  // }

  // const user1: User = {
  //   login: '',
  //   password: '123',
  //   email: 'm@m.ru',
  //   isOnline: false,
  //   lastVisited: new Date(),
  // }

  // Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.
  // const login = (obj: { login: string; password: string }): void => {
  //   if (obj.login.length > 0 && obj.password.length > 0) {
  //     console.log("Hello, ", obj.login);
  //   } else {
  //     return;
  //   }
  // };

// const numbers: Array<number> = [1, 2, 3, 4];


//Кортеж - частный случай массива с ограниченным количеством элементов, содержат разрозненный тип информации
// const pairs: [string, string][] = [['key1', 'value1'], ['key2', 'value2']];
// const data: [number, boolean] = [1, false]
  

//type === aliase
//Пишется с большой буквы

//union - перечисление доступных вариантов
// type Status = 'ok' | 'loading' | 'error';

// Дан union-тип Level с уровнями позиция для разработчиков. 
// Он же назначен для интерфейса Developer.

// Необходимо создать функцию gradeDeveloper, которая будет принимать объект пользователя 
// с ключом level и новый уровень. 
// В теле функции для полученного объекта должен назначаться следующий уровень.

// type Level = 'junior' | 'middle' | 'senior';
 
// interface User {
//   login: string,
//   skills: string[],
//   level: Level, 
// }
// const user1: User = {
//   login: 'Kate',
//   skills: ['fine', 'ok'],
//   level: "senior"
// } 
 
// // create a function that change level of incoming developer
// const gradeDeveloper = (user: {level: Level}, newLevel: Level) => {
// user.level = newLevel;
//   }

// gradeDeveloper(user1, "junior")

//enum - самовызывающаяся функция - структура

// enum Status {
//   OK = 'ok', 
//   LOADING = 'loading',
//   ERROR = 'error'};

// const fun = (status: string) => {
//   if(status === Status.OK) {
//     console.log('ok')
//   } else {
//     return
//   }
// } 

// fun('ok1')

// Примитивные типы: Number, String, Symbol, Boolean, undefined, null, any(отключает типизацию)/unknown(заставляет уточнять тип - проверка)
//Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:
// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle

// type Product = {
//   price: number,
//   isNew: boolean,
//   isSale: boolean,
//   title: string
// }

// type Vehicle = {
//   wheels: number,
//   year: number,
//   brand: string
// }

// type Car = {
//   type: string,
//   model: string,
// } & Product & Vehicle

// const car1: Car = {

// }

// interface IProduct {
//   price: number,
//   isNew: boolean,
//   isSale?: boolean,
//   title: string
// }

// interface IVehicle {
//   wheels: number,
//   year: number,
//   brand: string
// }

// interface ICar extends IProduct, IVehicle {
//   type: string,
//   model: string,
// }

// const car2: ICar = {

// }

//null === object :(

//is in as ???

// Опишите функции type guards (защитник, функция которая что-то гарантирует) и выведите их типы.

// interface Order {
//   address: string;
// }
// interface TelephoneOrder extends Order {
//   callerNumber: string;
// }
// interface InternetOrder extends Order {
//   email: string;
// }

// type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

// function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
//   // return (order as InternetOrder).email !== undefined
//   return !!order && 'email' in order
// }

// function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
//   return (order as TelephoneOrder).callerNumber !== undefined
// }

// function makeOrder(order: PossibleOrders) {
//   if (isAnInternetOrder(order)) {
//     console.log(order.email);
//   } else if (isATelephoneOrder(order)) {
//     console.log(order.callerNumber);
//   }
// }


// Дана функция head, которая возвращает либо первый символ переданной строки, либо первый элемент переданного массива.

// Приведенные типы функции заведомо избыточны. Необходимо переписать их, используя подход перегрузки.

// function head(value: string | number[] | boolean[]): string | number | boolean {
//   return value[0];
// }

// function head (value: string): string;
// function head (value: Array<number>): number;
// function head (value: Array<boolean>): boolean;

// function head (value: any): any {
//   return value[0]
// }

// const x = head('hjhjhb');
// const y = head([1,2,3]);
// const z = head([true, false, false]);



// Затипизируйте данную функцию:

// function append(el, list) {
//   return list.concat(el)
// }


// function append <T>(el: T, list: T[]): T[] {
//   return list.concat(el)
// }


// const append = <T> (el: T, list: T[]): T[] => list.concat(el);

// Опишите типы для двух функций:

// function keys<T extends object>(obj:T): Array<keyof T> {
//   const currentKeys = [];
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) currentKeys.push(key);
//   }
//   return currentKeys;
// }

// function values<O extends object>(obj: O): Array<O[keyof O]> {
//   const currentValues = [];
//   for (let key in obj) {
//     currentValues.push(obj[key]);
//   }
//   return currentValues;
// }


// const summ = (a: number, b: number): number => {
// const summ = a + b;
// return summ
// }

// const result = summ (2, 3);
// console.log(result)

// const sumArray = (nums: number[]): number => {
//   const result = nums.reduce((summ, currentNumber)=> {
//       return summ + currentNumber;
//   }, 0)
//   return result
//   };
