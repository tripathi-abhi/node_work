// const fs = require('fs');
// // const book = {
// //     Title: 'Ego is the enemy',
// //     Author: 'Ryan Holiday',
// // }

// // stringify an object
// // const bookJSON = JSON.stringify(book);
// // fs.appendFileSync('1-json.json',bookJSON);

// // console.log(bookJSON);

// // parsing string to object
// // const parsedBook=JSON.parse(bookJSON);
// // console.log(parsedBook.Title);

// // const dataJSON=fs.readFileSync('1-json.json','utf-8');
// // const data = JSON.parse(dataJSON);
// // console.log(data.Title);

// const personalDetailsJSON = fs.readFileSync('1-json.json').toString();
// const personalDetails= JSON.parse(personalDetailsJSON);
// personalDetails.name = "Abhishek";
// personalDetails.age="20";
// console.log(personalDetails);
// const newPersonalDetailsJSON = JSON.stringify(personalDetails);
// fs.writeFileSync('1-json.json',newPersonalDetailsJSON);

if (process.argv[2]) {
	const address = process.argv[2];
	console.log("argument recieved : ", address);
} else {
	return console.log("Address argument required");
}
