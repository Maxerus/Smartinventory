const mssql = require('mssql');
const configSQL = require('./sqlConnectString')

const getConnect = async () =>{
    mssql.connect(configSQL ,(err) =>{
        if(err){
            console.log('Connection Failed : '+err);
        }else{
            console.log('Connection Success');
        }
    })
    
}
getConnect()

module.exports = getConnect
