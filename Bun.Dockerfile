# Use the official Bun image as the base
FROM oven/bun:latest

# Set environment variables
ENV NODE_ENV=development
ENV HOST=0.0.0.0

# Create and set the working directory
WORKDIR /app

# Copy the entrypoint script
COPY scripts/entrypoint.sh /scripts/entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /scripts/entrypoint.sh

# Install the latest Nuxt.js globally using Bun
RUN bun add -g nuxt

# Expose necessary ports
EXPOSE 3000 24678

# Set the entrypoint
ENTRYPOINT ["/scripts/entrypoint.sh"]
