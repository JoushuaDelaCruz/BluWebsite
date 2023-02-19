const database = include('databaseConnection');
/**
 * File to create a user table
 */
const createUserTable = async () => {
    let createUserSQL = `
		CREATE TABLE IF NOT EXISTS user (
            user_id INT NOT NULL AUTO_INCREMENT,
            username VARCHAR(25) NOT NULL,
            password VARCHAR(100) NOT NULL,
            PRIMARY KEY (user_id),
            UNIQUE INDEX unique_username (username ASC) VISIBLE);
	`;

    try {
        const results = await database.query(createUserSQL);

        console.log("Successfully created user table");
        console.log(results[0]);
        return true;
    } catch (error) {
        console.log("Failed to create user table")
        console.log(error);
        return false;
    }
}

module.exports = { createUserTable };