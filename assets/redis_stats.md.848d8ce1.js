import{_ as t,c as e,o as a,a as s}from"./app.25a431af.js";const f='{"title":"Redis Stats","description":"","frontmatter":{"slug":"stats","title":"Redis Stats"},"relativePath":"redis/stats.md","lastUpdated":1644680220399}',o={},n=s(`<p>The <a href="https://github.com/ServiceStack/ServiceStack.Redis/blob/master/src/ServiceStack.Redis/RedisStats.cs" target="_blank" rel="noopener noreferrer">RedisStats</a> class provides better visibility and introspection into your running instances:</p><table><tr><td><b>TotalCommandsSent</b></td> <td>Total number of commands sent</td></tr><tr><td><b>TotalFailovers</b></td> <td>Number of times the Redis Client Managers have FailoverTo() either by sentinel or manually</td></tr><tr><td><b>TotalDeactivatedClients</b></td> <td>Number of times a Client was deactivated from the pool, either by FailoverTo() or exceptions on client</td></tr><tr><td><b>TotalFailedSentinelWorkers</b></td> <td>Number of times connecting to a Sentinel has failed</td></tr><tr><td><b>TotalForcedMasterFailovers</b></td> <td>Number of times we&#39;ve forced Sentinel to failover to another master due to consecutive errors</td></tr><tr><td><b>TotalInvalidMasters</b></td> <td>Number of times a connecting to a reported Master wasn&#39;t actually a Master</td></tr><tr><td><b>TotalNoMastersFound</b></td> <td>Number of times no Masters could be found in any of the configured hosts</td></tr><tr><td><b>TotalClientsCreated</b></td> <td>Number of Redis Client instances created with RedisConfig.ClientFactory</td></tr><tr><td><b>TotalClientsCreatedOutsidePool</b></td> <td>Number of times a Redis Client was created outside of pool, either due to overflow or reserved slot was overridden</td></tr><tr><td><b>TotalSubjectiveServersDown</b></td> <td>Number of times Redis Sentinel reported a Subjective Down (sdown)</td></tr><tr><td><b>TotalObjectiveServersDown</b></td> <td>Number of times Redis Sentinel reported an Objective Down (odown)</td></tr><tr><td><b>TotalRetryCount</b></td> <td>Number of times a Redis Request was retried due to Socket or Retryable exception</td></tr><tr><td><b>TotalRetrySuccess</b></td> <td>Number of times a Request succeeded after it was retried</td></tr><tr><td><b>TotalRetryTimedout</b></td> <td>Number of times a Retry Request failed after exceeding RetryTimeout</td></tr><tr><td><b>TotalPendingDeactivatedClients</b></td> <td>Total number of deactivated clients that are pending being disposed</td></tr></table><p>You can get and print a dump of all the stats at anytime with:</p><div class="language-csharp"><pre><code>RedisStats<span class="token punctuation">.</span><span class="token function">ToDictionary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">PrintDump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>And Reset all Stats back to <code>0</code> with <code>RedisStats.Reset()</code>.</p>`,5),r=[n];function d(i,c,l,u,b,p){return a(),e("div",null,r)}var v=t(o,[["render",d]]);export{f as __pageData,v as default};
