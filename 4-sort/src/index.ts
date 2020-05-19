import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 50]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charsCollection = new CharactersCollection('Xayab');
charsCollection.sort();
console.log(charsCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-1);
linkedList.add(-3);
linkedList.add(40);

linkedList.sort();

linkedList.print();
