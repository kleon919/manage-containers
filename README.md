## manage-containers
_A tool which manages docker containers in a simple way._

The host is an EC2 Instance on AWS. 
Runs an Ubuntu dist (ubuntu-bionic-18.04 LTS)

The latest version of Docker CE has been installed, following the official guidelines...
https://docs.docker.com/install/linux/docker-ce/ubuntu/

Pull the official Node.js, MySQL, Elixir and Jenkins docker images.
>sudo docker pull 

Install the Node.js runtime and update the NPM to the latest version 
>npm install -g npm@latest

Into the root directory, run
>npm install
