-- CreateTable
CREATE TABLE `RelayActifity` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('ACTIVE', 'NON_ACTIVE') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SensorActifity` (
    `id` VARCHAR(191) NOT NULL,
    `sensor_name` VARCHAR(191) NOT NULL,
    `sensor_value` DOUBLE NOT NULL,
    `sensor_type` ENUM('MOISTURE', 'TEMPERATURE', 'HUMIDITY') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
