export default function PathParameters(app) {
 const add = (req, res) => {
   const { a, b } = req.params;
   const sum = parseInt(a) + parseInt(b);
   res.send(sum.toString());
 };
 const substract = (req, res) => {
   const { a, b } = req.params;
   const sum = parseInt(a) - parseInt(b);
   res.send(sum.toString());
 };
 const multiply = (req, res) => {
  const {a, b} = req.params;
  const product = parseInt(a) * parseInt(b);
  res.send(product.toString());
 } 
 const divide = (req, res) => {
  const {a, b} = req.params;
  const numA = parseInt(a);
  const numB = parseInt(b);

  if (b === 0) {
    return res.send("invalid");
  }

  const quotient = numA / numB;
  res.send(quotient.toString());
 } 

 app.get("/Lab5/add/:a/:b", add);
 app.get("/Lab5/subtract/:a/:b", substract);
 app.get("/Lab5/multiply/:a/:b", multiply);
 app.get("/Lab5/divide/:a/:b", divide);
};
