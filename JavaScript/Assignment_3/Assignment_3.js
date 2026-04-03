/*
1. Employee Salary Processor
• Filter employees with salary greater than 40,000
• Increase their salary by 10%
• Add a new property:
• "level":
o salary ≥ 70000 → "Senior"
o else → "Mid"
• Return a new array (do not modify original)
2. Order Management System
For each order:
1. Calculate total amount
2. Calculate total items quantity
3. Return new array
*/


const Employees = [
  {Name : "Divy Patel", Salary : 54000},
  {Name : "Aditya Motavar", Salary : 78000},
  {Name : "Sudharna Chauhan", Salary : 80000},
  {Name : "Jal Gnadhi", Salary : 45000},
  {Name : "Happy Patel", Salary : 39000}
];

// const filteredEmployees = Employees.map((emps) => {
//   emps.Salary = emps.Salary * 1.1;

// Employees.filter(imps => imps.Salary > 40000);

// return {...greater};
// });

// console.log(filteredEmployees);   -> this won't work


const f1 = Employees
  .filter(emp => emp.Salary > 40000)
  .map(emp => {
    const newSalary = Math.round(emp.Salary * 1.1);
    const level = newSalary > 70000 ? 'Senior' : 'Mid';

    return {
      ...emp,
      Salary: newSalary,
      level
    };
  });



console.log(Employees);
console.log(f1);
console.log("-------------------------------------------------------------------------------------------------");


// order management system

const order = [
  {orderId : 1,
    customerName: "Divy Patel",
    item : [
      {itemName: 'Laptop', itemPrice : 60000, orderedQuantity : 2},
      {itemName: 'Smart Phone', itemPrice : 90000, orderedQuantity : 1}
    ]
  },

  {orderId : 2,
    customerName: "Jal Gandhi",
    item : [
      {itemName: 'Laptop', itemPrice : 60000, orderedQuantity : 1},
      {itemName: 'Smart Phone', itemPrice : 90000, orderedQuantity : 3},
      {itemName: 'Head Phone', itemPrice : 8000, orderedQuantity : 2}
    ]
  }
];
console.log("Orders:");
console.log(JSON.stringify(order, null, 2));



const total = order.map(orders => {

  const totalAmount = orders.item.reduce((sum, item) =>{
    return sum + (item.itemPrice * item.orderedQuantity);
  },0);

  const totalQuantity = orders.item.reduce((sum, item) =>{
    return sum + item.orderedQuantity;
  },0);


  return {
    ...orders,
    totalAmount,
    totalQuantity
  };

});

console.log("Result:");
console.log(JSON.stringify(total, null, 2));
