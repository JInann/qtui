import{o as a,a as t,z as n}from"./vue-libs-cc25d22f.js";const l={class:"van-doc-markdown-body"},p=n(`<h1>弹窗</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>popup是一个弹窗组件</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;qtui&#39;</span>;

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(popup);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;p1&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-popup-content&quot;</span>&gt;</span>
        这是内容
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">popup</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openClick&quot;</span>&gt;</span>打开<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
    <span class="hljs-keyword">const</span> p1 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">function</span> <span class="hljs-title function_">openClick</span>(<span class="hljs-params"></span>){
      p1.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>
    }
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.my-popup-content</span>{
    <span class="hljs-attribute">width</span>: <span class="hljs-number">1rem</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">1rem</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#ffffff</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#000000</span>;
  }
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>进入方向</td><td><em>bool</em></td><td><code>false</code></td></tr><tr><td>type</td><td>进入方向</td><td><em>center/letf/top/right/bottom</em></td><td><code>center</code></td></tr><tr><td>align</td><td>对齐方式</td><td><em>center/letf/top/right/bottom</em></td><td><code>center</code></td></tr><tr><td>clickMaskClose</td><td>点击蒙层关闭</td><td><em>bool</em></td><td>true</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>弹窗状态改变时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认插槽</td></tr></tbody></table></div>`,9),e=[p],i={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(h,o)=>(a(),t("div",l,e))}};export{i as default};
