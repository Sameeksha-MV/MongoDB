const mongoose = require ("mongoose")

mongoose.connect("mongodb://localhost:27017/mongoose")
.then(()=>console.log("Connection successful..."))
.catch((err)=>console.log(err));

const playlistSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    ctype : String,
    videos : Number,
    author : String,
    active : Boolean,
    data : {
        type : Date,
        default : Date.now
    }
})

// Collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema)

// Create or insert document
const createDocument = async () =>{
    try{
        const jsPlaylist = new Playlist({
            name : "Javascript",
            ctype :"Front end",
            videos : 150,
            author : "Sushan",
            active : true
          
        })
        const mongoPlaylist = new Playlist({
            name : "MongoDB ",
            ctype :"Back End",
            videos : 50,
            author : "Chethan",
            active : true
          
        })
        const expressPlaylist = new Playlist({
            name : "Express JS",
            ctype :"Back End",
            videos : 25,
            author : "Sameeksha",
            active : true
          
        })
        const mongoosePlaylist = new Playlist({
            name : "Mongoose JS",
            ctype :"Back End",
            videos : 50,
            author : "Sushan",
            active : true
          
        })
        const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist, expressPlaylist, mongoosePlaylist ])
        console.log(result)
    }catch(err){
        console.log(err)
    }
  
}

// createDocument()

const getDocument = async ()=>{
    // try{
    //     const result = await Playlist.find({ctype: "Front End"})
    //     .select({name : 1})
    //     .limit(1)
    //     console.log(result)
    // }catch(err){
    //     console.log(err)
    // }

    // try{
    //     const result = await Playlist.find({videos: {$lte : 50}})
    //     // .select({name : 1})
    //     console.log(result)
    // }catch(err){
    //     console.log(err)
    // }
   
    // try{
    //     const result = await Playlist.find({ctype: {$nin:["Back End", "Database"]}})
    //     .select({name : 1})
    //     // .limit(1)
    //     console.log(result)
    // }catch(err){
    //     console.log(err)
    // }

    // try{
    //     const result = await Playlist.find({$and:[ {ctype:"Front End"},{author: "Sameeksha" }]})
    //     .select({name : 1})
    //     // .limit(1)
    //     console.log(result)
    // }catch(err){
    //     console.log(err)
    // }
  

    try{
        const result = await Playlist.find({author: "Sameeksha" })
        .select({name : 1})
        .sort({name : 1})
        // .count()
        // .limit(1)
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

// getDocument()

const updateDocument = async(_id) => {
    // try{
    //     const result = await Playlist.findByIdAndUpdate({_id},{$set:{videos:80}})
    //     console.log(result)
    // }catch(err){
    //     console.log(err)
    // }
    
}
// updateDocument("632055ad3471d85446e6db9c")

const deleteDocument = async(_id)=>{
    try{
        const result = await Playlist.deleteMany({_id})
        // const result = await Playlist.findByIdAndDelete({_id})
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

deleteDocument(["63217a45294b301d2bb94cb0","63217a45294b301d2bb94caf","63217a45294b301d2bb94cae","63217a45294b301d2bb94cad"])