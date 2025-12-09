FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY src/ hrms_ai/ /app/hrms_ai/
COPY src/scripts/manage.py /app/scripts/manage.py

# Expose the application port (if applicable)
EXPOSE 8000

# Command to run the application
CMD ["python", "hrms_ai/main.py"]