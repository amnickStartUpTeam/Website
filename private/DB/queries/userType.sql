
CREATE TABLE if not EXISTS `usertype` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`userId` INT(10) NULL DEFAULT NULL,
	`creationDate` VARCHAR(100) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
	`name` VARCHAR(100) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
	`description` VARCHAR(100) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

INSERT INTO `startup_cvtemplates_db`.`usertype` (`userId`, `creationDate`, `name`, `description`) 
VALUES ('null', `2021-04-21`, 'jallow', 'admin'),
    ('null', `2021-04-21`, 'alex', 'client');