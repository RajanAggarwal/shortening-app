-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 29, 2017 at 08:35 PM
-- Server version: 5.7.17-0ubuntu0.16.04.1
-- PHP Version: 7.0.18-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shoten_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) NOT NULL,
  `video` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `user_id`, `comment`, `image`, `video`, `created_at`, `updated_at`) VALUES
(1, 99, 'Hello', '1488820840Home Page Layout.png', '', '2017-03-06 17:20:41', '2017-03-06 17:20:41'),
(2, 76, 'dsfvdf  b', '14888244056twins.png', '', '2017-03-06 18:20:05', '2017-03-06 18:20:05'),
(3, 34, 'hi guys<br>', '1488958169index.jpg', '', '2017-03-08 07:29:29', '2017-03-28 10:02:36'),
(5, 104, 'adfgdb', '148907354811873730_10153551666519233_503927123928985966_n.jpg', '', '2017-03-09 15:32:28', '2017-03-09 15:32:28'),
(6, 104, 'sdfggbb', '1489079666CenterShare.png', '', '2017-03-09 17:14:26', '2017-03-09 17:14:26'),
(7, 34, 'testð', '', '', '2017-03-10 08:06:44', '2017-03-10 08:06:44'),
(8, 102, 'sdfgh', '1489157211move trashcan.png', '', '2017-03-10 14:46:51', '2017-03-10 14:46:51'),
(9, 72, 'howdy', '148933341626866_102492016459493_5155541_n.jpg', '', '2017-03-12 15:43:36', '2017-03-12 15:43:36'),
(10, 72, 'od', '', '', '2017-03-12 15:44:06', '2017-03-12 15:44:06'),
(11, 72, 'sdfadf', '', '', '2017-03-12 15:44:11', '2017-03-12 15:44:11'),
(12, 103, '100 words', '1489509600renee background.png', '', '2017-03-14 16:40:01', '2017-03-14 16:40:01'),
(14, 34, 'hello guys', '', '', '2017-03-16 16:22:25', '2017-03-16 16:22:25'),
(15, 34, 'hey guys', '', '', '2017-03-17 06:32:32', '2017-03-17 06:32:32'),
(16, 34, '', '1489747723motivation_banner.png', '', '2017-03-17 10:48:43', '2017-03-17 10:48:43'),
(19, 34, 'This is test blog', '1489749065_image_blog.jpg', '', '2017-03-17 11:11:05', '2017-03-17 11:11:05'),
(22, 34, 'testing status', '', '', '2017-03-17 11:38:28', '2017-03-17 11:38:28'),
(23, 34, 'testing status', '', '', '2017-03-17 11:38:48', '2017-03-17 11:38:48'),
(24, 34, 'testing blog post', '', '', '2017-03-17 11:41:55', '2017-03-17 11:41:55'),
(27, 34, '', '1489751418_image_blog.jpg', '', '2017-03-17 11:50:18', '2017-03-17 11:50:18'),
(28, 34, '', '1489753159_image_blog.jpg', '', '2017-03-17 12:19:19', '2017-03-17 12:19:19'),
(29, 34, 'Hi and Y?', '', '', '2017-03-17 14:31:02', '2017-03-17 14:31:02'),
(30, 34, '', '1489761752_image_blog.jpg', '', '2017-03-17 14:42:32', '2017-03-17 14:42:32'),
(32, 34, '', '1489761847_image_blog.png', '', '2017-03-17 14:44:07', '2017-03-17 14:44:07'),
(33, 34, 'hey guys', '', '', '2017-03-18 20:08:38', '2017-03-18 20:08:38'),
(34, 34, 'hello', '', '', '2017-03-18 20:21:41', '2017-03-18 20:21:41'),
(35, 34, 'hey', '', '', '2017-03-18 21:32:16', '2017-03-18 21:32:16'),
(36, 34, 'hello', '', '', '2017-03-18 22:41:19', '2017-03-18 22:41:19'),
(40, 132, 'hey friendsâºâºâº', '', '', '2017-03-21 09:50:34', '2017-03-21 09:50:34'),
(41, 132, 'hey friends', '', '', '2017-03-21 09:51:08', '2017-03-21 09:51:08'),
(42, 132, 'hello', '', '', '2017-03-21 09:55:42', '2017-03-21 09:55:42'),
(43, 132, 'test blog', '', '', '2017-03-21 09:57:13', '2017-03-21 09:57:13'),
(44, 133, 'hey guys', '', '', '2017-03-21 10:06:05', '2017-03-21 10:06:05'),
(45, 141, 'hello', '', '', '2017-03-21 10:44:16', '2017-03-21 10:44:16'),
(46, 132, 'test blog', '', '', '2017-03-21 10:51:18', '2017-03-21 10:51:18'),
(47, 105, 'test blog', '', '', '2017-03-21 10:52:36', '2017-03-21 10:52:36'),
(48, 121, 'ð¬this is testing', '', '', '2017-03-21 11:42:30', '2017-03-21 11:42:30'),
(49, 77, 'gy', '', '', '2017-03-21 16:57:18', '2017-03-21 16:57:18'),
(50, 34, '', '1490163595_image_blog.jpeg', '', '2017-03-22 06:19:55', '2017-03-22 06:19:55'),
(57, 59, 'Hello World', '149038925126694_1501833512904_2430829_n.jpg', '', '2017-03-24 21:00:51', '2017-03-24 21:00:51'),
(58, 170, 'Hello World!', '149039326213891925_10209725145392568_3301914935836935469_n.jpg', '', '2017-03-24 22:07:42', '2017-03-24 22:07:42'),
(59, 34, '', '1490598234_image_blog.jpg', '', '2017-03-27 07:03:54', '2017-03-27 07:03:54'),
(60, 102, 'This is test blog', '', '', '2017-03-28 09:57:54', '2017-03-28 09:57:54'),
(61, 34, 'hello fr', '', '', '2017-03-29 14:20:34', '2017-03-29 14:20:34'),
(62, 231, 'Hello', '', '', '2017-03-29 17:58:29', '2017-03-29 17:58:29'),
(64, 239, '', '1490888925_image_blog.png', '', '2017-03-30 15:48:45', '2017-03-30 15:48:45'),
(65, 239, '', '1490888970_image_blog.png', '', '2017-03-30 15:49:30', '2017-03-30 15:49:30'),
(66, 239, '', '1490888993_image_blog.png', '', '2017-03-30 15:49:53', '2017-03-30 15:49:53'),
(67, 34, '', '1490935949_image_blog.jpg', '', '2017-03-31 04:52:29', '2017-03-31 04:52:29'),
(68, 34, '', '1490936200_image_blog.jpg', '', '2017-03-31 04:56:40', '2017-03-31 04:56:40'),
(69, 34, '', '1490936220_image_blog.jpg', '', '2017-03-31 04:57:00', '2017-03-31 04:57:00'),
(70, 34, '', '1490936324_image_blog.jpg', '', '2017-03-31 04:58:44', '2017-03-31 04:58:44'),
(71, 244, 'hey friends', '', '', '2017-03-31 13:18:51', '2017-03-31 13:18:51'),
(72, 244, 'yduwuwhhw', '', '', '2017-03-31 13:19:08', '2017-03-31 13:19:08'),
(73, 244, '', '1490966666_image_blog.jpg', '', '2017-03-31 13:24:26', '2017-03-31 13:24:26'),
(74, 244, 'gduwudh', '', '', '2017-03-31 13:24:39', '2017-03-31 13:24:39'),
(75, 202, 'hello', '', '', '2017-03-31 13:36:20', '2017-03-31 13:36:20'),
(76, 34, 'test blog11111', '', '', '2017-03-31 13:41:24', '2017-03-31 13:41:24'),
(77, 34, 'testing status', '', '', '2017-03-31 13:50:01', '2017-03-31 13:50:01'),
(78, 34, 'Try try', '1490968527_image_blog.null', '', '2017-03-31 13:55:27', '2017-03-31 13:55:27'),
(79, 34, 'Try try', '1490968538_image_blog.null', '', '2017-03-31 13:55:38', '2017-03-31 13:55:38'),
(80, 245, 'One of my best friends when I was growing up was born on the same day, same year as me. &nbsp;That is very rare since only 6500 people were born on the same day same year as me. &nbsp;It was fun sharing birthdays with her.', '', '', '2017-04-02 20:28:10', '2017-04-02 20:28:10'),
(81, 101, 'This is Edit Test post <img alt="Ã°ÂÂÂ" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f609.png"><br>', '', '', '2017-04-03 07:02:37', '2017-04-03 07:30:07'),
(82, 101, 'This is test image post<br>', '1491202996images.jpg', '', '2017-04-03 07:03:16', '2017-04-03 07:03:16'),
(83, 101, 'Test Edit Post <img alt="Ã°ÂÂÂ" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f600.png">', '', '', '2017-04-03 07:04:25', '2017-04-03 07:04:58'),
(84, 246, '', '1491205018_image_blog.JPEG', '', '2017-04-03 07:36:58', '2017-04-03 07:36:58'),
(85, 246, '', '1491205121_image_blog.JPEG', '', '2017-04-03 07:38:41', '2017-04-03 07:38:41'),
(86, 246, '', '1491205151_image_blog.JPEG', '', '2017-04-03 07:39:11', '2017-04-03 07:39:11'),
(87, 246, '', '1491205610_image_blog.JPEG', '', '2017-04-03 07:46:50', '2017-04-03 07:46:50'),
(88, 246, 'hdgsdh', '', '', '2017-04-03 07:47:48', '2017-04-03 07:47:48'),
(89, 34, 'test blog', '', '', '2017-04-03 08:07:39', '2017-04-03 08:07:39'),
(90, 246, 'hello', '', '', '2017-04-03 08:16:38', '2017-04-03 08:16:38'),
(91, 34, '', '1491211714_image_blog.JPEG', '', '2017-04-03 09:28:34', '2017-04-03 09:28:34'),
(92, 34, '', '1491211746_image_blog.JPEG', '', '2017-04-03 09:29:06', '2017-04-03 09:29:06'),
(93, 34, '', '1491282688_image_blog.JPEG', '', '2017-04-04 05:11:28', '2017-04-04 05:11:28'),
(94, 34, 'testng blog.........', '', '', '2017-04-04 05:16:15', '2017-04-04 05:16:15'),
(95, 34, 'post', '', '', '2017-04-04 06:43:35', '2017-04-04 06:43:35'),
(96, 34, '<img alt="ð" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f600.png"><img alt="ð¬" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f62c.png"><img alt="ð" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f601.png"><img alt="ð" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f602.png">', '', '', '2017-04-04 09:40:44', '2017-04-04 09:40:44'),
(97, 34, '', '1491299552_image_blog.JPEG', '', '2017-04-04 09:52:32', '2017-04-04 09:52:32'),
(98, 34, '', '1491299668_image_blog.JPEG', '', '2017-04-04 09:54:28', '2017-04-04 09:54:28'),
(99, 34, 'nice :)', '1491313256_image_blog.JPEG', '', '2017-04-04 13:40:56', '2017-04-06 05:47:47'),
(101, 258, 'This is my First Blog', '1491374286test.jpg', '', '2017-04-05 06:38:06', '2017-04-05 06:38:06'),
(102, 34, 'Test blog', '1491374431test.jpg', '', '2017-04-05 06:40:31', '2017-04-05 06:40:31'),
(103, 258, 'test text blog edit', '', '', '2017-04-05 06:45:44', '2017-04-05 06:51:30'),
(104, 250, 'This is my post<br>', '', '', '2017-04-05 10:03:52', '2017-04-05 10:03:52'),
(105, 250, 'test blog 2<br>', '', '', '2017-04-05 10:26:04', '2017-04-05 10:26:04'),
(108, 268, 'hello friends...', '', '', '2017-04-06 09:36:39', '2017-04-06 09:36:39'),
(109, 262, '', '1491476587_image_blog.JPEG', '', '2017-04-06 11:03:07', '2017-04-06 11:03:07'),
(110, 34, '', '1491487398_image_blog.JPEG', '', '2017-04-06 14:03:18', '2017-04-06 14:03:18'),
(111, 262, '', '1491487859_image_blog.JPEG', '', '2017-04-06 14:10:59', '2017-04-06 14:10:59'),
(112, 262, '', '1491487982_image_blog.JPEG', '', '2017-04-06 14:13:02', '2017-04-06 14:13:02'),
(113, 262, '', '1491488432_image_blog.JPEG', '', '2017-04-06 14:20:32', '2017-04-06 14:20:32'),
(114, 262, '', '1491488710_image_blog.JPEG', '', '2017-04-06 14:25:10', '2017-04-06 14:25:10'),
(115, 262, '', '1491488751_image_blog.JPEG', '', '2017-04-06 14:25:51', '2017-04-06 14:25:51'),
(116, 262, '', '1491489004_image_blog.JPEG', '', '2017-04-06 14:30:04', '2017-04-06 14:30:04'),
(117, 272, 'Yesterday I went Easter Egg hunting.&nbsp;&nbsp;Today I learned a lot about nature.', '149178417720170408_102805.jpg', '', '2017-04-10 00:29:37', '2017-04-10 00:29:37'),
(125, 34, '', '1491894978_image_blog.JPEG', '', '2017-04-11 07:16:18', '2017-04-11 07:16:18'),
(126, 34, '', '1491895247_image_blog.png', '', '2017-04-11 07:20:47', '2017-04-11 07:20:47'),
(127, 34, '', '1491896118_image_blog.png', '', '2017-04-11 07:35:18', '2017-04-11 07:35:18'),
(128, 34, '', '1491915669_image_blog.png', '', '2017-04-11 13:01:09', '2017-04-11 13:01:09'),
(129, 34, 'gshhsjdk', '', '', '2017-04-14 11:20:48', '2017-04-14 11:20:48'),
(130, 34, 'gdjjdkdkd', '', '', '2017-04-14 11:21:01', '2017-04-14 11:21:01'),
(131, 34, 'ð', '', '', '2017-04-17 05:22:44', '2017-04-17 05:22:44'),
(132, 34, 'hey friendzz', '', '', '2017-04-18 08:55:36', '2017-04-18 08:55:36'),
(133, 34, '', '1492505832_image_blog.JPEG', '', '2017-04-18 08:57:12', '2017-04-18 08:57:12'),
(134, 34, '', '1492505874_image_blog.JPEG', '', '2017-04-18 08:57:55', '2017-04-18 08:57:55'),
(135, 238, '', '1492531474_image_blog.JPEG', '', '2017-04-18 16:04:34', '2017-04-18 16:04:34'),
(136, 238, '', '1492531544_image_blog.JPEG', '', '2017-04-18 16:05:44', '2017-04-18 16:05:44'),
(137, 238, '', '1492531624_image_blog.JPEG', '', '2017-04-18 16:07:04', '2017-04-18 16:07:04'),
(138, 238, '', '1492533019_image_blog.JPEG', '', '2017-04-18 16:30:19', '2017-04-18 16:30:19'),
(139, 238, '', '1492533039_image_blog.JPEG', '', '2017-04-18 16:30:39', '2017-04-18 16:30:39'),
(140, 238, 'gytfj hv', '', '', '2017-04-18 16:35:03', '2017-04-18 16:35:03'),
(141, 34, '', '1492664717_image_blog.JPEG', '', '2017-04-20 05:05:17', '2017-04-20 05:05:17'),
(142, 282, '', '1493263222_image_blog.JPEG', '', '2017-04-27 03:20:22', '2017-04-27 03:20:22'),
(143, 34, '<b>hello</b> my dear friends.', '', '', '2017-05-01 07:41:04', '2017-05-01 07:41:04'),
(144, 268, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; hi&nbsp;&nbsp;&nbsp;&nbsp; <br>', '', '', '2017-05-01 12:21:51', '2017-05-01 12:21:51'),
(145, 34, 'hi &nbsp; &nbsp;<div><br></div><div><br></div><div><br></div><div><br></div>', '', '', '2017-05-01 13:03:59', '2017-05-01 13:03:59'),
(146, 252, '', '1493985369_image_blog.JPEG', '', '2017-05-05 11:56:09', '2017-05-05 11:56:09'),
(147, 252, 'I m happy ð', '', '', '2017-05-05 11:56:43', '2017-05-05 11:56:43'),
(148, 252, '', '1493985460_image_blog.JPEG', '', '2017-05-05 11:57:40', '2017-05-05 11:57:40'),
(149, 252, '', '1493986146_image_blog.JPEG', '', '2017-05-05 12:09:06', '2017-05-05 12:09:06'),
(150, 282, 'dghyuh', '', '', '2017-05-06 12:53:36', '2017-05-06 12:53:36'),
(151, 282, 'Hello', '1494382542_image_blog.null', '', '2017-05-10 02:15:42', '2017-05-10 02:15:42'),
(152, 34, 'hdjsjsu', '', '', '2017-05-10 05:20:19', '2017-05-10 05:20:19'),
(153, 34, 'hello', '', '', '2017-05-10 06:56:37', '2017-05-10 06:56:37'),
(154, 34, 'gzjgbz', '', '', '2017-05-10 06:59:29', '2017-05-10 06:59:29'),
(155, 34, 'qedxfg', '', '', '2017-05-10 07:02:14', '2017-05-10 07:02:14'),
(156, 34, 'image', '1494405736_image_blog.png', '', '2017-05-10 08:42:16', '2017-05-15 10:24:26'),
(157, 34, 'hello', '', '', '2017-05-10 10:44:42', '2017-05-15 10:23:33'),
(158, 282, '', '1495204762_image_blog.png', '', '2017-05-19 14:39:22', '2017-05-19 14:39:22'),
(159, 34, '', '1496209719_image_blog.JPEG', '', '2017-05-31 05:48:39', '2017-05-31 05:48:39'),
(160, 300, '', '1496929224_image_blog.JPEG', '', '2017-06-08 13:40:24', '2017-06-08 13:40:24'),
(161, 34, '', '1497591189_image_blog.JPEG', '', '2017-06-16 05:33:09', '2017-06-16 05:33:09'),
(162, 34, '', '1497591252_image_blog.JPEG', '', '2017-06-16 05:34:12', '2017-06-16 05:34:12'),
(163, 34, '', '1497592209_image_blog.JPEG', '', '2017-06-16 05:50:09', '2017-06-16 05:50:09'),
(164, 34, '', '1497592483_image_blog.JPEG', '', '2017-06-16 05:54:43', '2017-06-16 05:54:43'),
(165, 34, 'hello', '', '', '2017-06-16 06:10:20', '2017-06-16 06:10:20'),
(166, 34, '', '1497593435_image_blog.JPEG', '', '2017-06-16 06:10:35', '2017-06-16 06:10:35'),
(167, 34, 'chgh', '', '', '2017-06-16 06:39:56', '2017-06-16 06:39:56'),
(168, 34, '', '1497953619_image_blog.JPEG', '', '2017-06-20 10:13:39', '2017-06-20 10:13:39'),
(169, 34, '', '1497954101_image_blog.JPEG', '', '2017-06-20 10:21:41', '2017-06-20 10:21:41'),
(170, 34, '', '1497954294_image_blog.JPEG', '', '2017-06-20 10:24:55', '2017-06-20 10:24:55'),
(171, 34, '', '1497954941_image_blog.JPEG', '', '2017-06-20 10:35:41', '2017-06-20 10:35:41'),
(172, 34, '', '1497955060_image_blog.JPEG', '', '2017-06-20 10:37:40', '2017-06-20 10:37:40'),
(173, 34, '', '1497955625_image_blog.JPEG', '', '2017-06-20 10:47:05', '2017-06-20 10:47:05'),
(175, 34, '', '1498109077_image_blog.png', '', '2017-06-22 05:24:37', '2017-06-22 05:24:37'),
(177, 34, 'test blog<div><br></div>', '', '', '2017-07-03 12:53:21', '2017-07-03 12:53:21'),
(178, 34, 'One More test blog', '', '', '2017-07-04 09:10:29', '2017-07-04 09:10:29'),
(179, 293, 'This is test blog', '', '', '2017-07-04 09:10:51', '2017-07-04 09:10:51'),
(180, 34, '<img alt="â" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/264c.png"><img alt="â" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/264c.png"><img alt="â" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/264b.png"><img alt="â" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/2649.png"><img alt="ð" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f54e.png"><img alt="â" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/264c.png"><img alt="ð" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f6d0.png"><img alt="ð" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f49f.png"><img alt="ð" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f498.png"><img alt="ð" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f549.png"><img alt="â¡" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/2721.png"><img alt="â" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/2653.png"><img alt="â" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/269b.png"><img alt="â¯" class="emojioneemoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/262f.png">nnf u6&nbsp; 67j j6j66jjj<br>', '', '', '2017-07-13 13:14:07', '2017-07-13 13:14:07');

-- --------------------------------------------------------

--
-- Table structure for table `language`
--

CREATE TABLE `language` (
  `id` int(11) NOT NULL,
  `locale` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `language`
--

INSERT INTO `language` (`id`, `locale`) VALUES
(1, 'English'),
(2, 'Spanish'),
(3, 'Chinese');

-- --------------------------------------------------------

--
-- Table structure for table `links`
--

CREATE TABLE `links` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `long_url` varchar(100) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `customize` varchar(100) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `hits` int(11) DEFAULT '0',
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `links`
--

INSERT INTO `links` (`id`, `user_id`, `long_url`, `title`, `customize`, `tag`, `hits`, `created_at`, `updated_at`) VALUES
(1, 389, 'http://test.com', 'test', 'http://202.164.36.14/shorten/public/tiny/TfzjJG8', 'testing', 5, '2017-08-29 13:36:10', '2017-08-29 14:33:30'),
(3, 394, 'http://www.yahoo.com', 'yahoo short code', 'http://202.164.36.14/shorten/public/tiny/6taAjsu', '111', 6, '2017-08-29 14:29:04', '2017-08-29 14:34:56'),
(4, 394, 'http://isicsb.iotis.com/', 'iotis.com', 'http://202.164.36.14/shorten/public/tiny/fKYiHR0', 'test1,test2', 1, '2017-08-29 14:37:53', '2017-08-29 14:38:35'),
(8, 389, 'http://yahoo.com', 'yahoo', 'http://202.164.36.14/shorten/public/tiny/9aRCi65', 'yahoo test', 1, '2017-08-29 14:55:58', '2017-08-29 14:56:09');

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `id` int(11) NOT NULL,
  `token` varchar(300) NOT NULL,
  `user_id` int(11) NOT NULL,
  `device_id` varchar(255) DEFAULT NULL,
  `last_modified` varchar(300) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`id`, `token`, `user_id`, `device_id`, `last_modified`, `status`) VALUES
(1141, 'IuGiZEAckjdmQMib0XF64fWaRNJMN33oNN9jM7UH', 34, '7F5FFA94-3397-4EE3-870B-AE65B4976400', '1492064848', 0),
(1162, 'LElp0hv8TwKwUQMmB7R8fl2tCRYPtclgn7qoBUWv', 34, 'E8668880-102F-4E31-84E8-52E373F86546', '1492163541', 0),
(1163, '4aIRgTd3l6rmAVatgNzWD3uZSLubxiBE1XtUJagY', 262, 'C4:0B:CB:6B:AA:17', '1492167707', 0),
(1174, 'djSJVaNEAuhUjld7TC7HcG7ewXXtNG9Ij5IBsW2f', 238, 'A4:08:EA:A9:49:5F', '1492553594', 0),
(1213, 'f6qGB80JXqUiMkXfSA89MHJ5SQ35oEA9fD56M1OO', 34, '50.45.e5.45', '1492761291', 0),
(1214, '7YpRIBZAIiEBLW5v1sbeZ7ur2NGLyviE9VSZUCq8', 268, '50.45.e5.45', '1494221543', 0),
(1217, 'gNF6xzLRYbmfcbVhABJaX3OOTpPXqvNQx96ZugHP', 284, 'A4:08:EA:A9:49:5F', '1494736190', 0),
(1219, 'hyBhmyTOk9e9zTXHEloFlIM5uAxlKc7E1YttqkY1', 285, 'D8:C4:E9:FC:EC:61', '1493616163', 0),
(1220, 'suU4GDfY4dAhZOrkmuql7luXyr5lxZk0Un2w5GvB', 286, 'A4:08:EA:A9:49:5F', '1493301366', 0),
(1224, 'MhGz4ONlCprwCIcnSlHDcVfnletwz2pveafSLlkU', 287, 'D8:C4:E9:FC:EC:61', '1493639865', 0),
(1228, 'JNZ6axOVFHGVDz60tPT8aziBS3molHQtl5gCvIuR', 268, 'D8:C4:E9:FC:EC:61', '1497591085', 0),
(1241, 'nWOtBvTvwHxpvfu8HLEKXsd9ARrsIZH84Kz0VJnZ', 268, '88:C9:D0:B7:29:9B', '1494828003', 0),
(1250, '9p0ztnULsqopQwnx8Vmaf8GwFFBp3A7izq2yk6gI', 282, '7C98343B-B77E-49CE-B11F-F873C7E1744C', '1494377067', 0),
(1251, '72c9qBLV0rdmpc9c5zffMf8WkhgCaVTQAeumEQw1', 282, '3667E272-E918-4AA0-A3B7-8640436350D1', '1494382119', 0),
(1252, 'UkwKNdicVkA7dXM5zF1ARgLYSe1nEE760d6eqkMT', 282, 'E23E1AB9-90AB-474B-8931-AA344EC7ADB1', '1494383493', 0),
(1256, 'lsKEB3cATaQjTmMiKcDVGQcSnCP9I5gKm290ndsu', 34, '5A725225-2DFA-45B3-92E6-6E5B958C5839', '1494411039', 0),
(1258, '2mQ2IT0Jcpxb0EXunqQhqPACynqOr41iH3YqYBd3', 34, '1D390E7B-A7D1-4C80-9C38-BC14061761B2', '1497528728', 0),
(1259, 'BPe6uYLP58TLGTNqHOCPXW81rlaMYUssumu9DQd3', 34, 'EA68C42D-7A56-4A7D-B511-10160F6A9D9F', '1494415648', 0),
(1260, 'Ym1VywlBT4wkxFO5MpE7Bo4K3vVIpnWWnLAWaeku', 34, 'ffb154eb32c571d3175f2a795059e320c841f472', '1494411485', 0),
(1262, 'a6h0Qtaap3LiDeFPsU9Kcr8GeqGWxI4W9Iiw9IRC', 291, '64:CC:2E:16:CC:BB', '1494491219', 0),
(1264, '9IF8pdjrdm3oEjVj4YffTs8o2frM59ixZgUez7aT', 34, 'DB2E97E1-1862-4440-B7B3-6B86FB737F59', '1495132664', 0),
(1267, 'Tkr36mB1MJFqkN6yoWuRK7XNm4hhX5N98mIlK1Rh', 282, 'A4:08:EA:A9:49:5F', '1501273025', 0),
(1268, '36rkON4WYsFLE9O4x0htOgdPDbNYpmMWNxqsNKpU', 34, '123456789', '1495687178', 0),
(1273, 'xJbir5k2Mionf0GpCoIWuyyS1kjycwBIQKVPQHeg', 34, '53E3F1B6-2CB5-41EC-A584-45FECBD9DA99', '1495101148', 0),
(1274, 'EGdBbpHWKWM8FxUjU2KTXKYF3VfbJWmBLaj94qJE', 34, '64417D7C-399F-4C2B-B666-BAA069C5E97F', '1495107498', 0),
(1275, '4MnlMVcSH0mAaWWzd88gSwkp5y6FVI5SsGUpTaV6', 282, '566540C5-86BA-4281-AC3A-634A3816F8BC', '1495204941', 0),
(1276, 'wGWAEZz7gU9y72eIU1Gva3NDhMtY6cra5mFnYHqV', 282, 'DBC5E447-01C1-40DE-8A09-B9256615825C', '1496200424', 0),
(1277, 'rU1Ngrjss38O4NUjj8YaJeYEMSmxgLHPGELQ273g', 34, '1', '1495798657', 0),
(1278, 'v4QW0sxhimr6AJFJPi1j06bwNu4yuyq3iB0r5vBg', 34, '64:CC:2E:19:03:DF', '1495722698', 0),
(1281, 'wPv0yAeQGNsrQRchT4kZtap3tliFlJcoesM0H0H4', 34, 'F8:A9:D0:44:0C:F5', '1501853322', 0),
(1282, 'Quhr2Kg8lQk7bxgSYwWEoDdFbBoVDezs6hvUNeb5', 34, 'F99182BA-683E-4988-9965-F76FDC7E2A16', '1496060077', 0),
(1283, '28WZPruDGvBFUV2GviJ9zNBeAuFet3PrKuJM1uQe', 34, 'CC31DA3A-B5FE-48B8-9117-E2DE3B8DF8DF', '1500275478', 0),
(1284, '3c1pz3iiUH0PupY3BW86nQvkYBESRgHdK7UURMBC', 294, 'C0:9F:05:66:5B:52', '1496131236', 0),
(1286, 'jXFNwAtUYEpSsuyGkfB349Q0vRZFzHSvjkB40DEn', 296, 'AC:37:43:51:D1:B9', '1496394143', 0),
(1287, '2fVmaZEthVo9quu9wQkuZlP7ieouFQDava3rHILK', 297, '5C:70:A3:64:C0:DB', '1496640212', 0),
(1288, 'waRsUF4HosqyBqBYshmmcI4U1LjNiwibZthUBJGd', 245, 'E1F7BCC9-C395-4FCC-92BA-77D96415C66B', '1496681675', 0),
(1289, '0Bvy5Se8VW7Sk8mjOjhW8kewITSY4cHligctaidM', 282, '274327B5-4C08-4DED-B70B-F1D15598D6BA', '1496800474', 0),
(1292, 'C3peK3LG90djgnqqeQInQP8GVLvfqTIHXHwn7UBf', 309, '40:D3:AE:29:90:9A', '1497288659', 0),
(1293, 'qUn0DJXk84C1OrCWR9czNcd64GiMk4WoaPGSLSRU', 311, '2C:0E:3D:09:C1:1D', '1497097713', 0),
(1294, 'UOZSf9GkDMWz0Q3ZBWwL9bgdgCnVa0nqtMlSZaaL', 313, '9C:5C:F9:C5:FD:1D', '1497114004', 0),
(1295, 'AItT3gvVziG8uLb412CaMzTq6mvLCz7KKXVM8XUB', 314, 'A0:CC:2B:08:2C:1A', '1497115576', 0),
(1296, '3JmbG7RoRio6BRrNPn96zGJLq7VaXLWMyXg5zmob', 315, '2C:0E:3D:F6:74:60', '1497135900', 0),
(1297, 'oxv18CLMmXx4XQN4jxQ3ZICBcEwAHsvY0asqa5zM', 319, '48:5A:3F:6D:64:4D', '1497192906', 0),
(1298, 'lS4mPKAJiMeMXTGH5Uns8TK764om2gtrTsJ6XVAd', 34, '3C42DBEF-CE64-4952-9D9F-B5876A26F805', '1497348859', 0),
(1299, 'hi3lipjciO1TEJMhXbwIaT3X8i69xPjz5qlMHtlA', 331, 'AC:5F:3E:5B:FB:66', '1497420188', 0),
(1301, 'Q1FW3uph1DDcPJmQ5t9bCDS68kK3402aEidJ001w', 34, 'AC:37:43:51:D1:B9', '1497591684', 0),
(1302, 'lBozAGHFKljYqswsz3uWyKNM7xFYn5G3ouxoinw0', 34, 'D8:C4:E9:FC:EC:61', '1497593772', 0),
(1303, 'x8AVG3F75Q7GOYbO3HmHLlZw6SEN6sY5g4hRQLUh', 336, 'FC:DB:B3:1B:27:07', '1497759394', 0),
(1304, '6UxjmlXf39YEkxIfWokIUbkGn31WwnDco5wiYdVR', 341, 'AC:5F:3E:8A:D0:7E', '1498728594', 0),
(1305, 'snjOK69poKpzpWo2Q9b4hw7i0lDHSxmve9RrVa77', 342, '74:4A:A4:90:D1:54', '1497965942', 0),
(1308, 'IRsDvgLEb4VLMDdyofaekV9B17dKnAwrdkmYJnbT', 34, '175C126D-2460-40A8-B0FB-9F2325EE7E02', '1498053610', 0),
(1316, 'ZUc7ubsKU8CFoGYyHmBu4bTCGIY7JIokxGlrnIOT', 346, '14:1F:78:E8:F7:CF', '1498400374', 0),
(1317, 'eThpDpSugUU95XwBSGoXhHzCCK0ZlzHSxGeV0hXq', 347, '80:7A:BF:3D:69:9D', '1498202308', 0),
(1318, 'UEayyx3MI7WuxJOhxWRZ0LXSDwvARW9ZNFRavSpd', 307, '37EFF2D7-0D10-4A59-87DA-353353B9567F', '1498330634', 0),
(1319, 'KPjSX844zKQPI8kd6IayLYuFJiCF68gz7HYzwi3R', 351, '4C:66:41:AA:84:C5', '1498405885', 0),
(1320, 'gRAigku5jajiYMFpZT6I7hdI8weBkayVIV56Egzc', 34, '3FC32102-54B8-4B81-93A5-DF10F78E3AAB', '1502260784', 0),
(1321, 'gzWxZRZhAESBdJKxXm8NqSGMS5qOBE2jAvDmzn67', 34, '88:C9:D0:B7:29:9B', '1498565046', 0),
(1322, '7xQjFSu7CeyUKkWRbX3xYxPErrDKZmu1DrgEycjM', 307, '50E48254-F68B-4C3B-A62C-4454845A8314', '1498585685', 0),
(1323, 'Ql2hbz3YiYGVavM5Xbv1JoXIvqO50AGXntvMi0bp', 355, 'EC:9B:F3:43:3A:44', '1498620339', 0),
(1324, 'EPRhuVBY6N0D2dI7qM2rytxmW6sdVTrnnyah4YDi', 359, '00:AE:FA:51:42:99', '1498702834', 0),
(1325, 'NsrKceWeeK391K2bHngNbhJjp7kw0Amq71JcVWP6', 360, 'A4:08:EA:5A:73:91', '1498706347', 0),
(1326, 'CRAjhYWyWtUym14u7fFsZE31xFHaOwPieUFob87U', 364, '00:AE:FA:E8:E6:3A', '1498765669', 0),
(1327, 'S9aMNsEDngXx7DN9laRFTd4tvQQ3ra9gsB9vAvrM', 365, '90:B6:86:B6:85:F7', '1498774294', 0),
(1328, 'EFJoPEke1XksMSZI9lKVsg29GOgdKznkxJ0lPywl', 366, '2C:0E:3D:A1:19:34', '1499371511', 0),
(1330, 'bAwOYb9OoerUy6KfPmfhzfYSK6eXfz0KsIhQj4Wq', 374, 'E8:50:8B:00:3A:75', '1498948061', 0),
(1331, 'urSWiBiry7xaeAm1QhZFqXeD8ngBxLfFQSPPXjnt', 376, '84:7A:88:53:33:26', '1499781949', 0),
(1332, 'Vo3CITI8jIp24YmMQFiSso5QB8Ys7PmXUQztuGNo', 377, '28:BE:03:CA:42:C1', '1498967671', 0),
(1334, 'kuIudx7ok6EVKwdwUBFHRp0kYg3udbP685KNecQR', 384, '34:BB:26:F1:3B:A8', '1499170067', 0),
(1335, 'ieWS86CzRG0T4SWvXCZ5ZqMIWsZ24vZN394eSHkd', 34, '64:CC:2E:16:CC:BB', '1501822223', 0),
(1336, 'pPe7nDgOo35QL3xOYGncCgpOVV5WS60bB9nFpWVp', 388, 'F4:CB:52:7E:E4:89', '1502615498', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `reset_password_token` varchar(255) DEFAULT NULL COMMENT '0=already reset password and token removed, token=email sent with link, NULL=no request for reset password till now',
  `last_active` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `role`, `remember_token`, `reset_password_token`, `last_active`, `status`, `created_at`, `updated_at`) VALUES
(389, 'sarabjeet.impinge@gmail.com', '$2y$10$7dkMhm7NzSG8Wd3fxmfEzuvkTnW.hftdTLgU4gaDfd5fEaAerMTkW', NULL, 'Wuw6OiKHekaMTu7Fb2P8SHxY8CDSHfIlLDrqoOZK3TAIkJEtunF6OZ6ghGpV', NULL, '2017-08-29 14:57:40', 0, '2017-08-29 09:43:36', '2017-08-29 14:57:40'),
(390, 'gagandeep@impingeonline.com', '$2y$10$wp9F9CnmvGGQoMkGqaLc2Oy021vWYY/8dEzMixNY7WsCXaU1tn7Jm', NULL, 'aqlo3n5aOUbafRvS3GQlOJePUJOWhVHXLWNQsJ4P0zpuk1ERyZujz6s9sxoO', NULL, '2017-08-29 14:27:23', 0, '2017-08-29 13:07:46', '2017-08-29 14:27:23'),
(394, 'test@test.com', '$2y$10$tYvcD6begmnazfJ4fAm94O15DL6vjFcpceJbe7aXQn.mC7gujMg.e', NULL, 'tHKy5ZT8Hva8eaEdPSPCfxRleUUKDEGHZfHRZpfxNYyDQqzYPPvXtFmvWeym', NULL, '2017-08-29 15:04:24', 0, '2017-08-29 14:27:59', '2017-08-29 15:04:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=181;
--
-- AUTO_INCREMENT for table `language`
--
ALTER TABLE `language`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `links`
--
ALTER TABLE `links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `session`
--
ALTER TABLE `session`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1337;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=395;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
