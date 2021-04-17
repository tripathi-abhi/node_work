// const name = "Andrew";
// const age = 18;

// const user = {
// 	name,
// 	age,
// 	location: "India",
// };

// console.log(user);

// destructuring

const user = {
	name: "Andrew",
	age: 18,
	location: "India",
};

// destructuring, renaming and default values
// const { name: nam1, age = "19", rating = 1 } = user;
// console.log(nam1, age, rating);

const trans = ({ name, age } = {}) => {
	console.log(name, age);
};

trans();
