## manage-containers
_A tool which manages docker containers in a simple way._

#### Prerequisites
The host shall be run on a Linux dist. Ubuntu Bionic 18.04 (LTS) has been used for development.

#### Build

Pull the project from GitHub
>git clone https://github.com/kleon919/manage-containers.git

Get the latest release of Docker CE
>sudo sh ./scripts/get-docker.sh

Pull some popular images
>sudo sh ./scripts/pull.sh

Build the image from the Dockerfile
>sudo docker build -t kleon919/manage-containers .

Run the image
>sudo docker run -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -d kleon919/manage-containers

Request the API at:
<link>http://localhost:9000</link>


#### Features:
- Fetch/View all, running or idle containers.
- Get all 'available' images.
- Create one or multiple containers based on given input.
- Start a specific idle container. 
- Start all idle containers concurrently.
- Stop a specific running container. 
- Stop all running containers concurrently.
- Remove all idle containers.
- Retrieve logs from a specific container.
- Retrieve statistics from a specific container.



API documentation:
- Drop the api-doc.yml file to the https://editor.swagger.io/ in order to view the API.