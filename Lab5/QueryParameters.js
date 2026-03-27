export default function QueryParameters(app) {
 const calculator = (req, res) => {
   const { a, b, operation } = req.query;
   let result = 0;
   switch (operation) {
     case "add":
       result = parseInt(a) + parseInt(b);
       break;
     case "subtract":
       result = parseInt(a) - parseInt(b);
       break;
     case "multiply":
       result = parseInt(a) * parseInt(b);
       break;
     case "divide":
        // no fancy divide by 0 stuff here, sorry <3
       result = parseInt(a) / parseInt(b);
       break;
     default:
       result = "Invalid operation";
   }
   res.send(result.toString());
 };
 app.get("/Lab5/calculator", calculator);
}
