const database = include("databaseConnection");

const createUser = async (newUser) => {
  let createUserSQL = `
    INSERT INTO reader 
      (username, email_address, password)
      VALUES
      (:user, :email, :passwordHash)
	`;

  let params = {
    user: newUser.username,
    email: newUser.email,
    passwordHash: newUser.password,
  };

  try {
    const results = await database.query(createUserSQL, params);

    console.log("Successfully added new user");
    console.log(results[0]);
    return true;
  } catch (error) {
    console.log("Error adding new user");
    console.log(error);
    return false;
  }
};

const getUser = async (email) => {
  let getUserSQL = `
    SELECT * FROM reader WHERE email_address = :email
  `;

  let params = {
    email: email,
  };

  try {
    const results = await database.query(getUserSQL, params);

    console.log("Successfully retrieved user");
    console.log(results[0]);
    return results[0][0];
  } catch (error) {
    console.log("Error retrieving user");
    console.log(error);
    return false;
  }
};

module.exports = { createUser, getUser };
