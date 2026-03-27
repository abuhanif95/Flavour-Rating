# ✅ Flavour Rating Dashboard - Setup Complete!

## 🎉 Current Status

| Component              | Status           | Port           | Details                                 |
| ---------------------- | ---------------- | -------------- | --------------------------------------- |
| **Backend API**        | ✅ Running       | 8002           | Serving CSV data + ready for Hadoop     |
| **Frontend Dashboard** | ✅ Running       | 5173           | Interactive charts with all graph types |
| **PySpark**            | ✅ Installed     | -              | v4.1.1 ready for Hive queries           |
| **Hive/Hadoop**        | ⏳ Requires Java | 192.168.56.105 | Ready once Java is installed            |

## 🚀 Access Your Dashboard

Open your browser to: **http://localhost:5173**

You can now:

- ✅ View all Business Analysis charts (13 questions)
- ✅ View all User Analysis charts (10 questions)
- ✅ View all Review Analysis charts (12 questions)
- ✅ View all Rating Analysis charts (6 questions)
- ✅ View all Check-in Analysis charts (6 questions)
- ✅ View all Comprehensive Analysis charts (3 questions)
- ✅ Switch between 5 chart types (Bar, Line, Area, Pie, Scatter) for each question
- ✅ All data is live from your local CSV files

## 📊 Currently Using Local Data

The system is currently running with **local CSV data** (from your GitHub repo). All 50+ CSV files are in:

```
backend/data/
├── business/ (13 files)
├── user/ (10 files)
├── review/ (12 files)
├── rating/ (6 files)
├── checkin/ (6 files)
└── comprehensive/ (3 files)
```

## 🔧 To Enable Live Hadoop Data

To connect to your Hadoop cluster at `192.168.56.105` and query ORC files directly:

### Step 1: Install Java 8+

**Option A: Using Chocolatey (Recommended)**

```powershell
choco install jdk8 -y
```

**Option B: Manual Download**

- Download from: https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html
- Extract to: `C:\Program Files\Java\`
- Add to PATH

### Step 2: Install Spark

```powershell
# Download Spark with Hadoop from:
# https://archive.apache.org/dist/spark/spark-3.2.0/spark-3.2.0-bin-hadoop3.2.tgz

