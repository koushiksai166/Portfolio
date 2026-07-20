# Use this absolute path: d:\Koushik\Portfolio\Dockerfile
# STAGE 1: BUILD - Build our React/Vite application
FROM node:20-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package files FIRST (better for Docker caching)
# This layer only rebuilds if package.json changes
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the project (creates /app/dist folder)
RUN npm run build

# ==================================================================================
# STAGE 2: PRODUCTION - Serve static files with Nginx (tiny final image)
FROM nginx:alpine

# Copy our custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from the build stage to Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port Nginx will run on
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]