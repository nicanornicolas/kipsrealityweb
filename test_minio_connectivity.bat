@echo off
echo Testing MinIO S3 Connectivity...
echo.

echo 1. Setting AWS CLI configuration for MinIO...
aws configure set aws_access_key_id rentflow_admin --profile minio-local
aws configure set aws_secret_access_key "SuperSecretStorageKey2026!" --profile minio-local
aws configure set default.region us-east-1 --profile minio-local

echo.
echo 2. Listing buckets (using MinIO endpoint)...
aws --endpoint-url http://localhost:9000 --profile minio-local s3 ls

echo.
echo 3. Creating test bucket...
aws --endpoint-url http://localhost:9000 --profile minio-local s3 mb s3://rentflow-documents

echo.
echo 4. Listing buckets again to confirm creation...
aws --endpoint-url http://localhost:9000 --profile minio-local s3 ls

echo.
echo 5. Uploading test file...
echo "Test file content" > test.txt
aws --endpoint-url http://localhost:9000 --profile minio-local s3 cp test.txt s3://rentflow-documents/

echo.
echo 6. Listing objects in bucket...
aws --endpoint-url http://localhost:9000 --profile minio-local s3 ls s3://rentflow-documents/

echo.
echo 7. Cleaning up test file...
aws --endpoint-url http://localhost:9000 --profile minio-local s3 rm s3://rentflow-documents/test.txt
del test.txt

echo.
echo Test completed successfully!
echo.
echo MinIO Console URL: http://localhost:9001
echo Username: rentflow_admin
echo Password: SuperSecretStorageKey2026!
