# Use Node.js image
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the frontend app
RUN npm run build

# Use Nginx to serve the static build files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
