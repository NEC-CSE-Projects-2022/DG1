# 🏥 Lightweight Blockchain-Enabled Federated Deep Learning (LB-FDL)
## Secure Healthcare IoT Intrusion Detection

This repository implements a **privacy-preserving and secure deep learning framework**
for **Healthcare IoT (hIoT) cyber-attack detection** by integrating:

- Federated Learning (FL)
- Blockchain (Optimized Proof-of-Stake)
- Differential Privacy (DP)
- Lightweight Deep Learning Models

The system is evaluated using **real-world IoT cybersecurity datasets** that simulate
realistic healthcare IoT traffic and multiple cyber-attack scenarios.

---

## 📌 Dataset Information

### 1️⃣ IoT Healthcare Security Dataset
- **Source:** Kaggle  
- **Dataset Link:**  
  https://www.kaggle.com/datasets/faisalmalik/iot-healthcare-security-dataset  

This dataset focuses on **security threats in healthcare IoT environments**, including
malicious activities targeting medical sensors, wearable devices, gateways, and hospital
networks.

---

### 2️⃣ ToN-IoT Dataset
- **Source:** Kaggle  
- **Dataset Link:**  
  https://www.kaggle.com/datasets/amaniabourida/ton-iot  

The **ToN-IoT dataset** is a large-scale benchmark dataset designed for evaluating
**intrusion detection systems** in IoT and Industrial IoT (IIoT) environments.

---

## 📊 Dataset Overview

### 🔹 ToN-IoT Dataset Summary

| Category        | Records     |
|-----------------|-------------|
| Normal Traffic  | 796,380     |
| Backdoor        | 508,116     |
| DoS / DDoS     | 3,375,328   |
| XSS            | 21,089,844  |
| **Total**      | **25M+**    |

- **Task:** Binary / Multi-class Classification  
- **Domain:** Healthcare IoT Security  
- **File Format:** CSV  
- **Labels:** Normal / Attack Types  

---

## 🧠 Why These Datasets?

- Realistic **Healthcare IoT traffic simulation**
- Multiple **network-based cyber-attack scenarios**
- Suitable for **Federated Learning environments**
- Supports **privacy-preserving analytics**
- Widely used in **IEEE and academic research**
- Ideal for **Blockchain-enabled secure learning**

---

## 📁 Dataset Directory Structure

After extraction:

''text
datasets/
├── ton_iot/
│   ├── train.csv
│   ├── test.csv
│   └── labels.csv
│
├── healthcare_iot/
│   ├── healthcare_train.csv
│   ├── healthcare_test.csv
│   └── features.csv
📄 File-wise Description
🔹 Training Files
Used for local training on Healthcare IoT edge devices

Each device trains its model independently

Raw data never leaves the device (Federated Learning principle)

🔹 Testing Files
Used for global model evaluation

Performance metrics include:

Accuracy

Precision

Recall

F1-score

Evaluates robustness against unseen attack patterns

🧬 Data Structure (Sample Record)
Each record contains network-level and device-level features:

{
  "src_ip": "192.168.1.10",
  "dst_ip": "192.168.1.1",
  "protocol": "TCP",
  "packet_size": 512,
  "flow_duration": 0.23,
  "attack_type": "DoS"
}
🏷️ Label Information
Normal → Legitimate Healthcare IoT traffic

Backdoor → Unauthorized access attempts

DoS / DDoS → Service disruption attacks

XSS → Injection-based attacks

✅ Summary
These datasets enable realistic evaluation of the proposed LB-FDL framework
by simulating real healthcare IoT environments.
By combining Federated Learning, Blockchain, and Differential Privacy,
the system achieves secure, scalable, and privacy-compliant intrusion detection
suitable for real-world healthcare deployments.
