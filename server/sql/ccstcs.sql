-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2015 at 11:30 AM
-- Server version: 5.5.34
-- PHP Version: 5.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ccstcs`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_position`
--

CREATE TABLE IF NOT EXISTS `admin_position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` char(15) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `faculty_id` int(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `code` (`code`),
  KEY `admin_position_fk0` (`faculty_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `admin_position`
--

INSERT INTO `admin_position` (`id`, `code`, `name`, `description`, `faculty_id`) VALUES
(2, 'CSDEAN', 'Dean of CCS', NULL, 97011111);

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE IF NOT EXISTS `area` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `general_area_code` int(7) DEFAULT NULL,
  PRIMARY KEY (`code`),
  KEY `area_fk0` (`general_area_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE IF NOT EXISTS `course` (
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
  `phase_code` int(7) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `code` (`code`),
  KEY `course_fk0` (`department_code`),
  KEY `course_fk1` (`phase_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `course_offering`
--

CREATE TABLE IF NOT EXISTS `course_offering` (
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
  KEY `course_offering_fk3` (`course_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `course_offering_section`
--

CREATE TABLE IF NOT EXISTS `course_offering_section` (
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
  KEY `course_offering_section_fk4` (`course_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `defense`
--

CREATE TABLE IF NOT EXISTS `defense` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `defense_panel`
--

CREATE TABLE IF NOT EXISTS `defense_panel` (
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
  `start_date` bigint(20) DEFAULT NULL,
  `end_date` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `defense_panel_fk0` (`thesis_id`),
  KEY `defense_panel_fk5` (`start_sy`),
  KEY `defense_panel_fk6` (`end_sy`),
  KEY `defense_panel_fk7` (`term`),
  KEY `defense_panel_fk4` (`course_code`),
  KEY `defense_panel_fk1` (`defense_code`),
  KEY `defense_panel_fk2` (`faculty_id`),
  KEY `defense_panel_fk3` (`verdict_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `defense_schedule`
--

CREATE TABLE IF NOT EXISTS `defense_schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `thesis_id` int(8) DEFAULT NULL,
  `start_sy` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `course_code` char(7) DEFAULT NULL,
  `defense_code` char(7) DEFAULT NULL,
  `spec_date` bigint(20) DEFAULT NULL,
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
  KEY `defense_schedule_fk7` (`term`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE IF NOT EXISTS `department` (
  `code` varchar(7) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`code`, `name`, `description`) VALUES
('CT', 'Computer Technology', 'CCS - Computer Technology'),
('ST', 'Software Technology', 'CCS - Software Technology');

-- --------------------------------------------------------

--
-- Table structure for table `enrollment`
--

CREATE TABLE IF NOT EXISTS `enrollment` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE IF NOT EXISTS `faculty` (
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
  KEY `faculty_fk2` (`faculty_rank`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`id`, `lname`, `fname`, `mi`, `email`, `faculty_rank`, `text_no`, `contact_no`, `department_code`, `faculty_status_code`, `notify_thru_email`, `notify_thru_text`, `secret_password`, `secret_question`, `secret_answer`, `viewable`, `title`) VALUES
(97011111, 'Cordel II', 'Macario', 'O.', 'mac.cordel@delasalle.ph', 'AP2', NULL, NULL, 'CT', 'FT', NULL, NULL, '', '', '', NULL, 'Mr.'),
(97063932, 'Franco', 'Geanne Ross', 'L.', 'geanne.franco@dlsu.edu.ph', 'AP2', '09273179920', '(02)5264247', 'CT', 'FT', NULL, NULL, '', '', '', NULL, 'Ms.');

-- --------------------------------------------------------

--
-- Table structure for table `faculty_area`
--

CREATE TABLE IF NOT EXISTS `faculty_area` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `faculty_id` int(8) DEFAULT NULL,
  `area_code` int(7) DEFAULT NULL,
  `area_level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `faculty_area_fk0` (`faculty_id`),
  KEY `faculty_area_fk1` (`area_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_schedule`
--

CREATE TABLE IF NOT EXISTS `faculty_schedule` (
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
  KEY `faculty_schedule_fk4` (`schedule_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_status`
--

CREATE TABLE IF NOT EXISTS `faculty_status` (
  `code` varchar(7) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty_status`
--

INSERT INTO `faculty_status` (`code`, `name`, `description`) VALUES
('FT', 'Full Time', 'Full-Time Faculty'),
('PT', 'Part Time', 'Part-Time Faculty');

-- --------------------------------------------------------

--
-- Table structure for table `flowchart`
--

CREATE TABLE IF NOT EXISTS `flowchart` (
  `version` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `specialization_code` char(7) DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `flowchart_course`
--

CREATE TABLE IF NOT EXISTS `flowchart_course` (
  `course_code` int(7) NOT NULL AUTO_INCREMENT,
  `flowchart_version` int(11) DEFAULT NULL,
  `specialization_code` int(7) DEFAULT NULL,
  PRIMARY KEY (`course_code`),
  KEY `flowchart_course_fk0` (`flowchart_version`),
  KEY `flowchart_course_fk1` (`specialization_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `flowchart_prerequisite`
--

CREATE TABLE IF NOT EXISTS `flowchart_prerequisite` (
  `course_code` int(7) NOT NULL AUTO_INCREMENT,
  `prerequisite_code` char(7) DEFAULT NULL,
  `flowchart_version` int(11) DEFAULT NULL,
  `specialization_code` int(7) DEFAULT NULL,
  PRIMARY KEY (`course_code`),
  KEY `flowchart_prerequisite_fk0` (`flowchart_version`),
  KEY `flowchart_prerequisite_fk1` (`specialization_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `general_area`
--

CREATE TABLE IF NOT EXISTS `general_area` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `general_schedule`
--

CREATE TABLE IF NOT EXISTS `general_schedule` (
  `id` int(1) NOT NULL AUTO_INCREMENT,
  `day` char(1) DEFAULT NULL,
  `start_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `holiday`
--

CREATE TABLE IF NOT EXISTS `holiday` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `schedule_code` int(7) DEFAULT NULL,
  `day` char(1) DEFAULT NULL,
  `spec_date` bigint(20) DEFAULT NULL,
  `start_time` bigint(20) DEFAULT NULL,
  `end_time` bigint(20) DEFAULT NULL,
  `month` int(11) DEFAULT NULL,
  `week_no` int(11) DEFAULT NULL,
  `exception` char(1) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `holiday_fk0` (`schedule_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `phase`
--

CREATE TABLE IF NOT EXISTS `phase` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `rank`
--

CREATE TABLE IF NOT EXISTS `rank` (
  `id` int(7) NOT NULL AUTO_INCREMENT,
  `code` varchar(7) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `code` (`code`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `rank`
--

INSERT INTO `rank` (`id`, `code`, `name`, `description`) VALUES
(1, 'AP1', 'Asst. Professor 1', NULL),
(2, 'AP2', 'Asst. Professor 2', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rank_salary`
--

CREATE TABLE IF NOT EXISTS `rank_salary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rank_code` char(7) DEFAULT NULL,
  `sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `ft_amount` float DEFAULT NULL,
  `pt_amount` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rank_code` (`rank_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `report_defense_panel`
--

CREATE TABLE IF NOT EXISTS `report_defense_panel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(150) DEFAULT NULL,
  `thesis_id` int(8) DEFAULT NULL,
  `faculty_id` int(8) DEFAULT NULL,
  `lead_panel` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `report_defense_panel_fk0` (`thesis_id`),
  KEY `report_defense_panel_fk1` (`faculty_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `report_defense_schedule`
--

CREATE TABLE IF NOT EXISTS `report_defense_schedule` (
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
  `regular_defense_initial_verdict_code` char(7) DEFAULT NULL,
  `regular_defense_final_verdict_code` char(7) DEFAULT NULL,
  `regular_defense_nominated` char(1) DEFAULT NULL,
  `redefense_initial_verdict_code` char(7) DEFAULT NULL,
  `redefense_final_verdict_code` char(7) DEFAULT NULL,
  `redefense_nominated` char(1) DEFAULT NULL,
  `outstanding_defense_verdict_code` char(7) DEFAULT NULL,
  `regular_defense_initial_verdict_string` varchar(50) DEFAULT NULL,
  `regular_defense_final_verdict_string` varchar(50) DEFAULT NULL,
  `redefense_initial_verdict_string` varchar(50) DEFAULT NULL,
  `redefense_final_verdict_string` varchar(50) DEFAULT NULL,
  `outstanding_defense_verdict_string` varchar(50) DEFAULT NULL,
  `schedule_complete` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `report_defense_schedule_fk0` (`thesis_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `report_thesis_proponent`
--

CREATE TABLE IF NOT EXISTS `report_thesis_proponent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(150) DEFAULT NULL,
  `thesis_id` int(8) DEFAULT NULL,
  `student_id` int(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `report_thesis_proponent_fk0` (`thesis_id`),
  KEY `report_thesis_proponent_fk1` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE IF NOT EXISTS `room` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `room_no` varchar(8) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `usable` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `room_schedule`
--

CREATE TABLE IF NOT EXISTS `room_schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_sy` int(11) DEFAULT NULL,
  `end_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `room_id` int(8) DEFAULT NULL,
  `schedule_code` char(7) DEFAULT NULL,
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
  KEY `room_schedule_fk3` (`term`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE IF NOT EXISTS `schedule` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `specialization`
--

CREATE TABLE IF NOT EXISTS `specialization` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `service_department_code` char(7) DEFAULT NULL,
  PRIMARY KEY (`code`),
  KEY `specialization_fk0` (`service_department_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE IF NOT EXISTS `student` (
  `id` int(8) NOT NULL,
  `lname` varchar(30) DEFAULT NULL,
  `fname` varchar(30) DEFAULT NULL,
  `mi` varchar(5) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `text_no` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `flowchart_version` int(11) DEFAULT NULL,
  `specialization_code` int(7) DEFAULT NULL,
  `student_status_code` varchar(7) DEFAULT NULL,
  `notify_thru_email` char(1) DEFAULT NULL,
  `notify_thru_text` char(1) DEFAULT NULL,
  `secret_password` varchar(30) DEFAULT NULL,
  `secret_question` varchar(30) DEFAULT NULL,
  `secret_answer` varchar(30) DEFAULT NULL,
  `viewable` char(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `student_fk2` (`flowchart_version`),
  KEY `student_fk1` (`specialization_code`),
  KEY `student_fk0` (`student_status_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `lname`, `fname`, `mi`, `email`, `text_no`, `contact_no`, `flowchart_version`, `specialization_code`, `student_status_code`, `notify_thru_email`, `notify_thru_text`, `secret_password`, `secret_question`, `secret_answer`, `viewable`) VALUES
(201412345, 'Cruz', 'Juan', 'D.', NULL, NULL, NULL, NULL, NULL, 'Reg', NULL, NULL, NULL, NULL, NULL, NULL),
(201422222, 'Penduko', 'Pedro', 'P.', NULL, NULL, NULL, NULL, NULL, 'Reg', NULL, NULL, NULL, NULL, NULL, NULL),
(201433333, 'Falayfay', 'Facifica', 'F.', NULL, NULL, NULL, NULL, NULL, 'Reg', NULL, NULL, NULL, NULL, NULL, NULL),
(201444444, 'Binay', 'Jojo Negro', 'J.', NULL, NULL, NULL, NULL, NULL, 'Reg', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `student_schedule`
--

CREATE TABLE IF NOT EXISTS `student_schedule` (
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
  KEY `student_schedule_fk1` (`schedule_code`),
  KEY `student_schedule_fk2` (`start_sy`),
  KEY `student_schedule_fk3` (`end_sy`),
  KEY `student_schedule_fk4` (`term`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `student_status`
--

CREATE TABLE IF NOT EXISTS `student_status` (
  `id` int(7) NOT NULL AUTO_INCREMENT,
  `code` varchar(7) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `code` (`code`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `student_status`
--

INSERT INTO `student_status` (`id`, `code`, `name`, `description`) VALUES
(1, 'Reg', 'Regular Student', NULL),
(2, 'Irreg', 'Irregular Student', NULL),
(3, 'Ret', 'Returnee', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sy_term`
--

CREATE TABLE IF NOT EXISTS `sy_term` (
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `sy_term`
--

INSERT INTO `sy_term` (`id`, `start_sy`, `end_sy`, `term`, `start_date`, `end_date`) VALUES
(1, 2014, 2015, 1, '2015-08-24', '2015-12-10'),
(2, 2014, 2015, 2, '2016-01-05', '2016-04-01');

-- --------------------------------------------------------

--
-- Table structure for table `temporary_schedule`
--

CREATE TABLE IF NOT EXISTS `temporary_schedule` (
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
  KEY `temporary_schedule_fk3` (`schedule_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `thesis`
--

CREATE TABLE IF NOT EXISTS `thesis` (
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
  KEY `thesis_fk4` (`end_term`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `thesis`
--

INSERT INTO `thesis` (`id`, `primary_name`, `secondary_name`, `proposal_abstract`, `final_abstract`, `description`, `start_sy`, `start_term`, `end_sy`, `end_term`, `percent_completeness`) VALUES
(1, 'Network Analysis with Report Authoring', 'NARA', 'Lorem ipsum dolor sit amet, magnis nunc metus, ac consequat neque, egestas leo duis. Porta odio, luctus in pellentesque magna venenatis amet, quisque libero sem amet morbi aliquam dui, urna tempor nec eu purus mi cras, pulvinar ut. Ut est condimentum ultricies eu, hendrerit mauris sem. Vitae vel ut mauris. Justo quis nonummy leo sed luctus pulvinar, curabitur duis, etiam aenean porttitor ridiculus pretium wisi culpa, sed orci, aliquam vel.', 'Lorem ipsum dolor sit amet, magnis nunc metus, ac consequat neque, egestas leo duis. Porta odio, luctus in pellentesque magna venenatis amet, quisque libero sem amet morbi aliquam dui, urna tempor nec eu purus mi cras, pulvinar ut. Ut est condimentum ultricies eu, hendrerit mauris sem. Vitae vel ut mauris. Justo quis nonummy leo sed luctus pulvinar, curabitur duis, etiam aenean porttitor ridiculus pretium wisi culpa, sed orci, aliquam vel.', NULL, 2014, 1, 2015, 2, NULL),
(2, 'Design and Implementation of a Web-Based Information System', 'WebFIS', 'Lorem ipsum dolor sit amet, magnis nunc metus, ac consequat neque, egestas leo duis. Porta odio, luctus in pellentesque magna venenatis amet, quisque libero sem amet morbi aliquam dui, urna tempor nec eu purus mi cras, pulvinar ut. Ut est condimentum ultricies eu, hendrerit mauris sem. Vitae vel ut mauris. Justo quis nonummy leo sed luctus pulvinar, curabitur duis, etiam aenean porttitor ridiculus pretium wisi culpa, sed orci, aliquam vel.', 'Lorem ipsum dolor sit amet, magnis nunc metus, ac consequat neque, egestas leo duis. Porta odio, luctus in pellentesque magna venenatis amet, quisque libero sem amet morbi aliquam dui, urna tempor nec eu purus mi cras, pulvinar ut. Ut est condimentum ultricies eu, hendrerit mauris sem. Vitae vel ut mauris. Justo quis nonummy leo sed luctus pulvinar, curabitur duis, etiam aenean porttitor ridiculus pretium wisi culpa, sed orci, aliquam vel.', 'Undergraduate Thesis', 2014, 1, 2015, 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `thesis_adviser`
--

CREATE TABLE IF NOT EXISTS `thesis_adviser` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `thesis_id` int(8) NOT NULL,
  `faculty_id` int(8) DEFAULT NULL,
  `start_sy` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `thesis_adviser_fk1` (`thesis_id`),
  KEY `thesis_adviser_fk0` (`faculty_id`),
  KEY `thesis_adviser_fk2` (`start_sy`),
  KEY `thesis_adviser_fk3` (`term`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `thesis_adviser`
--

INSERT INTO `thesis_adviser` (`id`, `thesis_id`, `faculty_id`, `start_sy`, `term`) VALUES
(1, 1, 97063932, 2014, 1);

-- --------------------------------------------------------

--
-- Table structure for table `thesis_area`
--

CREATE TABLE IF NOT EXISTS `thesis_area` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `thesis_id` int(8) DEFAULT NULL,
  `area_code` int(7) DEFAULT NULL,
  `area_level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `thesis_area_fk0` (`thesis_id`),
  KEY `thesis_area_fk1` (`area_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `thesis_enrollment`
--

CREATE TABLE IF NOT EXISTS `thesis_enrollment` (
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
  KEY `student_id` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `thesis_proponent`
--

CREATE TABLE IF NOT EXISTS `thesis_proponent` (
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
  KEY `thesis_proponent_fk1` (`student_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Table structure for table `verdict`
--

CREATE TABLE IF NOT EXISTS `verdict` (
  `code` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin_position`
--
ALTER TABLE `admin_position`
  ADD CONSTRAINT `admin_position_fk0` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `area`
--
ALTER TABLE `area`
  ADD CONSTRAINT `area_fk0` FOREIGN KEY (`general_area_code`) REFERENCES `general_area` (`code`);

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_fk1` FOREIGN KEY (`phase_code`) REFERENCES `phase` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `course_fk0` FOREIGN KEY (`department_code`) REFERENCES `department` (`code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `course_offering`
--
ALTER TABLE `course_offering`
  ADD CONSTRAINT `course_offering_fk3` FOREIGN KEY (`course_code`) REFERENCES `course` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `course_offering_fk0` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `course_offering_fk1` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `course_offering_fk2` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `course_offering_section`
--
ALTER TABLE `course_offering_section`
  ADD CONSTRAINT `course_offering_section_fk4` FOREIGN KEY (`course_code`) REFERENCES `course` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `course_offering_section_fk0` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `course_offering_section_fk1` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `course_offering_section_fk3` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `defense_panel`
--
ALTER TABLE `defense_panel`
  ADD CONSTRAINT `defense_panel_fk3` FOREIGN KEY (`verdict_code`) REFERENCES `verdict` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `defense_panel_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `defense_panel_fk1` FOREIGN KEY (`defense_code`) REFERENCES `defense` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `defense_panel_fk2` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `defense_panel_fk4` FOREIGN KEY (`course_code`) REFERENCES `course` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `defense_panel_fk5` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `defense_panel_fk6` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `defense_panel_fk7` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `defense_schedule`
--
ALTER TABLE `defense_schedule`
  ADD CONSTRAINT `defense_schedule_fk7` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`),
  ADD CONSTRAINT `defense_schedule_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`),
  ADD CONSTRAINT `defense_schedule_fk1` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`),
  ADD CONSTRAINT `defense_schedule_fk2` FOREIGN KEY (`course_code`) REFERENCES `course` (`code`),
  ADD CONSTRAINT `defense_schedule_fk3` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`),
  ADD CONSTRAINT `defense_schedule_fk4` FOREIGN KEY (`initial_verdict_code`) REFERENCES `verdict` (`code`),
  ADD CONSTRAINT `defense_schedule_fk5` FOREIGN KEY (`final_verdict_code`) REFERENCES `verdict` (`code`),
  ADD CONSTRAINT `defense_schedule_fk6` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`);

--
-- Constraints for table `faculty`
--
ALTER TABLE `faculty`
  ADD CONSTRAINT `faculty_fk2` FOREIGN KEY (`faculty_rank`) REFERENCES `rank` (`code`),
  ADD CONSTRAINT `faculty_fk0` FOREIGN KEY (`department_code`) REFERENCES `department` (`code`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `faculty_fk1` FOREIGN KEY (`faculty_status_code`) REFERENCES `faculty_status` (`code`);

--
-- Constraints for table `faculty_area`
--
ALTER TABLE `faculty_area`
  ADD CONSTRAINT `faculty_area_fk1` FOREIGN KEY (`area_code`) REFERENCES `area` (`code`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `faculty_area_fk0` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `faculty_schedule`
--
ALTER TABLE `faculty_schedule`
  ADD CONSTRAINT `faculty_schedule_fk4` FOREIGN KEY (`schedule_code`) REFERENCES `schedule` (`code`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `faculty_schedule_fk0` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `faculty_schedule_fk1` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `faculty_schedule_fk2` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `faculty_schedule_fk3` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `flowchart_course`
--
ALTER TABLE `flowchart_course`
  ADD CONSTRAINT `flowchart_course_fk1` FOREIGN KEY (`specialization_code`) REFERENCES `specialization` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `flowchart_course_fk0` FOREIGN KEY (`flowchart_version`) REFERENCES `flowchart` (`version`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `flowchart_prerequisite`
--
ALTER TABLE `flowchart_prerequisite`
  ADD CONSTRAINT `flowchart_prerequisite_fk1` FOREIGN KEY (`specialization_code`) REFERENCES `specialization` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `flowchart_prerequisite_fk0` FOREIGN KEY (`flowchart_version`) REFERENCES `flowchart` (`version`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `holiday`
--
ALTER TABLE `holiday`
  ADD CONSTRAINT `holiday_fk0` FOREIGN KEY (`schedule_code`) REFERENCES `schedule` (`code`);

--
-- Constraints for table `rank_salary`
--
ALTER TABLE `rank_salary`
  ADD CONSTRAINT `rank_salary_fk0` FOREIGN KEY (`rank_code`) REFERENCES `rank` (`code`);

--
-- Constraints for table `report_defense_panel`
--
ALTER TABLE `report_defense_panel`
  ADD CONSTRAINT `report_defense_panel_fk1` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `report_defense_panel_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `report_defense_schedule`
--
ALTER TABLE `report_defense_schedule`
  ADD CONSTRAINT `report_defense_schedule_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `report_thesis_proponent`
--
ALTER TABLE `report_thesis_proponent`
  ADD CONSTRAINT `report_thesis_proponent_fk1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `report_thesis_proponent_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room_schedule`
--
ALTER TABLE `room_schedule`
  ADD CONSTRAINT `room_schedule_fk3` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room_schedule_fk0` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `room_schedule_fk1` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room_schedule_fk2` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `specialization`
--
ALTER TABLE `specialization`
  ADD CONSTRAINT `specialization_fk0` FOREIGN KEY (`service_department_code`) REFERENCES `department` (`code`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_fk0` FOREIGN KEY (`student_status_code`) REFERENCES `student_status` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_fk1` FOREIGN KEY (`specialization_code`) REFERENCES `specialization` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_fk2` FOREIGN KEY (`flowchart_version`) REFERENCES `flowchart` (`version`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_schedule`
--
ALTER TABLE `student_schedule`
  ADD CONSTRAINT `student_schedule_fk4` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_schedule_fk0` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_schedule_fk1` FOREIGN KEY (`schedule_code`) REFERENCES `schedule` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_schedule_fk2` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_schedule_fk3` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `temporary_schedule`
--
ALTER TABLE `temporary_schedule`
  ADD CONSTRAINT `temporary_schedule_fk3` FOREIGN KEY (`schedule_code`) REFERENCES `schedule` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `temporary_schedule_fk0` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `temporary_schedule_fk1` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `temporary_schedule_fk2` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `thesis`
--
ALTER TABLE `thesis`
  ADD CONSTRAINT `thesis_fk4` FOREIGN KEY (`end_term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_fk1` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_fk2` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_fk3` FOREIGN KEY (`start_term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `thesis_adviser`
--
ALTER TABLE `thesis_adviser`
  ADD CONSTRAINT `thesis_adviser_fk3` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_adviser_fk0` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_adviser_fk1` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_adviser_fk2` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `thesis_area`
--
ALTER TABLE `thesis_area`
  ADD CONSTRAINT `thesis_area_fk1` FOREIGN KEY (`area_code`) REFERENCES `area` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_area_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `thesis_enrollment`
--
ALTER TABLE `thesis_enrollment`
  ADD CONSTRAINT `thesis_enrollment_fk6` FOREIGN KEY (`course_code`) REFERENCES `course` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_enrollment_fk0` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_enrollment_fk1` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_enrollment_fk2` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_enrollment_fk3` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_enrollment_fk5` FOREIGN KEY (`enrollment_code`) REFERENCES `enrollment` (`code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `thesis_proponent`
--
ALTER TABLE `thesis_proponent`
  ADD CONSTRAINT `thesis_proponent_fk1` FOREIGN KEY (`student_id`) REFERENCES `thesis_enrollment` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_proponent_fk0` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_proponent_fk2` FOREIGN KEY (`start_sy`) REFERENCES `sy_term` (`start_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_proponent_fk3` FOREIGN KEY (`end_sy`) REFERENCES `sy_term` (`end_sy`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thesis_proponent_fk4` FOREIGN KEY (`term`) REFERENCES `sy_term` (`term`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
