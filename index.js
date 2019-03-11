const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sample'
});

var arr = [];
db.connect((err) => {
    if (err)
        console.log(err);
    console.log('Mysql Database connected...');

});

app.get('/getdbschema', (req, res) => {

    let sql_table = 'show tables';
    db.query(sql_table, (err, result) => {
        if (err)
            console.log(err);
            var i =1;
            var tableSchema = {};
            console.log(result);
        for (var element in result) {
            //console.log(data);
            var tableKey = Object.keys(result[element])[0];
            var resultg = result[element][tableKey];
            getTableSchema(resultg).then(data=>{
                //console.log(data);
                var tableName = Object.keys(data)[0];
                var tableSchemaDetails = data[tableName];

                tableSchema[tableName] = {};
                tableSchema[tableName] = tableSchemaDetails;
                
                if(result.length == i)
                    res.send(tableSchema); 
                i = i+1;
            }).catch( error=>{
                console.log(error);
            });
        }        
    })

})
function getTableSchema(table) {
    let sql_schema = 'desc ' + table;
    var valarr;
    var schemaPromise = new Promise(function(resolve,reject){
        db.query(sql_schema, (err, result_schema) => {
            if (err){
                console.log(err);
                reject(err);
            }
            valarr = { [table]: result_schema };
            return resolve(valarr);
        })
        
    });
    return schemaPromise;
}
app.listen(3000, () => {
    console.log('server run on serve port 3000')
})