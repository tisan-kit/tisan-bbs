var Sequelize = require("sequelize");
var DbSequelize = require("../../db/mysql.js");//todo path

var QuestionContent = DbSequelize.define("tbl_question_content",{
  "id": { type:Sequelize.INTEGER, primaryKey: true, autoIncreament: true },
  "content": { type: Sequelize.CHAR(5000)},
  "title": { type: Sequelize.CHAR(500)},
},{
  timestamps: false,
  underscored: true,
  freezeTableName: true,
  tableName: "tbl_question_content"
});
exports.QuestionContent = QuestionContent;
