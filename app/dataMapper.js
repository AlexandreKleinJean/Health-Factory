const client = require('./database');

const dataMapper = {

    addMemberTeam: async function(form) {

        const id = form.id
        const name = form.name
        const statut = form.statut
        const age = form.age

        const SQLquery = {
            text: 'INSERT INTO "staff" ("id", "name", "statut", "age") VALUES ($1, $2, $3, $4)',
            values: [id, name, statut, age]
        }

        const result = await client.query(SQLquery);
        return result.rows;
    },

}

module.exports = dataMapper;