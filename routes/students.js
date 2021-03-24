const controllers = require("../controllers/students");
const { Router } = require("express");

const router = Router();

router.get("/students", controllers.getStudents);
router.get("/students/:id", controllers.getStudent);
router.post("/students", controllers.createStudent);
router.put("/students/:id", controllers.updateStudent);
router.delete("/students/:id", controllers.deleteStudent);

module.exports = router;
