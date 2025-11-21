-- CreateEnum
CREATE TYPE "ESensorType" AS ENUM ('MOISTURE', 'TEMPERATURE', 'HUMIDITY');

-- CreateEnum
CREATE TYPE "ERelayStatus" AS ENUM ('ACTIVE', 'NON_ACTIVE');

-- CreateTable
CREATE TABLE "RelayActifity" (
    "id" TEXT NOT NULL,
    "status" "ERelayStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RelayActifity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SensorActifity" (
    "id" TEXT NOT NULL,
    "sensor_name" TEXT NOT NULL,
    "sensor_value" DOUBLE PRECISION NOT NULL,
    "sensor_type" "ESensorType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SensorActifity_pkey" PRIMARY KEY ("id")
);
