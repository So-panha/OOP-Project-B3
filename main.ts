import { Attendant } from './src/Attendant';
import { CoPilot } from './src/CoPilot';
import { Pilot } from './src/Pilot';
import { Customer } from './src/Customer';

const attendant = new Attendant(
  "A001",
  "Cabin Crew",
  "Cambodia, USA",
  "Senior",
  "BOUR",
  "SONGHA",
  19,
  "Male",
  "123 Main St",
  "66-980-232",
  "boursonga@gmail.com"
);
const coPilot = new CoPilot("C001", "5 years", "Excellent", "123456", "Training Record", "Sophanha", "Sin", 23, "Male", "123 Main St", "16-555-1234", "sophanha@gamil.com");
const pilot = new Pilot("P001", "10 years", "Captain", "A789012", "Aircraft Type", "Jane", "Smith", 35, "Female", "456 Elm St", "12-555-5678", "jane.smith@gmail.com");
const customer = new Customer("C001", "Alice", "Sreynuch", 25, "Female", "789 Oak St", "88-555-9012", "Sreynuch@gmail.com");

console.log(attendant);
// console.log(coPilot);
// console.log(pilot);
// console.log(customer);