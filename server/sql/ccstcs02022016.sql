-- MySQL dump 10.14  Distrib 5.5.44-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: ccstcs
-- ------------------------------------------------------
-- Server version	5.5.44-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_position`
--

DROP TABLE IF EXISTS `admin_position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` char(15) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `faculty_id` int(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `code` (`code`),
  KEY `admin_position_fk0` (`faculty_id`),
  CONSTRAINT `admin_position_fk0` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_position`
--

LOCK TABLES `admin_position` WRITE;
/*!40000 ALTER TABLE `admin_position` DISABLE KEYS */;
INSERT INTO `admin_position` VALUES (2,'CSDEAN','Dean of CCS',NULL,97011111),(3,'CTCHAIR','CT Chairperson',NULL,97063932);
/*!40000 ALTER TABLE `admin_position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adviser_roster`
--

DROP TABLE IF EXISTS `adviser_roster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adviser_roster` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `faculty_id` int(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `faculty_id` (`faculty_id`),
  CONSTRAINT `adviser_roster_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adviser_roster`
--

LOCK TABLES `adviser_roster` WRITE;
/*!40000 ALTER TABLE `adviser_roster` DISABLE KEYS */;
INSERT INTO `adviser_roster` VALUES (1,97011111),(2,97063932);
/*!40000 ALTER TABLE `adviser_roster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `area` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `general_area_code` int(7) DEFAULT NULL,
  PRIMARY KEY (`code`),
  KEY `area_fk0` (`general_area_code`),
  CONSTRAINT `area_fk0` FOREIGN KEY (`general_area_code`) REFERENCES `general_area` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,'Adaptive Systems','Description',1),(2,'Audio Processing','Description',1),(3,'Basic Computer Science Computing','Description',2),(4,'Basic Electronics','Description',2),(5,'Control Systems','Description',3),(6,'Data Compression','Description',3),(7,'Digital Electronics','Description',4),(8,'Electronics and Communications','Description',4),(9,'Embedded Systems','Description',5),(10,'Filters','Description',5);
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `id` int(7) NOT NULL AUTO_INCREMENT,
  `code` varchar(7) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `unit` float DEFAULT NULL,
  `start_regular_defense_week` int(11) DEFAULT NULL,
  `end_regular_defense_week` int(11) DEFAULT NULL,
  `regular_defense_minute` int(11) DEFAULT NULL,
  `regular_defense_applicable` char(1) DEFAULT NULL,
  `start_redefense_week` int(11) DEFAULT NULL,
  `end_redefense_week` int(11) DEFAULT NULL,
  `redefense_minute` int(11) DEFAULT NULL,
  `redefense_applicable` char(1) DEFAULT NULL,
  `start_outstanding_defense_week` int(11) DEFAULT NULL,
  `end_outstanding_defense_week` int(11) DEFAULT NULL,
  `outstanding_defense_minute` int(11) DEFAULT NULL,
  `outstanding_defense_applicable` char(1) DEFAULT NULL,
  `deadline_of_deliverable_week` int(11) DEFAULT NULL,
  `department_code` char(7) DEFAULT NULL,
  `phase_code` varchar(7) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `code` (`code`),
  KEY `course_fk0` (`department_code`),
  KEY `phase_code` (`phase_code`),
  CONSTRAINT `course_fk0` FOREIGN KEY (`department_code`) REFERENCES `department` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `course_ibfk_1` FOREIGN KEY (`phase_code`) REFERENCES `phase` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'CTTHES0','CT Thesis 0','Title Proposal',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'CT','THES0'),(2,'THSNE-1','NE Thesis 1',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'CT','THES1'),(3,'THSCE-1','CSE Thesis 1',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'CT','THES1');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_offering`
--

DROP TABLE IF EXISTS `course_offering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course_offering` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_sy` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `course_code` char(7) DEFAULT NULL,
  `date_of_regular_defense_deliverable` bigint(20) DEFAULT NULL,
  `time_of_regular_defense_deliverable` bigint(20) DEFAULT NULL,
  `location_of_regular_defense_deliverable` varchar(50) DEFAULT NULL,
  `start_date_of_regular_defense` bigint(20) DEFAULT NULL,
  `end_date_of_regular_defense` bigint(20) DEFAULT NULL,
  `date_of_redefense_deliverable` bigint(20) DEFAULT NULL,
  `time_of_redefense_deliverable` bigint(20) DEFAULT NULL,
  `location_of_redefense_deliverable` varchar(50) DEFAULT NULL,
  `start_date_of_redefense` bigint(20) DEFAULT NULL,
  `end_date_of_redefense` bigint(20) DEFAULT NULL,
  `date_of_outstanding_defense_deliverable` bigint(20) DEFAULT NULL,
  `time_of_outstanding_defense_deliverable` bigint(20) DEFAULT NULL,
  `location_of_outstanding_defense_deliverable` varchar(50) DEFAULT NULL,
  `start_date_of_outstanding_defense` bigint(20) DEFAULT NULL,
  `end_date_of_outstanding_defense` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `course_offering_fk0` (`start_sy`),
  KEY `course_offering_fk1` (`end_sy`),
  KEY `course_offering_fk2` (`term`),
  KEY `course_offering_fk3` (`course_code`),
  CONSTRAINT `course_offering_fk0` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `course_offering_fk1` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `course_offering_fk2` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `course_offering_fk3` FOREIGN KEY (`course_code`) REFERENCES `course` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_offering`
--

LOCK TABLES `course_offering` WRITE;
/*!40000 ALTER TABLE `course_offering` DISABLE KEYS */;
INSERT INTO `course_offering` VALUES (1,2014,2015,1,'CTTHES0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `course_offering` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_offering_section`
--

DROP TABLE IF EXISTS `course_offering_section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course_offering_section` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_sy` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `course_code` varchar(7) DEFAULT NULL,
  `section` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `course_offering_section_fk0` (`start_sy`),
  KEY `course_offering_section_fk1` (`end_sy`),
  KEY `course_offering_section_fk3` (`term`),
  KEY `course_offering_section_fk4` (`course_code`),
  CONSTRAINT `course_offering_section_fk0` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `course_offering_section_fk1` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `course_offering_section_fk3` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `course_offering_section_fk4` FOREIGN KEY (`course_code`) REFERENCES `course_offering` (`course_code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_offering_section`
--

LOCK TABLES `course_offering_section` WRITE;
/*!40000 ALTER TABLE `course_offering_section` DISABLE KEYS */;
INSERT INTO `course_offering_section` VALUES (1,2014,2015,1,'CTTHES0','S11'),(2,2014,2015,1,'CTTHES0','S12');
/*!40000 ALTER TABLE `course_offering_section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `defense`
--

DROP TABLE IF EXISTS `defense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `defense` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `defense`
--

LOCK TABLES `defense` WRITE;
/*!40000 ALTER TABLE `defense` DISABLE KEYS */;
INSERT INTO `defense` VALUES (1,'Regular Defense',NULL),(2,'Redefense',NULL);
/*!40000 ALTER TABLE `defense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `defense_panel`
--

DROP TABLE IF EXISTS `defense_panel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `defense_panel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `thesis_id` int(8) DEFAULT NULL,
  `start_sy` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `course_code` char(7) DEFAULT NULL,
  `defense_code` int(7) DEFAULT NULL,
  `lead_panel` char(1) DEFAULT NULL,
  `faculty_id` int(8) DEFAULT NULL,
  `verdict_code` int(7) DEFAULT NULL,
  `start_time` bigint(20) DEFAULT NULL,
  `end_time` bigint(20) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `defense_panel_fk0` (`thesis_id`),
  KEY `defense_panel_fk5` (`start_sy`),
  KEY `defense_panel_fk6` (`end_sy`),
  KEY `defense_panel_fk7` (`term`),
  KEY `defense_panel_fk4` (`course_code`),
  KEY `defense_panel_fk1` (`defense_code`),
  KEY `defense_panel_fk3` (`verdict_code`),
  KEY `defense_panel_fk2` (`faculty_id`),
  CONSTRAINT `defense_panel_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `defense_panel_fk1` FOREIGN KEY (`defense_code`) REFERENCES `defense` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `defense_panel_fk2` FOREIGN KEY (`faculty_id`) REFERENCES `panel_roster` (`faculty_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `defense_panel_fk3` FOREIGN KEY (`verdict_code`) REFERENCES `verdict` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `defense_panel_fk4` FOREIGN KEY (`course_code`) REFERENCES `course` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `defense_panel_fk5` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `defense_panel_fk6` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `defense_panel_fk7` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `defense_panel`
--

LOCK TABLES `defense_panel` WRITE;
/*!40000 ALTER TABLE `defense_panel` DISABLE KEYS */;
INSERT INTO `defense_panel` VALUES (1,1,2014,2015,1,'THSCE-1',1,'1',97011111,NULL,900,1000,NULL,NULL);
/*!40000 ALTER TABLE `defense_panel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `defense_schedule`
--

DROP TABLE IF EXISTS `defense_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `defense_schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `thesis_id` int(8) DEFAULT NULL,
  `start_sy` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `course_code` char(7) DEFAULT NULL,
  `defense_code` char(7) DEFAULT NULL,
  `spec_date` date DEFAULT NULL,
  `start_time` bigint(20) DEFAULT NULL,
  `end_time` bigint(20) DEFAULT NULL,
  `room_id` int(8) DEFAULT NULL,
  `initial_verdict_code` int(7) DEFAULT NULL,
  `final_verdict_code` int(7) DEFAULT NULL,
  `nominated` char(1) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `defense_schedule_fk0` (`thesis_id`),
  KEY `defense_schedule_fk1` (`start_sy`),
  KEY `defense_schedule_fk2` (`course_code`),
  KEY `defense_schedule_fk3` (`room_id`),
  KEY `defense_schedule_fk4` (`initial_verdict_code`),
  KEY `defense_schedule_fk5` (`final_verdict_code`),
  KEY `defense_schedule_fk6` (`end_sy`),
  KEY `defense_schedule_fk7` (`term`),
  CONSTRAINT `defense_schedule_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`),
  CONSTRAINT `defense_schedule_fk1` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`),
  CONSTRAINT `defense_schedule_fk2` FOREIGN KEY (`course_code`) REFERENCES `course` (`code`),
  CONSTRAINT `defense_schedule_fk3` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`),
  CONSTRAINT `defense_schedule_fk4` FOREIGN KEY (`initial_verdict_code`) REFERENCES `verdict` (`code`),
  CONSTRAINT `defense_schedule_fk5` FOREIGN KEY (`final_verdict_code`) REFERENCES `verdict` (`code`),
  CONSTRAINT `defense_schedule_fk6` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`),
  CONSTRAINT `defense_schedule_fk7` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `defense_schedule`
--

LOCK TABLES `defense_schedule` WRITE;
/*!40000 ALTER TABLE `defense_schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `defense_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department` (
  `code` varchar(7) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES ('','',''),('CT','Computer Technology','CCS - Computer Technology'),('ST','Software Technology','CCS - Software Technology');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enrollment`
--

DROP TABLE IF EXISTS `enrollment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enrollment` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrollment`
--

LOCK TABLES `enrollment` WRITE;
/*!40000 ALTER TABLE `enrollment` DISABLE KEYS */;
INSERT INTO `enrollment` VALUES (1,'1TSY1415THES0','Enrolment code for THES0 1st Term Sy 2014-2015'),(2,'2TSY1415THES1','Enrollment Code for THES1 2nd Term SY 2014 -2015');
/*!40000 ALTER TABLE `enrollment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty`
--

DROP TABLE IF EXISTS `faculty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `faculty` (
  `id` int(8) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `fname` varchar(45) NOT NULL,
  `mi` varchar(15) NOT NULL,
  `email` varchar(45) NOT NULL,
  `faculty_rank` varchar(7) DEFAULT NULL,
  `text_no` varchar(15) DEFAULT NULL,
  `contact_no` varchar(15) DEFAULT NULL,
  `department_code` varchar(7) DEFAULT NULL,
  `faculty_status_code` varchar(7) DEFAULT NULL,
  `notify_thru_email` varchar(1) DEFAULT NULL,
  `notify_thru_text` varchar(1) DEFAULT NULL,
  `secret_password` varchar(30) NOT NULL,
  `secret_question` varchar(30) NOT NULL,
  `secret_answer` varchar(30) NOT NULL,
  `viewable` varchar(20) DEFAULT NULL,
  `title` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `faculty_fk0` (`department_code`),
  KEY `faculty_fk1` (`faculty_status_code`),
  KEY `faculty_fk2` (`faculty_rank`),
  CONSTRAINT `faculty_fk0` FOREIGN KEY (`department_code`) REFERENCES `department` (`code`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `faculty_fk1` FOREIGN KEY (`faculty_status_code`) REFERENCES `faculty_status` (`code`),
  CONSTRAINT `faculty_fk2` FOREIGN KEY (`faculty_rank`) REFERENCES `rank` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty`
--

LOCK TABLES `faculty` WRITE;
/*!40000 ALTER TABLE `faculty` DISABLE KEYS */;
INSERT INTO `faculty` VALUES (97011111,'Cordel II','Macario','O.','mac.cordel@delasalles.ph','AP2','3','3','CT','FT',NULL,NULL,'SECRET12','','',NULL,'Mr.'),(97063932,'Franco','Geanne Ross','L.','geanne.franco@dlsu.edu.ph','AP2','09273179920','(02)5264247','CT','FT',NULL,NULL,'newpass','Whats my secret question','answer',NULL,'Ms.');
/*!40000 ALTER TABLE `faculty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty_area`
--

DROP TABLE IF EXISTS `faculty_area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `faculty_area` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `faculty_id` int(8) DEFAULT NULL,
  `area_code` int(7) DEFAULT NULL,
  `area_level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `faculty_area_fk0` (`faculty_id`),
  KEY `faculty_area_fk1` (`area_code`),
  CONSTRAINT `faculty_area_fk0` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `faculty_area_fk1` FOREIGN KEY (`area_code`) REFERENCES `area` (`code`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty_area`
--

LOCK TABLES `faculty_area` WRITE;
/*!40000 ALTER TABLE `faculty_area` DISABLE KEYS */;
INSERT INTO `faculty_area` VALUES (2,97011111,2,100),(15,97063932,2,100),(18,97063932,8,20);
/*!40000 ALTER TABLE `faculty_area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty_schedule`
--

DROP TABLE IF EXISTS `faculty_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `faculty_schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_sy` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `faculty_id` int(8) DEFAULT NULL,
  `schedule_code` int(11) DEFAULT NULL,
  `day` char(1) DEFAULT NULL,
  `spec_date` bigint(20) DEFAULT NULL,
  `start_time` bigint(20) DEFAULT NULL,
  `end_time` bigint(20) DEFAULT NULL,
  `preferred_thesis_schedule` char(1) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `faculty_schedule_fk0` (`start_sy`),
  KEY `end_sy` (`end_sy`),
  KEY `faculty_schedule_fk2` (`term`),
  KEY `faculty_schedule_fk3` (`faculty_id`),
  KEY `schedule_code` (`schedule_code`),
  CONSTRAINT `faculty_schedule_fk0` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `faculty_schedule_fk1` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `faculty_schedule_fk2` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `faculty_schedule_fk3` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `faculty_schedule_ibfk_1` FOREIGN KEY (`schedule_code`) REFERENCES `schedule` (`code`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty_schedule`
--

LOCK TABLES `faculty_schedule` WRITE;
/*!40000 ALTER TABLE `faculty_schedule` DISABLE KEYS */;
INSERT INTO `faculty_schedule` VALUES (3,2015,2016,1,97063932,1,'3',NULL,1200,1400,NULL,'A class description'),(7,2015,2016,1,97063932,1,'7',0,1300,1600,'0','Class description');
/*!40000 ALTER TABLE `faculty_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty_status`
--

DROP TABLE IF EXISTS `faculty_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `faculty_status` (
  `code` varchar(7) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty_status`
--

LOCK TABLES `faculty_status` WRITE;
/*!40000 ALTER TABLE `faculty_status` DISABLE KEYS */;
INSERT INTO `faculty_status` VALUES ('FT','Full Time','Full-Time Faculty'),('PT','Part Time','Part-Time Faculty');
/*!40000 ALTER TABLE `faculty_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flowchart`
--

DROP TABLE IF EXISTS `flowchart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `flowchart` (
  `version` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `specialization_code` varchar(7) DEFAULT NULL,
  PRIMARY KEY (`version`),
  KEY `flowchart_spec` (`specialization_code`),
  CONSTRAINT `flowchart_ibfk_1` FOREIGN KEY (`specialization_code`) REFERENCES `specialization` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flowchart`
--

LOCK TABLES `flowchart` WRITE;
/*!40000 ALTER TABLE `flowchart` DISABLE KEYS */;
INSERT INTO `flowchart` VALUES (1,'CATCH2T16',NULL,'NE'),(2,'CATCH2T16',NULL,'CSE');
/*!40000 ALTER TABLE `flowchart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flowchart_course`
--

DROP TABLE IF EXISTS `flowchart_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `flowchart_course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_code` varchar(7) NOT NULL,
  `flowchart_version` int(11) DEFAULT NULL,
  `specialization_code` varchar(7) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `course_code_2` (`course_code`),
  KEY `flowchar_version` (`flowchart_version`),
  KEY `course_code` (`course_code`),
  CONSTRAINT `flowchart_course_ibfk_1` FOREIGN KEY (`course_code`) REFERENCES `course` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `flowchart_course_ibfk_2` FOREIGN KEY (`flowchart_version`) REFERENCES `flowchart` (`version`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flowchart_course`
--

LOCK TABLES `flowchart_course` WRITE;
/*!40000 ALTER TABLE `flowchart_course` DISABLE KEYS */;
INSERT INTO `flowchart_course` VALUES (1,'CTTHES0',1,'NE'),(2,'CTTHES0',1,'CSE'),(3,'THSCE-1',1,'CSE');
/*!40000 ALTER TABLE `flowchart_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flowchart_prerequisite`
--

DROP TABLE IF EXISTS `flowchart_prerequisite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `flowchart_prerequisite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_code` varchar(7) NOT NULL,
  `prerequisite_code` char(7) DEFAULT NULL,
  `flowchart_version` int(11) DEFAULT NULL,
  `specialization_code` varchar(7) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `specialization_code` (`specialization_code`),
  KEY `course_codefk` (`course_code`),
  KEY `prereq_fk` (`prerequisite_code`),
  KEY `flowchart_version` (`flowchart_version`),
  CONSTRAINT `flowchart_prerequisite_ibfk_2` FOREIGN KEY (`specialization_code`) REFERENCES `specialization` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `flowchart_prerequisite_ibfk_3` FOREIGN KEY (`course_code`) REFERENCES `course` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `flowchart_prerequisite_ibfk_4` FOREIGN KEY (`prerequisite_code`) REFERENCES `course` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `flowchart_prerequisite_ibfk_5` FOREIGN KEY (`flowchart_version`) REFERENCES `flowchart` (`version`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flowchart_prerequisite`
--

LOCK TABLES `flowchart_prerequisite` WRITE;
/*!40000 ALTER TABLE `flowchart_prerequisite` DISABLE KEYS */;
INSERT INTO `flowchart_prerequisite` VALUES (1,'THSNE-1','CTTHES0',1,'NE'),(2,'THSCE-1','CTTHES0',1,'CSE');
/*!40000 ALTER TABLE `flowchart_prerequisite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `general_area`
--

DROP TABLE IF EXISTS `general_area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `general_area` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general_area`
--

LOCK TABLES `general_area` WRITE;
/*!40000 ALTER TABLE `general_area` DISABLE KEYS */;
INSERT INTO `general_area` VALUES (1,'Basic Computer','BC'),(2,'Basic Network','BN'),(3,'Algorithms and Complexity','AC'),(4,'Computational Science','CN'),(5,'Others','O'),(6,'Advanced Operating System','AOS'),(7,'Agents','A'),(8,'Algorithmic Analysis','AA'),(9,'Artificial and Language Theory','ALT'),(10,'Automated Reasoning','AR'),(11,'Basic Computational Science','BCS');
/*!40000 ALTER TABLE `general_area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `general_schedule`
--

DROP TABLE IF EXISTS `general_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `general_schedule` (
  `id` int(1) NOT NULL AUTO_INCREMENT,
  `day` char(1) DEFAULT NULL,
  `start_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general_schedule`
--

LOCK TABLES `general_schedule` WRITE;
/*!40000 ALTER TABLE `general_schedule` DISABLE KEYS */;
INSERT INTO `general_schedule` VALUES (1,'M',800),(2,'M',900),(3,'T',1000),(4,'T',1100);
/*!40000 ALTER TABLE `general_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `holiday`
--

DROP TABLE IF EXISTS `holiday`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `holiday` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `start_sy` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `holiday`
--

LOCK TABLES `holiday` WRITE;
/*!40000 ALTER TABLE `holiday` DISABLE KEYS */;
/*!40000 ALTER TABLE `holiday` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `panel_roster`
--

DROP TABLE IF EXISTS `panel_roster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `panel_roster` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `faculty_id` int(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `faculty_id` (`faculty_id`),
  CONSTRAINT `panel_roster_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `panel_roster`
--

LOCK TABLES `panel_roster` WRITE;
/*!40000 ALTER TABLE `panel_roster` DISABLE KEYS */;
INSERT INTO `panel_roster` VALUES (1,97011111),(2,97063932);
/*!40000 ALTER TABLE `panel_roster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phase`
--

DROP TABLE IF EXISTS `phase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phase` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(7) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phase`
--

LOCK TABLES `phase` WRITE;
/*!40000 ALTER TABLE `phase` DISABLE KEYS */;
INSERT INTO `phase` VALUES (1,'THES0','Title Defense','Title Defense'),(2,'THES1','Proposal','Proposal'),(3,'THES2','Development',''),(4,'THES3','Writing',NULL);
/*!40000 ALTER TABLE `phase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rank`
--

DROP TABLE IF EXISTS `rank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rank` (
  `id` int(7) NOT NULL AUTO_INCREMENT,
  `code` varchar(7) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `ft_amount` int(11) DEFAULT NULL,
  `pt_amount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rank`
--

LOCK TABLES `rank` WRITE;
/*!40000 ALTER TABLE `rank` DISABLE KEYS */;
INSERT INTO `rank` VALUES (1,'AP1','Asst. Professor 1',NULL,NULL,NULL),(2,'AP2','Asst. Professor 2',NULL,NULL,NULL);
/*!40000 ALTER TABLE `rank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rank_salary`
--

DROP TABLE IF EXISTS `rank_salary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rank_salary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rank_code` char(7) DEFAULT NULL,
  `sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `ft_amount` float DEFAULT NULL,
  `pt_amount` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rank_code` (`rank_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rank_salary`
--

LOCK TABLES `rank_salary` WRITE;
/*!40000 ALTER TABLE `rank_salary` DISABLE KEYS */;
/*!40000 ALTER TABLE `rank_salary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report_defense_panel`
--

DROP TABLE IF EXISTS `report_defense_panel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `report_defense_panel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(150) DEFAULT NULL,
  `thesis_id` int(8) DEFAULT NULL,
  `faculty_id` int(8) DEFAULT NULL,
  `lead_panel` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `report_defense_panel_fk0` (`thesis_id`),
  KEY `report_defense_panel_fk1` (`faculty_id`),
  CONSTRAINT `report_defense_panel_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `report_defense_panel_fk1` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report_defense_panel`
--

LOCK TABLES `report_defense_panel` WRITE;
/*!40000 ALTER TABLE `report_defense_panel` DISABLE KEYS */;
/*!40000 ALTER TABLE `report_defense_panel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report_defense_schedule`
--

DROP TABLE IF EXISTS `report_defense_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `report_defense_schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `thesis_id` int(8) DEFAULT NULL,
  `spec_date` bigint(20) DEFAULT NULL,
  `date_string` varchar(100) DEFAULT NULL,
  `day_string` varchar(50) DEFAULT NULL,
  `start_time` varchar(4) DEFAULT NULL,
  `end_time` varchar(4) DEFAULT NULL,
  `room_id` int(8) DEFAULT NULL,
  `room_string` varchar(150) DEFAULT NULL,
  `primary_name` varchar(255) DEFAULT NULL,
  `secondary_name` varchar(50) DEFAULT NULL,
  `regular_defense_initial_verdict_code` int(7) DEFAULT NULL,
  `regular_defense_final_verdict_code` int(7) DEFAULT NULL,
  `regular_defense_nominated` char(1) DEFAULT NULL,
  `redefense_initial_verdict_code` int(7) DEFAULT NULL,
  `redefense_final_verdict_code` int(7) DEFAULT NULL,
  `redefense_nominated` char(1) DEFAULT NULL,
  `outstanding_defense_verdict_code` int(7) DEFAULT NULL,
  `regular_defense_initial_verdict_string` varchar(50) DEFAULT NULL,
  `regular_defense_final_verdict_string` varchar(50) DEFAULT NULL,
  `redefense_initial_verdict_string` varchar(50) DEFAULT NULL,
  `redefense_final_verdict_string` varchar(50) DEFAULT NULL,
  `outstanding_defense_verdict_string` varchar(50) DEFAULT NULL,
  `schedule_complete` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `report_defense_schedule_fk0` (`thesis_id`),
  CONSTRAINT `report_defense_schedule_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report_defense_schedule`
--

LOCK TABLES `report_defense_schedule` WRITE;
/*!40000 ALTER TABLE `report_defense_schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `report_defense_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report_thesis_proponent`
--

DROP TABLE IF EXISTS `report_thesis_proponent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `report_thesis_proponent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(150) DEFAULT NULL,
  `thesis_id` int(8) DEFAULT NULL,
  `student_id` int(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `report_thesis_proponent_fk0` (`thesis_id`),
  KEY `report_thesis_proponent_fk1` (`student_id`),
  CONSTRAINT `report_thesis_proponent_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `report_thesis_proponent_fk1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report_thesis_proponent`
--

LOCK TABLES `report_thesis_proponent` WRITE;
/*!40000 ALTER TABLE `report_thesis_proponent` DISABLE KEYS */;
/*!40000 ALTER TABLE `report_thesis_proponent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `room_no` varchar(8) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `usable` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_schedule`
--

DROP TABLE IF EXISTS `room_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room_schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_sy` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `room_id` int(8) DEFAULT NULL,
  `schedule_code` int(7) DEFAULT NULL,
  `day` char(1) DEFAULT NULL,
  `spec_date` bigint(20) DEFAULT NULL,
  `start_time` bigint(20) DEFAULT NULL,
  `end_time` bigint(20) DEFAULT NULL,
  `preferred_thesis_schedule` char(1) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `room_schedule_fk0` (`room_id`),
  KEY `room_schedule_fk1` (`start_sy`),
  KEY `room_schedule_fk2` (`end_sy`),
  KEY `room_schedule_fk3` (`term`),
  KEY `room_schedule_fk4` (`schedule_code`),
  CONSTRAINT `room_schedule_fk0` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `room_schedule_fk1` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `room_schedule_fk2` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `room_schedule_fk3` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `room_schedule_ibfk_1` FOREIGN KEY (`schedule_code`) REFERENCES `schedule` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_schedule`
--

LOCK TABLES `room_schedule` WRITE;
/*!40000 ALTER TABLE `room_schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `room_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedule` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (1,'Class Schedule',NULL),(2,'Defense Schedule',NULL);
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialization`
--

DROP TABLE IF EXISTS `specialization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `specialization` (
  `code` varchar(7) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `service_department_code` char(7) DEFAULT NULL,
  PRIMARY KEY (`code`),
  KEY `specialization_fk0` (`service_department_code`),
  CONSTRAINT `specialization_fk0` FOREIGN KEY (`service_department_code`) REFERENCES `department` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialization`
--

LOCK TABLES `specialization` WRITE;
/*!40000 ALTER TABLE `specialization` DISABLE KEYS */;
INSERT INTO `specialization` VALUES ('AC','Algorithms and Complexity','Description','CT'),('AO','Architecture and Organization','Description','CT'),('CS','Computational Scienace','Description','CT'),('CSE','Computer Systems Engineering','Description','CT'),('DS','Discrete Structure','Description','CT'),('DSP','Digital Signal Processing','Description','CT'),('ECS','Embedded and Control System','Description','CT'),('GCS','General Computer Science','Description','CT'),('GVC','Graphics and Visual Computing','Description','CT'),('HCI','Human-Computer Interaction','Description','CT'),('IM','Information Management','Description','CT'),('IS','Intelligent Systems','Description','CT'),('NCC','Net-Centric Computing','Description','CT'),('NE','Network Engineering','Description','CT'),('OS','Operating System','Description','CT'),('PL','Programming Languages','Description','CT'),('R','Robotics','Description','CT'),('SE','Software Engineering','Description','CT'),('SPI','Social and Professional Issues','Description','CT');
/*!40000 ALTER TABLE `specialization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `id` int(8) NOT NULL,
  `lname` varchar(30) DEFAULT NULL,
  `fname` varchar(30) DEFAULT NULL,
  `mi` varchar(5) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `text_no` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `flowchart_version` int(11) DEFAULT NULL,
  `specialization_code` varchar(7) DEFAULT NULL,
  `student_status_code` varchar(7) DEFAULT NULL,
  `notify_thru_email` char(1) DEFAULT NULL,
  `notify_thru_text` char(1) DEFAULT NULL,
  `secret_password` varchar(30) DEFAULT NULL,
  `secret_question` varchar(30) DEFAULT NULL,
  `secret_answer` varchar(30) DEFAULT NULL,
  `viewable` char(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `student_fk2` (`flowchart_version`),
  KEY `student_fk0` (`student_status_code`),
  KEY `specialization_code` (`specialization_code`),
  CONSTRAINT `student_fk0` FOREIGN KEY (`student_status_code`) REFERENCES `student_status` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `student_fk2` FOREIGN KEY (`flowchart_version`) REFERENCES `flowchart` (`version`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`specialization_code`) REFERENCES `specialization` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (201412345,'Cruz','Juan','D.','juandcruz@gmail.com','09055555555','5555555',NULL,'NE','Reg',NULL,NULL,'password','question','answer',NULL),(201422222,'Penduko','Pedro','P.',NULL,NULL,NULL,NULL,'NE','Reg',NULL,NULL,NULL,NULL,NULL,NULL),(201433333,'Falayfay','Facifica','F.',NULL,NULL,NULL,NULL,NULL,'Reg',NULL,NULL,NULL,NULL,NULL,NULL),(201444444,'Binay','Jojo Negro','J.',NULL,NULL,NULL,NULL,NULL,'Reg',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_schedule`
--

DROP TABLE IF EXISTS `student_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_sy` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `student_id` int(8) DEFAULT NULL,
  `schedule_code` int(7) DEFAULT NULL,
  `day` char(1) DEFAULT NULL,
  `spec_date` bigint(20) DEFAULT NULL,
  `start_time` bigint(20) DEFAULT NULL,
  `end_time` bigint(20) DEFAULT NULL,
  `preferred_thesis_schedule` char(1) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `student_schedule_fk0` (`student_id`),
  KEY `student_schedule_fk2` (`start_sy`),
  KEY `student_schedule_fk3` (`end_sy`),
  KEY `student_schedule_fk4` (`term`),
  KEY `schedule_code` (`schedule_code`),
  CONSTRAINT `student_schedule_fk0` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `student_schedule_fk2` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `student_schedule_fk3` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `student_schedule_fk4` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `student_schedule_ibfk_1` FOREIGN KEY (`schedule_code`) REFERENCES `schedule` (`code`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_schedule`
--

LOCK TABLES `student_schedule` WRITE;
/*!40000 ALTER TABLE `student_schedule` DISABLE KEYS */;
INSERT INTO `student_schedule` VALUES (12,2015,2016,1,201412345,1,'6',0,1111,2312,'0',''),(13,2015,2016,1,201412345,1,'1',0,1300,1700,'0','A Description');
/*!40000 ALTER TABLE `student_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_status`
--

DROP TABLE IF EXISTS `student_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_status` (
  `id` int(7) NOT NULL AUTO_INCREMENT,
  `code` varchar(7) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_status`
--

LOCK TABLES `student_status` WRITE;
/*!40000 ALTER TABLE `student_status` DISABLE KEYS */;
INSERT INTO `student_status` VALUES (1,'Reg','Regular Student',NULL),(2,'Irreg','Irregular Student',NULL),(3,'Ret','Returnee',NULL);
/*!40000 ALTER TABLE `student_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sy_term`
--

DROP TABLE IF EXISTS `sy_term`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sy_term` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_sy` int(11) NOT NULL,
  `end_sy` int(11) NOT NULL,
  `term` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `start_sy` (`start_sy`),
  KEY `end_sy` (`end_sy`),
  KEY `term` (`term`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sy_term`
--

LOCK TABLES `sy_term` WRITE;
/*!40000 ALTER TABLE `sy_term` DISABLE KEYS */;
INSERT INTO `sy_term` VALUES (1,2014,2015,1,'2015-08-24','2015-12-10'),(2,2014,2015,2,'2016-01-05','2016-04-01'),(3,2015,2016,1,'2015-08-24','2015-12-04');
/*!40000 ALTER TABLE `sy_term` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temporary_schedule`
--

DROP TABLE IF EXISTS `temporary_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `temporary_schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_sy` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `schedule_code` int(7) DEFAULT NULL,
  `day` char(1) DEFAULT NULL,
  `spec_date` bigint(20) DEFAULT NULL,
  `start_time` bigint(20) DEFAULT NULL,
  `end_time` bigint(20) DEFAULT NULL,
  `preferred_thesis_schedule` char(1) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `temporary_schedule_fk0` (`start_sy`),
  KEY `temporary_schedule_fk1` (`end_sy`),
  KEY `temporary_schedule_fk2` (`term`),
  KEY `temporary_schedule_fk3` (`schedule_code`),
  CONSTRAINT `temporary_schedule_fk0` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `temporary_schedule_fk1` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `temporary_schedule_fk2` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `temporary_schedule_fk3` FOREIGN KEY (`schedule_code`) REFERENCES `schedule` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temporary_schedule`
--

LOCK TABLES `temporary_schedule` WRITE;
/*!40000 ALTER TABLE `temporary_schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `temporary_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thesis`
--

DROP TABLE IF EXISTS `thesis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `thesis` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `primary_name` varchar(255) DEFAULT NULL,
  `secondary_name` varchar(255) DEFAULT NULL,
  `proposal_abstract` mediumtext,
  `final_abstract` mediumtext,
  `description` varchar(255) DEFAULT NULL,
  `start_sy` int(11) DEFAULT NULL,
  `start_term` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `end_term` int(11) DEFAULT NULL,
  `percent_completeness` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `thesis_fk1` (`start_sy`),
  KEY `thesis_fk2` (`end_sy`),
  KEY `thesis_fk3` (`start_term`),
  KEY `thesis_fk4` (`end_term`),
  CONSTRAINT `thesis_fk1` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_fk2` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_fk3` FOREIGN KEY (`start_term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_fk4` FOREIGN KEY (`end_term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thesis`
--

LOCK TABLES `thesis` WRITE;
/*!40000 ALTER TABLE `thesis` DISABLE KEYS */;
INSERT INTO `thesis` VALUES (1,'Network Analysis with Report Authoring','NARA','Lorem ipsum dolor sit amet, magnis nunc metus, ac consequat neque, egestas leo duis. Porta odio, luctus in pellentesque magna venenatis amet, quisque libero sem amet morbi aliquam dui, urna tempor nec eu purus mi cras, pulvinar ut. Ut est condimentum ultricies eu, hendrerit mauris sem. Vitae vel ut mauris. Justo quis nonummy leo sed luctus pulvinar, curabitur duis, etiam aenean porttitor ridiculus pretium wisi culpa, sed orci, aliquam vel.','Lorem ipsum dolor sit amet, magnis nunc metus, ac consequat neque, egestas leo duis. Porta odio, luctus in pellentesque magna venenatis amet, quisque libero sem amet morbi aliquam dui, urna tempor nec eu purus mi cras, pulvinar ut. Ut est condimentum ultricies eu, hendrerit mauris sem. Vitae vel ut mauris. Justo quis nonummy leo sed luctus pulvinar, curabitur duis, etiam aenean porttitor ridiculus pretium wisi culpa, sed orci, aliquam vel.',NULL,2014,1,2015,2,NULL),(2,'Design and Implementation of a Web-Based Information System','WebFIS','Lorem ipsum dolor sit amet, magnis nunc metus, ac consequat neque, egestas leo duis. Porta odio, luctus in pellentesque magna venenatis amet, quisque libero sem amet morbi aliquam dui, urna tempor nec eu purus mi cras, pulvinar ut. Ut est condimentum ultricies eu, hendrerit mauris sem. Vitae vel ut mauris. Justo quis nonummy leo sed luctus pulvinar, curabitur duis, etiam aenean porttitor ridiculus pretium wisi culpa, sed orci, aliquam vel.','Lorem ipsum dolor sit amet, magnis nunc metus, ac consequat neque, egestas leo duis. Porta odio, luctus in pellentesque magna venenatis amet, quisque libero sem amet morbi aliquam dui, urna tempor nec eu purus mi cras, pulvinar ut. Ut est condimentum ultricies eu, hendrerit mauris sem. Vitae vel ut mauris. Justo quis nonummy leo sed luctus pulvinar, curabitur duis, etiam aenean porttitor ridiculus pretium wisi culpa, sed orci, aliquam vel.','Undergraduate Thesis',2014,1,2015,2,NULL);
/*!40000 ALTER TABLE `thesis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thesis_adviser`
--

DROP TABLE IF EXISTS `thesis_adviser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `thesis_adviser` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `thesis_id` int(8) NOT NULL,
  `faculty_id` int(8) DEFAULT NULL,
  `start_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `thesis_adviser_fk1` (`thesis_id`),
  KEY `thesis_adviser_fk0` (`faculty_id`),
  KEY `thesis_adviser_fk2` (`start_sy`),
  KEY `thesis_adviser_fk3` (`term`),
  CONSTRAINT `thesis_adviser_fk0` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_adviser_fk1` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_adviser_fk2` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_adviser_fk3` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thesis_adviser`
--

LOCK TABLES `thesis_adviser` WRITE;
/*!40000 ALTER TABLE `thesis_adviser` DISABLE KEYS */;
INSERT INTO `thesis_adviser` VALUES (1,1,97063932,2014,1),(2,2,97063932,2014,1);
/*!40000 ALTER TABLE `thesis_adviser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thesis_area`
--

DROP TABLE IF EXISTS `thesis_area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `thesis_area` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `thesis_id` int(8) DEFAULT NULL,
  `area_code` int(7) DEFAULT NULL,
  `area_level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `thesis_area_fk0` (`thesis_id`),
  KEY `thesis_area_fk1` (`area_code`),
  CONSTRAINT `thesis_area_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_area_fk1` FOREIGN KEY (`area_code`) REFERENCES `area` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thesis_area`
--

LOCK TABLES `thesis_area` WRITE;
/*!40000 ALTER TABLE `thesis_area` DISABLE KEYS */;
/*!40000 ALTER TABLE `thesis_area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thesis_enrollment`
--

DROP TABLE IF EXISTS `thesis_enrollment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `thesis_enrollment` (
  `id` int(7) NOT NULL AUTO_INCREMENT,
  `course_code` char(7) DEFAULT NULL,
  `section` varchar(3) DEFAULT NULL,
  `student_id` int(8) DEFAULT NULL,
  `start_sy` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `enrollment_code` int(7) DEFAULT NULL,
  `grade` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `thesis_enrollment_fk1` (`start_sy`),
  KEY `thesis_enrollment_fk2` (`end_sy`),
  KEY `thesis_enrollment_fk3` (`term`),
  KEY `thesis_enrollment_fk5` (`enrollment_code`),
  KEY `thesis_enrollment_fk6` (`course_code`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `thesis_enrollment_fk0` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_enrollment_fk1` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_enrollment_fk2` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_enrollment_fk3` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_enrollment_fk5` FOREIGN KEY (`enrollment_code`) REFERENCES `enrollment` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_enrollment_fk6` FOREIGN KEY (`course_code`) REFERENCES `course` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thesis_enrollment`
--

LOCK TABLES `thesis_enrollment` WRITE;
/*!40000 ALTER TABLE `thesis_enrollment` DISABLE KEYS */;
INSERT INTO `thesis_enrollment` VALUES (1,'CTTHES0','S11',201412345,2014,2015,1,1,NULL),(2,'CTTHES0','S12',201422222,2014,2015,1,1,NULL),(3,'CTTHES0','S11',201433333,2014,2015,1,1,NULL);
/*!40000 ALTER TABLE `thesis_enrollment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thesis_proponent`
--

DROP TABLE IF EXISTS `thesis_proponent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `thesis_proponent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `thesis_id` int(8) DEFAULT NULL,
  `student_id` int(8) DEFAULT NULL,
  `start_sy` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `thesis_proponent_fk0` (`thesis_id`),
  KEY `thesis_proponent_fk2` (`start_sy`),
  KEY `thesis_proponent_fk3` (`end_sy`),
  KEY `thesis_proponent_fk4` (`term`),
  KEY `thesis_proponent_fk1` (`student_id`),
  CONSTRAINT `thesis_proponent_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_proponent_fk1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_proponent_fk2` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_proponent_fk3` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thesis_proponent_fk4` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thesis_proponent`
--

LOCK TABLES `thesis_proponent` WRITE;
/*!40000 ALTER TABLE `thesis_proponent` DISABLE KEYS */;
INSERT INTO `thesis_proponent` VALUES (1,1,201412345,2014,2015,1),(2,2,201412345,2014,2015,2),(3,1,201422222,2014,2015,1);
/*!40000 ALTER TABLE `thesis_proponent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verdict`
--

DROP TABLE IF EXISTS `verdict`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `verdict` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verdict`
--

LOCK TABLES `verdict` WRITE;
/*!40000 ALTER TABLE `verdict` DISABLE KEYS */;
INSERT INTO `verdict` VALUES (1,'No Verdict',NULL),(2,'Pass',NULL),(3,'Conditional Pass',NULL),(4,'Fail',NULL);
/*!40000 ALTER TABLE `verdict` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-02-02 20:31:21
