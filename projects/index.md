# 项目作品

## 气象算法工程

### [相似台风查询与路径预测系统](/projects/typhoon-model)
> Python · 深度学习 · 时序匹配算法 · 气象业务工程

基于 4289 场西北太平洋历史台风数据，构建「相似检索 + 路径预测 + 融合修正」全链路智能预报平台。
采用 LCSS+FastDTW 两级检索架构，搭配 Seq2Seq-GRU 与 TCN 三模型集合预报，72h 预报误差相比基线下降 45%。
配套严格无泄漏实验协议与完整可视化输出，可直接对接业务会商场景。

[查看详情 →](/projects/typhoon-model) | [GitHub 仓库](https://github.com/MichaelAoE/typhoon-track-prediction)

---

## 环境与工程建模

### 澜湄智能农业污水监测与处理模型
> 3D 建模 · 环境工程 · 污水处理工艺 · 智能监测

面向澜湄流域农业面源污染场景，设计一体化污水处理装置方案，完成全流程 3D 结构建模与工艺仿真。
结合水质监测数据与水力模型，优化处理单元参数布局，支撑农业污水资源化与生态治理方案落地。

[查看详情 →](/projects/lanmei-sewage)

---

## 数据分析与商业智能

### 豆瓣影视数据分析与 BI 可视化
> MySQL · SQL 数据清洗 · BI 可视化 · 用户画像分析

基于豆瓣影视评分与评论数据集，通过 MySQL 完成多表数据清洗、指标计算与特征挖掘，搭建 BI 可视化看板。
从内容类型、用户偏好、评分分布等维度输出分析结论，沉淀标准化数据分析与报表输出流程。

[查看详情 →](/projects/douban-analysis)

---

## 深度学习与算法基础

### [CIFAR-10 图像分类与批量归一化研究](/projects/cifar10-cnn)
> Python · PyTorch · CNN · 消融实验

基于 VGG-A 网络实现 CIFAR-10 十分类任务，对比有无 Batch Normalization 对训练收敛速度、泛化精度的影响，配套损失景观可视化脚本与多组对照实验。

[查看详情 →](/projects/cifar10-cnn) | [GitHub 仓库](https://github.com/MichaelAoE/PJ2_CIFAR10_BN)

---

### [纯 NumPy 实现 MLP 与 CNN 手写数字识别](/projects/mnist-numpy)
> Python · 神经网络底层实现 · 正则化实验

不依赖深度学习框架，纯 NumPy 从零实现多层感知机与卷积神经网络，完整覆盖前向传播、反向传播、参数更新全流程，包含 Dropout 正则化、学习率衰减等消融实验。

[查看详情 →](/projects/mnist-numpy) | [GitHub 仓库](https://github.com/MichaelAoE/mnist-nn-mlp-cnn)
