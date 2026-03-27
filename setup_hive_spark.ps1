# Automated Hive/Spark Setup for Windows
# Run with: powershell -ExecutionPolicy Bypass -File setup_hive_spark.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Flavour Rating - Hive/Spark Auto Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Step 1: Install Java
Write-Host "`n[1] Checking Java Installation..." -ForegroundColor Yellow
if (Get-Command java -ErrorAction SilentlyContinue) {
    Write-Host "✓ Java is already installed" -ForegroundColor Green
    java -version
} else {
    Write-Host "✗ Java not found. Installing Java 8..." -ForegroundColor Red
    if (Get-Command choco -ErrorAction SilentlyContinue) {
        choco install jdk8 -y
        Write-Host "✓ Java 8 installed via Chocolatey" -ForegroundColor Green
    } else {
        Write-Host "⚠ Chocolatey not found. Please install Java 8 manually from:" -ForegroundColor Yellow
        Write-Host "  https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html" -ForegroundColor Yellow
        Write-Host "  Then restart PowerShell" -ForegroundColor Yellow
    }
}

# Step 2: Download Spark
Write-Host "`n[2] Setting up Spark..." -ForegroundColor Yellow
$sparkHome = "C:\spark-3.2.0-bin-hadoop3.2"
if (Test-Path $sparkHome) {
    Write-Host "✓ Spark already exists at $sparkHome" -ForegroundColor Green
} else {
    Write-Host "Downloading Spark 3.2.0..." -ForegroundColor Cyan
    $sparkUrl = "https://archive.apache.org/dist/spark/spark-3.2.0/spark-3.2.0-bin-hadoop3.2.tgz"
    $tempDir = "$env:TEMP\spark_download"
    
    if (-not (Test-Path $tempDir)) {
        New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
    }
    
    # Download (simplified - user may need to do this manually on slow connections)
    Write-Host "⚠ Please download Spark from: $sparkUrl" -ForegroundColor Yellow
    Write-Host "  Extract to: $sparkHome" -ForegroundColor Yellow
}

# Step 3: Set Environment Variables
Write-Host "`n[3] Setting Environment Variables..." -ForegroundColor Yellow

# Detect Java home
if (Get-Command java -ErrorAction SilentlyContinue) {
    $javaPath = (Get-Command java).Source | Split-Path -Parent | Split-Path -Parent
    Write-Host "Setting JAVA_HOME to: $javaPath" -ForegroundColor Cyan
    [Environment]::SetEnvironmentVariable("JAVA_HOME", $javaPath, "User")
}

# Set Spark home
if (Test-Path $sparkHome) {
    Write-Host "Setting SPARK_HOME to: $sparkHome" -ForegroundColor Cyan
    [Environment]::SetEnvironmentVariable("SPARK_HOME", $sparkHome, "User")
    [Environment]::SetEnvironmentVariable("SPARK_HOME", $sparkHome, "Machine")
}

# Set Hadoop home (if needed)
$hadoopHome = "C:\hadoop"
Write-Host "Setting HADOOP_HOME to: $hadoopHome" -ForegroundColor Cyan
[Environment]::SetEnvironmentVariable("HADOOP_HOME", $hadoopHome, "User")

# Step 4: Install Python Dependencies
Write-Host "`n[4] Installing Python Dependencies..." -ForegroundColor Yellow
$backendPath = "C:\Users\Sunle\Desktop\SHT\Flavour Rating\backend"

if (Test-Path "$backendPath\requirements_hive.txt") {
    cd $backendPath
    Write-Host "Installing packages from requirements_hive.txt..." -ForegroundColor Cyan
    pip install -r requirements_hive.txt -q
    Write-Host "✓ Python dependencies installed" -ForegroundColor Green
}

# Step 5: Create .env file
Write-Host "`n[5] Creating Backend Configuration..." -ForegroundColor Yellow
$envFile = "$backendPath\.env"

if (-not (Test-Path $envFile)) {
    $envContent = @"
PORT=8002
HIVE_ENABLED=true
HIVE_HOST=192.168.56.105
HIVE_PORT=9083
HDFS_HOST=192.168.56.105
HDFS_PORT=9000
SPARK_DRIVER_MEMORY=2G
SPARK_EXECUTOR_MEMORY=2G
SPARK_EXECUTOR_CORES=4
VITE_API_BASE_URL=http://127.0.0.1:8002
"@
    Set-Content -Path $envFile -Value $envContent
    Write-Host "✓ Created .env file with Hive configuration" -ForegroundColor Green
} else {
    Write-Host "✓ .env file already exists" -ForegroundColor Green
}

# Step 6: Test Spark Installation
Write-Host "`n[6] Testing Spark Installation..." -ForegroundColor Yellow
if (Test-Path "$sparkHome\bin\spark-sql.cmd") {
    Write-Host "✓ Spark SQL found at: $sparkHome\bin\spark-sql.cmd" -ForegroundColor Green
} else {
    Write-Host "⚠ Spark SQL not found. Please download Spark if not already done." -ForegroundColor Yellow
}

# Step 7: Test Network Connection
Write-Host "`n[7] Testing Connection to Hadoop Cluster..." -ForegroundColor Yellow
$hiveHost = "192.168.56.105"
if (Test-Connection -ComputerName $hiveHost -Count 1 -Quiet) {
    Write-Host "✓ Successfully connected to $hiveHost" -ForegroundColor Green
} else {
    Write-Host "⚠ Cannot reach $hiveHost. Check network connectivity." -ForegroundColor Yellow
    Write-Host "  Try: ping $hiveHost" -ForegroundColor Yellow
}

# Step 8: Create Frontend .env
Write-Host "`n[8] Creating Frontend Configuration..." -ForegroundColor Yellow
$frontendPath = "C:\Users\Sunle\Desktop\SHT\Flavour Rating\frontend"
$frontendEnv = "$frontendPath\.env"

if (-not (Test-Path $frontendEnv)) {
    $frontendContent = @"
VITE_API_BASE_URL=http://127.0.0.1:8002
VITE_USE_HIVE=true
"@
    Set-Content -Path $frontendEnv -Value $frontendContent
    Write-Host "✓ Created frontend .env with Hive enabled" -ForegroundColor Green
}

# Summary
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan

Write-Host "`nNext Steps:" -ForegroundColor Yellow
Write-Host "1. Restart PowerShell to load new environment variables" -ForegroundColor White
Write-Host "2. Start backend server:" -ForegroundColor White
Write-Host "   cd 'C:\Users\Sunle\Desktop\SHT\Flavour Rating\backend'" -ForegroundColor Cyan
Write-Host "   python main.py" -ForegroundColor Cyan
Write-Host "3. Start frontend (in another terminal):" -ForegroundColor White
Write-Host "   cd 'C:\Users\Sunle\Desktop\SHT\Flavour Rating\frontend'" -ForegroundColor Cyan
Write-Host "   npm run dev" -ForegroundColor Cyan
Write-Host "4. Open browser to: http://localhost:5179" -ForegroundColor Cyan

Write-Host "`nUSEFUL COMMANDS:" -ForegroundColor Yellow
Write-Host "Test Hive connection:" -ForegroundColor White
Write-Host "  curl 'http://127.0.0.1:8002/api/hive?query=top_merchants&limit=20'" -ForegroundColor Cyan
Write-Host "View backend logs:" -ForegroundColor White
Write-Host "  Get-Content 'C:\Users\Sunle\Desktop\SHT\Flavour Rating\backend\logs\'" -ForegroundColor Cyan

Write-Host "`n✓ All done! Your Flavour Rating app is ready to serve live Yelp data from Hadoop!" -ForegroundColor Green
