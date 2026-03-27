const module = {
  id: 1, name: "Introduction to Web Development",
  description: "Learn the basics of HTML, CSS, and JavaScript",
  course: "CS4550",
};
const assignment = {
  id: 1, title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10", completed: false, score: 0,
};
export default function WorkingWithObjects(app) {
  const getAssignment = (req, res) => {
    res.json(assignment);
  };
  const getAssignmentTitle = (req, res) => {
    res.json(assignment.title);
  };
   const setAssignmentTitle = (req, res) => {
   const { newTitle } = req.params;
   assignment.title = newTitle;
   res.json(assignment);
 };

 const getModule = (req, res) => {
   res.json(module);
 };
 const getModuleName = (req, res) => {
   res.json(module.name);
 };
 const setModuleName = (req, res) => {
   module.name = req.params.newName;
   res.json(module);
 };
 const setAssignmentScore = (req, res) => {
   assignment.score = parseFloat(req.params.newScore);
   res.json(assignment);
 };
 const setAssignmentCompleted = (req, res) => {
   assignment.completed = req.params.newCompleted === "true";
   res.json(assignment);
 };
 const setModuleDescription = (req, res) => {
   module.description = req.params.newDescription;
   res.json(module);
 };
 app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);
 app.get("/Lab5/assignment/title", getAssignmentTitle);
 app.get("/Lab5/assignment", getAssignment);
 app.get("/lab5/assignment/score/:newScore", setAssignmentScore);
 app.get("/lab5/assignment/completed/:newCompleted", setAssignmentCompleted);
 app.get("/Lab5/module", getModule);
 app.get("/Lab5/module/name", getModuleName);
 app.get("/lab5/module/name/:newName", setModuleName);
 app.get("/lab5/module/description/:newDescription", setModuleDescription);
};
