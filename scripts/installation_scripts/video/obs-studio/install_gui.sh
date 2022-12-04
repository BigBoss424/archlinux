#!/bin/bash 
#
#Creating the install script using whiptail. 
#
#

if(whiptail    --title "Install OBS Studio" --yesno "Would you like to install OBS Studio?" 7 80)
then
    echo "User selected Yes"
    sudo pacman -S obs-studio
else
    echo "User selected No"
fi



