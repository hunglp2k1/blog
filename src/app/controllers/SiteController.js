const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /
    async index(req, res, next) {
        // Get data from MongoDB
        // try {
        //     const courses = await Course.find({});
        //     const coursesLit = courses.map((course) => {
        //         course.toObject();
        //     });
        //     res.render('home', { coursesLit });
        // } catch {
        //     res.status(400).json({ error: 'Error!!' });
        // }
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
