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

  console.log(params);

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

module.exports = { createUser };
