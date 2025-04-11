// const express = require('express')

// const cors = require('cors')
// const fs= require('fs/promises')
// const app = express()
// let users =[];
// app.use(express.json())
// app.use(cors())
// const readdata=async ()=>{
//     users=JSON.parse(await fs.readFile('./data.json','utf8'))
// }
// const writedata=async ()=>{
//    await fs.writeFile('./data.json',JSON.stringify(users))
// }
// readdata();
// app.get('/users', async (req, res) => {
//     res.json(users);
// })
// app.post('/users',(req,res)=>{
//     const {name,age}=req.body;
//     const newid=users.length>0?users[users.length-1].id+1:1;
//     const newuser={id:newid,name,age};
//     users.push(newuser);
//     writedata();
//     res.status(200).json({message: 'user register success',data: newuser});
    
// })
// app.put('/users/:id/',(req,res) => {
//     const uid=req.params.id;
//     const {name,age}=req.body;
//     const userIndex=users.findIndex(user=>user.id==uid);
//     if(!name || !age) {
//         res.status(400).json({message: 'name and age are required'});
//         return;
//     }
//     if(userIndex==-1){
//         console.log(userIndex)
//         res.status(404).json({message: 'user not found'});
//     }
//     else{
//         users[userIndex].name=name;
//         users[userIndex].age=age;
//         writedata();
//         res.status(200).json({message: 'user updated successfully',data: users[userIndex]});
//     }  
// })

// app.delete('/users/:id',(req,res) => {
//     const uid=req.params.id;
//     const userIndex=users.findIndex(user=>user.id==uid);
//     if(userIndex==-1){
//         res.status(404).json({message: 'user not found'});
//     }
//     else{
//         users.splice(userIndex,1);
//         writedata();
//         res.status(200).json({message: 'user deleted successfully',data: users[userIndex]});
//     }  
// })
// app.listen(9000,()=>{
//     console.log('Server is running on port 9000')
// });

const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');

const app = express();
let users = [];

app.use(express.json());
app.use(cors());

const readdata = async () => {
  try {
    const data = await fs.readFile('./data.json', 'utf8');
    users = JSON.parse(data);
    console.log('Data loaded from data.json');
  } catch (error) {
    console.error('Failed to read data.json:', error.message);
    users = [];
  }
};

const writedata = async () => {
  try {
    await fs.writeFile('./data.json', JSON.stringify(users, null, 2));
    console.log('Data written to data.json');
  } catch (error) {
    console.error('Failed to write data.json:', error.message);
  }
};

// Routes

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ message: 'Name and age are required' });
  }

  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const newUser = { id: newId, name, age };
  users.push(newUser);
  writedata();
  res.status(200).json({ message: 'User registered successfully', data: newUser });
});

app.put('/users/:id', (req, res) => {
  const uid = parseInt(req.params.id);
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: 'Name and age are required' });
  }

  const userIndex = users.findIndex(user => user.id === uid);
  console.log(`PUT request for id=${uid}, found index=${userIndex}`);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[userIndex] = { ...users[userIndex], name, age };
  writedata();
  res.status(200).json({ message: 'User updated successfully', data: users[userIndex] });
});

app.delete('/users/:id', (req, res) => {
  const uid = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === uid);
  console.log(`DELETE request for id=${uid}, found index=${userIndex}`);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  const deletedUser = users.splice(userIndex, 1)[0];
  writedata();
  res.status(200).json({ message: 'User deleted successfully', data: deletedUser });
});

// Ensure data is loaded before starting the server
readdata().then(() => {
  app.listen(9000, () => {
    console.log('Server is running on port 9000');
  });
});
