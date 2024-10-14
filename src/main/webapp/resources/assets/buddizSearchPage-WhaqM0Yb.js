import{b as _}from"./buddizApi-pCehrO7_.js";import{_ as v,d as u,e,f as A,v as b,C as d,F as y,p as w,h as p,i as a,j as g,o as h,t as c,g as x,A as C,B as z}from"./index-CC5LDJ6w.js";const B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaWlDQ1BEaXNwbGF5IFAzAAB4nHWQvUvDUBTFT6tS0DqIDh0cMolD1NIKdnFoKxRFMFQFq1OafgltfCQpUnETVyn4H1jBWXCwiFRwcXAQRAcR3Zw6KbhoeN6XVNoi3sfl/Ticc7lcwBtQGSv2AijplpFMxKS11Lrke4OHnlOqZrKooiwK/v276/PR9d5PiFlNu3YQ2U9cl84ul3aeAlN//V3Vn8maGv3f1EGNGRbgkYmVbYsJ3iUeMWgp4qrgvMvHgtMunzuelWSc+JZY0gpqhrhJLKc79HwHl4plrbWD2N6f1VeXxRzqUcxhEyYYilBRgQQF4X/8044/ji1yV2BQLo8CLMpESRETssTz0KFhEjJxCEHqkLhz634PrfvJbW3vFZhtcM4v2tpCAzidoZPV29p4BBgaAG7qTDVUR+qh9uZywPsJMJgChu8os2HmwiF3e38M6Hvh/GMM8B0CdpXzryPO7RqFn4Er/QcXKWq8MSlPPgAAAbJJREFUeAG1lk1SwkAQhV8PwZ+VuYHhBOJKKTdwBE8A3gCqXLjUnRuqcgS8ATdAVyzFE5gbyE4EmbYnQayQH4YY3oIK1PR8vOme7hB2EL92XXzRPUAnONQ9OventrEOdtGcfJBqR8/KQHq2oWS7kMddD6ryHvtRL2vU8AObeAVbKXNkGyLqwlJWjlLdRJriQFxZ5MrOUZqbSC5mysrVVkc5bn5l5YpyNq9jyR4caoNRR76GsvYFpCfQmNKVP0mAwk3DpKpTwZoNPZSjifxBcanfwOw70fmv7ka5qkfnpZpyRp4Sqou9iz4EdGiqJsD+FICrD6E5Ht9J8hcjlJefP4iutqjxGKyrbg+wNcR8iZV3ibAYJAEKYWYULCoji7uTLpKyri5bmxc40YLCBd/8hKKS2LQukd7rlHSEosqIzWiq6gyFQemx6SAqmB+jjNwmQGEx4F/dwl3tkQ/CzMl3wxjIZ36xfFaa20Gss0BDuRs1uuzf0EW/Y56zgcmCsJiwMmc0tWTz69gFNG0lC0hIlHfydetYDzCXocfsgpVPjf4zcrSCd3h8O5DBJw2aAxzxcHPdDy+UozZgFKPaAAAAAElFTkSuQmCC",q={data(){return{pageRequest:{page:1,amount:10,searchType:"",searchValue:"",types:[]},totalCount:0,searchQuery:"",selectedPersonality:null,selectedGender:null,selectedSort:"별점순",buddizs:[]}},computed:{filteredBuddizs(){let s=this.buddizs;return this.searchQuery&&(s=s.filter(t=>t.name.includes(this.searchQuery))),this.selectedPersonality&&(s=s.filter(t=>t.personality===this.selectedPersonality)),this.selectedGender&&(s=s.filter(t=>t.gender===this.selectedGender)),this.selectedSort==="별점순"?s.sort((t,r)=>r.rating-t.rating):this.selectedSort==="가격순"?s.sort((t,r)=>t.price-r.price):this.selectedSort==="리뷰 많은 순"&&s.sort((t,r)=>r.reviews-t.reviews),s},paginatedBuddizs(){const s=(this.pageRequest.page-1)*this.pageRequest.amount,t=s+this.pageRequest.amount;return this.filteredBuddizs.slice(s,t)}},methods:{togglePersonalityFilter(s){this.selectedPersonality=this.selectedPersonality===s?null:s},toggleGenderFilter(s){this.selectedGender=this.selectedGender===s?null:s},async fetchBuddizs(){try{const s=await _.fetchBuddizs(this.pageRequest.page,this.pageRequest.amount,this.searchQuery);this.buddizs=s.buddizs,this.totalCount=s.totalCount}catch(s){console.error("데이터를 불러오는 중 오류 발생:",s)}},handlePageChange(s){this.pageRequest.page=s,this.fetchBuddizs()}},mounted(){this.fetchBuddizs()}},o=s=>(C("data-v-9d3a2bbd"),s=s(),z(),s),R={class:"fluid-container"},F=o(()=>e("div",{class:"type-header"},[e("h2",null,"버디즈"),e("div",{style:{"font-size":"17pt","margin-top":"8pt"}},"나에게 꼭 맞는 버디를 찾아보세요!")],-1)),S={class:"buddiz-search"},k={class:"content"},P={class:"filter-section"},Q=o(()=>e("p",null,"닉네임으로 검색",-1)),E={class:"search-bar"},G=o(()=>e("i",{class:"fa fa-search"},null,-1)),V=[G],K=o(()=>e("hr",{style:{width:"240px","border-bottom":"1.5px solid #ddd"}},null,-1)),N={class:"filter-options"},Y=o(()=>e("p",null,"필터로 검색",-1)),J={class:"filter-buttons"},M={class:"filter-buttons"},j=o(()=>e("hr",{style:{width:"240px","border-bottom":"1.5px solid #ddd"}},null,-1)),D={class:"sort-options"},U=o(()=>e("p",null,"정렬",-1)),H={class:"filter-buttons"},I={class:"filter-buttons"},T={class:"buddiz-list"},L=["src"],Z={style:{"margin-top":"10px"}},W={style:{"font-size":"25px","font-weight":"bold","margin-bottom":"5px"}},X={style:{"font-size":"1em",margin:"5px"}},O={style:{"margin-bottom":"5px"}},$=o(()=>e("img",{src:B,alt:"star",style:{height:"18px",width:"18px"}},null,-1)),ee={style:{"margin-bottom":"5px"}},te={style:{"margin-bottom":"5px"}},se={class:"my-5 d-flex justify-content-center"},ie=o(()=>e("i",{class:"fa-solid fa-backward-fast"},null,-1)),le=o(()=>e("i",{class:"fa-solid fa-caret-left"},null,-1)),oe=o(()=>e("i",{class:"fa-solid fa-caret-right"},null,-1)),ne=o(()=>e("i",{class:"fa-solid fa-forward-fast"},null,-1));function de(s,t,r,re,l,n){const f=g("router-link"),m=g("vue-awesome-paginate");return h(),u("div",R,[F,e("div",S,[e("div",k,[e("div",P,[Q,e("div",E,[A(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>l.searchQuery=i),type:"text",placeholder:"검색어입력",class:"search-input"},null,512),[[b,l.searchQuery]]),e("button",{onClick:t[1]||(t[1]=(...i)=>n.fetchBuddizs&&n.fetchBuddizs(...i)),class:"search-button"},V)]),K,e("div",N,[Y,e("div",J,[e("button",{class:d([{active:l.selectedPersonality==="조용해요"},"filter-select"]),onClick:t[2]||(t[2]=i=>n.togglePersonalityFilter("조용해요"))},"조용해요",2),e("button",{class:d([{active:l.selectedPersonality==="친구해요"},"filter-select"]),onClick:t[3]||(t[3]=i=>n.togglePersonalityFilter("친구해요"))},"친구해요",2)]),e("div",M,[e("button",{class:d([{active:l.selectedGender==="여성"},"filter-select"]),onClick:t[4]||(t[4]=i=>n.toggleGenderFilter("여성"))},"여성",2),e("button",{class:d([{active:l.selectedGender==="남성"},"filter-select"]),onClick:t[5]||(t[5]=i=>n.toggleGenderFilter("남성"))},"남성",2)])]),j,e("div",D,[U,e("div",H,[e("button",{class:d([{active:l.selectedSort==="별점순"},"filter-select"]),onClick:t[6]||(t[6]=i=>l.selectedSort="별점순")},"별점순",2),e("button",{class:d([{active:l.selectedSort==="가격순"},"filter-select"]),onClick:t[7]||(t[7]=i=>l.selectedSort="가격순")},"가격순",2)]),e("div",I,[e("button",{class:d([{active:l.selectedSort==="리뷰 많은 순"},"filter-select"]),onClick:t[8]||(t[8]=i=>l.selectedSort="리뷰 많은 순"),style:{width:"235px"}},"리뷰 많은 순",2)])])]),e("div",T,[(h(!0),u(y,null,w(n.paginatedBuddizs,i=>(h(),u("div",{key:i.id,class:"buddiz-item under-line"},[p(f,{to:{name:"buddizDetail",params:{id:i.id}},class:"user-link","exact-active-class":"active-link"},{default:a(()=>[e("img",{src:i.profileImage,alt:"buddiz image",class:"buddiz-image"},null,8,L),e("div",Z,[e("h3",W,c(i.name),1),e("div",X,[e("p",O,[$,x(" "+c(i.rating),1)]),e("p",ee,c(i.liveInKr),1),e("p",te,c(i.character),1)])])]),_:2},1032,["to"])]))),128)),e("div",se,[p(m,{"total-items":l.totalCount,"items-per-page":l.pageRequest.amount,"max-pages-shown":5,"show-ending-buttons":!0,modelValue:l.pageRequest.page,"onUpdate:modelValue":t[9]||(t[9]=i=>l.pageRequest.page=i),onClick:n.handlePageChange},{"first-page-button":a(()=>[ie]),"prev-button":a(()=>[le]),"next-button":a(()=>[oe]),"last-page-button":a(()=>[ne]),_:1},8,["total-items","items-per-page","modelValue","onClick"])])])])])])}const ue=v(q,[["render",de],["__scopeId","data-v-9d3a2bbd"]]);export{ue as default};
