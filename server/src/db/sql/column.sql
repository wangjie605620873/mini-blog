CREATE TABLE IF NOT EXISTS `column_list`(
    `column_id`       int(11) NOT NULL AUTO_INCREMENT,
    `column_name`      VARCHAR(255) DEFAULT NULL,
    `column_cover`     VARCHAR(255) DEFAULT NULL,
    `column_describe`  VARCHAR(255) DEFAULT NULL,
    `column_create`    VARCHAR(22) DEFAULT NULL,
    `column_read_count` int DEFAULT 0 ,
    `column_collect_count` int DEFAULT 0,
     PRIMARY KEY ( `column_id` )
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 分类id
-- 分类名称
-- 分类封面
-- 分类描述
-- 分类创建时间
-- 分类观看次数
-- 分类收藏次数