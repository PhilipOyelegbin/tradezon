# Use official Node.js image
FROM node:18 AS builder

# Set the working directory
WORKDIR .

# Copy package.json and package-lock.json first (to leverage Docker cache)
COPY package.json package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of the app’s files
COPY . .

# Build the Vite app
RUN npm run build

# Use a lightweight web server for production
FROM nginx:alpine AS runner

# Copy the built files from the builder stage
COPY --from=builder ./dist /usr/share/nginx/html

# Expose the port Vite serves the app on
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

