var Sequelize = require("sequelize");
var DbSequelize = require("../../db/mysql.js");//todo path

var Product = DbSequelize.define("tbl_product",{
  "id": { type:Sequelize.INTEGER, primaryKey: true, autoIncreament: true },
  "user_id": { type: Sequelize.INTEGER(11)},
  "product_id": { type: Sequelize.INTEGER(11)},
},{
  timestamps: false,
  underscored: true,
  freezeTableName: true,
  tableName: "tbl_product"
});
exports.Product = Product; 
