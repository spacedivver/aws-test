import{u as C,a as T,c as I,d as L,r as N,m as D,j as v,o as c,e as p,f as e,F as w,p as x,w as h,q as M,v as B,s as K,t as l,k as y,l as r,x as m,h as d,y as U,z as Y}from"./index-CDC_aOM3.js";import{b as R}from"./boardApi-BCTXCWdu.js";import{h as S}from"./moment-C5S46NFB.js";import"./index--Ht69765.js";const A=e("h1",{class:"mb-3"},[e("i",{class:"fa-solid fa-paste"}),d(" 게시글 목록")],-1),E={class:"mt-4"},F=e("div",{class:"form-label"},"type",-1),P=["id","value"],j=["for"],z={class:"row mt-2"},H={class:"col-3"},W=e("label",{class:"form-label"},"검색 종류",-1),G=Y('<option value="">선택하세요.</option><option value="all">전체</option><option value="title">제목</option><option value="content">내용</option><option value="writer">글쓴이</option>',5),J=[G],O={class:"col-8"},Q=e("label",{class:"form-label"},"검색어",-1),X=e("label",{class:"form-label"},[d("   "),e("span",{class:"text-body-secondary"})],-1),Z={class:"mt-3 text-end"},$={class:"table table-striped"},ee=e("thead",null,[e("tr",null,[e("th",{style:{width:"60px"}},"No"),e("th",{style:{width:"100px"}},"Type"),e("th",null,"제목"),e("th",{style:{width:"150px"}},"작성자"),e("th",{style:{width:"120px"}},"작성일"),e("th",{style:{width:"80px"}},"조회수")])],-1),te={class:"my-5 d-flex"},se={class:"flex-grow-1 text-center"},ae=e("i",{class:"fa-solid fa-backward-fast"},null,-1),oe=e("i",{class:"fa-solid fa-caret-left"},null,-1),le=e("i",{class:"fa-solid fa-caret-right"},null,-1),ne=e("i",{class:"fa-solid fa-forward-fast"},null,-1),re=e("i",{class:"fa-solid fa-pen-to-square"},null,-1),he={__name:"BoardListPage",setup(ue){const a=C(),_=T(),n=I({}),V=L(()=>n.value.boardList),t=N({page:parseInt(a.query.page)||1,amount:parseInt(a.query.amount)||12,searchType:"",searchValue:"",types:[]}),k=async u=>{console.log("CLICK,,,,"),_.push({query:{page:u,amount:t.amount,searchType:t.searchType,searchValue:t.searchValue,types:t.types}})},f=async()=>{console.log("CLICK,,,,"),_.push({query:{page:t.page,amount:t.amount,searchType:t.searchType,searchValue:t.searchValue,types:t.types}})};D(a,async u=>{console.log("WATCH",a.query.page),t.page=parseInt(a.query.page),t.searchType=a.query.searchType,t.searchValue=a.query.searchValue,t.amount=parseInt(a.query.amount),t.types=a.query.types,await b(t)});const b=async u=>{try{n.value=await R.getList(u),console.log(n.value),t.types.length==0&&n.value.boardCategory.forEach(o=>{t.types.push(o.type)})}catch{}};return b(t),(u,o)=>{const g=v("router-link"),q=v("vue-awesome-paginate");return c(),p("div",null,[A,e("div",E,[F,(c(!0),p(w,null,x(n.value.boardCategory,s=>(c(),p("div",{key:s.type,class:"form-check form-check-inline"},[h(e("input",{"onUpdate:modelValue":o[0]||(o[0]=i=>t.types=i),checked:"",class:"form-check-input",type:"checkbox",id:s.type,value:s.type},null,8,P),[[U,t.types]]),e("label",{class:"form-check-label",for:s.type},l(s.name),9,j)]))),128))]),e("div",z,[e("div",H,[W,h(e("select",{"onUpdate:modelValue":o[1]||(o[1]=s=>t.searchType=s),class:"form-select",required:""},J,512),[[M,t.searchType]])]),e("div",O,[Q,h(e("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>t.searchValue=s),onKeyup:K(f,["enter"]),type:"text",class:"form-control",placeholder:"내용을 입력하세요."},null,544),[[B,t.searchValue]])]),e("div",{class:"col-1"},[X,e("button",{class:"form-control btn btn-primary",onClick:f},"검색")])]),e("div",Z,"(총 "+l(n.value.totalCount)+"건)",1),e("table",$,[ee,e("tbody",null,[(c(!0),p(w,null,x(V.value,s=>(c(),p("tr",{key:s.bno},[e("td",null,l(s.bno),1),e("td",null,l(n.value.boardCategory.filter(i=>{if(i.type==s.type)return s.type})[0].name),1),e("td",null,[y(g,{to:{name:"board/detail",params:{no:s.bno},query:m(a).query}},{default:r(()=>[d(l(s.title),1)]),_:2},1032,["to"])]),e("td",null,l(s.memberName)+"("+l(s.memberId)+")",1),e("td",null,l(m(S)(s.regDate).format("YYYY-MM-DD")),1),e("td",null,l(s.readCount),1)]))),128))])]),e("div",te,[e("div",se,[y(q,{"total-items":n.value.totalCount,"items-per-page":t.amount,"max-pages-shown":5,"show-ending-buttons":!0,modelValue:t.page,"onUpdate:modelValue":o[3]||(o[3]=s=>t.page=s),onClick:k},{"first-page-button":r(()=>[ae]),"prev-button":r(()=>[oe]),"next-button":r(()=>[le]),"last-page-button":r(()=>[ne]),_:1},8,["total-items","items-per-page","modelValue"])]),e("div",null,[y(g,{to:{name:"board/create",query:m(a).query},class:"btn btn-primary"},{default:r(()=>[re,d(" 글 작성")]),_:1},8,["to"])])])])}}};export{he as default};
