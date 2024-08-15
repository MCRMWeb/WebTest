import{S as A,s as g,n as z,i as w,a as F,t as N,f as H,c as G,b as P,d as J,e as v,g as X,h as Y,r as f,k as B,p as Z,l as _,m as y,o as b}from"./index-BKWzXJuX.js";class $ extends A{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),D(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return I(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return I(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const r=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),g(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const n=this.hasListeners();n&&L(this.currentQuery,u,this.options,r)&&this.executeFetch(),this.updateResult(t),n&&(this.currentQuery!==u||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const i=this.computeRefetchInterval();n&&(this.currentQuery!==u||this.options.enabled!==r.enabled||i!==this.currentRefetchInterval)&&this.updateRefetchInterval(i)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e),r=this.createResult(t,e);return te(this,r,e)&&(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:(t=e.cancelRefetch)!=null?t:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(z)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),w||this.currentResult.isStale||!F(this.options.staleTime))return;const t=N(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(w||this.options.enabled===!1||!F(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||H.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const r=this.currentQuery,u=this.options,n=this.currentResult,i=this.currentResultState,a=this.currentResultOptions,o=e!==r,l=o?e.state:this.currentQueryInitialState,h=o?this.currentResult:this.previousQueryResult,{state:c}=e;let{dataUpdatedAt:S,error:x,errorUpdatedAt:k,fetchStatus:m,status:R}=c,T=!1,U=!1,p;if(t._optimisticResults){const d=this.hasListeners(),O=!d&&D(e,t),q=d&&L(e,r,t,u);(O||q)&&(m=G(e.options.networkMode)?"fetching":"paused",S||(R="loading")),t._optimisticResults==="isRestoring"&&(m="idle")}if(t.keepPreviousData&&!c.dataUpdatedAt&&h!=null&&h.isSuccess&&R!=="error")p=h.data,S=h.dataUpdatedAt,R=h.status,T=!0;else if(t.select&&typeof c.data<"u")if(n&&c.data===(i==null?void 0:i.data)&&t.select===this.selectFn)p=this.selectResult;else try{this.selectFn=t.select,p=t.select(c.data),p=P(n==null?void 0:n.data,p,t),this.selectResult=p,this.selectError=null}catch(d){this.selectError=d}else p=c.data;if(typeof t.placeholderData<"u"&&typeof p>"u"&&R==="loading"){let d;if(n!=null&&n.isPlaceholderData&&t.placeholderData===(a==null?void 0:a.placeholderData))d=n.data;else if(d=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof d<"u")try{d=t.select(d),this.selectError=null}catch(O){this.selectError=O}typeof d<"u"&&(R="success",p=P(n==null?void 0:n.data,d,t),U=!0)}this.selectError&&(x=this.selectError,p=this.selectResult,k=Date.now(),R="error");const C=m==="fetching",Q=R==="loading",E=R==="error";return{status:R,fetchStatus:m,isLoading:Q,isSuccess:R==="success",isError:E,isInitialLoading:Q&&C,data:p,dataUpdatedAt:S,error:x,errorUpdatedAt:k,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>l.dataUpdateCount||c.errorUpdateCount>l.errorUpdateCount,isFetching:C,isRefetching:C&&!Q,isLoadingError:E&&c.dataUpdatedAt===0,isPaused:m==="paused",isPlaceholderData:U,isPreviousData:T,isRefetchError:E&&c.dataUpdatedAt!==0,isStale:M(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,g(r,t))return;this.currentResult=r;const u={cache:!0},n=()=>{if(!t)return!0;const{notifyOnChangeProps:i}=this.options,a=typeof i=="function"?i():i;if(a==="all"||!a&&!this.trackedProps.size)return!0;const o=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&o.add("error"),Object.keys(this.currentResult).some(l=>{const h=l;return this.currentResult[h]!==t[h]&&o.has(h)})};(e==null?void 0:e.listeners)!==!1&&n()&&(u.listeners=!0),this.notify({...u,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};e.type==="success"?t.onSuccess=!e.manual:e.type==="error"&&!J(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){v.batch(()=>{if(e.onSuccess){var t,r,u,n;(t=(r=this.options).onSuccess)==null||t.call(r,this.currentResult.data),(u=(n=this.options).onSettled)==null||u.call(n,this.currentResult.data,null)}else if(e.onError){var i,a,o,l;(i=(a=this.options).onError)==null||i.call(a,this.currentResult.error),(o=(l=this.options).onSettled)==null||o.call(l,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function ee(s,e){return e.enabled!==!1&&!s.state.dataUpdatedAt&&!(s.state.status==="error"&&e.retryOnMount===!1)}function D(s,e){return ee(s,e)||s.state.dataUpdatedAt>0&&I(s,e,e.refetchOnMount)}function I(s,e,t){if(e.enabled!==!1){const r=typeof t=="function"?t(s):t;return r==="always"||r!==!1&&M(s,e)}return!1}function L(s,e,t,r){return t.enabled!==!1&&(s!==e||r.enabled===!1)&&(!t.suspense||s.state.status!=="error")&&M(s,t)}function M(s,e){return s.isStaleByTime(e.staleTime)}function te(s,e,t){return t.keepPreviousData?!1:t.placeholderData!==void 0?e.isPlaceholderData:!g(s.getCurrentResult(),e)}class se extends A{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;const r=this.options;this.options=this.client.defaultMutationOptions(e),g(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(t=this.currentMutation)==null||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const t={listeners:!0};e.type==="success"?t.onSuccess=!0:e.type==="error"&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:X(),t={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){v.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(e.onSuccess){var t,r,u,n;(t=(r=this.mutateOptions).onSuccess)==null||t.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(u=(n=this.mutateOptions).onSettled)==null||u.call(n,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var i,a,o,l;(i=(a=this.mutateOptions).onError)==null||i.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(o=(l=this.mutateOptions).onSettled)==null||o.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)})})}}const j=Y.useSyncExternalStore,K=f.createContext(!1),re=()=>f.useContext(K);K.Provider;function ne(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}const ie=f.createContext(ne()),ue=()=>f.useContext(ie);function V(s,e){return typeof s=="function"?s(...e):!!s}const ae=(s,e)=>{(s.suspense||s.useErrorBoundary)&&(e.isReset()||(s.retryOnMount=!1))},oe=s=>{f.useEffect(()=>{s.clearReset()},[s])},ce=({result:s,errorResetBoundary:e,useErrorBoundary:t,query:r})=>s.isError&&!e.isReset()&&!s.isFetching&&V(t,[s.error,r]),le=s=>{s.suspense&&typeof s.staleTime!="number"&&(s.staleTime=1e3)},he=(s,e)=>s.isLoading&&s.isFetching&&!e,de=(s,e,t)=>(s==null?void 0:s.suspense)&&he(e,t),fe=(s,e,t)=>e.fetchOptimistic(s).then(({data:r})=>{s.onSuccess==null||s.onSuccess(r),s.onSettled==null||s.onSettled(r,null)}).catch(r=>{t.clearReset(),s.onError==null||s.onError(r),s.onSettled==null||s.onSettled(void 0,r)});function pe(s,e){const t=B({context:s.context}),r=re(),u=ue(),n=t.defaultQueryOptions(s);n._optimisticResults=r?"isRestoring":"optimistic",n.onError&&(n.onError=v.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=v.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=v.batchCalls(n.onSettled)),le(n),ae(n,u),oe(u);const[i]=f.useState(()=>new e(t,n)),a=i.getOptimisticResult(n);if(j(f.useCallback(o=>{const l=r?()=>{}:i.subscribe(v.batchCalls(o));return i.updateResult(),l},[i,r]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),f.useEffect(()=>{i.setOptions(n,{listeners:!1})},[n,i]),de(n,a,r))throw fe(n,i,u);if(ce({result:a,errorResetBoundary:u,useErrorBoundary:n.useErrorBoundary,query:i.getCurrentQuery()}))throw a.error;return n.notifyOnChangeProps?a:i.trackResult(a)}function Re(s,e,t){const r=Z(s,e,t);return pe(r,$)}function W(s,e,t){const r=_(s,e,t),u=B({context:r.context}),[n]=f.useState(()=>new se(u,r));f.useEffect(()=>{n.setOptions(r)},[n,r]);const i=j(f.useCallback(o=>n.subscribe(v.batchCalls(o)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),a=f.useCallback((o,l)=>{n.mutate(o,l).catch(ye)},[n]);if(i.error&&V(n.options.useErrorBoundary,[i.error]))throw i.error;return{...i,mutate:a,mutateAsync:i.mutate}}function ye(){}const me=()=>W(s=>b.post("users",s),{onSuccess:({data:s})=>{if(s&&s.tokens){const{token:e,refresh_token:t}=s.tokens;return y.set("access_token",e),y.set("refresh_token",t),s}}}),ge=()=>W(s=>b.post("auth/login",s),{onSuccess:async({data:s})=>{if(s&&s.token){const{token:e,refresh_token:t}=s,u=await(await b.get("users/me")).data.username,i=await(await b.post("multi-stores",{name:u})).data.id,o=await(await b.post("multi-stores",{name:"shop",multiStoreId:i})).data.id;return y.set("access_token",e),y.set("refresh_token",t),y.set("username",u),y.set("multi-store",i),y.set("store",o),s}}}),Se=()=>{const s=y.get("access_token");return console.log("useCurrentUser accessToken",s),Re(["currentUser"],async()=>{const e=await b.get("users/me");return console.log("useCurrentUser",e.data),e.data},{enabled:!!s,refetchOnWindowFocus:!1,staleTime:5*60*1e3})};export{me as a,Se as b,ge as u};
