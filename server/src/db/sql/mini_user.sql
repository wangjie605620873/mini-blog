CREATE TABLE  IF NOT EXISTS  `mini_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(11) NOT NULL unique,
  `name` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE `mini_user` ADD unique(`openid`);
