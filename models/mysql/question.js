var Sequelize = require("sequelize");
var DbSequelize = require("../../db/mysql.js");//todo path

var Question = DbSequelize.define("tbl_question_list",{
  "id": { type:Sequelize.INTEGER, primaryKey: true, autoIncreament: true },
  "view_times": { type: Sequelize.INTEGER(5)},
  "author_id": { type: Sequelize.INTEGER(11)},
  "answer_id_list": { type: Sequelize.INTEGER(11)},
  "label_id_list": { type: Sequelize.INTEGER(11)},
  "question_title": { type: Sequelize.INTEGER(11)},
  "create_time": { type: Sequelize.INTEGER(11)},
},{
  timestamps: false,
  underscored: true,
  freezeTableName: true,
  tableName: "tbl_question_list"
});
exports.Question = Question; 
