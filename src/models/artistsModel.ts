import sequelize from "../database/sequelize";
const { DataTypes } = require ('sequelize');

const Artist = sequelize.define(
    'artist',
     {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            get() {
            const rawValue = this.getDataValue('name');
            return rawValue ? rawValue.toUpperCase() : null;
            },
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please, enter your name'
                }
            }
        },

        description:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please, enter your description'
                }
            }
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    });

export default Artist;