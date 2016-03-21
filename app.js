var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp"); // create a db called yelp_camp

app.use(bodyParser.urlencoded({extended: true})); // Populates the req.body so that we can retrieve information from the user's input
app.set("view engine", "ejs"); // set rendering file to .ejs files

var campGrounds = [
    {name: "Salmon Creek", image: "http://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg?20080730123152"},
    {name: "Salmon A", image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Camping_by_Barriere_Lake,_British_Columbia_-_20040801.jpg"},
    {name: "Salmon B", image: "http://weknowyourdreamz.com/images/camping/camping-04.jpg"}
];

// Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// Model the db with the variable Campground, using the defined schema
var Campground = mongoose.model("Campground", campgroundSchema); // Campground will be pluralized!


// Create a new campground and add it to the db manually!
/*
Campground.create(
    {
        name: "Salmon Creek",
        image: "http://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg?20080730123152",
        description: "This is a very good campground"
        
    }, function(err,campground){
        if (err){
            console.log(err);
        } else {
            console.log("New campground created!");
            console.log(campground);
        }
    });
*/



app.get("/", function(req,res){
    res.render("landing");
});

// CREATE -- add new campground to DB
app.post("/campgrounds", function(req, res){
   // Get data from form  and add to campgrounds array
   // Redirect back to campgrounds page
   var name = req.body.name;
   var image = req.body.image;
   var description = req.body.description;
   var newCamp = {name: name, image: image, description:description};
   // Create new campground and save to the data base
   Campground.create(newCamp,function(err,newCamp){
       if (err){
           console.log(err);
       }
       else {
           console.log("New camp added successfully!");
           res.redirect("/campgrounds");
       }
   });
   
});

// INDEX route, which shows all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err,allCamps){ // the 2nd parameter matches!
        if (err){
            console.log(err);
        } else {
            res.render("index",{campGrounds:allCamps}); // the 2nd parameter matches!
        }                   // the frist param., campGrounds, is the one that will
                            // be used in the .ejs file
    });
    
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req,res){
    res.render("new");
})

// Show more info about one campground
app.get("/campgrounds/:id", function(req,res){
    // method provided by mongodb to find an object by ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if (err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground}); 
        }           // Passing the value stored in foundCampground into a variable called campground,
                    // which we will use in the .ejs file
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running"); 
});