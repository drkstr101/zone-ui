FROM gitpod/workspace-full
RUN sudo apt-get update

# Install cypress runtime dependencies

RUN sudo apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0

RUN sudo DEBIAN_FRONTEND=noninteractive apt-get install -yq \
    libgbm-dev \
    libnotify-dev

RUN sudo apt-get install -y \
    libgconf-2-4 \
    libnss3 \
    libxss1

RUN sudo apt-get install -y \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb

USER gitpod

RUN echo 'export PATH="node_modules/.bin:${PATH}"' >> ~/.bashrc
