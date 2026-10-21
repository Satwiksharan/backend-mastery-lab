const bcrypt = require("bcrypt");

async function hashPassword(password) {
    const saltRounds = 12;

    const hashedPassword = await bcrypt.hash(
        password,
        saltRounds
    );

    return hashedPassword;
}

async function main() {
    const password = "mySecretPassword123";

    const hashedPassword = await hashPassword(password);

    console.log(hashedPassword);
}

main();