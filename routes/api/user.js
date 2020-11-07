const router =require("express").Router();

router.get("/test", (req, res) => {
    res.json(true);
});


 // Route for getting some data about our user to be used client side
router.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        username: req.user.username,
        profilePicture: req.user.profilePicture,
        cloudUploadName: process.env.CLAUDINARY_CLOUDNAME,
        cloudUploadPreset: process.env.CLAUDINARY_PRESET
      });
    }
  });

module.exports= router;