# Extract to:
# C:\spark-3.2.0-bin-hadoop3.2
```

### Step 3: Set Environment Variables

```powershell
# Run these in PowerShell (as Administrator):
[Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Program Files\Java\jdk1.8.0_321", "Machine")
[Environment]::SetEnvironmentVariable("SPARK_HOME", "C:\spark-3.2.0-bin-hadoop3.2", "Machine")
[Environment]::SetEnvironmentVariable("HADOOP_HOME", "C:\hadoop", "Machine")
```

### Step 4: Restart Services

```powershell
# Stop current services (if running):
# Ctrl+C in both terminal windows

# Restart backend with Hive enabled:
cd "C:\Users\Sunle\Desktop\SHT\Flavour Rating\backend"
$env:HIVE_ENABLED="true"
python main.py

# Restart frontend (in new terminal):
cd "C:\Users\Sunle\Desktop\SHT\Flavour Rating\frontend"
npm run dev
```

### Step 5: Test Hadoop Connection

```powershell
# Test top merchants from Hadoop:
curl "http://127.0.0.1:8002/api/hive?query=top_merchants&limit=20"

# Other available queries:
# - /api/hive?query=top_cities&limit=10
# - /api/hive?query=reviews_per_year
# - /api/hive?query=users_per_year
# - /api/hive?query=rating_distribution
```

## 🎯 What's Included

### Backend Components

- ✅ `main.py` - HTTP server with CSV + Hive endpoints
- ✅ `spark_hive_connector.py` - Spark/Hive integration module
- ✅ `.env` - Backend configuration
- ✅ `requirements_hive.txt` - Python dependencies

### Frontend Components

- ✅ `App.jsx` - Main dashboard with all 50+ questions configured
- ✅ `MultiChartContainer.jsx` - Multi-chart component (Bar, Line, Area, Pie, Scatter)
- ✅ Interactive sidebar navigation
- ✅ Real-time data switching between chart types

### Data Files

- 📁 13 Business Analysis CSVs
- 📁 10 User Analysis CSVs
- 📁 12 Review Analysis CSVs
- 📁 6 Rating Analysis CSVs
- 📁 6 Check-in Analysis CSVs
- 📁 3 Comprehensive Analysis CSVs
- **Total: 50 CSV files**, all properly formatted and integrated

## 🔄 Data Flow

### Current (CSV Mode)

```
Local CSV Files (backend/data/)
    ↓
Backend API (/api/dataset)
    ↓
Frontend Charts
```

### After Java+Spark Install (Hadoop Mode)

```
Hadoop HDFS (192.168.56.105)
    ↓
Spark + Hive (/api/hive)
    ↓
Backend API
    ↓
Frontend Charts
```

## 📝 API Endpoints

### CSV Data (Already Working)

```bash
GET http://127.0.0.1:8002/api/dataset?name=business/01_identify_the_20_most_common_merchants_in_the_u_s.csv
GET http://127.0.0.1:8002/api/dataset?name=user/01_analyze_the_number_of_users_joining_each_year.csv
GET http://127.0.0.1:8002/api/dataset?name=review/04_extract_the_top_20_most_common_words_from_all_reviews.csv
```

### Hadoop/Hive (After Java Install)

```bash
GET http://127.0.0.1:8002/api/hive?query=top_merchants&limit=20
GET http://127.0.0.1:8002/api/hive?query=top_cities&limit=10
GET http://127.0.0.1:8002/api/hive?query=reviews_per_year
GET http://127.0.0.1:8002/api/hive?query=users_per_year
GET http://127.0.0.1:8002/api/hive?query=rating_distribution
GET http://127.0.0.1:8002/api/hive?query=top_words&limit=20
```

## ⚙️ Configuration Files

### Backend .env

```
PORT=8002
HIVE_ENABLED=true
HIVE_HOST=192.168.56.105
HDFS_HOST=192.168.56.105
```

### Frontend .env

```
VITE_API_BASE_URL=http://127.0.0.1:8002
VITE_USE_HIVE=true
```

## 🛠️ Troubleshooting

### "Charts not showing"

- Check backend is running: `http://127.0.0.1:8002/api/dataset?name=business/01_identify_the_20_most_common_merchants_in_the_u_s.csv`
- Check frontend port: `http://localhost:5173`
- Check browser console for errors (F12)

### "Cannot connect to Hadoop"

- Verify network: `ping 192.168.56.105`
- Check Java installed: `java -version`
- Check Spark installed: `spark-sql --version`
- Check firewall allows port 9083 (Hive) and 9000 (HDFS)

### "PySpark import error"

- Install: `pip install pyspark`
- Check Java is in PATH: `java -version`
- Set JAVA_HOME: `$env:JAVA_HOME="C:\Program Files\Java\jdk1.8.0_321"`

## 📚 File Locations

```
C:\Users\Sunle\Desktop\SHT\Flavour Rating\
├── backend/
│   ├── main.py ............................ HTTP server
│   ├── spark_hive_connector.py ........... Spark integration
│   ├── .env ............................. Configuration
│   ├── requirements_hive.txt ............ Dependencies
│   └── data/
│       ├── business/ (13 CSVs)
│       ├── user/ (10 CSVs)
│       ├── review/ (12 CSVs)
│       ├── rating/ (6 CSVs)
│       ├── checkin/ (6 CSVs)
│       └── comprehensive/ (3 CSVs)
├── frontend/
│   ├── src/
│   │   ├── App.jsx ..................... Dashboard config
│   │   └── components/
│   │       └── MultiChartContainer.jsx . Chart component
│   ├── .env ........................... Configuration
│   └── package.json
└── setup_hive_spark.ps1 ............... Automated setup script

Hadoop Cluster: 192.168.56.105
  /user/hanif/yelp/
  ├── business/
  ├── review/
  ├── user/
  ├── checkin/
  └── tip/
```

## ✨ Summary

Your **Flavour Rating Dashboard** is completely functional with:

- ✅ 50+ interactive charts working
- ✅ 5 chart type options per question
- ✅ All 6 analysis sections (Business, User, Review, Rating, Check-in, Comprehensive)
- ✅ Backend API for CSV data
- ✅ Ready for Hadoop integration (just need Java)
- ✅ Beautiful dark-themed UI
- ✅ Responsive design

## 🎯 Next: Optional Hadoop Integration

When ready to use live data from Hadoop:

1. Install Java 8
2. Download Spark
3. Set environment variables
4. Set `HIVE_ENABLED=true` in backend/.env
5. Restart backend: `python main.py`
6. Charts will seamlessly use Hadoop data instead of CSVs

**Enjoy your Flavour Rating Dashboard!** 🍽️📊
