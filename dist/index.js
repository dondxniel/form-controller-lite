"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  FormController: () => FormController
});
module.exports = __toCommonJS(src_exports);

// src/components/FormController.tsx
var import_react = __toESM(require("react"));
var FormController = (_a) => {
  var _b = _a, {
    children,
    clearAfterSubmit = false,
    onSubmit = (formData, e) => null,
    defaultValues = {},
    handleBeforeChange = (e) => true,
    handleAfterChange = (e) => null,
    handleBeforeSubmit = (e) => true
  } = _b, props = __objRest(_b, [
    "children",
    "clearAfterSubmit",
    "onSubmit",
    "defaultValues",
    "handleBeforeChange",
    "handleAfterChange",
    "handleBeforeSubmit"
  ]);
  const formRef = (0, import_react.useRef)(null);
  const [formData, formDataSetter] = (0, import_react.useState)(__spreadValues({}, defaultValues));
  const clearAfterSubmitHandler = () => {
    if (clearAfterSubmit) {
      let keys = Object.keys(formData);
      if (keys.length) {
        keys.forEach((item) => {
          formDataSetter(__spreadProps(__spreadValues({}, formData), {
            [item]: null
          }));
        });
      }
    }
  };
  const mirrorHandleSubmit = (e) => {
    e.preventDefault();
    if (handleBeforeSubmit(e)) {
      onSubmit(formData, e);
      clearAfterSubmitHandler();
    }
  };
  const handleChange = (e) => {
    if (handleBeforeChange(e))
      formDataSetter(__spreadProps(__spreadValues({}, formData), {
        [e.target.name]: e.target.value
      }));
    handleAfterChange(e);
  };
  const handleAssignValues = () => {
    var _a2, _b2, _c;
    if ((_a2 = formRef.current) == null ? void 0 : _a2.elements) {
      for (const key in (_b2 = formRef.current) == null ? void 0 : _b2.elements) {
        if (formData[key] !== void 0) {
          formRef.current.elements[key].value = formData[((_c = formRef.current) == null ? void 0 : _c.elements[key]).name];
        }
      }
    }
  };
  (0, import_react.useEffect)(() => {
    handleAssignValues();
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(
    "form",
    __spreadValues({
      onChange: handleChange,
      ref: formRef,
      onSubmit: mirrorHandleSubmit
    }, props),
    children
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FormController
});
