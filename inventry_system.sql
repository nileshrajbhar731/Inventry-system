-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: inventry_system
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_retailer_backup_details`
--

DROP TABLE IF EXISTS `_retailer_backup_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_retailer_backup_details` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNumber` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `usertype` int NOT NULL,
  `active` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_retailer_backup_details`
--

LOCK TABLES `_retailer_backup_details` WRITE;
/*!40000 ALTER TABLE `_retailer_backup_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `_retailer_backup_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fruits`
--

DROP TABLE IF EXISTS `fruits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fruits` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `totalQuantity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fruits`
--

LOCK TABLES `fruits` WRITE;
/*!40000 ALTER TABLE `fruits` DISABLE KEYS */;
INSERT INTO `fruits` VALUES (1,'Alphonso Mangoes - Ratnagiri, Maharashtra','50','1kg','200kg','2022-08-09 03:15:50','2022-08-09 03:15:50'),(2,'Banana','50','2kg','200kg','2022-08-09 03:18:44','2022-08-09 03:18:44'),(3,'Apple','500','1kg','10kg','2022-08-09 03:24:29','2022-08-09 03:24:29'),(4,'Strawberry','500','3kg','250kg','2022-08-09 03:44:54','2022-08-09 03:44:54');
/*!40000 ALTER TABLE `fruits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grocery`
--

DROP TABLE IF EXISTS `grocery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grocery` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nameType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `totalQuantity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grocery`
--

LOCK TABLES `grocery` WRITE;
/*!40000 ALTER TABLE `grocery` DISABLE KEYS */;
INSERT INTO `grocery` VALUES (2,'Oils','10','20','8kg','100kg','2022-08-09 10:30:14','2022-08-09 10:30:14');
/*!40000 ALTER TABLE `grocery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (56,'2014_10_12_000000_create_users_table',1),(57,'2014_10_12_100000_create_password_resets_table',1),(58,'2019_08_19_000000_create_failed_jobs_table',1),(59,'2019_12_14_000001_create_personal_access_tokens_table',1),(60,'2022_06_24_090059_create_register_table',1),(61,'2022_06_25_080359_create_fruits_table',1),(62,'2022_06_25_084211_create_vegitables_table',1),(63,'2022_06_25_090437_create_grocery_table',2),(64,'2022_06_27_063434_create__retailer_backup_details_table',2),(65,'2022_07_24_163217_create_UserOnlineOrder_table',2),(66,'2022_07_24_163217_create__order_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\RegisterModel',1,'auth_token','1f0d0ce10d0c27b449e030ac1a4d068addef90a81a111ad76cc9a903977e47ea','[\"*\"]',NULL,'2022-08-09 04:27:18','2022-08-09 04:27:18'),(2,'App\\Models\\RegisterModel',4,'auth_token','4003688814d53ad0aeaa57399ff50e7ab58990785735ada98f5daa88ee91f3e8','[\"*\"]',NULL,'2022-08-09 04:39:35','2022-08-09 04:39:35'),(3,'App\\Models\\RegisterModel',1,'auth_token','d5b0665d78bb54f4f4d47f63cddd694235eb2a9e260d8c0f7142fd64883cbba9','[\"*\"]',NULL,'2022-08-09 04:46:14','2022-08-09 04:46:14'),(4,'App\\Models\\RegisterModel',1,'auth_token','0956439caad50c0f71879b61e1be1fed93144538a85c78f69940aeb40bb774fc','[\"*\"]',NULL,'2022-08-09 05:00:28','2022-08-09 05:00:28'),(5,'App\\Models\\RegisterModel',1,'auth_token','1355ffc70cb1404a92569f19b78bba92e51f888eb8abcca7ccb8dbd1aa38c318','[\"*\"]',NULL,'2022-08-09 05:00:29','2022-08-09 05:00:29'),(6,'App\\Models\\RegisterModel',1,'auth_token','1c20b09afd76da006d525dfac1dae5a712ea6b5ac9b1e254c36c11af98258900','[\"*\"]',NULL,'2022-08-09 05:01:09','2022-08-09 05:01:09'),(7,'App\\Models\\RegisterModel',4,'auth_token','c9d1ada39916af03a3b2b5e12441d3136f8cb7e137f14d323d65c1dc5c359fb9','[\"*\"]',NULL,'2022-08-09 05:03:02','2022-08-09 05:03:02'),(8,'App\\Models\\RegisterModel',4,'auth_token','7840967422ae53b4defbbca9892b6f4e32906607a188d0d49c6f9f200eda246d','[\"*\"]',NULL,'2022-08-09 05:16:47','2022-08-09 05:16:47'),(9,'App\\Models\\RegisterModel',4,'auth_token','e6c83d731ef99484aeae5e724cb5d550213304ed6d0a7fc1e7d124295bccec23','[\"*\"]',NULL,'2022-08-09 05:29:33','2022-08-09 05:29:33'),(10,'App\\Models\\RegisterModel',4,'auth_token','b40848081da39258a4f8e63422712b33ba1e82c2ab8954cf42bdee11e4b46314','[\"*\"]',NULL,'2022-08-09 05:30:06','2022-08-09 05:30:06'),(11,'App\\Models\\RegisterModel',1,'auth_token','d3402297e17f2e041f387d0ef8bed9ea6d63127a15896aba2af9bf6e0139178d','[\"*\"]',NULL,'2022-08-09 05:31:01','2022-08-09 05:31:01'),(12,'App\\Models\\RegisterModel',4,'auth_token','c4a5a64f82d11a6753d5dc700fe8615275b9ebdaecbc3dcbcb37c1fbfc192e5c','[\"*\"]',NULL,'2022-08-09 05:34:22','2022-08-09 05:34:22'),(13,'App\\Models\\RegisterModel',1,'auth_token','a5cbe7aa8790c2ab27accd22333c549d63cc8edbc2b3d49f6621c316692a991c','[\"*\"]',NULL,'2022-08-09 05:35:40','2022-08-09 05:35:40'),(14,'App\\Models\\RegisterModel',1,'auth_token','76d2296791907e5cd509fe5e43a280e48f2108ac8ed4422be2703bd34490df32','[\"*\"]',NULL,'2022-08-09 05:37:49','2022-08-09 05:37:49'),(15,'App\\Models\\RegisterModel',1,'auth_token','d8b138174d227b31e5422d0132871c54f51740e96d1ed29ed192f38ed55ea74e','[\"*\"]',NULL,'2022-08-09 05:40:20','2022-08-09 05:40:20'),(16,'App\\Models\\RegisterModel',1,'auth_token','7fe60436130b56a799c5a59d62ea3b5e2b0264828983c2c1440a90a452eae8dc','[\"*\"]',NULL,'2022-08-09 05:41:30','2022-08-09 05:41:30'),(17,'App\\Models\\RegisterModel',1,'auth_token','b6cc3834efb474eb72a90075f0750d53029aae04c6c788e37c0c3fd1441191db','[\"*\"]',NULL,'2022-08-09 05:47:31','2022-08-09 05:47:31'),(18,'App\\Models\\RegisterModel',5,'auth_token','7a5c26b4a2c2b5901771a9407b81f233b1b368704c7296616a26c01b5bbddd0d','[\"*\"]',NULL,'2022-08-09 06:07:31','2022-08-09 06:07:31'),(19,'App\\Models\\RegisterModel',11,'auth_token','c14bf2f178f047030972c90711838bb9c2cf97ed1b34bd959d77153aa5e10a30','[\"*\"]',NULL,'2022-08-09 08:22:23','2022-08-09 08:22:23'),(20,'App\\Models\\RegisterModel',11,'auth_token','58fa150832932759c710a8780db14aebdb98ac3f218ba560e7a6379e777dd562','[\"*\"]',NULL,'2022-08-09 09:21:21','2022-08-09 09:21:21'),(21,'App\\Models\\RegisterModel',4,'auth_token','8868d7f9bb594103f388cc3c316f3fc723eef86a4bba5b8dc82962dec322ae97','[\"*\"]',NULL,'2022-08-10 09:34:25','2022-08-10 09:34:25'),(22,'App\\Models\\RegisterModel',4,'auth_token','ca16cb6ed4a0cc552fd7ba2ee16f0a2ad5b56e5b043bdb1140a295709fb9282a','[\"*\"]',NULL,'2022-08-10 11:02:56','2022-08-10 11:02:56'),(23,'App\\Models\\RegisterModel',4,'auth_token','3607b6809ebb47326fcb226bc7de64867b00fc00331c0a5ddbd9970a90d1d691','[\"*\"]',NULL,'2022-08-10 11:07:02','2022-08-10 11:07:02'),(24,'App\\Models\\RegisterModel',4,'auth_token','8b143f06735a1f7e6c9682b2ab6affc0d53f10b0797f28c4d57a2559c7050779','[\"*\"]',NULL,'2022-08-10 13:35:58','2022-08-10 13:35:58'),(25,'App\\Models\\RegisterModel',11,'auth_token','1b2ccadfa653bba5c82fdc3ce171da1ff6c3abe0d9ccb197fc20810f20a7ebfe','[\"*\"]',NULL,'2022-08-10 13:51:44','2022-08-10 13:51:44'),(26,'App\\Models\\RegisterModel',1,'auth_token','5aaa4890a404f638830996a1198e74b37d5ea6924a4a3f184971a69d382dfdbd','[\"*\"]',NULL,'2022-08-10 14:09:46','2022-08-10 14:09:46');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `register`
--

DROP TABLE IF EXISTS `register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `register` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNumber` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `usertype` int NOT NULL,
  `active` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `register`
--

LOCK TABLES `register` WRITE;
/*!40000 ALTER TABLE `register` DISABLE KEYS */;
INSERT INTO `register` VALUES (1,'Nilesh Bhardwaj','nileshrajbhar731@gmail.com','08828293744','$2y$10$OUlX.EDCBK3rf7CxhsI9S.CH5/uIy97QV4N3UtGlTTEPTjFxIV5Ly',1,0,'2022-08-09 04:26:34','2022-08-09 04:26:34'),(4,'Nilesh Bhardwaj','nileshrajbhar@gmail.com','08828293744','$2y$10$RRG7At4qKq4RIq0nRBG6quxob0OUJ1Q8bCR5RwUMHrSx2arUchyPy',2,0,'2022-08-09 04:39:20','2022-08-09 04:39:20'),(11,'Nilesh Bhardwaj','nileshrajbhar7@gmail.com','08828293744','$2y$10$4IQ7xc9tzRDTB949ca/5NOzAFlhMmtaiLlYSJ9ynp5FGj1AtoUrLq',0,0,'2022-08-09 07:07:46','2022-08-09 07:07:46');
/*!40000 ALTER TABLE `register` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `useronlineorder`
--

DROP TABLE IF EXISTS `useronlineorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `useronlineorder` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNumber` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productQuantity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productPrice` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productDeliveryAddress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentMethod` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productDeliveryStatus` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productDeliveryDate` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cardNumber` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `month` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cvv` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useronlineorder`
--

LOCK TABLES `useronlineorder` WRITE;
/*!40000 ALTER TABLE `useronlineorder` DISABLE KEYS */;
INSERT INTO `useronlineorder` VALUES (1,'Nilesh Bhardwaj','nileshrajbhar732@gmail.com','08828293744','Fruits','Apple','1kg','500','33 dattary chal no 7b indira ngr ghatkopar west mumbai-86','online','1','1','rahul@gmail.com','123','02','02','200','2022-08-09 04:03:27','2022-08-09 04:03:27'),(2,'rohit hali','rohit@gmail.com','08828293744','Vegitables','Jackfruit','9kg','5000.0','33 dattary chal no 7b indira ngr ghatkopar west mumbai-86','online','1','1','rohit hallli','123456789','09','2025','789','2022-08-09 06:10:24','2022-08-09 06:10:24'),(3,'Nilesh Bhardwaj','nileshrajbhar@gmail.com','08828293744','Fruits','Strawberry','3kg','500','33 dattary chal no 7b indira ngr ghatkopar west mumbai-86','online','1','1','rahul@gmail.com','33','33','33','333','2022-08-10 09:56:13','2022-08-10 09:56:13'),(4,'Nilesh Bhardwaj','nileshrajbhar7@gmail.com','08828293744','Fruits','Banana','2kg','50','33 dattary chal no 7b indira ngr ghatkopar west mumbai-86','online','1','1','rahul@gmail.com','44','44','44','44','2022-08-10 13:53:22','2022-08-10 13:53:22');
/*!40000 ALTER TABLE `useronlineorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userorder`
--

DROP TABLE IF EXISTS `userorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userorder` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNumber` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productQuantity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productPrice` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productDeliveryAddress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentMethod` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productDeliveryStatus` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productDeliveryDate` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userorder`
--

LOCK TABLES `userorder` WRITE;
/*!40000 ALTER TABLE `userorder` DISABLE KEYS */;
INSERT INTO `userorder` VALUES (1,'Nilesh Bhardwaj','nileshrajbhar732@gmail.com','08828293744','Fruits','Banana','2kg','50','33 dattary chal no 7b indira ngr ghatkopar west mumbai-86','COD','1','1','2022-08-09 03:58:24','2022-08-09 03:58:24'),(2,'Nilesh Bhardwaj','nileshrajbhar732@gmail.com','08828293744','Vegitables','Jackfruit','9kg','5000.0','33 dattary chal no 7b indira ngr ghatkopar west mumbai-86','COD','1','1','2022-08-09 04:03:58','2022-08-09 04:03:58'),(3,'Nilesh Bhardwaj','nileshrajbhar732@gmail.com','08828293744','Grocery','Sunflower Oli','7kg','50','33 dattary chal no 7b indira ngr ghatkopar west mumbai-86','COD','1','1','2022-08-09 04:04:17','2022-08-09 04:04:17'),(4,'Nilesh Bhardwaj','nileshrajbhar731@gmail.com','08828293744','Fruits','Banana','2kg','50','33 dattary chal no 7b indira ngr ghatkopar west mumbai-86','COD','1','1','2022-08-09 05:02:17','2022-08-09 05:02:17'),(5,'Nilesh Bhardwaj','nileshrajbhar7@gmail.com','08828293744','Fruits','Apple','1kg','500','33','COD','1','1','2022-08-09 09:22:01','2022-08-09 09:22:01'),(6,'Nilesh Bhardwaj','nileshrajbhar7@gmail.com','08828293744','Vegitables','Jackfruit','9kg','5000.0','33','COD','1','1','2022-08-09 09:22:52','2022-08-09 09:22:52'),(7,'Nilesh Bhardwaj','nileshrajbhar@gmail.com','08828293744','Fruits','Alphonso Mangoes - Ratnagiri, Maharashtra','1kg','50','33 dattary chal no 7b indira ngr ghatkopar west mumbai-86','COD','1','1','2022-08-10 09:43:09','2022-08-10 09:43:09'),(8,'Nilesh Bhardwaj','nileshrajbhar@gmail.com','08828293744','Fruits','Banana','2kg','50','33','COD','panding','10/08/2022','2022-08-10 09:54:03','2022-08-10 09:54:03'),(9,'Nilesh Bhardwaj','nileshrajbhar@gmail.com','08828293744','Vegitables','Jackfruit','9kg','5000.0','33 dattary chal no 7b indira ngr ghatkopar west mumbai-86','COD','panding','10/08/2022','2022-08-10 10:55:48','2022-08-10 10:55:48');
/*!40000 ALTER TABLE `userorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vegitables`
--

DROP TABLE IF EXISTS `vegitables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vegitables` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `totalQuantity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vegitables`
--

LOCK TABLES `vegitables` WRITE;
/*!40000 ALTER TABLE `vegitables` DISABLE KEYS */;
INSERT INTO `vegitables` VALUES (1,'Jackfruit','5000.0','9kg','450kg','2022-08-09 03:57:48','2022-08-09 03:57:48');
/*!40000 ALTER TABLE `vegitables` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-11  1:18:45
