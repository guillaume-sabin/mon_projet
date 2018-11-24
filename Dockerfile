FROM php:7.2.6-apache

RUN apt-get update && apt-get install -y git libpq-dev && docker-php-ext-install pdo pdo_pgsql

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer --version

# Set timezone
RUN rm /etc/localtime
RUN ln -s /usr/share/zoneinfo/Europe/Paris /etc/localtime
RUN "date"

#RUN echo 'alias sf="php app/console"' >> ~/.bashrc
RUN mkdir -p /usr/www/
COPY . /usr/www/

WORKDIR /usr/www
RUN composer install

RUN useradd -m myuser
USER myuser
CMD [ "composer", "start" ]
EXPOSE 8008
