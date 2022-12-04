#!/bin/bash
#
#
#This install script will help install i3wm. 

#Upgrading and Updating Local System
echo "Upgrading and Updating Local System"
sudo pacman -Syu 
#Installing i3
echo "Installing i3wm and packages"
sudo pacman -S i3blocks i3-gaps i3lock i3status i3status-rust i3-wm
