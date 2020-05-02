BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "products_productcard" (
	"id"	char(32) NOT NULL,
	"name"	varchar(100) NOT NULL UNIQUE,
	"description"	text,
	"discount"	bool NOT NULL,
	"sizes"	text,
	"article_id"	varchar(30),
	"owner_id"	integer,
	"sertificate"	bool NOT NULL,
	FOREIGN KEY("owner_id") REFERENCES "auth_user"("id") DEFERRABLE INITIALLY DEFERRED,
	PRIMARY KEY("id"),
	FOREIGN KEY("article_id") REFERENCES "products_article"("article") DEFERRABLE INITIALLY DEFERRED
);
CREATE TABLE IF NOT EXISTS "products_prices" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"color"	varchar(100) NOT NULL,
	"oldPrice"	integer,
	"product_id"	char(32),
	"noDepthPrice"	real,
	FOREIGN KEY("product_id") REFERENCES "products_productcard"("id") DEFERRABLE INITIALLY DEFERRED
);
CREATE TABLE IF NOT EXISTS "products_expositionphotos" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"photo"	varchar(100) NOT NULL,
	"ppoi"	varchar(20) NOT NULL,
	"exposition_id"	integer,
	"description"	varchar(150),
	FOREIGN KEY("exposition_id") REFERENCES "products_exposition"("id") DEFERRABLE INITIALLY DEFERRED
);
CREATE TABLE IF NOT EXISTS "products_exposition" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"address"	varchar(50),
	"category"	varchar(10) NOT NULL,
	"description"	varchar(50)
);
CREATE TABLE IF NOT EXISTS "products_depthprice" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"depth_id"	integer NOT NULL,
	"prices_id"	integer NOT NULL,
	"price"	real,
	FOREIGN KEY("prices_id") REFERENCES "products_prices"("id") DEFERRABLE INITIALLY DEFERRED,
	FOREIGN KEY("depth_id") REFERENCES "products_depth"("id") DEFERRABLE INITIALLY DEFERRED
);
CREATE TABLE IF NOT EXISTS "products_depth" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"size"	varchar(20)
);
CREATE TABLE IF NOT EXISTS "products_news" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"title"	varchar(50),
	"body"	text,
	"created"	date NOT NULL,
	"product_id"	char(32),
	"changed"	datetime NOT NULL,
	FOREIGN KEY("product_id") REFERENCES "products_productcard"("id") DEFERRABLE INITIALLY DEFERRED
);
CREATE TABLE IF NOT EXISTS "knox_authtoken" (
	"digest"	varchar(128) NOT NULL,
	"salt"	varchar(16) NOT NULL UNIQUE,
	"created"	datetime NOT NULL,
	"user_id"	integer NOT NULL,
	"expiry"	datetime,
	"token_key"	varchar(8) NOT NULL,
	FOREIGN KEY("user_id") REFERENCES "auth_user"("id") DEFERRABLE INITIALLY DEFERRED,
	PRIMARY KEY("digest")
);
CREATE TABLE IF NOT EXISTS "django_session" (
	"session_key"	varchar(40) NOT NULL,
	"session_data"	text NOT NULL,
	"expire_date"	datetime NOT NULL,
	PRIMARY KEY("session_key")
);
CREATE TABLE IF NOT EXISTS "products_article" (
	"article"	varchar(30) NOT NULL,
	"title"	varchar(100) NOT NULL,
	"unit"	varchar(10) NOT NULL,
	"page_id"	varchar(30) NOT NULL,
	FOREIGN KEY("page_id") REFERENCES "products_page"("page") DEFERRABLE INITIALLY DEFERRED,
	PRIMARY KEY("article")
);
CREATE TABLE IF NOT EXISTS "products_photos" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"photo"	varchar(100) NOT NULL,
	"ppoi"	varchar(20) NOT NULL,
	"product_id"	char(32),
	FOREIGN KEY("product_id") REFERENCES "products_productcard"("id") DEFERRABLE INITIALLY DEFERRED
);
CREATE TABLE IF NOT EXISTS "products_page" (
	"page"	varchar(30) NOT NULL,
	PRIMARY KEY("page")
);
CREATE TABLE IF NOT EXISTS "auth_group" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"name"	varchar(150) NOT NULL UNIQUE
);
CREATE TABLE IF NOT EXISTS "auth_user" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"password"	varchar(128) NOT NULL,
	"last_login"	datetime,
	"is_superuser"	bool NOT NULL,
	"username"	varchar(150) NOT NULL UNIQUE,
	"first_name"	varchar(30) NOT NULL,
	"email"	varchar(254) NOT NULL,
	"is_staff"	bool NOT NULL,
	"is_active"	bool NOT NULL,
	"date_joined"	datetime NOT NULL,
	"last_name"	varchar(150) NOT NULL
);
CREATE TABLE IF NOT EXISTS "auth_permission" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"content_type_id"	integer NOT NULL,
	"codename"	varchar(100) NOT NULL,
	"name"	varchar(255) NOT NULL,
	FOREIGN KEY("content_type_id") REFERENCES "django_content_type"("id") DEFERRABLE INITIALLY DEFERRED
);
CREATE TABLE IF NOT EXISTS "django_content_type" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"app_label"	varchar(100) NOT NULL,
	"model"	varchar(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS "django_admin_log" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"action_time"	datetime NOT NULL,
	"object_id"	text,
	"object_repr"	varchar(200) NOT NULL,
	"change_message"	text NOT NULL,
	"content_type_id"	integer,
	"user_id"	integer NOT NULL,
	"action_flag"	smallint unsigned NOT NULL CHECK("action_flag">=0),
	FOREIGN KEY("user_id") REFERENCES "auth_user"("id") DEFERRABLE INITIALLY DEFERRED,
	FOREIGN KEY("content_type_id") REFERENCES "django_content_type"("id") DEFERRABLE INITIALLY DEFERRED
);
CREATE TABLE IF NOT EXISTS "auth_user_user_permissions" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"user_id"	integer NOT NULL,
	"permission_id"	integer NOT NULL,
	FOREIGN KEY("permission_id") REFERENCES "auth_permission"("id") DEFERRABLE INITIALLY DEFERRED,
	FOREIGN KEY("user_id") REFERENCES "auth_user"("id") DEFERRABLE INITIALLY DEFERRED
);
CREATE TABLE IF NOT EXISTS "auth_user_groups" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"user_id"	integer NOT NULL,
	"group_id"	integer NOT NULL,
	FOREIGN KEY("group_id") REFERENCES "auth_group"("id") DEFERRABLE INITIALLY DEFERRED,
	FOREIGN KEY("user_id") REFERENCES "auth_user"("id") DEFERRABLE INITIALLY DEFERRED
);
CREATE TABLE IF NOT EXISTS "auth_group_permissions" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"group_id"	integer NOT NULL,
	"permission_id"	integer NOT NULL,
	FOREIGN KEY("permission_id") REFERENCES "auth_permission"("id") DEFERRABLE INITIALLY DEFERRED,
	FOREIGN KEY("group_id") REFERENCES "auth_group"("id") DEFERRABLE INITIALLY DEFERRED
);
CREATE TABLE IF NOT EXISTS "django_migrations" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"app"	varchar(255) NOT NULL,
	"name"	varchar(255) NOT NULL,
	"applied"	datetime NOT NULL
);
INSERT INTO "products_productcard" VALUES ('bc9341dd697c4101b43e5d4899de9c71','«Квадрат 10х10» СТАНДАРТ','',1,'размер (мм) : 100х100','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('e72f911f3dab4e11ace847b4d3a593b3','"Старый город" (5 элементов) СТАНДАРТ','Тротуарная плитка Старый город из 5 элементов',1,'размер (мм) : 60х120; 90х120; 120х120; 150х120; 180х120.','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('de46ef6300fa49c4bca9cb657f070c6b','«Квадрат 10х10» ЗЕРНО','аваав',0,'размер (мм) : 100х100','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('b24e5a1d5c19439297fe5792914a23e2','«Старый город» (5 элементов) ЗЕРНО','папап',0,'размер (мм) : 60х120; 90х120; 120х120; 150х120; 180х120.','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('f3ee95396285465a80a3d22aebcc95a1','«Старый город 3D» (4 элемента) СТАНДАРТ','вавываыв',1,'размер (мм) :  12х18; 12х12; 12х9; 12х6','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('f5e3038750394c04b7b45e3985f19bf3','«Старый город 3D» (4 элемента) ЗЕРНО','вацвцу',0,'размер (мм) : 12х18; 12х12; 12х9; 12х6','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('740b78bfe3a947278159a9cf5e5b13c0','«Кирпичик дорожный» СТАНДАРТ','Тротуарная плитка кирпичик дорожный без термошва',1,'Размеры (мм) : 200х100','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('55c293e0cc004f5286faf05d2ed337c2','«Кирпичик дорожный» ЗЕРНО','РООЛЛЛЛ',0,'Размеры (мм) : 200х100','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('cf576ec0710540a29fdea5edba9abd4b','«Ромб» СТАНДАРТ','Тротуарная плитка',1,'','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('2f1c988a32bb4d8dbe074c82e51d8dee','«Ромб» ЗЕРНО','аааааа',0,'','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('e631507b0dd943cdac3f06c26d1982e7','«Квадрат 20х20» СТАНДАРТ','1111',0,'размер (мм) : 200х200','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('78470d45cf3245eab280d12171571a77','«Квадрат 20х20» ЗЕРНО','12121',0,'размер (мм) : 200х200','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('49a9696fe33e4f0d9a15a0b83bae922a','«Венеция» СТАНДАРТ','кеенн',0,'','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('1deeca9eec9346e393346ee1d9dc878e','«Венеция» ЗЕРНО','213232',0,'','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('eab5026bb2524f82b7d7faa689db6bc4','«Катушка» «Кость»','ц1ц',0,'','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('44b973bb71a247d39b06606145d228d1','«Эко»','цууц',0,'размер (мм) : 400х600х90','vibropressed',NULL,1);
INSERT INTO "products_productcard" VALUES ('e448fb71bb3a47c69bc6addf541aa853','«Паркет»','6 шт./кв. м',0,'размер (мм) : 400х400х50,','vibrocast',NULL,0);
INSERT INTO "products_productcard" VALUES ('80ed4490f5704148beb6560de4773a97','«песчаник»','11 шт./кв. м',0,'размер (мм) : 300х300х30.','vibrocast',NULL,0);
INSERT INTO "products_productcard" VALUES ('690e71daa3eb464fb23eb26a5995d13d','«срез дерева»','цуййцу',0,'','vibrocast',NULL,0);
INSERT INTO "products_productcard" VALUES ('1462e85f2e924784b5a487a11b4dcb16','Бордюр вибропресованный','2 шт./м',0,'Размер (мм) : 500х210х60','borders',NULL,1);
INSERT INTO "products_productcard" VALUES ('ec5997286aa64c8292b2b925612bac57','Бордюр вибролитой','вибролитой 2 шт на м\п',0,'размер (мм) : 500х200х45','borders',NULL,0);
INSERT INTO "products_productcard" VALUES ('4bc519c97d5c42788ba8ca4e0ad24e7a','Бордюр дорожный','прессованный',0,'размер (мм) : 750х300х150','borders',NULL,1);
INSERT INTO "products_productcard" VALUES ('de08455eb0b24d3faac00f42f2cfc9e0','Бордюр "полисада"','бордюр',0,'размер: высота - 24 см, диаметр - 10 см','borders',NULL,1);
INSERT INTO "products_productcard" VALUES ('e28f1c9d8a3740d98a3c80861549033e','Полусфера','бетонная антипарковочна полусфера запорожье',0,'размер: D:49см.  H:25см.  Вес: 55кг.','borders',NULL,1);
INSERT INTO "products_productcard" VALUES ('2420587899b547ea921bcbad482ffce4','Плита забора №34ф','Еврозабор',0,'Размер (см): 200х50','ordinary',NULL,1);
INSERT INTO "products_productcard" VALUES ('ac96040258f54b9c9765569ee6dce3d3','Водосток глубокий','',0,'Длинна: 500мм; Высота: 150мм; Ширина: 170мм;','gully',NULL,0);
INSERT INTO "products_prices" VALUES (11,'Серый',185,'e72f911f3dab4e11ace847b4d3a593b3',NULL);
INSERT INTO "products_prices" VALUES (12,'Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:',195,'e72f911f3dab4e11ace847b4d3a593b3',NULL);
INSERT INTO "products_prices" VALUES (13,'Желтый, Оранжевый, белый:',220,'e72f911f3dab4e11ace847b4d3a593b3',NULL);
INSERT INTO "products_prices" VALUES (14,'Серый',195,'bc9341dd697c4101b43e5d4899de9c71',NULL);
INSERT INTO "products_prices" VALUES (15,'Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:',210,'bc9341dd697c4101b43e5d4899de9c71',NULL);
INSERT INTO "products_prices" VALUES (16,'Желтый, Оранжевый, белый:',230,'bc9341dd697c4101b43e5d4899de9c71',NULL);
INSERT INTO "products_prices" VALUES (17,'Серый',195,'b24e5a1d5c19439297fe5792914a23e2',NULL);
INSERT INTO "products_prices" VALUES (18,'Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:',205,'b24e5a1d5c19439297fe5792914a23e2',NULL);
INSERT INTO "products_prices" VALUES (19,'Желтый, Оранжевый, белый',230,'b24e5a1d5c19439297fe5792914a23e2',NULL);
INSERT INTO "products_prices" VALUES (20,'Серый',205,'de46ef6300fa49c4bca9cb657f070c6b',NULL);
INSERT INTO "products_prices" VALUES (21,'Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:',215,'de46ef6300fa49c4bca9cb657f070c6b',NULL);
INSERT INTO "products_prices" VALUES (22,'Желтый, Оранжевый, белый:',240,'de46ef6300fa49c4bca9cb657f070c6b',NULL);
INSERT INTO "products_prices" VALUES (23,'Серый',195,'f3ee95396285465a80a3d22aebcc95a1',NULL);
INSERT INTO "products_prices" VALUES (24,'Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:',205,'f3ee95396285465a80a3d22aebcc95a1',NULL);
INSERT INTO "products_prices" VALUES (25,'Желтый, Оранжевый, белый:',230,'f3ee95396285465a80a3d22aebcc95a1',NULL);
INSERT INTO "products_prices" VALUES (29,'Серый',205,'f5e3038750394c04b7b45e3985f19bf3',NULL);
INSERT INTO "products_prices" VALUES (30,'Коричневый, Красный, Оливковый, Светло-коричневый, Чёрный:',215,'f5e3038750394c04b7b45e3985f19bf3',NULL);
INSERT INTO "products_prices" VALUES (31,'Желтый, Оранжевый, белый',240,'f5e3038750394c04b7b45e3985f19bf3',NULL);
INSERT INTO "products_prices" VALUES (32,'Серый',185,'740b78bfe3a947278159a9cf5e5b13c0',NULL);
INSERT INTO "products_prices" VALUES (33,'Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:',205,'740b78bfe3a947278159a9cf5e5b13c0',NULL);
INSERT INTO "products_prices" VALUES (34,'Желтый, Оранжевый, белый',220,'740b78bfe3a947278159a9cf5e5b13c0',NULL);
INSERT INTO "products_prices" VALUES (35,'Серый',195,'55c293e0cc004f5286faf05d2ed337c2',NULL);
INSERT INTO "products_prices" VALUES (36,'Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:',205,'55c293e0cc004f5286faf05d2ed337c2',NULL);
INSERT INTO "products_prices" VALUES (37,'Желтый, Оранжевый, белый:',230,'55c293e0cc004f5286faf05d2ed337c2',NULL);
INSERT INTO "products_prices" VALUES (38,'Серый',190,'cf576ec0710540a29fdea5edba9abd4b',NULL);
INSERT INTO "products_prices" VALUES (39,'Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:',200,'cf576ec0710540a29fdea5edba9abd4b',NULL);
INSERT INTO "products_prices" VALUES (40,'Желтый, Оранжевый, белый:',225,'cf576ec0710540a29fdea5edba9abd4b',NULL);
INSERT INTO "products_prices" VALUES (41,'Серый',NULL,'2f1c988a32bb4d8dbe074c82e51d8dee',NULL);
INSERT INTO "products_prices" VALUES (42,'Коричневый, Красный, Оливковый, Светло-коричневый, Чёрный:',NULL,'2f1c988a32bb4d8dbe074c82e51d8dee',NULL);
INSERT INTO "products_prices" VALUES (43,'Желтый, Оранжевый, белый:',NULL,'2f1c988a32bb4d8dbe074c82e51d8dee',NULL);
INSERT INTO "products_prices" VALUES (44,'Серый',NULL,'e631507b0dd943cdac3f06c26d1982e7',NULL);
INSERT INTO "products_prices" VALUES (45,'Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:',NULL,'e631507b0dd943cdac3f06c26d1982e7',NULL);
INSERT INTO "products_prices" VALUES (46,'Желтый, Оранжевый, белый:',NULL,'e631507b0dd943cdac3f06c26d1982e7',NULL);
INSERT INTO "products_prices" VALUES (47,'Серый',NULL,'78470d45cf3245eab280d12171571a77',NULL);
INSERT INTO "products_prices" VALUES (48,'Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:',NULL,'78470d45cf3245eab280d12171571a77',NULL);
INSERT INTO "products_prices" VALUES (49,'Желтый, Оранжевый, белый:',NULL,'78470d45cf3245eab280d12171571a77',NULL);
INSERT INTO "products_prices" VALUES (50,'Серый',NULL,'49a9696fe33e4f0d9a15a0b83bae922a',NULL);
INSERT INTO "products_prices" VALUES (51,'Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:',NULL,'1deeca9eec9346e393346ee1d9dc878e',NULL);
INSERT INTO "products_prices" VALUES (52,'Желтый, Оранжевый, белый:',NULL,'49a9696fe33e4f0d9a15a0b83bae922a',NULL);
INSERT INTO "products_prices" VALUES (53,'Серый',NULL,'1deeca9eec9346e393346ee1d9dc878e',NULL);
INSERT INTO "products_prices" VALUES (54,'Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:',NULL,'1deeca9eec9346e393346ee1d9dc878e',NULL);
INSERT INTO "products_prices" VALUES (55,'Желтый, Оранжевый, белый:',NULL,'1deeca9eec9346e393346ee1d9dc878e',NULL);
INSERT INTO "products_prices" VALUES (56,'Серый',NULL,'eab5026bb2524f82b7d7faa689db6bc4',NULL);
INSERT INTO "products_prices" VALUES (57,'Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:',NULL,'eab5026bb2524f82b7d7faa689db6bc4',NULL);
INSERT INTO "products_prices" VALUES (58,'Желтый, Оранжевый, белый:',NULL,'eab5026bb2524f82b7d7faa689db6bc4',NULL);
INSERT INTO "products_prices" VALUES (59,'Серый',NULL,'44b973bb71a247d39b06606145d228d1',NULL);
INSERT INTO "products_prices" VALUES (60,'Серый',NULL,'e448fb71bb3a47c69bc6addf541aa853',210.0);
INSERT INTO "products_prices" VALUES (61,'Серый',NULL,'80ed4490f5704148beb6560de4773a97',175.0);
INSERT INTO "products_prices" VALUES (62,'Серый',NULL,'690e71daa3eb464fb23eb26a5995d13d',50.0);
INSERT INTO "products_prices" VALUES (63,'Серый',NULL,'1462e85f2e924784b5a487a11b4dcb16',37.0);
INSERT INTO "products_prices" VALUES (64,'Красный, коричневый:',NULL,'1462e85f2e924784b5a487a11b4dcb16',41.0);
INSERT INTO "products_prices" VALUES (65,'Серый',NULL,'ec5997286aa64c8292b2b925612bac57',37.0);
INSERT INTO "products_prices" VALUES (66,'Серый',NULL,'4bc519c97d5c42788ba8ca4e0ad24e7a',167.0);
INSERT INTO "products_prices" VALUES (67,'Серый',NULL,'de08455eb0b24d3faac00f42f2cfc9e0',16.0);
INSERT INTO "products_prices" VALUES (68,'красный, коричневый:',NULL,'de08455eb0b24d3faac00f42f2cfc9e0',18.0);
INSERT INTO "products_prices" VALUES (69,'Серый',230,'e28f1c9d8a3740d98a3c80861549033e',NULL);
INSERT INTO "products_prices" VALUES (70,'Серый',NULL,'2420587899b547ea921bcbad482ffce4',178.0);
INSERT INTO "products_prices" VALUES (71,'Желтый',NULL,'2420587899b547ea921bcbad482ffce4',205.0);
INSERT INTO "products_expositionphotos" VALUES (11,'ЧП_Джас_гранитные_памятники_запорожье.jpg','0.56x0.49',4,'Высота 1.30м');
INSERT INTO "products_exposition" VALUES (4,'Запорожская область, Матвеевское кладбище','monuments','Гранитный памятник');
INSERT INTO "products_depthprice" VALUES (25,5,11,175.0);
INSERT INTO "products_depthprice" VALUES (26,6,11,185.0);
INSERT INTO "products_depthprice" VALUES (27,7,11,225.0);
INSERT INTO "products_depthprice" VALUES (28,5,12,185.0);
INSERT INTO "products_depthprice" VALUES (29,6,12,195.0);
INSERT INTO "products_depthprice" VALUES (30,7,12,235.0);
INSERT INTO "products_depthprice" VALUES (31,5,13,210.0);
INSERT INTO "products_depthprice" VALUES (32,6,13,220.0);
INSERT INTO "products_depthprice" VALUES (33,7,13,265.0);
INSERT INTO "products_depthprice" VALUES (34,5,14,185.0);
INSERT INTO "products_depthprice" VALUES (35,6,14,195.0);
INSERT INTO "products_depthprice" VALUES (36,7,14,235.0);
INSERT INTO "products_depthprice" VALUES (37,5,15,195.0);
INSERT INTO "products_depthprice" VALUES (38,6,15,205.0);
INSERT INTO "products_depthprice" VALUES (39,7,15,245.0);
INSERT INTO "products_depthprice" VALUES (40,5,16,220.0);
INSERT INTO "products_depthprice" VALUES (41,6,16,230.0);
INSERT INTO "products_depthprice" VALUES (42,7,16,275.0);
INSERT INTO "products_depthprice" VALUES (43,5,17,185.0);
INSERT INTO "products_depthprice" VALUES (44,6,17,195.0);
INSERT INTO "products_depthprice" VALUES (45,7,17,235.0);
INSERT INTO "products_depthprice" VALUES (46,5,18,195.0);
INSERT INTO "products_depthprice" VALUES (47,6,18,205.0);
INSERT INTO "products_depthprice" VALUES (48,7,18,245.0);
INSERT INTO "products_depthprice" VALUES (49,5,19,220.0);
INSERT INTO "products_depthprice" VALUES (50,6,19,230.0);
INSERT INTO "products_depthprice" VALUES (51,7,19,275.0);
INSERT INTO "products_depthprice" VALUES (52,5,20,195.0);
INSERT INTO "products_depthprice" VALUES (53,6,20,205.0);
INSERT INTO "products_depthprice" VALUES (54,7,20,245.0);
INSERT INTO "products_depthprice" VALUES (55,5,21,205.0);
INSERT INTO "products_depthprice" VALUES (56,6,21,215.0);
INSERT INTO "products_depthprice" VALUES (57,7,21,255.0);
INSERT INTO "products_depthprice" VALUES (58,5,22,230.0);
INSERT INTO "products_depthprice" VALUES (59,6,22,240.0);
INSERT INTO "products_depthprice" VALUES (60,7,22,285.0);
INSERT INTO "products_depthprice" VALUES (61,6,23,185.0);
INSERT INTO "products_depthprice" VALUES (62,6,24,195.0);
INSERT INTO "products_depthprice" VALUES (63,6,25,220.0);
INSERT INTO "products_depthprice" VALUES (71,6,29,195.0);
INSERT INTO "products_depthprice" VALUES (72,6,30,205.0);
INSERT INTO "products_depthprice" VALUES (73,6,31,230.0);
INSERT INTO "products_depthprice" VALUES (74,5,32,175.0);
INSERT INTO "products_depthprice" VALUES (75,6,32,185.0);
INSERT INTO "products_depthprice" VALUES (76,7,32,225.0);
INSERT INTO "products_depthprice" VALUES (77,5,33,195.0);
INSERT INTO "products_depthprice" VALUES (78,6,33,205.0);
INSERT INTO "products_depthprice" VALUES (79,7,33,235.0);
INSERT INTO "products_depthprice" VALUES (80,5,34,210.0);
INSERT INTO "products_depthprice" VALUES (81,6,34,220.0);
INSERT INTO "products_depthprice" VALUES (82,7,34,265.0);
INSERT INTO "products_depthprice" VALUES (83,5,35,185.0);
INSERT INTO "products_depthprice" VALUES (84,6,35,195.0);
INSERT INTO "products_depthprice" VALUES (85,7,35,235.0);
INSERT INTO "products_depthprice" VALUES (86,5,36,195.0);
INSERT INTO "products_depthprice" VALUES (87,6,36,205.0);
INSERT INTO "products_depthprice" VALUES (88,7,36,245.0);
INSERT INTO "products_depthprice" VALUES (89,5,37,220.0);
INSERT INTO "products_depthprice" VALUES (90,6,37,230.0);
INSERT INTO "products_depthprice" VALUES (91,7,37,275.0);
INSERT INTO "products_depthprice" VALUES (92,6,38,185.0);
INSERT INTO "products_depthprice" VALUES (93,6,39,195.0);
INSERT INTO "products_depthprice" VALUES (94,6,40,220.0);
INSERT INTO "products_depthprice" VALUES (95,6,41,195.0);
INSERT INTO "products_depthprice" VALUES (96,6,42,205.0);
INSERT INTO "products_depthprice" VALUES (97,7,43,230.0);
INSERT INTO "products_depthprice" VALUES (98,5,44,175.0);
INSERT INTO "products_depthprice" VALUES (99,6,44,185.0);
INSERT INTO "products_depthprice" VALUES (100,7,44,225.0);
INSERT INTO "products_depthprice" VALUES (101,5,45,185.0);
INSERT INTO "products_depthprice" VALUES (102,6,45,195.0);
INSERT INTO "products_depthprice" VALUES (103,7,45,235.0);
INSERT INTO "products_depthprice" VALUES (104,5,46,210.0);
INSERT INTO "products_depthprice" VALUES (105,6,46,220.0);
INSERT INTO "products_depthprice" VALUES (106,7,46,265.0);
INSERT INTO "products_depthprice" VALUES (107,5,47,185.0);
INSERT INTO "products_depthprice" VALUES (108,6,47,195.0);
INSERT INTO "products_depthprice" VALUES (109,7,47,235.0);
INSERT INTO "products_depthprice" VALUES (110,5,48,195.0);
INSERT INTO "products_depthprice" VALUES (111,6,48,205.0);
INSERT INTO "products_depthprice" VALUES (112,7,48,245.0);
INSERT INTO "products_depthprice" VALUES (113,5,49,220.0);
INSERT INTO "products_depthprice" VALUES (114,6,49,230.0);
INSERT INTO "products_depthprice" VALUES (115,7,49,275.0);
INSERT INTO "products_depthprice" VALUES (116,8,50,185.0);
INSERT INTO "products_depthprice" VALUES (117,8,51,195.0);
INSERT INTO "products_depthprice" VALUES (118,8,52,220.0);
INSERT INTO "products_depthprice" VALUES (119,8,53,195.0);
INSERT INTO "products_depthprice" VALUES (120,8,54,205.0);
INSERT INTO "products_depthprice" VALUES (121,8,55,230.0);
INSERT INTO "products_depthprice" VALUES (122,5,56,175.0);
INSERT INTO "products_depthprice" VALUES (123,6,56,185.0);
INSERT INTO "products_depthprice" VALUES (124,7,56,225.0);
INSERT INTO "products_depthprice" VALUES (125,10,56,325.0);
INSERT INTO "products_depthprice" VALUES (126,5,57,185.0);
INSERT INTO "products_depthprice" VALUES (127,6,57,195.0);
INSERT INTO "products_depthprice" VALUES (128,7,57,235.0);
INSERT INTO "products_depthprice" VALUES (129,10,57,340.0);
INSERT INTO "products_depthprice" VALUES (130,5,58,210.0);
INSERT INTO "products_depthprice" VALUES (131,6,58,220.0);
INSERT INTO "products_depthprice" VALUES (132,7,58,265.0);
INSERT INTO "products_depthprice" VALUES (133,9,58,375.0);
INSERT INTO "products_depthprice" VALUES (134,11,59,230.0);
INSERT INTO "products_depth" VALUES (5,'40 мм');
INSERT INTO "products_depth" VALUES (6,'45 мм');
INSERT INTO "products_depth" VALUES (7,'60 мм');
INSERT INTO "products_depth" VALUES (8,'50 мм');
INSERT INTO "products_depth" VALUES (9,'80 мм');
INSERT INTO "products_depth" VALUES (10,'80 мм');
INSERT INTO "products_depth" VALUES (11,'90 мм');
INSERT INTO "products_depth" VALUES (12,'30 мм');
INSERT INTO "products_depth" VALUES (13,'150 мм');
INSERT INTO "products_depth" VALUES (14,'10 мм');
INSERT INTO "knox_authtoken" VALUES ('350481e454d2e74687a8726e2a9310a7c49f5a189292c6752ae351e3f6e33bb318cda27a1ac6cb9b0e84d437cb824baf3ad3d91887ba21a1c7483b4933e5d7b2','ea6068bff5b45083','2020-04-24 06:37:05.937318',1,'2020-04-24 16:37:05.936368','020928c3');
INSERT INTO "knox_authtoken" VALUES ('dae95ad3eff1bf4bee6537a178f8cccf7ea17c43baf057b5d723a4a59d60a2c10a6b55264c2835fe7e57a7e3ac17e80c2ed1ed4b3c04fa3916a8e20d32a11dc8','4071fa18536c0819','2020-04-24 06:37:58.381358',1,'2020-04-24 16:37:58.380384','ae952831');
INSERT INTO "knox_authtoken" VALUES ('bc1bdb5f9eed8972dcc86f3f6bd025d07e968491d58911c1dd207e26633773fbbf340b88469862dee3ef9d98b13d259a685d7335ea8e0e97a088e78cd015777f','09c698758e558d6f','2020-05-01 12:27:35.626200',1,'2020-05-01 22:27:35.625655','aeee391f');
INSERT INTO "knox_authtoken" VALUES ('713a754ff5d8a0ff92675b5131531aff076507a2f71234d9d6ba2bc65be2fb93abccd1382ad34a3d0298088196307f8af8dba5fb16154ec183d578ab196be2c3','77ba85bfa5930407','2020-05-01 12:27:35.886761',1,'2020-05-01 22:27:35.886082','90fe4fbf');
INSERT INTO "django_session" VALUES ('jnjhmzgeh83tr2j3lse5sm6x9jnigwot','NWVkYmMwYTBlZGE2OWI3MjVkOTQ1YWNkMGJhODA1NDNjODk5NjllNTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI3OTUzMzZkY2Y0NDBhMzFkMWVmZGZiMTkxYmJhNzlkNmM1ZDcxZjhjIn0=','2020-03-15 16:22:18.230319');
INSERT INTO "django_session" VALUES ('n0k33eaklzddy0csv68h29w6uj9v8lpz','NWVkYmMwYTBlZGE2OWI3MjVkOTQ1YWNkMGJhODA1NDNjODk5NjllNTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI3OTUzMzZkY2Y0NDBhMzFkMWVmZGZiMTkxYmJhNzlkNmM1ZDcxZjhjIn0=','2020-03-21 19:47:53.970307');
INSERT INTO "django_session" VALUES ('6dtg8drn6rygl2e45duwn8r1jzm00e4v','NWVkYmMwYTBlZGE2OWI3MjVkOTQ1YWNkMGJhODA1NDNjODk5NjllNTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI3OTUzMzZkY2Y0NDBhMzFkMWVmZGZiMTkxYmJhNzlkNmM1ZDcxZjhjIn0=','2020-03-29 18:52:23.697300');
INSERT INTO "django_session" VALUES ('ihl19o2zvxhhb0h30phxanycsufk9dqn','NWVkYmMwYTBlZGE2OWI3MjVkOTQ1YWNkMGJhODA1NDNjODk5NjllNTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI3OTUzMzZkY2Y0NDBhMzFkMWVmZGZiMTkxYmJhNzlkNmM1ZDcxZjhjIn0=','2020-04-29 09:41:49.204581');
INSERT INTO "django_session" VALUES ('7auxi4n6mkvgize7u4niyncagpmwudj8','MzU2OWE3MGJjOGFiYzUyZTBhZjNjZWY4MjNhN2M5NDA3NTViNzFhMDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZjIzMWMxNTk1NmI4ZmRiYjAxNmJmZmQ1ZjUyYjY3MWNhNjA5MGRiIn0=','2020-05-07 13:30:15.567165');
INSERT INTO "django_session" VALUES ('7bpx8lr1xp1wt5nkmyukpl31vl6okyy9','MzU2OWE3MGJjOGFiYzUyZTBhZjNjZWY4MjNhN2M5NDA3NTViNzFhMDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZjIzMWMxNTk1NmI4ZmRiYjAxNmJmZmQ1ZjUyYjY3MWNhNjA5MGRiIn0=','2020-05-08 06:13:31.845980');
INSERT INTO "django_session" VALUES ('ezxinltijiwarinscoda1pp38du62k5p','MzU2OWE3MGJjOGFiYzUyZTBhZjNjZWY4MjNhN2M5NDA3NTViNzFhMDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZjIzMWMxNTk1NmI4ZmRiYjAxNmJmZmQ1ZjUyYjY3MWNhNjA5MGRiIn0=','2020-05-10 23:57:21.629009');
INSERT INTO "products_article" VALUES ('vibropressed','Вибропрессованая','','sett');
INSERT INTO "products_article" VALUES ('vibrocast','Вибролитая','','sett');
INSERT INTO "products_article" VALUES ('borders','Бордюры','','sett');
INSERT INTO "products_article" VALUES ('glossy','Глянцевый бетонный','','fence');
INSERT INTO "products_article" VALUES ('ordinary','Бетонный','','fence');
INSERT INTO "products_article" VALUES ('columns','Столбы бетонные','','fence');
INSERT INTO "products_article" VALUES ('baseblock','Фундаментный блок','','brick');
INSERT INTO "products_article" VALUES ('buildblock','Блок Строительный','','brick');
INSERT INTO "products_article" VALUES ('facblock','Блок Облицовочный','','brick');
INSERT INTO "products_article" VALUES ('facbrick','Кирпич Облицовочный','','brick');
INSERT INTO "products_article" VALUES ('cap','Крышки','','parapet');
INSERT INTO "products_article" VALUES ('parapet','Парапеты','','parapet');
INSERT INTO "products_article" VALUES ('granite','Гранитные памятники','','monuments');
INSERT INTO "products_article" VALUES ('capital','Бетонные памятники','','monuments');
INSERT INTO "products_article" VALUES ('coverplate','Отмостка','','monuments');
INSERT INTO "products_article" VALUES ('nameplate','Овалы и таблички','','monuments');
INSERT INTO "products_article" VALUES ('gully','Водосток','','sett');
INSERT INTO "products_photos" VALUES (11,'viber_image_2020-04-24_09-25-38.jpg','0.5x0.5','bc9341dd697c4101b43e5d4899de9c71');
INSERT INTO "products_photos" VALUES (12,'старый_город_5э_черный_купить_тротуарную_плитку_в_запорожье_ритм_фэм_элитбрук_9fIraFP.jpg','0.5x0.5','e72f911f3dab4e11ace847b4d3a593b3');
INSERT INTO "products_photos" VALUES (13,'квадрат_10х10_зерно_тротуарная_плитка_ЧП_Джас_запорожье_старый_город_брук_хаус_ритм_элит_C9tj30G.jpg','0.5x0.5','de46ef6300fa49c4bca9cb657f070c6b');
INSERT INTO "products_photos" VALUES (14,'старый_город_5э_зерно_коричневый_вар1_купить_тротуарную_плитку_в_запорожье_фэм_ритм_элитбрук_ндс.jpg','0.5x0.5','b24e5a1d5c19439297fe5792914a23e2');
INSERT INTO "products_photos" VALUES (15,'старый_город_4д_желтый_тротуарная_плитка_запорожье_ЧП_ДЖас_брук_хаус_ритм_элит_брук_кату_K1Ihfcv.jpg','0.5x0.5','f3ee95396285465a80a3d22aebcc95a1');
INSERT INTO "products_photos" VALUES (16,'кирпичик_коричневый_чд_джас_купить_тротуарную_плитку_в_запорожье_ритм_фэм_элитбрук_вар1.jpg','0.5x0.5','740b78bfe3a947278159a9cf5e5b13c0');
INSERT INTO "products_photos" VALUES (17,'','0.5x0.5','740b78bfe3a947278159a9cf5e5b13c0');
INSERT INTO "products_photos" VALUES (18,'кирпич_20х10_зерно_ЧП_Джас_запорожье_тротуарная_плитка_старый_город_брук_хаус_ритм_элит__24xNoXq.jpg','0.5x0.5','55c293e0cc004f5286faf05d2ed337c2');
INSERT INTO "products_photos" VALUES (19,'ромб_3д_красный_чп_джас_бордюр_тротуарная_плитка_элит_брук_брук_хаус_ритм.jpg','0.5x0.5','2f1c988a32bb4d8dbe074c82e51d8dee');
INSERT INTO "products_photos" VALUES (20,'ромб_3д_коричневый_чп_джас_бордюр_тротуарная_плитка_элит_брук_брук_хаус_ритм.jpg','0.5x0.5','2f1c988a32bb4d8dbe074c82e51d8dee');
INSERT INTO "products_photos" VALUES (21,'квадрат_200х200_тротуарная_плитка_ЧП_Джас_запорожье__бордюр_тротуарная_плитка_элит_брук__Im1JrB0.jpg','0.5x0.5','e631507b0dd943cdac3f06c26d1982e7');
INSERT INTO "products_photos" VALUES (22,'квадрат_20х20_тротуарная_плитка_ЧП_Джас_запорожье_старый_город_брук_хаус_ритм_элит_брук__tD5gljr.jpg','0.5x0.5','e631507b0dd943cdac3f06c26d1982e7');
INSERT INTO "products_photos" VALUES (23,'квадрат_20х20_зерно_тротуарная_плитка_ЧП_Джас_запорожье_старый_город_брук_хаус_ритм_элит_jKviKjz.jpg','0.5x0.5','78470d45cf3245eab280d12171571a77');
INSERT INTO "products_photos" VALUES (24,'Венеция_зерно_ЧП_Джас_запорожье_тротуарная_плитка_старый_город_брук_хаус_ритм_элит_брук__0DlfrFw.jpg','0.5x0.5','1deeca9eec9346e393346ee1d9dc878e');
INSERT INTO "products_photos" VALUES (25,'Венеция_ЧП_Джас_запорожье_тротуарная_плитка_старый_город_брук_хаус_ритм_элит_брук_катушк_OpQwagY.jpg','0.5x0.5','49a9696fe33e4f0d9a15a0b83bae922a');
INSERT INTO "products_photos" VALUES (26,'тротуарная_плитка_Венеция_оливковый__запорожье_чп_джас__старый_город_брук_хаус_ритм_элит_rlwEExW.jpg','0.5x0.5','49a9696fe33e4f0d9a15a0b83bae922a');
INSERT INTO "products_photos" VALUES (27,'ЧП_Джас_запорожье_тротуарная_плитка_косточка_купить_запорожье_низкая_цена_плитка_на_запр_95pYt3A.jpg','0.5x0.5','eab5026bb2524f82b7d7faa689db6bc4');
INSERT INTO "products_photos" VALUES (28,'єко_серый_тротуарка_плитка_ЧП_Джас_запорожье__бордюр_элит_брук_брук_хаус_ритм.jpg','0.5x0.5','44b973bb71a247d39b06606145d228d1');
INSERT INTO "products_photos" VALUES (29,'эко_укл.jpg','0.5x0.5','44b973bb71a247d39b06606145d228d1');
INSERT INTO "products_photos" VALUES (30,'Паркет_40х40_Тротуарная_плитка_ЧП_Джас_запорожье_старый_город_брук_хаус_ритм_элит_брук_к_vGhpozW.jpg','0.5x0.5','e448fb71bb3a47c69bc6addf541aa853');
INSERT INTO "products_photos" VALUES (31,'ЧП_Джас_запорожье_купить_Тротуарная_Плитка_запорожье_плитка_40х40_Паркет_тротуарная_плит_nOPZSaJ.jpg','0.5x0.5','e448fb71bb3a47c69bc6addf541aa853');
INSERT INTO "products_photos" VALUES (32,'30х30_песчаник_чп_джас_запорожье_вибролитая_тротуарная_плитка_плитка.jpg','0.5x0.5','80ed4490f5704148beb6560de4773a97');
INSERT INTO "products_photos" VALUES (33,'срез_дерева_купить_тротуарную_плитку_в_запорожье_с_ндс.jpg','0.5x0.5','690e71daa3eb464fb23eb26a5995d13d');
INSERT INTO "products_photos" VALUES (34,'бордюр_тротуарный_чп_джас_запорожье_элит_брук_брук_хаус_ритм.jpg','0.5x0.5','1462e85f2e924784b5a487a11b4dcb16');
INSERT INTO "products_photos" VALUES (35,'бордю_вибро_литой_серый_чп_джас_запорожье_тротуарная_плитка_элит_брук_брук_хаус_ритм.jpg','0.5x0.5','ec5997286aa64c8292b2b925612bac57');
INSERT INTO "products_photos" VALUES (36,'бордюр_дорожный_750_чп_джас_запорожье_элит_брук_брук_хаус_ритм.jpg','0.5x0.5','4bc519c97d5c42788ba8ca4e0ad24e7a');
INSERT INTO "products_photos" VALUES (37,'полисада_бордюр_для_ландшафта_ЧП_Джас_запорожье_тротуарная_плитка_элит_брук_брук_хаус_ритм.jpg','0.5x0.5','de08455eb0b24d3faac00f42f2cfc9e0');
INSERT INTO "products_photos" VALUES (38,'полуфера_бетоная__запорожье_ЧП_Джас_бордюр_тротуарная_плитка_элит_брук_брук_хаус_ритм.jpg','0.5x0.5','e28f1c9d8a3740d98a3c80861549033e');
INSERT INTO "products_photos" VALUES (41,'34ф.jpg','0.5x0.5','2420587899b547ea921bcbad482ffce4');
INSERT INTO "products_photos" VALUES (42,'25209.jpg','0.5x0.5','ac96040258f54b9c9765569ee6dce3d3');
INSERT INTO "products_photos" VALUES (43,'Старый_город_4э_коричневый_купить_тротуарную_плитку_в_запорожье_фэм_ритм_элит_брук_варт1.jpg','0.5x0.5','f5e3038750394c04b7b45e3985f19bf3');
INSERT INTO "products_photos" VALUES (44,'старый_город_5э_желтый_купить_тротуарную_плитку_в_запорожье_фэм_ритм_элитбрук_бордюр_вар_j3a37Zm.jpg','0.5x0.5','e72f911f3dab4e11ace847b4d3a593b3');
INSERT INTO "products_page" VALUES ('sett');
INSERT INTO "products_page" VALUES ('brick');
INSERT INTO "products_page" VALUES ('fence');
INSERT INTO "products_page" VALUES ('parapet');
INSERT INTO "products_page" VALUES ('monuments');
INSERT INTO "auth_user" VALUES (1,'pbkdf2_sha256$180000$IUYh1WClt8xP$EW8OImd61Afam6yGuV3GFXnnDN+yFTQEhf9EMHWBOKE=','2020-04-26 23:57:21.527141',1,'admin','','',1,1,'2020-02-16 13:18:59.004139','');
INSERT INTO "auth_permission" VALUES (1,1,'add_logentry','Can add log entry');
INSERT INTO "auth_permission" VALUES (2,1,'change_logentry','Can change log entry');
INSERT INTO "auth_permission" VALUES (3,1,'delete_logentry','Can delete log entry');
INSERT INTO "auth_permission" VALUES (4,1,'view_logentry','Can view log entry');
INSERT INTO "auth_permission" VALUES (5,2,'add_permission','Can add permission');
INSERT INTO "auth_permission" VALUES (6,2,'change_permission','Can change permission');
INSERT INTO "auth_permission" VALUES (7,2,'delete_permission','Can delete permission');
INSERT INTO "auth_permission" VALUES (8,2,'view_permission','Can view permission');
INSERT INTO "auth_permission" VALUES (9,3,'add_group','Can add group');
INSERT INTO "auth_permission" VALUES (10,3,'change_group','Can change group');
INSERT INTO "auth_permission" VALUES (11,3,'delete_group','Can delete group');
INSERT INTO "auth_permission" VALUES (12,3,'view_group','Can view group');
INSERT INTO "auth_permission" VALUES (13,4,'add_user','Can add user');
INSERT INTO "auth_permission" VALUES (14,4,'change_user','Can change user');
INSERT INTO "auth_permission" VALUES (15,4,'delete_user','Can delete user');
INSERT INTO "auth_permission" VALUES (16,4,'view_user','Can view user');
INSERT INTO "auth_permission" VALUES (17,5,'add_contenttype','Can add content type');
INSERT INTO "auth_permission" VALUES (18,5,'change_contenttype','Can change content type');
INSERT INTO "auth_permission" VALUES (19,5,'delete_contenttype','Can delete content type');
INSERT INTO "auth_permission" VALUES (20,5,'view_contenttype','Can view content type');
INSERT INTO "auth_permission" VALUES (21,6,'add_session','Can add session');
INSERT INTO "auth_permission" VALUES (22,6,'change_session','Can change session');
INSERT INTO "auth_permission" VALUES (23,6,'delete_session','Can delete session');
INSERT INTO "auth_permission" VALUES (24,6,'view_session','Can view session');
INSERT INTO "auth_permission" VALUES (25,7,'add_article','Can add article');
INSERT INTO "auth_permission" VALUES (26,7,'change_article','Can change article');
INSERT INTO "auth_permission" VALUES (27,7,'delete_article','Can delete article');
INSERT INTO "auth_permission" VALUES (28,7,'view_article','Can view article');
INSERT INTO "auth_permission" VALUES (29,8,'add_depth','Can add depth');
INSERT INTO "auth_permission" VALUES (30,8,'change_depth','Can change depth');
INSERT INTO "auth_permission" VALUES (31,8,'delete_depth','Can delete depth');
INSERT INTO "auth_permission" VALUES (32,8,'view_depth','Can view depth');
INSERT INTO "auth_permission" VALUES (33,9,'add_page','Can add page');
INSERT INTO "auth_permission" VALUES (34,9,'change_page','Can change page');
INSERT INTO "auth_permission" VALUES (35,9,'delete_page','Can delete page');
INSERT INTO "auth_permission" VALUES (36,9,'view_page','Can view page');
INSERT INTO "auth_permission" VALUES (37,10,'add_productcard','Can add product card');
INSERT INTO "auth_permission" VALUES (38,10,'change_productcard','Can change product card');
INSERT INTO "auth_permission" VALUES (39,10,'delete_productcard','Can delete product card');
INSERT INTO "auth_permission" VALUES (40,10,'view_productcard','Can view product card');
INSERT INTO "auth_permission" VALUES (41,11,'add_prices','Can add prices');
INSERT INTO "auth_permission" VALUES (42,11,'change_prices','Can change prices');
INSERT INTO "auth_permission" VALUES (43,11,'delete_prices','Can delete prices');
INSERT INTO "auth_permission" VALUES (44,11,'view_prices','Can view prices');
INSERT INTO "auth_permission" VALUES (45,12,'add_photos','Can add photos');
INSERT INTO "auth_permission" VALUES (46,12,'change_photos','Can change photos');
INSERT INTO "auth_permission" VALUES (47,12,'delete_photos','Can delete photos');
INSERT INTO "auth_permission" VALUES (48,12,'view_photos','Can view photos');
INSERT INTO "auth_permission" VALUES (49,13,'add_news','Can add news');
INSERT INTO "auth_permission" VALUES (50,13,'change_news','Can change news');
INSERT INTO "auth_permission" VALUES (51,13,'delete_news','Can delete news');
INSERT INTO "auth_permission" VALUES (52,13,'view_news','Can view news');
INSERT INTO "auth_permission" VALUES (53,14,'add_depthprice','Can add depth price');
INSERT INTO "auth_permission" VALUES (54,14,'change_depthprice','Can change depth price');
INSERT INTO "auth_permission" VALUES (55,14,'delete_depthprice','Can delete depth price');
INSERT INTO "auth_permission" VALUES (56,14,'view_depthprice','Can view depth price');
INSERT INTO "auth_permission" VALUES (57,15,'add_exposition','Can add exposition');
INSERT INTO "auth_permission" VALUES (58,15,'change_exposition','Can change exposition');
INSERT INTO "auth_permission" VALUES (59,15,'delete_exposition','Can delete exposition');
INSERT INTO "auth_permission" VALUES (60,15,'view_exposition','Can view exposition');
INSERT INTO "auth_permission" VALUES (61,16,'add_expositionphotos','Can add exposition photos');
INSERT INTO "auth_permission" VALUES (62,16,'change_expositionphotos','Can change exposition photos');
INSERT INTO "auth_permission" VALUES (63,16,'delete_expositionphotos','Can delete exposition photos');
INSERT INTO "auth_permission" VALUES (64,16,'view_expositionphotos','Can view exposition photos');
INSERT INTO "auth_permission" VALUES (65,17,'add_authtoken','Can add auth token');
INSERT INTO "auth_permission" VALUES (66,17,'change_authtoken','Can change auth token');
INSERT INTO "auth_permission" VALUES (67,17,'delete_authtoken','Can delete auth token');
INSERT INTO "auth_permission" VALUES (68,17,'view_authtoken','Can view auth token');
INSERT INTO "django_content_type" VALUES (1,'admin','logentry');
INSERT INTO "django_content_type" VALUES (2,'auth','permission');
INSERT INTO "django_content_type" VALUES (3,'auth','group');
INSERT INTO "django_content_type" VALUES (4,'auth','user');
INSERT INTO "django_content_type" VALUES (5,'contenttypes','contenttype');
INSERT INTO "django_content_type" VALUES (6,'sessions','session');
INSERT INTO "django_content_type" VALUES (7,'products','article');
INSERT INTO "django_content_type" VALUES (8,'products','depth');
INSERT INTO "django_content_type" VALUES (9,'products','page');
INSERT INTO "django_content_type" VALUES (10,'products','productcard');
INSERT INTO "django_content_type" VALUES (11,'products','prices');
INSERT INTO "django_content_type" VALUES (12,'products','photos');
INSERT INTO "django_content_type" VALUES (13,'products','news');
INSERT INTO "django_content_type" VALUES (14,'products','depthprice');
INSERT INTO "django_content_type" VALUES (15,'products','exposition');
INSERT INTO "django_content_type" VALUES (16,'products','expositionphotos');
INSERT INTO "django_content_type" VALUES (17,'knox','authtoken');
INSERT INTO "django_admin_log" VALUES (1,'2020-02-16 13:19:45.734945','sett','sett','[{"added": {}}]',9,1,1);
INSERT INTO "django_admin_log" VALUES (2,'2020-02-16 13:20:10.035603','vibropressed','Вибропрессованая тротуарная плитка, vibropressed','[{"added": {}}]',7,1,1);
INSERT INTO "django_admin_log" VALUES (3,'2020-02-16 13:20:23.212931','123df16d-54ff-43cc-a920-74939caf8bef','Старый Город','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (4,'2020-02-16 13:24:06.281240','1','40','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (5,'2020-02-16 13:24:18.959318','2','60','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (6,'2020-02-16 13:25:56.188688','1','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "DepthPrice object (1)"}}, {"added": {"name": "depth price", "object": "DepthPrice object (2)"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (7,'2020-02-16 13:26:50.251860','2','Оливковый','[{"added": {}}, {"added": {"name": "depth price", "object": "DepthPrice object (3)"}}, {"added": {"name": "depth price", "object": "DepthPrice object (4)"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (8,'2020-02-16 15:41:41.852045','3','Синий','[{"added": {}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (9,'2020-02-16 15:53:40.520471','fc5c46c8-f110-4392-aa6c-603a6de2ee68','Новый Город','[{"added": {}}, {"added": {"name": "prices", "object": "\u0421\u0435\u0440\u044b\u0439"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (10,'2020-02-16 15:54:05.630199','3dd444bf-b1e1-43be-bc72-7357afaf65e2','Затерянный Город','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (11,'2020-02-16 15:54:35.760825','5','Красный','[{"added": {}}, {"added": {"name": "depth price", "object": "199"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (12,'2020-02-16 15:59:45.150472','2','Оливковый','[{"changed": {"name": "depth price", "object": "181", "fields": ["Price"]}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (13,'2020-02-16 16:03:37.917248','3','Синий','[{"added": {"name": "depth price", "object": "69"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (14,'2020-02-16 16:08:00.512614','3','Синий','[{"deleted": {"name": "depth price", "object": "69"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (15,'2020-02-16 23:06:55.938201','123df16d-54ff-43cc-a920-74939caf8bef','Старый Город','[{"changed": {"fields": ["Description"]}}, {"added": {"name": "photos", "object": "Photos object (1)"}}, {"added": {"name": "photos", "object": "Photos object (2)"}}, {"added": {"name": "photos", "object": "Photos object (3)"}}, {"added": {"name": "photos", "object": "Photos object (4)"}}, {"added": {"name": "photos", "object": "Photos object (5)"}}, {"added": {"name": "photos", "object": "Photos object (6)"}}, {"added": {"name": "photos", "object": "Photos object (7)"}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (16,'2020-02-16 23:07:31.055417','3','Синий','',11,1,3);
INSERT INTO "django_admin_log" VALUES (17,'2020-02-16 23:07:31.215556','2','Оливковый','',11,1,3);
INSERT INTO "django_admin_log" VALUES (18,'2020-02-16 23:09:18.297375','1','Серый','[{"changed": {"name": "depth price", "object": "185", "fields": ["Price"]}}, {"deleted": {"name": "depth price", "object": "200"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (19,'2020-02-16 23:09:42.700940','3','45','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (20,'2020-02-16 23:09:49.615357','4','60','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (21,'2020-02-16 23:10:14.650794','1','Серый','[{"added": {"name": "depth price", "object": "190"}}, {"added": {"name": "depth price", "object": "210"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (22,'2020-02-16 23:11:36.856213','4','60','[{"deleted": {"name": "depth price", "object": "210"}}]',8,1,2);
INSERT INTO "django_admin_log" VALUES (23,'2020-02-16 23:11:57.913560','1','Серый','',11,1,3);
INSERT INTO "django_admin_log" VALUES (24,'2020-02-16 23:12:21.599175','4','60','',8,1,3);
INSERT INTO "django_admin_log" VALUES (25,'2020-02-16 23:12:21.696176','3','45','',8,1,3);
INSERT INTO "django_admin_log" VALUES (26,'2020-02-16 23:12:21.761835','2','60','',8,1,3);
INSERT INTO "django_admin_log" VALUES (27,'2020-02-16 23:12:21.850605','1','40','',8,1,3);
INSERT INTO "django_admin_log" VALUES (28,'2020-02-16 23:13:05.860113','5','40','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (29,'2020-02-16 23:13:25.082384','5','40 мм','[{"changed": {"fields": ["Size"]}}]',8,1,2);
INSERT INTO "django_admin_log" VALUES (30,'2020-02-16 23:13:35.990659','6','45 мм','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (31,'2020-02-16 23:13:42.028470','7','60 мм','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (32,'2020-02-16 23:14:05.499229','6','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "190"}}, {"added": {"name": "depth price", "object": "210"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (33,'2020-02-16 23:15:27.171732','7','Красный, коричневый, оливковый, светло-коричневый, чёрный','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "200"}}, {"added": {"name": "depth price", "object": "220"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (34,'2020-02-16 23:15:50.395502','8','Желтый, оранжевый, белый (на белом цементе):','[{"added": {}}, {"added": {"name": "depth price", "object": "220"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (35,'2020-02-16 23:16:37.962531','8','Желтый, оранжевый, белый (на белом цементе):','[{"added": {"name": "depth price", "object": "225"}}, {"added": {"name": "depth price", "object": "245"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (36,'2020-02-17 20:58:39.144313','123df16d-54ff-43cc-a920-74939caf8bef','Старый Город','[{"changed": {"fields": ["Description", "Sizes"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (37,'2020-02-17 22:42:35.508057','3dd444bf-b1e1-43be-bc72-7357afaf65e2','Затерянный Город','[{"changed": {"fields": ["Description"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (38,'2020-02-18 01:38:27.343289','123df16d-54ff-43cc-a920-74939caf8bef','Старый Город','[{"changed": {"fields": ["Description", "Discount", "Sertificate"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (39,'2020-02-19 19:35:32.779218','4b508062-c0d8-4f3a-92fb-1dabd3cc3d45','Древний Город','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (8)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (40,'2020-02-19 19:53:52.806096','5','Красный','[{"added": {"name": "depth price", "object": "199"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (41,'2020-02-21 02:03:48.332690','123df16d-54ff-43cc-a920-74939caf8bef','Старый Город','[{"changed": {"fields": ["Description"]}}, {"added": {"name": "news", "object": "\u041d\u043e\u0432\u043e\u0441\u0442\u044c"}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (42,'2020-02-25 10:09:42.201207','brick','brick','[{"added": {}}]',9,1,1);
INSERT INTO "django_admin_log" VALUES (43,'2020-02-25 10:32:41.227784','d744d896-961d-47c8-a03d-14542e7c13f1','Кирпич дорожный','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (9)"}}, {"added": {"name": "photos", "object": "Photos object (10)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (44,'2020-02-25 11:09:38.719719','9','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "175"}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "225"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (45,'2020-02-25 11:10:41.378435','10','Оливковый, Красный, Коричневый, Светло-коричневый, Черный','[{"added": {}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "235"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (46,'2020-03-01 19:15:48.274961','1','ул. Узкоколейная 5','[{"added": {}}, {"added": {"name": "exposition photos", "object": "ExpositionPhotos object (1)"}}, {"added": {"name": "exposition photos", "object": "ExpositionPhotos object (2)"}}, {"added": {"name": "exposition photos", "object": "ExpositionPhotos object (3)"}}]',15,1,1);
INSERT INTO "django_admin_log" VALUES (47,'2020-03-01 19:26:45.361360','2','ул. Техническая 21','[{"added": {}}, {"added": {"name": "exposition photos", "object": "\u0443\u043b. \u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f 21"}}, {"added": {"name": "exposition photos", "object": "\u0443\u043b. \u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f 21"}}, {"added": {"name": "exposition photos", "object": "\u0443\u043b. \u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f 21"}}]',15,1,1);
INSERT INTO "django_admin_log" VALUES (48,'2020-03-01 19:42:12.086286','3','Поле под Соколовкой','[{"added": {}}, {"added": {"name": "exposition photos", "object": "\u041f\u043e\u043b\u0435 \u043f\u043e\u0434 \u0421\u043e\u043a\u043e\u043b\u043e\u0432\u043a\u043e\u0439"}}, {"added": {"name": "exposition photos", "object": "\u041f\u043e\u043b\u0435 \u043f\u043e\u0434 \u0421\u043e\u043a\u043e\u043b\u043e\u0432\u043a\u043e\u0439"}}, {"added": {"name": "exposition photos", "object": "\u041f\u043e\u043b\u0435 \u043f\u043e\u0434 \u0421\u043e\u043a\u043e\u043b\u043e\u0432\u043a\u043e\u0439"}}, {"added": {"name": "exposition photos", "object": "\u041f\u043e\u043b\u0435 \u043f\u043e\u0434 \u0421\u043e\u043a\u043e\u043b\u043e\u0432\u043a\u043e\u0439"}}]',15,1,1);
INSERT INTO "django_admin_log" VALUES (49,'2020-03-01 19:42:22.919541','3','Поле под Соколовкой','[{"changed": {"name": "exposition photos", "object": "\u041f\u043e\u043b\u0435 \u043f\u043e\u0434 \u0421\u043e\u043a\u043e\u043b\u043e\u0432\u043a\u043e\u0439", "fields": ["Photo"]}}]',15,1,2);
INSERT INTO "django_admin_log" VALUES (50,'2020-03-07 19:50:32.450892','sett','sett','[{"added": {"name": "article", "object": "\u0412\u0438\u0431\u0440\u043e\u043b\u0438\u0442\u0430\u044f, vibrocast"}}, {"added": {"name": "article", "object": "\u0411\u043e\u0440\u0434\u044e\u0440\u044b, borders"}}, {"changed": {"name": "article", "object": "\u0412\u0438\u0431\u0440\u043e\u043f\u0440\u0435\u0441\u0441\u043e\u0432\u0430\u043d\u0430\u044f, vibropressed", "fields": ["\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"]}}]',9,1,2);
INSERT INTO "django_admin_log" VALUES (51,'2020-03-07 19:52:24.930602','fence','fence','[{"added": {}}, {"added": {"name": "article", "object": "\u0413\u043b\u044f\u043d\u0446\u0435\u0432\u044b\u0439 \u0431\u0435\u0442\u043e\u043d\u043d\u044b\u0439, glossy"}}, {"added": {"name": "article", "object": "\u0411\u0435\u0442\u043e\u043d\u043d\u044b\u0439, ordinary"}}, {"added": {"name": "article", "object": "\u0421\u0442\u043e\u043b\u0431\u044b \u0431\u0435\u0442\u043e\u043d\u043d\u044b\u0435, columns"}}]',9,1,1);
INSERT INTO "django_admin_log" VALUES (52,'2020-03-07 19:53:27.744144','brick','brick','[{"added": {"name": "article", "object": "\u0424\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442\u043d\u044b\u0439 \u0431\u043b\u043e\u043a, baseblock"}}, {"added": {"name": "article", "object": "\u0411\u043b\u043e\u043a \u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439, buildblock"}}, {"added": {"name": "article", "object": "\u0411\u043b\u043e\u043a \u041e\u0431\u043b\u0438\u0446\u043e\u0432\u043e\u0447\u043d\u044b\u0439, facblock"}}, {"added": {"name": "article", "object": "\u041a\u0438\u0440\u043f\u0438\u0447 \u041e\u0431\u043b\u0438\u0446\u043e\u0432\u043e\u0447\u043d\u044b\u0439, facbrick"}}]',9,1,2);
INSERT INTO "django_admin_log" VALUES (53,'2020-03-07 19:54:14.500435','parapet','parapet','[{"added": {}}, {"added": {"name": "article", "object": "\u041a\u0440\u044b\u0448\u043a\u0438, cap"}}, {"added": {"name": "article", "object": "\u041f\u0430\u0440\u0430\u043f\u0435\u0442\u044b, parapet"}}]',9,1,1);
INSERT INTO "django_admin_log" VALUES (54,'2020-03-07 19:55:31.527871','monuments','monuments','[{"added": {}}, {"added": {"name": "article", "object": "\u0413\u0440\u0430\u043d\u0438\u0442\u043d\u044b\u0435 \u043f\u0430\u043c\u044f\u0442\u043d\u0438\u043a\u0438, granite"}}, {"added": {"name": "article", "object": "\u0411\u0435\u0442\u043e\u043d\u043d\u044b\u0435 \u043f\u0430\u043c\u044f\u0442\u043d\u0438\u043a\u0438, capital"}}, {"added": {"name": "article", "object": "\u041e\u0442\u043c\u043e\u0441\u0442\u043a\u0430, coverplate"}}, {"added": {"name": "article", "object": "\u041e\u0432\u0430\u043b\u044b \u0438 \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0438, nameplate"}}]',9,1,1);
INSERT INTO "django_admin_log" VALUES (55,'2020-03-07 19:59:10.424367','3132c20f-27a9-4b86-bdd4-5d188eb78330','Городок','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (56,'2020-03-07 19:59:49.594662','9c40f9ac-1a02-49e2-95ae-6ff8463cc77b','Бордюр литой','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (57,'2020-03-07 20:00:15.554896','13df2264-0d17-4b1e-9830-38d37a88032d','Крым','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (58,'2020-03-07 20:00:32.416703','a6baa275-c438-47bc-862c-d1969bcde90d','Фагот','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (59,'2020-03-07 20:01:43.311620','1f2beb67-5a93-475b-88ac-737045a51f61','Столб "Четвёрка"','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (60,'2020-03-07 20:02:09.779323','0dc81fae-ee29-46c7-9378-b99ba4c75d46','Блок','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (61,'2020-03-07 20:03:36.974548','fb827caa-59d5-499e-9af5-21c68b2d9834','Строительный блок','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (62,'2020-03-07 20:04:01.461547','d87fb640-fe73-496a-88be-49b8daa4b740','Облицовочный','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (63,'2020-03-07 20:04:26.830204','54963490-9e04-43a7-8b0d-00753b94c1e3','Кирпич для облицовки','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (64,'2020-03-07 20:04:50.777460','85a0ee91-a917-4264-a4f9-891836cf82f3','Крышка на столб','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (65,'2020-03-07 20:05:08.078603','049a38cb-b4a5-4f19-b2c8-e738b50ee4bb','Парапет для забора','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (66,'2020-03-07 20:05:42.167979','e1b31cb7-ddec-4ba3-ad4d-da791495cbbb','Памятник чёрный','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (67,'2020-03-07 20:05:58.424240','7a21fd53-4d47-4a47-b5c9-963c13787bd1','Памятник из бетона','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (68,'2020-03-07 20:06:34.564552','c4231e6c-2f01-49ac-a897-8fdcf46957e8','Для проверки спины','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (69,'2020-03-07 20:06:47.975098','8a4db8db-61e7-4cd4-b584-12f178466b6e','Табличка для памятника','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (70,'2020-03-15 10:19:52.041362','2','Griha','',4,1,3);
INSERT INTO "django_admin_log" VALUES (71,'2020-03-15 10:22:09.964923','3','Griha','',4,1,3);
INSERT INTO "django_admin_log" VALUES (72,'2020-03-15 10:24:42.381350','4','Griha','',4,1,3);
INSERT INTO "django_admin_log" VALUES (73,'2020-03-15 10:26:38.683538','5','Griha','',4,1,3);
INSERT INTO "django_admin_log" VALUES (74,'2020-03-15 10:28:22.013596','6','Griha','',4,1,3);
INSERT INTO "django_admin_log" VALUES (75,'2020-04-15 09:43:42.118645','2','Новый дорожный кирпич в наличии','[{"added": {}}]',13,1,1);
INSERT INTO "django_admin_log" VALUES (76,'2020-04-15 09:55:29.908354','1','Новость','[{"changed": {"fields": ["Body"]}}]',13,1,2);
INSERT INTO "django_admin_log" VALUES (77,'2020-04-15 09:55:47.703422','2','Новый дорожный кирпич в наличии','[]',13,1,2);
INSERT INTO "django_admin_log" VALUES (78,'2020-04-15 09:56:01.006641','2','Новый дорожный кирпич в наличии','[{"changed": {"fields": ["Body"]}}]',13,1,2);
INSERT INTO "django_admin_log" VALUES (79,'2020-04-15 09:56:30.288750','2','Новый дорожный кирпич в наличии','[{"changed": {"fields": ["Body"]}}]',13,1,2);
INSERT INTO "django_admin_log" VALUES (80,'2020-04-15 09:56:54.945651','1','Новость','[{"changed": {"fields": ["Body"]}}]',13,1,2);
INSERT INTO "django_admin_log" VALUES (81,'2020-04-15 09:58:14.219841','2','Новый дорожный кирпич в наличии','',13,1,3);
INSERT INTO "django_admin_log" VALUES (82,'2020-04-15 09:58:14.573094','1','Новость','',13,1,3);
INSERT INTO "django_admin_log" VALUES (83,'2020-04-15 09:59:30.701577','1','Новость','[{"added": {}}]',13,1,1);
INSERT INTO "django_admin_log" VALUES (84,'2020-04-15 10:00:05.876649','2','Поступил новый дорожный кирпич','[{"added": {}}]',13,1,1);
INSERT INTO "django_admin_log" VALUES (85,'2020-04-15 10:00:21.588078','1','Новость','[{"changed": {"fields": ["Body"]}}]',13,1,2);
INSERT INTO "django_admin_log" VALUES (86,'2020-04-15 10:00:36.059985','2','Поступил новый дорожный кирпич','[{"changed": {"fields": ["Body"]}}]',13,1,2);
INSERT INTO "django_admin_log" VALUES (87,'2020-04-23 10:59:33.470977','fc5c46c8-f110-4392-aa6c-603a6de2ee68','Новый Город','',10,1,3);
INSERT INTO "django_admin_log" VALUES (88,'2020-04-23 10:59:33.897212','fb827caa-59d5-499e-9af5-21c68b2d9834','Строительный блок','',10,1,3);
INSERT INTO "django_admin_log" VALUES (89,'2020-04-23 10:59:34.074121','e1b31cb7-ddec-4ba3-ad4d-da791495cbbb','Памятник чёрный','',10,1,3);
INSERT INTO "django_admin_log" VALUES (90,'2020-04-23 10:59:34.229256','d87fb640-fe73-496a-88be-49b8daa4b740','Облицовочный','',10,1,3);
INSERT INTO "django_admin_log" VALUES (91,'2020-04-23 10:59:34.352174','c4231e6c-2f01-49ac-a897-8fdcf46957e8','Для проверки спины','',10,1,3);
INSERT INTO "django_admin_log" VALUES (92,'2020-04-23 10:59:34.440256','a6baa275-c438-47bc-862c-d1969bcde90d','Фагот','',10,1,3);
INSERT INTO "django_admin_log" VALUES (93,'2020-04-23 10:59:34.529326','9c40f9ac-1a02-49e2-95ae-6ff8463cc77b','Бордюр литой','',10,1,3);
INSERT INTO "django_admin_log" VALUES (94,'2020-04-23 10:59:34.607230','8a4db8db-61e7-4cd4-b584-12f178466b6e','Табличка для памятника','',10,1,3);
INSERT INTO "django_admin_log" VALUES (95,'2020-04-23 10:59:34.695485','85a0ee91-a917-4264-a4f9-891836cf82f3','Крышка на столб','',10,1,3);
INSERT INTO "django_admin_log" VALUES (96,'2020-04-23 10:59:34.917740','7a21fd53-4d47-4a47-b5c9-963c13787bd1','Памятник из бетона','',10,1,3);
INSERT INTO "django_admin_log" VALUES (97,'2020-04-23 10:59:35.062159','54963490-9e04-43a7-8b0d-00753b94c1e3','Кирпич для облицовки','',10,1,3);
INSERT INTO "django_admin_log" VALUES (98,'2020-04-23 10:59:35.194984','4b508062-c0d8-4f3a-92fb-1dabd3cc3d45','Древний Город','',10,1,3);
INSERT INTO "django_admin_log" VALUES (99,'2020-04-23 10:59:35.272178','3dd444bf-b1e1-43be-bc72-7357afaf65e2','Затерянный Город','',10,1,3);
INSERT INTO "django_admin_log" VALUES (100,'2020-04-23 10:59:35.373028','3132c20f-27a9-4b86-bdd4-5d188eb78330','Городок','',10,1,3);
INSERT INTO "django_admin_log" VALUES (101,'2020-04-23 10:59:35.483481','1f2beb67-5a93-475b-88ac-737045a51f61','Столб "Четвёрка"','',10,1,3);
INSERT INTO "django_admin_log" VALUES (102,'2020-04-23 10:59:35.605628','13df2264-0d17-4b1e-9830-38d37a88032d','Крым','',10,1,3);
INSERT INTO "django_admin_log" VALUES (103,'2020-04-23 10:59:35.705326','123df16d-54ff-43cc-a920-74939caf8bef','Старый Город','',10,1,3);
INSERT INTO "django_admin_log" VALUES (104,'2020-04-23 10:59:35.805646','0dc81fae-ee29-46c7-9378-b99ba4c75d46','Блок','',10,1,3);
INSERT INTO "django_admin_log" VALUES (105,'2020-04-23 10:59:36.061904','049a38cb-b4a5-4f19-b2c8-e738b50ee4bb','Парапет для забора','',10,1,3);
INSERT INTO "django_admin_log" VALUES (106,'2020-04-23 11:00:52.027641','d744d896-961d-47c8-a03d-14542e7c13f1','Кирпич дорожный','',10,1,3);
INSERT INTO "django_admin_log" VALUES (107,'2020-04-23 11:03:13.971938','10','Поле под Соколовкой','',16,1,3);
INSERT INTO "django_admin_log" VALUES (108,'2020-04-23 11:03:14.220902','9','Поле под Соколовкой','',16,1,3);
INSERT INTO "django_admin_log" VALUES (109,'2020-04-23 11:03:14.387172','8','Поле под Соколовкой','',16,1,3);
INSERT INTO "django_admin_log" VALUES (110,'2020-04-23 11:03:14.475558','7','Поле под Соколовкой','',16,1,3);
INSERT INTO "django_admin_log" VALUES (111,'2020-04-23 11:03:14.564524','6','ул. Техническая 21','',16,1,3);
INSERT INTO "django_admin_log" VALUES (112,'2020-04-23 11:03:14.660881','5','ул. Техническая 21','',16,1,3);
INSERT INTO "django_admin_log" VALUES (113,'2020-04-23 11:03:14.764480','4','ул. Техническая 21','',16,1,3);
INSERT INTO "django_admin_log" VALUES (114,'2020-04-23 11:03:14.853138','3','ул. Узкоколейная 5','',16,1,3);
INSERT INTO "django_admin_log" VALUES (115,'2020-04-23 11:03:14.919734','2','ул. Узкоколейная 5','',16,1,3);
INSERT INTO "django_admin_log" VALUES (116,'2020-04-23 11:03:15.008224','1','ул. Узкоколейная 5','',16,1,3);
INSERT INTO "django_admin_log" VALUES (117,'2020-04-23 11:04:04.038078','3','Поле под Соколовкой','',15,1,3);
INSERT INTO "django_admin_log" VALUES (118,'2020-04-23 11:04:04.123366','2','ул. Техническая 21','',15,1,3);
INSERT INTO "django_admin_log" VALUES (119,'2020-04-23 11:04:04.222614','1','ул. Узкоколейная 5','',15,1,3);
INSERT INTO "django_admin_log" VALUES (120,'2020-04-23 13:25:24.690540','7','Griha','',4,1,3);
INSERT INTO "django_admin_log" VALUES (121,'2020-04-23 13:25:24.967332','8','Grikanus','',4,1,3);
INSERT INTO "django_admin_log" VALUES (122,'2020-04-24 06:20:37.473008','bc9341dd-697c-4101-b43e-5d4899de9c71','sdf','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (11)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (123,'2020-04-24 06:26:11.217637','bc9341dd-697c-4101-b43e-5d4899de9c71','«квадрат 10х10» СТАНДАРТ','[{"changed": {"fields": ["Name", "Sett=\u0422\u0440\u043e\u0442\u0443\u0430\u0440\u043a\u0430, fence=\u0417\u0430\u0431\u043e\u0440,             brick=\u041a\u0438\u0440\u043f\u0438\u0447, monuments=\u041f\u0430\u043c\u044f\u0442\u043d\u0438\u043a\u0438", "Sizes"]}}, {"changed": {"name": "photos", "object": "Photos object (11)", "fields": ["Photo"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (124,'2020-04-24 06:28:36.142193','e72f911f-3dab-4e11-ace8-47b4d3a593b3','"Старый город" (5 элементов) СТАНДАРТ','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (12)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (125,'2020-04-24 06:29:14.550081','e72f911f-3dab-4e11-ace8-47b4d3a593b3','"Старый город" (5 элементов) СТАНДАРТ','[{"changed": {"fields": ["Discount"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (126,'2020-04-24 06:31:04.594846','11','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "170"}}, {"added": {"name": "depth price", "object": "180"}}, {"added": {"name": "depth price", "object": "225"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (127,'2020-04-24 06:31:09.442173','11','Серый','[]',11,1,2);
INSERT INTO "django_admin_log" VALUES (128,'2020-04-24 06:32:35.877000','11','Серый','[{"changed": {"fields": ["OldPrice"]}}, {"changed": {"name": "depth price", "object": "175", "fields": ["Price"]}}, {"changed": {"name": "depth price", "object": "185", "fields": ["Price"]}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (129,'2020-04-24 06:33:49.341547','12','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "235"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (130,'2020-04-24 06:33:55.957982','12','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[]',11,1,2);
INSERT INTO "django_admin_log" VALUES (131,'2020-04-24 06:35:18.389088','13','Желтый, Оранжевый, белый:','[{"added": {}}, {"added": {"name": "depth price", "object": "210"}}, {"added": {"name": "depth price", "object": "220"}}, {"added": {"name": "depth price", "object": "265"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (132,'2020-04-24 07:02:01.937181','14','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "220"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (133,'2020-04-24 07:05:16.018885','15','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "205"}}, {"added": {"name": "depth price", "object": "230"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (134,'2020-04-24 07:06:21.302826','14','Серый','[{"changed": {"name": "depth price", "object": "235", "fields": ["Price"]}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (135,'2020-04-24 07:06:33.612414','15','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"changed": {"name": "depth price", "object": "245", "fields": ["Price"]}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (136,'2020-04-24 07:07:05.217170','14','Серый','[]',11,1,2);
INSERT INTO "django_admin_log" VALUES (137,'2020-04-24 07:07:14.530841','15','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[]',11,1,2);
INSERT INTO "django_admin_log" VALUES (138,'2020-04-24 07:08:10.665546','16','Желтый, Оранжевый, белый:','[{"added": {}}, {"added": {"name": "depth price", "object": "220"}}, {"added": {"name": "depth price", "object": "230"}}, {"added": {"name": "depth price", "object": "275"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (139,'2020-04-24 07:10:13.322922','e72f911f-3dab-4e11-ace8-47b4d3a593b3','"Старый город" (5 элементов) СТАНДАРТ','[{"changed": {"fields": ["Sizes"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (140,'2020-04-24 07:10:38.123167','bc9341dd-697c-4101-b43e-5d4899de9c71','«квадрат 10х10» СТАНДАРТ','[{"changed": {"fields": ["Sizes"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (141,'2020-04-24 07:14:46.197484','de46ef63-00fa-49c4-bca9-cb657f070c6b','«квадрат 10х10» ЗЕРНО','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (13)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (142,'2020-04-24 07:16:27.221364','b24e5a1d-5c19-4392-97fe-5792914a23e2','«Старый город» (5 элементов) ЗЕРНО','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (14)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (143,'2020-04-24 07:27:29.589470','f3ee9539-6285-465a-80a3-d22aebcc95a1','«Старый город 3д» (4 элемента) стандарт','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (15)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (144,'2020-04-24 07:39:04.328533','f5e30387-5039-4c04-b7b4-5e3985f19bf3','«Старый город 3D» (4 элемента) ЗЕРНО','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (145,'2020-04-24 07:45:27.910881','740b78bf-e3a9-4727-8159-a9cf5e5b13c0','«кирпичик дорожный» СТАНДАРТ','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (16)"}}, {"added": {"name": "photos", "object": "Photos object (17)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (146,'2020-04-24 07:46:13.661642','f5e30387-5039-4c04-b7b4-5e3985f19bf3','«Старый город 3D» (4 элемента) ЗЕРНО','[{"changed": {"fields": ["Discount"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (147,'2020-04-24 07:46:29.485420','de46ef63-00fa-49c4-bca9-cb657f070c6b','«квадрат 10х10» ЗЕРНО','[{"changed": {"fields": ["Discount"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (148,'2020-04-24 07:46:42.838501','f5e30387-5039-4c04-b7b4-5e3985f19bf3','«Старый город 3D» (4 элемента) ЗЕРНО','[{"changed": {"fields": ["Discount"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (149,'2020-04-24 07:47:05.264925','f3ee9539-6285-465a-80a3-d22aebcc95a1','«Старый город 3д» (4 элемента) СТАНДАРТ','[{"changed": {"fields": ["Name"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (150,'2020-04-24 07:50:18.426496','55c293e0-cc00-4f52-86fa-f05d2ed337c2','«кирпичик дорожный» ЗЕРНО','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (18)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (151,'2020-04-24 07:52:03.919069','cf576ec0-7105-40a2-9fde-a5edba9abd4b','«Ромб» СТАНДАРТ','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (152,'2020-04-24 07:56:53.734720','2f1c988a-32bb-4d8d-be07-4c82e51d8dee','«Ромб» ЗЕРНО','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (19)"}}, {"added": {"name": "photos", "object": "Photos object (20)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (153,'2020-04-24 07:57:29.103226','f5e30387-5039-4c04-b7b4-5e3985f19bf3','«Старый город 3D» (4 элемента) ЗЕРНО','[]',10,1,2);
INSERT INTO "django_admin_log" VALUES (154,'2020-04-24 07:57:55.583468','2f1c988a-32bb-4d8d-be07-4c82e51d8dee','«Ромб» ЗЕРНО','[{"changed": {"fields": ["Discount", "Sertificate"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (155,'2020-04-24 08:00:58.286940','e631507b-0dd9-43cd-ac3f-06c26d1982e7','«квадрат 20х20» СТАНДАРТ','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (21)"}}, {"added": {"name": "photos", "object": "Photos object (22)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (156,'2020-04-24 08:02:56.868293','78470d45-cf32-45ea-b280-d12171571a77','«квадрат 20х20» ЗЕРНО','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (23)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (157,'2020-04-24 08:07:00.394173','49a9696f-e33e-4f0d-9a15-a0b83bae922a','«Венеция» СТАНДАРТ','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (158,'2020-04-24 08:10:49.653526','1deeca9e-ec93-46e3-9334-6ee1d9dc878e','«Венеция» ЗЕРНО','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (24)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (159,'2020-04-24 08:11:56.116388','49a9696f-e33e-4f0d-9a15-a0b83bae922a','«Венеция» СТАНДАРТ','[{"added": {"name": "photos", "object": "Photos object (25)"}}, {"added": {"name": "photos", "object": "Photos object (26)"}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (160,'2020-04-24 08:14:17.420414','eab5026b-b252-4f82-b7d7-faa689db6bc4','«Катушка» «Кость»','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (27)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (161,'2020-04-24 08:17:46.161340','44b973bb-71a2-47d3-9b06-606145d228d1','«эко»','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (28)"}}, {"added": {"name": "photos", "object": "Photos object (29)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (162,'2020-04-24 08:20:29.521246','e448fb71-bb3a-47c6-9bc6-addf541aa853','«Паркет»','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (30)"}}, {"added": {"name": "photos", "object": "Photos object (31)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (163,'2020-04-24 08:22:56.829241','80ed4490-f570-4148-beb6-560de4773a97','«песчаник»','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (32)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (164,'2020-04-24 08:25:30.909173','690e71da-a3eb-464f-b23e-b26a5995d13d','«срез дерева»','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (33)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (165,'2020-04-24 08:59:30.153322','1462e85f-2e92-4784-b5a4-87a11b4dcb16','Бордюр вибропресованный','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (34)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (166,'2020-04-24 08:59:46.172829','1462e85f-2e92-4784-b5a4-87a11b4dcb16','Бордюр вибропресованный','[{"changed": {"fields": ["Sertificate"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (167,'2020-04-24 09:09:44.193326','ec599728-6aa6-4c82-92b2-b925612bac57','Бордюр вибролитой','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (35)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (168,'2020-04-24 09:11:59.967372','4bc519c9-7d5c-4278-8ba8-ca4e0ad24e7a','Бордюр дорожный','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (36)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (169,'2020-04-24 09:14:04.706264','de08455e-b0b2-4d3f-aac0-0f42f2cfc9e0','бордюр "полисада"','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (37)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (170,'2020-04-24 09:17:15.841857','e28f1c9d-8a37-40d9-8a3c-80861549033e','Полусфера','[{"added": {}}, {"added": {"name": "photos", "object": "Photos object (38)"}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (171,'2020-04-24 09:19:26.573210','e28f1c9d-8a37-40d9-8a3c-80861549033e','Полусфера','[{"changed": {"fields": ["Description"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (172,'2020-04-24 09:22:23.269287','17','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "235"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (173,'2020-04-24 09:23:20.421034','18','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "205"}}, {"added": {"name": "depth price", "object": "245"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (174,'2020-04-24 09:24:21.979102','19','Желтый, Оранжевый, белый','[{"added": {}}, {"added": {"name": "depth price", "object": "220"}}, {"added": {"name": "depth price", "object": "230"}}, {"added": {"name": "depth price", "object": "275"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (175,'2020-04-24 09:25:56.973171','20','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "205"}}, {"added": {"name": "depth price", "object": "245"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (176,'2020-04-24 09:27:05.648833','21','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "205"}}, {"added": {"name": "depth price", "object": "215"}}, {"added": {"name": "depth price", "object": "255"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (177,'2020-04-24 09:28:11.339427','22','Желтый, Оранжевый, белый:','[{"added": {}}, {"added": {"name": "depth price", "object": "230"}}, {"added": {"name": "depth price", "object": "240"}}, {"added": {"name": "depth price", "object": "285"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (178,'2020-04-24 09:31:13.983100','23','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "185"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (179,'2020-04-24 09:32:54.585890','24','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (180,'2020-04-24 09:33:40.317481','25','Желтый, Оранжевый, белый:','[{"added": {}}, {"added": {"name": "depth price", "object": "220"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (181,'2020-04-24 09:34:15.584060','f3ee9539-6285-465a-80a3-d22aebcc95a1','«Старый город 3D» (4 элемента) СТАНДАРТ','[{"changed": {"fields": ["Name"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (182,'2020-04-24 09:53:44.521497','26','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "235"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (183,'2020-04-24 09:54:47.915925','27','Коричневый, Красный, Оливковый, Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "205"}}, {"added": {"name": "depth price", "object": "245"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (184,'2020-04-24 09:56:31.200936','28','Желтый, Оранжевый, белый','[{"added": {}}, {"added": {"name": "depth price", "object": "230"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (185,'2020-04-24 09:56:45.932015','27','Коричневый, Красный, Оливковый, Светло-коричневый, Чёрный:','',11,1,3);
INSERT INTO "django_admin_log" VALUES (186,'2020-04-24 09:57:08.145053','26','Серый','',11,1,3);
INSERT INTO "django_admin_log" VALUES (187,'2020-04-24 09:59:13.900225','29','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (188,'2020-04-24 09:59:43.521231','30','Коричневый, Красный, Оливковый, Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "205"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (189,'2020-04-24 10:08:11.132413','28','Желтый, Оранжевый, белый','[]',11,1,2);
INSERT INTO "django_admin_log" VALUES (190,'2020-04-24 10:08:33.167778','28','Желтый, Оранжевый, белый','',11,1,3);
INSERT INTO "django_admin_log" VALUES (191,'2020-04-24 10:09:14.860571','31','Желтый, Оранжевый, белый','[{"added": {}}, {"added": {"name": "depth price", "object": "220"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (192,'2020-04-24 10:10:39.069052','31','Желтый, Оранжевый, белый','[{"changed": {"fields": ["OldPrice"]}}, {"changed": {"name": "depth price", "object": "230", "fields": ["Price"]}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (193,'2020-04-24 10:12:14.787970','32','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "175"}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "210"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (194,'2020-04-24 10:14:17.335285','33','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "205"}}, {"added": {"name": "depth price", "object": "235"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (195,'2020-04-24 10:14:34.668663','32','Серый','[{"changed": {"name": "depth price", "object": "225", "fields": ["Price"]}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (196,'2020-04-24 10:15:51.479423','34','Желтый, Оранжевый, белый','[{"added": {}}, {"added": {"name": "depth price", "object": "210"}}, {"added": {"name": "depth price", "object": "220"}}, {"added": {"name": "depth price", "object": "265"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (197,'2020-04-24 10:19:11.192801','35','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "235"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (198,'2020-04-24 10:20:06.179202','36','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "205"}}, {"added": {"name": "depth price", "object": "245"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (199,'2020-04-24 10:21:24.114716','37','Желтый, Оранжевый, белый:','[{"added": {}}, {"added": {"name": "depth price", "object": "220"}}, {"added": {"name": "depth price", "object": "230"}}, {"added": {"name": "depth price", "object": "275"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (200,'2020-04-24 10:22:43.106798','38','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "185"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (201,'2020-04-24 10:23:25.980886','39','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (202,'2020-04-24 10:24:06.480810','40','Желтый, Оранжевый, белый:','[{"added": {}}, {"added": {"name": "depth price", "object": "220"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (203,'2020-04-24 10:24:55.509558','38','Серый','[{"changed": {"fields": ["OldPrice"]}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (204,'2020-04-24 10:26:06.486461','41','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (205,'2020-04-24 10:26:37.589566','42','Коричневый, Красный, Оливковый, Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "205"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (206,'2020-04-24 10:27:17.858212','43','Желтый, Оранжевый, белый:','[{"added": {}}, {"added": {"name": "depth price", "object": "230"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (207,'2020-04-24 10:28:33.228996','de08455e-b0b2-4d3f-aac0-0f42f2cfc9e0','Бордюр "полисада"','[{"changed": {"fields": ["Name"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (208,'2020-04-24 10:29:17.376638','55c293e0-cc00-4f52-86fa-f05d2ed337c2','«Кирпичик дорожный» ЗЕРНО','[{"changed": {"fields": ["Name"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (209,'2020-04-24 10:29:31.063103','e631507b-0dd9-43cd-ac3f-06c26d1982e7','«Квадрат 20х20» СТАНДАРТ','[{"changed": {"fields": ["Name"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (210,'2020-04-24 10:29:46.350437','de46ef63-00fa-49c4-bca9-cb657f070c6b','«Квадрат 10х10» ЗЕРНО','[{"changed": {"fields": ["Name"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (211,'2020-04-24 10:30:04.361194','bc9341dd-697c-4101-b43e-5d4899de9c71','«Квадрат 10х10» СТАНДАРТ','[{"changed": {"fields": ["Name"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (212,'2020-04-24 10:30:24.022026','78470d45-cf32-45ea-b280-d12171571a77','«Квадрат 20х20» ЗЕРНО','[{"changed": {"fields": ["Name"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (213,'2020-04-24 10:30:50.474910','740b78bf-e3a9-4727-8159-a9cf5e5b13c0','«Кирпичик дорожный» СТАНДАРТ','[{"changed": {"fields": ["Name"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (214,'2020-04-24 10:31:19.651935','44b973bb-71a2-47d3-9b06-606145d228d1','«Эко»','[{"changed": {"fields": ["Name"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (215,'2020-04-24 10:33:06.788115','44','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "175"}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "225"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (216,'2020-04-24 10:33:43.862809','45','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "235"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (217,'2020-04-24 10:34:22.993067','46','Желтый, Оранжевый, белый:','[{"added": {}}, {"added": {"name": "depth price", "object": "210"}}, {"added": {"name": "depth price", "object": "220"}}, {"added": {"name": "depth price", "object": "265"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (218,'2020-04-24 10:35:27.408365','47','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "235"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (219,'2020-04-24 10:36:13.323048','48','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "205"}}, {"added": {"name": "depth price", "object": "245"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (220,'2020-04-24 10:38:40.176511','49','Желтый, Оранжевый, белый:','[{"added": {}}, {"added": {"name": "depth price", "object": "220"}}, {"added": {"name": "depth price", "object": "230"}}, {"added": {"name": "depth price", "object": "275"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (221,'2020-04-24 11:34:53.538734','8','50 мм','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (222,'2020-04-24 11:35:12.804407','50','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "185"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (223,'2020-04-24 11:35:46.639170','51','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (224,'2020-04-24 11:36:35.368958','52','Желтый, Оранжевый, белый:','[{"added": {}}, {"added": {"name": "depth price", "object": "220"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (225,'2020-04-24 11:37:00.748961','53','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "195"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (226,'2020-04-24 11:37:27.149900','54','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "205"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (227,'2020-04-24 11:37:54.664871','55','Желтый, Оранжевый, белый:','[{"added": {}}, {"added": {"name": "depth price", "object": "230"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (228,'2020-04-24 11:38:57.280648','9','80 мм','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (229,'2020-04-24 11:39:47.506007','10','80 мм','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (230,'2020-04-24 11:39:57.220162','56','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "175"}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "225"}}, {"added": {"name": "depth price", "object": "325"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (231,'2020-04-24 11:41:03.084084','57','Коричневый, Красный, Оливковый,  Светло-коричневый, Чёрный:','[{"added": {}}, {"added": {"name": "depth price", "object": "185"}}, {"added": {"name": "depth price", "object": "195"}}, {"added": {"name": "depth price", "object": "235"}}, {"added": {"name": "depth price", "object": "340"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (232,'2020-04-24 11:42:17.636274','58','Желтый, Оранжевый, белый:','[{"added": {}}, {"added": {"name": "depth price", "object": "210"}}, {"added": {"name": "depth price", "object": "220"}}, {"added": {"name": "depth price", "object": "265"}}, {"added": {"name": "depth price", "object": "375"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (233,'2020-04-24 11:42:44.140026','11','90 мм','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (234,'2020-04-24 11:43:03.846355','59','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "230"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (235,'2020-04-24 11:44:18.990640','60','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "210"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (236,'2020-04-24 11:44:45.705782','12','30 мм','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (237,'2020-04-24 11:44:57.919368','61','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "175"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (238,'2020-04-24 11:45:52.565219','62','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "50"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (239,'2020-04-24 11:46:39.037501','63','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "37"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (240,'2020-04-24 11:46:55.888460','63','Серый','[]',11,1,2);
INSERT INTO "django_admin_log" VALUES (241,'2020-04-24 11:47:25.464646','63','Серый','[]',11,1,2);
INSERT INTO "django_admin_log" VALUES (242,'2020-04-24 11:48:02.003636','64','Красный, коричневый:','[{"added": {}}, {"added": {"name": "depth price", "object": "41"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (243,'2020-04-24 11:48:45.514285','65','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "37"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (244,'2020-04-24 11:50:05.267027','13','150 мм','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (245,'2020-04-24 11:50:09.584200','66','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "157"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (246,'2020-04-24 11:50:20.969233','66','Серый','[{"changed": {"name": "depth price", "object": "167", "fields": ["Price"]}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (247,'2020-04-24 11:51:31.352288','14','10 мм','[{"added": {}}]',8,1,1);
INSERT INTO "django_admin_log" VALUES (248,'2020-04-24 11:51:38.572710','67','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "16"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (249,'2020-04-24 11:52:05.776248','68','красный, коричневый:','[{"added": {}}, {"added": {"name": "depth price", "object": "18"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (250,'2020-04-24 11:53:57.069704','69','Серый','[{"added": {}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (251,'2020-04-24 11:54:11.051382','69','Серый','[{"changed": {"fields": ["OldPrice"]}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (252,'2020-04-24 12:44:47.165430','4','Запорожская область, Матвеевское кладбище','[{"added": {}}, {"added": {"name": "exposition photos", "object": "\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c, \u041c\u0430\u0442\u0432\u0435\u0435\u0432\u0441\u043a\u043e\u0435 \u043a\u043b\u0430\u0434\u0431\u0438\u0449\u0435"}}]',15,1,1);
INSERT INTO "django_admin_log" VALUES (253,'2020-04-24 12:45:19.721294','4','Запорожская область, Матвеевское кладбище','[{"changed": {"name": "exposition photos", "object": "\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c, \u041c\u0430\u0442\u0432\u0435\u0435\u0432\u0441\u043a\u043e\u0435 \u043a\u043b\u0430\u0434\u0431\u0438\u0449\u0435", "fields": ["Photo"]}}]',15,1,2);
INSERT INTO "django_admin_log" VALUES (254,'2020-04-24 12:46:46.072666','4','Запорожская область, Матвеевское кладбище','[{"changed": {"name": "exposition photos", "object": "\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c, \u041c\u0430\u0442\u0432\u0435\u0435\u0432\u0441\u043a\u043e\u0435 \u043a\u043b\u0430\u0434\u0431\u0438\u0449\u0435", "fields": ["Description", "Photo"]}}]',15,1,2);
INSERT INTO "django_admin_log" VALUES (255,'2020-04-24 12:52:37.571746','24205878-99b5-47ea-921b-cbad482ffce4','Плита забора №34ф','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (256,'2020-04-24 12:53:37.744046','24205878-99b5-47ea-921b-cbad482ffce4','Плита забора №34ф','[{"added": {"name": "photos", "object": "Photos object (39)"}}, {"added": {"name": "photos", "object": "Photos object (40)"}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (257,'2020-04-24 12:58:20.282055','24205878-99b5-47ea-921b-cbad482ffce4','Плита забора №34ф','[{"deleted": {"name": "photos", "object": "Photos object (None)"}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (258,'2020-04-24 12:58:30.906155','24205878-99b5-47ea-921b-cbad482ffce4','Плита забора №34ф','[{"deleted": {"name": "photos", "object": "Photos object (None)"}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (259,'2020-04-24 12:58:47.392030','24205878-99b5-47ea-921b-cbad482ffce4','Плита забора №34ф','[{"added": {"name": "photos", "object": "Photos object (41)"}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (260,'2020-04-24 12:59:50.264547','24205878-99b5-47ea-921b-cbad482ffce4','Плита забора №34ф','[]',10,1,2);
INSERT INTO "django_admin_log" VALUES (261,'2020-04-24 13:02:11.504832','70','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "178"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (262,'2020-04-26 23:48:30.694355','gully','sett, Водосток, gully','[{"added": {}}]',7,1,1);
INSERT INTO "django_admin_log" VALUES (263,'2020-04-26 23:49:30.274831','ac960402-58f5-4b9c-9765-569ee6dce3d3','Водосток глубокий','[{"added": {}}]',10,1,1);
INSERT INTO "django_admin_log" VALUES (264,'2020-04-26 23:50:32.897500','ac960402-58f5-4b9c-9765-569ee6dce3d3','Водосток глубокий','[{"added": {"name": "photos", "object": "Photos object (42)"}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (265,'2020-04-26 23:52:55.232546','ac960402-58f5-4b9c-9765-569ee6dce3d3','Водосток глубокий','[{"changed": {"fields": ["Description", "Sizes"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (266,'2020-04-26 23:56:26.570964','71','Серый','[{"added": {}}, {"added": {"name": "depth price", "object": "80"}}]',11,1,1);
INSERT INTO "django_admin_log" VALUES (267,'2020-04-27 00:01:01.897389','ac960402-58f5-4b9c-9765-569ee6dce3d3','Водосток глубокий','[{"changed": {"fields": ["Description"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (268,'2020-04-27 00:01:21.373050','71','Серый','',11,1,3);
INSERT INTO "django_admin_log" VALUES (269,'2020-04-28 18:18:42.163366','60','Серый','[{"changed": {"fields": ["\u0415\u0441\u043b\u0438 \u0437\u0434\u0435\u0441\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0446\u0435\u043d\u0430, \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442"]}}, {"deleted": {"name": "depth price", "object": "210.0"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (270,'2020-04-28 18:19:02.944049','61','Серый','[{"changed": {"fields": ["\u0415\u0441\u043b\u0438 \u0437\u0434\u0435\u0441\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0446\u0435\u043d\u0430, \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442"]}}, {"deleted": {"name": "depth price", "object": "175.0"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (271,'2020-04-28 18:19:18.923400','62','Серый','[{"changed": {"fields": ["\u0415\u0441\u043b\u0438 \u0437\u0434\u0435\u0441\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0446\u0435\u043d\u0430, \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442"]}}, {"deleted": {"name": "depth price", "object": "50.0"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (272,'2020-04-28 18:20:45.754614','64','Красный, коричневый:','[{"changed": {"fields": ["\u0415\u0441\u043b\u0438 \u0437\u0434\u0435\u0441\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0446\u0435\u043d\u0430, \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442"]}}, {"deleted": {"name": "depth price", "object": "41.0"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (273,'2020-04-28 18:21:01.394807','63','Серый','[{"changed": {"fields": ["\u0415\u0441\u043b\u0438 \u0437\u0434\u0435\u0441\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0446\u0435\u043d\u0430, \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442"]}}, {"deleted": {"name": "depth price", "object": "37.0"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (274,'2020-04-28 18:21:23.018160','65','Серый','[{"changed": {"fields": ["\u0415\u0441\u043b\u0438 \u0437\u0434\u0435\u0441\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0446\u0435\u043d\u0430, \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442"]}}, {"deleted": {"name": "depth price", "object": "37.0"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (275,'2020-04-28 18:21:37.594920','66','Серый','[{"changed": {"fields": ["\u0415\u0441\u043b\u0438 \u0437\u0434\u0435\u0441\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0446\u0435\u043d\u0430, \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442"]}}, {"deleted": {"name": "depth price", "object": "167.0"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (276,'2020-04-28 18:21:55.385857','68','красный, коричневый:','[{"changed": {"fields": ["\u0415\u0441\u043b\u0438 \u0437\u0434\u0435\u0441\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0446\u0435\u043d\u0430, \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442"]}}, {"deleted": {"name": "depth price", "object": "18.0"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (277,'2020-04-28 18:22:00.657593','67','Серый','[{"changed": {"fields": ["\u0415\u0441\u043b\u0438 \u0437\u0434\u0435\u0441\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0446\u0435\u043d\u0430, \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442"]}}, {"deleted": {"name": "depth price", "object": "16.0"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (278,'2020-04-28 18:22:41.428795','70','Серый','[{"changed": {"fields": ["\u0415\u0441\u043b\u0438 \u0437\u0434\u0435\u0441\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0446\u0435\u043d\u0430, \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442"]}}, {"deleted": {"name": "depth price", "object": "178.0"}}]',11,1,2);
INSERT INTO "django_admin_log" VALUES (279,'2020-04-28 18:36:52.006116','24205878-99b5-47ea-921b-cbad482ffce4','Плита забора №34ф','[{"added": {"name": "\u0426\u0435\u043d\u0443", "object": "\u0416\u0435\u043b\u0442\u044b\u0439"}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (280,'2020-04-29 10:29:42.646181','f5e30387-5039-4c04-b7b4-5e3985f19bf3','«Старый город 3D» (4 элемента) ЗЕРНО','[{"added": {"name": "photos", "object": "Photos object (43)"}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (281,'2020-04-29 12:12:43.503252','e72f911f-3dab-4e11-ace8-47b4d3a593b3','"Старый город" (5 элементов) СТАНДАРТ','[{"changed": {"name": "photos", "object": "Photos object (12)", "fields": ["Photo"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (282,'2020-04-29 12:13:14.524042','e72f911f-3dab-4e11-ace8-47b4d3a593b3','"Старый город" (5 элементов) СТАНДАРТ','[{"changed": {"name": "photos", "object": "Photos object (12)", "fields": ["Photo"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (283,'2020-04-29 12:28:28.701099','b24e5a1d-5c19-4392-97fe-5792914a23e2','«Старый город» (5 элементов) ЗЕРНО','[{"changed": {"name": "photos", "object": "Photos object (14)", "fields": ["Photo"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (284,'2020-04-29 12:28:54.819430','b24e5a1d-5c19-4392-97fe-5792914a23e2','«Старый город» (5 элементов) ЗЕРНО','[{"changed": {"name": "photos", "object": "Photos object (14)", "fields": ["Photo"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (285,'2020-04-29 12:48:21.863217','e72f911f-3dab-4e11-ace8-47b4d3a593b3','"Старый город" (5 элементов) СТАНДАРТ','[{"changed": {"name": "photos", "object": "Photos object (12)", "fields": ["Photo"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (286,'2020-04-29 12:50:25.919104','e72f911f-3dab-4e11-ace8-47b4d3a593b3','"Старый город" (5 элементов) СТАНДАРТ','[{"added": {"name": "photos", "object": "Photos object (44)"}}, {"changed": {"name": "photos", "object": "Photos object (12)", "fields": ["Photo"]}}]',10,1,2);
INSERT INTO "django_admin_log" VALUES (287,'2020-04-29 14:41:25.476405','740b78bf-e3a9-4727-8159-a9cf5e5b13c0','«Кирпичик дорожный» СТАНДАРТ','[{"changed": {"name": "photos", "object": "Photos object (16)", "fields": ["Photo"]}}, {"changed": {"name": "photos", "object": "Photos object (17)", "fields": ["Photo"]}}]',10,1,2);
INSERT INTO "django_migrations" VALUES (1,'contenttypes','0001_initial','2020-02-16 13:18:18.530531');
INSERT INTO "django_migrations" VALUES (2,'auth','0001_initial','2020-02-16 13:18:18.749620');
INSERT INTO "django_migrations" VALUES (3,'admin','0001_initial','2020-02-16 13:18:18.876843');
INSERT INTO "django_migrations" VALUES (4,'admin','0002_logentry_remove_auto_add','2020-02-16 13:18:18.984466');
INSERT INTO "django_migrations" VALUES (5,'admin','0003_logentry_add_action_flag_choices','2020-02-16 13:18:19.119434');
INSERT INTO "django_migrations" VALUES (6,'contenttypes','0002_remove_content_type_name','2020-02-16 13:18:19.252235');
INSERT INTO "django_migrations" VALUES (7,'auth','0002_alter_permission_name_max_length','2020-02-16 13:18:19.365927');
INSERT INTO "django_migrations" VALUES (8,'auth','0003_alter_user_email_max_length','2020-02-16 13:18:19.457588');
INSERT INTO "django_migrations" VALUES (9,'auth','0004_alter_user_username_opts','2020-02-16 13:18:19.592162');
INSERT INTO "django_migrations" VALUES (10,'auth','0005_alter_user_last_login_null','2020-02-16 13:18:19.704948');
INSERT INTO "django_migrations" VALUES (11,'auth','0006_require_contenttypes_0002','2020-02-16 13:18:19.795850');
INSERT INTO "django_migrations" VALUES (12,'auth','0007_alter_validators_add_error_messages','2020-02-16 13:18:19.921597');
INSERT INTO "django_migrations" VALUES (13,'auth','0008_alter_user_username_max_length','2020-02-16 13:18:20.016158');
INSERT INTO "django_migrations" VALUES (14,'auth','0009_alter_user_last_name_max_length','2020-02-16 13:18:20.137232');
INSERT INTO "django_migrations" VALUES (15,'auth','0010_alter_group_name_max_length','2020-02-16 13:18:20.248395');
INSERT INTO "django_migrations" VALUES (16,'auth','0011_update_proxy_permissions','2020-02-16 13:18:20.362436');
INSERT INTO "django_migrations" VALUES (17,'products','0001_initial','2020-02-16 13:18:20.505837');
INSERT INTO "django_migrations" VALUES (18,'sessions','0001_initial','2020-02-16 13:18:20.612028');
INSERT INTO "django_migrations" VALUES (19,'products','0002_auto_20200218_0134','2020-02-18 01:35:11.942094');
INSERT INTO "django_migrations" VALUES (20,'products','0003_auto_20200301_1834','2020-03-01 18:34:33.831518');
INSERT INTO "django_migrations" VALUES (21,'products','0004_auto_20200301_1902','2020-03-01 19:02:19.665194');
INSERT INTO "django_migrations" VALUES (22,'products','0005_auto_20200301_1907','2020-03-01 19:07:47.479647');
INSERT INTO "django_migrations" VALUES (23,'products','0006_productcard_owner','2020-03-15 07:40:26.126553');
INSERT INTO "django_migrations" VALUES (24,'knox','0001_initial','2020-03-15 07:51:50.981575');
INSERT INTO "django_migrations" VALUES (25,'knox','0002_auto_20150916_1425','2020-03-15 07:51:51.248780');
INSERT INTO "django_migrations" VALUES (26,'knox','0003_auto_20150916_1526','2020-03-15 07:51:51.434155');
INSERT INTO "django_migrations" VALUES (27,'knox','0004_authtoken_expires','2020-03-15 07:51:51.540163');
INSERT INTO "django_migrations" VALUES (28,'knox','0005_authtoken_token_key','2020-03-15 07:51:51.661364');
INSERT INTO "django_migrations" VALUES (29,'knox','0006_auto_20160818_0932','2020-03-15 07:51:51.784698');
INSERT INTO "django_migrations" VALUES (30,'knox','0007_auto_20190111_0542','2020-03-15 07:51:51.931888');
INSERT INTO "django_migrations" VALUES (31,'products','0007_auto_20200415_0958','2020-04-15 09:58:57.948545');
INSERT INTO "django_migrations" VALUES (32,'products','0008_auto_20200426_0039','2020-04-26 23:51:40.161038');
INSERT INTO "django_migrations" VALUES (33,'products','0009_auto_20200426_2351','2020-04-26 23:51:40.880812');
INSERT INTO "django_migrations" VALUES (34,'products','0009_auto_20200428_1407','2020-04-28 18:14:38.500865');
INSERT INTO "django_migrations" VALUES (35,'products','0010_merge_20200428_1814','2020-04-28 18:14:39.374776');
CREATE INDEX IF NOT EXISTS "products_productcard_owner_id_9fc086f9" ON "products_productcard" (
	"owner_id"
);
CREATE INDEX IF NOT EXISTS "products_productcard_article_id_ac631783" ON "products_productcard" (
	"article_id"
);
CREATE INDEX IF NOT EXISTS "products_prices_product_id_1b817f6c" ON "products_prices" (
	"product_id"
);
CREATE INDEX IF NOT EXISTS "products_expositionphotos_exposition_id_658aeae4" ON "products_expositionphotos" (
	"exposition_id"
);
CREATE INDEX IF NOT EXISTS "products_depthprice_prices_id_dd97f9eb" ON "products_depthprice" (
	"prices_id"
);
CREATE INDEX IF NOT EXISTS "products_depthprice_depth_id_db91b6d2" ON "products_depthprice" (
	"depth_id"
);
CREATE INDEX IF NOT EXISTS "products_news_product_id_b948e915" ON "products_news" (
	"product_id"
);
CREATE INDEX IF NOT EXISTS "knox_authtoken_token_key_8f4f7d47" ON "knox_authtoken" (
	"token_key"
);
CREATE INDEX IF NOT EXISTS "knox_authtoken_user_id_e5a5d899" ON "knox_authtoken" (
	"user_id"
);
CREATE INDEX IF NOT EXISTS "django_session_expire_date_a5c62663" ON "django_session" (
	"expire_date"
);
CREATE INDEX IF NOT EXISTS "products_article_page_id_d3f03e8d" ON "products_article" (
	"page_id"
);
CREATE INDEX IF NOT EXISTS "products_photos_product_id_e7cdb272" ON "products_photos" (
	"product_id"
);
CREATE INDEX IF NOT EXISTS "auth_permission_content_type_id_2f476e4b" ON "auth_permission" (
	"content_type_id"
);
CREATE UNIQUE INDEX IF NOT EXISTS "auth_permission_content_type_id_codename_01ab375a_uniq" ON "auth_permission" (
	"content_type_id",
	"codename"
);
CREATE UNIQUE INDEX IF NOT EXISTS "django_content_type_app_label_model_76bd3d3b_uniq" ON "django_content_type" (
	"app_label",
	"model"
);
CREATE INDEX IF NOT EXISTS "django_admin_log_user_id_c564eba6" ON "django_admin_log" (
	"user_id"
);
CREATE INDEX IF NOT EXISTS "django_admin_log_content_type_id_c4bce8eb" ON "django_admin_log" (
	"content_type_id"
);
CREATE INDEX IF NOT EXISTS "auth_user_user_permissions_permission_id_1fbb5f2c" ON "auth_user_user_permissions" (
	"permission_id"
);
CREATE INDEX IF NOT EXISTS "auth_user_user_permissions_user_id_a95ead1b" ON "auth_user_user_permissions" (
	"user_id"
);
CREATE UNIQUE INDEX IF NOT EXISTS "auth_user_user_permissions_user_id_permission_id_14a6b632_uniq" ON "auth_user_user_permissions" (
	"user_id",
	"permission_id"
);
CREATE INDEX IF NOT EXISTS "auth_user_groups_group_id_97559544" ON "auth_user_groups" (
	"group_id"
);
CREATE INDEX IF NOT EXISTS "auth_user_groups_user_id_6a12ed8b" ON "auth_user_groups" (
	"user_id"
);
CREATE UNIQUE INDEX IF NOT EXISTS "auth_user_groups_user_id_group_id_94350c0c_uniq" ON "auth_user_groups" (
	"user_id",
	"group_id"
);
CREATE INDEX IF NOT EXISTS "auth_group_permissions_permission_id_84c5c92e" ON "auth_group_permissions" (
	"permission_id"
);
CREATE INDEX IF NOT EXISTS "auth_group_permissions_group_id_b120cbf9" ON "auth_group_permissions" (
	"group_id"
);
CREATE UNIQUE INDEX IF NOT EXISTS "auth_group_permissions_group_id_permission_id_0cd325b0_uniq" ON "auth_group_permissions" (
	"group_id",
	"permission_id"
);
COMMIT;
