-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2023 at 03:02 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `heartbud`
--
CREATE DATABASE IF NOT EXISTS `heartbud` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `heartbud`;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_email` varchar(45) NOT NULL,
  `admin_firstname` varchar(20) NOT NULL,
  `admin_surname` varchar(25) NOT NULL,
  `admin_password` varchar(20) NOT NULL,
  `admin_contact` int(12) NOT NULL,
  `admin_address` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_email`, `admin_firstname`, `admin_surname`, `admin_password`, `admin_contact`, `admin_address`) VALUES
('ozbee124@gmail.com', 'Kwakye', 'Kwame', 'admin', 2137714594, 'El-Khroub');

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` int(100) NOT NULL,
  `Doctor` varchar(45) NOT NULL,
  `Patient` varchar(45) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `purpose` varchar(250) NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`id`, `Doctor`, `Patient`, `date`, `time`, `purpose`, `type`) VALUES
(1, 'kazezepharoll47@gmail.com', 'osafo.kob@gmail.com', '2023-07-24', '13:30:00', 'Patients Request(Exhaustion and lost of Appetite)', '');

-- --------------------------------------------------------

--
-- Table structure for table `diet`
--

CREATE TABLE `diet` (
  `Day` varchar(10) NOT NULL,
  `category` varchar(10) NOT NULL,
  `food_meal` varchar(45) NOT NULL,
  `doctor_email` varchar(45) NOT NULL,
  `patient_email` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `diet`
--

INSERT INTO `diet` (`Day`, `category`, `food_meal`, `doctor_email`, `patient_email`) VALUES
('Friday', 'Breakfast', 'Soup + Bread + Salad', 'kazezepharoll47@gmail.com', 'osafo.kob@gmail.com'),
('Monday', 'Breakfast', 'Coffee + Bread + Salad', 'kazezepharoll47@gmail.com', 'osafo.kob@gmail.com'),
('Saturday', 'Breakfast', 'Tea + Bread', 'kazezepharoll47@gmail.com', 'osafo.kob@gmail.com'),
('Sunday', 'Breakfast', 'Tea + Bread + Eggs', 'kazezepharoll47@gmail.com', 'osafo.kob@gmail.com'),
('Thursday', 'Breakfast', 'Tea + Salad + Sausage', 'kazezepharoll47@gmail.com', 'osafo.kob@gmail.com'),
('Tuesday', 'Breakfast', 'Juice + Bread', 'kazezepharoll47@gmail.com', 'osafo.kob@gmail.com'),
('Wednessday', 'Breakfast', 'Coffee + Bread + Jam', 'kazezepharoll47@gmail.com', 'osafo.kob@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `doctor_email` varchar(45) NOT NULL,
  `doctor_firstname` varchar(20) NOT NULL,
  `doctor_surname` varchar(25) NOT NULL,
  `doctor_password` varchar(20) NOT NULL,
  `doctor_contact` int(12) NOT NULL,
  `doctor_address` varchar(45) NOT NULL,
  `doctor_DOB` date NOT NULL,
  `hospital_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`doctor_email`, `doctor_firstname`, `doctor_surname`, `doctor_password`, `doctor_contact`, `doctor_address`, `doctor_DOB`, `hospital_name`) VALUES
('1', '1', '1', '1', 1, '1', '1777-02-02', '1'),
('kazezepharoll47@gmail.com', 'Pharoll', 'Kazeze', 'doctor', 1111111111, '', '1994-12-04', 'koko');

-- --------------------------------------------------------

