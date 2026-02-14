// Projects configuration
export const projectsConfig = {
  images: [
    "/svg/project1.svg",
    "/svg/project2.svg",
    "/svg/project3.svg",
    "/svg/project4.svg",
    "/svg/project5.svg",
    "/svg/project6.svg",
  ],
  projects: [
    {
      title: "Simple Bank",
      description:
        "simpleBank 是基于 Go 构建的轻量级银行系统，实现账户管理、资金转账、身份认证等核心功能，支持容器化部署，聚焦后端金融业务逻辑与安全认证实践。",
      technologies: ["Golang", "JWT/PASETO", "SQLC", "Docker & Docker Compose","Unit Test"],
      liveLink: "#",
      githubLink: "https://github.com/Squidwa2d/simpleBank",
    },
     {
      title: "HPE-Based-CSI-and-Light",
      description:
        "该项目融合人体姿态估计（HPE）、CSI 信道状态信息与光传感数据，构建多模态感知模型，实现复杂场景下人体行为的精准识别，适用于智能安防等领域。",
      technologies: ["PyTorch", "Python", "OpenCV"],
      liveLink: "#",
      githubLink: "https://github.com/Squidwa2d/HPE-Based-CSI-and-Light",
    },
    {
      title: "MR - 蘑菇追踪机器人小车控制系统",
      description:
        "一个基于Python开发的机器人小车控制系统，运行于树莓派平台，实现机器人小车的远程TCP控制、云台舵机调节、摄像头视频流传输及蘑菇目标视觉追踪功能。",
      technologies: ["Python", "OpenCV", "NumPy", "Threading"],
      liveLink: "#",
      githubLink: "https://github.com/Squidwa2d/MR",
    },
    {
      title: "Huffman-Compressor",
      description:
        "一个基于霍夫曼编码（Huffman Coding）实现的文件压缩工具，核心围绕霍夫曼树的构建、编码生成、文件压缩与解压缩逻辑开发，能够对文件进行无损压缩，有效减少文件存储体积，支持常见文件格式的压缩和解压缩操作。",
      technologies: ["Huffman Coding", "CPP"],
      liveLink: "#",
      githubLink: "https://github.com/Squidwa2d/Huffman-Compressor",
    },
    {
      title: "wingardium-leviosa",
      description:
        "一款融合硬件采集、物联网通信与机器学习的智能魔法棒项目，通过ESP32搭配MPU6050陀螺仪采集手势数据，经MQTT协议传输至主机，依托SVM模型识别动作，实现手势操控自动开门等设备的功能，兼具创意性与可扩展性。",
      technologies: ["ESP32","MQTT", "SVM", "Python"],
      liveLink: "#",
      githubLink: "https://github.com/Squidwa2d/wingardium-leviosa",
    },
    {
      title: "Vehicle-License-Plate-Recognition",
      description:
        "该项目基于 YOLOv8 实现车牌分割，检测识别不同交通场景下的车牌，采用 CCPD2019/2020 数据集，完成数据预处理、模型训练等核心流程，服务于智能交通系统。",
      technologies: ["YOLOv8", "Python"],
      liveLink: "#",
      githubLink: "https://github.com/Squidwa2d/Vehicle-License-Plate-Recognition",
    },
  ],
};

