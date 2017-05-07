var sqlite3 = require('sqlite3').verbose();
db = new sqlite3.Database('data/database');
CITA = {};
db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS CITA (id INTEGER PRIMARY KEY AUTOINCREMENT, fecha DATE, hora TIME, doctor INTEGER, paciente INTEGER, duracion INTEGER, valor INTEGER, estado TEXT)");

});

CITA.insertCita = function(callback,cita){

  var stmt = db.prepare("INSERT INTO CITA VALUES (?,?,?,?,?,?,?,?)");
  stmt.run(null,cita.fecha,cita.hora,cita.doctor,cita.paciente,cita.duracion,cita.valor,cita.estado, function(err){
    if(err){
      throw err
    }else{
      callback({id: this.lastID})
    }
  })
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

CITA.deleteCitas = function(callback){
  db.run("DELETE FROM cita")
}

CITA.getCitas = function(callback){
  db.all("SELECT cita.id as idCita,* FROM cita INNER JOIN doctor ON doctor.id = cita.doctor ORDER BY fecha",function(err,rows){
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

CITA.editCita = function(idCita,idPaciente,estado){
  db.run("UPDATE cita SET paciente = ?, estado = ? WHERE id = ?",[idPaciente,estado,idCita],function(err,rows){
    if(err){
      throw err;
    }
  })
}

module.exports = CITA;
