// Assignment 8 — complete solutions and runnable demonstrations for Q1–Q9.
const runners = {};
const output = (id, lines) => document.getElementById(id).textContent = lines.join("\n");

// Q1: Student Result Processing (reduce + Classes)
class Student {
  constructor(name, marks) { this.name = name; this.marks = marks; }
  calculateAverage() {
    if (!this.marks.length) throw new Error("Marks list cannot be empty.");
    return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
  }
  getGrade() {
    const avg = this.calculateAverage();
    return avg >= 80 ? "A" : avg >= 60 ? "B" : avg >= 40 ? "C" : "F";
  }
}
runners.q1 = () => {
  const students = [new Student("Aarav", [88,92,84,90]), new Student("Diya", [72,65,70,68]), new Student("Kabir", [35,42,38,40])];
  output("q1", ["Student Result Processing", ...students.map(s => `${s.name}: marks [${s.marks}], average ${s.calculateAverage().toFixed(2)}, grade ${s.getGrade()}`)]);
};

// Q2: Online Food Ordering (map + reduce + error handling)
const menu = [{name:"Burger",price:120},{name:"Pizza",price:250},{name:"Pasta",price:180},{name:"Sandwich",price:100}];
function calculateBill(orderItems) {
  const prices = orderItems.map(name => {
    const item = menu.find(m => m.name.toLowerCase() === String(name).toLowerCase());
    if (!item) throw new Error(`Invalid menu item: ${name}`);
    return item.price;
  });
  return { prices, total: prices.reduce((sum, price) => sum + price, 0) };
}
runners.q2 = () => {
  const lines = ["Online Food Ordering", "Menu: " + menu.map(i => `${i.name} ₹${i.price}`).join(" | ")];
  try { const order=["Burger","Pasta","Sandwich"], bill=calculateBill(order); lines.push(`Order: ${order.join(", ")}`,`Prices from map(): ${bill.prices}`,`Total from reduce(): ₹${bill.total}`); } catch(e) { lines.push(e.message); }
  try { calculateBill(["Pizza","Sushi"]); } catch(e) { lines.push("Handled with try/catch: " + e.message); }
  output("q2", lines);
};

// Q3: Product Discount System (constructor + prototype)
function Product(name, price) { if (price < 0) throw new Error("Price cannot be negative."); this.name=name; this.price=price; }
Product.prototype.applyDiscount = function(percent) { if(percent<0||percent>100) throw new Error("Discount must be 0–100%."); return this.price-(this.price*percent/100); };
runners.q3 = () => {
  const products=[new Product("Laptop",60000),new Product("Headphones",3000),new Product("Keyboard",2500)], discounts=[10,20,15];
  output("q3", ["Product Discount System", ...products.map((p,i)=>`${p.name}: ₹${p.price} less ${discounts[i]}% = ₹${p.applyDiscount(discounts[i]).toLocaleString("en-IN")}`), "Abstraction: applyDiscount() hides the calculation details behind one simple method call."]);
};

// Q4: Employee Inheritance + runtime polymorphism
class Employee { constructor(name,department){this.name=name;this.department=department;} work(){return `${this.name} works in ${this.department}.`;} }
class Manager extends Employee { work(){return `${this.name} manages the ${this.department} department and guides the team.`;} }
runners.q4 = () => { const team=[new Employee("Riya","Engineering"),new Manager("Arjun","Sales"),new Employee("Meera","HR"),new Manager("Dev","Marketing")]; output("q4",["Employee / Manager work() output:",...team.map(p=>p.work()),"Same method call, different implementation according to the object's class: runtime polymorphism."]); };

// Q5: Ride-Sharing Application
class User { constructor(name,rating){this.name=name;this.rating=rating;} }
class Driver extends User { constructor(name,rating,vehicle,registration){super(name,rating);this.vehicle=vehicle;this.registration=registration;} }
class Trip {
  constructor(fromLocation,toLocation,distance,driver){this.fromLocation=fromLocation;this.toLocation=toLocation;this.distance=distance;this.driver=driver;}
  calculateFare(){if(this.distance===undefined||this.distance===null||this.distance==="")throw new Error("Trip distance must be provided.");if(!Number.isFinite(Number(this.distance))||Number(this.distance)<0)throw new Error("Distance must be a valid non-negative number.");return 40+Number(this.distance)*12;}
}
runners.q5 = () => {
  const d=new Driver("Sahil",4.8,"Sedan","MH-01-AB-1234"), lines=[`Driver: ${d.name}, rating ${d.rating}, ${d.vehicle} (${d.registration})`];
  try{const t=new Trip("Andheri","Bandra",12,d);lines.push(`${t.fromLocation} → ${t.toLocation}, ${t.distance} km, fare ₹${t.calculateFare()}`);}catch(e){lines.push(e.message);}
  for(const distance of [-5,undefined])try{new Trip("A","B",distance,d).calculateFare();}catch(e){lines.push("Handled invalid trip: "+e.message);}
  output("q5",lines);
};

