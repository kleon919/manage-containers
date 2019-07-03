#!/bin/bash

echo ""
echo "Pulling docker images from docker hub"
echo ""

docker pull redis

docker pull mysql

docker pull nginx

docker pull jenkins/jenkins

docker pull elixir