import{o as a,a as t,z as n}from"./vue-libs-cc25d22f.js";const l={class:"van-doc-markdown-body"},p=n(`<h1>转盘</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>turntable是一个转盘组件</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { turntable,turntableItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;qtui&#39;</span>;

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(turntable);
<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(turntableItem);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">demo-block</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;基础用法&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">chat</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;url(https://test-resources-ic.carryu.com.cn/ic/cloud/resources/982252f620631d2d372ad4d75545de1b.png)&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">chat</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">demo-block</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">demo-block</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;设置高度&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">chat</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;url(https://test-resources-ic.carryu.com.cn/ic/cloud/resources/982252f620631d2d372ad4d75545de1b.png)&quot;</span>
      <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;1.4rem&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">chat</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">demo-block</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">demo-block</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;设置内容&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">chat</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;url(https://test-resources-ic.carryu.com.cn/ic/cloud/resources/982252f620631d2d372ad4d75545de1b.png)&quot;</span>
      <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;0.6rem&quot;</span>
      &gt;</span>爱你哟爱你哟爱你哟爱你哟爱你哟
    <span class="hljs-tag">&lt;/<span class="hljs-name">chat</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">demo-block</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> chat <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../index.vue&#39;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>


</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>气泡高度(宽度内容自动撑开，不可设置)</td><td><em>number</em></td><td><code>0.9rem</code></td></tr><tr><td>src</td><td>气泡背景url</td><td><em>number</em></td><td><code>1500</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认插槽</td></tr></tbody></table></div>`,8),c=[p],i={__name:"README",setup(e,{expose:s}){return s({frontmatter:{}}),(d,r)=>(a(),t("div",l,c))}};export{i as default};
