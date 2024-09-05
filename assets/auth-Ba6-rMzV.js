import{S as A,s as m,n as N,i as F,d as w,t as W,f as H,g as G,h as P,k as J,l as y,m as X,o as Y,r as f,p as B,q as Z,v as _,c as g,b as v}from"./index-Dp8myGws.js";class $ extends A{constructor(t,e){super(),this.client=t,this.options=e,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(e)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),D(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return I(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return I(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,e){const r=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),m(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const n=this.hasListeners();n&&L(this.currentQuery,u,this.options,r)&&this.executeFetch(),this.updateResult(e),n&&(this.currentQuery!==u||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const i=this.computeRefetchInterval();n&&(this.currentQuery!==u||this.options.enabled!==r.enabled||i!==this.currentRefetchInterval)&&this.updateRefetchInterval(i)}getOptimisticResult(t){const e=this.client.getQueryCache().build(this.client,t),r=this.createResult(e,t);return et(this,r,t)&&(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(t){const e={};return Object.keys(t).forEach(r=>{Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),e}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...e}={}){return this.fetch({...e,meta:{refetchPage:t}})}fetchOptimistic(t){const e=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){var e;return this.executeFetch({...t,cancelRefetch:(e=t.cancelRefetch)!=null?e:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let e=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(N)),e}updateStaleTimeout(){if(this.clearStaleTimeout(),F||this.currentResult.isStale||!w(this.options.staleTime))return;const e=W(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},e)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(F||this.options.enabled===!1||!w(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||H.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,e){const r=this.currentQuery,u=this.options,n=this.currentResult,i=this.currentResultState,c=this.currentResultOptions,o=t!==r,l=o?t.state:this.currentQueryInitialState,h=o?this.currentResult:this.previousQueryResult,{state:a}=t;let{dataUpdatedAt:S,error:M,errorUpdatedAt:U,fetchStatus:b,status:R}=a,k=!1,T=!1,p;if(e._optimisticResults){const d=this.hasListeners(),O=!d&&D(t,e),z=d&&L(t,r,e,u);(O||z)&&(b=G(t.options.networkMode)?"fetching":"paused",S||(R="loading")),e._optimisticResults==="isRestoring"&&(b="idle")}if(e.keepPreviousData&&!a.dataUpdatedAt&&h!=null&&h.isSuccess&&R!=="error")p=h.data,S=h.dataUpdatedAt,R=h.status,k=!0;else if(e.select&&typeof a.data<"u")if(n&&a.data===(i==null?void 0:i.data)&&e.select===this.selectFn)p=this.selectResult;else try{this.selectFn=e.select,p=e.select(a.data),p=P(n==null?void 0:n.data,p,e),this.selectResult=p,this.selectError=null}catch(d){this.selectError=d}else p=a.data;if(typeof e.placeholderData<"u"&&typeof p>"u"&&R==="loading"){let d;if(n!=null&&n.isPlaceholderData&&e.placeholderData===(c==null?void 0:c.placeholderData))d=n.data;else if(d=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof d<"u")try{d=e.select(d),this.selectError=null}catch(O){this.selectError=O}typeof d<"u"&&(R="success",p=P(n==null?void 0:n.data,d,e),T=!0)}this.selectError&&(M=this.selectError,p=this.selectResult,U=Date.now(),R="error");const C=b==="fetching",Q=R==="loading",E=R==="error";return{status:R,fetchStatus:b,isLoading:Q,isSuccess:R==="success",isError:E,isInitialLoading:Q&&C,data:p,dataUpdatedAt:S,error:M,errorUpdatedAt:U,failureCount:a.fetchFailureCount,failureReason:a.fetchFailureReason,errorUpdateCount:a.errorUpdateCount,isFetched:a.dataUpdateCount>0||a.errorUpdateCount>0,isFetchedAfterMount:a.dataUpdateCount>l.dataUpdateCount||a.errorUpdateCount>l.errorUpdateCount,isFetching:C,isRefetching:C&&!Q,isLoadingError:E&&a.dataUpdatedAt===0,isPaused:b==="paused",isPlaceholderData:T,isPreviousData:k,isRefetchError:E&&a.dataUpdatedAt!==0,isStale:x(t,e),refetch:this.refetch,remove:this.remove}}updateResult(t){const e=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,m(r,e))return;this.currentResult=r;const u={cache:!0},n=()=>{if(!e)return!0;const{notifyOnChangeProps:i}=this.options,c=typeof i=="function"?i():i;if(c==="all"||!c&&!this.trackedProps.size)return!0;const o=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&o.add("error"),Object.keys(this.currentResult).some(l=>{const h=l;return this.currentResult[h]!==e[h]&&o.has(h)})};(t==null?void 0:t.listeners)!==!1&&n()&&(u.listeners=!0),this.notify({...u,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const e={};t.type==="success"?e.onSuccess=!t.manual:t.type==="error"&&!J(t.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()}notify(t){y.batch(()=>{if(t.onSuccess){var e,r,u,n;(e=(r=this.options).onSuccess)==null||e.call(r,this.currentResult.data),(u=(n=this.options).onSettled)==null||u.call(n,this.currentResult.data,null)}else if(t.onError){var i,c,o,l;(i=(c=this.options).onError)==null||i.call(c,this.currentResult.error),(o=(l=this.options).onSettled)==null||o.call(l,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function tt(s,t){return t.enabled!==!1&&!s.state.dataUpdatedAt&&!(s.state.status==="error"&&t.retryOnMount===!1)}function D(s,t){return tt(s,t)||s.state.dataUpdatedAt>0&&I(s,t,t.refetchOnMount)}function I(s,t,e){if(t.enabled!==!1){const r=typeof e=="function"?e(s):e;return r==="always"||r!==!1&&x(s,t)}return!1}function L(s,t,e,r){return e.enabled!==!1&&(s!==t||r.enabled===!1)&&(!e.suspense||s.state.status!=="error")&&x(s,e)}function x(s,t){return s.isStaleByTime(t.staleTime)}function et(s,t,e){return e.keepPreviousData?!1:e.placeholderData!==void 0?t.isPlaceholderData:!m(s.getCurrentResult(),t)}class st extends A{constructor(t,e){super(),this.client=t,this.setOptions(e),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var e;const r=this.options;this.options=this.client.defaultMutationOptions(t),m(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(e=this.currentMutation)==null||e.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const e={listeners:!0};t.type==="success"?e.onSuccess=!0:t.type==="error"&&(e.onError=!0),this.notify(e)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:X(),e={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=e}notify(t){y.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var e,r,u,n;(e=(r=this.mutateOptions).onSuccess)==null||e.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(u=(n=this.mutateOptions).onSettled)==null||u.call(n,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var i,c,o,l;(i=(c=this.mutateOptions).onError)==null||i.call(c,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(o=(l=this.mutateOptions).onSettled)==null||o.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)})})}}const j=Y.useSyncExternalStore,K=f.createContext(!1),rt=()=>f.useContext(K);K.Provider;function nt(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}const it=f.createContext(nt()),ut=()=>f.useContext(it);function q(s,t){return typeof s=="function"?s(...t):!!s}const ct=(s,t)=>{(s.suspense||s.useErrorBoundary)&&(t.isReset()||(s.retryOnMount=!1))},ot=s=>{f.useEffect(()=>{s.clearReset()},[s])},at=({result:s,errorResetBoundary:t,useErrorBoundary:e,query:r})=>s.isError&&!t.isReset()&&!s.isFetching&&q(e,[s.error,r]),lt=s=>{s.suspense&&typeof s.staleTime!="number"&&(s.staleTime=1e3)},ht=(s,t)=>s.isLoading&&s.isFetching&&!t,dt=(s,t,e)=>(s==null?void 0:s.suspense)&&ht(t,e),ft=(s,t,e)=>t.fetchOptimistic(s).then(({data:r})=>{s.onSuccess==null||s.onSuccess(r),s.onSettled==null||s.onSettled(r,null)}).catch(r=>{e.clearReset(),s.onError==null||s.onError(r),s.onSettled==null||s.onSettled(void 0,r)});function pt(s,t){const e=B({context:s.context}),r=rt(),u=ut(),n=e.defaultQueryOptions(s);n._optimisticResults=r?"isRestoring":"optimistic",n.onError&&(n.onError=y.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=y.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=y.batchCalls(n.onSettled)),lt(n),ct(n,u),ot(u);const[i]=f.useState(()=>new t(e,n)),c=i.getOptimisticResult(n);if(j(f.useCallback(o=>{const l=r?()=>{}:i.subscribe(y.batchCalls(o));return i.updateResult(),l},[i,r]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),f.useEffect(()=>{i.setOptions(n,{listeners:!1})},[n,i]),dt(n,c,r))throw ft(n,i,u);if(at({result:c,errorResetBoundary:u,useErrorBoundary:n.useErrorBoundary,query:i.getCurrentQuery()}))throw c.error;return n.notifyOnChangeProps?c:i.trackResult(c)}function Rt(s,t,e){const r=Z(s,t,e);return pt(r,$)}function V(s,t,e){const r=_(s,t,e),u=B({context:r.context}),[n]=f.useState(()=>new st(u,r));f.useEffect(()=>{n.setOptions(r)},[n,r]);const i=j(f.useCallback(o=>n.subscribe(y.batchCalls(o)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),c=f.useCallback((o,l)=>{n.mutate(o,l).catch(yt)},[n]);if(i.error&&q(n.options.useErrorBoundary,[i.error]))throw i.error;return{...i,mutate:c,mutateAsync:i.mutate}}function yt(){}const mt=()=>V(s=>g.post("users/create-user",s),{onSuccess:async({data:s})=>{if(s&&s.tokens){const{token:t,refresh_token:e}=s.tokens;return v.set("access_token",t,{expires:50/1440}),v.set("refresh_token",e),fetch("/config.txt").then(r=>r.text()).then(r=>{v.set("multi-store",r)}).catch(r=>{console.error("Ошибка при чтении файла config.txt:",r)}),await s}}}),gt=()=>V(s=>g.post("auth/login",s),{onSuccess:async({data:s})=>{if(s&&s.token){const{token:t,refresh_token:e}=s;v.set("access_token",t,{expires:50/1440}),v.set("refresh_token",e);const u=await(await g.get("users/me")).data.username;return v.set("username",u),fetch("/config.txt").then(n=>n.text()).then(n=>{console.log("useLoginMutation",n),v.set("multi-store",n)}).catch(n=>{console.error("Ошибка при чтении файла config.txt:",n)}),await s}}}),St=()=>Rt(["currentUser"],async()=>(await g.get("users/me")).data);export{mt as a,St as b,gt as u};
