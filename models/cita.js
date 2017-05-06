var sqlite3 = require('sqlite3').verbose();
db = new sqlite3.Database('data/database');
CITA = {};
db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS CITA (id INTEGER PRIMARY KEY AUTOINCREMENT, fecha DATE, hora TIME, doctor INTEGER, paciente INTEGER, duracion INTEGER, valor INTEGER, estado TEXT)");

});

CITA.insertCita = function(cita){
  var stmt = db.prerate("INSERT INTO CITA VALUES (?,?,?,?,?,?,?,?)");
  stmt.run(null,cita.fecha,cita.hora,cita.doctor,cita.paciente,cita.duracion,cita.valor,cita.estado)
  stmt.finalize();
}

CITA.getCitasPaciente = function(callback,paciente){
  db.all("SELECT * FROM CITA WHERE paciente = ?",[paciente],function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })
}

CITA.getCita = function(callback,id){
  db.get("SELECT * FROM CITA WHERE id = ? ",[id],function(err,row){
    if(err){
      throw err;
    }else{
      callback(null,row)
    }
  })
}

CITA.getCitas = function(callback){
  db.get("SELECT * FROM CITA",function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })
}

CITA.getCitasEstado = function(callback,estado){
  db.all("SELECT * FROM CITA WHERE estado = ?",[estado], function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  });
}

module.exports = CITA;
