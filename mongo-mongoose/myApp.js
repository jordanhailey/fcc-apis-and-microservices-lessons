require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let personSchema = new mongoose.Schema({
  name: {type:String, required:true},
  age: {type:Number},
  favoriteFoods: [String]
});

let Person = new mongoose.model("Person",personSchema); // Singular name of the collection your model is for, Mongoose will look for lowercased "persons"

const doneCallback = (done) => {
  return (err,data)=>{
    if (err) return done(null)
    return done(null, data);
  }
}

const createAndSavePerson = (done) => {
  let newPerson = new Person({name:"Jordan",age:30,favoriteFoods:["tacos"]})
  newPerson.save(doneCallback(done));
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople,doneCallback(done));
};

const findPeopleByName = (personName, done) => {
  Person.find({name:personName},doneCallback(done));
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food},doneCallback(done));
};

const findPersonById = (personId, done) => {
  Person.findById(personId,doneCallback(done));
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  findPersonById(personId,(err,doc)=>{
    if (err) return;
    doc.favoriteFoods.push(foodToAdd);
    doc.save(doneCallback(done));
    })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name:personName},{age:ageToSet},{new:true},doneCallback(done));
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId,doneCallback(done));
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name:nameToRemove},doneCallback(done));
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods:foodToSearch},(err,docs)=>{
    if (err) return;
    let [p1,p2] = docs.sort((a,b)=> a.name > b.name ? 1 : -1).slice(0,2)
    p1.age = undefined;
    p2.age = undefined;
    doneCallback(done)(err,[p1,p2])
  })
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
