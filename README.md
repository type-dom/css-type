# css-type

基于TypeScript的CSS类型定义库，提供类型安全的CSS属性、值和工具类型，帮助开发者在TypeScript项目中编写更可靠的CSS代码。

---

## 特性

- 完整的CSS属性类型定义（如`color`, `flex`, `transition`等）
- 常用CSS值类型集合（如颜色值、长度单位、定位值等）
- 基于CSS规范的类型推导
- 支持自定义类型扩展
- 兼容现代CSS特性（如CSS Grid, Flexbox等）

---

## 安装

    bash npm install @type-dom/css-type --save
    或
    yarn add @type-dom/css-type

---

## 快速上手

### 基础用法

    typescript
    import type { CSSProperties } from '@type-dom/css-type';
    const componentStyle: CSSProperties = { display: 'flex', // ✅ 合法值
    flexDirection: 'row', // ✅ 合法值
    invalidProp: 'error', // ❌ 类型报错
    padding: '1rem 2rem', // ✅ 合法值
    borderRadius: '50%', // ✅ 合法值 };

### 扩展类型定义

    typescript
    import type { CSSProperties, CSSLength } from '@type-dom/css-type';
    type CustomCSSProperties = CSSProperties & { '--custom-var': CSSLength; // 声明自定义CSS变量类型 };
    const extendedStyle: CustomCSSProperties = { '--custom-padding': '1.5rem', // ✅ 合法值 };

---

## 核心类型

### `CSSProperties`

包含所有标准CSS属性的类型定义，例如：

| 属性名           | 允许值类型                          |
|------------------|------------------------------------|
| `color`          | `CSSColor`                        |
| `display`        | `'none' | 'block' | 'flex' | ...` |
| `padding`        | `CSSLength | CSSPercentage`       |
| `transition`     | `CSSTransitionProperty`           |
| `gap`            | `CSSLength`                       |

### 基础值类型

- **CSSColor**：支持`#RRGGBB`、`rgb()`、`hsl()`等格式
- **CSSLength**：支持`px`、`rem`、`em`、`%`等单位
- **CSSPosition**：`top`、`bottom`、`left`、`right`等定位值
- **CSSDisplay**：所有合法display属性值集合

---

## 兼容性

- 支持所有现代浏览器
- 需要 TypeScript 4.0+ 版本
- 兼容主流CSS预处理器（Sass/Less）

---

## 贡献指南

1. Fork仓库并创建新分支
2. 修改类型定义时请参考最新[CSS规范](https://www.w3.org/Style/CSS/)
3. 提交PR前运行测试：`npm run test`
4. 遵循[贡献规范](CONTRIBUTING.md)

---

## 许可证

MIT License © TypeDom Team
