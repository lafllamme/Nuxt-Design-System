# Dockerfiles/PNPM.Dockerfile

# Use latest base image for compatibility | https://hub.docker.com/_/node
FROM node:23.4.0-slim AS base

# Set environment variables
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV=development
ENV HOST=0.0.0.0

# Enable Corepack (bundled with Node.js 16.13+)
RUN corepack enable

# Install the latest version of pnpm
RUN corepack prepare pnpm@latest --activate

# Set the working directory
WORKDIR /app

# Copy the entrypoint script
COPY scripts/entrypoint.sh /scripts/entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /scripts/entrypoint.sh


# Expose necessary ports
EXPOSE 3000 24678

# Set the entrypoint
ENTRYPOINT ["/scripts/entrypoint.sh"]