// Q6: E-Commerce Inventory System
const inventory=[{id:1,name:"Laptop",category:"Electronics",price:55000,stock:4},{id:2,name:"Mouse",category:"Accessories",price:700,stock:25},{id:3,name:"Monitor",category:"Electronics",price:12000,stock:3},{id:4,name:"Notebook",category:"Stationery",price:80,stock:50},{id:5,name:"Keyboard",category:"Accessories",price:1500,stock:7},{id:6,name:"Pen Set",category:"Stationery",price:150,stock:5}];
function getLowStockProducts(items,limit=5){return items.filter(p=>p.stock<=limit);}
function sortProductsByPrice(items){return [...items].sort((a,b)=>a.price-b.price);}
function calculateTotalInventoryValue(items){return items.reduce((sum,p)=>sum+p.price*p.stock,0);}
function groupByCategory(items){return items.reduce((groups,p)=>{(groups[p.category]??=[]).push(p);return groups;},{});}
runners.q6 = () => {const groups=groupByCategory(inventory);output("q6",["Low stock (5 or fewer): "+getLowStockProducts(inventory).map(p=>p.name).join(", "),"Sorted by price: "+sortProductsByPrice(inventory).map(p=>`${p.name} ₹${p.price}`).join(" | "),"Total inventory value: ₹"+calculateTotalInventoryValue(inventory).toLocaleString("en-IN"),"Grouped by category:",...Object.entries(groups).map(([k,v])=>`  ${k}: ${v.map(p=>p.name).join(", ")}`)]);};

// Q7: Banking Application (private field / encapsulation)
class BankAccount {
  #balance;
  constructor(balance=0){if(!Number.isFinite(balance)||balance<0)throw new Error("Opening balance must be non-negative.");this.#balance=balance;}
  deposit(amount){if(!Number.isFinite(amount)||amount<=0)throw new Error("Deposit must be greater than zero.");this.#balance+=amount;return this.#balance;}
  withdraw(amount){if(!Number.isFinite(amount)||amount<=0)throw new Error("Withdrawal must be greater than zero.");if(amount>this.#balance)throw new Error("Insufficient balance. Withdrawal declined.");this.#balance-=amount;return this.#balance;}
  getBalance(){return this.#balance;}
}
runners.q7 = () => {const a=new BankAccount(5000),lines=[`Opening balance: ₹${a.getBalance()}`,`Deposit ₹2,000 → ₹${a.deposit(2000)}`,`Withdraw ₹1,000 → ₹${a.withdraw(1000)}`];try{a.withdraw(10000);}catch(e){lines.push("Handled invalid withdrawal: "+e.message);}lines.push(`Final balance: ₹${a.getBalance()}`,"#balance is private and accessed only through public methods.");output("q7",lines);};

// Q8: Movie Ticket Booking + inherited prototype method
class MovieTicket { constructor(movieName,seatNo,price){this.movieName=movieName;this.seatNo=seatNo;this.price=price;} }
MovieTicket.prototype.printTicket=function(){return `Movie: ${this.movieName} | Seat: ${this.seatNo} | Ticket price: ₹${this.price}`;};
class OnlineTicket extends MovieTicket { constructor(movieName,seatNo,price,convenienceFee){super(movieName,seatNo,price);this.convenienceFee=convenienceFee;} getTotalAmount(){return this.price+this.convenienceFee;} }
runners.q8 = () => {const tickets=[new OnlineTicket("The Space Journey","A12",250,30),new OnlineTicket("Mystery Island","B07",200,25)];output("q8",[...tickets.flatMap(t=>[t.printTicket(),`Convenience fee ₹${t.convenienceFee}; total ₹${t.getTotalAmount()}`]),`Prototype checks: OnlineTicket = ${tickets[0] instanceof OnlineTicket}; MovieTicket = ${tickets[0] instanceof MovieTicket}`,"printTicket() is inherited from MovieTicket.prototype."]);};

// Q9: Fitness App Analytics
class FitnessAnalytics {
  constructor(data){if(!Array.isArray(data)||data.length===0)throw new Error("Workout dataset cannot be empty.");this.data=data;}
  getActiveUsers(){return this.data.filter(u=>u.steps>7000);}
  getAverageCalories(){return this.data.reduce((sum,u)=>sum+u.calories,0)/this.data.length;}
  getUserSummary(){return this.data.map(u=>`${u.user} walked ${u.steps.toLocaleString("en-IN")} steps and burned ${u.calories} calories.`);}
}
runners.q9 = () => {const a=new FitnessAnalytics([{user:"A",steps:8000,calories:300},{user:"B",steps:12000,calories:500},{user:"C",steps:4000,calories:200}]),lines=["Active users (> 7,000 steps): "+a.getActiveUsers().map(u=>u.user).join(", "),`Average calories: ${a.getAverageCalories().toFixed(2)}`,"User summaries:",...a.getUserSummary()];try{new FitnessAnalytics([]);}catch(e){lines.push("Handled empty dataset: "+e.message);}output("q9",lines);};

document.querySelectorAll("[data-run]").forEach(button=>button.addEventListener("click",()=>runners[button.dataset.run]()));
document.getElementById("runAll").addEventListener("click",()=>Object.values(runners).forEach(run=>run()));
document.getElementById("clearAll").addEventListener("click",()=>{for(let i=1;i<=9;i++)document.getElementById("q"+i).textContent="Output cleared. Click Run to see output.";});
