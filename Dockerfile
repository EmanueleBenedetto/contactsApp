# ---- Build Stage ----
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app for production
RUN npm run build

# ---- Production Stage ----
FROM nginx:alpine

# Remove default nginx index page and replace with our app's build
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from the first stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
