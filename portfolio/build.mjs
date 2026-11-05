import fs from 'node:fs/promises';
import path from 'node:path';
import render from './src/render.mjs';
const data=JSON.parse(await fs.readFile('src/data/content.json','utf8'));
await fs.mkdir('dist',{recursive:true});
await fs.cp('public','dist',{recursive:true});
const pages=['home','about','work','lab',...data.projects.map(p=>'work/'+p.id)];
for(const lang of ['en','zh'])for(const page of pages){const route=(lang==='zh'?'zh/':'')+(page==='home'?'':page+'/');const target=path.join('dist',route,'index.html');await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,render(page,lang,data));}
await fs.writeFile('dist/404.html',render('404','en',data));
await fs.mkdir('dist/about_zh',{recursive:true});await fs.writeFile('dist/about_zh/index.html','<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/zh/about/"><title>关于吴宇辰</title><a href="/zh/about/">继续前往新版个人简介</a></html>');
await fs.writeFile('dist/robots.txt','User-agent: *\nAllow: /\nSitemap: https://yuchen0709.github.io/sitemap.xml\n');
await fs.writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+['en','zh'].flatMap(lang=>pages.map(page=>'<url><loc>https://yuchen0709.github.io/'+(lang==='zh'?'zh/':'')+(page==='home'?'':page+'/')+'</loc></url>')).join('')+'</urlset>');
console.log('Built 20 bilingual pages, 404 and legacy Chinese redirect.');
