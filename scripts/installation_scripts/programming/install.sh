#! /bin/bash
#
#The purpose of this script is to install all packages that are 
#related to programming. 
#
#

echo "Welcome to the Programming Install Script"
#I would like to implement a choice menu to selecting which programs will
#be installed on the machine. 

#Updating machine
echo "Updating and Upgrading local machine..."
sudo pacman -Syu

#Will simply install all packages, plan to seperate them for individualized installation. 
echo "Installing programming packages..."
sudo pacman -S vim visual-studio-code-bin terminator sublime-text zeal cmake codeblocks gnome-builder devhelp
               netbeans intellij-idea-community-edition emacs qt4 qt3 qt5-base qt5-declarative 
               qt5-graphicaleffects qt5-imageformats qt5-location qt5-multimedia qt5-networkauth qt5-quickcontrols               qt5-quickcontrols2 qt5-sensors qt5-speech qt5-svg qt5-tools qt5-translations qt5-wayland 
               qt5-webchannel qt5-webengine qt5-webkit qt5-x11extras qt5-xmlpatterns qt6-5compat qt6-base 
               qt6-declarative qt6-imageformats qt6-positioning qt6-quick3d qt6-quicktimeline qt6-serialport
               qt6-shadertools qt6-svg qt6-tools qt6-translations qt6-wayland qt6-webchannel qt6-webengine 
               qtcreator pycharm-community-edition glade meld 

# This is a yaourt install of visual studio code, I am not sure if it is delegated to pacman. Will need
# to double check. 

yaourt -S visual-studio-code-bin
