webpackJsonp([1],{cICi:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=u("WT6e"),t=function(){},e=u("bfOx"),i=u("Xjw4"),r=u("CnKw"),s=u("MnWz"),_=u("OeJn"),c=u("5rzi"),a=function(){function l(l,n){var u=this;this.authorsService=l,this.booksService=n,n.all({page:{number:2},include:["author","photos"]}).subscribe(function(l){u.books=l,console.info("success books controll",u.books)},function(l){return console.info("error books controll",l)})}return l.prototype.getAll=function(l){var n=this;l.date_published={since:"1983-01-01",until:"2010-01-01"};var u=this.booksService.all({localfilter:{},remotefilter:l,page:{number:1},include:["author","photos"]});u.subscribe(function(l){n.books=l,console.log("success books controller",n.books),console.log("BooksRequest#1 received (author data from server)",n.books[Object.keys(n.books)[2]].relationships.author.data.attributes),console.log("BooksRequest#2 requested");var u=n.booksService.all(function(l){console.log("BooksRequest#2 received (author data from cache)",u[Object.keys(n.books)[1]].relationships.author.data)});console.log("BookRequest#3 requested"),n.booksService.get("1",function(l){console.log("BookRequest#3 received (author data from cache)")})},function(l){return console.info("error books controller",l)}),u.toPromise().then(function(l){return console.log("books loaded PROMISE")})},l.prototype.delete=function(l){this.booksService.delete(l.id)},l}(),h=o.Y({encapsulation:2,styles:[],data:{}});function b(l){return o._19(0,[(l()(),o._0(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o._17(1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit.id)})}function f(l){return o._19(0,[(l()(),o._0(0,0,null,null,28,"tr",[],null,null,null,null,null)),(l()(),o._17(-1,null,["\n        "])),(l()(),o._0(2,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),o._17(3,null,["",""])),(l()(),o._17(-1,null,["\n        "])),(l()(),o._0(5,0,null,null,6,"td",[],null,null,null,null,null)),(l()(),o._17(-1,null,["\n            "])),(l()(),o._0(7,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o._10(l,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),o.Z(8,671744,null,0,e.l,[e.k,e.a,i.h],{routerLink:[0,"routerLink"]},null),o._12(9,2),(l()(),o._17(10,null,["",""])),(l()(),o._17(-1,null,["\n        "])),(l()(),o._17(-1,null,["\n        "])),(l()(),o._0(13,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),o._17(14,null,["",""])),o._14(15,1),(l()(),o._17(-1,null,["\n        "])),(l()(),o._0(17,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),o._17(18,null,[""," #",""])),(l()(),o._17(-1,null,["\n        "])),(l()(),o._0(20,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),o.V(16777216,null,null,1,null,b)),o.Z(22,802816,null,0,i.i,[o.K,o.H,o.p],{ngForOf:[0,"ngForOf"]},null),(l()(),o._17(-1,null,["\n        "])),(l()(),o._0(24,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),o._0(25,0,null,null,2,"a",[["ng-click","delete(book)"],["title","not supported by demo server"]],null,null,null,null,null)),(l()(),o._0(26,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),o._17(-1,null,["DELETE"])),(l()(),o._17(-1,null,["\n    "]))],function(l,n){l(n,8,0,l(n,9,0,"/books",n.context.$implicit.id)),l(n,22,0,n.context.$implicit.relationships.photos.data.$toArray)},function(l,n){l(n,3,0,n.context.$implicit.id),l(n,7,0,o._10(n,8).target,o._10(n,8).href),l(n,10,0,n.context.$implicit.attributes.title),l(n,14,0,o._18(n,14,0,l(n,15,0,o._10(n.parent,0),n.context.$implicit.attributes.date_published))),l(n,18,0,n.context.$implicit.relationships.author.data.attributes.name,n.context.$implicit.relationships.author.data.id)})}function d(l){return o._19(0,[o._13(0,i.d,[o.r]),(l()(),o._0(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o._17(-1,null,["Books"])),(l()(),o._17(-1,null,["\n"])),(l()(),o._0(4,0,null,null,1,"demo-collection-info",[],null,null,null,r.b,r.a)),o.Z(5,49152,null,0,s.a,[],{collection:[0,"collection"]},null),(l()(),o._17(-1,null,["\n"])),(l()(),o._0(7,0,null,null,27,"table",[["class","table table-striped"]],null,null,null,null,null)),(l()(),o._17(-1,null,["\n    "])),(l()(),o._0(9,0,null,null,19,"thead",[],null,null,null,null,null)),(l()(),o._17(-1,null,["\n        "])),(l()(),o._0(11,0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),o._17(-1,null,["\n            "])),(l()(),o._0(13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),o._17(-1,null,["ID"])),(l()(),o._17(-1,null,["\n            "])),(l()(),o._0(16,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),o._17(-1,null,["Title"])),(l()(),o._17(-1,null,["\n            "])),(l()(),o._0(19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),o._17(-1,null,["Date Published"])),(l()(),o._17(-1,null,["\n            "])),(l()(),o._0(22,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),o._17(-1,null,["Author"])),(l()(),o._17(-1,null,["\n            "])),(l()(),o._0(25,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),o._17(-1,null,["Photos"])),(l()(),o._17(-1,null,["\n        "])),(l()(),o._17(-1,null,["\n    "])),(l()(),o._17(-1,null,["\n    "])),(l()(),o._17(-1,null,["\n    "])),(l()(),o._0(31,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),o.V(16777216,null,null,1,null,f)),o.Z(33,802816,null,0,i.i,[o.K,o.H,o.p],{ngForOf:[0,"ngForOf"]},null),(l()(),o._17(-1,null,["\n"])),(l()(),o._17(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,5,0,u.books),l(n,33,0,u.books.$toArray)},null)}var p=o.W("demo-books",a,function(l){return o._19(0,[(l()(),o._0(0,0,null,null,1,"demo-books",[],null,null,null,d,h)),o.Z(1,49152,null,0,a,[c.a,_.a],null,null)],null,null)},{},{},[]),k=u("Rdhm"),m=function(){function l(l,n,u,o){var t=this;this.authorsService=l,this.booksService=n,this.photosService=u,this.route=o,o.params.subscribe(function(l){var u=n.get(l.id,{include:["author","photos"]});u.subscribe(function(l){t.book=l,console.log("success book",t.book)},function(l){return console.log("error books controll",l)}),u.toPromise().then(function(l){console.log("PROMISE success book",t.book)},function(l){return console.log("PROMISE error books controll",l)})})}return l.prototype.getAuthorName=function(l){var n=l.relationships.author.data;return n.attributes?n.attributes.name:""},l}(),g=o.Y({encapsulation:2,styles:[],data:{}});function v(l){return o._19(0,[(l()(),o._0(0,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),o._17(-1,null,["\n        URI: "])),(l()(),o._0(2,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),o._17(3,null,["",""])),(l()(),o._17(-1,null,["\n    "]))],null,function(l,n){l(n,2,0,o._3(1,"",n.context.$implicit.attributes.uri,"")),l(n,3,0,n.context.$implicit.attributes.uri)})}function y(l){return o._19(0,[(l()(),o._0(0,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),o._17(-1,null,["\n    "])),(l()(),o.V(16777216,null,null,1,null,v)),o.Z(3,802816,null,0,i.i,[o.K,o.H,o.p],{ngForOf:[0,"ngForOf"]},null),(l()(),o._17(-1,null,["\n"]))],function(l,n){l(n,3,0,n.component.book.relationships.photos.data.$toArray)},null)}function O(l){return o._19(0,[o._13(0,i.d,[o.r]),(l()(),o._0(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o._17(-1,null,["Book"])),(l()(),o._17(-1,null,["\n"])),(l()(),o._0(4,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o._17(5,null,["Book #",""])),(l()(),o._17(-1,null,["\n"])),(l()(),o._0(7,0,null,null,12,"ul",[],null,null,null,null,null)),(l()(),o._17(-1,null,["\n    "])),(l()(),o._0(9,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),o._17(-1,null,["Title: "])),(l()(),o._0(11,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),o._17(12,null,["",""])),(l()(),o._17(-1,null,["\n    "])),(l()(),o._0(14,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),o._17(-1,null,["Date Published: "])),(l()(),o._0(16,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),o._17(17,null,["",""])),o._14(18,1),(l()(),o._17(-1,null,["\n"])),(l()(),o._17(-1,null,["\n\n"])),(l()(),o._0(21,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),o._17(-1,null,["Author (one)"])),(l()(),o._17(-1,null,["\n"])),(l()(),o._0(24,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),o._0(25,0,null,null,3,"small",[],null,null,null,null,null)),(l()(),o._17(-1,null,["This a relationship with "])),(l()(),o._0(27,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o._17(-1,null,["hasMany:false"])),(l()(),o._17(-1,null,["\n"])),(l()(),o._0(30,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),o._17(-1,null,["\n    "])),(l()(),o._0(32,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),o._17(-1,null,["Name: "])),(l()(),o._0(34,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),o._17(35,null,["",""])),(l()(),o._17(-1,null,["\n"])),(l()(),o._17(-1,null,["\n\n"])),(l()(),o._0(38,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),o._17(-1,null,["Photos (many)"])),(l()(),o._17(-1,null,["\n"])),(l()(),o._0(41,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),o._0(42,0,null,null,3,"small",[],null,null,null,null,null)),(l()(),o._17(-1,null,["This a relationship with "])),(l()(),o._0(44,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o._17(-1,null,["hasMany:true"])),(l()(),o._17(-1,null,["\n"])),(l()(),o.V(16777216,null,null,1,null,y)),o.Z(48,16384,null,0,i.j,[o.K,o.H],{ngIf:[0,"ngIf"]},null),(l()(),o._17(-1,null,["\n\n"])),(l()(),o._0(50,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),o._17(-1,null,["\n    "])),(l()(),o._0(52,0,null,null,1,"a",[["ui-sref","books"]],null,null,null,null,null)),(l()(),o._17(-1,null,["Volver"])),(l()(),o._17(-1,null,["\n"])),(l()(),o._17(-1,null,["\n"]))],function(l,n){l(n,48,0,"collection"===n.component.book.relationships.photos.content)},function(l,n){var u=n.component;l(n,5,0,u.book.id),l(n,12,0,u.book.attributes.title),l(n,17,0,o._18(n,17,0,l(n,18,0,o._10(n,0),u.book.attributes.date_published))),l(n,35,0,u.getAuthorName(u.book))})}var $=o.W("demo-book",m,function(l){return o._19(0,[(l()(),o._0(0,0,null,null,1,"demo-book",[],null,null,null,O,g)),o.Z(1,49152,null,0,m,[c.a,_.a,k.a,e.a],null,null)],null,null)},{},{},[]),S=u("FL9N"),x=function(){};u.d(n,"BooksModuleNgFactory",function(){return P});var P=o.X(t,[],function(l){return o._7([o._8(512,o.j,o.T,[[8,[p,$]],[3,o.j],o.u]),o._8(4608,i.l,i.k,[o.r,[2,i.p]]),o._8(512,i.b,i.b,[]),o._8(512,S.a,S.a,[]),o._8(512,e.m,e.m,[[2,e.r],[2,e.k]]),o._8(512,x,x,[]),o._8(512,t,t,[]),o._8(1024,e.i,function(){return[[{path:"",component:a},{path:":id",component:m}]]},[])])})}});