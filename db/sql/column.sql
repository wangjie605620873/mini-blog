CREATE TABLE IF NOT EXISTS `column`(
    `column_id`        NOT NULL AUTO_INCREMENT,
    `column_cover`     VARCHAR(255) DEFAULT NULL,
    `column_describe`  VARCHAR(255) DEFAULT NULL
    `column_create`    varchar(20) DEFAULT NULL,
     PRIMARY KEY (`column_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
--# 栏目名称
--# 栏目封面
--# 栏目描述
--# 栏目创建时间
