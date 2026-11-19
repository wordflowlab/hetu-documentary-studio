import {artifact} from './artifact.ts';
import {loadMedia,checkBounds,textArtifact} from './media-files.ts';
import {find} from './shared.ts';
import {validateDomain,validateTransition,sequenceBasis,targetDigest,sequenceView,claimsReport,checkDocumentary,paperText} from './documentary.ts';
export {validateDomain,validateTransition};
export async function checkSources(p:any,s:any[],r:any){const media=await loadMedia(p.media,s,r,true);checkBounds(p.excerpts,media,'media_id');}
export async function pureAction(_a:string,_i:any){return undefined;}
export async function writeProfessional(_a:string,_p:any,_s:any[],_i:any,..._rest:any[]){throw Error('未知专业写动作。');}
export function summaries(p:any){return [{title:'纪录片目标',lines:[p.brief]},{title:'完整纸剪',lines:[paperText(p)]},{title:'固定采访',lines:p.excerpts.map((e:any)=>e.speaker+'：“'+e.quote+'”\n'+e.in_ms+'～'+e.out_ms+'ms；'+e.timing_note)},{title:'研究问题',lines:p.questions.map((q:any)=>q.question+'\n'+q.resolution)},{title:'叙事主张',lines:p.claims.map((c:any)=>c.statement+'\n范围：'+c.scope)},{title:'证词关系',lines:p.links.map((l:any)=>find(p.claims,l.claim_id).statement+' ← '+({supports:'支持',contradicts:'反证',context:'背景'} as any)[l.relation]+'：'+find(p.excerpts,l.excerpt_id).quote+'\n'+l.reason)},{title:'意见与复核',lines:p.notes.map((n:any)=>n.comment+'\n'+n.resolution).concat(JSON.stringify(checkDocumentary(p),null,2))}];}
export async function readProfessional(a:string,p:any,s:any[],i:any,r:any){
 if(a==='target_digest')return {target_sha256:targetDigest(p,i.target_kind,i.target_id)};
 if(a==='check_documentary')return checkDocumentary(p);
 if(a==='claim_report')return {claims:claimsReport(p)};
 if(a==='sequence_basis')return {basis_sha256:sequenceBasis(p,i.items)};
 if(a==='sequence_view')return sequenceView(p,i.sequence_id,await loadMedia(p.media,s,r,true));
 if(a==='compare_sequences')return {from:sequenceView(p,i.from_id),to:sequenceView(p,i.to_id),note:'比较叙事与原片范围，不自动决定事实或导演取舍。'};
 if(a==='inspect_media'){const m=(await loadMedia(p.media,s,r,true)).get(i.media_id);if(!m)throw Error('媒体不存在。');const {bytes,...meta}=m;return meta;}
 if(a==='read_excerpt_media'){const e=find(p.excerpts,i.excerpt_id),m=(await loadMedia(p.media,s,r,true)).get(e.media_id);return {...artifact(m.bytes,m.media_type==='video/mp4'?'采访原片.mp4':'采访原片.wav',m.media_type,i),range:{in_ms:e.in_ms,out_ms:e.out_ms},excerpt:e};}
 if(a==='export_paper')return artifact(paperText(p),'纪录片纸剪.txt','text/plain',i);
 if(a==='export_review'){const {reportHTML}=await import('./report.ts');return artifact(reportHTML({project:p}),'纪录片审核本.html','text/html',i);}
 if(a==='export_edit_map'){const view=sequenceView(p,i.sequence_id,await loadMedia(p.media,s,r,true));return textArtifact(JSON.stringify({format:'hetu.documentary.paper-edit',version:1,work_ref:s[0]?.source_ref?.work_ref??null,...view},null,2)+'\n','纪录片纸剪映射.json',i);}
}