--
-- Stand-in structure for view `heartbud_users`
-- (See below for the actual view)
--
CREATE TABLE `heartbud_users` (
`email` varchar(45)
,`firstname` varchar(20)
,`password` varchar(20)
,`role` varchar(7)
);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `subject` varchar(20) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Message` varchar(250) NOT NULL,
  `Sender` varchar(45) NOT NULL,
  `Reciever` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `subject`, `date_time`, `Message`, `Sender`, `Reciever`) VALUES
(1, 'Appointment', '2023-07-19 19:47:27', 'I would like to request an appointment on Monday 24/Jul/2023. Due to exhaustion and lost of appettite, i have been having lately. Any time deemed fit is okay by me.', 'osafo.kob@gmail.com', 'kazezepharoll47@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `notification_patient`
--

CREATE TABLE `notification_patient` (
  `id` int(11) NOT NULL,
  `subject` varchar(20) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `message` varchar(250) NOT NULL,
  `sender` varchar(45) NOT NULL,
  `reciever` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notification_patient`
--

INSERT INTO `notification_patient` (`id`, `subject`, `date_time`, `message`, `sender`, `reciever`) VALUES
(1, 'Appointment', '2023-07-19 19:46:39', 'Your Request for an appointment has been permitted. I hope to see you on Monday 24/Jul/2023 at 13:30 room 41.\r\nKindly be prompt.', 'kazezepharoll47@gmail.com', 'osafo.kob@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `patient_email` varchar(45) NOT NULL,
  `patient_firstname` varchar(20) NOT NULL,
  `patient_surname` varchar(25) NOT NULL,
  `patient_password` varchar(20) NOT NULL,
  `patient_contact` int(12) NOT NULL,
  `patient_address` varchar(45) NOT NULL,
  `patient_DOB` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`patient_email`, `patient_firstname`, `patient_surname`, `patient_password`, `patient_contact`, `patient_address`, `patient_DOB`) VALUES
('2', '2', '2', '2', 2, '2', '1982-02-18'),
('osafo.kob@gmail.com', 'Kwame', 'Kwakye', 'patient', 554885287, 'constantine', '1982-02-18');

-- --------------------------------------------------------

--
-- Table structure for table `patient_details`
--

