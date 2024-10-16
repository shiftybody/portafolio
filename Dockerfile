# Use the PHP 5.4 image with Apache
FROM php:5.4-apache

RUN a2enmod rewrite

# Copy application files
WORKDIR /var/www/html
COPY . /var/www/html

# Expose port 80
EXPOSE 80