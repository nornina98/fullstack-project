## About

Provide a more detailed description of your project, including its purpose, features, and any other relevant information. You can also include screenshots or GIFs to showcase your project.

## Installation

List the steps required to install your project locally. Include any dependencies that need to be installed and how to install them.

```bash
# Clone the repository
git clone https://github.com/yourusername/yourproject.git

# Navigate to the project directory
cd yourproject

# Install dependencies
npm install
```

# Setting BUILD_PATH On | Windows

set BUILD_PATH=../server/public&& react-scripts build

# Rather than the bash version:

BUILD_PATH=../server/public react-scripts build

# Important

Copy the set command exactly, making sure there's no space between the word public and the && symbols. If you add a space, Windows will add that space to the name of the build folder, and our front end dashboard will never load.
