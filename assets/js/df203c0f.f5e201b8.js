"use strict";(self.webpackChunkmordheim_assault=self.webpackChunkmordheim_assault||[]).push([[9924],{9853:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var l=t(7294),s=t(6698),c=t(6742),r=t(941),n=t(4973);function o(e){var a=e.doc;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(c.Z,{to:a.permalink},l.createElement("h2",null,a.title)),a.description&&l.createElement("p",null,a.description))}function g(e){var a,t=e.tag,g=(a=(0,r.c2)().selectMessage,function(e){return a(e,(0,n.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),i=(0,n.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:g(t.docs.length),tagName:t.name});return l.createElement(s.Z,{title:i,wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsTagDocListPage,searchMetadatas:{tag:"doc_tag_doc_list"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,i),l.createElement(c.Z,{href:t.allTagsPath},l.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},t.docs.map((function(e){return l.createElement(o,{key:e.id,doc:e})})))))))}}}]);