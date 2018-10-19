var example=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=200)}({0:function(e,t){e.exports=React},1:function(e,t){e.exports=ReactHighcharts},10:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}var a=n(2);function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?Object(a.a)(e):t}n.d(t,"a",function(){return i})},11:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",function(){return o})},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(13);function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r._handleRefMount=function(e){r._domNode=e},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.PureComponent),r(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,r=e.children;return a.default.createElement(n,{ref:this._handleRefMount,className:t},r)}}]),t}();s.propTypes={async:i.PropTypes.bool,className:i.PropTypes.string,children:i.PropTypes.any,component:i.PropTypes.node},s.defaultProps={component:"code"},t.default=s},13:function(e,t,n){e.exports=n(14)()},14:function(e,t,n){"use strict";var r=n(15),o=n(16),a=n(17);e.exports=function(){function e(e,t,n,r,i,c){c!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},15:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},16:function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,a,i,c,s){if(r(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,a,i,c,s],f=0;(u=new Error(t.replace(/%s/g,function(){return l[f++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},17:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return r})},200:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(7),s=n(8),u=n(10),l=n(9),f=n(11),p=n(3),h=n.n(p),d=n(1),m=n(5);h.a.setOptions({lang:{thousandsSep:""}});var b=Array.from({length:26},function(e,t){var n=t+1992;return"".concat(n,"-").concat((n+1).toString().substr(2))}),y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={seasons:b,totalGoals:[1222,1195,1195,988,970,1019,959,1060,992,1001,1e3,1012,974,944,931,1002,942,1053,1063,1066,1063,1052,975,1026,1064,1018],avgGoalsPerGame:[2.65,2.59,2.59,2.6,2.55,2.68,2.52,2.79,2.61,2.63,2.63,2.66,2.56,2.48,2.45,2.64,2.48,2.77,2.8,2.81,2.8,2.77,2.57,2.7,2.8,2.68]},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.seasons,n=e.totalGoals,r=e.avgGoalsPerGame;return o.a.createElement("div",{className:"app"},o.a.createElement(d.HighchartsChart,{plotOptions:{areaspline:{fillOpacity:1,lineWidth:0,marker:{enabled:!1,states:{hover:{enabled:!1}}}}}},o.a.createElement(d.Chart,{inverted:!0,marginLeft:300,height:650}),o.a.createElement(d.Title,null,"Premier League Goal Stats: 1992-93 to 2017-18"),o.a.createElement(d.Subtitle,null,"Source: myfootballfacts.com"),o.a.createElement(d.XAxis,{type:"category",categories:t,crosshair:{zIndex:10},lineWidth:0,tickLength:0},o.a.createElement(d.XAxis.Title,null,"Season")),o.a.createElement(d.YAxis,{min:800,gridLineWidth:0,labels:{enabled:!1}},o.a.createElement(d.AreaSplineSeries,{name:"Total Goals",data:n,color:"#38003c"})),o.a.createElement(d.YAxis,{min:2.4,max:7,gridLineWidth:0,labels:{enabled:!1}},o.a.createElement(d.AreaSplineSeries,{name:"Average Goals per Game",data:r,color:"#e90052"})),o.a.createElement(d.Tooltip,{shared:!0,positioner:function(e,t,n){return{x:0,y:n.plotY+t/2+8}},backgroundColor:"transparent",borderWidth:0,shadow:!1})),o.a.createElement(m.a,{name:"InvertedChart"},'\nrender () {\n  const plotOptions = {\n    areaspline: {\n      fillOpacity: 1,\n      lineWidth: 0,\n      marker: {\n        enabled: false,\n        states: {\n          hover: { enabled: false }\n        }\n      }\n    }\n  };\n\n  const positioner = (w, h, point) => ({x: 0, y: point.plotY + (h / 2) + 8});\n    \n  const { seasons, totalGoals, avgGoalsPerGame } = this.state; \n\n  return (\n    <div className="app">\n      <HighchartsChart plotOptions={plotOptions}>\n        <Chart inverted marginLeft={300} height={650} />\n\n        <Title>Premier League Goal Stats: 1992-93 to 2016-17</Title>\n\n        <Subtitle>Source: myfootballfacts.com</Subtitle>\n\n        <XAxis type="category" categories={seasons} crosshair={{ zIndex: 10 }} lineWidth={0} tickLength={0}>\n          <XAxis.Title>Season</XAxis.Title>\n        </XAxis>\n\n        <YAxis min={800} gridLineWidth={0} labels={{ enabled: false }}>\n          <AreaSplineSeries name="Total Goals" data={totalGoals} color="#38003c" />\n        </YAxis>\n\n        <YAxis min={2.4} max={7} gridLineWidth={0} labels={{ enabled: false }}>\n          <AreaSplineSeries name="Average Goals per Game" data={avgGoalsPerGame} color="#e90052" />\n        </YAxis>\n\n        <Tooltip shared positioner={positioner} backgroundColor="transparent" borderWidth={0} shadow={false} />\n      </HighchartsChart>\n    </div>\n  );\n}\n\n// Remember to inject Highcharts to exported component\nexport default withHighcharts(MyComponent, Highcharts);'))}}]),t}(r.Component),g=Object(d.withHighcharts)(y,h.a);i.a.render(o.a.createElement(g,null),document.getElementById("root"))},3:function(e,t){e.exports=Highcharts},4:function(e,t){e.exports=ReactDOM},5:function(e,t,n){"use strict";var r=n(6);t.a=function(e){var t=e.name,n=e.children;return React.createElement("div",null,React.createElement("pre",null,React.createElement(r.PrismCode,{className:"language-jsx"},n)),React.createElement("a",{href:"https://github.com/whawker/react-jsx-highcharts/blob/gh-pages/examples/".concat(t,"/App.js"),className:"btn btn-link"},"See full example code"))}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return o(r).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},7:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return r})},8:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",function(){return o})},9:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return r})}});