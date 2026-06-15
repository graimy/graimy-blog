---
title: '因果推断入门笔记'
description: '记录因果识别、工具变量与双重差分的基本框架与直觉。'
pubDate: 'Mar 10 2025'
category: 'research'
tags: ['causal inference', 'econometrics']
---

在实证研究中，我们关心的往往不是「$X$ 与 $Y$ 是否相关」，而是「若干预 $X$，$Y$ 会如何变化」。因果推断的核心，是在观察数据中重建某种意义上的反事实。

## 潜在结果框架

令 $Y_i(1)$ 与 $Y_i(0)$ 分别表示个体 $i$ 在接受/未接受处理时的结果，则个体层面的因果效应为：

$$
\tau_i = Y_i(1) - Y_i(0)
$$

平均处理效应（ATE）定义为：

$$
ATE = \mathbb{E}[Y(1) - Y(0)]
$$

## 一段简单的 Python 示例

```python
import numpy as np

# 模拟处理组与控制组
treated = np.random.normal(1.2, 0.5, size=200)
control = np.random.normal(0.8, 0.5, size=200)
ate_hat = treated.mean() - control.mean()
print(f"Estimated ATE: {ate_hat:.3f}")
```

## 阅读清单

- Angrist & Pischke, *Mostly Harmful Econometrics*
- Cunningham, *Causal Inference: The Mixtape*
