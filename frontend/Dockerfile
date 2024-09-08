# frontend/Dockerfile

# Step 1: Build the Vite app
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app for production
RUN npm run build

# Step 2: Serve the built app with a static server
FROM node:18 AS runner

# Install a simple static file server
RUN npm install -g serve

# Set the working directory for the new container
WORKDIR /app

# Copy the build files from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port the app will run on
EXPOSE 3000

# Command to serve the build files
CMD ["serve", "-s", "dist", "-l", "3000"]
