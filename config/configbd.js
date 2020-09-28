const oracledb = require('oracledb');

cns = {
    user: "BD_STORE_MUSIC",
    password: "tarea125",
    connectString: "localhost/xe"
}


async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

exports.Open = Open;