CREATE TABLE `patient_details` (
  `id` int(100) NOT NULL,
  `patient_email` varchar(45) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` int(11) NOT NULL,
  `alcohol_intake` int(11) NOT NULL,
  `smoking` int(11) NOT NULL,
  `diastolic` int(11) NOT NULL,
  `systolic` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `cholestrol` int(11) NOT NULL,
  `glucose` int(11) NOT NULL,
  `activity` int(11) NOT NULL,
  `CVD_stat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patient_details`
--

INSERT INTO `patient_details` (`id`, `patient_email`, `age`, `gender`, `alcohol_intake`, `smoking`, `diastolic`, `systolic`, `height`, `weight`, `cholestrol`, `glucose`, `activity`, `CVD_stat`) VALUES
(1, 'osafo.kob@gmail.com', 35, 1, 0, 1, 70, 110, 165, 75, 2, 1, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `preference`
--

CREATE TABLE `preference` (
  `id` int(100) NOT NULL,
  `food_fruit_name` varchar(45) NOT NULL,
  `type` varchar(10) NOT NULL,
  `patient_email` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `prescription`
--

CREATE TABLE `prescription` (
  `id` int(100) NOT NULL,
  `doctor` varchar(45) NOT NULL,
  `patient` varchar(45) NOT NULL,
  `medicine` varchar(45) NOT NULL,
  `morning_dose` int(2) NOT NULL,
  `afternoon_dose` int(2) NOT NULL,
  `evening_dose` int(2) NOT NULL,
  `initial` date NOT NULL,
  `final` date NOT NULL,
  `milligram` varchar(10) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prescription`
--

INSERT INTO `prescription` (`id`, `doctor`, `patient`, `medicine`, `morning_dose`, `afternoon_dose`, `evening_dose`, `initial`, `final`, `milligram`, `description`) VALUES
(1, 'kazezepharoll47@gmail.com', 'osafo.kob@gmail.com', 'Aspirin', 1, 2, 1, '2023-07-19', '2023-11-28', '100', ''),
(4, 'kazezepharoll47@gmail.com', 'osafo.kob@gmail.com', 'Beta Blockers', 1, 1, 1, '2023-07-19', '2023-11-28', '120', ''),
(2, 'kazezepharoll47@gmail.com', 'osafo.kob@gmail.com', 'Inhibitors', 1, 0, 0, '2023-07-19', '2023-11-21', '80', ''),
(3, 'kazezepharoll47@gmail.com', 'osafo.kob@gmail.com', 'Zinc', 1, 0, 1, '2023-07-19', '2023-10-25', '100', '');

-- --------------------------------------------------------

--
-- Structure for view `heartbud_users`
--
DROP TABLE IF EXISTS `heartbud_users`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `heartbud_users`  AS SELECT `doctor`.`doctor_email` AS `email`, `doctor`.`doctor_firstname` AS `firstname`, `doctor`.`doctor_password` AS `password`, 'doctor' AS `role` FROM `doctor`union all select `admin`.`admin_email` AS `email`,`admin`.`admin_firstname` AS `firstname`,`admin`.`admin_password` AS `password`,'admin' AS `role` from `admin` union all select `patient`.`patient_email` AS `email`,`patient`.`patient_firstname` AS `firstname`,`patient`.`patient_password` AS `password`,'patient' AS `role` from `patient`  ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_email`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`Doctor`,`date`,`time`),
  ADD KEY `p_email` (`Patient`);

--
-- Indexes for table `diet`
--
ALTER TABLE `diet`
  ADD PRIMARY KEY (`Day`,`category`,`patient_email`),
  ADD KEY `doc_email` (`doctor_email`),
  ADD KEY `pat_email` (`patient_email`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`doctor_email`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recepient` (`Reciever`),
  ADD KEY `sentby` (`Sender`);

--
-- Indexes for table `notification_patient`
--
ALTER TABLE `notification_patient`
  ADD PRIMARY KEY (`id`),
  ADD KEY `receiver` (`reciever`),
  ADD KEY `sender` (`sender`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`patient_email`);

--
-- Indexes for table `patient_details`
--
ALTER TABLE `patient_details`
  ADD PRIMARY KEY (`patient_email`,`id`);

--
-- Indexes for table `preference`
--
ALTER TABLE `preference`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pa_email` (`patient_email`);

--
-- Indexes for table `prescription`
--
ALTER TABLE `prescription`
  ADD PRIMARY KEY (`doctor`,`patient`,`medicine`),
  ADD KEY `p` (`patient`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `d_email` FOREIGN KEY (`Doctor`) REFERENCES `doctor` (`doctor_email`),
  ADD CONSTRAINT `p_email` FOREIGN KEY (`Patient`) REFERENCES `patient` (`patient_email`);

--
-- Constraints for table `diet`
--
ALTER TABLE `diet`
  ADD CONSTRAINT `doc_email` FOREIGN KEY (`doctor_email`) REFERENCES `doctor` (`doctor_email`),
  ADD CONSTRAINT `pat_email` FOREIGN KEY (`patient_email`) REFERENCES `patient` (`patient_email`);

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `recepient` FOREIGN KEY (`Reciever`) REFERENCES `doctor` (`doctor_email`),
  ADD CONSTRAINT `sentby` FOREIGN KEY (`Sender`) REFERENCES `patient` (`patient_email`);

--
-- Constraints for table `notification_patient`
--
ALTER TABLE `notification_patient`
  ADD CONSTRAINT `receiver` FOREIGN KEY (`reciever`) REFERENCES `patient` (`patient_email`),
  ADD CONSTRAINT `sender` FOREIGN KEY (`sender`) REFERENCES `doctor` (`doctor_email`);

--
-- Constraints for table `patient_details`
--
ALTER TABLE `patient_details`
  ADD CONSTRAINT `pa` FOREIGN KEY (`patient_email`) REFERENCES `patient` (`patient_email`);

--
-- Constraints for table `preference`
--
ALTER TABLE `preference`
  ADD CONSTRAINT `pa_email` FOREIGN KEY (`patient_email`) REFERENCES `patient` (`patient_email`);

--
-- Constraints for table `prescription`
--
ALTER TABLE `prescription`
  ADD CONSTRAINT `d` FOREIGN KEY (`doctor`) REFERENCES `doctor` (`doctor_email`),
  ADD CONSTRAINT `p` FOREIGN KEY (`patient`) REFERENCES `patient` (`patient_email`);
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Table structure for table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) NOT NULL DEFAULT '',
  `user` varchar(255) NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `query` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) NOT NULL,
  `col_name` varchar(64) NOT NULL,
  `col_type` varchar(64) NOT NULL,
  `col_length` text DEFAULT NULL,
  `col_collation` varchar(64) NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) DEFAULT '',
  `col_default` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Table structure for table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `column_name` varchar(64) NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `transformation` varchar(255) NOT NULL DEFAULT '',
  `transformation_options` varchar(255) NOT NULL DEFAULT '',
  `input_transformation` varchar(255) NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) NOT NULL,
  `settings_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Table structure for table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL,
  `export_type` varchar(10) NOT NULL,
  `template_name` varchar(64) NOT NULL,
  `template_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Table structure for table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db` varchar(64) NOT NULL DEFAULT '',
  `table` varchar(64) NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) NOT NULL,
  `item_name` varchar(64) NOT NULL,
  `item_type` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Dumping data for table `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"heartbud\",\"table\":\"prescription\"},{\"db\":\"heartbud\",\"table\":\"patient_details\"},{\"db\":\"heartbud\",\"table\":\"medicne\"},{\"db\":\"heartbud\",\"table\":\"diet\"},{\"db\":\"heartbud\",\"table\":\"notification\"},{\"db\":\"heartbud\",\"table\":\"notification_patient\"},{\"db\":\"heartbud\",\"table\":\"appointment\"},{\"db\":\"heartbud\",\"table\":\"heartbud_users\"},{\"db\":\"heartbud\",\"table\":\"patient\"},{\"db\":\"heartbud\",\"table\":\"doctor\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) NOT NULL DEFAULT '',
  `master_table` varchar(64) NOT NULL DEFAULT '',
  `master_field` varchar(64) NOT NULL DEFAULT '',
  `foreign_db` varchar(64) NOT NULL DEFAULT '',
  `foreign_table` varchar(64) NOT NULL DEFAULT '',
  `foreign_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `search_name` varchar(64) NOT NULL DEFAULT '',
  `search_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `display_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

