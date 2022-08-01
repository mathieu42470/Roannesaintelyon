const db = require('../MysqlParams');

exports.signup = (req,res,next)=>{

}
exports.login = (req, res, next)=>{
    let data = {
          prenom : req.body.prenom,
          nom : req.body.nom,
          mail : req.body.mail
    } 
    db.query(`INSERT INTO newsletter SET ?`, data, (err, rows)=>{
       if(err){
               return res.status(500).json({message: err.message})
       } return res.status(200).json({message: "utilisateur crée"})
    })          
}