# This one is for production!
# A) BUILD PHASE
FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
# Build the production assets:
RUN npm run build


# B) RUN PHASE
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# Copy over all production assets of the app
COPY --from=0 /app/build /usr/share/nginx/html
# No need to specify RUN or CMD, nginx will initiate run for us
