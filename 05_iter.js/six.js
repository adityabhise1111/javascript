// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);  //used but  not as written in the forEach method

const munums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newnums = munums.map((num) => num * 2);
// console.log(newnums);

const fewnums = munums.filter((shit) => shit > 5)
// console.log(fewnums)

const eeunums = munums.filter((shit) => {shit > 5})
//wont work scope started need to return
// console.log(eeunums)


// const dewnums = munums.filter((shit) => {return shit > 5})
// console.log(dewnums)

// const meownums =[]
// munums.forEach((num)=>{
//     if(nums>5){
//         meownums.push(num)
//     }
// })



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// const myFav= books.filter((bk)=>(bk.publish ==1981)&&(bk.genre==='Fiction'))
// console.log(myFav)

const yourFav= books
        .filter((book)=>book.edition>=2005)
        .map((book)=>book.genre)
console.log(yourFav);


// .map() vs .filter() in JavaScript
// ---------------------------------------------------------
// | Method  | Purpose                                      |
// ---------------------------------------------------------
// | .map()  | Transforms each element in an array and      |
// |         | returns a new array with the transformed     |
// |         | elements.                                    |
// ---------------------------------------------------------
// | .filter()| Filters elements in an array based on a     |
// |          | condition and returns a new array with      |
// |          | elements that meet the condition.           |
// ---------------------------------------------------------
