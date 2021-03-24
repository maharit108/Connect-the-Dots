const controllers = require("../controllers/tutors");
const { Router } = require("express");

const router = Router();

router.get("/tutors", controllers.getTutors);
router.get("/tutors/:id", controllers.getTutor);

module.exports = router;
