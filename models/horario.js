var sqlite3 = require('sqlite3').verbose();
db = new sqlite3.Database('data/database');
HORARIO = {};
db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS HORARIO (id INTEGER PRIMARY KEY AUTOINCREMENT, doctor INTEGER, dia TEXT, inicio TIME, fin TIME)");
});

HORARIO.insertHorario = function(callback,horario){
  var stmt = db.prepare("INSERT INTO HORARIO VALUES (?,?,?,?,?)");
  stmt.run(null,horario.doctor,horario.dia,horario.inicio,horario.fin, function(err){
    if(err){
      throw err
    }else{
      callback({id: this.lastID})
    }
  })
  stmt.finalize();
}

HORARIO.getHorariosDoctor = function(callback,doctor){
  db.all("SELECT horario.id as idHorario, * FROM HORARIO INNER JOIN doctor ON horario.doctor = doctor.id WHERE doctor = ?",[doctor],function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })
}

HORARIO.getHorario = function(callback,id){
  db.get("SELECT * FROM HORARIO WHERE id = ? ",[id],function(err,row){
    if(err){
      throw err;
    }else{
      callback(null,row)
    }
  })
}

HORARIO.getHorarios = function(callback){
  db.all("SELECT horario.id as idHorario, * FROM horario INNER JOIN doctor ON horario.doctor = doctor.id",function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })
}

HORARIO.deleteHorario = function(id){
  db.run("DELETE FROM horario WHERE id = ?",[id])
}

module.exports = HORARIO;
