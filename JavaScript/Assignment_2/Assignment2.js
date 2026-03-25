// 1: Student Report System


const students = [
  { name: "Divy", marks: [80, 75, 90] },
  { name: "Jal", marks: [55, 60, 48] },
  { name: "Aditya", marks: [30, 40, 35] },
  { name: "SHakti", marks: [90, 85, 95] },
];

const studentReport = students.map((student) => {
  const average = student.marks.reduce((sum, m) => sum + m, 0) / student.marks.length;

  let result;
  if (average >= 75) result = "Distinction";
  else if (average >= 50) result = "Pass";
  else result = "Fail";

  return { ...student, result };
});

console.log("1. Student Report System");
console.log(studentReport)


// 2: Shopping Cart Analyzer

const items = [
  {ItemName : "IPhone", ItemPrice : 90000, Quantity : 2},
  {ItemName : "Banana", ItemPrice : 15 , Quantity : 4},
  {ItemName : "Laptop", ItemPrice : 120000, Quantity : 1},
  {ItemName : "Chips", ItemPrice : 40, Quantity : 8 }
];

 function analyzeCart(...items){
  let totalAmount = 0;
  let totalQuantity = 0;
  totalAmount = items.reduce((total, item) =>
  total + item.ItemPrice * item.Quantity , 0
  );

  totalQuantity = items.reduce((totalQuantinty, iTem) =>
  totalQuantinty + iTem.Quantity
  ,0);

  return {totalAmount,totalQuantity};
}

const cartResult = analyzeCart(...items);

console.log("2: Shopping Cart Analyzer");
console.log(cartResult);


// 3: User Profile Updater

const userProfile = {
  userName : "Divy Patel",
  userAge : 23,
  city : "Vadodara"
}

function updatesUserProfile(updatedCity, userProfession){
  return {...userProfile, city : updatedCity, userProfession};
}

const updatedUserProfile = updatesUserProfile("Halol", "Java Developer");
console.log("3: User Profile Updater");
console.log(userProfile);
console.log(updatedUserProfile);



// 4: Product Filter & Transform

const products = [
  { productName: "Skincare Kit", productPrice: 5000 },
  { productName: "Dry-fruits Kit", productPrice: 400 },
  { productName: "SmartPhone-Accessories Kit", productPrice: 3500 },
  { productName: "Cricket Kit", productPrice: 8000 }
];


const priceGreaterThan1000Products = products.filter(
  (product) => product.productPrice > 1000
)


const productsWithDiscount = priceGreaterThan1000Products.map((product) => {
  const updatedPrice = product.productPrice - product.productPrice * 0.1

  return {...product,discountedPrice: updatedPrice}
});

console.log("4: Product Filter & Transform");
console.log(products);
console.log(priceGreaterThan1000Products);
console.log(productsWithDiscount);

// 5: Dynamic Number Processor

const numbers = [23, 12, 34, 45, 56, 67, 78, 89, 90];

function dynamicNumberProcessor(...nums) {
  const evenNumbers = nums.filter(num => num % 2 === 0);
  const oddNumbers = nums.filter(num => num % 2 !== 0);

  const sumEven = evenNumbers.reduce((total, num) => total + num, 0);
  const sumOdd = oddNumbers.reduce((total, num) => total + num, 0);

  return { evenNumbers, oddNumbers, sumEven, sumOdd };
}

const result = dynamicNumberProcessor(...numbers);

console.log("5. Dynamic Number Processor")
console.log(result);