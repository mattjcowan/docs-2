import{_ as n,c as s,o as a,a as t}from"./app.25a431af.js";const g='{"title":"OrmLite Stored Procedure Usage","description":"","frontmatter":{"title":"OrmLite Stored Procedure Usage"},"headers":[{"level":2,"title":"Stored Procedures with output params","slug":"stored-procedures-with-output-params"}],"relativePath":"ormlite/stored-procedures.md","lastUpdated":1644680220379}',p={},e=t(`<p>The Raw SQL APIs provide a convenient way for mapping results of any Custom SQL like executing Stored Procedures:</p><div class="language-csharp"><pre><code><span class="token class-name">List<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span> results <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">SqlList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;EXEC GetAnalyticsForWeek 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span> results <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">SqlList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>
    <span class="token string">&quot;EXEC GetAnalyticsForWeek @weekNo&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> weekNo <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> results <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">SqlList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;EXEC GetTotalsForWeek 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> results <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">SqlList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>
    <span class="token string">&quot;EXEC GetTotalsForWeek @weekNo&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> weekNo <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">int</span></span> result <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">SqlScalar</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;SELECT 10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="stored-procedures-with-output-params" tabindex="-1">Stored Procedures with output params <a class="header-anchor" href="#stored-procedures-with-output-params" aria-hidden="true">#</a></h2><p>The <code>SqlProc</code> API provides even greater customization by letting you modify the underlying <a href="http://ADO.NET" target="_blank" rel="noopener noreferrer">ADO.NET</a> Stored Procedure call by returning a prepared <code>IDbCommand</code> allowing for advanced customization like setting and retrieving OUT parameters, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">string</span></span> spSql <span class="token operator">=</span> <span class="token string">@&quot;DROP PROCEDURE IF EXISTS spSearchLetters;
    CREATE PROCEDURE spSearchLetters (IN pLetter varchar(10), OUT pTotal int)
    BEGIN
        SELECT COUNT(*) FROM LetterFrequency WHERE Letter = pLetter INTO pTotal;
        SELECT * FROM LetterFrequency WHERE Letter = pLetter;
    END&quot;</span><span class="token punctuation">;</span>

db<span class="token punctuation">.</span><span class="token function">ExecuteSql</span><span class="token punctuation">(</span>spSql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> cmd <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">SqlProc</span><span class="token punctuation">(</span><span class="token string">&quot;spSearchLetters&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> pLetter <span class="token operator">=</span> <span class="token string">&quot;C&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> pTotal <span class="token operator">=</span> cmd<span class="token punctuation">.</span><span class="token function">AddParam</span><span class="token punctuation">(</span><span class="token string">&quot;pTotal&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">direction</span><span class="token punctuation">:</span> ParameterDirection<span class="token punctuation">.</span>Output<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> results <span class="token operator">=</span> cmd<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConvertToList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>LetterFrequency<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> total <span class="token operator">=</span> pTotal<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>An alternative approach is to use <code>SqlList</code> which lets you use a filter to customize a Stored Procedure or any other command type, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name">IDbDataParameter</span> pTotal <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> results <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">SqlList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>LetterFrequency<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;spSearchLetters&quot;</span><span class="token punctuation">,</span> cmd <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        cmd<span class="token punctuation">.</span>CommandType <span class="token operator">=</span> CommandType<span class="token punctuation">.</span>StoredProcedure<span class="token punctuation">;</span>
        cmd<span class="token punctuation">.</span><span class="token function">AddParam</span><span class="token punctuation">(</span><span class="token string">&quot;pLetter&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pTotal <span class="token operator">=</span> cmd<span class="token punctuation">.</span><span class="token function">AddParam</span><span class="token punctuation">(</span><span class="token string">&quot;pTotal&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">direction</span><span class="token punctuation">:</span> ParameterDirection<span class="token punctuation">.</span>Output<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> total <span class="token operator">=</span> pTotal<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
</code></pre></div><p>More examples can be found in <a href="https://github.com/ServiceStack/ServiceStack.OrmLite/blob/master/tests/ServiceStack.OrmLite.Tests/SqlServerProviderTests.cs" target="_blank" rel="noopener noreferrer">SqlServerProviderTests</a>.</p>`,8),o=[e];function c(u,l,r,i,k,d){return a(),s("div",null,o)}var S=n(p,[["render",c]]);export{g as __pageData,S as default};
