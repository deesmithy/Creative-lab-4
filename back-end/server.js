const express = require('express');
const bodyParser = require("body-parser");

const app = express();
// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});



// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos/', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});


//FOR A PERSON
const personSchema = new mongoose.Schema({
  name: String,
  bio: String,
  path: String,

})
const Person = mongoose.model('Person', personSchema);

app.post('/api/people', async (req, res) => {
  const person = new Person({
    name: req.body.name,
    bio: req.body.bio,
    path: req.body.path,
    
  });
  try {
    
    await person.save();
    res.send(person);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the people in the group.
app.get('/api/people', async (req, res) => {
  try {
    let people = await Person.find();
    res.send(people);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/people/:id', async (req, res) => {
  try {
    await Person.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/people/:id', async (req, res) => {
  try {
    let person = await Person.findOne({
      _id: req.params.id
    });

    person.name = req.body.title;
    person.bio = req.body.description;
    person.save();

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
)


// // Create a scheme for items in the museum: a title and a path to an image.
// const itemSchema = new mongoose.Schema({
//   title: String,
//   path: String,
//   description: String,
// });


// // Create a model for items in the museum.
// const Item = mongoose.model('Item', itemSchema);



// // Create a new item in the museum: takes a title and a path to an image.
// app.post('/api/items', async (req, res) => {
//   const item = new Item({
//     title: req.body.title,
//     path: req.body.path,
//     description: req.body.description,
//   });
//   try {
    
//     await item.save();
//     res.send(item);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// // Get a list of all of the items in the museum.
// app.get('/api/items', async (req, res) => {
//   try {
//     let items = await Item.find();
//     res.send(items);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// app.delete('/api/items/:id', async (req, res) => {
//   try {
//     await Item.deleteOne({
//       _id: req.params.id
//     });
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// app.put('/api/items/:id', async (req, res) => {
//   try {
//     let item = await Item.findOne({
//       _id: req.params.id
//     });

//     item.title = req.body.title;
//     item.description = req.body.description;
//     item.save();

//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// }
// )


app.listen(3000, () => console.log('Server listening on port 3000!'));
