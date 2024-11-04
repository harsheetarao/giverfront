"use strict";
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/components/index.ts
var components_exports = {};
__export(components_exports, {
    Button: function() {
        return Button;
    },
    Card: function() {
        return Card;
    },
    CustomButton: function() {
        return CustomButton;
    },
    Footer: function() {
        return Footer;
    },
    FormDropdown: function() {
        return FormDropdown;
    },
    FormInput: function() {
        return FormInput;
    },
    Header: function() {
        return Header;
    },
    MessageBubble: function() {
        return MessageBubble;
    },
    Page: function() {
        return Page;
    },
    PickupRequestForm: function() {
        return PickupRequestForm;
    },
    PickupRequestManager: function() {
        return PickupRequestManager;
    },
    ProductCard: function() {
        return ProductCard;
    },
    Progress: function() {
        return Progress;
    },
    Sheet: function() {
        return Sheet;
    },
    SheetContent: function() {
        return SheetContent;
    },
    SheetTrigger: function() {
        return SheetTrigger;
    },
    ShoppingCart: function() {
        return ShoppingCart2;
    },
    SwipeCardDeck: function() {
        return SwipeCardDeck;
    },
    Tag: function() {
        return Tag;
    },
    Toggle: function() {
        return Toggle;
    }
});
module.exports = __toCommonJS(components_exports);
// src/components/button.tsx
var React2 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
// src/components/button.tsx
var buttonVariants = (0, import_class_variance_authority.cva)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
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
    var Comp = asChild ? import_react_slot.Slot : "button";
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
// src/components/sheet.tsx
var React3 = __toESM(require("react"));
var SheetPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_class_variance_authority2 = require("class-variance-authority");
var import_lucide_react = require("lucide-react");
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React3.createElement(SheetPrimitive.Overlay, _object_spread_props(_object_spread({
        className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)
    }, props), {
        ref: ref
    }));
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = (0, import_class_variance_authority2.cva)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
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
var SheetContent = React3.forwardRef(function(_param, ref) {
    var _param_side = _param.side, side = _param_side === void 0 ? "right" : _param_side, className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "side",
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React3.createElement(SheetPortal, null, /* @__PURE__ */ React3.createElement(SheetOverlay, null), /* @__PURE__ */ React3.createElement(SheetPrimitive.Content, _object_spread({
        ref: ref,
        className: cn(sheetVariants({
            side: side
        }), className)
    }, props), children, /* @__PURE__ */ React3.createElement(SheetPrimitive.Close, {
        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
    }, /* @__PURE__ */ React3.createElement(import_lucide_react.X, {
        className: "h-4 w-4"
    }), /* @__PURE__ */ React3.createElement("span", {
        className: "sr-only"
    }, "Close"))));
});
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React3.createElement("div", _object_spread({
        className: cn("flex flex-col space-y-2 text-center sm:text-left", className)
    }, props));
};
SheetHeader.displayName = "SheetHeader";
var SheetFooter = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React3.createElement("div", _object_spread({
        className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
    }, props));
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React3.createElement(SheetPrimitive.Title, _object_spread({
        ref: ref,
        className: cn("text-lg font-semibold text-foreground", className)
    }, props));
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React3.createElement(SheetPrimitive.Description, _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;
// src/components/Card.tsx
var import_react = __toESM(require("react"));
var Card = function(param) {
    var imageUrl = param.imageUrl, alt = param.alt, children = param.children;
    return /* @__PURE__ */ import_react.default.createElement("div", {
        className: "card-custom"
    }, /* @__PURE__ */ import_react.default.createElement("div", {
        className: "card-custom-image"
    }, /* @__PURE__ */ import_react.default.createElement("img", {
        src: imageUrl,
        alt: alt,
        className: "w-full h-full object-cover"
    })), /* @__PURE__ */ import_react.default.createElement("div", {
        className: "w-full"
    }, children));
};
// src/components/CustomButton.tsx
var import_react2 = __toESM(require("react"));
var import_class_variance_authority3 = require("class-variance-authority");
var buttonVariants2 = (0, import_class_variance_authority3.cva)("flex items-center justify-center text-base font-poppins rounded-md transition-colors duration-200 ease-in-out px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed", {
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
    var children = _param.children, variant = _param.variant, size = _param.size, className = _param.className, props = _object_without_properties(_param, [
        "children",
        "variant",
        "size",
        "className"
    ]);
    return /* @__PURE__ */ import_react2.default.createElement("button", _object_spread({
        className: cn(buttonVariants2({
            variant: variant,
            size: size,
            className: className
        }))
    }, props), children);
};
// src/components/FormDropdown.tsx
var import_react3 = __toESM(require("react"));
var import_lucide_react2 = require("lucide-react");
var stateStyles = {
    normal: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: null
    },
    completed: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: /* @__PURE__ */ import_react3.default.createElement(import_lucide_react2.Check, {
            className: "h-3 w-3 text-white"
        }),
        iconBg: "bg-[#5A7C6F]"
    },
    error: {
        border: "border-red-500",
        text: "text-red-500",
        icon: /* @__PURE__ */ import_react3.default.createElement(import_lucide_react2.X, {
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
        icon: /* @__PURE__ */ import_react3.default.createElement(import_lucide_react2.AlertCircle, {
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
var FormDropdown = import_react3.default.forwardRef(function(_param, ref) {
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
    var currentState = disabled ? "disabled" : state;
    var styles = stateStyles[currentState];
    return /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "space-y-1.5"
    }, /* @__PURE__ */ import_react3.default.createElement("label", {
        className: cn("block text-sm font-medium uppercase", styles.text)
    }, label), /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "relative"
    }, /* @__PURE__ */ import_react3.default.createElement("select", _object_spread({
        ref: ref,
        disabled: disabled,
        value: value,
        onChange: function(e) {
            return onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
        },
        className: cn("w-full px-3 py-2 pr-10", "rounded-[4px]", "border-2", "font-poppins text-base", "appearance-none", "focus:outline-none focus:ring-2 focus:ring-offset-1", styles.border, disabled && "bg-gray-50 cursor-not-allowed", className)
    }, props), options.map(function(option) {
        return /* @__PURE__ */ import_react3.default.createElement("option", {
            key: option.value,
            value: option.value
        }, option.label);
    })), /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none"
    }, styles.icon && /* @__PURE__ */ import_react3.default.createElement("div", {
        className: cn("rounded-full w-4 h-4 mr-2", "flex items-center justify-center", styles.iconBg)
    }, styles.icon), /* @__PURE__ */ import_react3.default.createElement(import_lucide_react2.ChevronDown, {
        className: cn("h-5 w-5", styles.text)
    }))), hint && /* @__PURE__ */ import_react3.default.createElement("p", {
        className: cn("text-sm", styles.text)
    }, hint));
});
FormDropdown.displayName = "FormDropdown";
// src/components/FormInput.tsx
var import_react4 = __toESM(require("react"));
var import_lucide_react3 = require("lucide-react");
var stateStyles2 = {
    normal: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: null
    },
    completed: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: /* @__PURE__ */ import_react4.default.createElement(import_lucide_react3.Check, {
            className: "h-3 w-3 text-white"
        }),
        iconBg: "bg-[#5A7C6F]"
    },
    error: {
        border: "border-red-500",
        text: "text-red-500",
        icon: /* @__PURE__ */ import_react4.default.createElement(import_lucide_react3.X, {
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
        icon: /* @__PURE__ */ import_react4.default.createElement(import_lucide_react3.AlertCircle, {
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
var FormInput = import_react4.default.forwardRef(function(_param, ref) {
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
    return /* @__PURE__ */ import_react4.default.createElement("div", {
        className: "space-y-1.5"
    }, /* @__PURE__ */ import_react4.default.createElement("label", {
        className: cn("block text-sm font-medium uppercase", styles.text)
    }, label), /* @__PURE__ */ import_react4.default.createElement("div", {
        className: "relative"
    }, /* @__PURE__ */ import_react4.default.createElement("input", _object_spread({
        ref: ref,
        disabled: disabled,
        className: cn("w-full px-3 py-2", "rounded-[4px]", "border-2", "font-poppins text-base", "placeholder:text-[#5A7C6F]/60", "focus:outline-none focus:ring-2 focus:ring-offset-1", styles.border, disabled && "bg-gray-50 cursor-not-allowed", className),
        value: value,
        onChange: function(e) {
            return onChange(e.target.value);
        },
        placeholder: placeholder
    }, props)), styles.icon && /* @__PURE__ */ import_react4.default.createElement("div", {
        className: cn("absolute right-3 top-1/2 -translate-y-1/2", "rounded-full w-4 h-4", "flex items-center justify-center", styles.iconBg)
    }, styles.icon)), hint && /* @__PURE__ */ import_react4.default.createElement("p", {
        className: cn("text-sm", styles.text)
    }, hint));
});
FormInput.displayName = "FormInput";
// src/components/MessageBubble.tsx
var import_react5 = __toESM(require("react"));
var MessageBubble = function(param) {
    var children = param.children, _param_state = param.state, state = _param_state === void 0 ? "primary" : _param_state, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    var getStateClasses = function() {
        switch(state){
            case "secondary":
                return "message-bubble-secondary message-bubble-triangle message-bubble-triangle-right";
            case "tertiary":
                return "message-bubble-tertiary message-bubble-triangle message-bubble-triangle-left";
            default:
                return "message-bubble-primary message-bubble-triangle message-bubble-triangle-left";
        }
    };
    return /* @__PURE__ */ import_react5.default.createElement("div", {
        className: "message-bubble p-4 mb-4 ".concat(getStateClasses(), " ").concat(className)
    }, children);
};
// src/components/PickupRequestForm.tsx
var import_react7 = __toESM(require("react"));
// src/components/Progress.tsx
var import_react6 = __toESM(require("react"));
var import_lucide_react4 = require("lucide-react");
var Progress = function(param) {
    var steps = param.steps, currentStep = param.currentStep;
    return /* @__PURE__ */ import_react6.default.createElement("div", {
        className: "relative flex items-center justify-between w-full max-w-3xl mx-auto py-4 px-6"
    }, /* @__PURE__ */ import_react6.default.createElement("div", {
        className: "absolute top-[-10px] left-[12.5px] right-[12.5px] h-[3px] z-0",
        style: {
            backgroundColor: "rgba(90, 124, 111, 0.3)"
        }
    }), /* @__PURE__ */ import_react6.default.createElement("div", {
        className: "absolute top-[-10px] left-[12.5px] h-[3px] z-0 transition-all duration-300 ease-in-out",
        style: {
            backgroundColor: "#5A7C6F",
            width: "".concat(Math.max(0, Math.min(100, (currentStep - 1) / (steps.length - 1) * 100)), "%"),
            maxWidth: "calc(100% - ".concat(25, "px)")
        }
    }), /* @__PURE__ */ import_react6.default.createElement("div", {
        className: "relative z-10 flex items-center justify-between w-full px-[12.5px]"
    }, steps.map(function(step, index) {
        return /* @__PURE__ */ import_react6.default.createElement("div", {
            key: index,
            className: "absolute",
            style: {
                left: "".concat(index / (steps.length - 1) * 100, "%")
            }
        }, /* @__PURE__ */ import_react6.default.createElement("div", {
            className: "flex flex-col items-center -translate-x-1/2"
        }, /* @__PURE__ */ import_react6.default.createElement("div", {
            className: "\n                  w-[25px] h-[25px] rounded-full \n                  flex items-center justify-center\n                  border-[3px] border-[#5A7C6F]\n                  transition-colors duration-300 ease-in-out\n                  ".concat(index < currentStep ? "bg-[#5A7C6F]" : "bg-white", "\n                ")
        }, index < currentStep && /* @__PURE__ */ import_react6.default.createElement(import_lucide_react4.Check, {
            className: "w-4 h-4 text-white"
        })), /* @__PURE__ */ import_react6.default.createElement("span", {
            className: "mt-2 text-sm text-center hidden sm:block h-10 max-w-[80px]"
        }, step)));
    })));
};
// src/components/PickupRequestForm.tsx
var import_lucide_react6 = require("lucide-react");
var import_use_places_autocomplete = __toESM(require("use-places-autocomplete"));
// src/components/Modal.tsx
var import_lucide_react5 = require("lucide-react");
var Modal = function(param) {
    var children = param.children, onClose = param.onClose;
    return /* @__PURE__ */ React.createElement("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "absolute inset-0 bg-black/50",
        onClick: onClose
    }), /* @__PURE__ */ React.createElement("div", {
        className: "relative bg-white rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
    }, /* @__PURE__ */ React.createElement("button", {
        onClick: onClose,
        className: "absolute right-4 top-4 text-gray-500 hover:text-gray-700"
    }, /* @__PURE__ */ React.createElement(import_lucide_react5.X, {
        className: "h-6 w-6"
    })), children));
};
// src/components/PickupRequestForm.tsx
var PlacesAutocomplete = function(param) {
    var value = param.value, onChange = param.onChange, onSelect = param.onSelect;
    var _ref = (0, import_use_places_autocomplete.default)({
        requestOptions: {
            componentRestrictions: {
                country: "us"
            }
        },
        debounce: 300,
        defaultValue: value
    }), ready = _ref.ready, data = _ref.suggestions.data, setValue = _ref.setValue, clearSuggestions = _ref.clearSuggestions;
    return /* @__PURE__ */ import_react7.default.createElement("div", {
        className: "relative"
    }, /* @__PURE__ */ import_react7.default.createElement(FormInput, {
        label: "Pickup Address",
        value: value,
        onChange: function(val) {
            setValue(val);
            onChange(val);
        },
        disabled: !ready
    }), data.length > 0 && /* @__PURE__ */ import_react7.default.createElement("ul", {
        className: "absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg"
    }, data.map(function(suggestion) {
        return /* @__PURE__ */ import_react7.default.createElement("li", {
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
var PickupRequestForm = function(param) {
    var onSubmit = param.onSubmit, className = param.className;
    var _ref = _sliced_to_array((0, import_react7.useState)(1), 2), currentStep = _ref[0], setCurrentStep = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react7.useState)([]), 2), uploadedItems = _ref1[0], setUploadedItems = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react7.useState)([]), 2), availableTimes = _ref2[0], setAvailableTimes = _ref2[1];
    var _ref3 = _sliced_to_array((0, import_react7.useState)(""), 2), address = _ref3[0], setAddress = _ref3[1];
    var _ref4 = _sliced_to_array((0, import_react7.useState)({
        fullName: "",
        contact: ""
    }), 2), contactInfo = _ref4[0], setContactInfo = _ref4[1];
    var _ref5 = _sliced_to_array((0, import_react7.useState)(false), 2), showTerms = _ref5[0], setShowTerms = _ref5[1];
    var _ref6 = _sliced_to_array((0, import_react7.useState)({
        ownership: false,
        address: false,
        terms: false
    }), 2), confirmations = _ref6[0], setConfirmations = _ref6[1];
    var steps = [
        "Contact",
        "Photos",
        "Details",
        "Dates",
        "Location"
    ];
    var handleFileUpload = function(event) {
        var files = event.target.files;
        if (files) {
            var newItems = Array.from(files).map(function(file) {
                return {
                    id: Math.random().toString(36).substr(2, 9),
                    imageUrl: URL.createObjectURL(file)
                };
            });
            setUploadedItems(_to_consumable_array(uploadedItems).concat(_to_consumable_array(newItems)));
        }
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
    var handleTimeSelection = function(time) {
        setAvailableTimes(function(current) {
            return current.includes(time) ? current.filter(function(t) {
                return t !== time;
            }) : _to_consumable_array(current).concat([
                time
            ]);
        });
    };
    var renderStepContent = function() {
        switch(currentStep){
            case 1:
                return /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ import_react7.default.createElement("p", {
                    className: "text-[#4B7163] mb-4"
                }, "To better serve you, we need:"), /* @__PURE__ */ import_react7.default.createElement("ul", {
                    className: "list-disc ml-6 mb-4"
                }, /* @__PURE__ */ import_react7.default.createElement("li", null, "Your name"), /* @__PURE__ */ import_react7.default.createElement("li", null, "Either an email address or mobile number")), /* @__PURE__ */ import_react7.default.createElement("p", {
                    className: "text-[#4B7163]"
                }, "This allows us to send service updates through your preferred contact method. We'll only use these details to communicate about your specific request."), /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "mt-6"
                }, /* @__PURE__ */ import_react7.default.createElement(FormInput, {
                    label: "Full Name",
                    value: contactInfo.fullName,
                    onChange: function(value) {
                        return setContactInfo(function(prev) {
                            return _object_spread_props(_object_spread({}, prev), {
                                fullName: value
                            });
                        });
                    }
                }), /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "mt-6"
                }, /* @__PURE__ */ import_react7.default.createElement(FormInput, {
                    label: "Email Address or Mobile Number",
                    value: contactInfo.contact,
                    onChange: function(value) {
                        return setContactInfo(function(prev) {
                            return _object_spread_props(_object_spread({}, prev), {
                                contact: value
                            });
                        });
                    },
                    hint: "Choose the contact method you check most frequently for fastest updates."
                })))));
            case 2:
                return /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "border-2 border-dashed border-[#5A7C6F] rounded-xl p-8 text-center"
                }, /* @__PURE__ */ import_react7.default.createElement("input", {
                    type: "file",
                    id: "photo-upload",
                    multiple: true,
                    accept: "image/*",
                    className: "hidden",
                    onChange: handleFileUpload
                }), /* @__PURE__ */ import_react7.default.createElement("label", {
                    htmlFor: "photo-upload",
                    className: "cursor-pointer space-y-4 block"
                }, /* @__PURE__ */ import_react7.default.createElement(import_lucide_react6.Upload, {
                    className: "h-12 w-12 mx-auto text-[#5A7C6F]"
                }), /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "font-sourceSans"
                }, /* @__PURE__ */ import_react7.default.createElement("p", {
                    className: "text-lg font-semibold text-[#4B7163]"
                }, "Drop photos here or click to upload"), /* @__PURE__ */ import_react7.default.createElement("p", {
                    className: "text-sm text-[#5A7C6F]"
                }, "Upload clear photos of each item you'd like us to pick up")))), uploadedItems.length > 0 && /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 gap-4"
                }, uploadedItems.map(function(item) {
                    return /* @__PURE__ */ import_react7.default.createElement("div", {
                        key: item.id,
                        className: "aspect-square rounded-lg overflow-hidden border-2 border-[#5A7C6F]"
                    }, /* @__PURE__ */ import_react7.default.createElement("img", {
                        src: item.imageUrl,
                        alt: "Uploaded item",
                        className: "w-full h-full object-cover"
                    }));
                })));
            case 3:
                return /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "space-y-6"
                }, uploadedItems.map(function(item) {
                    return /* @__PURE__ */ import_react7.default.createElement("div", {
                        key: item.id,
                        className: "flex gap-4 p-4 bg-[#F8FAF9] rounded-xl"
                    }, /* @__PURE__ */ import_react7.default.createElement("div", {
                        className: "w-32 h-32 rounded-lg overflow-hidden flex-shrink-0"
                    }, /* @__PURE__ */ import_react7.default.createElement("img", {
                        src: item.imageUrl,
                        alt: "Item",
                        className: "w-full h-full object-cover"
                    })), /* @__PURE__ */ import_react7.default.createElement("div", {
                        className: "flex-grow"
                    }, /* @__PURE__ */ import_react7.default.createElement(FormInput, {
                        label: "Item Description",
                        placeholder: "Describe the item, including condition and any relevant details",
                        value: item.description || "",
                        onChange: function(value) {
                            return handleItemDescription(item.id, value);
                        }
                    })));
                }));
            case 4:
                return /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ import_react7.default.createElement("h3", {
                    className: "font-rockwell text-lg text-[#4B7163] mb-4"
                }, "Available Pickup Times"), /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "grid grid-cols-2 gap-4"
                }, [
                    "Monday AM",
                    "Monday PM",
                    "Tuesday AM",
                    "Tuesday PM",
                    "Wednesday AM",
                    "Wednesday PM",
                    "Thursday AM",
                    "Thursday PM",
                    "Friday AM",
                    "Friday PM"
                ].map(function(time) {
                    return /* @__PURE__ */ import_react7.default.createElement("button", {
                        key: time,
                        onClick: function() {
                            return handleTimeSelection(time);
                        },
                        className: cn("p-3 rounded-lg border-2 font-sourceSans transition-colors", availableTimes.includes(time) ? "border-[#6AB098] bg-[#6AB098] text-white" : "border-[#5A7C6F] text-[#5A7C6F] hover:bg-[#F0F4F2]")
                    }, time);
                }))));
            case 5:
                return /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ import_react7.default.createElement(PlacesAutocomplete, {
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
                }), /* @__PURE__ */ import_react7.default.createElement("p", {
                    className: "mt-2 text-sm text-[#5A7C6F] flex items-center gap-2"
                }, /* @__PURE__ */ import_react7.default.createElement(import_lucide_react6.Info, {
                    className: "h-4 w-4"
                }), "Please ensure the address is accurate and items will be accessible at this location")), /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "mt-8 space-y-4 bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ import_react7.default.createElement("h3", {
                    className: "font-rockwell text-lg text-[#4B7163] mb-4"
                }, "Final Confirmation"), /* @__PURE__ */ import_react7.default.createElement("label", {
                    className: "flex items-start gap-3 cursor-pointer"
                }, /* @__PURE__ */ import_react7.default.createElement("input", {
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
                }), /* @__PURE__ */ import_react7.default.createElement("span", {
                    className: "text-sm text-[#5A7C6F]"
                }, "I confirm I own this item or have permission to request service for it")), /* @__PURE__ */ import_react7.default.createElement("label", {
                    className: "flex items-start gap-3 cursor-pointer"
                }, /* @__PURE__ */ import_react7.default.createElement("input", {
                    type: "checkbox",
                    checked: confirmations.address,
                    onChange: function(e) {
                        return setConfirmations(function(prev) {
                            return _object_spread_props(_object_spread({}, prev), {
                                address: e.target.checked
                            });
                        });
                    },
                    className: "mt-1"
                }), /* @__PURE__ */ import_react7.default.createElement("span", {
                    className: "text-sm text-[#5A7C6F]"
                }, "I confirm the address provided is correct and I can receive services there")), /* @__PURE__ */ import_react7.default.createElement("label", {
                    className: "flex items-start gap-3 cursor-pointer"
                }, /* @__PURE__ */ import_react7.default.createElement("input", {
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
                }), /* @__PURE__ */ import_react7.default.createElement("span", {
                    className: "text-sm text-[#5A7C6F]"
                }, "I accept the", " ", /* @__PURE__ */ import_react7.default.createElement("button", {
                    onClick: function() {
                        return setShowTerms(true);
                    },
                    className: "text-[#6AB098] underline hover:text-[#4B7163]"
                }, "Terms of Service")))), showTerms && /* @__PURE__ */ import_react7.default.createElement(Modal, {
                    onClose: function() {
                        return setShowTerms(false);
                    }
                }, /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "p-6"
                }, /* @__PURE__ */ import_react7.default.createElement("h2", {
                    className: "font-rockwell text-2xl text-[#4B7163] mb-4"
                }, "Terms of Service"), /* @__PURE__ */ import_react7.default.createElement("div", {
                    className: "prose prose-sm max-w-none"
                }))));
            default:
                return null;
        }
    };
    var canProceed = function() {
        switch(currentStep){
            case 1:
                return contactInfo.fullName.trim().length > 0 && contactInfo.contact.trim().length > 0;
            case 2:
                return uploadedItems.length > 0;
            case 3:
                return true;
            case 4:
                return availableTimes.length > 0;
            case 5:
                return address.trim().length > 0 && confirmations.ownership && confirmations.address && confirmations.terms;
            default:
                return false;
        }
    };
    var handleNext = function() {
        if (currentStep === 5) {
            onSubmit({
                fullName: contactInfo.fullName,
                contact: contactInfo.contact,
                items: uploadedItems,
                availableTimes: availableTimes,
                address: address
            });
        } else {
            setCurrentStep(function(prev) {
                return prev + 1;
            });
        }
    };
    return /* @__PURE__ */ import_react7.default.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6 pt-8", className)
    }, /* @__PURE__ */ import_react7.default.createElement("div", {
        className: "mb-8"
    }, /* @__PURE__ */ import_react7.default.createElement(Progress, {
        steps: steps,
        currentStep: currentStep
    })), /* @__PURE__ */ import_react7.default.createElement("div", {
        className: "mb-8"
    }, /* @__PURE__ */ import_react7.default.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-6"
    }, steps[currentStep - 1]), renderStepContent()), /* @__PURE__ */ import_react7.default.createElement("div", {
        className: "flex justify-between"
    }, currentStep > 1 && /* @__PURE__ */ import_react7.default.createElement(CustomButton, {
        variant: "secondary",
        onClick: function() {
            return setCurrentStep(function(prev) {
                return prev - 1;
            });
        },
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ import_react7.default.createElement(import_lucide_react6.ChevronLeft, {
        className: "h-4 w-4"
    }), "Back"), /* @__PURE__ */ import_react7.default.createElement(CustomButton, {
        onClick: handleNext,
        disabled: !canProceed(),
        className: "flex items-center gap-2 ml-auto"
    }, currentStep === 5 ? "Submit Request" : "Continue", currentStep < 5 && /* @__PURE__ */ import_react7.default.createElement(import_lucide_react6.ChevronRight, {
        className: "h-4 w-4"
    }))));
};
// src/components/PickupRequestManager.tsx
var import_react9 = __toESM(require("react"));
// src/components/SwipeCard.tsx
var import_react8 = __toESM(require("react"));
var import_framer_motion = require("framer-motion");
var import_lucide_react7 = require("lucide-react");
var SwipeCard = function(param) {
    var imageUrl = param.imageUrl, alt = param.alt, children = param.children, onSwipe = param.onSwipe, _param_isVisible = param.isVisible, isVisible = _param_isVisible === void 0 ? true : _param_isVisible;
    var _ref = _sliced_to_array((0, import_react8.useState)(0), 2), exitX = _ref[0], setExitX = _ref[1];
    var x = (0, import_framer_motion.useMotionValue)(0);
    var rotate = (0, import_framer_motion.useTransform)(x, [
        -200,
        200
    ], [
        -25,
        25
    ]);
    var opacity = (0, import_framer_motion.useTransform)(x, [
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
    var rightBgOpacity = (0, import_framer_motion.useTransform)(x, [
        0,
        125
    ], [
        0,
        1
    ]);
    var leftBgOpacity = (0, import_framer_motion.useTransform)(x, [
        -125,
        0
    ], [
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
    if (!isVisible) return null;
    return /* @__PURE__ */ import_react8.default.createElement(import_framer_motion.motion.div, {
        className: "absolute w-full",
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
        whileDrag: {
            cursor: "grabbing"
        },
        initial: {
            x: 0
        }
    }, /* @__PURE__ */ import_react8.default.createElement(import_framer_motion.motion.div, {
        className: "absolute inset-0 bg-green-500/20 rounded-2xl z-10",
        style: {
            opacity: rightBgOpacity
        }
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
        className: "absolute top-1/2 right-8 transform -translate-y-1/2"
    }, /* @__PURE__ */ import_react8.default.createElement(import_lucide_react7.Check, {
        className: "w-12 h-12 text-green-500"
    }))), /* @__PURE__ */ import_react8.default.createElement(import_framer_motion.motion.div, {
        className: "absolute inset-0 bg-red-500/20 rounded-2xl z-10",
        style: {
            opacity: leftBgOpacity
        }
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
        className: "absolute top-1/2 left-8 transform -translate-y-1/2"
    }, /* @__PURE__ */ import_react8.default.createElement(import_lucide_react7.X, {
        className: "w-12 h-12 text-red-500"
    }))), /* @__PURE__ */ import_react8.default.createElement("div", {
        className: "bg-white rounded-2xl border border-[#4B7163] p-4 flex flex-col items-center"
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
        className: "w-[250px] h-[250px] rounded-2xl overflow-hidden mb-4"
    }, /* @__PURE__ */ import_react8.default.createElement("img", {
        src: imageUrl,
        alt: alt,
        className: "w-full h-full object-cover"
    })), /* @__PURE__ */ import_react8.default.createElement("div", {
        className: "w-full"
    }, children)));
};
// src/components/PickupRequestManager.tsx
var import_lucide_react8 = require("lucide-react");
var PickupRequestManager = function(param) {
    var requests = param.requests, onAcceptItem = param.onAcceptItem, onRejectItem = param.onRejectItem, onSendMessage = param.onSendMessage, onMessageRead = param.onMessageRead, className = param.className;
    var _ref = _sliced_to_array((0, import_react9.useState)(0), 2), currentRequestIndex = _ref[0], setCurrentRequestIndex = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react9.useState)(requests[currentRequestIndex].items), 2), items = _ref1[0], setItems = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react9.useState)(""), 2), newMessage = _ref2[0], setNewMessage = _ref2[1];
    var _ref3 = _sliced_to_array((0, import_react9.useState)(false), 2), isMessagesExpanded = _ref3[0], setIsMessagesExpanded = _ref3[1];
    var unreadCount = requests[currentRequestIndex].messages.filter(function(msg) {
        return !msg.isRead;
    }).length;
    var lastMessage = requests[currentRequestIndex].messages[requests[currentRequestIndex].messages.length - 1];
    var lastMessageTime = lastMessage ? new Intl.RelativeTimeFormat("en").format(Math.ceil((lastMessage.timestamp.getTime() - Date.now()) / (1e3 * 60 * 60 * 24)), "days") : null;
    var handleSwipe = function(direction, item) {
        if (direction === "right") {
            onAcceptItem(requests[currentRequestIndex].id, item.id);
        } else {
            onRejectItem(requests[currentRequestIndex].id, item.id);
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
            requests[currentRequestIndex].messages.forEach(function(msg) {
                if (!msg.isRead) onMessageRead(requests[currentRequestIndex].id, msg.id);
            });
        }
    };
    var totalRequests = requests.length;
    return /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "max-w-4xl mx-auto space-y-8"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "flex justify-between items-center px-4"
    }, /* @__PURE__ */ import_react9.default.createElement(CustomButton, {
        onClick: function() {
            return setCurrentRequestIndex(function(prev) {
                return Math.max(0, prev - 1);
            });
        },
        disabled: currentRequestIndex === 0,
        className: "bg-[#4B7163] text-white px-4 py-2 rounded-lg"
    }, "<"), /* @__PURE__ */ import_react9.default.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163]"
    }, currentRequestIndex + 1, " of ", totalRequests), /* @__PURE__ */ import_react9.default.createElement(CustomButton, {
        onClick: function() {
            return setCurrentRequestIndex(function(prev) {
                return Math.min(totalRequests - 1, prev + 1);
            });
        },
        disabled: currentRequestIndex === totalRequests - 1,
        className: "bg-[#4B7163] text-white px-4 py-2 rounded-lg"
    }, ">")), /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "bg-white rounded-2xl border-2 border-[#4B7163] p-6"
    }, /* @__PURE__ */ import_react9.default.createElement("h3", {
        className: "font-rockwell text-xl text-[#4B7163] mb-4"
    }, "Items to Review (", requests[currentRequestIndex].items.length, ")"), /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "relative h-[500px]"
    }, requests[currentRequestIndex].items.map(function(item, index) {
        return /* @__PURE__ */ import_react9.default.createElement(SwipeCard, {
            key: item.id,
            imageUrl: item.imageUrl,
            alt: item.title || "Pickup request item",
            isVisible: index === requests[currentRequestIndex].items.length - 1,
            onSwipe: function(direction) {
                return handleSwipe(direction, item);
            }
        }, /* @__PURE__ */ import_react9.default.createElement("div", {
            className: "space-y-4"
        }, /* @__PURE__ */ import_react9.default.createElement("p", {
            className: "font-sourceSans text-gray-600"
        }, item.description), /* @__PURE__ */ import_react9.default.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ import_react9.default.createElement("div", {
            className: "flex items-center gap-2 text-[#5A7C6F]"
        }, /* @__PURE__ */ import_react9.default.createElement(import_lucide_react8.MapPin, {
            className: "h-4 w-4"
        }), /* @__PURE__ */ import_react9.default.createElement("span", {
            className: "text-sm"
        }, item.location)), /* @__PURE__ */ import_react9.default.createElement("div", {
            className: "flex items-center gap-2 text-[#5A7C6F]"
        }, /* @__PURE__ */ import_react9.default.createElement(import_lucide_react8.Calendar, {
            className: "h-4 w-4"
        }), /* @__PURE__ */ import_react9.default.createElement("span", {
            className: "text-sm"
        }, "Available: ", item.availableDates.join(", "))))));
    }), /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "absolute bottom-0 left-0 right-0 flex justify-center gap-8 pb-4 text-sm text-gray-500"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ import_react9.default.createElement(import_lucide_react8.X, {
        className: "h-4 w-4 text-red-500"
    }), " Swipe left to reject"), /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ import_react9.default.createElement(import_lucide_react8.Check, {
        className: "h-4 w-4 text-green-500"
    }), " Swipe right to accept")))), /* @__PURE__ */ import_react9.default.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", className)
    }, /* @__PURE__ */ import_react9.default.createElement("button", {
        onClick: handleExpand,
        className: "w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#F8FAF9]"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "flex items-center gap-3"
    }, /* @__PURE__ */ import_react9.default.createElement(import_lucide_react8.MessageCircle, {
        className: "h-5 w-5 text-[#4B7163]"
    }), /* @__PURE__ */ import_react9.default.createElement("span", {
        className: "font-medium text-[#4B7163]"
    }, "Messages"), unreadCount > 0 && /* @__PURE__ */ import_react9.default.createElement("span", {
        className: "bg-[#6AB098] text-white text-sm px-2 py-1 rounded-full"
    }, unreadCount, " new")), lastMessage && /* @__PURE__ */ import_react9.default.createElement("span", {
        className: "text-sm text-gray-500"
    }, "Last message ", lastMessageTime)), isMessagesExpanded && /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "mt-4 space-y-4"
    }, requests[currentRequestIndex].messages.map(function(message) {
        return /* @__PURE__ */ import_react9.default.createElement("div", {
            key: message.id,
            className: cn("p-4 rounded-lg", message.sender === "admin" ? "bg-[#F8FAF9] ml-8" : "bg-[#E8F0ED] mr-8")
        }, /* @__PURE__ */ import_react9.default.createElement("p", {
            className: "text-[#4B7163]"
        }, message.content), /* @__PURE__ */ import_react9.default.createElement("span", {
            className: "text-sm text-gray-500 mt-2 block"
        }, message.timestamp.toLocaleString()));
    }), /* @__PURE__ */ import_react9.default.createElement("form", {
        onSubmit: function(e) {
            e.preventDefault();
            if (newMessage.trim()) {
                onSendMessage(requests[currentRequestIndex].id, newMessage);
                setNewMessage("");
            }
        },
        className: "flex gap-2 mt-4"
    }, /* @__PURE__ */ import_react9.default.createElement("input", {
        type: "text",
        value: newMessage,
        onChange: function(e) {
            return setNewMessage(e.target.value);
        },
        placeholder: "Type your message...",
        className: "flex-1 p-2 border-2 border-[#4B7163] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6AB098]"
    }), /* @__PURE__ */ import_react9.default.createElement(CustomButton, {
        type: "submit",
        disabled: !newMessage.trim(),
        className: "bg-[#4B7163] text-white px-4 py-2 rounded-lg hover:bg-[#3A5A4F]"
    }, "Send")))));
};
// src/components/ProductCard.tsx
var import_react11 = __toESM(require("react"));
// src/components/Tag.tsx
var import_react10 = __toESM(require("react"));
var import_lucide_react9 = require("lucide-react");
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
    return /* @__PURE__ */ import_react10.default.createElement("div", {
        className: cn("inline-flex items-center", "h-7 pl-1 pr-3", "rounded-full", "font-poppins font-semibold text-sm", "bg-[#F8FAF9]", "border-2", "transition-all duration-200", styles.border, styles.text, className)
    }, onDelete && /* @__PURE__ */ import_react10.default.createElement("div", {
        className: "flex items-center"
    }, /* @__PURE__ */ import_react10.default.createElement("button", {
        type: "button",
        onClick: onDelete,
        className: cn("flex items-center justify-center", "w-5 h-5 rounded-full mr-1", "transition-colors duration-200", styles.deleteButton, "focus:outline-none focus:ring-2 focus:ring-offset-1"),
        "aria-label": "Remove ".concat(text)
    }, /* @__PURE__ */ import_react10.default.createElement(import_lucide_react9.X, {
        className: "h-3 w-3 text-white"
    }))), /* @__PURE__ */ import_react10.default.createElement("span", {
        className: "truncate"
    }, text));
};
// src/components/ProductCard.tsx
var import_lucide_react10 = require("lucide-react");
var ProductCard = function(param) {
    var imageUrl = param.imageUrl, title = param.title, category = param.category, description = param.description, price = param.price, attributes = param.attributes, onAddToCart = param.onAddToCart, className = param.className;
    return /* @__PURE__ */ import_react11.default.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", "flex flex-col", className)
    }, /* @__PURE__ */ import_react11.default.createElement("div", {
        className: "w-full h-[200px] rounded-xl overflow-hidden mb-6"
    }, /* @__PURE__ */ import_react11.default.createElement("img", {
        src: imageUrl,
        alt: title,
        className: "w-full h-full object-cover"
    })), /* @__PURE__ */ import_react11.default.createElement("div", {
        className: "flex flex-col flex-grow"
    }, /* @__PURE__ */ import_react11.default.createElement("div", {
        className: "flex-grow space-y-4"
    }, /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("span", {
        className: "text-sm font-sourceSans text-[#5A7C6F] mb-1 block"
    }, category), /* @__PURE__ */ import_react11.default.createElement("h3", {
        className: "font-rockwell text-2xl text-[#4B7163]"
    }, title)), /* @__PURE__ */ import_react11.default.createElement("p", {
        className: "font-sourceSans text-gray-600 text-base"
    }, description), /* @__PURE__ */ import_react11.default.createElement("div", {
        className: "flex flex-wrap gap-2"
    }, attributes.map(function(attr, index) {
        return /* @__PURE__ */ import_react11.default.createElement(Tag, {
            key: index,
            text: attr,
            variant: "secondary"
        });
    }))), /* @__PURE__ */ import_react11.default.createElement("div", {
        className: "flex items-center justify-between pt-6 mt-6 border-t border-gray-100"
    }, /* @__PURE__ */ import_react11.default.createElement("div", {
        className: "flex items-baseline gap-1"
    }, /* @__PURE__ */ import_react11.default.createElement("span", {
        className: "font-rockwell text-3xl text-[#4B7163]"
    }, "$", price.toFixed(2)), /* @__PURE__ */ import_react11.default.createElement("span", {
        className: "font-sourceSans text-sm text-gray-500"
    }, "USD")), /* @__PURE__ */ import_react11.default.createElement(CustomButton, {
        onClick: onAddToCart,
        className: "flex items-center gap-2 px-6"
    }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react10.ShoppingCart, {
        className: "h-4 w-4"
    }), "Add to Cart"))));
};
// src/components/ShoppingCart.tsx
var import_react12 = __toESM(require("react"));
var import_lucide_react11 = require("lucide-react");
var ShoppingCart2 = function(param) {
    var initialItems = param.items, onRemoveItem = param.onRemoveItem, onCheckout = param.onCheckout, className = param.className;
    var _ref = _sliced_to_array((0, import_react12.useState)(initialItems), 2), items = _ref[0], setItems = _ref[1];
    (0, import_react12.useEffect)(function() {
        setItems(initialItems);
    }, [
        initialItems
    ]);
    var subtotal = items.reduce(function(sum, item) {
        return sum + item.price;
    }, 0);
    var tax = subtotal * 0.0825;
    var total = subtotal + tax;
    return /* @__PURE__ */ import_react12.default.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", "flex flex-col", className)
    }, /* @__PURE__ */ import_react12.default.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-6"
    }, "Shopping Cart (", items.length, " ", items.length === 1 ? "item" : "items", ")"), items.length === 0 ? /* @__PURE__ */ import_react12.default.createElement("div", {
        className: "text-center py-8 text-gray-500 font-sourceSans"
    }, "Your cart is empty") : /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement("div", {
        className: "flex-grow space-y-6 mb-6"
    }, items.map(function(item) {
        return /* @__PURE__ */ import_react12.default.createElement("div", {
            key: item.id,
            className: "flex gap-4 pb-6 border-b border-gray-100 last:border-b-0"
        }, /* @__PURE__ */ import_react12.default.createElement("div", {
            className: "w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
        }, /* @__PURE__ */ import_react12.default.createElement("img", {
            src: item.imageUrl,
            alt: item.name,
            className: "w-full h-full object-cover"
        })), /* @__PURE__ */ import_react12.default.createElement("div", {
            className: "flex-grow min-w-0"
        }, /* @__PURE__ */ import_react12.default.createElement("div", {
            className: "flex justify-between items-start gap-2"
        }, /* @__PURE__ */ import_react12.default.createElement("div", null, /* @__PURE__ */ import_react12.default.createElement("h3", {
            className: "font-rockwell text-lg text-[#4B7163] mb-1"
        }, item.name), /* @__PURE__ */ import_react12.default.createElement("p", {
            className: "text-sm text-gray-600 font-sourceSans"
        }, item.description)), /* @__PURE__ */ import_react12.default.createElement("button", {
            onClick: function() {
                return onRemoveItem(item.id);
            },
            className: "text-gray-400 hover:text-gray-600 transition-colors p-1",
            "aria-label": "Remove ".concat(item.name, " from cart")
        }, /* @__PURE__ */ import_react12.default.createElement(import_lucide_react11.X, {
            className: "h-5 w-5"
        }))), /* @__PURE__ */ import_react12.default.createElement("div", {
            className: "flex justify-end items-center mt-4"
        }, /* @__PURE__ */ import_react12.default.createElement("span", {
            className: "font-rockwell text-lg text-[#4B7163]"
        }, "$", item.price.toFixed(2)))));
    })), /* @__PURE__ */ import_react12.default.createElement("div", {
        className: "bg-[#F8FAF9] rounded-xl p-4 space-y-3"
    }, /* @__PURE__ */ import_react12.default.createElement("div", {
        className: "flex justify-between font-sourceSans text-[#5A7C6F]"
    }, /* @__PURE__ */ import_react12.default.createElement("span", null, "Subtotal"), /* @__PURE__ */ import_react12.default.createElement("span", null, "$", subtotal.toFixed(2))), /* @__PURE__ */ import_react12.default.createElement("div", {
        className: "flex justify-between font-sourceSans text-[#5A7C6F]"
    }, /* @__PURE__ */ import_react12.default.createElement("span", null, "Tax (8.25%)"), /* @__PURE__ */ import_react12.default.createElement("span", null, "$", tax.toFixed(2))), /* @__PURE__ */ import_react12.default.createElement("div", {
        className: "border-t border-[#5A7C6F]/20 pt-3"
    }, /* @__PURE__ */ import_react12.default.createElement("div", {
        className: "flex justify-between font-rockwell text-xl text-[#4B7163]"
    }, /* @__PURE__ */ import_react12.default.createElement("span", null, "Total"), /* @__PURE__ */ import_react12.default.createElement("span", null, "$", total.toFixed(2))))), /* @__PURE__ */ import_react12.default.createElement(CustomButton, {
        onClick: onCheckout,
        className: "w-full mt-6",
        variant: "cta"
    }, "Proceed to Checkout")));
};
// src/components/SwipeCardDeck.tsx
var import_react13 = __toESM(require("react"));
var SwipeCardDeck = function(param) {
    var cards = param.cards, onSwipeLeft = param.onSwipeLeft, onSwipeRight = param.onSwipeRight, onEmpty = param.onEmpty;
    var _ref = _sliced_to_array((0, import_react13.useState)(cards), 2), currentCards = _ref[0], setCurrentCards = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react13.useState)([]), 2), history = _ref1[0], setHistory = _ref1[1];
    (0, import_react13.useEffect)(function() {
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
    return /* @__PURE__ */ import_react13.default.createElement("div", {
        className: "relative w-full max-w-[300px] mx-auto h-[400px]"
    }, /* @__PURE__ */ import_react13.default.createElement("div", {
        className: "relative w-full h-full"
    }, currentCards.map(function(card, index) {
        var isTop = index === currentCards.length - 1;
        return /* @__PURE__ */ import_react13.default.createElement(SwipeCard, {
            key: card.id,
            imageUrl: card.imageUrl,
            alt: card.alt,
            isVisible: index >= currentCards.length - 3,
            onSwipe: function(direction) {
                return handleSwipe(direction, card);
            }
        }, card.content);
    })), history.length > 0 && /* @__PURE__ */ import_react13.default.createElement("button", {
        onClick: undoLastSwipe,
        className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-4 \n                     px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600\n                     hover:bg-gray-200 transition-colors"
    }, "Undo"));
};
// src/components/Toggle.tsx
var React17 = __toESM(require("react"));
var import_framer_motion2 = require("framer-motion");
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
    return /* @__PURE__ */ React17.createElement(import_framer_motion2.motion.button, {
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
    }, /* @__PURE__ */ React17.createElement(import_framer_motion2.motion.span, {
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
// src/components/Header.tsx
var import_react14 = __toESM(require("react"));
var import_image = __toESM(require("next/image"));
var import_lucide_react12 = require("lucide-react");
var Header = function(param) {
    var menuItems = param.menuItems, logo = param.logo;
    return /* @__PURE__ */ import_react14.default.createElement("header", {
        className: "sticky top-0 z-50 w-full bg-[#4B7163] text-white shadow-lg"
    }, /* @__PURE__ */ import_react14.default.createElement("div", {
        className: "w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
    }, /* @__PURE__ */ import_react14.default.createElement("div", {
        className: "h-16 flex items-center justify-between"
    }, /* @__PURE__ */ import_react14.default.createElement("div", {
        className: "flex shrink-0 items-center"
    }, logo && /* @__PURE__ */ import_react14.default.createElement(import_image.default, {
        src: logo.src,
        alt: logo.alt,
        width: logo.width || 300,
        height: logo.height || 75,
        className: "h-16 w-auto",
        priority: true
    })), /* @__PURE__ */ import_react14.default.createElement("div", {
        className: "flex md:hidden"
    }, /* @__PURE__ */ import_react14.default.createElement(Sheet, null, /* @__PURE__ */ import_react14.default.createElement(SheetTrigger, {
        asChild: true
    }, /* @__PURE__ */ import_react14.default.createElement(Button, {
        variant: "ghost",
        size: "icon",
        className: "text-white hover:bg-[#5a8575]"
    }, /* @__PURE__ */ import_react14.default.createElement(import_lucide_react12.Menu, {
        className: "h-6 w-6"
    }))), /* @__PURE__ */ import_react14.default.createElement(SheetContent, {
        side: "right",
        className: "w-[80%] sm:w-[400px] bg-[#4B7163] border-l-white/20"
    }, /* @__PURE__ */ import_react14.default.createElement("nav", {
        className: "flex flex-col space-y-4 mt-8"
    }, menuItems.map(function(item) {
        return /* @__PURE__ */ import_react14.default.createElement("a", {
            key: item.label,
            href: item.href,
            className: "text-white text-lg hover:text-white/80 transition-colors p-2"
        }, item.label);
    }))))), /* @__PURE__ */ import_react14.default.createElement("nav", {
        className: "hidden md:flex items-center space-x-8"
    }, menuItems.map(function(item) {
        return /* @__PURE__ */ import_react14.default.createElement("a", {
            key: item.label,
            href: item.href,
            className: "text-sm font-medium hover:text-gray-300 transition-colors"
        }, item.label);
    })))));
};
// src/components/Footer.tsx
var Footer = function() {
    return /* @__PURE__ */ React.createElement("footer", {
        className: "w-full bg-[#4B7163] text-white py-6 mt-auto"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
    }, /* @__PURE__ */ React.createElement("p", {
        className: "text-center"
    }, "\xA9 2024 gone.com Component Library. All rights reserved.")));
};
// src/components/page.tsx
var Page = function(param) {
    var children = param.children;
    return /* @__PURE__ */ React.createElement("div", {
        className: "min-h-screen flex flex-col"
    }, children);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Button: Button,
    Card: Card,
    CustomButton: CustomButton,
    Footer: Footer,
    FormDropdown: FormDropdown,
    FormInput: FormInput,
    Header: Header,
    MessageBubble: MessageBubble,
    Page: Page,
    PickupRequestForm: PickupRequestForm,
    PickupRequestManager: PickupRequestManager,
    ProductCard: ProductCard,
    Progress: Progress,
    Sheet: Sheet,
    SheetContent: SheetContent,
    SheetTrigger: SheetTrigger,
    ShoppingCart: ShoppingCart,
    SwipeCardDeck: SwipeCardDeck,
    Tag: Tag,
    Toggle: Toggle
});
//# sourceMappingURL=index.js.map