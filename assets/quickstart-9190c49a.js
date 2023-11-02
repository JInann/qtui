import{o as a,a as n,z as t}from"./vue-libs-6742f699.js";const c={class:"van-doc-markdown-body"},p=t(`<h1>快速上手</h1><div class="van-doc-card"><h3 id="an-zhuang" tabindex="-1">安装</h3><pre><code class="language-bash"><span class="hljs-comment"># 通过 npm</span>
npm i qtui

<span class="hljs-comment"># 通过 yarn</span>
yarn add qtui

<span class="hljs-comment"># 通过 pnpm</span>
pnpm add qtui
</code></pre></div><div class="van-doc-card"><h3 id="shi-yong" tabindex="-1">使用</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> qtui <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@fkjs/qtui&#39;</span>;
<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>(<span class="hljs-title class_">App</span>);
app.<span class="hljs-title function_">use</span>(qtui);
</code></pre></div>`,3),e=[p],h={setup(o,{expose:s}){return s({frontmatter:{}}),(d,i)=>(a(),n("div",c,e))}};export{h as default};
