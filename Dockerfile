FROM node:12.18.0-alpine3.12

WORKDIR /usr/app

# Set up environment variables
ENV PATH ./node_modules/.bin:$PATH
ENV NODE_PATH ./

# Copy service source
COPY package.json yarn.lock .yarnrc .sequelizerc dist ./

# Copy executable bin
COPY src/bin bin

# Create a new group and add new user
RUN addgroup -S user && adduser -S -g user user && chown -R user:user .

# Switch to new user
USER user

# Install dependencies
RUN yarn install --prod --no-progress --prefer-offline --ignore-optional --update-checksums

# Start the service
CMD ["node", "./bin/www"]
