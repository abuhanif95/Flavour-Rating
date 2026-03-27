# Hive/Spark Data Integration Setup Guide

## Overview

This guide enables the Flavour Rating application to read data directly from your Hadoop/Hive cluster at `192.168.56.105` using Spark and ORC file format.

## Architecture

```
Ubuntu Hadoop Cluster (192.168.56.105)
    └─ /user/hanif/yelp/
        ├── business/ (ORC files)
        ├── review/ (ORC files)
        ├── user/ (ORC files)
        ├── checkin/ (ORC files)
        └── tip/ (ORC files)
            ↓
Backend Spark/Hive Connector
    └─ Queries via HiveQL
    └─ Reads ORC files
    └─ Returns JSON
            ↓
Frontend Charts
    └─ Interactive graphs
```

## Prerequisites

### 1. Java Installation

Spark requires Java 8 or higher:

```bash
# On Windows PowerShell
java -version

# If not installed, download from oracle.com or:
# Use choco: choco install jdk8
```

### 2. Python Dependencies

Install Spark and Hadoop dependencies:

```bash
cd "C:\Users\Sunle\Desktop\SHT\Flavour Rating\backend"
pip install -r requirements_hive.txt
```

### 3. SPARK_HOME Environment Variable

Set up Spark home directory:

```powershell
# Download Spark (with Hadoop)
# From: https://spark.apache.org/downloads.html
# Extract to: C:\spark-3.2.0-bin-hadoop3.2

$env:SPARK_HOME="C:\spark-3.2.0-bin-hadoop3.2"
$env:HADOOP_HOME="C:\hadoop"
$env:JAVA_HOME="C:\Program Files\Java\jdk1.8.0_321"
```

## Configuration

### 1. Update Backend .env

```powershell
# Copy .env.example to .env
Copy-Item .env.example .env

# Edit .env and set:
HIVE_ENABLED=true
HIVE_HOST=192.168.56.105
HDFS_HOST=192.168.56.105
```

### 2. Update Frontend .env

```bash
VITE_USE_HIVE=true
VITE_API_BASE_URL=http://127.0.0.1:8002
```

## Running with Hive Support

### Option 1: Direct Python Execution

```bash
cd backend
$env:HIVE_ENABLED="true"
$env:SPARK_HOME="C:\spark-3.2.0-bin-hadoop3.2"
python main.py
```

### Option 2: Using spark-submit (Recommended)

```bash
spark-submit \
  --master local[4] \
  --driver-memory 2G \
  --executor-memory 2G \
  --packages org.apache.hadoop:hadoop-client:3.2.0 \
  main.py
```

## Testing Hive Queries

### Test Endpoint

```bash
# Top merchants
curl "http://127.0.0.1:8002/api/hive?query=top_merchants&limit=20"

# Top cities
curl "http://127.0.0.1:8002/api/hive?query=top_cities&limit=10"

# Reviews per year
curl "http://127.0.0.1:8002/api/hive?query=reviews_per_year"

# Users per year
curl "http://127.0.0.1:8002/api/hive?query=users_per_year"

# Rating distribution
curl "http://127.0.0.1:8002/api/hive?query=rating_distribution"

# Top words
curl "http://127.0.0.1:8002/api/hive?query=top_words&limit=20"
```

## Available Hive Queries

| Query Type            | Endpoint                                 | Description                     |
| --------------------- | ---------------------------------------- | ------------------------------- |
| `top_merchants`       | `/api/hive?query=top_merchants&limit=20` | Top N merchants by review count |
| `top_cities`          | `/api/hive?query=top_cities&limit=10`    | Top N cities by merchant count  |
| `reviews_per_year`    | `/api/hive?query=reviews_per_year`       | Review count per year           |
| `users_per_year`      | `/api/hive?query=users_per_year`         | New users per year              |
| `rating_distribution` | `/api/hive?query=rating_distribution`    | Reviews by star rating          |
| `top_words`           | `/api/hive?query=top_words&limit=20`     | Most common words in reviews    |

## Frontend Integration

Update MultiChartContainer.jsx to support Hive queries:

```jsx
const useHive = import.meta.env.VITE_USE_HIVE === "true";

useEffect(() => {
  let url;
  if (useHive) {
    url = `${API_BASE_URL}/api/hive?query=${datasetName}`;
  } else {
    url = `${API_BASE_URL}/api/dataset?name=${datasetName}.csv`;
  }

  axios.get(url).then(...);
}, [datasetName]);
```

## Troubleshooting

### Error: "Could not resolve hostname 192.168.56.105"

- Check network connectivity to Ubuntu server
- Verify firewall allows port 9083 (Hive) and 9000 (HDFS)
- Ping the server: `Test-Connection 192.168.56.105`

### Error: "Java not found"

- Install JDK 8 or higher
- Set `JAVA_HOME` environment variable
- Verify: `java -version`

### Error: "Spark not found"

- Set `SPARK_HOME` environment variable
- Download Spark from: https://spark.apache.org/
- Verify: `spark-sql --version`

### Error: "Could not communicate with Hive Metastore"

- Verify Hive metastore running on Ubuntu: `jps | grep MetaStore`
- Check firewall on Ubuntu server
- Verify port 9083 is open

## Performance Optimization

For large datasets, configure Spark:

```bash
$env:SPARK_DRIVER_MEMORY="4G"
$env:SPARK_EXECUTOR_MEMORY="4G"
$env:SPARK_EXECUTOR_CORES="8"
```

## Next Steps

1. ✅ Install Java and Spark
2. ✅ Configure environment variables
3. ✅ Install Python dependencies
4. ✅ Update .env files
5. ✅ Start backend with Hive enabled
6. ✅ Test endpoints
7. ✅ Enable Hive in frontend
8. ✅ View live Yelp data from Hadoop!

## Support

For issues:

- Check Ubuntu server logs: `sudo tail -f /var/log/hive/`
- Check Spark logs: Look in `$SPARK_HOME/logs/`
- Verify HDFS health: `hdfs dfsadmin -report`
