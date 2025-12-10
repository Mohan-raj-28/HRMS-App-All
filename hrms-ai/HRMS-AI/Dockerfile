FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy dependency file and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy everything from this folder into the container
# (since Dockerfile is in src/hrms_ai, this copies your whole app)
COPY . .

# Expose the port your app will listen on
EXPOSE 8000

# Run the application
# main.py is in the same folder as the Dockerfile now
CMD ["python", "main.py"]
