module.exports = (sequelize, type) => {
    return sequelize.define('customer', {
        customernumber: {
            field:'customernumber',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            field:'firstname',
            type: type.STRING
        },
        lastname: {
            field:'lastname',
            type: type.STRING
        },
        birthdate: {
            field:'birthdate',
            type: type.DATE
        },
        username: type.STRING,
        password: type.STRING,
        phonenumber: {
            field:'phonenumber',
            type: type.STRING
        },
        phonetype: {
            field:'phonetype',
            type: type.STRING
        }
    }, {
        tableName: 'customer',
        timestamps: false
    })
}
