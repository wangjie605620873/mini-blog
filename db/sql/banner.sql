CREATE TABLE IF NOT EXISTS  `banner` (
    `url` varchar(255) DEFAULT NULL,
    `describes` varchar(255) DEFAULT NULL,
    `create_time` varchar(20) DEFAULT NULL,
    `banner_id` INT UNSIGNED AUTO_INCREMENT,
     PRIMARY KEY ( `banner_id` )
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;