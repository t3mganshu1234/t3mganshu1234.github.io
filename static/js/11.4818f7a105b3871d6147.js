webpackJsonp([11],{QuhE:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px","label-position":"top"}},[o("el-form-item",{attrs:{prop:"value",label:"value",rules:{required:!0,message:"value不能为空"}}},[o("el-input",{attrs:{placeholder:t.placeholder,type:"number"},model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}},[o("template",{slot:"append"},[t._v("%")])],2)],1),t._v(" "),o("el-form-item",{staticClass:"bottomButton"},[o("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]},n=o("VU/8")({data:function(){return{placeholder:"",form:{value:""}}},created:function(){this.$contract&&this.init()},methods:{init:function(){var t=this;this.$contract.costProp().call().then(function(e){t.placeholder=e.toString().fromSzabo()})},submit:function(t){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.$contract.setCoatProp(e.form.value.toSzabo()).send().then(function(t){e.$loading(t).then(function(t){t&&(e.$refs.form.resetFields(),e.init())})})})}}},r,!1,null,null,null);e.default=n.exports}});