--
-- Dumping data for table `pma__table_info`
--

INSERT INTO `pma__table_info` (`db_name`, `table_name`, `display_field`) VALUES
('heartbud', 'appointment', 'Doctor'),
('heartbud', 'diet', 'Day'),
('heartbud', 'notification', 'subject'),
('heartbud', 'notification_patient', 'subject'),
('heartbud', 'patient_details', 'patient_email'),
('heartbud', 'preference', 'food_fruit_name'),
('heartbud', 'prescription', 'doctor');

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `prefs` text NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

--
-- Dumping data for table `pma__table_uiprefs`
--

INSERT INTO `pma__table_uiprefs` (`username`, `db_name`, `table_name`, `prefs`, `last_update`) VALUES
('root', 'heartbud', 'diet', '{\"sorted_col\":\"`diet`.`Day` DESC\",\"CREATE_TIME\":\"2023-07-19 20:19:34\",\"col_order\":[0,1,2,3,4],\"col_visib\":[1,1,1,1,1]}', '2023-07-19 19:32:59'),
('root', 'heartbud', 'prescription', '{\"sorted_col\":\"`prescription`.`medicine` DESC\"}', '2023-07-19 23:32:41');

-- --------------------------------------------------------

--
-- Table structure for table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text NOT NULL,
  `schema_sql` text DEFAULT NULL,
  `data_sql` longtext DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2023-07-19 22:03:16', '{\"Console\\/Mode\":\"collapse\",\"NavigationWidth\":0}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) NOT NULL,
  `tab` varchar(64) NOT NULL,
  `allowed` enum('Y','N') NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) NOT NULL,
  `usergroup` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
