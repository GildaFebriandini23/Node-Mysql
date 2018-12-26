const uuid = require('uuid/v4');

module.exports = (sequelize, type) => {
    return sequelize.define('transaction', {
        id:{
            field: 'id',
            type: type.UUID,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: uuid()
        },
        type: {
            field: 'type',
            type: type.STRING
        },
        amount: {
            field: 'amount',
            type: type.STRING
        },
        amountSign: {
            field: 'amountSign',
            type: type.STRING
        },
        account_id:{
            type: type.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'account',
                key: 'account_id'
            }
        }
    }, {
        tableName : 'transaction',
        timestamps: false
    })
}