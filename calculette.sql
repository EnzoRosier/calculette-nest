-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : Dim 30 avr. 2023 à 11:55
-- Version du serveur :  5.7.24
-- Version de PHP : 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `calculette`
--

-- --------------------------------------------------------

--
-- Structure de la table `fail`
--

CREATE TABLE `fail` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `fail`
--

INSERT INTO `fail` (`id`, `created_at`) VALUES
(1, '2023-04-24 19:01:44'),
(2, '2023-04-24 19:17:18'),
(3, '2023-04-24 19:39:24'),
(4, '2023-04-24 19:39:28'),
(5, '2023-04-24 19:39:28'),
(6, '2023-04-24 19:59:10'),
(7, '2023-04-24 19:59:11'),
(8, '2023-04-24 19:59:11'),
(9, '2023-04-24 20:01:38'),
(10, '2023-04-24 20:02:05'),
(11, '2023-04-24 20:03:38'),
(12, '2023-04-24 20:03:48'),
(13, '2023-04-24 20:05:50'),
(14, '2023-04-24 20:06:21'),
(15, '2023-04-24 20:07:25'),
(16, '2023-04-24 20:07:28'),
(17, '2023-04-24 20:14:28'),
(18, '2023-04-24 20:14:30'),
(19, '2023-04-24 20:15:04'),
(20, '2023-04-25 13:03:44'),
(21, '2023-04-25 13:04:38'),
(22, '2023-04-25 13:07:13'),
(23, '2023-04-25 13:23:45');

-- --------------------------------------------------------

--
-- Structure de la table `success`
--

CREATE TABLE `success` (
  `id` int(11) NOT NULL,
  `timeTakenMs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `success`
--

INSERT INTO `success` (`id`, `timeTakenMs`) VALUES
(1, 1000),
(2, 100),
(3, 100),
(4, 100),
(5, 100),
(6, 100),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 10000),
(19, 100000),
(20, 10000),
(21, 100),
(22, 100),
(23, 0),
(24, 10000),
(25, 10000),
(26, 10000),
(27, 1761),
(28, 1235),
(29, 59262);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `fail`
--
ALTER TABLE `fail`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `success`
--
ALTER TABLE `success`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `fail`
--
ALTER TABLE `fail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `success`
--
ALTER TABLE `success`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
