<div style="display: flex; flex-direction: column;  justify-content: center; align-items: center">
 <div>
     <svg style="scale: 0.35;"
      width="800"
      height="200"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="nuxtLogoTitle nuxtLogoDesc"
>
  <title id="nuxtLogoTitle">Nuxt 3 Logo</title>
  <desc id="nuxtLogoDesc">Stylized Nuxt 3 logo with green and black paths for dark and light themes</desc>
    <path d="M377 200C379.16 200 381 198.209 381 196V103C381 103 386 112 395 127L434 194C435.785 197.74 439.744 200 443 200H470V50H443C441.202 50 439 51.4941 439 54V148L421 116L385 55C383.248 51.8912 379.479 50 376 50H350V200H377Z" fill="currentColor"></path>
    <path d="M726 92H739C742.314 92 745 89.3137 745 86V60H773V92H800V116H773V159C773 169.5 778.057 174 787 174H800V200H783C759.948 200 745 185.071 745 160V116H726V92Z" fill="currentColor"></path>
    <path d="M591 92V154C591 168.004 585.742 179.809 578 188C570.258 196.191 559.566 200 545 200C530.434 200 518.742 196.191 511 188C503.389 179.809 498 168.004 498 154V92H514C517.412 92 520.769 92.622 523 95C525.231 97.2459 526 98.5652 526 102V154C526 162.059 526.457 167.037 530 171C533.543 174.831 537.914 176 545 176C552.217 176 555.457 174.831 559 171C562.543 167.037 563 162.059 563 154V102C563 98.5652 563.769 96.378 566 94C567.96 91.9107 570.028 91.9599 573 92C573.411 92.0055 574.586 92 575 92H591Z" fill="currentColor"></path>
    <path d="M676 144L710 92H684C680.723 92 677.812 93.1758 676 96L660 120L645 97C643.188 94.1758 639.277 92 636 92H611L645 143L608 200H634C637.25 200 640.182 196.787 642 194L660 167L679 195C680.818 197.787 683.75 200 687 200H713L676 144Z" fill="currentColor"></path>
    <path d="M168 200H279C282.542 200 285.932 198.756 289 197C292.068 195.244 295.23 193.041 297 190C298.77 186.959 300.002 183.51 300 179.999C299.998 176.488 298.773 173.04 297 170.001L222 41C220.23 37.96 218.067 35.7552 215 34C211.933 32.2448 207.542 31 204 31C200.458 31 197.067 32.2448 194 34C190.933 35.7552 188.77 37.96 187 41L168 74L130 9.99764C128.228 6.95784 126.068 3.75491 123 2C119.932 0.245087 116.542 0 113 0C109.458 0 106.068 0.245087 103 2C99.9323 3.75491 96.7717 6.95784 95 9.99764L2 170.001C0.226979 173.04 0.00154312 176.488 1.90993e-06 179.999C-0.0015393 183.51 0.229648 186.959 2 190C3.77035 193.04 6.93245 195.244 10 197C13.0675 198.756 16.4578 200 20 200H90C117.737 200 137.925 187.558 152 164L186 105L204 74L259 168H186L168 200ZM89 168H40L113 42L150 105L125.491 147.725C116.144 163.01 105.488 168 89 168Z" fill="#00DC82"></path>
</svg>
</div>
<img width="300" src="https://raw.githubusercontent.com/detain/svg-logos/b02ee1ac30c7ff4757278337c95588b01ed0954b/svg/s/storybook-1.svg" alt="Storybook Logo" aria-label="Storybook Logo"/>

</div>

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

