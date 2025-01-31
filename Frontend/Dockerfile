# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Copy the package.json and package-lock.json files
COPY Frontend/package.json Frontend/package-lock.json* ./
# Install all the dependencies
RUN npm install

# Copy the rest of the source code
COPY Frontend/ ./

# Build the Angular project
RUN npx ng run Frontend:build:production

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Remove the default Nginx files.
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/frontend/browser/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
