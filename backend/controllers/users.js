const db = require('../MysqlParams');

exports.login = (req,res,next)=>{
    db.query(`SELECT * FROM roannesaintelyon.newsletter WHERE email =?`, req.body.email, (err, result, fields)=>{
    if(err){
        return res.status(500).json({message: err.message})
    }else{
        var row ='';
      Object.keys(result).forEach(function(key) {
         row = result[key];
        })  
        return res.status(200).json({message: row})
    }
    })
}

exports.signup = (req, res, next)=>{
    let data = {
          prenom : req.body.prenom,
          nom : req.body.nom,
          email : req.body.email
    } 
    db.query(`INSERT INTO newsletter SET ?`, data, (err, rows)=>{
       if(err){
               return res.status(500).json({message: err.message})
       } console.log(data)
       return res.status(200).json({message: "utilisateur crée"})
       
    })          
};