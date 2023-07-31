import{o as a,a as n,z as t}from"./vue-libs-cc25d22f.js";const l={class:"van-doc-markdown-body"},p=t(`<h1>转盘</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>turntable是一个转盘组件</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { turntable,turntableItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;qtui&#39;</span>;

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(turntable);
<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(turntableItem);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">demo-block</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;基础用法&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-turntable&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">turntable</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;turntableVm&quot;</span> <span class="hljs-attr">:during</span>=<span class="hljs-string">&quot;3000&quot;</span> <span class="hljs-attr">:rotate-when-ready</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">turntable-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, i) in turntable_config&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span> <span class="hljs-attr">:idx</span>=<span class="hljs-string">&quot;i&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>{{ item.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;item.icon&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">turntable-item</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">turntable</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;start-btn&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick&quot;</span>&gt;</span>
      点击抽奖（结果下标：{{ resultIdx }}）
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">demo-block</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">const</span> turntable_config = ref&lt;any[]&gt;(
  <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">8</span> }).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> ({
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;下标&#39;</span> + i,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://h5.carryu.com.cn/wcfe__test/mass2/assets/b1-354ce1e4.png&#39;</span>,
  })),
);
<span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
  turntable_config.<span class="hljs-property">value</span> = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">5</span> }).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> ({
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;下标&#39;</span> + i,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://h5.carryu.com.cn/wcfe__test/mass2/assets/b1-354ce1e4.png&#39;</span>,
  }));
  turntableVm.<span class="hljs-property">value</span> &amp;&amp; turntableVm.<span class="hljs-property">value</span>.<span class="hljs-title function_">updateSize</span>();
}, <span class="hljs-number">5000</span>);
<span class="hljs-keyword">const</span> turntableVm = ref&lt;<span class="hljs-title class_">InstanceType</span>&lt;<span class="hljs-keyword">typeof</span> turntable&gt;&gt;();
<span class="hljs-keyword">const</span> resultIdx = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
<span class="hljs-keyword">function</span> <span class="hljs-title function_">handleClick</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">if</span> (turntableVm.<span class="hljs-property">value</span>) {
    resultIdx.<span class="hljs-property">value</span> = ~~(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * turntable_config.<span class="hljs-property">value</span>.<span class="hljs-property">length</span>);
    turntableVm.<span class="hljs-property">value</span>.<span class="hljs-title function_">draw</span>(resultIdx.<span class="hljs-property">value</span>);
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="language-css">
<span class="hljs-selector-class">.my-turntable</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">7.5rem</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">7.5rem</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">0.01rem</span> solid red;
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">justify-content</span>: center;
  <span class="hljs-attribute">box-sizing</span>: border-box;
}
<span class="hljs-selector-class">.turntable-item</span> {
  <span class="hljs-attribute">padding-bottom</span>: <span class="hljs-number">0.4rem</span>;
}
<span class="hljs-selector-class">.icon</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">1rem</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">1rem</span>;
}
<span class="hljs-selector-class">.name</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">0.28rem</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>offset</td><td>偏移角度</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td>during</td><td>动画播放时间</td><td><em>number</em></td><td><code>1500</code></td></tr><tr><td>rotateWhenReady</td><td>默认动画</td><td><em>bool</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>弹窗状态改变时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>draw</td><td>播放抽奖动画</td><td>idx：<em>number</em> 结束下标</td></tr><tr><td>updateSize</td><td>奖励数量更新</td><td></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认插槽</td></tr></tbody></table></div>`,10),e=[p],o={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(r,d)=>(a(),n("div",l,e))}};export{o as default};
