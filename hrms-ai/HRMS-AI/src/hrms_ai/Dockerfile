FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy dependency file and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy this code as a package named "hrms_ai"
COPY . /app/hrms_ai

# Ensure Python can see /app as a package root
ENV PYTHONPATH=/app

# Expose the port your app will listen on
EXPOSE 8000

# Run the application as a package, so relative imports work
CMD ["python", "-m", "hrms_ai.main"]
