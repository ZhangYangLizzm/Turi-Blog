import{_ as n,o as s,c as a,a as e}from"./app.40cb2b3f.js";const t={},p=e(`<h1 id="vue-plugins" tabindex="-1"><a class="header-anchor" href="#vue-plugins" aria-hidden="true">#</a> Vue Plugins</h1><h2 id="\u81EA\u52A8\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5F15\u5165" aria-hidden="true">#</a> \u81EA\u52A8\u5F15\u5165</h2><h3 id="\u81EA\u52A8\u5F15\u5165\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a> \u81EA\u52A8\u5F15\u5165\u7EC4\u4EF6</h3><p><strong><code>unplugin-vue-components</code>--\u7528\u4E8E\u5E93\u7684\u81EA\u52A8\u5F15\u5165</strong></p><ul><li>\u81EA\u5B9A\u4E49\u7EC4\u4EF6</li><li>Vue-router\u7EC4\u4EF6</li><li>UI\u5E93\u7EC4\u4EF6\uFF08ElementPlus\uFF09</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//vite.config.ts</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>

<span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        dts<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        types<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            from<span class="token operator">:</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">,</span>
            names<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;RouterLink&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;RouterView&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//tsconfig.json</span>
<span class="token comment">//\u5728includes\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u6587\u4EF6</span>
    <span class="token string">&quot;./components.d.ts&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7528\u4E8Ehooks\u51FD\u6570\u81EA\u52A8\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u7528\u4E8Ehooks\u51FD\u6570\u81EA\u52A8\u5F15\u5165" aria-hidden="true">#</a> \u7528\u4E8Ehooks\u51FD\u6570\u81EA\u52A8\u5F15\u5165</h3><p><strong><code>unplugin-auto-import</code> --\u7528\u4E8Ehooks\u51FD\u6570\u7684\u81EA\u52A8\u5F15\u5165</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//vite.config.ts</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>

<span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        include<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.[tj]sx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// .ts, .tsx, .js, .jsx</span>
          <span class="token operator">/</span>\\<span class="token punctuation">.</span>vue$<span class="token operator">/</span><span class="token punctuation">,</span>
          <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue\\?vue</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// .vue</span>
          <span class="token operator">/</span>\\<span class="token punctuation">.</span>md$<span class="token operator">/</span><span class="token punctuation">,</span> <span class="token comment">// .md</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        dts<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        imports<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//tsconfig.json</span>
<span class="token comment">//\u5728includes\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u6587\u4EF6</span>
    <span class="token string">&quot;./auto-imports.d.ts&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u63D0\u793A</p><p>\u5F53\u4F7F\u7528Eslint\u63D2\u4EF6\u65F6\u4F1A\u6709\u51B2\u7A81\uFF0C\u89E3\u51B3\u65B9\u6CD5\u5982\u4E0B</p></div><ol><li>Enable eslintrc.enabled</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>    <span class="token comment">// &lt;!-- vite.config.ts --&gt;</span>
<span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  eslintrc<span class="token operator">:</span> <span class="token punctuation">{</span>
    enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- this</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Update your eslintrc: Extending Configuration Files</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;./.eslintrc-auto-import.json&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),i=[p];function o(c,l){return s(),a("div",null,i)}var r=n(t,[["render",o],["__file","Vue3_Plugins.html.vue"]]);export{r as default};
