<table align="center">
  <tr>
    <td align="center"><img width="300" src="https://i.imgur.com/7nKybtG.png" alt="Nuxt Logo" aria-label="Nuxt Logo"></td>
    <td width="90"></td> <!-- Empty cell for spacing -->
    <td align="center"><img width="300" src="https://raw.githubusercontent.com/detain/svg-logos/b02ee1ac30c7ff4757278337c95588b01ed0954b/svg/s/storybook-1.svg" alt="Storybook Logo" aria-label="Storybook Logo"></td>
  </tr>
</table>



<h1 align="center">🎨 Design System - Nuxt, Vue & Storybook</h1>

<p align="center">
  A Dockerized playground for developing a design system with Nuxt.js, Vue 3, and Storybook, utilizing the Bun runtime for a streamlined development experience.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Docker-Enabled-blue" alt="Docker">
  <img src="https://img.shields.io/badge/Bun-v0.6.8-brightgreen" alt="Bun">
  <img src="https://img.shields.io/badge/Nuxt.js-v3.0.0-blue" alt="Nuxt.js">
  <img src="https://img.shields.io/badge/Storybook-Configured-orange" alt="Storybook">
  <a href="https://github.com/lafllamme/Plant.me/commits/main"><img src="https://img.shields.io/github/last-commit/lafllamme/Plant.me" alt="Last Commit"></a>
  <a href="https://github.com/lafllamme/Plant.me/issues"><img src="https://img.shields.io/github/issues/lafllamme/Plant.me" alt="Open Issues"></a>
</p>

---

## 🚀 Features

- **Dockerized Environment**: Ensures consistent setup across machines.
- **Bun Runtime**: Fast and efficient JavaScript runtime.
- **Nuxt.js + Vue 3**: Build a scalable, performant design system.
- **Storybook Integration**: Develop UI components in isolation.
- **Makefile Automation**: Simplifies Docker commands for easy management.

---

## 🛠 Prerequisites

Ensure the following are installed:

- [Docker](https://www.docker.com/get-started) (latest version)
- [Docker Compose](https://docs.docker.com/compose/install/) (latest version)
- [Make](https://www.gnu.org/software/make/) (usually pre-installed on UNIX systems)

---

## 🗂 Project Structure

```plaintext
/project-root
│
├── Makefile
├── docker-compose.yml
├── Dockerfile
├── .env
├── entrypoint.sh
└── app/
    └── [Your project files]
```

---

## ⚙️ Setup & Installation

Follow these steps to set up the environment:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/plant-assistant.git
cd plant-assistant
```

### 2. Create the `.env` File

In the root directory, create a `.env` file with the following content:

```env
# .env

SERVICE_NAME=design-system
IMAGE=design-system:latest
NODE_ENV=development
HOST=0.0.0.0
```

### 3. Build the Docker Image

```bash
make build
```

### 4. Make `entrypoint.sh` Executable

```bash
chmod +x entrypoint.sh
```

### 5. Start the Docker Containers

```bash
make up
```

If the `app` directory is empty, the container will start and wait, allowing you to initialize your project.

---

## 🧑‍💻 Usage

Use the Makefile for easy management of Docker services:

| Command      | Description                                         |
|--------------|-----------------------------------------------------|
| `make build` | Build the Docker images                             |
| `make up`    | Start the services in detached mode                 |
| `make upb`   | Start with build                                    |
| `make down`  | Stop all services                                   |
| `make bash`  | Enter the container’s shell                         |
| `make logs`  | View logs                                           |
| `make clean` | Remove all containers, images, volumes, and orphans |

**Example Commands:**

- **Initialize the Project**:

  ```bash
  make init
  ```

- **Enter the Container's Shell**:

  ```bash
  make bash
  ```

- **Access Your Application**:

  After initializing the project, access it at [http://localhost:3000](http://localhost:3000).

---

## 📐 Development Workflow

1. **Build and Start Services**:

    ```bash
    make build
    make up
    ```

2. **Initialize Nuxt.js Project**:

    ```bash
    make bash
    # Inside container:
    bun init
    ```

3. **Manage Services**:

    - View logs: `make logs`
    - Restart services: `make restart`
    - Stop services: `make down`

---

## 🔧 Ports & Environment Variables

### Exposed Ports

- **3000**: Nuxt.js development server
- **6006**: Storybook

### Environment Variables

Defined in the `.env` file:

- **SERVICE_NAME**: Service name
- **IMAGE**: Docker image name
- **NODE_ENV**: Node environment
- **HOST**: Host address (`0.0.0.0`)

---

## 🛠 Troubleshooting

- **Permission Denied for `entrypoint.sh`**: Ensure the script has execute permissions:

  ```bash
  chmod +x entrypoint.sh
  ```

- **Ports Already in Use**: Modify `docker-compose.yml` if ports are in use.

---

## 📚 Resources

- [Nuxt.js Documentation](https://nuxtjs.org/)
- [Vue 3 Documentation](https://v3.vuejs.org/)
- [Storybook Documentation](https://storybook.js.org/)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

<p align="center">Made with ❤️ by <a href="https://github.com/lafllamme">lafllamme</a></p>

