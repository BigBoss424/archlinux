#! /bin/bash
#
#This install script will install realvnc, both client and server onto the given
#Arch Linux or Arch Linux based distro. 
#
#Created by: Aaron Jones
#Date: 11/13/2022
#

#Installing realvnc-vnc-viewer and installing realvnc-vnc-server
echo 'Installing realvnc...'
echo 'Installing realvnc-vnc-viewer and realvnc-vnc-server'
#yaourt command
yaourt -S realvnc-vnc-server realvnc-vnc-viewer 
#Learn how to add a validity check for whether or not the packages were built. 
echo 'Now installed....'

