# 纪录片策划

> 把固定采访、不同证词与实际素材选段组织成可复核、可继续修改的纸上剪辑。

## 简介

河图洛书的独立创作插件，由外部Codex通过河图CLI／MCP读取包内Skill并操作。纪实写作维护文章核实，本包拥有采访素材选段和纪录片叙事纸剪；视听制作拥有实际剪辑与成片。本包不联系受访者、不认证事实、不生成或发布影片、不按叙事推断拍摄及传播权。

## 角色分流

- 作者使用 → [插件中心](https://hetu.limeai.run/plugins/documentary-studio/)
- Agent与功能Review → [功能清单](CAPABILITIES.md)
- 开发与维护 → [完整设计文档](docs/README.md)

## 快速上手

开发需要Node.js 25，安装与验收基线为河图0.12.6。

```bash
npm ci
npm run build
npm run check
npm run test:unit
npm run package
```

## 边界

专业成果沿固定来源与修订接续，正文采纳、定稿、费用和外发独立决定。发行及实际验收范围见[实施记录](docs/08-实施计划与验收记录.md)。
