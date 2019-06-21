--用户和自己小程序的用户的关联表
--admin_user 和mini_user关联表
CREATE TABLE IF NOT EXISTS  `admin_mini_user` (
    `id` int(11) NOT  NULL AUTO_INCREMENT,
    `mini_user`  int(11) NOT NULL,
    `admin_user` int(11) NOT NULL,
)
