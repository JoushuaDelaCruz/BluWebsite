const database = include('databaseConnection');

const printMySqlVersion = async () => {
    let sqlQuery = `
    SHOW VARIABLES LIKE 'version'
    `;

    try {
        const results = await database.query(sqlQuery);
        console.log("Successfully connected to MySQL");
        console.log(results[0]);
        return true
    } catch (error) {
        console.log("Error getting version from MySQL");
        console.log(error);
        return false;
    }
}

module.exports = {printMySqlVersion}