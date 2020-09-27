const db = require("./../DataAccess");
const Sequelize = require("sequelize");

class HeroSchema {
  static get schema() {
    console.log(Sequelize);

    const Hero = db.define(
      "hero",

      {
        
        _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },

        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        power: {
          type: Sequelize.STRING,
          allowNull: false
        },
        amountPeopleSaved: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      },
      {
        freezeTableName: true,
        tableName: "hero"
      }
    );

    return Hero;
  }
}

let schema = HeroSchema.schema;
export = schema;
