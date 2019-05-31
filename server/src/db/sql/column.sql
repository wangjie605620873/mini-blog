CREATE TABLE IF NOT EXISTS `column`(
    `column_id`       int(11) NOT NULL AUTO_INCREMENT,
    `column_cover`     VARCHAR(255) DEFAULT NULL,
    `column_describe`  VARCHAR(255) DEFAULT NULL,
    `column_create`    VARCHAR(255) DEFAULT NULL,
     PRIMARY KEY ( `column_id` )
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
