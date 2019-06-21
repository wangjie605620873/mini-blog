CREATE TABLE IF NOT EXISTS  `admin_mini_user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `mini_user`  int(11) NOT NULL,
    `admin_user` int(11) NOT NULL,
     UNIQUE KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
