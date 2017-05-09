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
  db.get("SELECT paciente.nombre as nombrePaciente, paciente.apellido as apellidoPaciente, cita.fecha as fecha, doctor.nombre as nombreDoctor, cita.id as idCita, cita.valor as valor, doctor.id as idDoctor, paciente.id as idPaciente FROM cita INNER JOIN paciente ON paciente.id = cita.paciente INNER JOIN doctor ON doctor.id = cita.doctor WHERE cita.id = ? ",[id],function(err,row){
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
  db.all("SELECT cita.id as idCita, doctor.nombre as nombreDoctor, paciente.nombre as nombrePaciente, * FROM cita INNER JOIN doctor ON doctor.id = cita.doctor LEFT JOIN paciente ON paciente.id = cita.paciente ORDER BY fecha",function(err,rows){
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

CITA.editCita = function(idCita,idPaciente,estado,cita){
  db.run("UPDATE cita SET paciente = ?, estado = ?, valor = ? WHERE id = ?",[idPaciente,estado,cita.valor,idCita],function(err,rows){
    if(err){
      throw err;
    }
  })
}

CITA.getRecaudoPorFechas = function(callback,fechas){
  db.all("SELECT doctor.nombre as nombre, doctor.apellido as apellido, SUM(cita.valor) as recaudo FROM cita INNER JOIN doctor ON doctor.id = cita.doctor WHERE fecha >= ? AND fecha <= ? AND estado = 'Cerrada' GROUP BY doctor",[fechas.inicio,fechas.fin],function(err,rows){
    if(err){
      throw err;
    }else{
      callback(rows)
    }
  })
}

CITA.editEstado = function(idCita,estado){
  db.run("UPDATE cita SET estado = ? WHERE id = ?",[estado,idCita])
}

module.exports = CITA;
