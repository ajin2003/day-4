const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://ajinsanthoshb21ec1113:Ajin@2003@cluster0.kitgcnl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB is connected')
})