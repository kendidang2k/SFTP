if(jQuery("body").attr("ng-controller"))var bodyElement=angular.element("body"),$scope=bodyElement.scope();function processOULink(e){var o=jQuery(".oxygen-link-button");setTimeout(function(){jQuery("<textarea>").attr("id","ct-link-dialog-txt").css("display","none").attr("data-linkProperty",o.attr("data-linkProperty")).attr("data-linkTarget",o.attr("data-linkTarget")).attr("data-linkField",e).appendTo("body"),wpLink.open("ct-link-dialog-txt"),jQuery("#wp-link-url").val($scope.iframeScope.component.options[$scope.iframeScope.component.active.id].model[e]),jQuery("#wp-link-wrap").removeClass("has-text-field"),jQuery("#oxygen-link-data-dialog-opener").insertAfter(jQuery("#wp-link-wrap.has-text-field #wp-link-url")),jQuery("#oxygen-link-data-dialog").insertAfter(jQuery("#wp-link-wrap.has-text-field")),$scope.showLinkDataDialog=!1,$scope.$apply()},0,!1)}!function(e){var o=setInterval(function(e){if("undefined"!=typeof iframeScope){(i=iframeScope).ouDynamicILUrl=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_uimage_img_url",e,o)},i.ouDynamicBAIBImage=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_baimg_heading_oubfi_before_image",e,o)},i.ouDynamicBAIAImage=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_baimg_heading_oubfi_after_image",e,o)},i.ouDynamicBAIBText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_baimg_heading_oubfi_before_label",e,o)},i.ouDynamicBAIAText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_baimg_heading_oubfi_after_label",e,o)},i.ouDynamicAHBText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_animated_heading_ouah_before_text",e,o)},i.ouDynamicAHText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_animated_heading_ouah_animated_text",e,o)},i.ouDynamicAHFText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_animated_heading_ouah_after_text",e,o)},i.ouDynamicAHLUrl=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_animated_heading_text_link",e,o)},i.ouDynamicHLBText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_hl_heading_ouhlh_before_text",e,o)},i.ouDynamicHLHText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_hl_heading_ouhlh_hl_text",e,o)},i.ouDynamicHLAText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_hl_heading_ouhlh_after_text",e,o)},i.ouDynamicDBFText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_dual_button_btn1content",e,o)},i.ouDynamicDBSText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_dual_button_btn2content",e,o)},i.ouDynamicDBFUrl=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_dual_button_btn1_url",e,o)},i.ouDynamicDBSUrl=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_dual_button_btn2_url",e,o)},i.ouDynamicHABText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_ha_button_btn_text",e,o)},i.ouDynamicHABUrl=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_ha_button_btn_url",e,o)},i.ouDynamicFHText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_fancy_heading_ou_fancy_text",e,o)},i.ouDynamicILFile=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_uimage_ou_imgurl",e,o)},i.ouDynamicILImage=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_image_ou_image_url",e,o)},i.ouDynamicILAlt=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_image_img_alt",e,o)},i.ouDynamicOUPImg=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_panel_item_ou_panel_image",e,o)},i.ouDynamicOUPLink=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_panel_item_panel_link",e,o)},i.ouDynamicUVUrl=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_video_vurl",e,o)},i.ouDynamicUVImage=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_video_image",e,o)},i.ouDynamicUVPoster=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_video_poster",e,o)},i.ouDynamicOULICText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ouli_additem_list_text",e,o)},i.ouDynamicOULIUrl=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ouli_additem_url",e,o)},i.ouDynamicOUGPID=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_acf_gallery_page_id",e,o)},i.ouDynamicCACRDTitle=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_classic_acrd_ouacrd_title",e,o)},i.ouDynamicCACRDSubTitle=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_classic_acrd_sub_title",e,o)},i.ouDynamicHPImage=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_hotspot_hp_image",e,o)},i.ouDynamicHPImageAlt=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_hotspot_img_alt",e,o)},i.ouDynamicSMLCMoreText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_show_more_less_more_text",e,o)},i.ouDynamicSMLCLessText=function(e){e=e.replace(/\"/gi,"'");var o=i.component.active.id;i.setOptionModel("oxy-ou_show_more_less_less_text",e,o)};var t=iframeScope.calculateDepth;iframeScope.calculateDepth=function(e,o){var i=t(e,o);return!1===i&&e.name&&iframeScope.componentsTemplates.hasOwnProperty(e.name)&&iframeScope.componentsTemplates[e.name].nestable&&"true"==iframeScope.componentsTemplates[e.name].nestable?parseInt(o.depth)+1:i},clearInterval(o)}var i},20);e(function(){e("body").on("click","#wp-link-submit",function(o){var t=wpLink.getAttrs();e("#ct-link-dialog-txt").attr("data-linkField")&&$scope.iframeScope.setOptionModel(e("#ct-link-dialog-txt").attr("data-linkField"),t.href)})})}(jQuery);