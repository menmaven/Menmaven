import Pants from './Pants';
import Shirts from './Shirts';
import Shoes from './Shoes';

const fakeData = [
	...Pants,
	...Shirts,
	...Shoes
];

// const shuffle = a => {
//     for (let i = a.length; i; i--) {
//         let j = Math.floor(Math.random() * i);
//         [a[i - 1], a[j]] = [a[j], a[i - 1]];
//     }
// }

export default fakeData;
