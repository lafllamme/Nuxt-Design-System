# Makefile for managing Docker Compose commands

include .env
export

# Variables
COMPOSE=docker-compose
SERVICE=$(SERVICE_NAME)
IMG=$(IMAGE)

# Define a function to echo messages with date
define ECHO_MSG
	@echo "$(1) $(SERVICE) 🐳 on $(shell date)"
endef

.PHONY: all build up upb up-no-cache down logs logs-follow build-no-cache restart clean help

# Default target
all: help

# Build the Docker image
build:
	$(call ECHO_MSG,Building the Docker image)
	$(COMPOSE) build

# Build without cache
build-no-cache:
	$(call ECHO_MSG,Building the Docker image without cache)
	$(COMPOSE) build --no-cache

# Bring up the services in detached mode
up:
	$(call ECHO_MSG,Bringing up services)
	$(COMPOSE) up -d

# Bring up the services with build
upb:
	$(call ECHO_MSG,Bringing up services with build)
	$(COMPOSE) up --build

# Bring up the services without using cache
up-no-cache:
	$(call ECHO_MSG,Bringing up services without using cache)
	$(COMPOSE) up --build --no-cache

# Enter bash in container
bash:
	$(call ECHO_MSG,Entering bash in container)
	@$(COMPOSE) exec $(SERVICE) bash

# Restart the services
restart:
	$(call ECHO_MSG,Restarting services)
	$(COMPOSE) down
	$(COMPOSE) up -d

# Bring down the services
down:
	$(call ECHO_MSG,Bringing down services)
	$(COMPOSE) down

# View logs for all services
logs:
	$(call ECHO_MSG,Showing logs)
	$(COMPOSE) logs -f

# Follow logs for all services
logs-follow:
	$(call ECHO_MSG,Following logs with timestamps)
	$(COMPOSE) logs -f -t

# Clean up Docker images and containers
clean:
	$(call ECHO_MSG,Cleaning up Docker containers and images)
	$(COMPOSE) down --rmi all -v --remove-orphans

# Help command to display available targets
help:
	@echo "Available Makefile targets:"
	@echo "  build           Build the Docker images."
	@echo "  build-no-cache  Build the Docker images without using cache."
	@echo "  up              Bring up the services in detached mode."
	@echo "  upb             Bring up the services with build."
	@echo "  up-no-cache     Bring up the services without using cache."
	@echo "  restart         Restart the services."
	@echo "  down            Bring down the services."
	@echo "  logs            View logs for all services."
	@echo "  logs-follow     Follow logs with timestamps."
	@echo "  bash            Enter bash in container."
	@echo "  clean           Remove containers, images, volumes, and orphans."
	@echo "  help            Show this help message."
