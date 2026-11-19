# 纪录片策划功能清单

本包拥有专业能力；宿主拥有正文、来源与作者决定。

| 动作 | 用途 | 必填参数 | 效果 |
| --- | --- | --- | --- |
| list_projects | 查找专业工程 |  | read |
| get_project | 读取固定专业工程 | object_id | read |
| save_project | 保存完整专业工程 | expected_revision, expected_sha256, operation_key, content | managed_write |
| get_source | 分块读取固定来源 | object_id, source_index | read |
| get_basis | 读取固定专业依据 | object_id, basis_index | read |
| compare_versions | 比较固定专业修订 | object_id, from_revision, to_revision | read |
| export_project | 分块导出完整专业数据 | object_id, format | read |
| build_context | 准备有界创作上下文 | object_id, goal, max_chars | read |
| create_handoff | 准备本工程AI接续 | object_id, goal | read |
| get_operation | 回读原操作 | operation_key | read |
| put_media | 维护固定媒体 | object_id, expected_revision, expected_sha256, operation_key, media | managed_write |
| put_excerpt | 维护采访选段 | object_id, expected_revision, expected_sha256, operation_key, excerpt | managed_write |
| put_question | 维护研究问题 | object_id, expected_revision, expected_sha256, operation_key, question | managed_write |
| remove_question | 移除研究问题 | object_id, expected_revision, expected_sha256, operation_key, question_id | managed_write |
| put_claim | 维护叙事主张 | object_id, expected_revision, expected_sha256, operation_key, claim | managed_write |
| remove_claim | 移除叙事主张 | object_id, expected_revision, expected_sha256, operation_key, claim_id | managed_write |
| put_link | 维护证词关系 | object_id, expected_revision, expected_sha256, operation_key, link | managed_write |
| remove_link | 移除证词关系 | object_id, expected_revision, expected_sha256, operation_key, link_id | managed_write |
| put_sequence | 维护纸上剪辑 | object_id, expected_revision, expected_sha256, operation_key, sequence | managed_write |
| remove_sequence | 移除纸上剪辑 | object_id, expected_revision, expected_sha256, operation_key, sequence_id | managed_write |
| put_note | 维护固定意见 | object_id, expected_revision, expected_sha256, operation_key, note | managed_write |
| remove_note | 移除固定意见 | object_id, expected_revision, expected_sha256, operation_key, note_id | managed_write |
| target_digest | 读取固定目标摘要 | object_id, target_kind, target_id | read |
| check_documentary | 检查素材证词与过期纸剪 | object_id | read |
| sequence_basis | 固定选定纸剪依据 | object_id, items | read |
| sequence_view | 读取纸剪时长与原片映射 | object_id, sequence_id | read |
| compare_sequences | 比较两种纸剪 | object_id, from_id, to_id | read |
| claim_report | 读取支持反证与叙事缺口 | object_id | read |
| inspect_media | 核验真实媒体元数据 | object_id, media_id | read |
| read_excerpt_media | 读取实际选段原片 | object_id, excerpt_id | read |
| export_paper | 导出完整专业阅读本 | object_id | read |
| export_review | 导出完整审核本 | object_id | read |
| export_edit_map | 导出固定映射JSON | object_id, sequence_id | read |

默认流程、边界及验收见 [docs](docs/README.md)。
