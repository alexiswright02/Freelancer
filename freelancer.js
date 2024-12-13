// === State ===
// Here, we define variables for the data that our program needs to remember.

//list to appear immediately 
const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50,
  },
  {
    name: "Carol",
    occupation: "Programmer",
    price: 70,
  },
];
const maxFreelancers = 10;

//calculation to find average starting price for first 3 freelancers
function calcAverage() {
  const totalPrice = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return (totalPrice / freelancers.length).toFixed(2);
}

//new names and updated occupations and prices
const names = ["Sarah", "David", "Eve", "Frank", "Peter", "Sue", "Tori"];
const occupations = ["Programmer", "Designer", "Teacher", "Manager", "Writer"];
const prices = [30, 40, 50, 60, 70, 80];

function addFreelancer() {
  //choose random name
  const nameIndex = Math.floor(Math.random() * names.length);
  //ensuring names only get used once by removing the last name from the array
  const name = names.splice(nameIndex, 1)[0];
  //random occupation which can be used multiple times
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  //random price which can be used multiple times
  const price = prices[Math.floor(Math.random() * prices.length)];
  //pushing generated freelancer to freelancer list
  freelancers.push({ name, occupation, price });
}

// === Render ===
/** Updates the DOM to reflect the current state. */
function render() {
  const freelancerList = document.querySelector("#freelancers");
  const averagePriceElement = document.querySelector("#average-price");

  freelancerList.innerHTML = freelancers
  .map(
    (freelancer) =>
      `<li>${freelancer.name} - ${freelancer.occupation} -  $${freelancer.price}</li>`
  )
  .join("");


  //updating calculation for each new freelancer
  const averagePrice = calcAverage();
  averagePriceElement.textContent = `Average Starting Price: ${averagePrice}`;

  //counting every freelancer listed on the page
  const counter = document.querySelector("#freelancer-counter");
  counter.textContent = `Total Freelancers: ${freelancers.length}`;
}

// === Script ===
// In this section, we call the functions that we've defined above.
const addFreelancerInterval = setInterval(() => {
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerInterval);
    return;
  }
  addFreelancer();
  render();
}, 3000);

render();