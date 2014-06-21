/*         ______________________________________
  ________|                                      |_______
  \       |           SmartAdmin WebApp          |      /
   \      |      Copyright © 2014 MyOrange       |     /
   /      |______________________________________|     \
  /__________)                                (_________\

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * =======================================================================
 * SmartAdmin is FULLY owned and LICENSED by MYORANGE INC.
 * This script may NOT be RESOLD or REDISTRUBUTED under any
 * circumstances, and is only to be used with this purchased
 * copy of SmartAdmin Template.
 * =======================================================================
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * =======================================================================
 * original filename: ng.controllers.js
 * author: Sunny (@bootstraphunt)
 * email: info@myorange.ca
 */
angular.module("app.controllers",[]).factory("settings",["$rootScope",function(a){var b={languages:[{language:"English",translation:"English",langCode:"en",flagCode:"us"},{language:"Espanish",translation:"Espanish",langCode:"es",flagCode:"es"},{language:"German",translation:"Deutsch",langCode:"de",flagCode:"de"},{language:"Korean",translation:"한국의",langCode:"ko",flagCode:"kr"},{language:"French",translation:"français",langCode:"fr",flagCode:"fr"},{language:"Portuguese",translation:"português",langCode:"pt",flagCode:"br"},{language:"Russian",translation:"русский",langCode:"ru",flagCode:"ru"},{language:"Chinese",translation:"中國的",langCode:"zh",flagCode:"cn"}]};return b}]).controller("PageViewController",["$scope","$route","$animate",function(a,c,b){}]).controller("SmartAppController",["$scope",function(a){}]).controller("LangController",["$scope","settings","localize",function(b,c,a){b.languages=c.languages;b.currentLang=c.currentLang;b.setLang=function(d){c.currentLang=d;b.currentLang=d;a.setLang(d)};b.setLang(b.currentLang)}]);angular.module("app.demoControllers",[]).controller("WidgetDemoCtrl",["$scope","$sce",function(b,a){b.title="SmartUI Widget";b.icon="fa fa-user";b.toolbars=[a.trustAsHtml('<div class="label label-success">				<i class="fa fa-arrow-up"></i> 2.35%			</div>'),a.trustAsHtml('<div class="btn-group" data-toggle="buttons">		        <label class="btn btn-default btn-xs active">		          <input type="radio" name="style-a1" id="style-a1"> <i class="fa fa-play"></i>		        </label>		        <label class="btn btn-default btn-xs">		          <input type="radio" name="style-a2" id="style-a2"> <i class="fa fa-pause"></i>		        </label>		        <label class="btn btn-default btn-xs">		          <input type="radio" name="style-a2" id="style-a3"> <i class="fa fa-stop"></i>		        </label>		    </div>')];b.content=a.trustAsHtml("						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}]).controller("ActivityDemoCtrl",["$scope",function(a){var b=this;b.getDate=function(){return new Date().toUTCString()};a.refreshCallback=function(d,c){console.log(d);setTimeout(function(){c()},3000);a.footerContent=b.getDate()};a.items=[{title:"Msgs",count:14,src:"ajax/notify/mail.html",onload:function(c){console.log(c);alert("[Callback] Loading Messages ...")}},{title:"Notify",count:3,src:"ajax/notify/notifications.html"},{title:"Tasks",count:4,src:"ajax/notify/tasks.html"}];a.total=0;angular.forEach(a.items,function(c){a.total+=c.count});a.footerContent=b.getDate()}]);