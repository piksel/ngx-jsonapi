webpackJsonp([2],{l7UW:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("WT6e"),o=function(){},e=u("bfOx"),r=u("Xjw4"),i=u("CnKw"),a=u("MnWz"),_=u("YaPU"),c=u("TToO"),s=u("OVmG"),h=u("VwZZ"),f=function(){function l(l){this.callback=l}return l.prototype.call=function(l,n){return n.subscribe(new p(l,this.callback))},l}(),p=function(l){function n(n,u){l.call(this,n),this.add(new h.a(u))}return Object(c.b)(n,l),n}(s.a);function d(l){return function(l){return function(n){return n.lift(new f(l))}}(l)(this)}_.a.prototype.finally=d,_.a.prototype._finally=d;var b=u("5rzi"),m=function(){return function(l){var n=this;this.authorsService=l,l.all({sort:["name"],ttl:3600}).subscribe(function(l){n.authors=l,console.info("success authors controller",l)},function(l){return console.error("Could not load authors.")})}}(),v=t.Y({encapsulation:2,styles:[],data:{}});function g(l){return t._19(0,[(l()(),t._0(0,0,null,null,21,"tr",[],null,null,null,null,null)),(l()(),t._17(-1,null,["\n        "])),(l()(),t._0(2,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._17(3,null,["",""])),(l()(),t._17(-1,null,["\n        "])),(l()(),t._0(5,0,null,null,6,"td",[],null,null,null,null,null)),(l()(),t._17(-1,null,["\n            "])),(l()(),t._0(7,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t._10(l,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),t.Z(8,671744,null,0,e.l,[e.k,e.a,r.h],{routerLink:[0,"routerLink"]},null),t._12(9,2),(l()(),t._17(10,null,["",""])),(l()(),t._17(-1,null,["\n        "])),(l()(),t._17(-1,null,["\n        "])),(l()(),t._0(13,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t._17(14,null,["",""])),t._14(15,1),(l()(),t._17(-1,null,["\n        "])),(l()(),t._0(17,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t._17(18,null,["",""])),t._14(19,1),(l()(),t._17(-1,null,["\n        "])),(l()(),t._17(-1,null,["\n    "]))],function(l,n){l(n,8,0,l(n,9,0,"/authors",n.context.$implicit.id))},function(l,n){l(n,3,0,n.context.$implicit.id),l(n,7,0,t._10(n,8).target,t._10(n,8).href),l(n,10,0,n.context.$implicit.attributes.name),l(n,14,0,t._18(n,14,0,l(n,15,0,t._10(n.parent,0),n.context.$implicit.attributes.date_of_birth))),l(n,18,0,t._18(n,18,0,l(n,19,0,t._10(n.parent,0),n.context.$implicit.attributes.date_of_death)))})}function k(l){return t._19(0,[t._13(0,r.d,[t.r]),(l()(),t._0(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t._17(-1,null,["Authors"])),(l()(),t._17(-1,null,["\n"])),(l()(),t._0(4,0,null,null,1,"demo-collection-info",[],null,null,null,i.b,i.a)),t.Z(5,49152,null,0,a.a,[],{collection:[0,"collection"]},null),(l()(),t._17(-1,null,["\n"])),(l()(),t._0(7,0,null,null,23,"table",[["class","table table-striped"]],null,null,null,null,null)),(l()(),t._17(-1,null,["\n    "])),(l()(),t._0(9,0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),t._17(-1,null,["\n        "])),(l()(),t._0(11,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t._17(-1,null,["\n            "])),(l()(),t._0(13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._17(-1,null,["ID"])),(l()(),t._17(-1,null,["\n            "])),(l()(),t._0(16,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._17(-1,null,["Name"])),(l()(),t._17(-1,null,["\n            "])),(l()(),t._0(19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._17(-1,null,["Date of birth"])),(l()(),t._17(-1,null,["\n            "])),(l()(),t._0(22,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._17(-1,null,["Date of dead"])),(l()(),t._17(-1,null,["\n        "])),(l()(),t._17(-1,null,["\n    "])),(l()(),t._17(-1,null,["\n    "])),(l()(),t._0(27,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),t.V(16777216,null,null,1,null,g)),t.Z(29,802816,null,0,r.i,[t.K,t.H,t.p],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(l()(),t._17(-1,null,["\n"])),(l()(),t._17(-1,null,["\n\n"])),(l()(),t._17(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,5,0,u.authors),l(n,29,0,u.authors.data,u.authors.trackBy)},null)}var y=t.W("demo-authors",m,function(l){return t._19(0,[(l()(),t._0(0,0,null,null,1,"demo-authors",[],null,null,null,k,v)),t.Z(1,49152,null,0,m,[b.a],null,null)],null,null)},{},{},[]),O=u("Rdhm"),w=u("OeJn"),j=function(){function l(l,n,u,t){var o=this;this.authorsService=l,this.photosService=n,this.route=t,t.params.subscribe(function(n){l.get(n.id,{include:["books","photos"],ttl:100}).subscribe(function(l){o.author=l},function(l){return console.error("Could not load author.",l)})})}return l.prototype.newAuthor=function(){var l=this.authorsService.new();l.attributes.name=prompt("New author name:","John Doe"),l.attributes.name&&(l.attributes.date_of_birth="2030-12-10",console.log("author data for save",l.toObject()),l.save(function(n){console.log("author saved",l.toObject())}))},l.prototype.updateAuthor=function(){var l=this;this.author.attributes.name=prompt("Author name:",this.author.attributes.name),console.log("author data for save with book include",this.author.toObject({include:["books"]})),console.log("author data for save without any include",this.author.toObject()),this.author.save(function(n){console.log("author saved",l.author.toObject())})},l.prototype.getPhotos=function(l){return l.relationships.photos.data.$toArray},l.prototype.removeRelationship=function(){this.author.removeRelationship("photos","1"),this.author.save(),console.log("removeRelationship save with photos include",this.author.toObject())},l}(),x=t.Y({encapsulation:2,styles:[],data:{}});function Z(l){return t._19(0,[(l()(),t._0(0,0,null,null,0,"img",[["height","150"],["style","padding-right: 1em"]],[[8,"src",4],[8,"title",0]],null,null,null,null))],null,function(l,n){l(n,0,0,n.context.$implicit.attributes.uri,t._3(1,"Book id #",n.context.$implicit.id,""))})}function $(l){return t._19(0,[(l()(),t._0(0,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),t._17(-1,null,["\n    "])),(l()(),t.V(16777216,null,null,1,null,Z)),t.Z(3,802816,null,0,r.i,[t.K,t.H,t.p],{ngForOf:[0,"ngForOf"]},null),(l()(),t._17(-1,null,["\n"]))],function(l,n){l(n,3,0,n.component.author.relationships.photos.data.data)},null)}function F(l){return t._19(0,[(l()(),t._0(0,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),t._17(-1,null,["\n        "])),(l()(),t._0(2,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._17(3,null,["",""])),(l()(),t._17(-1,null,["\n        "])),(l()(),t._0(5,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t._17(-1,null,["\n            "])),(l()(),t._0(7,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t._17(8,null,["",""])),(l()(),t._17(-1,null,["\n        "])),(l()(),t._17(-1,null,["\n        "])),(l()(),t._0(11,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t._17(12,null,["",""])),t._14(13,1),(l()(),t._17(-1,null,["\n    "]))],null,function(l,n){l(n,3,0,n.context.$implicit.id),l(n,8,0,n.context.$implicit.attributes.title),l(n,12,0,t._18(n,12,0,l(n,13,0,t._10(n.parent.parent,0),n.context.$implicit.attributes.date_published)))})}function A(l){return t._19(0,[(l()(),t._0(0,0,null,null,20,"table",[["class","table table-striped"]],null,null,null,null,null)),(l()(),t._17(-1,null,["\n    "])),(l()(),t._0(2,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),t._17(-1,null,["\n        "])),(l()(),t._0(4,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t._17(-1,null,["\n            "])),(l()(),t._0(6,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._17(-1,null,["ID"])),(l()(),t._17(-1,null,["\n            "])),(l()(),t._0(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._17(-1,null,["Title"])),(l()(),t._17(-1,null,["\n            "])),(l()(),t._0(12,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._17(-1,null,["Date Published"])),(l()(),t._17(-1,null,["\n        "])),(l()(),t._17(-1,null,["\n    "])),(l()(),t._17(-1,null,["\n    "])),(l()(),t._0(17,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),t.V(16777216,null,null,1,null,F)),t.Z(19,802816,null,0,r.i,[t.K,t.H,t.p],{ngForOf:[0,"ngForOf"]},null),(l()(),t._17(-1,null,["\n"]))],function(l,n){l(n,19,0,n.component.author.relationships.books.data.data)},null)}function K(l){return t._19(0,[t._13(0,r.d,[t.r]),(l()(),t._0(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t._17(2,null,["Author #",", with books and photos"])),(l()(),t._17(-1,null,["\n"])),(l()(),t._0(4,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),t._17(5,null,["authors.get('","', "," include: ['books', 'photos'] ",");"])),(l()(),t._17(-1,null,["\n"])),(l()(),t._0(7,0,null,null,18,"ul",[],null,null,null,null,null)),(l()(),t._17(-1,null,["\n    "])),(l()(),t._0(9,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t._17(-1,null,["Name: "])),(l()(),t._0(11,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t._17(12,null,["",""])),(l()(),t._17(-1,null,["\n    "])),(l()(),t._0(14,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),t._17(-1,null,["Date of birth: "])),(l()(),t._0(16,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),t._17(17,null,["",""])),t._14(18,1),(l()(),t._17(-1,null,["\n    "])),(l()(),t._0(20,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),t._17(-1,null,["Date of dead: "])),(l()(),t._0(22,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),t._17(23,null,["",""])),t._14(24,1),(l()(),t._17(-1,null,["\n"])),(l()(),t._17(-1,null,["\n"])),(l()(),t._0(27,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),t._17(-1,null,["\n    "])),(l()(),t._0(29,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.newAuthor()&&t),t},null,null)),(l()(),t._17(-1,null,["New author"])),(l()(),t._17(-1,null,["\n    "])),(l()(),t._0(32,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.updateAuthor()&&t),t},null,null)),(l()(),t._17(-1,null,["Update author"])),(l()(),t._17(-1,null,["\n    "])),(l()(),t._0(35,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.removeRelationship()&&t),t},null,null)),(l()(),t._17(-1,null,["Remove relationship"])),(l()(),t._17(-1,null,["\n"])),(l()(),t._17(-1,null,["\n\n"])),(l()(),t._0(39,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t._17(-1,null,["Photos"])),(l()(),t._17(-1,null,["\n"])),(l()(),t.V(16777216,null,null,1,null,$)),t.Z(43,16384,null,0,r.j,[t.K,t.H],{ngIf:[0,"ngIf"]},null),(l()(),t._17(-1,null,["\n\n"])),(l()(),t._0(45,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t._17(-1,null,["Books"])),(l()(),t._17(-1,null,["\n"])),(l()(),t.V(16777216,null,null,1,null,A)),t.Z(49,16384,null,0,r.j,[t.K,t.H],{ngIf:[0,"ngIf"]},null),(l()(),t._17(-1,null,["\n\n"])),(l()(),t._0(51,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t._17(-1,null,["\n    "])),(l()(),t._0(53,0,null,null,1,"a",[["ui-sref","authors"]],null,null,null,null,null)),(l()(),t._17(-1,null,["Volver"])),(l()(),t._17(-1,null,["\n"])),(l()(),t._17(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,43,0,u.author.relationships.photos.builded),l(n,49,0,"collection"==u.author.relationships.books.content)},function(l,n){var u=n.component;l(n,2,0,u.author.id),l(n,5,0,u.author.id,"{","}"),l(n,12,0,u.author.attributes.name),l(n,17,0,t._18(n,17,0,l(n,18,0,t._10(n,0),u.author.attributes.date_of_birth))),l(n,23,0,t._18(n,23,0,l(n,24,0,t._10(n,0),u.author.attributes.date_of_death)))})}var D=t.W("demo-author",j,function(l){return t._19(0,[(l()(),t._0(0,0,null,null,1,"demo-author",[],null,null,null,K,x)),t.Z(1,49152,null,0,j,[b.a,O.a,w.a,e.a],null,null)],null,null)},{},{},[]),V=u("FL9N"),T=function(){};u.d(n,"AuthorsModuleNgFactory",function(){return I});var I=t.X(o,[],function(l){return t._7([t._8(512,t.j,t.T,[[8,[y,D]],[3,t.j],t.u]),t._8(4608,r.l,r.k,[t.r,[2,r.p]]),t._8(512,r.b,r.b,[]),t._8(512,V.a,V.a,[]),t._8(512,e.m,e.m,[[2,e.r],[2,e.k]]),t._8(512,T,T,[]),t._8(512,o,o,[]),t._8(1024,e.i,function(){return[[{path:"",component:m},{path:":id",component:j}]]},[])])})}});