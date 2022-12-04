#!/bin/bash
#
#This is the install script for docker

#Updating and Upgrading Local System
echo "Updating and Upgrading Local System"
sudo pacman -Syu

#Installing docker and Docker Components
echo "Installing Docker and Docker Components"
sudo pacman -S docker-compose docker 
