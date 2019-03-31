module.exports = {
  mysqlDatabaseUrl:
    process.env.MYSQL_DATABASE_URL ||
    process.env.JAWSDB_URL ||
    process.env.CLEARDB_DATABASE_URL ||
    process.env.JAWSDB_MARIA_URL ||
    buildConnectionUrl()
};

function buildConnectionUrl() {
  const dbUser = process.env.DB_USER;
  const dbPort = process.env.DB_PORT;
  const dbHost = process.env.DB_HOST;
  const dbPass = process.env.DB_PASSWORD;
  const dbName = process.env.DB_NAME;
  const dbString = `mysql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;

  return dbString;
}
