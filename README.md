# What is Docker?

Docker is a platform for developing, shipping, and running applications in containers without concern in environment configuration or management.

## Containers vs. Virtual Machines

A comparison to illustrate how containers are lightweight, fast, and use fewer resources compared to VMs.

![](https://www.netsolutions.com/insights/wp-content/uploads/2023/05/Containers-vs-Virtual-Machines.webp)

# Dockerfile

Dockerfile is a text file that contains a list of commands (instructions), which describes how a Docker image is built based on them. The command docker build tells Docker to build the image by following the content (instructions) inside the Dockerfile.

![](https://miro.medium.com/v2/resize:fit:1400/0*CP98BIIBgMG2K3u5.png)

| **Instruction** | **Description**                                             |
| --------------- | ----------------------------------------------------------- |
| ADD             | Add local or remote files and directories.                  |
| ARG             | Use build-time variables.                                   |
| CMD             | Specify default commands.                                   |
| COPY            | Copy files and directories.                                 |
| ENTRYPOINT      | Specify default executable.                                 |
| ENV             | Set environment variables.                                  |
| EXPOSE          | Describe which ports your application is listening on.      |
| FROM            | Create a new build stage from a base image.                 |
| HEALTHCHECK     | Check a container's health on startup.                      |
| LABEL           | Add metadata to an image.                                   |
| MAINTAINER      | Specify the author of an image.                             |
| ONBUILD         | Specify instructions for when the image is used in a build. |
| RUN             | Execute build commands.                                     |
| SHELL           | Set the default shell of an image.                          |
| STOPSIGNAL      | Specify the system call signal for exiting a container.     |
| USER            | Set user and group ID.                                      |
| VOLUME          | Create volume mounts.                                       |
| WORKDIR         | Change working directory.                                   |

### ENTRYPOINT vs CMD

![](https://miro.medium.com/v2/resize:fit:1400/0*WNIUcRNmcaW_0Rsh)

### ARG vs ENV

![](https://vsupalov.com/images/docker-env-vars/docker_environment_build_args.png)

### ADD vs COPY

![](https://linuxhandbook.com/content/images/2021/04/copy-vs-add-1.png)

## Network

![alt text](image.png)
