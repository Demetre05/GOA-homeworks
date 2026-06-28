const students = ['John', 'Jane', 'Mike'];
students.push('Alice');
students.pop();
students.unshift('Bob');
students.shift();
console.log(students);

const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'broccoli', 'spinach'];
const groceryList = fruits.concat(vegetables);
console.log(groceryList);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.slice(3, 7);
console.log(newNumbers);
console.log(numbers);

const cart = [];
cart.push('Milk');
cart.push('Bread');
cart.push('Eggs');
cart.shift();
cart.unshift('Cheese');
cart.pop();
console.log(cart);

const favoriteMovies = ['Inception', 'The Matrix', 'Interstellar'];
const newMovies = ['Tenet', 'Dune'];
const allMovies = favoriteMovies.concat(newMovies);
const topThreeMovies = allMovies.slice(0, 3);
console.log(topThreeMovies);
console.log(allMovies);