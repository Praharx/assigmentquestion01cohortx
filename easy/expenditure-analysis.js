/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category:category1 ,totalAmount: total_amount_spent_on_category1 }, { category:category2, totalAmount:total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let totalCat = {};
  transactions.forEach((el)=>{
    const {category,price} = el;
    if (totalCat.hasOwnProperty(category)){
      totalCat[category]+= price;
    }else{
      totalCat[category]=price;
    }
    //just another way for if else
    //(totalCat.hasOwnProperty(category))? totalCat[category]+=price:totalCat[category]=price
  })
  const arrayTotalCat = Object.entries(totalCat).map(([category,totalSpent])=> ({
    category,
    totalSpent
  }));
  return arrayTotalCat;
  const result = (totalCat.hasOwnProperty(category))? totalCat[category]+=price:totalCat[category]=price

  
  //Method 2
  // let totalCat = [];
  // for(let i=0;i<transactions.length;i++){
  //   let found=false;
  //   let {category,price} = transactions[i];
  //   for(let j=0;j<totalCat.length;j++){
  //     if (totalCat[j].category === category){
  //       totalCat[j].totalSpent+=price;
  //       found=true;
  //       break
  //     }
  //   };
  //   if (!found){
  //     totalCat.push({category,totalSpent:price})
  //   };
  // };
  // return totalCat;
                                                     
};

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  }];

console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
