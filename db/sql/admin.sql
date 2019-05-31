CREATE TABLE IF NOT EXISTS `admin`(
    `admin_id` int(11) NOT NULL,
    `password` varchar(255) DEFAULT NULL,
    `create_time` varchar(20) DEFAULT NULL,
     PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;