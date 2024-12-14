// src/components/button.tsx
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import * as React2 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return twMerge(clsx(inputs));
}
// src/components/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
var Button = React2.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React2.createElement(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props));
});
Button.displayName = "Button";
// src/components/Card.tsx
import React3 from "react";
var Card = function(param) {
    var imageUrl = param.imageUrl, alt = param.alt, children = param.children, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className, onClick = param.onClick;
    return /* @__PURE__ */ React3.createElement("div", {
        className: "card-custom",
        onClick: onClick,
        role: onClick ? "button" : void 0,
        tabIndex: onClick ? 0 : void 0
    }, /* @__PURE__ */ React3.createElement("div", {
        className: "card-custom-image"
    }, /* @__PURE__ */ React3.createElement("img", {
        src: imageUrl,
        alt: alt,
        className: "w-full h-full object-cover"
    })), /* @__PURE__ */ React3.createElement("div", {
        className: "w-full"
    }, children));
};
// src/components/CustomButton.tsx
import React4 from "react";
import { cva as cva2 } from "class-variance-authority";
var buttonVariants2 = cva2("flex items-center justify-center text-base font-poppins rounded-md transition-colors duration-200 ease-in-out px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed", {
    variants: {
        variant: {
            primary: "\n          bg-[#6AB098] text-white\n          hover:bg-[#5A9F87]\n          active:bg-[#7AC1A9]\n        ",
            cta: "\n          bg-[#FFD200] text-black\n          hover:bg-[#E6BD00]\n          active:bg-[#FFD933]\n        ",
            secondary: "\n          bg-[#A9D2C4] text-black\n          hover:bg-[#98C1B3]\n          active:bg-[#BAE3D5]\n        "
        },
        size: {
            default: "h-10",
            sm: "h-8 text-sm px-3",
            lg: "h-12 text-lg px-6"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "default"
    }
});
var CustomButton = function(_param) {
    var children = _param.children, icon = _param.icon, label = _param.label, variant = _param.variant, size = _param.size, className = _param.className, props = _object_without_properties(_param, [
        "children",
        "icon",
        "label",
        "variant",
        "size",
        "className"
    ]);
    return /* @__PURE__ */ React4.createElement("button", _object_spread({
        className: cn(buttonVariants2({
            variant: variant,
            size: size,
            className: className
        }))
    }, props), icon, label || children);
};
// src/components/FormDropdown.tsx
import React5, { useState, useRef, useEffect } from "react";
import { Check, X, AlertCircle, ChevronDown } from "lucide-react";
var stateStyles = {
    normal: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: null
    },
    completed: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: /* @__PURE__ */ React5.createElement(Check, {
            className: "h-3 w-3 text-white"
        }),
        iconBg: "bg-[#5A7C6F]"
    },
    error: {
        border: "border-red-500",
        text: "text-red-500",
        icon: /* @__PURE__ */ React5.createElement(X, {
            className: "h-3 w-3 text-white"
        }),
        iconBg: "bg-red-500"
    },
    required: {
        border: "border-[#109BD4]",
        text: "text-[#5A7C6F]",
        icon: null
    },
    blankRequired: {
        border: "border-[#ED933F]",
        text: "text-[#5A7C6F]",
        icon: /* @__PURE__ */ React5.createElement(AlertCircle, {
            className: "h-3 w-3 text-white"
        }),
        iconBg: "bg-[#ED933F]"
    },
    disabled: {
        border: "border-gray-300",
        text: "text-gray-400",
        icon: null
    }
};
var FormDropdown = React5.forwardRef(function(_param, ref) {
    var label = _param.label, hint = _param.hint, _param_state = _param.state, state = _param_state === void 0 ? "normal" : _param_state, options = _param.options, className = _param.className, disabled = _param.disabled, value = _param.value, onChange = _param.onChange, props = _object_without_properties(_param, [
        "label",
        "hint",
        "state",
        "options",
        "className",
        "disabled",
        "value",
        "onChange"
    ]);
    var _useState = _sliced_to_array(useState(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var dropdownRef = useRef(null);
    var currentState = disabled ? "disabled" : state;
    var styles = stateStyles[currentState];
    var selectedOption = options.find(function(opt) {
        return opt.value === value;
    });
    useEffect(function() {
        var handleClickOutside = function(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function() {
            return document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return /* @__PURE__ */ React5.createElement("div", {
        className: "space-y-1.5",
        ref: dropdownRef
    }, /* @__PURE__ */ React5.createElement("label", {
        className: cn("block text-sm font-medium uppercase", styles.text)
    }, label), /* @__PURE__ */ React5.createElement("div", {
        className: "relative"
    }, /* @__PURE__ */ React5.createElement("button", {
        type: "button",
        disabled: disabled,
        onClick: function() {
            return setIsOpen(!isOpen);
        },
        className: cn("w-full px-3 py-2 text-left", "pr-16", "rounded-[4px]", "border-2", "font-poppins text-base", "focus:outline-none focus:ring-2 focus:ring-[#4B7163] focus:ring-offset-1", styles.border, disabled && "bg-gray-50 cursor-not-allowed", className)
    }, (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) || "Select an option", /* @__PURE__ */ React5.createElement(ChevronDown, {
        className: cn("absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5", "text-[#5A7C6F]/60", isOpen && "transform rotate-180")
    })), isOpen && /* @__PURE__ */ React5.createElement("div", {
        className: "absolute z-10 w-full mt-1 py-1 bg-white border-2 border-[#5A7C6F] rounded-lg shadow-lg"
    }, options.map(function(option) {
        return /* @__PURE__ */ React5.createElement("button", {
            key: option.value,
            type: "button",
            onClick: function() {
                onChange === null || onChange === void 0 ? void 0 : onChange(option.value);
                setIsOpen(false);
            },
            className: cn("w-full px-3 py-2 text-left", "hover:bg-[#F8FAF9]", "transition-colors", option.value === value ? "bg-[#4B7163] text-white" : "text-[#5A7C6F]")
        }, option.label);
    })), styles.icon && /* @__PURE__ */ React5.createElement("div", {
        className: cn("absolute right-8 top-1/2 -translate-y-1/2", "rounded-full w-4 h-4", "flex items-center justify-center", styles.iconBg)
    }, styles.icon)), hint && /* @__PURE__ */ React5.createElement("p", {
        className: cn("text-sm", styles.text)
    }, hint));
});
FormDropdown.displayName = "FormDropdown";
// src/components/FormInput.tsx
import React6 from "react";
import { Check as Check2, X as X2, AlertCircle as AlertCircle2 } from "lucide-react";
var stateStyles2 = {
    normal: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: null
    },
    completed: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: /* @__PURE__ */ React6.createElement(Check2, {
            className: "h-3 w-3 text-white"
        }),
        iconBg: "bg-[#5A7C6F]"
    },
    error: {
        border: "border-red-500",
        text: "text-red-500",
        icon: /* @__PURE__ */ React6.createElement(X2, {
            className: "h-3 w-3 text-white"
        }),
        iconBg: "bg-red-500"
    },
    required: {
        border: "border-[#109BD4]",
        text: "text-[#5A7C6F]",
        icon: null
    },
    blankRequired: {
        border: "border-[#ED933F]",
        text: "text-[#5A7C6F]",
        icon: /* @__PURE__ */ React6.createElement(AlertCircle2, {
            className: "h-3 w-3 text-white"
        }),
        iconBg: "bg-[#ED933F]"
    },
    disabled: {
        border: "border-gray-300",
        text: "text-gray-400",
        icon: null
    }
};
var FormInput = React6.forwardRef(function(_param, ref) {
    var label = _param.label, hint = _param.hint, _param_state = _param.state, state = _param_state === void 0 ? "normal" : _param_state, className = _param.className, disabled = _param.disabled, value = _param.value, onChange = _param.onChange, placeholder = _param.placeholder, props = _object_without_properties(_param, [
        "label",
        "hint",
        "state",
        "className",
        "disabled",
        "value",
        "onChange",
        "placeholder"
    ]);
    var currentState = disabled ? "disabled" : state;
    var styles = stateStyles2[currentState];
    return /* @__PURE__ */ React6.createElement("div", {
        className: "space-y-1.5"
    }, /* @__PURE__ */ React6.createElement("label", {
        className: cn("block text-sm font-medium uppercase", styles.text)
    }, label), /* @__PURE__ */ React6.createElement("div", {
        className: "relative"
    }, /* @__PURE__ */ React6.createElement("input", _object_spread({
        ref: ref,
        disabled: disabled,
        className: cn("w-full px-3 py-2", "rounded-[4px]", "border-2", "font-poppins text-base", "placeholder:text-[#5A7C6F]/60", "focus:outline-none focus:ring-2 focus:ring-offset-1", styles.border, disabled && "bg-gray-50 cursor-not-allowed", className),
        value: value,
        onChange: function(e) {
            return onChange(e.target.value);
        },
        placeholder: placeholder
    }, props)), styles.icon && /* @__PURE__ */ React6.createElement("div", {
        className: cn("absolute right-3 top-1/2 -translate-y-1/2", "rounded-full w-4 h-4", "flex items-center justify-center", styles.iconBg)
    }, styles.icon)), hint && /* @__PURE__ */ React6.createElement("p", {
        className: cn("text-sm", styles.text)
    }, hint));
});
FormInput.displayName = "FormInput";
// src/components/ImageUpload.tsx
import React7, { useCallback, useState as useState2, useId } from "react";
import { Upload } from "lucide-react";
var ImageUpload = function(param) {
    var onUpload = param.onUpload, _param_maxFiles = param.maxFiles, maxFiles = _param_maxFiles === void 0 ? 5 : _param_maxFiles, className = param.className;
    var uniqueId = useId();
    var inputId = "photo-upload-".concat(uniqueId);
    var _useState2 = _sliced_to_array(useState2(false), 2), isDragging = _useState2[0], setIsDragging = _useState2[1];
    var handleFiles = useCallback(function(files) {
        var fileArray = Array.from(files).slice(0, maxFiles);
        var photoUrls = fileArray.map(function(file) {
            return URL.createObjectURL(file);
        });
        if (photoUrls.length > 0) {
            onUpload(photoUrls);
        }
    }, [
        maxFiles,
        onUpload
    ]);
    var handleDrop = useCallback(function(e) {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files) {
            handleFiles(e.dataTransfer.files);
        }
    }, [
        handleFiles
    ]);
    var handleDragOver = useCallback(function(e) {
        e.preventDefault();
        setIsDragging(true);
    }, []);
    var handleDragLeave = useCallback(function(e) {
        e.preventDefault();
        setIsDragging(false);
    }, []);
    var handleFileUpload = function(event) {
        var files = event.target.files;
        if (files && files.length > 0) {
            handleFiles(files);
            event.target.value = "";
        }
    };
    return /* @__PURE__ */ React7.createElement("div", {
        className: cn("space-y-6", className)
    }, /* @__PURE__ */ React7.createElement("div", {
        className: cn("border-2 border-dashed rounded-xl p-8 text-center transition-colors", isDragging ? "border-[#4B7163] bg-[#F8FAF9]" : "border-[#5A7C6F]", "hover:border-[#4B7163] hover:bg-[#F8FAF9]"),
        onDrop: handleDrop,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave
    }, /* @__PURE__ */ React7.createElement("input", {
        type: "file",
        id: inputId,
        multiple: true,
        accept: "image/*",
        className: "hidden",
        onChange: handleFileUpload
    }), /* @__PURE__ */ React7.createElement("label", {
        htmlFor: inputId,
        className: "cursor-pointer space-y-4 block"
    }, /* @__PURE__ */ React7.createElement(Upload, {
        className: "h-12 w-12 mx-auto text-[#5A7C6F]"
    }), /* @__PURE__ */ React7.createElement("div", {
        className: "font-sourceSans"
    }, /* @__PURE__ */ React7.createElement("p", {
        className: "text-lg font-semibold text-[#4B7163]"
    }, "Drop photos here or click to upload"), /* @__PURE__ */ React7.createElement("p", {
        className: "text-sm text-[#5A7C6F]"
    }, "Upload clear photos (max ", maxFiles, " files)"), /* @__PURE__ */ React7.createElement("p", {
        className: "text-sm text-[#5A7C6F] mt-2"
    }, "Drag and drop multiple files at once")))));
};
// src/components/ListingWorkflow.tsx
import React9, { useState as useState3 } from "react";
// src/components/Tag.tsx
import React8 from "react";
import { X as X3 } from "lucide-react";
var variantStyles = {
    primary: {
        border: "border-[#6AB098]",
        text: "text-[#6AB098]",
        deleteButton: "bg-[#6AB098] hover:bg-[#5A9F87]"
    },
    cta: {
        border: "border-[#FFD200]",
        text: "text-[#FFD200]",
        deleteButton: "bg-[#FFD200] hover:bg-[#E6BD00]"
    },
    secondary: {
        border: "border-[#A9D2C4]",
        text: "text-[#A9D2C4]",
        deleteButton: "bg-[#A9D2C4] hover:bg-[#98C1B3]"
    }
};
var Tag = function(param) {
    var text = param.text, _param_variant = param.variant, variant = _param_variant === void 0 ? "primary" : _param_variant, onDelete = param.onDelete, className = param.className;
    var styles = variantStyles[variant];
    return /* @__PURE__ */ React8.createElement("div", {
        className: cn("inline-flex items-center", "h-7 pl-1 pr-3", "rounded-full", "font-poppins font-semibold text-sm", "bg-[#F8FAF9]", "border-2", "transition-all duration-200", styles.border, styles.text, className)
    }, onDelete && /* @__PURE__ */ React8.createElement("div", {
        className: "flex items-center"
    }, /* @__PURE__ */ React8.createElement("button", {
        type: "button",
        onClick: onDelete,
        className: cn("flex items-center justify-center", "w-5 h-5 rounded-full mr-1", "transition-colors duration-200", styles.deleteButton, "focus:outline-none focus:ring-2 focus:ring-offset-1"),
        "aria-label": "Remove ".concat(text)
    }, /* @__PURE__ */ React8.createElement(X3, {
        className: "h-3 w-3 text-white"
    }))), /* @__PURE__ */ React8.createElement("span", {
        className: "truncate"
    }, text));
};
// src/components/ListingWorkflow.tsx
import { Save, Send } from "lucide-react";
var ListingWorkflow = function(param) {
    var items = param.items, onUpdateDetails = param.onUpdateDetails, onUpdateStatus = param.onUpdateStatus, onSaveDraft = param.onSaveDraft, className = param.className;
    var _formData_attributes, _formData_price, _formData_costToAcquire;
    var _useState3 = _sliced_to_array(useState3(null), 2), selectedItem = _useState3[0], setSelectedItem = _useState3[1];
    var _useState31 = _sliced_to_array(useState3([]), 2), processingPhotos = _useState31[0], setProcessingPhotos = _useState31[1];
    var _useState32 = _sliced_to_array(useState3({
        title: "",
        description: "",
        condition: "",
        dimensions: {
            length: 0,
            width: 0,
            height: 0
        },
        materials: [],
        attributes: [],
        estimatedValue: 0,
        category: "",
        tags: [],
        features: "",
        defects: "",
        storageLocation: "",
        price: 0,
        costToAcquire: 0
    }), 2), formData = _useState32[0], setFormData = _useState32[1];
    var _useState33 = _sliced_to_array(useState3(""), 2), newAttribute = _useState33[0], setNewAttribute = _useState33[1];
    var handleSubmit = function() {
        if (!selectedItem || !isFormValid()) return;
        var details = _object_spread_props(_object_spread({}, formData), {
            processingPhotos: processingPhotos
        });
        onUpdateDetails(selectedItem.id, details);
        onUpdateStatus(selectedItem.id, "ready_for_sale");
        resetForm();
    };
    var handleSaveDraft = function() {
        if (!selectedItem) return;
        onSaveDraft(selectedItem.id, _object_spread_props(_object_spread({}, formData), {
            processingPhotos: processingPhotos
        }));
    };
    var isFormValid = function() {
        return formData.title && formData.description && formData.condition && formData.category && formData.storageLocation && formData.price && formData.costToAcquire && processingPhotos.length > 0;
    };
    var resetForm = function() {
        setSelectedItem(null);
        setProcessingPhotos([]);
        setFormData({});
    };
    var handleAddAttribute = function() {
        if (newAttribute.trim()) {
            setFormData(function(prev) {
                return _object_spread_props(_object_spread({}, prev), {
                    attributes: _to_consumable_array(prev.attributes || []).concat([
                        newAttribute.trim()
                    ])
                });
            });
            setNewAttribute("");
        }
    };
    if (!selectedItem) {
        return /* @__PURE__ */ React9.createElement("div", {
            className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", className)
        }, /* @__PURE__ */ React9.createElement("h2", {
            className: "font-rockwell text-2xl text-[#4B7163] mb-6"
        }, "Items Pending Listing (", items.length, ")"), /* @__PURE__ */ React9.createElement("div", {
            className: "space-y-4"
        }, items.map(function(item) {
            return /* @__PURE__ */ React9.createElement("div", {
                key: item.id,
                onClick: function() {
                    return setSelectedItem(item);
                },
                className: "flex gap-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
            }, /* @__PURE__ */ React9.createElement("img", {
                src: item.pickupPhoto,
                alt: "Item ".concat(item.productId),
                className: "w-24 h-24 rounded-lg object-cover"
            }), /* @__PURE__ */ React9.createElement("div", {
                className: "flex-grow"
            }, /* @__PURE__ */ React9.createElement("div", {
                className: "flex justify-between items-start"
            }, /* @__PURE__ */ React9.createElement("h3", {
                className: "font-rockwell text-lg text-[#4B7163]"
            }, "Product ID: ", item.productId), /* @__PURE__ */ React9.createElement("span", {
                className: "text-sm text-gray-500"
            }, "Received: ", new Date(item.receivedDate).toLocaleDateString())), /* @__PURE__ */ React9.createElement("p", {
                className: "text-sm text-gray-600 mt-1"
            }, item.pickupDescription), /* @__PURE__ */ React9.createElement("p", {
                className: "text-sm text-gray-500 mt-2"
            }, "From: ", item.customerName)));
        })));
    }
    var _formData_title, _formData_description, _formData_price_toString, _formData_costToAcquire_toString;
    return /* @__PURE__ */ React9.createElement("div", {
        className: cn("space-y-6", className)
    }, /* @__PURE__ */ React9.createElement(CustomButton, {
        onClick: function() {
            return setSelectedItem(null);
        },
        variant: "secondary",
        className: "flex items-center gap-2"
    }, "\u2190 Back to List"), /* @__PURE__ */ React9.createElement(Card, {
        imageUrl: selectedItem.pickupPhoto,
        alt: "Original pickup photo"
    }, /* @__PURE__ */ React9.createElement("div", {
        className: "space-y-6"
    }, /* @__PURE__ */ React9.createElement("div", {
        className: "flex justify-between items-start"
    }, /* @__PURE__ */ React9.createElement("div", {
        className: "flex items-center gap-4"
    }, /* @__PURE__ */ React9.createElement("h3", {
        className: "font-rockwell text-lg text-[#4B7163]"
    }, "Item ID: ", selectedItem.productId)), /* @__PURE__ */ React9.createElement(Tag, {
        text: selectedItem.status,
        variant: "primary"
    })), /* @__PURE__ */ React9.createElement(ImageUpload, {
        onUpload: setProcessingPhotos,
        maxFiles: 5,
        className: "mb-4"
    }), /* @__PURE__ */ React9.createElement("div", {
        className: "grid grid-cols-2 gap-4"
    }, /* @__PURE__ */ React9.createElement(FormInput, {
        label: "Title",
        value: (_formData_title = formData.title) !== null && _formData_title !== void 0 ? _formData_title : "",
        onChange: function(value) {
            return setFormData(_object_spread_props(_object_spread({}, formData), {
                title: value
            }));
        },
        state: formData.title ? "completed" : "required"
    }), /* @__PURE__ */ React9.createElement("div", {
        className: "space-y-2"
    }, /* @__PURE__ */ React9.createElement("div", {
        className: "flex gap-2"
    }, /* @__PURE__ */ React9.createElement(FormInput, {
        label: "Add Attribute",
        value: newAttribute,
        onChange: setNewAttribute,
        onKeyDown: function(e) {
            return e.key === "Enter" && handleAddAttribute();
        }
    }), /* @__PURE__ */ React9.createElement(CustomButton, {
        onClick: handleAddAttribute,
        variant: "secondary",
        className: "mt-6"
    }, "Add")), /* @__PURE__ */ React9.createElement("div", {
        className: "flex flex-wrap gap-2"
    }, (_formData_attributes = formData.attributes) === null || _formData_attributes === void 0 ? void 0 : _formData_attributes.map(function(attr, index) {
        return /* @__PURE__ */ React9.createElement(Tag, {
            key: index,
            text: attr,
            onDelete: function() {
                return setFormData(function(prev) {
                    var _prev_attributes;
                    return _object_spread_props(_object_spread({}, prev), {
                        attributes: (_prev_attributes = prev.attributes) === null || _prev_attributes === void 0 ? void 0 : _prev_attributes.filter(function(_, i) {
                            return i !== index;
                        })
                    });
                });
            }
        });
    })))), /* @__PURE__ */ React9.createElement(FormDropdown, {
        label: "Category",
        options: [
            {
                value: "furniture",
                label: "Furniture"
            },
            {
                value: "decor",
                label: "Home Decor"
            },
            {
                value: "lighting",
                label: "Lighting"
            }
        ],
        value: formData.category,
        onChange: function(value) {
            return setFormData(_object_spread_props(_object_spread({}, formData), {
                category: value
            }));
        },
        state: formData.category ? "completed" : "required"
    }), /* @__PURE__ */ React9.createElement(FormInput, {
        label: "Description",
        value: (_formData_description = formData.description) !== null && _formData_description !== void 0 ? _formData_description : "",
        onChange: function(value) {
            return setFormData(_object_spread_props(_object_spread({}, formData), {
                description: value
            }));
        },
        state: formData.description ? "completed" : "required"
    }), /* @__PURE__ */ React9.createElement("div", {
        className: "grid grid-cols-2 gap-4"
    }, /* @__PURE__ */ React9.createElement(FormInput, {
        label: "Set Price ($)",
        type: "number",
        value: (_formData_price_toString = (_formData_price = formData.price) === null || _formData_price === void 0 ? void 0 : _formData_price.toString()) !== null && _formData_price_toString !== void 0 ? _formData_price_toString : "",
        onChange: function(value) {
            return setFormData(_object_spread_props(_object_spread({}, formData), {
                price: value ? parseFloat(value) : 0
            }));
        },
        state: formData.price ? "completed" : "required",
        min: 0,
        step: 0.01
    }), /* @__PURE__ */ React9.createElement(FormInput, {
        label: "Cost to Acquire ($)",
        type: "number",
        value: (_formData_costToAcquire_toString = (_formData_costToAcquire = formData.costToAcquire) === null || _formData_costToAcquire === void 0 ? void 0 : _formData_costToAcquire.toString()) !== null && _formData_costToAcquire_toString !== void 0 ? _formData_costToAcquire_toString : "",
        onChange: function(value) {
            return setFormData(_object_spread_props(_object_spread({}, formData), {
                costToAcquire: value ? parseFloat(value) : 0
            }));
        },
        state: formData.costToAcquire ? "completed" : "required",
        min: "0",
        step: 0.01
    })), /* @__PURE__ */ React9.createElement("div", {
        className: "flex justify-end gap-4 mt-6"
    }, /* @__PURE__ */ React9.createElement(CustomButton, {
        onClick: handleSaveDraft,
        variant: "secondary",
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React9.createElement(Save, {
        className: "h-4 w-4"
    }), "Save Draft"), /* @__PURE__ */ React9.createElement(CustomButton, {
        onClick: handleSubmit,
        variant: "cta",
        disabled: !isFormValid(),
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React9.createElement(Send, {
        className: "h-4 w-4"
    }), "Mark Ready for Sale")))));
};
// src/components/InventoryProcessing.tsx
import { useState as useState4 } from "react";
var InventoryProcessing = function(param) {
    var request = param.request, onUpdateStatus = param.onUpdateStatus, onUpdateDetails = param.onUpdateDetails, onAddProcessingPhotos = param.onAddProcessingPhotos, onConfirmReceipt = param.onConfirmReceipt;
    var _useState4 = _sliced_to_array(useState4(""), 2), productId = _useState4[0], setProductId = _useState4[1];
    var _useState41 = _sliced_to_array(useState4(""), 2), description = _useState41[0], setDescription = _useState41[1];
    var _useState42 = _sliced_to_array(useState4([]), 2), processingPhotos = _useState42[0], setProcessingPhotos = _useState42[1];
    var handleReceiving = function() {
        if (!productId) return;
        onUpdateStatus("in_inventory");
        onUpdateDetails({
            productId: productId
        });
        onConfirmReceipt();
    };
    var handleProcessing = function() {
        if (!description || processingPhotos.length === 0) return;
        onUpdateStatus("ready_for_sale");
        onUpdateDetails({
            description: description,
            processingPhotos: processingPhotos
        });
    };
    return /* @__PURE__ */ React.createElement("div", {
        className: "space-y-6"
    }, request.status === "completed" && /* @__PURE__ */ React.createElement(Card, {
        imageUrl: request.pickupPhoto,
        alt: "Original pickup photo"
    }, /* @__PURE__ */ React.createElement("h3", {
        className: "font-rockwell text-lg text-[#4B7163] mb-4"
    }, "Receiving Stage"), /* @__PURE__ */ React.createElement(FormInput, {
        label: "Product ID",
        placeholder: "Enter Product ID",
        value: productId,
        onChange: setProductId,
        state: productId ? "completed" : "required",
        hint: "Enter a unique identifier for this item"
    }), /* @__PURE__ */ React.createElement(CustomButton, {
        variant: "cta",
        onClick: handleReceiving,
        disabled: !productId,
        className: "mt-4"
    }, "Confirm Receipt")), request.status === "in_inventory" && /* @__PURE__ */ React.createElement(Card, {
        imageUrl: "",
        alt: ""
    }, /* @__PURE__ */ React.createElement("h3", {
        className: "heading-3"
    }, "Item Processing"), /* @__PURE__ */ React.createElement(ImageUpload, {
        onUpload: setProcessingPhotos,
        maxFiles: 5,
        className: "mb-4"
    }), /* @__PURE__ */ React.createElement(FormDropdown, {
        label: "Item Category",
        hint: "Select the primary category for this item",
        state: "required",
        options: [
            {
                value: "",
                label: "Select a category"
            },
            {
                value: "furniture",
                label: "Furniture"
            },
            {
                value: "decor",
                label: "Home Decor"
            },
            {
                value: "lighting",
                label: "Lighting"
            }
        ]
    }), /* @__PURE__ */ React.createElement(FormInput, {
        label: "Item Description",
        placeholder: "Enter full product description",
        value: description,
        onChange: setDescription,
        state: description ? "completed" : "required",
        hint: "Provide a detailed description of the item",
        className: "mt-4"
    }), /* @__PURE__ */ React.createElement(CustomButton, {
        variant: "cta",
        onClick: handleProcessing,
        disabled: !description || processingPhotos.length === 0,
        className: "mt-4"
    }, "Mark Ready for Sale")));
};
// src/components/MapModal.tsx
import React11 from "react";
// src/components/Modal.tsx
import React10 from "react";
import { X as X4 } from "lucide-react";
var Modal = function(param) {
    var children = param.children, onClose = param.onClose, className = param.className;
    return /* @__PURE__ */ React10.createElement("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center"
    }, /* @__PURE__ */ React10.createElement("div", {
        className: "absolute inset-0 bg-black/50",
        onClick: onClose
    }), /* @__PURE__ */ React10.createElement("div", {
        className: cn("relative bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto", className)
    }, /* @__PURE__ */ React10.createElement("button", {
        onClick: onClose,
        className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700"
    }, /* @__PURE__ */ React10.createElement(X4, {
        className: "h-6 w-6"
    })), children));
};
// src/components/MapModal.tsx
import { Navigation, MapPin } from "lucide-react";
var MapModal = function(param) {
    var address = param.address, onClose = param.onClose;
    var encodedAddress = encodeURIComponent(address);
    var mapUrl = "https://www.google.com/maps/embed/v1/place?key=".concat(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, "&q=").concat(encodedAddress);
    var directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=".concat(encodedAddress);
    var openInGoogleMaps = function() {
        window.open(directionsUrl, "_blank");
    };
    return /* @__PURE__ */ React11.createElement(Modal, {
        onClose: onClose
    }, /* @__PURE__ */ React11.createElement("div", {
        className: "p-6"
    }, /* @__PURE__ */ React11.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-4"
    }, "Pickup Location"), /* @__PURE__ */ React11.createElement("div", {
        className: "mb-6"
    }, /* @__PURE__ */ React11.createElement("div", {
        className: "flex items-center gap-2 text-[#5A7C6F] mb-4"
    }, /* @__PURE__ */ React11.createElement(MapPin, {
        className: "h-4 w-4 flex-shrink-0"
    }), /* @__PURE__ */ React11.createElement("p", null, address)), /* @__PURE__ */ React11.createElement("div", {
        className: "relative w-full h-[300px] rounded-xl overflow-hidden mb-4 border-2 border-[#4B7163]"
    }, /* @__PURE__ */ React11.createElement("iframe", {
        width: "100%",
        height: "100%",
        style: {
            border: 0
        },
        loading: "lazy",
        src: mapUrl,
        allowFullScreen: true
    })), /* @__PURE__ */ React11.createElement(CustomButton, {
        onClick: openInGoogleMaps,
        className: "w-full flex items-center justify-center gap-2"
    }, /* @__PURE__ */ React11.createElement(Navigation, {
        className: "w-4 h-4"
    }), "Get Directions")), /* @__PURE__ */ React11.createElement("p", {
        className: "text-sm text-[#5A7C6F]"
    }, "Opening directions will use your current location as the starting point")));
};
// src/components/MessageBubble.tsx
import React12 from "react";
var MessageBubble = function(param) {
    var children = param.children, _param_state = param.state, state = _param_state === void 0 ? "primary" : _param_state, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    var stateClasses = {
        primary: 'bg-[#4B7163] text-white rounded-tr-2xl rounded-tl-2xl rounded-br-2xl relative after:content-[""] after:absolute after:left-[-13px] after:bottom-0 after:border-[8px] after:border-[#4B7163] after:border-l-transparent after:border-t-transparent',
        secondary: 'bg-[#6AB098] text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl relative after:content-[""] after:absolute after:right-[-13px] after:bottom-0 after:border-[8px] after:border-[#6AB098] after:border-r-transparent after:border-t-transparent',
        tertiary: 'bg-[#FFE082] text-black rounded-tr-2xl rounded-tl-2xl rounded-br-2xl relative after:content-[""] after:absolute after:left-[-16px] after:bottom-0 after:border-[8px] after:border-[#FFE082] after:border-l-transparent after:border-t-transparent'
    };
    return /* @__PURE__ */ React12.createElement("div", {
        className: cn("p-4 mb-6 max-w-[80%] w-fit", stateClasses[state], className)
    }, children);
};
// src/components/MessageThread.tsx
import React13, { useState as useState5 } from "react";
import { MessageCircle } from "lucide-react";
var MessageThread = function(param) {
    var messages = param.messages, onSendMessage = param.onSendMessage, onMessageRead = param.onMessageRead, className = param.className;
    var _useState5 = _sliced_to_array(useState5(false), 2), isExpanded = _useState5[0], setIsExpanded = _useState5[1];
    var _useState51 = _sliced_to_array(useState5(""), 2), newMessage = _useState51[0], setNewMessage = _useState51[1];
    var unreadCount = messages.filter(function(msg) {
        return !msg.isRead;
    }).length;
    var lastMessage = messages[messages.length - 1];
    var lastMessageTime = lastMessage ? new Intl.RelativeTimeFormat("en").format(Math.ceil((lastMessage.timestamp.getTime() - Date.now()) / (1e3 * 60 * 60 * 24)), "days") : null;
    var handleExpand = function() {
        setIsExpanded(!isExpanded);
        if (!isExpanded && onMessageRead) {
            messages.forEach(function(msg) {
                if (!msg.isRead) onMessageRead(msg.id);
            });
        }
    };
    return /* @__PURE__ */ React13.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", className)
    }, /* @__PURE__ */ React13.createElement("button", {
        onClick: handleExpand,
        className: "w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#F8FAF9]"
    }, /* @__PURE__ */ React13.createElement("div", {
        className: "flex items-center gap-3"
    }, /* @__PURE__ */ React13.createElement(MessageCircle, {
        className: "h-5 w-5 text-[#4B7163]"
    }), /* @__PURE__ */ React13.createElement("span", {
        className: "font-medium text-[#4B7163]"
    }, "Messages"), unreadCount > 0 && /* @__PURE__ */ React13.createElement("span", {
        className: "bg-[#6AB098] text-white text-sm px-2 py-1 rounded-full"
    }, unreadCount, " new")), lastMessage && /* @__PURE__ */ React13.createElement("span", {
        className: "text-sm text-gray-500"
    }, "Last message ", lastMessageTime)), isExpanded && /* @__PURE__ */ React13.createElement("div", {
        className: "mt-4 space-y-4"
    }, messages.map(function(message, index) {
        return /* @__PURE__ */ React13.createElement("div", {
            key: message.id
        }, /* @__PURE__ */ React13.createElement(MessageBubble, {
            state: index === messages.length - 1 && message.sender !== "admin" ? "tertiary" : message.sender === "admin" ? "secondary" : "primary",
            className: cn(message.sender === "admin" ? "ml-8" : "mr-8")
        }, /* @__PURE__ */ React13.createElement("p", null, message.content), /* @__PURE__ */ React13.createElement("span", {
            className: "text-sm opacity-75 mt-2 block"
        }, message.timestamp.toLocaleString())));
    }), /* @__PURE__ */ React13.createElement("form", {
        onSubmit: function(e) {
            e.preventDefault();
            if (newMessage.trim()) {
                onSendMessage(newMessage);
                setNewMessage("");
            }
        },
        className: "flex gap-2 mt-4"
    }, /* @__PURE__ */ React13.createElement("input", {
        type: "text",
        value: newMessage,
        onChange: function(e) {
            return setNewMessage(e.target.value);
        },
        placeholder: "Type your message...",
        className: "flex-1 p-2 border-2 border-[#4B7163] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6AB098]"
    }), /* @__PURE__ */ React13.createElement(CustomButton, {
        type: "submit",
        disabled: !newMessage.trim(),
        className: "bg-[#4B7163] text-white px-4 py-2 rounded-lg hover:bg-[#3A5A4F]"
    }, "Send"))));
};
// src/components/ReceivingWorkflow.tsx
import React15, { useState as useState7 } from "react";
import { X as X6, Check as Check4 } from "lucide-react";
// src/components/SwipeCard.tsx
import React14, { useState as useState6 } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Check as Check3, X as X5 } from "lucide-react";
var SwipeCard = function(param) {
    var imageUrl = param.imageUrl, alt = param.alt, children = param.children, onSwipe = param.onSwipe, _param_isVisible = param.isVisible, isVisible = _param_isVisible === void 0 ? true : _param_isVisible;
    var _useState6 = _sliced_to_array(useState6(0), 2), exitX = _useState6[0], setExitX = _useState6[1];
    var x = useMotionValue(0);
    var rotate = useTransform(x, [
        -200,
        200
    ], [
        -25,
        25
    ]);
    var opacity = useTransform(x, [
        -200,
        -150,
        0,
        150,
        200
    ], [
        0,
        1,
        1,
        1,
        0
    ]);
    var dragEndHandler = function(event, info) {
        if (Math.abs(info.offset.x) > 100) {
            setExitX(info.offset.x);
            var direction = info.offset.x > 0 ? "right" : "left";
            onSwipe(direction);
        }
    };
    var handleAccept = function() {
        setExitX(200);
        onSwipe("right");
    };
    var handleReject = function() {
        setExitX(-200);
        onSwipe("left");
    };
    if (!isVisible) return null;
    return /* @__PURE__ */ React14.createElement(motion.div, {
        className: "absolute inset-0",
        style: {
            x: x,
            rotate: rotate,
            opacity: opacity
        },
        drag: "x",
        dragConstraints: {
            left: 0,
            right: 0
        },
        onDragEnd: dragEndHandler,
        animate: {
            x: exitX
        },
        transition: {
            type: "spring",
            duration: 0.5
        },
        whileTap: {
            cursor: "grabbing"
        }
    }, /* @__PURE__ */ React14.createElement("div", {
        className: "relative w-full h-full select-none"
    }, /* @__PURE__ */ React14.createElement("div", {
        className: "w-full h-full bg-white rounded-xl overflow-hidden shadow-lg"
    }, /* @__PURE__ */ React14.createElement("div", {
        className: "relative w-full h-3/5 pointer-events-none"
    }, /* @__PURE__ */ React14.createElement("img", {
        src: imageUrl,
        alt: alt,
        className: "w-full h-full object-cover",
        draggable: "false"
    })), /* @__PURE__ */ React14.createElement("div", {
        className: "p-4 h-2/5 pointer-events-none"
    }, children)), /* @__PURE__ */ React14.createElement(motion.div, {
        className: "absolute bottom-4 left-0 right-0 flex justify-center gap-4",
        style: {
            opacity: useTransform(x, [
                -50,
                0,
                50
            ], [
                0,
                1,
                0
            ])
        }
    }, /* @__PURE__ */ React14.createElement("button", {
        onClick: handleReject,
        className: "p-3 rounded-full bg-white shadow-lg hover:bg-gray-50"
    }, /* @__PURE__ */ React14.createElement(X5, {
        className: "w-6 h-6 text-red-500"
    })), /* @__PURE__ */ React14.createElement("button", {
        onClick: handleAccept,
        className: "p-3 rounded-full bg-white shadow-lg hover:bg-gray-50"
    }, /* @__PURE__ */ React14.createElement(Check3, {
        className: "w-6 h-6 text-green-500"
    })))));
};
// src/components/ReceivingWorkflow.tsx
var ReceivingWorkflow = function(param) {
    var items = param.items, onReceiveItem = param.onReceiveItem, onRejectItem = param.onRejectItem, onUpdateStatus = param.onUpdateStatus, onUpdateDetails = param.onUpdateDetails, onAddProcessingPhotos = param.onAddProcessingPhotos, className = param.className;
    var _useState7 = _sliced_to_array(useState7(null), 2), selectedItem = _useState7[0], setSelectedItem = _useState7[1];
    var _useState71 = _sliced_to_array(useState7(null), 2), processingItem = _useState71[0], setProcessingItem = _useState71[1];
    var pendingItems = items.filter(function(item) {
        return item.status === "pending";
    });
    if (processingItem) {
        return /* @__PURE__ */ React15.createElement("div", {
            className: className
        }, /* @__PURE__ */ React15.createElement(CustomButton, {
            variant: "secondary",
            onClick: function() {
                return setProcessingItem(null);
            },
            className: "mb-4"
        }, "\u2190 Back to List"), /* @__PURE__ */ React15.createElement(InventoryProcessing, {
            request: {
                id: processingItem.id,
                status: "completed",
                pickupPhoto: processingItem.imageUrl,
                items: [],
                customerName: "",
                customerEmail: "",
                customerPhone: "",
                pickupDate: /* @__PURE__ */ new Date(),
                pickupAddress: "",
                messages: [],
                address: ""
            },
            onUpdateStatus: function(status) {
                return onUpdateStatus(processingItem.id, status);
            },
            onUpdateDetails: function(details) {
                return onUpdateDetails(processingItem.id, details);
            },
            onAddProcessingPhotos: function(photos) {
                return onAddProcessingPhotos(processingItem.id, photos);
            },
            onConfirmReceipt: function() {
                return setProcessingItem(null);
            }
        }));
    }
    return /* @__PURE__ */ React15.createElement("div", {
        className: cn("space-y-6", className)
    }, selectedItem ? /* @__PURE__ */ React15.createElement(React15.Fragment, null, /* @__PURE__ */ React15.createElement(CustomButton, {
        variant: "secondary",
        onClick: function() {
            return setSelectedItem(null);
        },
        className: "mb-4"
    }, "\u2190 Back to List"), /* @__PURE__ */ React15.createElement("div", {
        className: "aspect-[3/4] w-full relative"
    }, /* @__PURE__ */ React15.createElement("div", {
        className: "absolute inset-0 -mx-8"
    }, /* @__PURE__ */ React15.createElement("div", {
        className: "relative h-full mx-8"
    }, /* @__PURE__ */ React15.createElement(SwipeCard, {
        imageUrl: selectedItem.imageUrl,
        alt: selectedItem.name,
        onSwipe: function(direction) {
            if (direction === "right") {
                onReceiveItem(selectedItem.id);
                onUpdateStatus(selectedItem.id, "completed");
                setProcessingItem(selectedItem);
            } else {
                onRejectItem(selectedItem.id);
            }
            setSelectedItem(null);
        }
    }, /* @__PURE__ */ React15.createElement("div", {
        className: "bg-[#F8FAF9] p-4 rounded-xl h-full overflow-y-auto"
    }, /* @__PURE__ */ React15.createElement("h4", {
        className: "font-semibold text-[#4B7163] mb-2"
    }, selectedItem.name), /* @__PURE__ */ React15.createElement("p", {
        className: "text-sm text-[#5A7C6F] mb-2"
    }, selectedItem.description), /* @__PURE__ */ React15.createElement("div", {
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React15.createElement("span", {
        className: cn("px-2 py-1 rounded-full text-xs", selectedItem.status === "completed" && "bg-green-100 text-green-800", selectedItem.status === "rejected" && "bg-red-100 text-red-800", selectedItem.status === "pending" && "bg-yellow-100 text-yellow-800")
    }, selectedItem.status.charAt(0).toUpperCase() + selectedItem.status.slice(1)))))))), /* @__PURE__ */ React15.createElement("div", {
        className: "flex justify-center gap-8 text-sm text-gray-500 mt-2"
    }, /* @__PURE__ */ React15.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ React15.createElement(X6, {
        className: "h-4 w-4 text-red-500"
    }), " Swipe left to reject"), /* @__PURE__ */ React15.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ React15.createElement(Check4, {
        className: "h-4 w-4 text-green-500"
    }), " Swipe right to receive"))) : /* @__PURE__ */ React15.createElement("div", {
        className: "bg-white rounded-2xl border-2 border-[#4B7163] p-6"
    }, /* @__PURE__ */ React15.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-6"
    }, "Pending Items (", pendingItems.length, ")"), /* @__PURE__ */ React15.createElement("div", {
        className: "grid gap-4"
    }, pendingItems.map(function(item) {
        return /* @__PURE__ */ React15.createElement("div", {
            key: item.id,
            onClick: function() {
                return setSelectedItem(item);
            },
            className: "flex gap-4 p-4 bg-[#F8FAF9] hover:bg-[#F0F4F2] rounded-xl cursor-pointer transition-colors"
        }, /* @__PURE__ */ React15.createElement("img", {
            src: item.imageUrl,
            alt: item.name,
            className: "w-24 h-24 rounded-lg object-cover"
        }), /* @__PURE__ */ React15.createElement("div", null, /* @__PURE__ */ React15.createElement("h3", {
            className: "font-rockwell text-lg text-[#4B7163]"
        }, item.name), /* @__PURE__ */ React15.createElement("p", {
            className: "text-sm text-[#5A7C6F]"
        }, item.description)));
    }))));
};
// src/components/PickupRequestForm.tsx
import React19, { useState as useState8, useEffect as useEffect2 } from "react";
// src/components/Progress.tsx
import React16 from "react";
import { Check as Check5 } from "lucide-react";
var Progress = function(param) {
    var steps = param.steps, currentStep = param.currentStep, onStepClick = param.onStepClick, _param_completedSteps = param.completedSteps, completedSteps = _param_completedSteps === void 0 ? [] : _param_completedSteps;
    return /* @__PURE__ */ React16.createElement("div", {
        className: "flex justify-between relative mb-16"
    }, /* @__PURE__ */ React16.createElement("div", {
        className: "absolute top-3 left-0 right-0 h-1 bg-gray-200"
    }), /* @__PURE__ */ React16.createElement("div", {
        className: "absolute top-3 left-0 h-1 bg-[#4B7163] transition-all duration-200",
        style: {
            width: "".concat((currentStep - 1) / (steps.length - 1) * 100, "%")
        }
    }), steps.map(function(step, index) {
        var StepIcon = step.icon;
        var isCompleted = index + 1 < currentStep;
        var isCurrent = index + 1 === currentStep;
        var canClick = index + 1 < currentStep || completedSteps.includes(currentStep) && completedSteps.includes(index);
        return /* @__PURE__ */ React16.createElement("div", {
            key: index,
            className: cn("flex flex-col items-center relative", canClick ? "cursor-pointer" : "cursor-not-allowed", isCurrent ? "text-[#4B7163]" : isCompleted ? "text-[#4B7163]" : "text-gray-400"),
            onClick: function() {
                return canClick && onStepClick(index + 1);
            }
        }, /* @__PURE__ */ React16.createElement("div", {
            className: cn("w-7 h-7 rounded-full flex items-center justify-center relative z-10", isCompleted || isCurrent ? "bg-[#4B7163]" : "bg-white border-2 border-gray-200")
        }, isCompleted ? /* @__PURE__ */ React16.createElement(Check5, {
            className: "w-4 h-4 text-white"
        }) : /* @__PURE__ */ React16.createElement(StepIcon, {
            className: cn("w-4 h-4", isCurrent ? "text-white" : "text-gray-400")
        })), /* @__PURE__ */ React16.createElement("div", {
            className: cn("text-sm font-medium mt-2", isCompleted || isCurrent ? "text-[#4B7163]" : "text-gray-400")
        }, step.label), /* @__PURE__ */ React16.createElement("div", {
            className: "invisible group-hover:visible absolute -bottom-12 bg-[#4B7163] text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-20 shadow-lg"
        }, step.description, /* @__PURE__ */ React16.createElement("div", {
            className: "absolute -top-1 left-1/2 -ml-1 w-2 h-2 bg-[#4B7163] transform rotate-45"
        })));
    }));
};
// src/components/PickupRequestForm.tsx
import { Info, Calendar, Camera, UserCircle2, CheckCircle2 } from "lucide-react";
import usePlacesAutocomplete from "use-places-autocomplete";
// src/components/TermsOfService.tsx
import * as React17 from "react";
function TermsOfService(param) {
    var isVisible = param.isVisible, onClose = param.onClose, className = param.className;
    if (!isVisible) return null;
    return /* @__PURE__ */ React17.createElement(Modal, {
        onClose: onClose,
        className: cn("p-6", className)
    }, /* @__PURE__ */ React17.createElement("div", {
        className: "terms-content"
    }, /* @__PURE__ */ React17.createElement("h2", null, "Gone Technologies Inc. Terms of Service"), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("p", null, 'Welcome to the Gone Technologies Inc. d/b/a "Gone" ("Gone," "We," or "Us") Terms of Service (the "Terms"). Please read these Terms carefully because they govern your use of our website gone.com and our gone mobile application, and any of our other services and products available at or through the website or mobile application (collectively "Services"). Please read the Terms carefully. If you have any questions, contact us at support@gone.com.'), /* @__PURE__ */ React17.createElement("p", null, 'At Gone we offer a unique way for our "users" to dispose of their household reusable goods with just a simple request for pick up. You reach out to us via phone, or text and send a picture of your reusable goods. We\'ll then send you a calendar invite to select a time for pick up. After the date, address, and time are confirmed, your goods will be hauled away as scheduled. You may cancel at anytime prior to pick up.'), /* @__PURE__ */ React17.createElement("p", null, "After we pick up the items, Gone reserves the right to dispose of the items or resell the items at our discretion. No compensation is paid to the household. Instead, our value is the removal of unwanted items from your home, which is subject to your agreement and compliance with these Terms including, without limitation, waiver of the claims below."), /* @__PURE__ */ React17.createElement("p", null, "Not all items are available for pick up. Please review our policies for approved household items.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Agreement to Terms"), /* @__PURE__ */ React17.createElement("p", null, 'By accessing or using any portion of our Services, you agree to comply with and be bound by these Terms. These Terms apply to you regardless of whether you are a "User" (meaning, you have created an account with us) or are a "Visitor" (meaning, you are using or viewing the Service but have not created an account). The term "You," "Your," or "User" refers to both Users and Visitors.'), /* @__PURE__ */ React17.createElement("p", null, "The Service is for personal, non-commercial use. You agree that you are using the Service for personal use only and not are not using the Service for or on behalf of any third-party, or for any commercial purpose.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "User Conduct"), /* @__PURE__ */ React17.createElement("p", null, "You Agree NOT to:"), /* @__PURE__ */ React17.createElement("ul", null, /* @__PURE__ */ React17.createElement("li", null, "use language or transmit content that may be considered offensive or profane to our team or users. This includes profanity and offensive images, or other media containing obscene, sexually explicit, or excessively violent content."), /* @__PURE__ */ React17.createElement("li", null, "harass or threaten other our team or users. Harassing behavior and language includes insults, ethnic or homophobic slurs, defamatory statements, invasive statements that may infringe on a user's privacy, or the transmission or sharing of any content that may cause our team or user to experience ridicule, threat, or discomfort."), /* @__PURE__ */ React17.createElement("li", null, "submit material that violates a third party's proprietary rights, including privacy and publicity rights, or that otherwise violates any applicable law;"), /* @__PURE__ */ React17.createElement("li", null, "publish falsehoods or misrepresentations that could damage us, our users, or any third party;"), /* @__PURE__ */ React17.createElement("li", null, "publish any private information of someone (like their address or phone number) without their permission;"), /* @__PURE__ */ React17.createElement("li", null, "submit material that is unlawful, obscene, defamatory, libelous, threatening, pornographic, harassing, hateful, racially or ethnically offensive, or encourages conduct that would be considered a criminal offense, give rise to civil liability, violate any law, or is otherwise inappropriate;"), /* @__PURE__ */ React17.createElement("li", null, "post advertisements;"), /* @__PURE__ */ React17.createElement("li", null, "impersonate another person or represent yourself as affiliated with us, our staff, or other industry professionals;"), /* @__PURE__ */ React17.createElement("li", null, "harvest user's names, addresses, or email addresses for any purpose.")), /* @__PURE__ */ React17.createElement("p", null, "This list is an example and is not intended to be complete or exhaustive. We don't have an obligation to monitor your access to, or use of, the Services, but we reserve the right to do so for the purpose of operating the Services, to ensure your compliance with these Terms, or to comply with applicable law or the order or requirement of a court, administrative agency, or other governmental body. We reserve the right, at any time and without prior notice, to revoke your use our services, in our sole discretion, if we believe your actions are in violation of these Terms or otherwise harmful to our business."), /* @__PURE__ */ React17.createElement("p", null, "You can remove your content by specifically deleting it. However, in certain instances, some of your Content (such as images of items shared) may not be completely removed, or may not be removable (audible content), and copies of your Content may continue to exist on the Services. We are not responsible or liable for the removal or deletion of (or the failure to remove or delete) any of the Content.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Our Content"), /* @__PURE__ */ React17.createElement("p", null, 'Subject to your compliance with these Terms, We grant you a limited, non-exclusive, non-transferable, non-sublicenseable license to access and view our content ("Our Content") solely in connection with your permitted use of the Services. For the purposes of these Terms, Our Content shall include all text, graphics, images, site and screen layouts, arrangements and themes, music, software, audio, video, works of authorship by us or our affiliates of any kind, and information or other materials that are posted or generated by us or our affiliates.'), /* @__PURE__ */ React17.createElement("p", null, "You have the right to view and access Our Content. However, you may not copy, borrow, modify, or otherwise reproduce, and must immediately cease using, copying, borrowing, modifying, or otherwise reproducing any site and screen layouts, arrangements and themes provided through this Service. At no time is any Member permitted to: (i) transfer, sublicense, sell, lease, lend, rent, or otherwise distribute Our Content or the Services to a third party; (ii) decompile, reverse-engineer, disassemble, or create derivative works of the Services or any Our Content; or (iii) use the Services or Our Content in any unlawful manner, for any unlawful purpose, or in any manner inconsistent with these Terms.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Intellectual Property"), /* @__PURE__ */ React17.createElement("p", null, "The Services contain material that may be protected by United States and international copyright, trademark, and other proprietary information, including, but not limited to, audio, video, graphic, photographic and text information, and all Our Content. We, and any of our licensors, exclusively own all right, title and interest in, and to the Services and Our Content, including all associated intellectual property rights. You acknowledge that the Services and Our Content are protected by copyright, trademark, and other laws of the United States and foreign countries. You agree not to remove, alter, or obscure any copyright, trademark, service mark, or other proprietary rights or notices incorporated in or accompanying the Services and Our Content. Further, you may not modify, distribute, publish, transmit, publicly display, publicly perform, participate in the transfer or sale, create derivative works of, or in any way exploit any of the Our Content, in whole or in part. Any violation of these restrictions may result in intellectual property infringement that may subject you to civil and/or criminal penalties. You will be solely liable for any damage resulting from any infringement of copyrights, trademarks, proprietary rights or any other harm resulting from a submission of information protected by intellectual property rights in a third party, if such submission is made without express permission of the intellectual property rights holder.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "DMCA/Copyright Policy"), /* @__PURE__ */ React17.createElement("p", null, "We respect copyright law and expect our users to do the same. It is our policy to terminate access in appropriate circumstances to users who repeatedly infringe the rights of copyright holders."), /* @__PURE__ */ React17.createElement("p", null, 'The Digital Millennium Copyright Act of 1998 (the "DMCA") provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. If you believe in good faith that Content infringes your copyright, you (or your agent) may send us a notice requesting that the Content be removed or access to it blocked. Federal law requires that your notification include the following information:'), /* @__PURE__ */ React17.createElement("ul", null, /* @__PURE__ */ React17.createElement("li", null, "(i) a physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;"), /* @__PURE__ */ React17.createElement("li", null, "(ii) identification of the copyrighted work claimed to have been infringed or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site;"), /* @__PURE__ */ React17.createElement("li", null, "(iii) identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled and information reasonably sufficient to permit us to locate the material;"), /* @__PURE__ */ React17.createElement("li", null, "(iv) information reasonably sufficient to permit us to contact you, such as an address, telephone number, and, if available, an electronic mail;"), /* @__PURE__ */ React17.createElement("li", null, "(v) a statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law;"), /* @__PURE__ */ React17.createElement("li", null, "(vi) a statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.")), /* @__PURE__ */ React17.createElement("p", null, "The notification must be sent to:"), /* @__PURE__ */ React17.createElement("p", null, "[COMPANY ADDRESS]"), /* @__PURE__ */ React17.createElement("p", null, "We provide the above contact information for purposes of the DMCA only and reserve the right to respond only to correspondence that is relevant to this purpose.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Links and Advertisements of Third Party Websites, Apps, or Resources"), /* @__PURE__ */ React17.createElement("p", null, "The Services may contain links to or advertisements of third-party websites, applications or resources that are not affiliated with you, other users, or our Services. We are not responsible for the content, products or services on or available from those advertisements, websites, resources or links displayed on such sites. You acknowledge sole responsibility for and assume all risk arising from your use of any third-party websites or resources. The terms and privacy policies of these third party websites, applications, or resources govern your use of those services.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Indemnity"), /* @__PURE__ */ React17.createElement("p", null, "You agree to defend, indemnify and hold harmless us, or our officers, directors, employees and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs, debts, or expenses (including but not limited to attorneys' fees), to the extent allowed by applicable law, that arise from or are caused by:"), /* @__PURE__ */ React17.createElement("ul", null, /* @__PURE__ */ React17.createElement("li", null, "(i) your use of and access to the Services;"), /* @__PURE__ */ React17.createElement("li", null, "(ii) your violation of these Terms;"), /* @__PURE__ */ React17.createElement("li", null, "(iii) your violation of any third party right, including without limitation any copyright, property, moral or privacy right;"), /* @__PURE__ */ React17.createElement("li", null, "(iv) any claim that your Content caused damage to any third party.")), /* @__PURE__ */ React17.createElement("p", null, "This section shall survive these Terms and your use and termination of the Services.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Termination"), /* @__PURE__ */ React17.createElement("p", null, "We may terminate your access to and use of the Services at our sole discretion, at any time and without notice to you. Upon any termination, discontinuation or cancellation of Services, all provisions of these Terms which by their nature should survive will survive, including, without limitation, ownership provisions, indemnification, warranty disclaimers, limitations of liability, and dispute resolution provisions.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Warranty Disclaimers"), /* @__PURE__ */ React17.createElement("p", {
        className: "warranty-disclaimer"
    }, 'THE SERVICES AND CONTENT ARE PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. WE MAKE NO WARRANTY THAT THE SERVICES WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS. WE MAKE NO WARRANTY REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF ANY CONTENT.')), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Accounts"), /* @__PURE__ */ React17.createElement("p", null, "You don't need to create an account to use our services. We engage directly with you at your request. However, when you engage with us you represent that you are eighteen (18) years or older and are not barred from using the Services under applicable law."), /* @__PURE__ */ React17.createElement("p", null, 'You agree not to use the Services under the name of another person with the intent to impersonate that person. You must be a human to use the Services and an automated account is not allowed. "Robot" (or automatic) activity is not allowed. This policy also applies beyond Account creation to the general use of the Services.'), /* @__PURE__ */ React17.createElement("p", null, "We reserve the right to suspend or terminate your access to our Services and/or your Account if any information provided during the registration process or thereafter proves to be inaccurate, false, or misleading. You are solely responsible for activities that occur under your Account.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Feedback"), /* @__PURE__ */ React17.createElement("p", null, "We welcome feedback, comments, and suggestions for improvements to the Services. You can submit feedback by emailing us at the contact email listed above. You grant to us a non-exclusive, worldwide, perpetual, irrevocable, fully-paid, royalty-free, sublicensable, and transferable license under any and all intellectual property rights that you own or control to use, copy, modify, create derivative works based upon, and otherwise exploit the feedback for any purpose.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Privacy Policy"), /* @__PURE__ */ React17.createElement("p", null, "Your privacy is important to us. Please review our Privacy Policy for information about the data we may collect and use. Our Privacy Policy is incorporated in these Terms, and is available at [WEBSITE LINK PRIVACY POLICY].")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Your Content"), /* @__PURE__ */ React17.createElement("p", null, 'For purposes of these Terms: "Content" means text, photos, graphics, images, audio, video, and information or other materials that are texted, emailed, shared, posted, generated, provided, or otherwise made available to us through the Services. "Goods" refers to the consumer household item that you are requesting to remove and/or that may appear in the Content shared.'), /* @__PURE__ */ React17.createElement("p", null, "You are responsible for the Content and Goods that you share within the Services, including its legality, reliability, and appropriateness. We only take responsibility for the Goods once its loaded on to our truck."), /* @__PURE__ */ React17.createElement("p", null, "You represent and warrant that:"), /* @__PURE__ */ React17.createElement("ul", null, /* @__PURE__ */ React17.createElement("li", null, "(i) the Content and Goods are yours (e.g. its your stuff in your household and your own photo) or you have the right to share it and grant us the rights and license as provided in these Terms,"), /* @__PURE__ */ React17.createElement("li", null, "(ii) the sharing of the Content on or through the Services does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person,"), /* @__PURE__ */ React17.createElement("li", null, "(iii) you have the right to engage us to pick up the Goods"), /* @__PURE__ */ React17.createElement("li", null, '(iv) you are the current owner of all right, title, and interest in the Goods and holds them free and clear of all liabilities, liens, encumbrances, pledges, restrictions on transfer or other charges ("Liens")'), /* @__PURE__ */ React17.createElement("li", null, "(v) upon transfer of the Good to Gone, Gone will acquire good and marketable title to the goods, free and clear of any liens"), /* @__PURE__ */ React17.createElement("li", null, "(vi) the Goods correspond with the description you provide us"), /* @__PURE__ */ React17.createElement("li", null, "(vii) the Goods will be of satisfactory condition"), /* @__PURE__ */ React17.createElement("li", null, "(viii) as consideration in full for removing the Goods from your household, you transfer ownership of the goods to Gone upon pick up.")), /* @__PURE__ */ React17.createElement("p", null, "Gone shall not be liable for a breach of any warranty above unless User gives written notice of the defect to Gone at least 3 days prior to the date of pick up. If the goods do not conform with any of the warranties, Gone shall within 7 days of pick up have the option to return the goods to User at User's expense."), /* @__PURE__ */ React17.createElement("p", null, "We do not claim any ownership rights in any Content that you make available through the Services and nothing in these Terms will be deemed to restrict any rights that you may have to use and exploit your own Content. However, you grant us a non-exclusive, non-transferable, non-sublicenseable, worldwide license to use any Content submitted by you in relation to the Services, including the promotion and advertisement of Services. We take ownership of the goods at the time of pick up. We reserve the right to store, sell, dispose, trade, or take any other action with the goods at our discretion.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "WAIVER OF CLAIMS"), /* @__PURE__ */ React17.createElement("p", null, "As a User of our service you hereby acknowledge the risks associated with engaging with our Services to enter your home and remove your unwanted household items. You accept and assume full responsibility for any and all injuries, damages, or losses of any type, which may occur in the process of picking up and hauling your household items. You hereby fully and forever release and discharge us, our affiliates, our insurers, employees, officers, and directors from any and all claims, demands, damages, rights of action, or causes of action, whether present or in the future, whether known or unknown, anticipated, or unanticipated, resulting from or arising out of your use of our Services.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Changes to Terms or Services"), /* @__PURE__ */ React17.createElement("p", null, "We may modify the Terms and our Services at any time, in our sole discretion. If we do so, we will let you know by email or by posting notice on the website or via a notification in the App. It's important that you review the Terms whenever we modify them because continuing to use the Services after we have posted modified Terms on the Site indicates to us that you agree to be bound by the modified Terms. If you don't agree to be bound by the modified Terms, then please discontinue use of the Services immediately. Because our Services are evolving over time we may change or discontinue all or any part of the Services at any time, and without notice to you, at our sole discretion.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Limitation of Liability"), /* @__PURE__ */ React17.createElement("p", {
        className: "liability-disclaimer"
    }, "NEITHER WE NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES OR CONTENT WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION, MOBILE DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE."), /* @__PURE__ */ React17.createElement("p", {
        className: "liability-disclaimer"
    }, "IN NO EVENT WILL OUR TOTAL LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES OR CONTENT EXCEED ONE HUNDRED DOLLARS ($100).")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Dispute Resolution"), /* @__PURE__ */ React17.createElement("p", null, "We prefer to resolve things amicably when possible; therefore, you agree to the following dispute resolution policy in connection with any potential claims or disputes arising from your use of the Application. Start by notifying us of your dispute by sending a notice to the contact email address listed above."), /* @__PURE__ */ React17.createElement("ol", {
        type: "a"
    }, /* @__PURE__ */ React17.createElement("li", null, /* @__PURE__ */ React17.createElement("strong", null, "Informal Negotiations:"), " Parties to a dispute concerning the Terms, the Privacy Policy, or the use of the Services will attempt to informally negotiate a potential settlement or resolution to the dispute;"), /* @__PURE__ */ React17.createElement("li", null, /* @__PURE__ */ React17.createElement("strong", null, "Arbitration:"), " In the event that informal negotiations are unsuccessful, the parties agree to follow the arbitration procedures set forth by the American Arbitration Association (AAA) to resolve the dispute."), /* @__PURE__ */ React17.createElement("li", null, /* @__PURE__ */ React17.createElement("strong", null, "Binding Arbitration:"), " If for any reason arbitration is unsuccessful or unavailable to the parties, parties agree to submit to binding arbitration in the jurisdiction of the State of Washington. Each of us is responsible for paying our own filing, administrative and arbitrator fees. Judgment on the arbitration award may be entered in any court having jurisdiction thereof."))), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Entire Agreement"), /* @__PURE__ */ React17.createElement("p", null, "These Terms constitute the entire and exclusive understanding and agreement between us and you. These Terms supersede and replace any and all prior oral or written understandings or agreements between us. If for any reason a court of competent jurisdiction finds any provision of these Terms invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect."), /* @__PURE__ */ React17.createElement("p", null, "You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. Any attempt by you to assign or transfer these Terms, without such consent, will be null and of no effect."), /* @__PURE__ */ React17.createElement("p", null, "Any notices or other communications provided by us under these Terms, including those regarding modifications to these Terms, will be given by us (i) via email; or (ii) by posting to the Services. For notices made by email, the date of receipt will be deemed the date on which such notice is transmitted."), /* @__PURE__ */ React17.createElement("p", null, "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of us. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise.")), /* @__PURE__ */ React17.createElement("section", null, /* @__PURE__ */ React17.createElement("h3", null, "Questions & Contact Information"), /* @__PURE__ */ React17.createElement("p", null, "If you have any questions regarding these Terms, please contact us at support@gone.com"))));
}
// src/components/PickupRequestForm.tsx
import { addDoc, collection } from "firebase/firestore";
// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyDEtOjh0x7nTwlFdJaQAvgg1_1dpKfiz9g",
    authDomain: "pickup-436017.firebaseapp.com",
    projectId: "pickup-436017",
    storageBucket: "pickup-436017.appspot.com",
    appId: "1:990800642935:web:9e965fd4d9c9cf50505772",
    measurementId: "G-TGRV39M2JC"
};
var app = initializeApp(firebaseConfig);
var db = getFirestore(app);
// src/components/Privacy.tsx
import * as React18 from "react";
function Privacy(param) {
    var isVisible = param.isVisible, onClose = param.onClose, className = param.className;
    if (!isVisible) return null;
    return /* @__PURE__ */ React18.createElement(Modal, {
        onClose: onClose,
        className: cn("p-6", className)
    }, /* @__PURE__ */ React18.createElement("div", {
        className: "privacy-content"
    }, /* @__PURE__ */ React18.createElement("h2", null, "Privacy Policy"), /* @__PURE__ */ React18.createElement("section", null, /* @__PURE__ */ React18.createElement("p", null, 'Your privacy is important to us. At Gone Technologies Inc. d/b/ Its Gone Now ("Gone", "we", "us", or "our"), we have a few fundamental principles:'), /* @__PURE__ */ React18.createElement("ol", null, /* @__PURE__ */ React18.createElement("li", null, "We don't and won't ask you for personally identifying information unless we need it and you have the opportunity to review your options. To make this Privacy Policy easier to read, www.itsgonenow.com and our associated products and services are collectively referenced as \"Services\" throughout this policy."), /* @__PURE__ */ React18.createElement("li", null, "We don't share your personally identifying information, with anyone, except as needed, to provide service support, to comply with the law, or to protect our rights."), /* @__PURE__ */ React18.createElement("li", null, "This service does not require you to enter any information to view the website or the products and services. You do have the option to fill in the information to make a request to receive more information or a demo. This information is only used to connect with you about working with Gone. We do not share this information with anyone or use it for any other purposes. The limited information collected is governed by this policy."), /* @__PURE__ */ React18.createElement("li", null, "If you are a customer of Gone, this Privacy Policy governs the limited personal information that you share in order to set up an account and access our tools, products, dashboard, and other services in accordance with our Terms of Service.")), /* @__PURE__ */ React18.createElement("p", null, "Please note, that this Privacy Policy does not apply to the privacy practices of third parties whose links may appear on or through the Services. We are not responsible for the content or privacy practices of third parties or other users. We recommend that you exercise caution before you voluntarily disclose personally identifiable information to other users, on publicly accessible or displayable parts of the Service, or through third-party links on third-party websites or platforms.")), /* @__PURE__ */ React18.createElement("section", null, /* @__PURE__ */ React18.createElement("h3", null, "I. What is Personal Information and What types of Personal Information do we collect?"), /* @__PURE__ */ React18.createElement("ol", null, /* @__PURE__ */ React18.createElement("li", null, 'For purposes of this policy, "personal information" is information about an individual that can be used to reasonably identify that individual.'), /* @__PURE__ */ React18.createElement("li", null, "We only collect limited personal information to respond to your queries, deliver our Services, provide support or as otherwise described in this policy. We limit our collection of data to first name, last name, address, phone number and email address in addition to the consumer data listed below."))), /* @__PURE__ */ React18.createElement("section", null, /* @__PURE__ */ React18.createElement("h3", null, "II. INFORMATION COLLECTION AND USE"), /* @__PURE__ */ React18.createElement("h4", null, "1. Business Operation"), /* @__PURE__ */ React18.createElement("p", null, "In general, we collect, use and disclose information for purposes connected with our business operations. This includes providing our products and services, enabling proper operation and functionality, improving our products and services, verifying addresses, coordinating vendors, managing support concerns, marketing purposes, and other related business purposes. You are not required to provide any personal information however, you will not receive the full value of our services without this information."), /* @__PURE__ */ React18.createElement("h4", null, "2. Email Addresses"), /* @__PURE__ */ React18.createElement("p", null, "We do not and will not send spam, sell or rent your email address or any social media login account information to third parties. We do utilize third party marketing tools to support our marketing activities as described below. With your permission, we do coordinate with third party partners who are licensed and bonded to provide pick up services at your address. We do not disclose, sell, share, trade or give away a user's personal information to any third parties. We may email users directly to connect, updates, or other reasons related to your interest in our product or services."), /* @__PURE__ */ React18.createElement("h4", null, "3. Marketing"), /* @__PURE__ */ React18.createElement("p", null, 'We may contact you with marketing and promotional information (in accordance with your marketing preferences) about products and services that we offer and to send you information regarding us. We use _________ for this purpose and you can review their privacy policy here. See below "Objections and Restrictions" for information about how you can opt-out of receiving marketing communications from us at any time.'), /* @__PURE__ */ React18.createElement("h4", null, "4. Logging Statistics"), /* @__PURE__ */ React18.createElement("p", null, "Like most website operators, our servers automatically collect certain types of non-personally identifying, technical information, such as the browser type, language preference, referring site, and the date and time of each visitor request. This includes information such as:"), /* @__PURE__ */ React18.createElement("ul", null, /* @__PURE__ */ React18.createElement("li", null, "What website you came from to get here;"), /* @__PURE__ */ React18.createElement("li", null, "What portions of our website you access;"), /* @__PURE__ */ React18.createElement("li", null, "How long you stay for; and"), /* @__PURE__ */ React18.createElement("li", null, "What kind of device you're using")), /* @__PURE__ */ React18.createElement("p", null, "We use this information to better understand how our visitors use our website and to maintain Services."), /* @__PURE__ */ React18.createElement("h4", null, "5. Location Information & IP Addresses"), /* @__PURE__ */ React18.createElement("p", null, "We collect very limited personal data. If you fill out a form with your name and email address, we do link the IP address and device information to you. Additionally, we collect IP address and convert it to location for (1) security monitoring (2) supporting some features, such as IP whitelisting, country level location whitelisting, and (3) Delivering location based help and website details."), /* @__PURE__ */ React18.createElement("h4", null, "6. Locale Preferences and Device Information"), /* @__PURE__ */ React18.createElement("p", null, "When you use our services or products, we may automatically collect certain information from your device, its software, and your activity using our services or products. This may include information you search for on our website, locale preferences, identification numbers associated with your devices, your mobile carrier, date and time stamps associated with transactions, metadata, your Internet Service Provider, files viewed on our site, operating system, and clickstream data."), /* @__PURE__ */ React18.createElement("h4", null, "7. Data Aggregation"), /* @__PURE__ */ React18.createElement("p", null, "In addition to the other uses described in this policy, you agree that we may extract and use information from the information you disclose for the purposes of aggregating data in a non-identifiable method. This aggregated data may be used internally to improve services or without limitation, to develop, analyze, combine, or publish the aggregated data for commercial purposes."), /* @__PURE__ */ React18.createElement("h4", null, "8. Cookies"), /* @__PURE__ */ React18.createElement("p", null, "Your use of certain of the services may result in the assignment and storage of session cookies by Gone and analytics tools to recognize your access privileges and generally track user preferences. A cookie is a text file that is placed on the hard disk of your computer or mobile device by a server. Session cookies expire when you end your session and close your browser interface. Cookies cannot be used to run programs or deliver viruses to your computer or mobile device. Cookies are uniquely assigned to you and can only be read by a server in the domain that issued the cookie to you. Visitors who do not wish to have cookies placed on their computers or mobile devices should deny Cookies by configuring their respective browsers to do so. If Cookies are denied, certain features of our services may not function properly."), /* @__PURE__ */ React18.createElement("h4", null, "9. Social Media Widgets"), /* @__PURE__ */ React18.createElement("p", null, 'Our website includes social media features, such as the Facebook like button and widgets, such as the "Share This" and button for X. These features may collect your IP address and the page you are visiting on our site, and they may set a cookie to enable the feature to function properly. Social media features and widgets are either hosted by a third party or hosted directly on our site. Your interactions with these features are governed by the privacy policy of the company providing it.'), /* @__PURE__ */ React18.createElement("h4", null, "10. How We Share Your Information"), /* @__PURE__ */ React18.createElement("p", null, "Gone takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally identifying information."), /* @__PURE__ */ React18.createElement("p", null, "Gone discloses potential personally identifying information only on an as needed (or required) basis as follows:"), /* @__PURE__ */ React18.createElement("ul", null, /* @__PURE__ */ React18.createElement("li", null, "To our personnel that: (i) need to know that information in order to process it on our behalf or to provide the services; and (ii) that have expressly agreed not to disclose it to others. Note* Some of those employees, and contractors may be located outside of your home country; by using the services you consent to the transfer of such information to them."), /* @__PURE__ */ React18.createElement("li", null, "As required by law such to comply with a subpoena or similar legal process. To the extent we are legally permitted to do so, we will take commercially reasonable steps to notify you if we are required to provide your personal information to third parties as part of a legal process."), /* @__PURE__ */ React18.createElement("li", null, "When we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a written government request."), /* @__PURE__ */ React18.createElement("li", null, "In the event of a merger, acquisition, or any form of sale of some or all of Gone's assets, we will ensure that the acquiring organization agrees to protect personal information in accordance with the commitments we have made in this Privacy Notice, and that the acquiring organization will provide notice before personal information, customer information, or business information becomes subject to a different privacy notice."), /* @__PURE__ */ React18.createElement("li", null, "To any other third party with your prior consent to do so. We do not generally sell your personal information to third parties."))), /* @__PURE__ */ React18.createElement("section", null, /* @__PURE__ */ React18.createElement("h3", null, "III. ACCESSING AND UPDATING YOUR PERSONAL INFORMATION; SECURITY"), /* @__PURE__ */ React18.createElement("h4", null, "1. Communications"), /* @__PURE__ */ React18.createElement("p", null, "If you have provided an email with us for access and use of our services, we may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what's going on with Gone and our services. We primarily use our various product blogs and support documentation to communicate this type of information, so we expect to keep this type of email to a minimum."), /* @__PURE__ */ React18.createElement("h4", null, "2. Third-Party Services"), /* @__PURE__ */ React18.createElement("p", null, "We use various third-party services to create the best experience for users, to deliver on certain logistics services, and for improving existing products and services. Some third party services use cookies or similar technologies to analyze trends, administer the website, track users' movements around the website, and to gather demographic information about our user base as a whole. You can control the use of cookies at the individual browser level, but if you choose to disable cookies, it may limit your use of certain features or functions on our website or service. We use Amazon Web Services to store information and host services. We use various third-party services that collect and analyze information about your use of our site. Among others, we use Google Analytics for website use and traffic analysis. We also use various services to ensure user success and improved relationship management."), /* @__PURE__ */ React18.createElement("h4", null, "3. Security, Data Storage & Retention"), /* @__PURE__ */ React18.createElement("p", null, "To prevent unauthorized access, safeguard data accuracy, and maintain the appropriate use of information, we have put in place appropriate physical, technical, and administrative procedures to protect the personal information data you submit. We make every effort to ensure the integrity and security of our network and systems. However, since the Internet is not 100% secure and as new technology evolves and emerges, we cannot guarantee that our security measures will prevent third-party interferences from illegally obtaining or tampering with your personal information."), /* @__PURE__ */ React18.createElement("p", null, "We encourage you to help us by also taking precautions to protect your personal data when you use the services. Change your account password often, using a combination of letters, numbers, and characters, and make sure you use a secure connection. We also recommend enabling two-factor authentication for signing into your account."), /* @__PURE__ */ React18.createElement("p", null, "Gone will retain your personal information for as long as needed for the purposes described above and/or as required by law. A user may request access to certain data about themselves by emailing privacy@Gone.com")), /* @__PURE__ */ React18.createElement("section", null, /* @__PURE__ */ React18.createElement("h3", null, "IV. YOUR RIGHTS UNDER THE CCPA (EXTENDED TO ALL USERS)"), /* @__PURE__ */ React18.createElement("p", null, "The California Consumer Privacy Act (CCPA) and some other state laws provide you with fundamental rights. Due to our commitment to privacy, we have extended those data subject rights to persons in all jurisdictions."), /* @__PURE__ */ React18.createElement("ol", {
        type: "A"
    }, /* @__PURE__ */ React18.createElement("li", null, 'Right to be forgotten ("Right to Erasure") This right provides you with the ability to ask for the deletion of your data. This will generally apply to situations where a customer relationship has ended. It is important to note that this is not an absolute right and depends on our retention schedule and retention period in line with other applicable laws.'), /* @__PURE__ */ React18.createElement("li", null, 'Right to know how we are processing your information ("Right to Information") This right provides that you may ask us for information about what personal data is being processed and the rationale for such processing. For example, you may ask for the list of processors with whom we share your personal data.'), /* @__PURE__ */ React18.createElement("li", null, 'Right to view the information we have collected about you ("Right to Access"). This right provides you with the ability to get access to your personal data that is being processed. This request provides the you with the right to see or view your own personal data, as well as to request copies of the personal data.'), /* @__PURE__ */ React18.createElement("li", null, "Right to rectification. This right provides you with the ability to ask for modifications to your personal data in case you believe that this personal data is not up to date or not accurate."), /* @__PURE__ */ React18.createElement("li", null, "Right to withdraw consent. This right provides you with the ability to withdraw a previously given consent for processing of your personal data for a purpose."), /* @__PURE__ */ React18.createElement("li", null, 'Right to object to processing your information ("Right to object"). This right allows you to object to certain types of data processing. These are:', /* @__PURE__ */ React18.createElement("ul", null, /* @__PURE__ */ React18.createElement("li", null, "Direct marketing"), /* @__PURE__ */ React18.createElement("li", null, "The processing of personal data for statistical purposes related to historical or scientific research"), /* @__PURE__ */ React18.createElement("li", null, "The processing of data for tasks in the public interest"), /* @__PURE__ */ React18.createElement("li", null, "The exercising of official authority invested in you"), /* @__PURE__ */ React18.createElement("li", null, "Objections to data processing in yours or a third party's legitimate interest"), /* @__PURE__ */ React18.createElement("li", null, "Objections to data processing based on your own beliefs and situations"))), /* @__PURE__ */ React18.createElement("li", null, "Right to data portability. This right provides you with the ability to ask for transfer of your personal data. As part of such request, you may ask for your personal data to be provided back to you in a machine-readable electronic format or, if technically feasible, transferred to another service provider."), /* @__PURE__ */ React18.createElement("li", null, "Right to Limit Use and Disclosure of Sensitive Personal Information. You have the right, at any time, to direct us (as a business that collects sensitive personal information about you) to limit our use of your sensitive personal information to that use which is necessary to perform the services expected. If you would like to exercise any of the above rights, please contact our support team at support@Gone.com"))), /* @__PURE__ */ React18.createElement("section", null, /* @__PURE__ */ React18.createElement("h3", null, "V. ADDITIONAL TERMS; CHANGES AND CONTACT"), /* @__PURE__ */ React18.createElement("h4", null, "1. Privacy Of Minors"), /* @__PURE__ */ React18.createElement("p", null, 'We do not promote or offer the Services for use by anyone under the age of 18 ("minors"). Gone does not knowingly solicit or collect personal information from minors, and we will not knowingly link to any third-party website or platform, or host any customer sites that solicit or collect personal information from minors. If you believe that a minor has disclosed personal information to us or that we have linked to such a third-party or user website or platform, please contact us at privacy@Gone.com'), /* @__PURE__ */ React18.createElement("h4", null, "2. Additional Information for International Users"), /* @__PURE__ */ React18.createElement("p", null, "If you are visiting this website and/or accessing the Services from outside the United States, please be aware that you are sending information (including Personal Information) to the United States where Gone servers are located. This information may be transferred within the United States or back out of the United States to other countries outside of your country of residence, depending on the type of information and how its stored by us. These countries (including the United States) may not necessarily have data protection laws as comprehensive or protective as those in your country of residence, however, our collection, storage and use of your personal information will at all times be governed by this Privacy Policy. Notwithstanding the foregoing, this service is not available to international users."), /* @__PURE__ */ React18.createElement("h4", null, "3. Business Transfers"), /* @__PURE__ */ React18.createElement("p", null, "If the ownership of Gone substantially changes, such that all of its assets were acquired, or merged into another entity, or in the unlikely event that Gone enters bankruptcy, you understand that any stored personally identifying, and non-personally identifying information and data will likely be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur and that any acquirer or merging entity of Gone may continue to use your personal information as set forth in this policy."), /* @__PURE__ */ React18.createElement("h4", null, "4. Privacy Policy Changes"), /* @__PURE__ */ React18.createElement("p", null, "We may update this Privacy Policy to reflect changes to our information practices. If we make any change in how we use your personal data we will notify you by email (specified upon registration), or we will notify you by means of a notice on this page prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices."), /* @__PURE__ */ React18.createElement("h4", null, "5. Contact Gone"), /* @__PURE__ */ React18.createElement("p", null, "If you have any questions or suggestions regarding this Privacy Policy, please contact Gone via email at support@Gonedigital.com."), /* @__PURE__ */ React18.createElement("h4", null, "6. Contact appropriate authority"), /* @__PURE__ */ React18.createElement("p", null, "Should you wish to report a complaint or if you feel that we have not addressed your concern in a satisfactory manner, you have the right to contact a regulatory body or data protection authority in relation to your complaint"))));
}
// src/components/PickupRequestForm.tsx
var STORAGE_KEY = "giver_form_data";
var loadFromLocalStorage = function() {
    try {
        var _data_uploadedItems;
        var saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return null;
        var data = JSON.parse(saved);
        var validItems = ((_data_uploadedItems = data.uploadedItems) === null || _data_uploadedItems === void 0 ? void 0 : _data_uploadedItems.filter(function(item) {
            return item.imageUrl && item.imageUrl.startsWith("data:image/");
        })) || [];
        return {
            currentStep: data.currentStep || 1,
            uploadedItems: validItems,
            availableTimes: data.availableTimes || [],
            address: data.address || "",
            contactInfo: data.contactInfo || {
                fullName: "",
                contact: ""
            }
        };
    } catch (error) {
        console.error("Error loading from localStorage:", error);
        return null;
    }
};
var clearLocalStorage = function() {
    localStorage.removeItem(STORAGE_KEY);
};
var PlacesAutocomplete = function(param) {
    var value = param.value, onChange = param.onChange, onSelect = param.onSelect;
    var _usePlacesAutocomplete = usePlacesAutocomplete({
        requestOptions: {
            componentRestrictions: {
                country: "us"
            }
        },
        debounce: 300,
        defaultValue: value,
        cache: 24 * 60 * 60
    }), ready = _usePlacesAutocomplete.ready, data = _usePlacesAutocomplete.suggestions.data, setValue = _usePlacesAutocomplete.setValue, clearSuggestions = _usePlacesAutocomplete.clearSuggestions;
    return /* @__PURE__ */ React19.createElement("div", {
        className: "relative"
    }, /* @__PURE__ */ React19.createElement(FormInput, {
        label: "Pickup Address",
        value: value,
        onChange: function(val) {
            setValue(val);
            onChange(val);
        },
        disabled: !ready,
        placeholder: ready ? "Enter your address" : "Loading Places API..."
    }), data.length > 0 && /* @__PURE__ */ React19.createElement("ul", {
        className: "absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg"
    }, data.map(function(suggestion) {
        return /* @__PURE__ */ React19.createElement("li", {
            key: suggestion.place_id,
            className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
            onClick: function() {
                onChange(suggestion.description);
                onSelect(suggestion.description);
                clearSuggestions();
            }
        }, suggestion.description);
    })));
};
var handlePhotoUpload = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(photos, setUploadedItems, skipContactStep) {
        var instanceId, newItems, files, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    instanceId = Math.random().toString(36).substr(2, 9);
                    newItems = [];
                    if (!(photos.length > 0)) return [
                        3,
                        4
                    ];
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    newItems = photos.map(function(photoUrl) {
                        return {
                            id: "".concat(instanceId, "-").concat(Math.random().toString(36).substr(2, 9)),
                            imageUrl: photoUrl,
                            quantity: 1,
                            selectedFiles: [],
                            status: "uploading"
                        };
                    });
                    setUploadedItems(function(prevItems) {
                        return _to_consumable_array(prevItems).concat(_to_consumable_array(newItems));
                    });
                    return [
                        4,
                        Promise.all(photos.map(/*#__PURE__*/ function() {
                            var _ref = _async_to_generator(function(photo, index) {
                                var response, blob;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                fetch(photo)
                                            ];
                                        case 1:
                                            response = _state.sent();
                                            return [
                                                4,
                                                response.blob()
                                            ];
                                        case 2:
                                            blob = _state.sent();
                                            return [
                                                2,
                                                new File([
                                                    blob
                                                ], "photo-".concat(index, ".jpg"), {
                                                    type: "image/jpeg"
                                                })
                                            ];
                                    }
                                });
                            });
                            return function(photo, index) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 2:
                    files = _state.sent();
                    setUploadedItems(function(prevItems) {
                        return prevItems.map(function(item) {
                            var matchingNewItem = newItems.find(function(newItem) {
                                return newItem.id === item.id;
                            });
                            if (matchingNewItem) {
                                return _object_spread_props(_object_spread({}, item), {
                                    selectedFiles: [
                                        files[newItems.indexOf(matchingNewItem)]
                                    ],
                                    status: "ready"
                                });
                            }
                            return item;
                        });
                    });
                    return [
                        3,
                        4
                    ];
                case 3:
                    error = _state.sent();
                    console.error("Error processing files:", error);
                    setUploadedItems(function(prevItems) {
                        return prevItems.map(function(item) {
                            return _object_spread_props(_object_spread({}, item), {
                                status: newItems.some(function(newItem) {
                                    return newItem.id === item.id;
                                }) ? "error" : item.status
                            });
                        });
                    });
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return function handlePhotoUpload(photos, setUploadedItems, skipContactStep) {
        return _ref.apply(this, arguments);
    };
}();
var isValidEmail = function(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
var isValidPhone = function(phone) {
    return /^\+?[\d\s-()]{10,}$/.test(phone);
};
var getMinDate = function() {
    var today = /* @__PURE__ */ new Date();
    today.setHours(today.getHours() + 72);
    return today.toISOString().split("T")[0];
};
var formatPhoneNumber = function(value) {
    var digits = value.replace(/\D/g, "");
    if (digits.length >= 10) {
        return "(".concat(digits.slice(0, 3), ") ").concat(digits.slice(3, 6), "-").concat(digits.slice(6, 10));
    } else if (digits.length > 6) {
        return "(".concat(digits.slice(0, 3), ") ").concat(digits.slice(3, 6), "-").concat(digits.slice(6));
    } else if (digits.length > 3) {
        return "(".concat(digits.slice(0, 3), ") ").concat(digits.slice(3));
    } else if (digits.length > 0) {
        return "(".concat(digits);
    }
    return "";
};
var generateTimeOptions = function() {
    var options = [];
    for(var hour = 9; hour <= 17; hour++){
        options.push("".concat(hour.toString().padStart(2, "0"), ":00"));
        if (hour !== 17) {
            options.push("".concat(hour.toString().padStart(2, "0"), ":30"));
        }
    }
    return options;
};
var PickupRequestForm = function(param) {
    var onSubmit = param.onSubmit, className = param.className, _param_skipContactStep = param.skipContactStep, skipContactStep = _param_skipContactStep === void 0 ? false : _param_skipContactStep, renderDetailsStep = param.renderDetailsStep, availableDates = param.availableDates, _param_skipConfirmationStep = param.skipConfirmationStep, skipConfirmationStep = _param_skipConfirmationStep === void 0 ? false : _param_skipConfirmationStep, selectedDate = param.selectedDate, selectedTime = param.selectedTime, onDateSelect = param.onDateSelect, onTimeSelect = param.onTimeSelect, steps = param.steps, renderCustomStep = param.renderCustomStep, validateStep = param.validateStep, isSubmitting = param.isSubmitting, onStepChange = param.onStepChange, onCompletedStepsChange = param.onCompletedStepsChange;
    var _useState8 = _sliced_to_array(useState8(function() {
        if (typeof window !== "undefined") {
            var _performance_navigation, _window_performance_getEntriesByType_, _window_performance;
            var isRefresh = ((_performance_navigation = performance.navigation) === null || _performance_navigation === void 0 ? void 0 : _performance_navigation.type) === 1 || ((_window_performance = window.performance) === null || _window_performance === void 0 ? void 0 : (_window_performance_getEntriesByType_ = _window_performance.getEntriesByType("navigation")[0]) === null || _window_performance_getEntriesByType_ === void 0 ? void 0 : _window_performance_getEntriesByType_.type) === "reload";
            if (isRefresh) {
                return parseInt(localStorage.getItem("formData_currentStep") || "1");
            }
            localStorage.removeItem("formData_currentStep");
        }
        return 1;
    }), 2), currentStep = _useState8[0], setCurrentStep = _useState8[1];
    var _useState81 = _sliced_to_array(useState8(function() {
        if (typeof window !== "undefined") {
            var saved = localStorage.getItem("formData_items");
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    }), 2), uploadedItems = _useState81[0], setUploadedItems = _useState81[1];
    var _useState82 = _sliced_to_array(useState8(function() {
        if (typeof window !== "undefined") {
            var saved = localStorage.getItem("formData_times");
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    }), 2), availableTimes = _useState82[0], setAvailableTimes = _useState82[1];
    var _useState83 = _sliced_to_array(useState8(function() {
        if (typeof window !== "undefined") {
            return localStorage.getItem("formData_address") || "";
        }
        return "";
    }), 2), address = _useState83[0], setAddress = _useState83[1];
    var _useState84 = _sliced_to_array(useState8(function() {
        if (typeof window !== "undefined") {
            var saved = localStorage.getItem("formData_contact");
            return saved ? JSON.parse(saved) : {
                fullName: "",
                contact: ""
            };
        }
        return {
            fullName: "",
            contact: ""
        };
    }), 2), contactInfo = _useState84[0], setContactInfo = _useState84[1];
    var _useState85 = _sliced_to_array(useState8(false), 2), showTerms = _useState85[0], setShowTerms = _useState85[1];
    var _useState86 = _sliced_to_array(useState8({
        ownership: false,
        terms: false,
        liability: false,
        marketing: false
    }), 2), confirmations = _useState86[0], setConfirmations = _useState86[1];
    var _useState87 = _sliced_to_array(useState8(""), 2), feedback = _useState87[0], setFeedback = _useState87[1];
    var _useState88 = _sliced_to_array(useState8(false), 2), isTermsVisible = _useState88[0], setIsTermsVisible = _useState88[1];
    var _useState89 = _sliced_to_array(useState8(false), 2), loading = _useState89[0], setLoading = _useState89[1];
    var _useState810 = _sliced_to_array(useState8(""), 2), formMessage = _useState810[0], setFormMessage = _useState810[1];
    var _useState811 = _sliced_to_array(useState8(false), 2), isPrivacyVisible = _useState811[0], setIsPrivacyVisible = _useState811[1];
    var _useState812 = _sliced_to_array(useState8([]), 2), completedSteps = _useState812[0], setCompletedSteps = _useState812[1];
    var _useState813 = _sliced_to_array(useState8(null), 2), requestId = _useState813[0], setRequestId = _useState813[1];
    var isStepCompleted = function(step) {
        return completedSteps.includes(step);
    };
    useEffect2(function() {
        if (typeof window !== "undefined") {
            localStorage.setItem("formData_items", JSON.stringify(uploadedItems));
            localStorage.setItem("formData_times", JSON.stringify(availableTimes));
            localStorage.setItem("formData_address", address);
            localStorage.setItem("formData_contact", JSON.stringify(contactInfo));
        }
    }, [
        uploadedItems,
        availableTimes,
        address,
        contactInfo
    ]);
    useEffect2(function() {
        var handleBeforeUnload = function(event) {
            if (uploadedItems.length > 0) {
                event.preventDefault();
                event.returnValue = "";
            }
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return function() {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);
    useEffect2(function() {
        var savedData = loadFromLocalStorage();
        if (savedData) {
            var validItems = savedData.uploadedItems.filter(function(item) {
                return item.imageUrl && item.imageUrl.startsWith("data:image/");
            });
            setCurrentStep(savedData.currentStep || 1);
            setUploadedItems(validItems);
            setAvailableTimes(savedData.availableTimes || []);
            setAddress(savedData.address || "");
            setContactInfo(savedData.contactInfo || {
                fullName: "",
                contact: ""
            });
        }
    }, []);
    useEffect2(function() {
        if (onCompletedStepsChange && completedSteps) {
            onCompletedStepsChange(completedSteps);
        }
    }, [
        completedSteps,
        onCompletedStepsChange
    ]);
    var handleItemDescription = function(itemId, description) {
        setUploadedItems(function(items) {
            return items.map(function(item) {
                return item.id === itemId ? _object_spread_props(_object_spread({}, item), {
                    description: description
                }) : item;
            });
        });
    };
    var handleQuantityChange = function(itemId, quantity) {
        setUploadedItems(function(items) {
            return items.map(function(item) {
                return item.id === itemId ? _object_spread_props(_object_spread({}, item), {
                    quantity: parseInt(quantity) || 1
                }) : item;
            });
        });
    };
    var handleTimeSelection = function(time) {
        setAvailableTimes(function(current) {
            return current.includes(time) ? current.filter(function(t) {
                return t !== time;
            }) : _to_consumable_array(current).concat([
                time
            ]);
        });
    };
    var isSuccessStep = function() {
        return currentStep === 4;
    };
    var handleItemRemove = function(itemId) {
        setUploadedItems(function(items) {
            return items.filter(function(item) {
                return item.id !== itemId;
            });
        });
    };
    var handleFeedbackSubmit = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(feedbackText) {
            var feedbackData, docRef, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        feedbackData = {
                            name: contactInfo.fullName,
                            contact: contactInfo.contact,
                            feedback: feedbackText,
                            createdAt: /* @__PURE__ */ new Date().toISOString(),
                            pickupRequestId: null
                        };
                        return [
                            4,
                            addDoc(collection(db, "feedback"), feedbackData)
                        ];
                    case 1:
                        docRef = _state.sent();
                        console.log("Feedback submitted with ID:", docRef.id);
                        setFormMessage("Thank you for your feedback!");
                        setFeedback("");
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        console.error("Error submitting feedback:", error);
                        setFormMessage("Failed to submit feedback. Please try again.");
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function handleFeedbackSubmit(feedbackText) {
            return _ref.apply(this, arguments);
        };
    }();
    var renderStepContent = function() {
        if (renderCustomStep) {
            var customContent = renderCustomStep(currentStep);
            if (customContent !== null) {
                return customContent;
            }
        }
        switch(currentStep){
            case 1:
                return /* @__PURE__ */ React19.createElement("div", {
                    className: "space-y-6"
                }, !isStepCompleted(1) && /* @__PURE__ */ React19.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-6 border-l-4 border-[#4B7163]"
                }, /* @__PURE__ */ React19.createElement("h3", {
                    className: "font-rockwell text-lg text-[#4B7163] mb-2"
                }, "Items We Accept"), /* @__PURE__ */ React19.createElement("p", {
                    className: "text-[#5A7C6F]"
                }, "We accept gently used furniture and home goods. All items must be in good condition, clean, and free from damage. Please ensure items are ready for pickup and easily accessible.")), /* @__PURE__ */ React19.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-6"
                }, /* @__PURE__ */ React19.createElement(ImageUpload, {
                    onUpload: /*#__PURE__*/ function() {
                        var _ref = _async_to_generator(function(photos) {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            handlePhotoUpload(photos, setUploadedItems, skipContactStep)
                                        ];
                                    case 1:
                                        _state.sent();
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(photos) {
                            return _ref.apply(this, arguments);
                        };
                    }(),
                    maxFiles: 50
                }), uploadedItems.length > 0 && /* @__PURE__ */ React19.createElement("div", {
                    className: "space-y-6"
                }, uploadedItems.map(function(item) {
                    return /* @__PURE__ */ React19.createElement("div", {
                        key: item.id,
                        className: "flex gap-4 p-4 bg-[#F8FAF9] rounded-xl"
                    }, /* @__PURE__ */ React19.createElement("div", {
                        className: "w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 relative"
                    }, /* @__PURE__ */ React19.createElement("button", {
                        type: "button",
                        onClick: function() {
                            return handleItemRemove(item.id);
                        },
                        className: "absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white text-[#E67C45] hover:text-[#D15E25] shadow-sm"
                    }, "\xD7"), /* @__PURE__ */ React19.createElement("img", {
                        src: item.imageUrl,
                        alt: "Item",
                        className: "w-full h-full object-cover"
                    }), item.status === "uploading" && /* @__PURE__ */ React19.createElement("div", {
                        className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    }, /* @__PURE__ */ React19.createElement("div", {
                        className: "animate-spin rounded-full h-6 w-6 border-b-2 border-white"
                    })), item.status === "error" && /* @__PURE__ */ React19.createElement("div", {
                        className: "absolute inset-0 bg-red-500 bg-opacity-50 flex items-center justify-center"
                    }, /* @__PURE__ */ React19.createElement("span", {
                        className: "text-white text-sm"
                    }, "Error"))), /* @__PURE__ */ React19.createElement("div", {
                        className: "flex-grow"
                    }, /* @__PURE__ */ React19.createElement(FormInput, {
                        label: "Item Description",
                        placeholder: "Describe the item, including condition and any relevant details",
                        value: item.description || "",
                        onChange: function(value) {
                            return handleItemDescription(item.id, value);
                        }
                    })));
                }))));
            case 2:
                if (renderDetailsStep) {
                    return renderDetailsStep(uploadedItems, handleItemDescription, handleQuantityChange, availableDates || []);
                }
                return /* @__PURE__ */ React19.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ React19.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-6 border-l-4 border-[#4B7163]"
                }, /* @__PURE__ */ React19.createElement("h3", {
                    className: "font-rockwell text-lg text-[#4B7163] mb-2"
                }, "Schedule Your Pickup"), /* @__PURE__ */ React19.createElement("p", {
                    className: "text-[#5A7C6F]"
                }, "Please select at least two preferred pickup times. Having multiple options helps us plan the most efficient and sustainable pickup route, reducing our carbon footprint.")), /* @__PURE__ */ React19.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ React19.createElement("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                }, /* @__PURE__ */ React19.createElement(FormInput, {
                    type: "date",
                    label: "Pickup Date",
                    value: selectedDate || "",
                    min: getMinDate(),
                    onChange: function(value) {
                        if (onDateSelect) onDateSelect(value);
                    }
                }), /* @__PURE__ */ React19.createElement(FormInput, {
                    type: "time",
                    label: "Pickup Time",
                    value: selectedTime || "",
                    onChange: function(value) {
                        if (onTimeSelect) onTimeSelect(value);
                    },
                    min: "09:00",
                    max: "17:00",
                    step: "1800",
                    list: "time-options"
                }), /* @__PURE__ */ React19.createElement("datalist", {
                    id: "time-options"
                }, generateTimeOptions().map(function(time) {
                    return /* @__PURE__ */ React19.createElement("option", {
                        key: time,
                        value: time
                    });
                }))), /* @__PURE__ */ React19.createElement("button", {
                    type: "button",
                    onClick: function() {
                        if (selectedDate && selectedTime) {
                            var timeSlot = "".concat(selectedDate, " ").concat(selectedTime);
                            if (!availableTimes.includes(timeSlot)) {
                                setAvailableTimes(function(prev) {
                                    return _to_consumable_array(prev).concat([
                                        timeSlot
                                    ]);
                                });
                            }
                        }
                    },
                    disabled: !selectedDate || !selectedTime,
                    className: cn("w-full p-3 rounded-md text-center transition-colors", selectedDate && selectedTime ? "bg-[#4B7163] text-white hover:bg-[#3D5B51]" : "bg-gray-100 text-gray-400 cursor-not-allowed")
                }, "Add This Time Slot"), /* @__PURE__ */ React19.createElement("div", {
                    className: "mt-8"
                }, /* @__PURE__ */ React19.createElement("h4", {
                    className: "font-medium text-[#4B7163] mb-4"
                }, "Your Selected Time Slots ", availableTimes.length < 2 && /* @__PURE__ */ React19.createElement("span", {
                    className: "text-[#E67C45] text-sm"
                }, "(Please select ", 2 - availableTimes.length, " more)")), /* @__PURE__ */ React19.createElement("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4"
                }, availableTimes.map(function(timeSlot, index) {
                    return /* @__PURE__ */ React19.createElement("div", {
                        key: timeSlot,
                        className: "bg-white p-4 rounded-lg border-2 border-[#4B7163] relative"
                    }, /* @__PURE__ */ React19.createElement("button", {
                        type: "button",
                        onClick: function() {
                            return setAvailableTimes(function(prev) {
                                return prev.filter(function(t) {
                                    return t !== timeSlot;
                                });
                            });
                        },
                        className: "absolute top-2 right-2 text-[#E67C45] hover:text-[#D15E25]"
                    }, "\xD7"), /* @__PURE__ */ React19.createElement("p", {
                        className: "text-[#4B7163] font-medium"
                    }, "Option ", index + 1), /* @__PURE__ */ React19.createElement("p", {
                        className: "text-sm text-gray-600"
                    }, new Date(timeSlot).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric"
                    })), /* @__PURE__ */ React19.createElement("p", {
                        className: "text-sm text-gray-600"
                    }, new Date(timeSlot).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit"
                    })));
                }), _to_consumable_array(Array(Math.max(0, 3 - availableTimes.length))).map(function(_, i) {
                    return /* @__PURE__ */ React19.createElement("div", {
                        key: i,
                        className: "bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
                    }, /* @__PURE__ */ React19.createElement("p", {
                        className: "text-gray-400 text-center"
                    }, "Select a time slot"));
                }))), /* @__PURE__ */ React19.createElement("p", {
                    className: "text-sm text-[#5A7C6F] mt-6"
                }, "Business hours: Mon-Fri, 9AM-5PM")));
            case 3:
                if (skipConfirmationStep) return null;
                return /* @__PURE__ */ React19.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ React19.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ React19.createElement(FormInput, {
                    label: "First and Last Name",
                    value: contactInfo.fullName,
                    onChange: function(value) {
                        return setContactInfo(function(prev) {
                            return _object_spread_props(_object_spread({}, prev), {
                                fullName: value
                            });
                        });
                    }
                }), /* @__PURE__ */ React19.createElement("div", {
                    className: "mt-6"
                }, /* @__PURE__ */ React19.createElement(FormInput, {
                    label: "Email or Mobile Number",
                    value: contactInfo.contact,
                    onChange: function(value) {
                        if (/^[\d(]/.test(value)) {
                            setContactInfo(function(prev) {
                                return _object_spread_props(_object_spread({}, prev), {
                                    contact: formatPhoneNumber(value)
                                });
                            });
                        } else {
                            setContactInfo(function(prev) {
                                return _object_spread_props(_object_spread({}, prev), {
                                    contact: value
                                });
                            });
                        }
                    },
                    hint: "Choose the contact method you check most frequently for convenient updates.",
                    error: contactInfo.contact && !isValidEmail(contactInfo.contact) && !isValidPhone(contactInfo.contact) ? "Please enter a valid email address or phone number" : void 0,
                    state: contactInfo.contact ? isValidEmail(contactInfo.contact) || isValidPhone(contactInfo.contact) ? "completed" : "error" : "normal"
                }))), /* @__PURE__ */ React19.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ React19.createElement(PlacesAutocomplete, {
                    value: address,
                    onChange: setAddress,
                    onSelect: /*#__PURE__*/ function() {
                        var _ref = _async_to_generator(function(address2) {
                            return _ts_generator(this, function(_state) {
                                setAddress(address2);
                                return [
                                    2
                                ];
                            });
                        });
                        return function(address2) {
                            return _ref.apply(this, arguments);
                        };
                    }()
                }), /* @__PURE__ */ React19.createElement("p", {
                    className: "mt-2 text-sm text-[#5A7C6F] flex items-center gap-2"
                }, /* @__PURE__ */ React19.createElement(Info, {
                    className: "h-4 w-4"
                }), "Please ensure the address is accurate and items will be accessible at this location")), /* @__PURE__ */ React19.createElement("div", {
                    className: "space-y-4 bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ React19.createElement("h3", {
                    className: "font-rockwell text-lg text-[#4B7163] mb-4"
                }, "Final Confirmation"), /* @__PURE__ */ React19.createElement("label", {
                    className: "flex items-start gap-3 cursor-pointer"
                }, /* @__PURE__ */ React19.createElement("input", {
                    type: "checkbox",
                    checked: confirmations.ownership,
                    onChange: function(e) {
                        return setConfirmations(function(prev) {
                            return _object_spread_props(_object_spread({}, prev), {
                                ownership: e.target.checked
                            });
                        });
                    },
                    className: "mt-1"
                }), /* @__PURE__ */ React19.createElement("span", {
                    className: "text-sm text-[#5A7C6F]"
                }, "I am the owner of the household goods I am requesting for pick up.")), /* @__PURE__ */ React19.createElement("label", {
                    className: "flex items-start gap-3 cursor-pointer"
                }, /* @__PURE__ */ React19.createElement("input", {
                    type: "checkbox",
                    checked: confirmations.terms,
                    onChange: function(e) {
                        return setConfirmations(function(prev) {
                            return _object_spread_props(_object_spread({}, prev), {
                                terms: e.target.checked
                            });
                        });
                    },
                    className: "mt-1"
                }), /* @__PURE__ */ React19.createElement("span", {
                    className: "text-sm text-[#5A7C6F]"
                }, "I have read and agree to the", " ", /* @__PURE__ */ React19.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return setIsTermsVisible(true);
                    },
                    className: "text-[#6AB098] underline hover:text-[#4B7163]"
                }, "Terms of Service"), " ", "and", " ", /* @__PURE__ */ React19.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return setIsPrivacyVisible(true);
                    },
                    className: "text-[#6AB098] underline hover:text-[#4B7163]"
                }, "Privacy Policy"))), /* @__PURE__ */ React19.createElement("label", {
                    className: "flex items-start gap-3 cursor-pointer"
                }, /* @__PURE__ */ React19.createElement("input", {
                    type: "checkbox",
                    checked: confirmations.liability,
                    onChange: function(e) {
                        return setConfirmations(function(prev) {
                            return _object_spread_props(_object_spread({}, prev), {
                                liability: e.target.checked
                            });
                        });
                    },
                    className: "mt-1"
                }), /* @__PURE__ */ React19.createElement("span", {
                    className: "text-sm text-[#5A7C6F]"
                }, "I assume all risk associated with items being picked up at my residence and release Gone from any and all claims.")), /* @__PURE__ */ React19.createElement("label", {
                    className: "flex items-start gap-3 cursor-pointer"
                }, /* @__PURE__ */ React19.createElement("input", {
                    type: "checkbox",
                    checked: confirmations.marketing,
                    onChange: function(e) {
                        return setConfirmations(function(prev) {
                            return _object_spread_props(_object_spread({}, prev), {
                                marketing: e.target.checked
                            });
                        });
                    },
                    className: "mt-1"
                }), /* @__PURE__ */ React19.createElement("span", {
                    className: "text-sm text-[#5A7C6F]"
                }, 'I acknowledge my number will be stored and used to schedule pick-up and used for marketing and promotional purposes. I may opt out at any time by responding "Stop" to any text messages I receive.'))));
            case 4:
                return /* @__PURE__ */ React19.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ React19.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-6 text-center"
                }, /* @__PURE__ */ React19.createElement(CheckCircle2, {
                    className: "w-16 h-16 text-[#4B7163] mx-auto mb-4"
                }), /* @__PURE__ */ React19.createElement("h3", {
                    className: "font-rockwell text-2xl text-[#4B7163] mb-4"
                }, "Request Submitted Successfully!"), /* @__PURE__ */ React19.createElement("p", {
                    className: "text-[#5A7C6F] mb-6"
                }, "We'll review your request and get back to you via ", contactInfo.contact.includes("@") ? "email" : "text", " shortly. Thank you for being a sustainable citizen and giving your items a second life!")), requestId && /* @__PURE__ */ React19.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-6"
                }, /* @__PURE__ */ React19.createElement("h4", {
                    className: "font-rockwell text-lg text-[#4B7163] mb-4"
                }, "Track Your Request Status"), /* @__PURE__ */ React19.createElement("p", {
                    className: "text-[#5A7C6F] mb-4"
                }, "You can check the status of your pickup request at any time:"), /* @__PURE__ */ React19.createElement("div", {
                    className: "flex items-center gap-2 bg-white p-3 rounded-lg border border-[#4B7163]"
                }, /* @__PURE__ */ React19.createElement("a", {
                    href: "".concat(window.location.origin, "/pickup-status/").concat(requestId),
                    className: "flex-grow truncate text-[#4B7163] hover:underline",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "".concat(window.location.origin, "/pickup-status/").concat(requestId)), /* @__PURE__ */ React19.createElement("button", {
                    onClick: function() {
                        navigator.clipboard.writeText("".concat(window.location.origin, "/pickup-status/").concat(requestId));
                    },
                    className: "text-[#4B7163] hover:text-[#3D5B51] px-3 py-1 rounded-md border-l border-[#4B7163]/20"
                }, "Copy Link"))), /* @__PURE__ */ React19.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-6"
                }, /* @__PURE__ */ React19.createElement("h4", {
                    className: "font-rockwell text-lg text-[#4B7163] mb-4"
                }, "Your Pickup Request Details"), /* @__PURE__ */ React19.createElement("div", {
                    className: "space-y-4"
                }, /* @__PURE__ */ React19.createElement("div", {
                    className: "border-b border-[#4B7163]/10 pb-4"
                }, /* @__PURE__ */ React19.createElement("p", {
                    className: "text-sm text-[#5A7C6F] font-medium mb-2"
                }, "Contact Information"), /* @__PURE__ */ React19.createElement("div", {
                    className: "space-y-1"
                }, /* @__PURE__ */ React19.createElement("p", {
                    className: "text-[#4B7163]"
                }, contactInfo.fullName), /* @__PURE__ */ React19.createElement("p", {
                    className: "text-[#4B7163]"
                }, contactInfo.contact), /* @__PURE__ */ React19.createElement("p", {
                    className: "text-[#4B7163]"
                }, address))), /* @__PURE__ */ React19.createElement("div", {
                    className: "border-b border-[#4B7163]/10 pb-4"
                }, /* @__PURE__ */ React19.createElement("p", {
                    className: "text-sm text-[#5A7C6F] font-medium mb-2"
                }, "Items for Pickup (", uploadedItems.length, ")"), /* @__PURE__ */ React19.createElement("div", {
                    className: "grid gap-3"
                }, uploadedItems.map(function(item, index) {
                    return /* @__PURE__ */ React19.createElement("div", {
                        key: item.id,
                        className: "flex items-center gap-3 bg-white p-2 rounded-lg"
                    }, /* @__PURE__ */ React19.createElement("img", {
                        src: item.imageUrl,
                        alt: item.description || "Item ".concat(index + 1),
                        className: "w-16 h-16 object-cover rounded"
                    }), /* @__PURE__ */ React19.createElement("div", null, /* @__PURE__ */ React19.createElement("p", {
                        className: "text-[#4B7163] font-medium"
                    }, item.description || "Item ".concat(index + 1)), item.quantity && item.quantity > 1 && /* @__PURE__ */ React19.createElement("p", {
                        className: "text-sm text-[#5A7C6F]"
                    }, "Quantity: ", item.quantity)));
                }))), /* @__PURE__ */ React19.createElement("div", null, /* @__PURE__ */ React19.createElement("p", {
                    className: "text-sm text-[#5A7C6F] font-medium mb-2"
                }, "Preferred Pickup Times"), /* @__PURE__ */ React19.createElement("div", {
                    className: "flex flex-wrap gap-2"
                }, availableTimes.map(function(time) {
                    return /* @__PURE__ */ React19.createElement("div", {
                        key: time,
                        className: "bg-[#4B7163]/10 rounded-full px-3 py-1 text-sm text-[#4B7163]"
                    }, time);
                }))))), /* @__PURE__ */ React19.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-6"
                }, /* @__PURE__ */ React19.createElement("h4", {
                    className: "font-rockwell text-lg text-[#4B7163] mb-4"
                }, "How was your experience?"), /* @__PURE__ */ React19.createElement("textarea", {
                    placeholder: "Share your feedback with us",
                    value: feedback,
                    onChange: function(e) {
                        return setFeedback(e.target.value);
                    },
                    rows: 4,
                    className: "w-full p-3 border-2 rounded-lg border-[#5A7C6F] focus:outline-none focus:ring-2"
                }), formMessage && /* @__PURE__ */ React19.createElement("p", {
                    className: "text-center text-sm text-[#4B7163] mt-2"
                }, formMessage)), /* @__PURE__ */ React19.createElement("div", {
                    className: "flex justify-center gap-4"
                }, /* @__PURE__ */ React19.createElement(CustomButton, {
                    onClick: handleNewRequest,
                    variant: "secondary"
                }, "Submit Another Request"), /* @__PURE__ */ React19.createElement(CustomButton, {
                    onClick: /*#__PURE__*/ _async_to_generator(function() {
                        var feedbackData, docRef, error;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!feedback.trim()) return [
                                        3,
                                        4
                                    ];
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]);
                                    feedbackData = {
                                        name: contactInfo.fullName,
                                        contact: contactInfo.contact,
                                        address: address,
                                        feedback: feedback.trim(),
                                        createdAt: /* @__PURE__ */ new Date().toISOString()
                                    };
                                    return [
                                        4,
                                        addDoc(collection(db, "feedBack"), feedbackData)
                                    ];
                                case 2:
                                    docRef = _state.sent();
                                    console.log("Feedback submitted with ID:", docRef.id);
                                    setFormMessage("Thank you for your feedback!");
                                    setFeedback("");
                                    return [
                                        3,
                                        4
                                    ];
                                case 3:
                                    error = _state.sent();
                                    console.error("Error submitting feedback:", error);
                                    setFormMessage("Failed to submit feedback. Please try again.");
                                    return [
                                        3,
                                        4
                                    ];
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }),
                    disabled: !feedback.trim()
                }, "Submit Feedback")));
            default:
                return null;
        }
    };
    var canProceed = function() {
        if (completedSteps.includes(currentStep)) {
            return true;
        }
        if (validateStep) {
            return validateStep(currentStep);
        }
        switch(currentStep){
            case 1:
                return uploadedItems.length > 0;
            case 2:
                if (renderDetailsStep) {
                    return selectedDate && selectedTime;
                }
                return availableTimes.length >= 2;
            // Require at least 2 time slots
            case 3:
                if (skipConfirmationStep) return false;
                return contactInfo.fullName.trim().length > 0 && (isValidEmail(contactInfo.contact) || isValidPhone(contactInfo.contact)) && address.trim().length > 0 && Object.values(confirmations).every(function(value) {
                    return value === true;
                });
            default:
                return false;
        }
    };
    var handleNext = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var newCompletedSteps, fileUploadPromises, processedItems, result, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!canProceed()) return [
                            3,
                            8
                        ];
                        if (!completedSteps.includes(currentStep)) {
                            newCompletedSteps = _to_consumable_array(completedSteps).concat([
                                currentStep
                            ]);
                            setCompletedSteps(newCompletedSteps);
                            if (onCompletedStepsChange) {
                                onCompletedStepsChange(newCompletedSteps);
                            }
                        }
                        if (!(currentStep === 3)) return [
                            3,
                            7
                        ];
                        setLoading(true);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            4,
                            5,
                            6
                        ]);
                        fileUploadPromises = uploadedItems.filter(function(item) {
                            return item.selectedFiles && item.selectedFiles.length > 0;
                        }).map(/*#__PURE__*/ function() {
                            var _ref = _async_to_generator(function(item) {
                                var formData, response, fileUrls;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            formData = new FormData();
                                            (item.selectedFiles || []).forEach(function(file) {
                                                formData.append("files", file);
                                            });
                                            return [
                                                4,
                                                fetch("".concat(process.env.NEXT_PUBLIC_BACKEND_URL, "/upload"), {
                                                    method: "POST",
                                                    body: formData
                                                })
                                            ];
                                        case 1:
                                            response = _state.sent();
                                            if (!response.ok) throw new Error("Upload failed");
                                            return [
                                                4,
                                                response.json()
                                            ];
                                        case 2:
                                            fileUrls = _state.sent().fileUrls;
                                            return [
                                                2,
                                                {
                                                    description: item.description,
                                                    fileUrls: fileUrls,
                                                    status: "pending"
                                                }
                                            ];
                                    }
                                });
                            });
                            return function(item) {
                                return _ref.apply(this, arguments);
                            };
                        }());
                        return [
                            4,
                            Promise.all(fileUploadPromises)
                        ];
                    case 2:
                        processedItems = _state.sent();
                        return [
                            4,
                            onSubmit({
                                fullName: contactInfo.fullName,
                                contact: contactInfo.contact,
                                items: processedItems,
                                availableTimes: availableTimes,
                                address: address
                            })
                        ];
                    case 3:
                        result = _state.sent();
                        setRequestId(result.id);
                        clearLocalStorage();
                        setCurrentStep(4);
                        return [
                            3,
                            6
                        ];
                    case 4:
                        error = _state.sent();
                        console.error("Error:", error);
                        return [
                            3,
                            6
                        ];
                    case 5:
                        setLoading(false);
                        return [
                            7
                        ];
                    case 6:
                        return [
                            3,
                            8
                        ];
                    case 7:
                        setCurrentStep(function(prev) {
                            return prev + 1;
                        });
                        _state.label = 8;
                    case 8:
                        return [
                            2
                        ];
                }
            });
        });
        return function handleNext() {
            return _ref.apply(this, arguments);
        };
    }();
    var handleNewRequest = function() {
        setUploadedItems([]);
        setAvailableTimes([]);
        setAddress("");
        setContactInfo({
            fullName: "",
            contact: ""
        });
        setConfirmations({
            ownership: false,
            terms: false,
            liability: false,
            marketing: false
        });
        setCurrentStep(1);
        setCompletedSteps([]);
        clearLocalStorage();
    };
    var defaultSteps = [
        {
            label: "Item Photos",
            description: "Upload item photos to get started",
            icon: Camera
        },
        {
            label: "Pickup Time",
            description: "Choose convenient pickup time slots",
            icon: Calendar
        }
    ].concat(_to_consumable_array(skipConfirmationStep ? [] : [
        {
            label: "Contact Info",
            description: "We'll use your contact info to coordinate pickup details and keep you updated on status",
            icon: UserCircle2
        }
    ]));
    var formSteps = steps || defaultSteps;
    return /* @__PURE__ */ React19.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6 pt-8", className)
    }, !isSuccessStep() && /* @__PURE__ */ React19.createElement("div", {
        className: "mb-12"
    }, /* @__PURE__ */ React19.createElement(Progress, {
        steps: steps || defaultSteps,
        currentStep: currentStep,
        completedSteps: completedSteps,
        onStepClick: function(step) {
            if (step < currentStep || step > currentStep && completedSteps.includes(currentStep) && completedSteps.includes(step - 1)) {
                setCurrentStep(step);
            }
        }
    })), /* @__PURE__ */ React19.createElement("div", {
        className: "mb-8"
    }, currentStep === 4 ? /* @__PURE__ */ React19.createElement("div", {
        className: "flex items-center gap-3 mb-6"
    }, /* @__PURE__ */ React19.createElement("div", {
        className: "w-6 h-6 text-[#4B7163]"
    }, /* @__PURE__ */ React19.createElement(CheckCircle2, null)), /* @__PURE__ */ React19.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163]"
    }, "Request Summary")) : formSteps[currentStep - 1] ? /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement("div", {
        className: "flex items-center gap-3 mb-6"
    }, formSteps[currentStep - 1].icon && /* @__PURE__ */ React19.createElement("div", {
        className: "w-6 h-6 text-[#4B7163]"
    }, React19.createElement(formSteps[currentStep - 1].icon)), /* @__PURE__ */ React19.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163]"
    }, formSteps[currentStep - 1].label)), /* @__PURE__ */ React19.createElement("p", {
        className: "text-gray-600 mb-6"
    }, formSteps[currentStep - 1].description)) : null, renderStepContent()), /* @__PURE__ */ React19.createElement("div", {
        className: "mt-8 flex justify-end"
    }, currentStep > 1 && !isSuccessStep() && /* @__PURE__ */ React19.createElement(CustomButton, {
        onClick: function() {
            return setCurrentStep(currentStep - 1);
        },
        variant: "secondary",
        className: "mr-auto"
    }, "Back"), /* @__PURE__ */ React19.createElement(CustomButton, {
        variant: "primary",
        className: "next-button",
        disabled: !canProceed() || isSubmitting || loading,
        onClick: handleNext
    }, isSubmitting || loading ? "Submitting..." : currentStep === 3 ? "Submit Request" : "Continue")), /* @__PURE__ */ React19.createElement(TermsOfService, {
        isVisible: isTermsVisible,
        onClose: function() {
            return setIsTermsVisible(false);
        }
    }), /* @__PURE__ */ React19.createElement(Privacy, {
        isVisible: isPrivacyVisible,
        onClose: function() {
            return setIsPrivacyVisible(false);
        }
    }));
};
// src/components/PickupRequestManager.tsx
import React20, { useState as useState9 } from "react";
import { Calendar as Calendar2, MapPin as MapPin3, X as X7, Check as Check6 } from "lucide-react";
var PickupRequestManager = function(param) {
    var pickupRequests = param.pickupRequests, onAcceptRequest = param.onAcceptRequest, onRejectRequest = param.onRejectRequest, onUpdateStatus = param.onUpdateStatus, onSendMessage = param.onSendMessage, onMessageRead = param.onMessageRead, className = param.className;
    var _useState9 = _sliced_to_array(useState9(0), 2), currentRequestIndex = _useState9[0], setCurrentRequestIndex = _useState9[1];
    var _useState91 = _sliced_to_array(useState9(pickupRequests[currentRequestIndex].items), 2), items = _useState91[0], setItems = _useState91[1];
    var _useState92 = _sliced_to_array(useState9(""), 2), newMessage = _useState92[0], setNewMessage = _useState92[1];
    var _useState93 = _sliced_to_array(useState9(false), 2), isMessagesExpanded = _useState93[0], setIsMessagesExpanded = _useState93[1];
    var unreadCount = pickupRequests[currentRequestIndex].messages.filter(function(msg) {
        return !msg.isRead;
    }).length;
    var lastMessage = pickupRequests[currentRequestIndex].messages[pickupRequests[currentRequestIndex].messages.length - 1];
    var lastMessageTime = lastMessage ? new Intl.RelativeTimeFormat("en").format(Math.ceil((lastMessage.timestamp.getTime() - Date.now()) / (1e3 * 60 * 60 * 24)), "days") : null;
    var handleSwipe = function(direction, item) {
        if (direction === "right") {
            onAcceptRequest(pickupRequests[currentRequestIndex].id);
        } else {
            onRejectRequest(pickupRequests[currentRequestIndex].id);
        }
        setItems(function(prevItems) {
            return prevItems.filter(function(i) {
                return i.id !== item.id;
            });
        });
    };
    var handleExpand = function() {
        setIsMessagesExpanded(!isMessagesExpanded);
        if (!isMessagesExpanded && onMessageRead) {
            pickupRequests[currentRequestIndex].messages.forEach(function(msg) {
                if (!msg.isRead) onMessageRead(pickupRequests[currentRequestIndex].id, msg.id);
            });
        }
    };
    var totalRequests = pickupRequests.length;
    return /* @__PURE__ */ React20.createElement("div", {
        className: "max-w-4xl mx-auto space-y-8"
    }, /* @__PURE__ */ React20.createElement("div", {
        className: "flex justify-between items-center px-4"
    }, /* @__PURE__ */ React20.createElement(CustomButton, {
        onClick: function() {
            return setCurrentRequestIndex(function(prev) {
                return Math.max(0, prev - 1);
            });
        },
        disabled: currentRequestIndex === 0,
        className: "bg-[#4B7163] text-white px-4 py-2 rounded-lg"
    }, "<"), /* @__PURE__ */ React20.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163]"
    }, currentRequestIndex + 1, " of ", totalRequests), /* @__PURE__ */ React20.createElement(CustomButton, {
        onClick: function() {
            return setCurrentRequestIndex(function(prev) {
                return Math.min(totalRequests - 1, prev + 1);
            });
        },
        disabled: currentRequestIndex === totalRequests - 1,
        className: "bg-[#4B7163] text-white px-4 py-2 rounded-lg"
    }, ">")), /* @__PURE__ */ React20.createElement("div", {
        className: "bg-white rounded-2xl border-2 border-[#4B7163] p-6"
    }, /* @__PURE__ */ React20.createElement("h3", {
        className: "font-rockwell text-xl text-[#4B7163] mb-4"
    }, "Items to Review (", pickupRequests[currentRequestIndex].items.length, ")"), /* @__PURE__ */ React20.createElement("div", {
        className: "relative h-[500px]"
    }, pickupRequests[currentRequestIndex].items.map(function(item, index) {
        return /* @__PURE__ */ React20.createElement(SwipeCard, {
            key: item.id,
            imageUrl: item.imageUrl,
            alt: item.name || "Pickup request item",
            isVisible: index === pickupRequests[currentRequestIndex].items.length - 1,
            onSwipe: function(direction) {
                return handleSwipe(direction, item);
            }
        }, /* @__PURE__ */ React20.createElement("div", {
            className: "space-y-4"
        }, /* @__PURE__ */ React20.createElement("p", {
            className: "font-sourceSans text-gray-600"
        }, item.description), /* @__PURE__ */ React20.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ React20.createElement("div", {
            className: "flex items-center gap-2 text-[#5A7C6F]"
        }, /* @__PURE__ */ React20.createElement(MapPin3, {
            className: "h-4 w-4"
        }), /* @__PURE__ */ React20.createElement("span", {
            className: "text-sm"
        }, item.location)), /* @__PURE__ */ React20.createElement("div", {
            className: "flex items-center gap-2 text-[#5A7C6F]"
        }, /* @__PURE__ */ React20.createElement(Calendar2, {
            className: "h-4 w-4"
        }), /* @__PURE__ */ React20.createElement("div", {
            className: "text-sm"
        }, "Available:", item.availableDates.map(function(dateInfo, idx) {
            return /* @__PURE__ */ React20.createElement("span", {
                key: dateInfo.date
            }, idx > 0 && ", ", dateInfo.date, /* @__PURE__ */ React20.createElement("span", {
                className: "text-[#6AB098] ml-1"
            }, "(", dateInfo.requestCount, " request", dateInfo.requestCount !== 1 ? "s" : "", ")"));
        }))))));
    }), /* @__PURE__ */ React20.createElement("div", {
        className: "absolute bottom-0 left-0 right-0 flex justify-center gap-8 pb-4 text-sm text-gray-500 sm:hidden"
    }, /* @__PURE__ */ React20.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ React20.createElement(X7, {
        className: "h-4 w-4 text-red-500"
    }), " Swipe left to reject"), /* @__PURE__ */ React20.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ React20.createElement(Check6, {
        className: "h-4 w-4 text-green-500"
    }), " Swipe right to accept")))), /* @__PURE__ */ React20.createElement(MessageThread, {
        messages: pickupRequests[currentRequestIndex].messages,
        onSendMessage: function(message) {
            return onSendMessage(pickupRequests[currentRequestIndex].id, message);
        },
        onMessageRead: function(messageId) {
            return onMessageRead === null || onMessageRead === void 0 ? void 0 : onMessageRead(pickupRequests[currentRequestIndex].id, messageId);
        },
        className: className
    }));
};
// src/components/ProductCard.tsx
import React21 from "react";
import { ShoppingCart } from "lucide-react";
var ProductCard = function(param) {
    var imageUrl = param.imageUrl, title = param.title, category = param.category, description = param.description, price = param.price, salePrice = param.salePrice, attributes = param.attributes, onAddToCart = param.onAddToCart, className = param.className;
    return /* @__PURE__ */ React21.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", "flex flex-col", className)
    }, /* @__PURE__ */ React21.createElement("div", {
        className: "w-full h-[200px] rounded-xl overflow-hidden mb-6"
    }, /* @__PURE__ */ React21.createElement("img", {
        src: imageUrl,
        alt: title,
        className: "w-full h-full object-cover"
    })), /* @__PURE__ */ React21.createElement("div", {
        className: "flex flex-col flex-grow"
    }, /* @__PURE__ */ React21.createElement("div", {
        className: "flex-grow space-y-4"
    }, /* @__PURE__ */ React21.createElement("div", null, /* @__PURE__ */ React21.createElement("span", {
        className: "text-sm font-sourceSans text-[#5A7C6F] mb-1 block"
    }, category), /* @__PURE__ */ React21.createElement("h3", {
        className: "font-rockwell text-2xl text-[#4B7163]"
    }, title)), /* @__PURE__ */ React21.createElement("p", {
        className: "font-sourceSans text-gray-600 text-base"
    }, description), /* @__PURE__ */ React21.createElement("div", {
        className: "flex flex-wrap gap-2"
    }, attributes === null || attributes === void 0 ? void 0 : attributes.map(function(attr, index) {
        return /* @__PURE__ */ React21.createElement(Tag, {
            key: index,
            text: attr.label,
            variant: "secondary"
        });
    }))), /* @__PURE__ */ React21.createElement("div", {
        className: "flex items-center justify-between pt-6 mt-6 border-t border-gray-100"
    }, /* @__PURE__ */ React21.createElement("div", {
        className: "flex items-baseline gap-1"
    }, /* @__PURE__ */ React21.createElement("span", {
        className: "font-rockwell text-3xl text-[#4B7163]"
    }, "$", price.toFixed(2)), /* @__PURE__ */ React21.createElement("span", {
        className: "font-sourceSans text-sm text-gray-500"
    }, "USD")), /* @__PURE__ */ React21.createElement(CustomButton, {
        onClick: onAddToCart,
        className: "flex items-center gap-2 px-6"
    }, /* @__PURE__ */ React21.createElement(ShoppingCart, {
        className: "h-4 w-4"
    }), "Add to Cart"))));
};
// src/components/ShoppingCart.tsx
import React22, { useState as useState10, useEffect as useEffect3 } from "react";
import { X as X8 } from "lucide-react";
var ShoppingCart2 = function(param) {
    var initialItems = param.items, onRemoveItem = param.onRemoveItem, onCheckout = param.onCheckout, className = param.className;
    var _useState10 = _sliced_to_array(useState10(initialItems), 2), items = _useState10[0], setItems = _useState10[1];
    useEffect3(function() {
        setItems(initialItems);
    }, [
        initialItems
    ]);
    var subtotal = items.reduce(function(sum, item) {
        return sum + item.price;
    }, 0);
    var tax = subtotal * 0.0825;
    var total = subtotal + tax;
    return /* @__PURE__ */ React22.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", "flex flex-col", className)
    }, /* @__PURE__ */ React22.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-6"
    }, "Shopping Cart (", items.length, " ", items.length === 1 ? "item" : "items", ")"), items.length === 0 ? /* @__PURE__ */ React22.createElement("div", {
        className: "text-center py-8 text-gray-500 font-sourceSans"
    }, "Your cart is empty") : /* @__PURE__ */ React22.createElement(React22.Fragment, null, /* @__PURE__ */ React22.createElement("div", {
        className: "flex-grow space-y-6 mb-6"
    }, items.map(function(item) {
        return /* @__PURE__ */ React22.createElement("div", {
            key: item.id,
            className: "flex gap-4 pb-6 border-b border-gray-100 last:border-b-0"
        }, /* @__PURE__ */ React22.createElement("div", {
            className: "w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
        }, /* @__PURE__ */ React22.createElement("img", {
            src: item.imageUrl,
            alt: item.name,
            className: "w-full h-full object-cover"
        })), /* @__PURE__ */ React22.createElement("div", {
            className: "flex-grow min-w-0"
        }, /* @__PURE__ */ React22.createElement("div", {
            className: "flex justify-between items-start gap-2"
        }, /* @__PURE__ */ React22.createElement("div", null, /* @__PURE__ */ React22.createElement("h3", {
            className: "font-rockwell text-lg text-[#4B7163] mb-1"
        }, item.name), /* @__PURE__ */ React22.createElement("p", {
            className: "text-sm text-gray-600 font-sourceSans"
        }, item.description)), /* @__PURE__ */ React22.createElement("button", {
            onClick: function() {
                return onRemoveItem(item.id);
            },
            className: "text-gray-400 hover:text-gray-600 transition-colors p-1",
            "aria-label": "Remove ".concat(item.name, " from cart")
        }, /* @__PURE__ */ React22.createElement(X8, {
            className: "h-5 w-5"
        }))), /* @__PURE__ */ React22.createElement("div", {
            className: "flex justify-end items-center mt-4"
        }, /* @__PURE__ */ React22.createElement("span", {
            className: "font-rockwell text-lg text-[#4B7163]"
        }, "$", item.price.toFixed(2)))));
    })), /* @__PURE__ */ React22.createElement("div", {
        className: "bg-[#F8FAF9] rounded-xl p-4 space-y-3"
    }, /* @__PURE__ */ React22.createElement("div", {
        className: "flex justify-between font-sourceSans text-[#5A7C6F]"
    }, /* @__PURE__ */ React22.createElement("span", null, "Subtotal"), /* @__PURE__ */ React22.createElement("span", null, "$", subtotal.toFixed(2))), /* @__PURE__ */ React22.createElement("div", {
        className: "flex justify-between font-sourceSans text-[#5A7C6F]"
    }, /* @__PURE__ */ React22.createElement("span", null, "Tax (8.25%)"), /* @__PURE__ */ React22.createElement("span", null, "$", tax.toFixed(2))), /* @__PURE__ */ React22.createElement("div", {
        className: "border-t border-[#5A7C6F]/20 pt-3"
    }, /* @__PURE__ */ React22.createElement("div", {
        className: "flex justify-between font-rockwell text-xl text-[#4B7163]"
    }, /* @__PURE__ */ React22.createElement("span", null, "Total"), /* @__PURE__ */ React22.createElement("span", null, "$", total.toFixed(2))))), /* @__PURE__ */ React22.createElement(CustomButton, {
        onClick: onCheckout,
        className: "w-full mt-6",
        variant: "cta"
    }, "Proceed to Checkout")));
};
// src/components/SwipeCardDeck.tsx
import React23, { useState as useState11, useEffect as useEffect4 } from "react";
var SwipeCardDeck = function(param) {
    var cards = param.cards, onSwipeLeft = param.onSwipeLeft, onSwipeRight = param.onSwipeRight, onEmpty = param.onEmpty;
    var _useState11 = _sliced_to_array(useState11(cards), 2), currentCards = _useState11[0], setCurrentCards = _useState11[1];
    var _useState111 = _sliced_to_array(useState11([]), 2), history = _useState111[0], setHistory = _useState111[1];
    useEffect4(function() {
        if (currentCards.length === 0) {
            onEmpty === null || onEmpty === void 0 ? void 0 : onEmpty();
        }
    }, [
        currentCards,
        onEmpty
    ]);
    var handleSwipe = function(direction, card) {
        setHistory(function(prev) {
            return _to_consumable_array(prev).concat([
                {
                    card: card,
                    direction: direction
                }
            ]);
        });
        setCurrentCards(function(prev) {
            return prev.filter(function(c) {
                return c.id !== card.id;
            });
        });
        if (direction === "left") {
            onSwipeLeft === null || onSwipeLeft === void 0 ? void 0 : onSwipeLeft(card);
        } else {
            onSwipeRight === null || onSwipeRight === void 0 ? void 0 : onSwipeRight(card);
        }
    };
    var undoLastSwipe = function() {
        if (history.length === 0) return;
        var lastAction = history[history.length - 1];
        setCurrentCards(function(prev) {
            return _to_consumable_array(prev).concat([
                lastAction.card
            ]);
        });
        setHistory(function(prev) {
            return prev.slice(0, -1);
        });
    };
    return /* @__PURE__ */ React23.createElement("div", {
        className: "relative w-full max-w-[300px] mx-auto h-[400px]"
    }, /* @__PURE__ */ React23.createElement("div", {
        className: "relative w-full h-full"
    }, currentCards.map(function(card, index) {
        var isTop = index === currentCards.length - 1;
        return /* @__PURE__ */ React23.createElement(SwipeCard, {
            key: card.id,
            imageUrl: card.imageUrl,
            alt: card.alt,
            isVisible: index >= currentCards.length - 3,
            onSwipe: function(direction) {
                return handleSwipe(direction, card);
            }
        }, card.content);
    })), history.length > 0 && /* @__PURE__ */ React23.createElement("button", {
        onClick: undoLastSwipe,
        className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-4 \n                     px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600\n                     hover:bg-gray-200 transition-colors"
    }, "Undo"));
};
// src/components/Toggle.tsx
import * as React24 from "react";
import { motion as motion2 } from "framer-motion";
var variantStyles2 = {
    primary: {
        active: "bg-[#6AB098] hover:bg-[#5A9F87]"
    },
    cta: {
        active: "bg-[#FFD200] hover:bg-[#E6BD00]"
    },
    secondary: {
        active: "bg-[#A9D2C4] hover:bg-[#98C1B3]"
    }
};
var Toggle = function(param) {
    var checked = param.checked, onChange = param.onChange, _param_variant = param.variant, variant = _param_variant === void 0 ? "primary" : _param_variant, _param_disabled = param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled, className = param.className;
    var handleKeyDown = function(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            if (!disabled) {
                onChange(!checked);
            }
        }
    };
    return /* @__PURE__ */ React24.createElement(motion2.button, {
        type: "button",
        role: "switch",
        "aria-checked": checked,
        onClick: function() {
            return !disabled && onChange(!checked);
        },
        onKeyDown: handleKeyDown,
        className: cn("relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full bg-[#F8FAF9]", "transition-colors duration-200 ease-in-out", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", "border border-gray-200", disabled ? "opacity-50 cursor-not-allowed" : "", className),
        animate: checked ? "checked" : "unchecked",
        whileTap: disabled ? void 0 : {
            scale: 0.95
        }
    }, /* @__PURE__ */ React24.createElement(motion2.span, {
        className: cn("pointer-events-none inline-block h-5 w-5 rounded-full shadow-lg ring-0", "absolute top-[2px]", disabled ? "cursor-not-allowed bg-gray-400" : checked ? variantStyles2[variant].active : "bg-gray-400 hover:bg-gray-500"),
        animate: {
            x: checked ? "24px" : "2px"
        },
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 30
        }
    }));
};
// src/components/PartnerPickupRequestForm.tsx
import React25, { useState as useState12 } from "react";
import { Camera as Camera2, Calendar as Calendar3 } from "lucide-react";
var PartnerPickupRequestForm = function(props) {
    var _useState12 = _sliced_to_array(useState12([]), 2), uploadedItems = _useState12[0], setUploadedItems = _useState12[1];
    var _useState121 = _sliced_to_array(useState12(""), 2), selectedDate = _useState121[0], setSelectedDate = _useState121[1];
    var _useState122 = _sliced_to_array(useState12(""), 2), selectedTime = _useState122[0], setSelectedTime = _useState122[1];
    var handlePhotoUpload2 = function(photos) {
        var newItems = photos.map(function(photoUrl) {
            return {
                id: Math.random().toString(36).substr(2, 9),
                imageUrl: photoUrl,
                description: "",
                quantity: 1
            };
        });
        setUploadedItems(function(prev) {
            return _to_consumable_array(prev).concat(_to_consumable_array(newItems));
        });
    };
    var handleItemDescription = function(id, description) {
        setUploadedItems(function(items) {
            return items.map(function(item) {
                return item.id === id ? _object_spread_props(_object_spread({}, item), {
                    description: description
                }) : item;
            });
        });
    };
    var handleQuantityChange = function(id, quantity) {
        setUploadedItems(function(items) {
            return items.map(function(item) {
                return item.id === id ? _object_spread_props(_object_spread({}, item), {
                    quantity: parseInt(quantity) || 1
                }) : item;
            });
        });
    };
    var user = {
        name: "John Doe",
        address: "123 Main St, Anytown, USA"
    };
    var defaultSteps = [
        {
            label: "Item Photos",
            description: "Upload photos of items you plan to drop off",
            icon: Camera2
        },
        {
            label: "Drop-off Time",
            description: "Choose your preferred drop-off time",
            icon: Calendar3
        }
    ];
    var renderCustomStep = function(currentStep) {
        if (currentStep === 1) {
            return /* @__PURE__ */ React25.createElement("div", {
                className: "space-y-6"
            }, /* @__PURE__ */ React25.createElement("div", {
                className: "bg-[#F8FAF9] rounded-xl p-6 border-l-4 border-[#4B7163]"
            }, /* @__PURE__ */ React25.createElement("h3", {
                className: "font-rockwell text-lg text-[#4B7163] mb-2"
            }, "Upload Photos of Your Items"), /* @__PURE__ */ React25.createElement("p", {
                className: "text-[#5A7C6F]"
            }, "Take clear photos of each item you plan to drop off. This helps us prepare the right space and resources.")), /* @__PURE__ */ React25.createElement("div", {
                className: "bg-[#F8FAF9] rounded-xl p-6"
            }, /* @__PURE__ */ React25.createElement(ImageUpload, {
                onUpload: function(photos) {
                    return handlePhotoUpload2(photos);
                },
                maxFiles: 50
            })), uploadedItems.map(function(item) {
                var _item_quantity;
                return /* @__PURE__ */ React25.createElement("div", {
                    key: item.id,
                    className: "flex gap-4 p-4 bg-[#F8FAF9] rounded-xl"
                }, /* @__PURE__ */ React25.createElement("div", {
                    className: "w-32 h-32 rounded-lg overflow-hidden flex-shrink-0"
                }, /* @__PURE__ */ React25.createElement("img", {
                    src: item.imageUrl,
                    alt: "Item",
                    className: "w-full h-full object-cover"
                })), /* @__PURE__ */ React25.createElement("div", {
                    className: "flex-grow space-y-4"
                }, /* @__PURE__ */ React25.createElement(FormInput, {
                    label: "Item Description",
                    placeholder: "Describe the item's condition and any relevant details",
                    value: item.description || "",
                    onChange: function(value) {
                        return handleItemDescription(item.id, value);
                    }
                }), /* @__PURE__ */ React25.createElement(FormInput, {
                    label: "Quantity",
                    type: "number",
                    min: 1,
                    value: ((_item_quantity = item.quantity) === null || _item_quantity === void 0 ? void 0 : _item_quantity.toString()) || "1",
                    onChange: function(value) {
                        return handleQuantityChange(item.id, value);
                    }
                })));
            }));
        }
        return null;
    };
    var renderDetailsStep = function(uploadedItems2, handleItemDescription2, handleQuantityChange2) {
        return /* @__PURE__ */ React25.createElement("div", {
            className: "space-y-6"
        }, /* @__PURE__ */ React25.createElement("div", {
            className: "bg-[#F8FAF9] rounded-xl p-6 border-l-4 border-[#4B7163]"
        }, /* @__PURE__ */ React25.createElement("h3", {
            className: "font-rockwell text-lg text-[#4B7163] mb-2"
        }, "Schedule Your Drop-off"), /* @__PURE__ */ React25.createElement("p", {
            className: "text-[#5A7C6F]"
        }, "Choose a convenient time to drop off your items.")), /* @__PURE__ */ React25.createElement("div", {
            className: "mt-8 p-4 bg-[#F8FAF9] rounded-xl"
        }, /* @__PURE__ */ React25.createElement("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4"
        }, /* @__PURE__ */ React25.createElement(FormInput, {
            type: "date",
            label: "Drop-off Date",
            value: selectedDate,
            min: /* @__PURE__ */ new Date().toISOString().split("T")[0],
            onChange: function(value) {
                return setSelectedDate(value);
            }
        }), /* @__PURE__ */ React25.createElement(FormInput, {
            type: "time",
            label: "Drop-off Time",
            value: selectedTime,
            onChange: function(value) {
                return setSelectedTime(value);
            }
        })), /* @__PURE__ */ React25.createElement("p", {
            className: "text-sm text-[#5A7C6F] mt-2"
        }, "Drop-off hours: Mon-Fri, 9AM-5PM")));
    };
    return /* @__PURE__ */ React25.createElement(PickupRequestForm, _object_spread_props(_object_spread({
        skipContactStep: true,
        skipAddressStep: true,
        skipConfirmationStep: true,
        steps: defaultSteps,
        renderCustomStep: renderCustomStep,
        uploadedItems: uploadedItems,
        setUploadedItems: setUploadedItems,
        selectedDate: selectedDate,
        selectedTime: selectedTime,
        onDateSelect: setSelectedDate,
        onTimeSelect: setSelectedTime
    }, props), {
        renderDetailsStep: renderDetailsStep,
        validateStep: function(step) {
            if (step === 1) {
                return uploadedItems.length > 0 && uploadedItems.every(function(item) {
                    var _item_quantity;
                    return ((_item_quantity = item.quantity) !== null && _item_quantity !== void 0 ? _item_quantity : 0) > 0;
                });
            }
            if (step === 2) {
                return selectedDate !== "" && selectedTime !== "";
            }
            return true;
        },
        onSubmit: function(data) {
            var itemsWithQuantities = data.items.map(function(item) {
                return _object_spread_props(_object_spread({}, item), {
                    quantity: item.quantity || 1
                });
            });
            props.onSubmit(_object_spread_props(_object_spread({}, data), {
                items: itemsWithQuantities,
                user: user
            }));
        }
    }));
};
// src/components/BulkPartnerPickupRequestForm.tsx
import React26, { useState as useState13 } from "react";
import { Upload as Upload3, FolderUp, Calendar as Calendar4, CheckCircle2 as CheckCircle23 } from "lucide-react";
import { addDoc as addDoc2, collection as collection2 } from "firebase/firestore";
var BulkPartnerPickupRequestForm = function(props) {
    var _useState13 = _sliced_to_array(useState13(null), 2), uploadMethod = _useState13[0], setUploadMethod = _useState13[1];
    var _useState131 = _sliced_to_array(useState13(null), 2), spreadsheet = _useState131[0], setSpreadsheet = _useState131[1];
    var _useState132 = _sliced_to_array(useState13(null), 2), bulkPhotos = _useState132[0], setBulkPhotos = _useState132[1];
    var _useState133 = _sliced_to_array(useState13(""), 2), dropOffDate = _useState133[0], setDropOffDate = _useState133[1];
    var _useState134 = _sliced_to_array(useState13(""), 2), dropOffTime = _useState134[0], setDropOffTime = _useState134[1];
    var steps = [
        {
            label: "Upload Files",
            description: "Upload your inventory spreadsheet",
            icon: FolderUp
        },
        {
            label: "Drop-off Time",
            description: "Choose your preferred drop-off time",
            icon: Calendar4
        }
    ];
    var handleSpreadsheetUpload = function(event) {
        if (event.target.files) {
            setSpreadsheet(event.target.files[0]);
        }
    };
    var handleBulkPhotoUpload = function(event) {
        if (event.target.files) {
            setBulkPhotos(event.target.files);
        }
    };
    var handleSubmit = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(data) {
            var formData, docRef;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        formData = _object_spread_props(_object_spread({}, data), {
                            uploadMethod: uploadMethod,
                            spreadsheet: spreadsheet,
                            bulkPhotos: bulkPhotos,
                            dropOffDate: dropOffDate,
                            dropOffTime: dropOffTime
                        });
                        console.log("Form submitted:", formData);
                        return [
                            4,
                            addDoc2(collection2(db, "pickupRequests"), formData)
                        ];
                    case 1:
                        docRef = _state.sent();
                        return [
                            2,
                            {
                                id: docRef.id
                            }
                        ];
                }
            });
        });
        return function handleSubmit(data) {
            return _ref.apply(this, arguments);
        };
    }();
    var renderCustomStep = function(currentStep) {
        if (currentStep === 1) {
            return /* @__PURE__ */ React26.createElement("div", {
                className: "space-y-6"
            }, !uploadMethod ? /* @__PURE__ */ React26.createElement("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6"
            }, /* @__PURE__ */ React26.createElement("div", {
                className: "p-6 bg-[#F8FAF9] rounded-xl hover:bg-[#E9EFED] cursor-pointer transition-colors",
                onClick: function() {
                    return setUploadMethod("bulk");
                }
            }, /* @__PURE__ */ React26.createElement("div", {
                className: "flex flex-col items-center text-center space-y-4"
            }, /* @__PURE__ */ React26.createElement(FolderUp, {
                className: "w-12 h-12 text-[#4B7163]"
            }), /* @__PURE__ */ React26.createElement("h3", {
                className: "text-lg font-semibold"
            }, "Bulk Directory Upload"), /* @__PURE__ */ React26.createElement("p", {
                className: "text-sm text-gray-600"
            }, "Upload a spreadsheet and multiple photos from a directory"))), /* @__PURE__ */ React26.createElement("div", {
                className: "p-6 bg-[#F8FAF9] rounded-xl hover:bg-[#E9EFED] cursor-pointer transition-colors",
                onClick: function() {
                    return setUploadMethod("individual");
                }
            }, /* @__PURE__ */ React26.createElement("div", {
                className: "flex flex-col items-center text-center space-y-4"
            }, /* @__PURE__ */ React26.createElement(Upload3, {
                className: "w-12 h-12 text-[#4B7163]"
            }), /* @__PURE__ */ React26.createElement("h3", {
                className: "text-lg font-semibold"
            }, "Individual Upload"), /* @__PURE__ */ React26.createElement("p", {
                className: "text-sm text-gray-600"
            }, "Upload photos and add descriptions one by one")))) : uploadMethod === "bulk" ? /* @__PURE__ */ React26.createElement("div", {
                className: "space-y-6"
            }, /* @__PURE__ */ React26.createElement("div", {
                className: "p-6 bg-[#F8FAF9] rounded-xl"
            }, /* @__PURE__ */ React26.createElement("h3", {
                className: "text-lg font-semibold mb-4"
            }, "Upload Spreadsheet"), /* @__PURE__ */ React26.createElement("input", {
                type: "file",
                accept: ".xls,.xlsx,.csv",
                onChange: handleSpreadsheetUpload,
                className: "w-full"
            }), spreadsheet && /* @__PURE__ */ React26.createElement("p", {
                className: "text-sm text-gray-500 mt-2"
            }, "Uploaded: ", spreadsheet.name)), /* @__PURE__ */ React26.createElement("div", {
                className: "p-6 bg-[#F8FAF9] rounded-xl"
            }, /* @__PURE__ */ React26.createElement("h3", {
                className: "text-lg font-semibold mb-4"
            }, "Upload Photos"), /* @__PURE__ */ React26.createElement("input", {
                type: "file",
                accept: "image/*",
                multiple: true,
                onChange: handleBulkPhotoUpload,
                className: "w-full"
            }), bulkPhotos && /* @__PURE__ */ React26.createElement("p", {
                className: "text-sm text-gray-500 mt-2"
            }, bulkPhotos.length, " photos selected")), /* @__PURE__ */ React26.createElement(CustomButton, {
                variant: "secondary",
                onClick: function() {
                    return setUploadMethod(null);
                },
                className: "mt-4"
            }, "Change Upload Method")) : /* @__PURE__ */ React26.createElement("div", {
                className: "space-y-6"
            }, /* @__PURE__ */ React26.createElement(ImageUpload, {
                onUpload: function(photos) {
                    console.log("Individual photos uploaded:", photos);
                },
                maxFiles: 10
            }), /* @__PURE__ */ React26.createElement(CustomButton, {
                variant: "secondary",
                onClick: function() {
                    return setUploadMethod(null);
                },
                className: "mt-4"
            }, "Change Upload Method")));
        } else if (currentStep === 2) {
            return /* @__PURE__ */ React26.createElement("div", {
                className: "space-y-6"
            }, /* @__PURE__ */ React26.createElement("div", {
                className: "bg-[#F8FAF9] rounded-xl p-4"
            }, /* @__PURE__ */ React26.createElement("h3", {
                className: "font-rockwell text-lg text-[#4B7163] mb-4"
            }, "Schedule Drop-off"), /* @__PURE__ */ React26.createElement("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4"
            }, /* @__PURE__ */ React26.createElement(FormInput, {
                type: "date",
                label: "Drop-off Date",
                value: dropOffDate,
                min: /* @__PURE__ */ new Date().toISOString().split("T")[0],
                onChange: setDropOffDate
            }), /* @__PURE__ */ React26.createElement(FormInput, {
                type: "time",
                label: "Drop-off Time",
                value: dropOffTime,
                onChange: setDropOffTime
            })), /* @__PURE__ */ React26.createElement("p", {
                className: "text-sm text-[#5A7C6F] mt-2"
            }, "Please select a date and time during our business hours (Mon-Fri, 9AM-5PM)")));
        } else if (currentStep === 3) {
            return /* @__PURE__ */ React26.createElement("div", {
                className: "space-y-6"
            }, /* @__PURE__ */ React26.createElement("div", {
                className: "bg-[#F8FAF9] rounded-xl p-6 text-center"
            }, /* @__PURE__ */ React26.createElement(CheckCircle23, {
                className: "w-16 h-16 text-[#4B7163] mx-auto mb-4"
            }), /* @__PURE__ */ React26.createElement("h3", {
                className: "font-rockwell text-2xl text-[#4B7163] mb-4"
            }, "Thank You for Your Request!"), /* @__PURE__ */ React26.createElement("p", {
                className: "text-[#5A7C6F] mb-6"
            }, "We'll review your request and get back to you shortly. Thank you for being a sustainable partner!")));
        }
        return null;
    };
    return /* @__PURE__ */ React26.createElement(PickupRequestForm, {
        onSubmit: handleSubmit,
        skipConfirmationStep: true,
        selectedDate: dropOffDate,
        selectedTime: dropOffTime,
        onDateSelect: setDropOffDate,
        onTimeSelect: setDropOffTime,
        steps: steps,
        renderDetailsStep: function() {
            return null;
        },
        renderCustomStep: renderCustomStep
    });
};
// src/components/LogisticsCalendar.tsx
import React27, { useState as useState14 } from "react";
import { Calendar as Calendar5, Clock, Truck, Package, MapPin as MapPin4 } from "lucide-react";
var LogisticsCalendar = function(param) {
    var onDateSelect = param.onDateSelect, onTimeSelect = param.onTimeSelect, selectedDate = param.selectedDate, selectedTime = param.selectedTime, className = param.className, _param_calendarData = param.calendarData, calendarData = _param_calendarData === void 0 ? [] : _param_calendarData;
    var _dayDetails_find, _dayDetails_find1;
    var dayDetails = calendarData;
    var availableDates = dayDetails.map(function(d) {
        return d.date;
    });
    var _useState14 = _sliced_to_array(useState14(false), 2), showDetails = _useState14[0], setShowDetails = _useState14[1];
    var selectedTimeSlot = selectedDate && selectedTime ? (_dayDetails_find = dayDetails.find(function(d) {
        return d.date === selectedDate;
    })) === null || _dayDetails_find === void 0 ? void 0 : _dayDetails_find.timeSlots.find(function(t) {
        return t.time === selectedTime;
    }) : null;
    var handleTimeSelect = function(time) {
        onTimeSelect(time);
        setShowDetails(true);
    };
    return /* @__PURE__ */ React27.createElement("div", {
        className: cn("bg-white rounded-xl border-2 border-[#4B7163] p-6", className)
    }, /* @__PURE__ */ React27.createElement("div", {
        className: "space-y-6"
    }, !showDetails ? /* @__PURE__ */ React27.createElement(React27.Fragment, null, /* @__PURE__ */ React27.createElement("div", null, /* @__PURE__ */ React27.createElement("h3", {
        className: "font-rockwell text-xl text-[#4B7163] mb-4 flex items-center gap-2"
    }, /* @__PURE__ */ React27.createElement(Calendar5, {
        className: "w-5 h-5"
    }), "Select Date"), /* @__PURE__ */ React27.createElement("div", {
        className: "relative"
    }, /* @__PURE__ */ React27.createElement(FormInput, {
        type: "date",
        label: "Date",
        value: selectedDate || "",
        min: /* @__PURE__ */ new Date().toISOString().split("T")[0],
        onChange: function(value) {
            if (availableDates.includes(value)) {
                onDateSelect(value);
            }
        },
        className: cn("w-full", dayDetails.some(function(d) {
            return d.date === selectedDate;
        }) && "border-[#4B7163] bg-[#F8FAF9]"),
        list: "available-dates"
    }), /* @__PURE__ */ React27.createElement("datalist", {
        id: "available-dates"
    }, availableDates.map(function(date) {
        return /* @__PURE__ */ React27.createElement("option", {
            key: date,
            value: date
        });
    })), !availableDates.includes(selectedDate || "") && selectedDate && /* @__PURE__ */ React27.createElement("p", {
        className: "text-sm text-red-500 mt-1"
    }, "No available times for this date"))), selectedDate && dayDetails.find(function(d) {
        return d.date === selectedDate;
    }) && /* @__PURE__ */ React27.createElement("div", null, /* @__PURE__ */ React27.createElement("h3", {
        className: "font-rockwell text-xl text-[#4B7163] mb-4 flex items-center gap-2"
    }, /* @__PURE__ */ React27.createElement(Clock, {
        className: "w-5 h-5"
    }), "Available Times"), /* @__PURE__ */ React27.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-4"
    }, (_dayDetails_find1 = dayDetails.find(function(d) {
        return d.date === selectedDate;
    })) === null || _dayDetails_find1 === void 0 ? void 0 : _dayDetails_find1.timeSlots.sort(function(a, b) {
        return a.time.localeCompare(b.time);
    }).map(function(slot) {
        return /* @__PURE__ */ React27.createElement("button", {
            key: slot.time,
            onClick: function() {
                return handleTimeSelect(slot.time);
            },
            className: cn("p-4 rounded-lg border-2 text-left transition-colors h-full", // Added h-full
            selectedTime === slot.time ? "border-[#4B7163] bg-[#4B7163] text-white" : "border-[#4B7163]/20 hover:border-[#4B7163]")
        }, /* @__PURE__ */ React27.createElement("div", {
            className: "flex flex-col h-full justify-between"
        }, "  ", /* @__PURE__ */ React27.createElement("div", {
            className: "mb-3"
        }, /* @__PURE__ */ React27.createElement("div", {
            className: "text-lg font-semibold mb-1"
        }, slot.time), /* @__PURE__ */ React27.createElement("div", {
            className: "text-sm opacity-75"
        }, slot.availableDrivers, " drivers available")), /* @__PURE__ */ React27.createElement("div", {
            className: "flex justify-between text-sm"
        }, /* @__PURE__ */ React27.createElement("div", {
            className: "flex flex-col items-center",
            title: "Number of pickups"
        }, /* @__PURE__ */ React27.createElement(Truck, {
            className: "w-5 h-5 mb-1"
        }), /* @__PURE__ */ React27.createElement("div", {
            className: "text-lg font-bold"
        }, slot.pickupCount)), /* @__PURE__ */ React27.createElement("div", {
            className: "flex flex-col items-center",
            title: "Number of drop-offs"
        }, /* @__PURE__ */ React27.createElement(Package, {
            className: "w-5 h-5 mb-1"
        }), /* @__PURE__ */ React27.createElement("div", {
            className: "text-lg font-bold"
        }, slot.dropoffCount)))));
    })), /* @__PURE__ */ React27.createElement("div", {
        className: "mt-6 p-4 bg-[#F8FAF9] rounded-lg"
    }, /* @__PURE__ */ React27.createElement("h4", {
        className: "font-semibold text-[#4B7163] mb-2"
    }, "Daily Summary"), /* @__PURE__ */ React27.createElement("div", {
        className: "grid grid-cols-2 gap-4 text-sm"
    }, /* @__PURE__ */ React27.createElement("div", null, "Total Pickups: ", dayDetails[0].totalPickups), /* @__PURE__ */ React27.createElement("div", null, "Total Drop-offs: ", dayDetails[0].totalDropoffs), /* @__PURE__ */ React27.createElement("div", null, "Available Drivers: ", dayDetails[0].availableDrivers))))) : /* @__PURE__ */ React27.createElement("div", {
        className: "space-y-6"
    }, /* @__PURE__ */ React27.createElement("div", {
        className: "flex items-center justify-between"
    }, /* @__PURE__ */ React27.createElement("h3", {
        className: "font-rockwell text-xl text-[#4B7163] flex items-center gap-2"
    }, /* @__PURE__ */ React27.createElement(Clock, {
        className: "w-5 h-5"
    }), selectedDate, " at ", selectedTime), /* @__PURE__ */ React27.createElement(CustomButton, {
        variant: "secondary",
        onClick: function() {
            return setShowDetails(false);
        },
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React27.createElement(Calendar5, {
        className: "w-4 h-4"
    }), "Back to Calendar")), /* @__PURE__ */ React27.createElement("div", {
        className: "space-y-6"
    }, /* @__PURE__ */ React27.createElement("div", {
        className: "bg-[#F8FAF9] p-4 rounded-lg"
    }, /* @__PURE__ */ React27.createElement("div", {
        className: "flex items-center justify-between mb-4"
    }, /* @__PURE__ */ React27.createElement("div", {
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React27.createElement(Truck, {
        className: "w-5 h-5 text-[#4B7163]"
    }), /* @__PURE__ */ React27.createElement("h4", {
        className: "font-semibold text-[#4B7163]"
    }, "Pickups (", selectedTimeSlot === null || selectedTimeSlot === void 0 ? void 0 : selectedTimeSlot.pickupCount, ")"))), /* @__PURE__ */ React27.createElement("div", {
        className: "space-y-4"
    }, selectedTimeSlot === null || selectedTimeSlot === void 0 ? void 0 : selectedTimeSlot.pickups.map(function(pickup) {
        return /* @__PURE__ */ React27.createElement("div", {
            key: pickup.id,
            className: "border-b border-[#4B7163]/20 pb-4"
        }, /* @__PURE__ */ React27.createElement("div", {
            className: "flex justify-between mb-2"
        }, /* @__PURE__ */ React27.createElement("span", {
            className: "font-semibold"
        }, pickup.customerName)), /* @__PURE__ */ React27.createElement("div", {
            className: "flex items-center gap-2 text-sm text-[#5A7C6F] mb-2"
        }, /* @__PURE__ */ React27.createElement(MapPin4, {
            className: "w-4 h-4"
        }), pickup.address), /* @__PURE__ */ React27.createElement("div", {
            className: "flex gap-2 overflow-x-auto pb-2"
        }, pickup.items.map(function(item) {
            return /* @__PURE__ */ React27.createElement("img", {
                key: item.id,
                src: item.imageUrl,
                alt: item.name,
                className: "w-16 h-16 object-cover rounded",
                title: item.description
            });
        })));
    }))), /* @__PURE__ */ React27.createElement("div", {
        className: "bg-[#F8FAF9] p-4 rounded-lg"
    }, /* @__PURE__ */ React27.createElement("div", {
        className: "flex items-center justify-between mb-4"
    }, /* @__PURE__ */ React27.createElement("div", {
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React27.createElement(Package, {
        className: "w-5 h-5 text-[#4B7163]"
    }), /* @__PURE__ */ React27.createElement("h4", {
        className: "font-semibold text-[#4B7163]"
    }, "Drop-offs (", selectedTimeSlot === null || selectedTimeSlot === void 0 ? void 0 : selectedTimeSlot.dropoffCount, ")"))), /* @__PURE__ */ React27.createElement("div", {
        className: "space-y-4"
    }, selectedTimeSlot === null || selectedTimeSlot === void 0 ? void 0 : selectedTimeSlot.dropoffs.map(function(dropoff) {
        return /* @__PURE__ */ React27.createElement("div", {
            key: dropoff.id,
            className: "border-b border-[#4B7163]/20 pb-4"
        }, /* @__PURE__ */ React27.createElement("div", {
            className: "flex justify-between mb-2"
        }, /* @__PURE__ */ React27.createElement("span", {
            className: "font-semibold"
        }, dropoff.customerName)), /* @__PURE__ */ React27.createElement("div", {
            className: "flex items-center gap-2 text-sm text-[#5A7C6F] mb-2"
        }, /* @__PURE__ */ React27.createElement(MapPin4, {
            className: "w-4 h-4"
        }), dropoff.address), /* @__PURE__ */ React27.createElement("div", {
            className: "flex gap-2 overflow-x-auto pb-2"
        }, dropoff.items.map(function(item) {
            return /* @__PURE__ */ React27.createElement("img", {
                key: item.id,
                src: item.imageUrl,
                alt: item.name,
                className: "w-16 h-16 object-cover rounded",
                title: item.description
            });
        })));
    })))))));
};
// src/components/PickupList.tsx
var PickupList = function(param) {
    var pickups = param.pickups, onSelectPickup = param.onSelectPickup;
    return /* @__PURE__ */ React.createElement("div", {
        className: "flex flex-col gap-4"
    }, pickups.map(function(pickup) {
        return /* @__PURE__ */ React.createElement(Card, {
            key: pickup.id,
            imageUrl: pickup.pickupPhoto,
            alt: "Pickup ".concat(pickup.id),
            onClick: function() {
                return onSelectPickup(pickup);
            },
            className: "cursor-pointer hover:shadow-lg transition-shadow"
        }, /* @__PURE__ */ React.createElement("div", {
            className: "p-4"
        }, /* @__PURE__ */ React.createElement("h3", {
            className: "font-rockwell text-lg text-[#4B7163]"
        }, "Pickup #", pickup.id), /* @__PURE__ */ React.createElement("p", {
            className: "text-sm text-gray-600 mt-2"
        }, "Status: ", pickup.status)));
    }));
};
// src/components/ProcessingQueue.tsx
import React28 from "react";
import { ArrowRight } from "lucide-react";
var ProcessingQueue = function(param) {
    var items = param.items, onSelectItem = param.onSelectItem, className = param.className;
    return /* @__PURE__ */ React28.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", "flex flex-col", className)
    }, /* @__PURE__ */ React28.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-6"
    }, "Items Awaiting Processing (", items.length, " ", items.length === 1 ? "item" : "items", ")"), items.length === 0 ? /* @__PURE__ */ React28.createElement("div", {
        className: "text-center py-8 text-gray-500 font-sourceSans"
    }, "No items awaiting processing") : /* @__PURE__ */ React28.createElement("div", {
        className: "flex-grow space-y-6"
    }, items.map(function(item) {
        return /* @__PURE__ */ React28.createElement("div", {
            key: item.id,
            className: "flex gap-4 pb-6 border-b border-gray-100 last:border-b-0"
        }, /* @__PURE__ */ React28.createElement("div", {
            className: "w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
        }, /* @__PURE__ */ React28.createElement("img", {
            src: item.pickupPhoto,
            alt: "Item ".concat(item.productId),
            className: "w-full h-full object-cover"
        })), /* @__PURE__ */ React28.createElement("div", {
            className: "flex-grow min-w-0"
        }, /* @__PURE__ */ React28.createElement("div", {
            className: "flex justify-between items-start gap-2"
        }, /* @__PURE__ */ React28.createElement("div", null, /* @__PURE__ */ React28.createElement("h3", {
            className: "font-rockwell text-lg text-[#4B7163] mb-1"
        }, "Product ID: ", item.productId), /* @__PURE__ */ React28.createElement("p", {
            className: "text-sm text-gray-600 font-sourceSans"
        }, item.pickupDescription)), /* @__PURE__ */ React28.createElement(CustomButton, {
            onClick: function() {
                return onSelectItem(item.id);
            },
            variant: "secondary",
            className: "flex items-center gap-2"
        }, "Process ", /* @__PURE__ */ React28.createElement(ArrowRight, {
            className: "h-4 w-4"
        }))), /* @__PURE__ */ React28.createElement("div", {
            className: "flex justify-between items-center mt-4"
        }, /* @__PURE__ */ React28.createElement("span", {
            className: "text-sm text-gray-500"
        }, "From: ", item.customerName), /* @__PURE__ */ React28.createElement("span", {
            className: "text-sm text-gray-500"
        }, "Received: ", new Date(item.receivedDate).toLocaleDateString()))));
    })));
};
// src/components/DriverPickupWorkflow.tsx
import React29, { useState as useState15 } from "react";
import { Calendar as Calendar6, MapPin as MapPin5, Check as Check7, X as X9, ChevronRight as ChevronRight2 } from "lucide-react";
var DriverPickupWorkflow = function(param) {
    var _param_requests = param.requests, requests = _param_requests === void 0 ? [] : _param_requests, onUpdateItemStatus = param.onUpdateItemStatus, onAddPhoto = param.onAddPhoto, onReschedule = param.onReschedule, onCompletePickup = param.onCompletePickup, onSendMessage = param.onSendMessage, onMessageRead = param.onMessageRead, _param_availableDates = param.availableDates, availableDates = _param_availableDates === void 0 ? [] : _param_availableDates, className = param.className;
    var _useState15 = _sliced_to_array(useState15(null), 2), selectedRequest = _useState15[0], setSelectedRequest = _useState15[1];
    var _useState151 = _sliced_to_array(useState15(null), 2), selectedDate = _useState151[0], setSelectedDate = _useState151[1];
    var _useState152 = _sliced_to_array(useState15(false), 2), isMessagesExpanded = _useState152[0], setIsMessagesExpanded = _useState152[1];
    var _useState153 = _sliced_to_array(useState15(false), 2), isMapModalOpen = _useState153[0], setIsMapModalOpen = _useState153[1];
    var filteredRequests = (requests || []).sort(function(a, b) {
        var dateA = a.pickupDate ? new Date(a.pickupDate).getTime() : 0;
        var dateB = b.pickupDate ? new Date(b.pickupDate).getTime() : 0;
        return dateA - dateB;
    }).filter(function(request) {
        var _request_pickupDate;
        return !selectedDate || ((_request_pickupDate = request.pickupDate) === null || _request_pickupDate === void 0 ? void 0 : _request_pickupDate.toISOString().split("T")[0]) === selectedDate;
    });
    if (!selectedRequest) {
        return /* @__PURE__ */ React29.createElement("div", {
            className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", "flex flex-col", className)
        }, /* @__PURE__ */ React29.createElement("h2", {
            className: "font-rockwell text-2xl text-[#4B7163] mb-6"
        }, "Pickups (", filteredRequests.length, ")"), /* @__PURE__ */ React29.createElement("div", {
            className: "mb-4"
        }, /* @__PURE__ */ React29.createElement(FormDropdown, {
            label: "Filter by Date",
            value: selectedDate || "",
            onChange: function(value) {
                return setSelectedDate(value || null);
            },
            options: [
                {
                    value: "",
                    label: "All Dates"
                }
            ].concat(_to_consumable_array((availableDates || []).map(function(date) {
                return {
                    value: date,
                    label: new Date(date).toLocaleDateString()
                };
            })))
        })), /* @__PURE__ */ React29.createElement("div", {
            className: "space-y-4"
        }, filteredRequests.map(function(request) {
            return /* @__PURE__ */ React29.createElement("div", {
                key: request.id,
                onClick: function() {
                    return setSelectedRequest(request);
                },
                className: "flex items-center gap-4 p-4 rounded-xl bg-[#F8FAF9] hover:bg-[#F0F4F2] cursor-pointer transition-colors"
            }, /* @__PURE__ */ React29.createElement("div", {
                className: "flex-grow"
            }, /* @__PURE__ */ React29.createElement("h3", {
                className: "font-rockwell text-lg text-[#4B7163]"
            }, request.customerName), /* @__PURE__ */ React29.createElement("div", {
                className: "flex items-center gap-2 text-sm text-[#5A7C6F] mt-1"
            }, /* @__PURE__ */ React29.createElement(MapPin5, {
                className: "h-4 w-4"
            }), /* @__PURE__ */ React29.createElement("span", null, request.address)), /* @__PURE__ */ React29.createElement("div", {
                className: "flex items-center gap-2 text-sm text-[#5A7C6F] mt-1"
            }, /* @__PURE__ */ React29.createElement(Calendar6, {
                className: "h-4 w-4"
            }), /* @__PURE__ */ React29.createElement("span", null, request.pickupDate ? new Date(request.pickupDate).toLocaleDateString() : "No date set"))), /* @__PURE__ */ React29.createElement(ChevronRight2, {
                className: "h-6 w-6 text-[#5A7C6F]"
            }));
        })));
    }
    return /* @__PURE__ */ React29.createElement("div", {
        className: cn("max-w-4xl mx-auto", className)
    }, /* @__PURE__ */ React29.createElement(CustomButton, {
        variant: "secondary",
        onClick: function() {
            return setSelectedRequest(null);
        },
        className: "mb-4"
    }, "\u2190 Back to List"), /* @__PURE__ */ React29.createElement("div", {
        className: "bg-white rounded-2xl border-2 border-[#4B7163] p-6 space-y-6"
    }, /* @__PURE__ */ React29.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-4"
    }, "Pickup Details"), /* @__PURE__ */ React29.createElement("div", {
        className: "mb-6"
    }, /* @__PURE__ */ React29.createElement("h3", {
        className: "font-rockwell text-lg text-[#4B7163] mb-2"
    }, "Customer Information"), /* @__PURE__ */ React29.createElement("div", {
        className: "bg-[#F8FAF9] p-4 rounded-xl"
    }, /* @__PURE__ */ React29.createElement("p", {
        className: "text-[#5A7C6F] mb-2"
    }, /* @__PURE__ */ React29.createElement("strong", null, "Name:"), " ", selectedRequest.customerName), /* @__PURE__ */ React29.createElement("p", {
        className: "text-[#5A7C6F] mb-2"
    }, /* @__PURE__ */ React29.createElement("strong", null, "Contact:"), " ", selectedRequest.customerEmail || selectedRequest.customerPhone), /* @__PURE__ */ React29.createElement("div", {
        className: "flex items-center gap-2 text-[#5A7C6F] cursor-pointer hover:text-[#4B7163] transition-colors",
        onClick: function() {
            return setIsMapModalOpen(true);
        }
    }, /* @__PURE__ */ React29.createElement(MapPin5, {
        className: "h-4 w-4"
    }), /* @__PURE__ */ React29.createElement("p", {
        className: "underline"
    }, selectedRequest.address)), /* @__PURE__ */ React29.createElement("div", {
        className: "flex items-center gap-2 text-[#5A7C6F] mt-2"
    }, /* @__PURE__ */ React29.createElement(Calendar6, {
        className: "h-4 w-4"
    }), /* @__PURE__ */ React29.createElement("p", null, new Date(selectedRequest.pickupDate || "").toLocaleDateString())))), isMapModalOpen && /* @__PURE__ */ React29.createElement(MapModal, {
        address: selectedRequest.address,
        onClose: function() {
            return setIsMapModalOpen(false);
        }
    }), /* @__PURE__ */ React29.createElement("div", {
        className: "flex flex-col gap-4"
    }, /* @__PURE__ */ React29.createElement("h3", {
        className: "font-rockwell text-lg text-[#4B7163] mb-2"
    }, "Items"), /* @__PURE__ */ React29.createElement("div", {
        className: "grid grid-cols-1 gap-8 mb-4"
    }, selectedRequest.items.map(function(item) {
        var _item_verificationPhotos_, _item_verificationPhotos;
        return /* @__PURE__ */ React29.createElement("div", {
            className: "aspect-[3/4] w-full relative",
            key: item.id
        }, /* @__PURE__ */ React29.createElement("div", {
            className: "absolute inset-0 -mx-8"
        }, /* @__PURE__ */ React29.createElement("div", {
            className: "relative h-full mx-8"
        }, /* @__PURE__ */ React29.createElement(SwipeCard, {
            imageUrl: ((_item_verificationPhotos = item.verificationPhotos) === null || _item_verificationPhotos === void 0 ? void 0 : (_item_verificationPhotos_ = _item_verificationPhotos[0]) === null || _item_verificationPhotos_ === void 0 ? void 0 : _item_verificationPhotos_.imageUrl) || item.imageUrl || "",
            alt: item.name,
            onSwipe: function(direction) {
                onUpdateItemStatus(selectedRequest.id, item.id, direction === "right" ? "verified" : "incorrect");
            }
        }, /* @__PURE__ */ React29.createElement("div", {
            className: "bg-[#F8FAF9] p-4 rounded-xl h-full overflow-y-auto"
        }, /* @__PURE__ */ React29.createElement("h4", {
            className: "font-semibold text-[#4B7163] mb-2"
        }, item.name), /* @__PURE__ */ React29.createElement("p", {
            className: "text-sm text-[#5A7C6F] mb-2"
        }, item.description), /* @__PURE__ */ React29.createElement("div", {
            className: "flex items-center gap-2"
        }, /* @__PURE__ */ React29.createElement("span", {
            className: cn("px-2 py-1 rounded-full text-xs", item.status === "verified" && "bg-green-100 text-green-800", item.status === "incorrect" && "bg-red-100 text-red-800", item.status === "pending" && "bg-yellow-100 text-yellow-800")
        }, item.status.charAt(0).toUpperCase() + item.status.slice(1))))))));
    })), /* @__PURE__ */ React29.createElement("div", {
        className: "flex justify-center gap-8 text-sm text-gray-500 mt-2"
    }, /* @__PURE__ */ React29.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ React29.createElement(X9, {
        className: "h-4 w-4 text-red-500"
    }), " Swipe left if not picking up item"), /* @__PURE__ */ React29.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ React29.createElement(Check7, {
        className: "h-4 w-4 text-green-500"
    }), " Swipe right if you have picked up the item"))), /* @__PURE__ */ React29.createElement("div", {
        className: "mt-6"
    }, /* @__PURE__ */ React29.createElement(MessageThread, {
        messages: selectedRequest.messages,
        onSendMessage: function(message) {
            return onSendMessage(selectedRequest.id, message);
        },
        onMessageRead: function(messageId) {
            return onMessageRead === null || onMessageRead === void 0 ? void 0 : onMessageRead(selectedRequest.id, messageId);
        }
    }))));
};
// src/components/DropoffRequestManager.tsx
import React30, { useState as useState16 } from "react";
import { Package as Package2, FileSpreadsheet, Plus, Minus } from "lucide-react";
var DropoffRequestManager = function(param) {
    var dropoffRequests = param.dropoffRequests, onApproveRequest = param.onApproveRequest, onRejectRequest = param.onRejectRequest, onUpdateStatus = param.onUpdateStatus, onSendMessage = param.onSendMessage, onUpdateQuantity = param.onUpdateQuantity, className = param.className;
    var _useState16 = _sliced_to_array(useState16(0), 2), currentRequestIndex = _useState16[0], setCurrentRequestIndex = _useState16[1];
    var _useState161 = _sliced_to_array(useState16("name"), 2), sortField = _useState161[0], setSortField = _useState161[1];
    var _useState162 = _sliced_to_array(useState16("asc"), 2), sortDirection = _useState162[0], setSortDirection = _useState162[1];
    var currentRequest = dropoffRequests[currentRequestIndex];
    var sortedItems = _to_consumable_array((currentRequest === null || currentRequest === void 0 ? void 0 : currentRequest.items) || []).sort(function(a, b) {
        if (sortDirection === "asc") {
            return a[sortField] > b[sortField] ? 1 : -1;
        }
        return a[sortField] < b[sortField] ? 1 : -1;
    });
    return /* @__PURE__ */ React30.createElement("div", {
        className: cn("space-y-6", className)
    }, /* @__PURE__ */ React30.createElement("div", {
        className: "flex justify-between items-center"
    }, /* @__PURE__ */ React30.createElement("h2", {
        className: "text-2xl font-rockwell text-[#4B7163]"
    }, "Partner Drop-off Requests"), /* @__PURE__ */ React30.createElement("div", {
        className: "flex gap-2"
    }, /* @__PURE__ */ React30.createElement(CustomButton, {
        onClick: function() {
            return setCurrentRequestIndex(function(prev) {
                return Math.max(0, prev - 1);
            });
        },
        disabled: currentRequestIndex === 0
    }, "Previous"), /* @__PURE__ */ React30.createElement(CustomButton, {
        onClick: function() {
            return setCurrentRequestIndex(function(prev) {
                return Math.min(dropoffRequests.length - 1, prev + 1);
            });
        },
        disabled: currentRequestIndex === dropoffRequests.length - 1
    }, "Next"))), /* @__PURE__ */ React30.createElement("div", {
        className: "bg-[#F8FAF9] p-4 rounded-lg"
    }, /* @__PURE__ */ React30.createElement("h3", {
        className: "font-semibold text-[#4B7163] mb-2"
    }, "Partner Information"), /* @__PURE__ */ React30.createElement("div", {
        className: "grid grid-cols-2 gap-4"
    }, /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("p", {
        className: "text-sm text-gray-600"
    }, "Name"), /* @__PURE__ */ React30.createElement("p", {
        className: "font-medium"
    }, currentRequest.partnerName)), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("p", {
        className: "text-sm text-gray-600"
    }, "Email"), /* @__PURE__ */ React30.createElement("p", {
        className: "font-medium"
    }, currentRequest.partnerEmail)), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("p", {
        className: "text-sm text-gray-600"
    }, "Phone"), /* @__PURE__ */ React30.createElement("p", {
        className: "font-medium"
    }, currentRequest.partnerPhone)), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("p", {
        className: "text-sm text-gray-600"
    }, "Scheduled Date"), /* @__PURE__ */ React30.createElement("p", {
        className: "font-medium"
    }, currentRequest.scheduledDate)))), /* @__PURE__ */ React30.createElement("div", {
        className: "bg-white rounded-lg border-2 border-[#4B7163] overflow-hidden"
    }, /* @__PURE__ */ React30.createElement("div", {
        className: "p-4 border-b border-[#4B7163]"
    }, /* @__PURE__ */ React30.createElement("div", {
        className: "flex justify-between items-center mb-4"
    }, /* @__PURE__ */ React30.createElement("h3", {
        className: "font-semibold text-[#4B7163] flex items-center gap-2"
    }, /* @__PURE__ */ React30.createElement(Package2, {
        className: "w-5 h-5"
    }), "Items (", currentRequest === null || currentRequest === void 0 ? void 0 : currentRequest.items.length, ")"), /* @__PURE__ */ React30.createElement("div", {
        className: "flex gap-2"
    }, /* @__PURE__ */ React30.createElement(CustomButton, {
        variant: "secondary",
        onClick: function() {
            return window.open("/path-to-spreadsheet");
        },
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React30.createElement(FileSpreadsheet, {
        className: "w-4 h-4"
    }), "Export"))), /* @__PURE__ */ React30.createElement("div", {
        className: "overflow-x-auto"
    }, /* @__PURE__ */ React30.createElement("table", {
        className: "w-full"
    }, /* @__PURE__ */ React30.createElement("thead", {
        className: "bg-[#F8FAF9]"
    }, /* @__PURE__ */ React30.createElement("tr", null, /* @__PURE__ */ React30.createElement("th", {
        className: "p-2 text-left"
    }, "Image"), /* @__PURE__ */ React30.createElement("th", {
        className: "p-2 text-left"
    }, "Name"), /* @__PURE__ */ React30.createElement("th", {
        className: "p-2 text-left"
    }, "Description"), /* @__PURE__ */ React30.createElement("th", {
        className: "p-2 text-left"
    }, "Category"), /* @__PURE__ */ React30.createElement("th", {
        className: "p-2 text-left"
    }, "Condition"), /* @__PURE__ */ React30.createElement("th", {
        className: "p-2 text-right"
    }, "Est. Value"), /* @__PURE__ */ React30.createElement("th", {
        className: "p-2 text-center"
    }, "Quantity"))), /* @__PURE__ */ React30.createElement("tbody", null, sortedItems.map(function(item) {
        return /* @__PURE__ */ React30.createElement("tr", {
            key: item.id,
            className: "border-t border-gray-200"
        }, /* @__PURE__ */ React30.createElement("td", {
            className: "p-2"
        }, /* @__PURE__ */ React30.createElement("img", {
            src: item.imageUrl,
            alt: item.name,
            className: "w-16 h-16 object-cover rounded"
        })), /* @__PURE__ */ React30.createElement("td", {
            className: "p-2"
        }, item.name), /* @__PURE__ */ React30.createElement("td", {
            className: "p-2"
        }, item.description), /* @__PURE__ */ React30.createElement("td", {
            className: "p-2"
        }, item.category), /* @__PURE__ */ React30.createElement("td", {
            className: "p-2"
        }, item.condition), /* @__PURE__ */ React30.createElement("td", {
            className: "p-2 text-right"
        }, "$", item.estimatedValue), /* @__PURE__ */ React30.createElement("td", {
            className: "p-2"
        }, /* @__PURE__ */ React30.createElement("div", {
            className: "flex items-center justify-center gap-2"
        }, /* @__PURE__ */ React30.createElement("button", {
            onClick: function() {
                return onUpdateQuantity(currentRequest.id, item.id, item.quantity - 1);
            },
            disabled: item.quantity <= 1,
            className: "p-1 hover:bg-gray-100 rounded"
        }, /* @__PURE__ */ React30.createElement(Minus, {
            className: "w-4 h-4"
        })), /* @__PURE__ */ React30.createElement("span", {
            className: "w-8 text-center"
        }, item.quantity), /* @__PURE__ */ React30.createElement("button", {
            onClick: function() {
                return onUpdateQuantity(currentRequest.id, item.id, item.quantity + 1);
            },
            className: "p-1 hover:bg-gray-100 rounded"
        }, /* @__PURE__ */ React30.createElement(Plus, {
            className: "w-4 h-4"
        })))));
    })))))), /* @__PURE__ */ React30.createElement(MessageThread, {
        messages: currentRequest.messages,
        onSendMessage: function(message) {
            return onSendMessage(currentRequest.id, message);
        }
    }));
};
// src/components/InventoryProcessingManager.tsx
import React31, { useState as useState17 } from "react";
var InventoryProcessingManager = function(param) {
    var items = param.items, onUpdateDetails = param.onUpdateDetails, onUpdateStatus = param.onUpdateStatus, onSaveDraft = param.onSaveDraft, className = param.className;
    var _useState17 = _sliced_to_array(useState17(null), 2), selectedItemId = _useState17[0], setSelectedItemId = _useState17[1];
    var handleSelectItem = function(itemId) {
        setSelectedItemId(itemId);
    };
    var handleBack = function() {
        setSelectedItemId(null);
    };
    if (selectedItemId) {
        var processingItems = items.map(function(item) {
            return _object_spread_props(_object_spread({}, item), {
                status: item.status || "in_inventory"
            });
        });
        return /* @__PURE__ */ React31.createElement("div", {
            className: className
        }, /* @__PURE__ */ React31.createElement("button", {
            onClick: handleBack,
            className: "mb-4 text-[#4B7163] hover:text-[#3A5A4F] font-sourceSans"
        }, "\u2190 Back to Queue"), /* @__PURE__ */ React31.createElement(ListingWorkflow, {
            items: processingItems.filter(function(item) {
                return item.id === selectedItemId;
            }),
            onUpdateDetails: onUpdateDetails,
            onUpdateStatus: onUpdateStatus,
            onSaveDraft: onSaveDraft
        }));
    }
    return /* @__PURE__ */ React31.createElement(ProcessingQueue, {
        items: items,
        onSelectItem: handleSelectItem,
        className: className
    });
};
// src/components/SearchInput.tsx
import React32 from "react";
import { Search as Search2, Filter } from "lucide-react";
var SearchInput = React32.forwardRef(function(param, ref) {
    var value = param.value, onChange = param.onChange, onSearch = param.onSearch, onFilter = param.onFilter, _param_placeholder = param.placeholder, placeholder = _param_placeholder === void 0 ? "Search..." : _param_placeholder, className = param.className;
    return /* @__PURE__ */ React32.createElement("div", {
        className: "flex gap-2 items-end"
    }, /* @__PURE__ */ React32.createElement("div", {
        className: "flex-1 relative"
    }, /* @__PURE__ */ React32.createElement(FormInput, {
        ref: ref,
        label: "Search",
        value: value,
        onChange: onChange,
        placeholder: placeholder,
        className: cn("pl-10", className)
    }), /* @__PURE__ */ React32.createElement(Search2, {
        className: "absolute left-3 top-[34px] w-4 h-4 text-[#5A7C6F]/60",
        "aria-hidden": "true"
    })), /* @__PURE__ */ React32.createElement(CustomButton, {
        variant: "secondary",
        onClick: onFilter,
        className: "flex items-center gap-2 h-[42px] mt-6"
    }, /* @__PURE__ */ React32.createElement(Filter, {
        className: "w-4 h-4"
    }), "Filter"), /* @__PURE__ */ React32.createElement(CustomButton, {
        variant: "primary",
        onClick: onSearch,
        className: "flex items-center gap-2 h-[42px] mt-6"
    }, /* @__PURE__ */ React32.createElement(Search2, {
        className: "w-4 h-4"
    }), "Search"));
});
SearchInput.displayName = "SearchInput";
// src/components/Header.tsx
import React34 from "react";
import NextImage from "next/image";
import { Menu } from "lucide-react";
// src/components/sheet.tsx
import * as React33 from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva as cva3 } from "class-variance-authority";
import { X as X10 } from "lucide-react";
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React33.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React33.createElement(SheetPrimitive.Overlay, _object_spread_props(_object_spread({
        className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)
    }, props), {
        ref: ref
    }));
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = cva3("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
var SheetContent = React33.forwardRef(function(_param, ref) {
    var _param_side = _param.side, side = _param_side === void 0 ? "right" : _param_side, className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "side",
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React33.createElement(SheetPortal, null, /* @__PURE__ */ React33.createElement(SheetOverlay, null), /* @__PURE__ */ React33.createElement(SheetPrimitive.Content, _object_spread({
        ref: ref,
        className: cn(sheetVariants({
            side: side
        }), className)
    }, props), children, /* @__PURE__ */ React33.createElement(SheetPrimitive.Close, {
        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
    }, /* @__PURE__ */ React33.createElement(X10, {
        className: "h-4 w-4"
    }), /* @__PURE__ */ React33.createElement("span", {
        className: "sr-only"
    }, "Close"))));
});
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React33.createElement("div", _object_spread({
        className: cn("flex flex-col space-y-2 text-center sm:text-left", className)
    }, props));
};
SheetHeader.displayName = "SheetHeader";
var SheetFooter = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React33.createElement("div", _object_spread({
        className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
    }, props));
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React33.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React33.createElement(SheetPrimitive.Title, _object_spread({
        ref: ref,
        className: cn("text-lg font-semibold text-foreground", className)
    }, props));
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React33.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React33.createElement(SheetPrimitive.Description, _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;
// src/components/Header.tsx
var Header = function(param) {
    var menuItems = param.menuItems, logo = param.logo;
    return /* @__PURE__ */ React34.createElement("header", {
        className: "sticky top-0 z-50 w-full bg-[#4B7163] text-white shadow-lg"
    }, /* @__PURE__ */ React34.createElement("div", {
        className: "w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
    }, /* @__PURE__ */ React34.createElement("div", {
        className: "h-16 flex items-center justify-between"
    }, /* @__PURE__ */ React34.createElement("div", {
        className: "flex shrink-0 items-center"
    }, logo && /* @__PURE__ */ React34.createElement("a", {
        href: logo.href,
        className: "flex items-center cursor-pointer"
    }, /* @__PURE__ */ React34.createElement(NextImage, {
        src: logo.src,
        alt: logo.alt,
        width: logo.width || 300,
        height: logo.height || 75,
        className: "h-16 w-auto",
        priority: true
    }))), /* @__PURE__ */ React34.createElement("div", {
        className: "flex md:hidden"
    }, /* @__PURE__ */ React34.createElement(Sheet, null, /* @__PURE__ */ React34.createElement(SheetTrigger, {
        asChild: true
    }, /* @__PURE__ */ React34.createElement(Button, {
        variant: "ghost",
        size: "icon",
        className: "text-white hover:bg-[#5a8575]"
    }, /* @__PURE__ */ React34.createElement(Menu, {
        className: "h-6 w-6"
    }))), /* @__PURE__ */ React34.createElement(SheetContent, {
        side: "right",
        className: "w-[80%] sm:w-[400px] bg-[#4B7163] border-l-white/20"
    }, /* @__PURE__ */ React34.createElement("nav", {
        className: "flex flex-col space-y-4 mt-8"
    }, menuItems.map(function(item) {
        return /* @__PURE__ */ React34.createElement("a", {
            key: item.label,
            href: item.href,
            className: "text-white text-lg hover:text-white/80 transition-colors p-2"
        }, item.label);
    }))))), /* @__PURE__ */ React34.createElement("nav", {
        className: "hidden md:flex items-center space-x-8"
    }, menuItems.map(function(item) {
        return /* @__PURE__ */ React34.createElement("a", {
            key: item.label,
            href: item.href,
            className: "text-sm font-medium hover:text-gray-300 transition-colors"
        }, item.label);
    })))));
};
// src/components/Footer.tsx
var Footer = function(param) {
    var copyrightText = param.copyrightText, additionalContent = param.additionalContent;
    return /* @__PURE__ */ React.createElement("footer", {
        className: "w-full bg-[#4B7163] text-white py-6 mt-auto"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
    }, /* @__PURE__ */ React.createElement("p", {
        className: "text-center"
    }, copyrightText), additionalContent && /* @__PURE__ */ React.createElement("div", {
        className: "mt-4"
    }, additionalContent)));
};
// src/components/page.tsx
var Page = function(param) {
    var children = param.children, className = param.className;
    return /* @__PURE__ */ React.createElement("div", {
        className: cn("min-h-screen flex flex-col", className)
    }, children);
};
export { BulkPartnerPickupRequestForm, Button, Card, CustomButton, DriverPickupWorkflow, DropoffRequestManager, Footer, FormDropdown, FormInput, Header, ImageUpload, InventoryProcessing, InventoryProcessingManager, ListingWorkflow, LogisticsCalendar, MapModal, MessageBubble, MessageThread, Modal, Page, PartnerPickupRequestForm, PickupList, PickupRequestForm, PickupRequestManager, Privacy, ProcessingQueue, ProductCard, Progress, ReceivingWorkflow, SearchInput, ShoppingCart2 as ShoppingCart, SwipeCard, SwipeCardDeck, Tag, TermsOfService, Toggle };
//# sourceMappingURL=index.mjs.map