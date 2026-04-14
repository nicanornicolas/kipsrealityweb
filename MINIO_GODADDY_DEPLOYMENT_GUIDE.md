# MinIO S3 Storage Deployment Guide for GoDaddy VPS

## Overview
This guide provides step-by-step instructions for deploying MinIO S3-compatible storage on your GoDaddy staging server. This will eliminate AWS bandwidth costs during staging and provide enterprise-grade file storage.

## Prerequisites
1. SSH access to your GoDaddy VPS
2. Docker and Docker Compose installed on the server
3. Basic familiarity with Linux command line

## Step 1: Prepare the Server Environment

### 1.1 SSH into your GoDaddy VPS
```bash
ssh username@your-godaddy-server-ip
```

### 1.2 Navigate to your project directory
```bash
cd /path/to/your/rentflow360/project
```

## Step 2: Update Configuration Files

### 2.1 Update `docker-compose.yml` on the server
The production Docker Compose file is already configured with MinIO. Ensure the `docker-compose.prod.yml` file includes the MinIO service section (should match what's in the repository).

### 2.2 Create or update `.env.production` file
Add the following MinIO configuration to your `.env.production` file:

```bash
# MinIO S3 Storage (Production)
MINIO_USER=rentflow_admin_prod
MINIO_PASSWORD=GenerateSecurePasswordHere123!@#
# S3 Configuration (pointing to server's MinIO)
S3_ENDPOINT=http://localhost:9000  # For same-server access
# If accessing from external services, use the server's public IP:
# S3_ENDPOINT=http://YOUR_SERVER_IP:9000
S3_BUCKET=rentflow-documents
S3_REGION=us-east-1
S3_ACCESS_KEY=${MINIO_USER}
S3_SECRET_KEY=${MINIO_PASSWORD}
S3_FORCE_PATH_STYLE=true
```

**Important:** Generate a secure password for `MINIO_PASSWORD`:
```bash
openssl rand -base64 32
```

### 2.3 Update the S3_ENDPOINT for external access
If other services (Next.js app) need to access MinIO, update the endpoint:
- For same-server access (when all services run on same machine): `http://localhost:9000`
- For external access: `http://YOUR_SERVER_PUBLIC_IP:9000`

## Step 3: Deploy MinIO Service

### 3.1 Start MinIO service
```bash
# Start only the MinIO service (without other services)
docker-compose -f docker-compose.prod.yml up -d minio
```

### 3.2 Verify MinIO is running
```bash
# Check container status
docker ps | grep minio

# Check health
curl http://localhost:9000/minio/health/live
```

### 3.3 Access MinIO Console
Open your browser and navigate to:
```
http://YOUR_SERVER_PUBLIC_IP:9001
```
Login with the credentials from your `.env.production` file.

## Step 4: Create the Bucket

### 4.1 Using MinIO Console (Recommended)
1. Log into the MinIO Console (http://YOUR_SERVER_IP:9001)
2. Click "Create Bucket"
3. Name: `rentflow-documents`
4. Enable versioning if desired
5. Set appropriate access policies

### 4.2 Using AWS CLI (Alternative)
```bash
# Configure AWS CLI for MinIO
aws configure set aws_access_key_id ${MINIO_USER}
aws configure set aws_secret_access_key ${MINIO_PASSWORD}
aws configure set default.region us-east-1

# Create bucket
aws --endpoint-url http://localhost:9000 s3 mb s3://rentflow-documents
```

## Step 5: Test the Configuration

### 5.1 Test with AWS CLI
```bash
# List buckets
aws --endpoint-url http://localhost:9000 s3 ls

# Upload a test file
echo "test" > test.txt
aws --endpoint-url http://localhost:9000 s3 cp test.txt s3://rentflow-documents/

# List objects in bucket
aws --endpoint-url http://localhost:9000 s3 ls s3://rentflow-documents/
```

### 5.2 Test from Node.js/TypeScript
```typescript
import { S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  endpoint: process.env.S3_ENDPOINT,
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_KEY!,
  },
  forcePathStyle: true,
});
```

## Step 6: Security Considerations

### 6.1 Firewall Configuration
Ensure port 9000 (S3 API) and 9001 (Console) are accessible:
- Port 9000: Should be accessible to your application services
- Port 9001: Consider restricting to internal IPs only or using VPN

### 6.2 SSL/TLS (Recommended for Production)
For production, configure SSL/TLS:
```bash
# Generate self-signed certificate (for testing)
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /path/to/private.key \
  -out /path/to/certificate.crt

# Update MinIO command with SSL
command: server /data --console-address ":9001" --certs-dir /path/to/certs
```

### 6.3 Access Policies
Configure bucket policies in MinIO Console:
- Read/Write access for application
- Read-only access for certain users if needed

## Step 7: Monitoring and Maintenance

### 7.1 Check logs
```bash
docker logs rentflow_storage
```

### 7.2 Monitor disk usage
```bash
# Check volume usage
docker system df

# Check container resource usage
docker stats rentflow_storage
```

### 7.3 Backup strategy
The MinIO data is stored in a Docker volume `minio_data`. Ensure this volume is backed up regularly.

## Troubleshooting

### MinIO container won't start
```bash
# Check logs
docker logs rentflow_storage

# Common issues:
# 1. Port conflicts: Ensure ports 9000 and 9001 are not in use
# 2. Permission issues: Check volume mount permissions
```

### Can't access Console
- Verify firewall rules allow port 9001
- Check if the container is running: `docker ps`
- Check logs for errors: `docker logs rentflow_storage`

### Bucket creation fails
- Ensure credentials are correct
- Check if MinIO service is healthy: `curl http://localhost:9000/minio/health/live`

## Next Steps

After MinIO is successfully deployed:

1. **Update application code** to use the new S3 endpoint (Phase 1.2)
2. **Migrate existing files** from Cloudinary to MinIO if needed
3. **Update CI/CD pipeline** to use MinIO for test/staging environments
4. **Configure monitoring** alerts for storage usage

## Support

For issues with this deployment:
1. Check the MinIO documentation: https://min.io/docs/minio/linux/index.html
2. Review Docker logs for errors
3. Ensure all environment variables are correctly set