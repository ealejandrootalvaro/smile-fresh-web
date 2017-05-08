var sqlite3 = require('sqlite3').verbose();
db = new sqlite3.Database('data/database');
HISTORIA = {};

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS HISTORIA (id INTEGER PRIMARY KEY AUTOINCREMENT, fecha DATE, doctor INTEGER, paciente INTEGER, descripcion TEXT, diagnostico TEXT)");

});

HISTORIA.insertHistoria = function(callback,historia){
  var stmt = db.prepare("INSERT INTO HISTORIA VALUES (?,?,?,?,?,?)");
  stmt.run(null,historia.fecha,historia.doctor,historia.paciente,historia.descripcion, historia.diagnostico,function(err){
    if(err){
      throw err
    }else{
      callback({id: this.lastID})
    }
  });
  stmt.finalize();
}

HISTORIA.getHistoriasPaciente = function(callback,paciente){
  db.all("SELECT * FROM HISTORIA WHERE paciente = ?",[paciente], function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })
}

HISTORIA.getHistorias = function(callback){
  db.all("SELECT * FROM HISTORIA",function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })
}

HISTORIA.getHistoria = function(callback,id){
  db.get("SELECT * FROM HISTORIA WHERE id = ?",[id], function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })
}

HISTORIA.deleteHistoria = function(id){
  db.run("DELETE FROM historia WHERE id = ?",[id])
}

HISTORIA.deleteAllHistorias = function(){
  db.run("DELETE FROM historia")
}

module.exports = HISTORIA;
