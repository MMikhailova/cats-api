import Cat from '../models/cat.js';
const routerControllers = {
  getCats: (req, res) => {
    const cats = Cat.getCats();
    res.status(200).render('cats', { cats: cats });
  },
  getCat: (req, res) => {
    const { id } = req.params;
    const cat = Cat.getCat(id);
    res.status(200).render('cat', { cat: cat });
  },
  addCat: (req, res) => {
    const { name, age, breed, img } = req.body;
    const newCat = new Cat(name, age, breed, img);
    newCat.addCat();
    res.status(200).send(`The Cat is added`);
  },
  updateCat: (req, res) => {
    const { id } = req.params;
    const { name, age, breed, img } = req.body;

    const updatedCat = { name, age, breed, img };
    const catExist = Cat.updateCat(id, updatedCat);
    if (catExist) {
      res.status(200).send(`The Cat is updated`);
    } else {
      res.status(200).send(`The Cat doesn't exist`);
    }
  },
  deleteCat: (req, res) => {
    const { id } = req.params
    const catExist = Cat.deleteCat(id)
    if (catExist) {
      res.status(200).send(`the cat with id=${id}is deleted`)
    } else {
    res.status(404).send(`the cat with id=${id} doesn't exist`);
    }
  }
}
export default routerControllers;
