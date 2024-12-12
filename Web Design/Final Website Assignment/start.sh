source .env
cd "$(dirname "$0")"
SCRIPT_DIR="$(pwd)"

if [ -f .env ]; then
    source .env
else
    echo ".env file not found. Exiting."
    exit 1
fi

if [ -z "${shell_pass}" ]; then
    echo "Environment variable 'shell_pass' is not set. Exiting."
    exit 1
fi

echo "${shell_pass}" | sudo -S nginx -c "${SCRIPT_DIR}/conf/nginx.conf"
npm run deploy