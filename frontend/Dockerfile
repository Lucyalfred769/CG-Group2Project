# Use Node.js image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the frontend app
RUN npm run build

# Expose the frontend port
EXPOSE 3000

# Command to serve the app
CMD ["npx", "serve", "-s", "build"]
