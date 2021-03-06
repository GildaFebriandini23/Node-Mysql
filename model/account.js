const uuid = require('uuid/v4');

module.exports = (sequelize, type) => {
    return sequelize.define('account', {
        accountNumber: {
            field: 'accountNumber',
            type: type.UUID,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: uuid()
        },
        openDate: {
            field: 'openDate',
            type: type.DATE
        },
        balance: {
            field: 'balance',
            type: type.STRING
        },
        customerNumber: {
            field : 'customer_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model:'customer',
                key: 'customer_id'
            }
        }
    }, {
        tableName: 'account',
        timestamps: false
    })
}