---
title: "HPE-Based-CSI-and-Light"
date: "6/27/2025"
author: "Squidwa2d"
tags: ["PyTorch", "Python", "OpenCV"]
readTime: "1 min read"
excerpt: "该项目融合人体姿态估计（HPE）、CSI 信道状态信息与光传感数据，构建多模态感知模型，实现复杂场景下人体行为的精准识别，适用于智能安防等领域。"
---

# HPE-Based-CSI-and-Light
基于人体姿态估计（HPE）融合CSI（信道状态信息）与光传感数据的多模态感知项目，实现对人体行为的精准识别与场景感知。

## 项目简介
本项目创新性地结合人体姿态估计、无线CSI信号和光传感数据，构建多维度感知模型，提升复杂场景下人体行为识别的准确性与鲁棒性，可应用于智能安防、智能家居等领域。

## 技术栈
- Python
- OpenCV（人体姿态估计图像处理）
- PyTorch/TensorFlow（模型训练与推理）
- CSI信号处理
- 光传感数据采集与解析
- 多模态数据融合算法

## 快速开始
### 环境依赖
```bash
pip install opencv-python torch numpy pandas scipy
```

### 运行示例
```bash
python main.py --data_path ./dataset --model hpe_csi_light
```

## 数据说明
- 包含CSI信号数据集、光传感采集数据、人体姿态图像/视频数据集
- 数据预处理脚本位于`./preprocess`目录

## 核心功能
1. 多源数据采集与同步
2. 人体姿态关键点检测
3. CSI与光信号特征提取
4. 多模态数据融合与行为识别

## 许可证
本项目采用MIT许可证开源，详见LICENSE文件。

### 总结
1. 项目核心是融合HPE、CSI、光传感实现人体行为识别，面向智能安防等场景；
2. 核心技术栈涵盖Python、CV框架、深度学习框架及多模态数据处理；
3. 提供环境配置、运行示例，清晰划分数据处理与核心功能模块。
