# Makefile for managing Docker Compose commands

include .env
export

# Variables
COMPOSE=docker-compose
SERVICE=$(SERVICE_NAME)
IMG=$(IMAGE)

# Define color codes
BLUE = \033[0;34m
YELLOW = \033[1;33m
RESET = \033[0m


# Function to print logs in a formatted style
define LOG_MSG
	@echo "$(BLUE)[Makefile]$(RESET) | $(YELLOW)($(shell date '+%Y-%m-%d %H:%M:%S'))$(RESET): $(1) $(SERVICE) 🐳"
endef

.PHONY: all build up upb up-no-cache down logs logs-follow build-no-cache restart clean help

# Default target
all: help

# Build the Docker image
build:
	$(call LOG_MSG,Building the Docker image)
	$(COMPOSE) build

# Build without cache
build-no-cache:
	$(call LOG_MSG,Building the Docker image without cache)
	$(COMPOSE) build --no-cache

# Clean up node modules and lock files
clean:
	$(call LOG_MSG,Cleaning up node modules and lock files)
	chmod +x scripts/clean.sh
	./scripts/clean.sh

# Clean up Docker images and containers
clean-container:
	$(call LOG_MSG,Cleaning up Docker containers and images)
	$(COMPOSE) down --rmi all -v --remove-orphans

# Bring up the services in detached mode
up:
	$(call LOG_MSG,Bringing up services)
	$(COMPOSE) up -d

# make down, make build, skip updates, make up, make logs
upp:
	$(call LOG_MSG, Rebuild & Restarting services)
	$(COMPOSE) down
	$(COMPOSE) build --no-cache
	SKIP_UPDATE=true $(COMPOSE) up -d
	$(COMPOSE) logs -f

# make down, make build, make up with latest updates, make logs
upd:
	$(call LOG_MSG, Rebuild & Restarting services)
	$(COMPOSE) down
	$(COMPOSE) build --no-cache
	SKIP_UPDATE=false $(COMPOSE) up -d
	$(COMPOSE) logs -f

# Bring up the services with build
upb:
	$(call LOG_MSG,Bringing up services with build)
	$(COMPOSE) up --build

# Bring up the services without using cache
up-no-cache:
	$(call LOG_MSG,Bringing up services without using cache)
	$(COMPOSE) up --build --no-cache

# Enter bash in container
bash:
	$(call LOG_MSG,Entering bash in container)
	@$(COMPOSE) exec $(SERVICE) bash

# Restart the services
restart:
	$(call LOG_MSG,Restarting services)
	$(COMPOSE) down
	$(COMPOSE) up -d

refresh:
	$(call LOG_MSG,Refreshing services)
	$(COMPOSE) down
	# Run clean script
	$(MAKE) clean-files
	SKIP_UPDATE=true $(COMPOSE) up -d
	$(COMPOSE) logs -f

# Bring down the services
down:
	$(call LOG_MSG,Bringing down services)
	$(COMPOSE) down

# View logs for all services
logs:
	$(call LOG_MSG,Showing logs)
	$(COMPOSE) logs -f

# Follow logs for all services
logs-follow:
	$(call LOG_MSG,Following logs with timestamps)
	$(COMPOSE) logs -f -t

skip-on:
	$(call LOG_MSG,Toggling update status)
	SKIP_UPDATE=true
	$(call Skipping updates is now ON (SKIP_UPDATE=$(SKIP_UPDATE)))

skip-off:
	$(call LOG_MSG,Toggling update status)
	SKIP_UPDATE=false
	$(call Skipping updates is now OFF (SKIP_UPDATE=$(SKIP_UPDATE)))

help:
	@echo ""
	@echo "Available Makefile targets:"
	@echo "-----------------------------------------------------------------------"
	@echo "  build             Build the Docker images."
	@echo "  build-no-cache    Build the Docker images without using cache."
	@echo "  up                Bring up the services in detached mode."
	@echo "  upb               Bring up the services with build."
	@echo "  up-no-cache       Bring up the services without using cache."
	@echo "  upp               Rebuild, skip updates, and restart services."
	@echo "  upd               Rebuild, update, and restart services."
	@echo "  restart           Restart the services."
	@echo "  down              Bring down the services."
	@echo "  logs              View logs for all services."
	@echo "  logs-follow       Follow logs with timestamps."
	@echo "  bash              Enter bash in the container."
	@echo "  clean             Remove containers, images, volumes, and orphans."
	@echo "  refresh           Refresh services (clean script + up)."
	@echo "  help              Show this help message."
	@echo "-----------------------------------------------------------------------"
	@echo "Usage:"
	@echo "  Run 'make <target>' to execute the corresponding command."
	@echo ""
