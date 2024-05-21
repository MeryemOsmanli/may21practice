import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';


const app = express()
app.use(express.json())
app.use(cors())

const MeryemSchema = new mongoose.Schema({
    image:String,
    title: String,
    desc:String,
    price:Number
  });


  const ProductModel = mongoose.model('meryproduct', MeryemSchema);

  
app.get('/meryem', async (req, res)=> {
    const getAll= await ProductModel.find()
  res.send(getAll)
})
app.get('/meryem/:id', async (req, res)=> {
    const {id}=req.params
    const getbyId= await ProductModel.findById(id)
  res.send(getbyId)
})
app.post('/meryem/', async (req, res)=> {
    const obj=req.body
    const addProduct= new ProductModel(obj)
await addProduct.save()
  res.send(addProduct)
})
app.delete('/meryem/:id', async (req, res)=> {
    const {id}=req.params
    const deleteProduct= await ProductModel.findByIdAndDelete(id)
  res.send(deleteProduct)
})
mongoose.connect('mongodb+srv://meryemosmanova24:meryemosmanova24@codem.0uejvk1.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err));
app.listen(3000)
