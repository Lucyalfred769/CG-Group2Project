# Use Node.js image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the backend port
EXPOSE 7241

# Command to run the app
CMD ["npm", "start"]
