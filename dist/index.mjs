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
// src/components/sheet.tsx
import * as React3 from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva as cva2 } from "class-variance-authority";
import { X } from "lucide-react";
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
var sheetVariants = cva2("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
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
    }, /* @__PURE__ */ React3.createElement(X, {
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
import React4 from "react";
var Card = function(param) {
    var imageUrl = param.imageUrl, alt = param.alt, children = param.children;
    return /* @__PURE__ */ React4.createElement("div", {
        className: "card-custom"
    }, /* @__PURE__ */ React4.createElement("div", {
        className: "card-custom-image"
    }, /* @__PURE__ */ React4.createElement("img", {
        src: imageUrl,
        alt: alt,
        className: "w-full h-full object-cover"
    })), /* @__PURE__ */ React4.createElement("div", {
        className: "w-full"
    }, children));
};
// src/components/CustomButton.tsx
import React5 from "react";
import { cva as cva3 } from "class-variance-authority";
var buttonVariants2 = cva3("flex items-center justify-center text-base font-poppins rounded-md transition-colors duration-200 ease-in-out px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed", {
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
    return /* @__PURE__ */ React5.createElement("button", _object_spread({
        className: cn(buttonVariants2({
            variant: variant,
            size: size,
            className: className
        }))
    }, props), children);
};
// src/components/FormDropdown.tsx
import React6 from "react";
import { Check, X as X2, AlertCircle, ChevronDown } from "lucide-react";
var stateStyles = {
    normal: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: null
    },
    completed: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: /* @__PURE__ */ React6.createElement(Check, {
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
        icon: /* @__PURE__ */ React6.createElement(AlertCircle, {
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
var FormDropdown = React6.forwardRef(function(_param, ref) {
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
    return /* @__PURE__ */ React6.createElement("div", {
        className: "space-y-1.5"
    }, /* @__PURE__ */ React6.createElement("label", {
        className: cn("block text-sm font-medium uppercase", styles.text)
    }, label), /* @__PURE__ */ React6.createElement("div", {
        className: "relative"
    }, /* @__PURE__ */ React6.createElement("select", _object_spread({
        ref: ref,
        disabled: disabled,
        value: value,
        onChange: function(e) {
            return onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
        },
        className: cn("w-full px-3 py-2 pr-10", "rounded-[4px]", "border-2", "font-poppins text-base", "appearance-none", "focus:outline-none focus:ring-2 focus:ring-offset-1", styles.border, disabled && "bg-gray-50 cursor-not-allowed", className)
    }, props), options.map(function(option) {
        return /* @__PURE__ */ React6.createElement("option", {
            key: option.value,
            value: option.value
        }, option.label);
    })), /* @__PURE__ */ React6.createElement("div", {
        className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none"
    }, styles.icon && /* @__PURE__ */ React6.createElement("div", {
        className: cn("rounded-full w-4 h-4 mr-2", "flex items-center justify-center", styles.iconBg)
    }, styles.icon), /* @__PURE__ */ React6.createElement(ChevronDown, {
        className: cn("h-5 w-5", styles.text)
    }))), hint && /* @__PURE__ */ React6.createElement("p", {
        className: cn("text-sm", styles.text)
    }, hint));
});
FormDropdown.displayName = "FormDropdown";
// src/components/FormInput.tsx
import React7 from "react";
import { Check as Check2, X as X3, AlertCircle as AlertCircle2 } from "lucide-react";
var stateStyles2 = {
    normal: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: null
    },
    completed: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: /* @__PURE__ */ React7.createElement(Check2, {
            className: "h-3 w-3 text-white"
        }),
        iconBg: "bg-[#5A7C6F]"
    },
    error: {
        border: "border-red-500",
        text: "text-red-500",
        icon: /* @__PURE__ */ React7.createElement(X3, {
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
        icon: /* @__PURE__ */ React7.createElement(AlertCircle2, {
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
var FormInput = React7.forwardRef(function(_param, ref) {
    var label = _param.label, hint = _param.hint, _param_state = _param.state, state = _param_state === void 0 ? "normal" : _param_state, className = _param.className, disabled = _param.disabled, value = _param.value, onChange = _param.onChange, props = _object_without_properties(_param, [
        "label",
        "hint",
        "state",
        "className",
        "disabled",
        "value",
        "onChange"
    ]);
    var currentState = disabled ? "disabled" : state;
    var styles = stateStyles2[currentState];
    return /* @__PURE__ */ React7.createElement("div", {
        className: "space-y-1.5"
    }, /* @__PURE__ */ React7.createElement("label", {
        className: cn("block text-sm font-medium uppercase", styles.text)
    }, label), /* @__PURE__ */ React7.createElement("div", {
        className: "relative"
    }, /* @__PURE__ */ React7.createElement("input", _object_spread({
        ref: ref,
        disabled: disabled,
        className: cn("w-full px-3 py-2", "rounded-[4px]", "border-2", "font-poppins text-base", "placeholder:text-[#5A7C6F]/60", "focus:outline-none focus:ring-2 focus:ring-offset-1", styles.border, disabled && "bg-gray-50 cursor-not-allowed", className),
        value: value,
        onChange: function(e) {
            return onChange(e.target.value);
        }
    }, props)), styles.icon && /* @__PURE__ */ React7.createElement("div", {
        className: cn("absolute right-3 top-1/2 -translate-y-1/2", "rounded-full w-4 h-4", "flex items-center justify-center", styles.iconBg)
    }, styles.icon)), hint && /* @__PURE__ */ React7.createElement("p", {
        className: cn("text-sm", styles.text)
    }, hint));
});
FormInput.displayName = "FormInput";
// src/components/MessageBubble.tsx
import React8 from "react";
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
    return /* @__PURE__ */ React8.createElement("div", {
        className: "message-bubble p-4 mb-4 ".concat(getStateClasses(), " ").concat(className)
    }, children);
};
// src/components/PickupRequestForm.tsx
import React10, { useState } from "react";
// src/components/Progress.tsx
import React9 from "react";
import { Check as Check3 } from "lucide-react";
var Progress = function(param) {
    var steps = param.steps, currentStep = param.currentStep;
    return /* @__PURE__ */ React9.createElement("div", {
        className: "relative flex items-center justify-between w-full max-w-2xl mx-auto px-[12.5px]"
    }, /* @__PURE__ */ React9.createElement("div", {
        className: "absolute top-[12.5px] left-[37.5px] right-[37.5px] h-[3px] z-0",
        style: {
            backgroundColor: "rgba(90, 124, 111, 1.0)"
        }
    }), /* @__PURE__ */ React9.createElement("div", {
        className: "absolute top-[12.5px] left-[37.5px] h-[3px] z-0 transition-all duration-300 ease-in-out",
        style: {
            backgroundColor: "#5A7C6F",
            width: "".concat(Math.max(0, Math.min(100, (currentStep - 1) / (steps.length - 1) * 100)), "%"),
            maxWidth: "calc(100% - ".concat(25, "px)")
        }
    }), /* @__PURE__ */ React9.createElement("div", {
        className: "relative z-10 flex items-center justify-between w-full"
    }, steps.map(function(step, index) {
        return /* @__PURE__ */ React9.createElement("div", {
            key: index,
            className: "flex flex-col items-center"
        }, /* @__PURE__ */ React9.createElement("div", {
            className: "\n                w-[25px] h-[25px] rounded-full \n                flex items-center justify-center\n                border-[3px] border-[#5A7C6F]\n                transition-colors duration-300 ease-in-out\n                ".concat(index < currentStep ? "bg-[#5A7C6F]" : "bg-white", "\n              ")
        }, index < currentStep && /* @__PURE__ */ React9.createElement(Check3, {
            className: "w-4 h-4 text-white"
        })), /* @__PURE__ */ React9.createElement("span", {
            className: "mt-2 text-sm text-center"
        }, step));
    })));
};
// src/components/PickupRequestForm.tsx
import { Upload, Info, ChevronLeft, ChevronRight } from "lucide-react";
var PickupRequestForm = function(param) {
    var onSubmit = param.onSubmit, className = param.className;
    var _useState = _sliced_to_array(useState(1), 2), currentStep = _useState[0], setCurrentStep = _useState[1];
    var _useState1 = _sliced_to_array(useState([]), 2), uploadedItems = _useState1[0], setUploadedItems = _useState1[1];
    var _useState2 = _sliced_to_array(useState([]), 2), availableTimes = _useState2[0], setAvailableTimes = _useState2[1];
    var _useState3 = _sliced_to_array(useState(""), 2), address = _useState3[0], setAddress = _useState3[1];
    var steps = [
        "Upload Photos",
        "Item Details",
        "Pickup Time",
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
                return /* @__PURE__ */ React10.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ React10.createElement("div", {
                    className: "border-2 border-dashed border-[#5A7C6F] rounded-xl p-8 text-center"
                }, /* @__PURE__ */ React10.createElement("input", {
                    type: "file",
                    id: "photo-upload",
                    multiple: true,
                    accept: "image/*",
                    className: "hidden",
                    onChange: handleFileUpload
                }), /* @__PURE__ */ React10.createElement("label", {
                    htmlFor: "photo-upload",
                    className: "cursor-pointer space-y-4 block"
                }, /* @__PURE__ */ React10.createElement(Upload, {
                    className: "h-12 w-12 mx-auto text-[#5A7C6F]"
                }), /* @__PURE__ */ React10.createElement("div", {
                    className: "font-sourceSans"
                }, /* @__PURE__ */ React10.createElement("p", {
                    className: "text-lg font-semibold text-[#4B7163]"
                }, "Drop photos here or click to upload"), /* @__PURE__ */ React10.createElement("p", {
                    className: "text-sm text-[#5A7C6F]"
                }, "Upload clear photos of each item you'd like us to pick up")))), uploadedItems.length > 0 && /* @__PURE__ */ React10.createElement("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 gap-4"
                }, uploadedItems.map(function(item) {
                    return /* @__PURE__ */ React10.createElement("div", {
                        key: item.id,
                        className: "aspect-square rounded-lg overflow-hidden border-2 border-[#5A7C6F]"
                    }, /* @__PURE__ */ React10.createElement("img", {
                        src: item.imageUrl,
                        alt: "Uploaded item",
                        className: "w-full h-full object-cover"
                    }));
                })));
            case 2:
                return /* @__PURE__ */ React10.createElement("div", {
                    className: "space-y-6"
                }, uploadedItems.map(function(item) {
                    return /* @__PURE__ */ React10.createElement("div", {
                        key: item.id,
                        className: "flex gap-4 p-4 bg-[#F8FAF9] rounded-xl"
                    }, /* @__PURE__ */ React10.createElement("div", {
                        className: "w-32 h-32 rounded-lg overflow-hidden flex-shrink-0"
                    }, /* @__PURE__ */ React10.createElement("img", {
                        src: item.imageUrl,
                        alt: "Item",
                        className: "w-full h-full object-cover"
                    })), /* @__PURE__ */ React10.createElement("div", {
                        className: "flex-grow"
                    }, /* @__PURE__ */ React10.createElement(FormInput, {
                        label: "Item Description",
                        placeholder: "Describe the item, including condition and any relevant details",
                        value: item.description || "",
                        onChange: function(value) {
                            return handleItemDescription(item.id, value);
                        }
                    })));
                }));
            case 3:
                return /* @__PURE__ */ React10.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ React10.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ React10.createElement("h3", {
                    className: "font-rockwell text-lg text-[#4B7163] mb-4"
                }, "Available Pickup Times"), /* @__PURE__ */ React10.createElement("div", {
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
                    return /* @__PURE__ */ React10.createElement("button", {
                        key: time,
                        onClick: function() {
                            return handleTimeSelection(time);
                        },
                        className: cn("p-3 rounded-lg border-2 font-sourceSans transition-colors", availableTimes.includes(time) ? "border-[#6AB098] bg-[#6AB098] text-white" : "border-[#5A7C6F] text-[#5A7C6F] hover:bg-[#F0F4F2]")
                    }, time);
                }))));
            case 4:
                return /* @__PURE__ */ React10.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ React10.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ React10.createElement(FormInput, {
                    label: "Pickup Address",
                    placeholder: "Enter the complete address where items will be picked up",
                    value: address,
                    onChange: function(value) {
                        return setAddress(value);
                    }
                }), /* @__PURE__ */ React10.createElement("p", {
                    className: "mt-2 text-sm text-[#5A7C6F] flex items-center gap-2"
                }, /* @__PURE__ */ React10.createElement(Info, {
                    className: "h-4 w-4"
                }), "Please ensure the address is accurate and items will be accessible")));
            default:
                return null;
        }
    };
    var canProceed = function() {
        switch(currentStep){
            case 1:
                return uploadedItems.length > 0;
            case 2:
                return uploadedItems.every(function(item) {
                    return item.description;
                });
            case 3:
                return availableTimes.length > 0;
            case 4:
                return address.trim().length > 0;
            default:
                return false;
        }
    };
    var handleNext = function() {
        if (currentStep === 4) {
            onSubmit({
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
    return /* @__PURE__ */ React10.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", className)
    }, /* @__PURE__ */ React10.createElement("div", {
        className: "mb-8"
    }, /* @__PURE__ */ React10.createElement(Progress, {
        steps: steps,
        currentStep: currentStep
    })), /* @__PURE__ */ React10.createElement("div", {
        className: "mb-8"
    }, /* @__PURE__ */ React10.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-6"
    }, steps[currentStep - 1]), renderStepContent()), /* @__PURE__ */ React10.createElement("div", {
        className: "flex justify-between"
    }, currentStep > 1 && /* @__PURE__ */ React10.createElement(CustomButton, {
        variant: "secondary",
        onClick: function() {
            return setCurrentStep(function(prev) {
                return prev - 1;
            });
        },
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React10.createElement(ChevronLeft, {
        className: "h-4 w-4"
    }), "Back"), /* @__PURE__ */ React10.createElement(CustomButton, {
        onClick: handleNext,
        disabled: !canProceed(),
        className: "flex items-center gap-2 ml-auto"
    }, currentStep === 4 ? "Submit Request" : "Continue", currentStep < 4 && /* @__PURE__ */ React10.createElement(ChevronRight, {
        className: "h-4 w-4"
    }))));
};
// src/components/PickupRequestManager.tsx
import React12, { useState as useState3 } from "react";
// src/components/SwipeCard.tsx
import React11, { useState as useState2 } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Check as Check4, X as X4 } from "lucide-react";
var SwipeCard = function(param) {
    var imageUrl = param.imageUrl, alt = param.alt, children = param.children, onSwipe = param.onSwipe, _param_isVisible = param.isVisible, isVisible = _param_isVisible === void 0 ? true : _param_isVisible;
    var _useState2 = _sliced_to_array(useState2(0), 2), exitX = _useState2[0], setExitX = _useState2[1];
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
    var rightBgOpacity = useTransform(x, [
        0,
        125
    ], [
        0,
        1
    ]);
    var leftBgOpacity = useTransform(x, [
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
    return /* @__PURE__ */ React11.createElement(motion.div, {
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
    }, /* @__PURE__ */ React11.createElement(motion.div, {
        className: "absolute inset-0 bg-green-500/20 rounded-2xl z-10",
        style: {
            opacity: rightBgOpacity
        }
    }, /* @__PURE__ */ React11.createElement("div", {
        className: "absolute top-1/2 right-8 transform -translate-y-1/2"
    }, /* @__PURE__ */ React11.createElement(Check4, {
        className: "w-12 h-12 text-green-500"
    }))), /* @__PURE__ */ React11.createElement(motion.div, {
        className: "absolute inset-0 bg-red-500/20 rounded-2xl z-10",
        style: {
            opacity: leftBgOpacity
        }
    }, /* @__PURE__ */ React11.createElement("div", {
        className: "absolute top-1/2 left-8 transform -translate-y-1/2"
    }, /* @__PURE__ */ React11.createElement(X4, {
        className: "w-12 h-12 text-red-500"
    }))), /* @__PURE__ */ React11.createElement("div", {
        className: "bg-white rounded-2xl border border-[#4B7163] p-4 flex flex-col items-center"
    }, /* @__PURE__ */ React11.createElement("div", {
        className: "w-[250px] h-[250px] rounded-2xl overflow-hidden mb-4"
    }, /* @__PURE__ */ React11.createElement("img", {
        src: imageUrl,
        alt: alt,
        className: "w-full h-full object-cover"
    })), /* @__PURE__ */ React11.createElement("div", {
        className: "w-full"
    }, children)));
};
// src/components/PickupRequestManager.tsx
import { Mail, Phone, Calendar as Calendar2, MapPin as MapPin2, X as X5, Check as Check5, MessageCircle } from "lucide-react";
var PickupRequestManager = function(param) {
    var customerName = param.customerName, customerEmail = param.customerEmail, customerPhone = param.customerPhone, initialItems = param.items, onAcceptItem = param.onAcceptItem, onRejectItem = param.onRejectItem, onSendMessage = param.onSendMessage;
    var _useState3 = _sliced_to_array(useState3(initialItems), 2), items = _useState3[0], setItems = _useState3[1];
    var _useState31 = _sliced_to_array(useState3([
        {
            id: "1",
            type: "incoming",
            message: "Hi, I have several items to donate. When can you come pick them up?",
            timestamp: /* @__PURE__ */ new Date("2024-02-10T10:00:00")
        },
        {
            id: "2",
            type: "outgoing",
            message: "Hello! Thanks for reaching out. We'd be happy to help. I see you've listed several available dates. Would Wednesday 2/14 AM work best for you?",
            timestamp: /* @__PURE__ */ new Date("2024-02-10T10:15:00")
        },
        {
            id: "3",
            type: "incoming",
            message: "Yes, Wednesday morning would be perfect! What time do you typically arrive?",
            timestamp: /* @__PURE__ */ new Date("2024-02-10T10:20:00")
        },
        {
            id: "4",
            type: "outgoing",
            message: "We usually start pickups at 9:00 AM. We'll send you a confirmation once we've reviewed all your items. Each one looks great so far!",
            timestamp: /* @__PURE__ */ new Date("2024-02-10T10:25:00")
        },
        {
            id: "5",
            type: "incoming",
            message: "9:00 AM works great. I'll make sure everything is ready and easily accessible.",
            timestamp: /* @__PURE__ */ new Date("2024-02-10T10:30:00")
        }
    ]), 1), messages = _useState31[0];
    var _useState32 = _sliced_to_array(useState3(""), 2), newMessage = _useState32[0], setNewMessage = _useState32[1];
    var handleSwipe = function(direction, item) {
        if (direction === "right") {
            onAcceptItem(item.id);
        } else {
            onRejectItem(item.id);
        }
        setItems(function(prevItems) {
            return prevItems.filter(function(i) {
                return i.id !== item.id;
            });
        });
    };
    return /* @__PURE__ */ React12.createElement("div", {
        className: "max-w-4xl mx-auto space-y-8"
    }, /* @__PURE__ */ React12.createElement("div", {
        className: "bg-white rounded-2xl border-2 border-[#4B7163] p-6"
    }, /* @__PURE__ */ React12.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-4"
    }, customerName), /* @__PURE__ */ React12.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-1 gap-4"
    }, /* @__PURE__ */ React12.createElement("div", {
        className: "flex items-center gap-2 text-[#5A7C6F]"
    }, /* @__PURE__ */ React12.createElement(Mail, {
        className: "h-5 w-5"
    }), /* @__PURE__ */ React12.createElement("span", {
        className: "font-sourceSans"
    }, customerEmail)), /* @__PURE__ */ React12.createElement("div", {
        className: "flex items-center gap-2 text-[#5A7C6F]"
    }, /* @__PURE__ */ React12.createElement(Phone, {
        className: "h-5 w-5"
    }), /* @__PURE__ */ React12.createElement("span", {
        className: "font-sourceSans"
    }, customerPhone)))), /* @__PURE__ */ React12.createElement("div", {
        className: "bg-white rounded-2xl border-2 border-[#4B7163] p-6"
    }, /* @__PURE__ */ React12.createElement("h3", {
        className: "font-rockwell text-xl text-[#4B7163] mb-4"
    }, "Items to Review (", items.length, ")"), /* @__PURE__ */ React12.createElement("div", {
        className: "relative h-[500px]"
    }, items.map(function(item, index) {
        return /* @__PURE__ */ React12.createElement(SwipeCard, {
            key: item.id,
            imageUrl: item.imageUrl,
            alt: item.title || "Pickup request item",
            isVisible: index === items.length - 1,
            onSwipe: function(direction) {
                return handleSwipe(direction, item);
            }
        }, /* @__PURE__ */ React12.createElement("div", {
            className: "space-y-4"
        }, /* @__PURE__ */ React12.createElement("p", {
            className: "font-sourceSans text-gray-600"
        }, item.description), /* @__PURE__ */ React12.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ React12.createElement("div", {
            className: "flex items-center gap-2 text-[#5A7C6F]"
        }, /* @__PURE__ */ React12.createElement(MapPin2, {
            className: "h-4 w-4"
        }), /* @__PURE__ */ React12.createElement("span", {
            className: "text-sm"
        }, item.location)), /* @__PURE__ */ React12.createElement("div", {
            className: "flex items-center gap-2 text-[#5A7C6F]"
        }, /* @__PURE__ */ React12.createElement(Calendar2, {
            className: "h-4 w-4"
        }), /* @__PURE__ */ React12.createElement("span", {
            className: "text-sm"
        }, "Available: ", item.availableDates.join(", "))))));
    }), /* @__PURE__ */ React12.createElement("div", {
        className: "absolute bottom-0 left-0 right-0 flex justify-center gap-8 pb-4 text-sm text-gray-500"
    }, /* @__PURE__ */ React12.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ React12.createElement(X5, {
        className: "h-4 w-4 text-red-500"
    }), " Swipe left to reject"), /* @__PURE__ */ React12.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ React12.createElement(Check5, {
        className: "h-4 w-4 text-green-500"
    }), " Swipe right to accept")))), /* @__PURE__ */ React12.createElement("div", {
        className: "bg-white rounded-2xl border-2 border-[#4B7163] p-6"
    }, /* @__PURE__ */ React12.createElement("h3", {
        className: "font-rockwell text-xl text-[#4B7163] mb-4"
    }, "Messages"), /* @__PURE__ */ React12.createElement("div", {
        className: "space-y-4 mb-6 max-h-[400px] overflow-y-auto"
    }, messages.map(function(message) {
        return /* @__PURE__ */ React12.createElement(MessageBubble, {
            key: message.id,
            state: message.type === "incoming" ? "secondary" : "primary"
        }, /* @__PURE__ */ React12.createElement("div", {
            className: "space-y-1"
        }, /* @__PURE__ */ React12.createElement("p", {
            className: "font-sourceSans"
        }, message.message), /* @__PURE__ */ React12.createElement("div", {
            className: "text-xs opacity-70"
        }, message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        }))));
    })), /* @__PURE__ */ React12.createElement("div", {
        className: "space-y-4"
    }, /* @__PURE__ */ React12.createElement("textarea", {
        value: newMessage,
        onChange: function(e) {
            return setNewMessage(e.target.value);
        },
        className: "w-full h-24 p-3 border-2 border-[#5A7C6F] rounded-lg font-sourceSans resize-none focus:outline-none focus:ring-2 focus:ring-[#5A7C6F]",
        placeholder: "Type your message here..."
    }), /* @__PURE__ */ React12.createElement(CustomButton, {
        onClick: function() {
            onSendMessage(newMessage);
            setNewMessage("");
        },
        className: "w-full"
    }, /* @__PURE__ */ React12.createElement(MessageCircle, {
        className: "h-4 w-4 mr-2"
    }), "Send Message"))));
};
// src/components/ProductCard.tsx
import React14 from "react";
// src/components/Tag.tsx
import React13 from "react";
import { X as X6 } from "lucide-react";
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
    return /* @__PURE__ */ React13.createElement("div", {
        className: cn("inline-flex items-center", "h-7 pl-1 pr-3", "rounded-full", "font-poppins font-semibold text-sm", "bg-[#F8FAF9]", "border-2", "transition-all duration-200", styles.border, styles.text, className)
    }, onDelete && /* @__PURE__ */ React13.createElement("div", {
        className: "flex items-center"
    }, /* @__PURE__ */ React13.createElement("button", {
        type: "button",
        onClick: onDelete,
        className: cn("flex items-center justify-center", "w-5 h-5 rounded-full mr-1", "transition-colors duration-200", styles.deleteButton, "focus:outline-none focus:ring-2 focus:ring-offset-1"),
        "aria-label": "Remove ".concat(text)
    }, /* @__PURE__ */ React13.createElement(X6, {
        className: "h-3 w-3 text-white"
    }))), /* @__PURE__ */ React13.createElement("span", {
        className: "truncate"
    }, text));
};
// src/components/ProductCard.tsx
import { ShoppingCart } from "lucide-react";
var ProductCard = function(param) {
    var imageUrl = param.imageUrl, title = param.title, category = param.category, description = param.description, price = param.price, attributes = param.attributes, onAddToCart = param.onAddToCart, className = param.className;
    return /* @__PURE__ */ React14.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", "flex flex-col", className)
    }, /* @__PURE__ */ React14.createElement("div", {
        className: "w-full h-[200px] rounded-xl overflow-hidden mb-6"
    }, /* @__PURE__ */ React14.createElement("img", {
        src: imageUrl,
        alt: title,
        className: "w-full h-full object-cover"
    })), /* @__PURE__ */ React14.createElement("div", {
        className: "flex flex-col flex-grow"
    }, /* @__PURE__ */ React14.createElement("div", {
        className: "flex-grow space-y-4"
    }, /* @__PURE__ */ React14.createElement("div", null, /* @__PURE__ */ React14.createElement("span", {
        className: "text-sm font-sourceSans text-[#5A7C6F] mb-1 block"
    }, category), /* @__PURE__ */ React14.createElement("h3", {
        className: "font-rockwell text-2xl text-[#4B7163]"
    }, title)), /* @__PURE__ */ React14.createElement("p", {
        className: "font-sourceSans text-gray-600 text-base"
    }, description), /* @__PURE__ */ React14.createElement("div", {
        className: "flex flex-wrap gap-2"
    }, attributes.map(function(attr, index) {
        return /* @__PURE__ */ React14.createElement(Tag, {
            key: index,
            text: attr,
            variant: "secondary"
        });
    }))), /* @__PURE__ */ React14.createElement("div", {
        className: "flex items-center justify-between pt-6 mt-6 border-t border-gray-100"
    }, /* @__PURE__ */ React14.createElement("div", {
        className: "flex items-baseline gap-1"
    }, /* @__PURE__ */ React14.createElement("span", {
        className: "font-rockwell text-3xl text-[#4B7163]"
    }, "$", price.toFixed(2)), /* @__PURE__ */ React14.createElement("span", {
        className: "font-sourceSans text-sm text-gray-500"
    }, "USD")), /* @__PURE__ */ React14.createElement(CustomButton, {
        onClick: onAddToCart,
        className: "flex items-center gap-2 px-6"
    }, /* @__PURE__ */ React14.createElement(ShoppingCart, {
        className: "h-4 w-4"
    }), "Add to Cart"))));
};
// src/components/ShoppingCart.tsx
import React15, { useState as useState4, useEffect } from "react";
import { X as X7 } from "lucide-react";
var ShoppingCart2 = function(param) {
    var initialItems = param.items, onRemoveItem = param.onRemoveItem, onCheckout = param.onCheckout, className = param.className;
    var _useState4 = _sliced_to_array(useState4(initialItems), 2), items = _useState4[0], setItems = _useState4[1];
    useEffect(function() {
        setItems(initialItems);
    }, [
        initialItems
    ]);
    var subtotal = items.reduce(function(sum, item) {
        return sum + item.price;
    }, 0);
    var tax = subtotal * 0.0825;
    var total = subtotal + tax;
    return /* @__PURE__ */ React15.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", "flex flex-col", className)
    }, /* @__PURE__ */ React15.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-6"
    }, "Shopping Cart (", items.length, " ", items.length === 1 ? "item" : "items", ")"), items.length === 0 ? /* @__PURE__ */ React15.createElement("div", {
        className: "text-center py-8 text-gray-500 font-sourceSans"
    }, "Your cart is empty") : /* @__PURE__ */ React15.createElement(React15.Fragment, null, /* @__PURE__ */ React15.createElement("div", {
        className: "flex-grow space-y-6 mb-6"
    }, items.map(function(item) {
        return /* @__PURE__ */ React15.createElement("div", {
            key: item.id,
            className: "flex gap-4 pb-6 border-b border-gray-100 last:border-b-0"
        }, /* @__PURE__ */ React15.createElement("div", {
            className: "w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
        }, /* @__PURE__ */ React15.createElement("img", {
            src: item.imageUrl,
            alt: item.name,
            className: "w-full h-full object-cover"
        })), /* @__PURE__ */ React15.createElement("div", {
            className: "flex-grow min-w-0"
        }, /* @__PURE__ */ React15.createElement("div", {
            className: "flex justify-between items-start gap-2"
        }, /* @__PURE__ */ React15.createElement("div", null, /* @__PURE__ */ React15.createElement("h3", {
            className: "font-rockwell text-lg text-[#4B7163] mb-1"
        }, item.name), /* @__PURE__ */ React15.createElement("p", {
            className: "text-sm text-gray-600 font-sourceSans"
        }, item.description)), /* @__PURE__ */ React15.createElement("button", {
            onClick: function() {
                return onRemoveItem(item.id);
            },
            className: "text-gray-400 hover:text-gray-600 transition-colors p-1",
            "aria-label": "Remove ".concat(item.name, " from cart")
        }, /* @__PURE__ */ React15.createElement(X7, {
            className: "h-5 w-5"
        }))), /* @__PURE__ */ React15.createElement("div", {
            className: "flex justify-end items-center mt-4"
        }, /* @__PURE__ */ React15.createElement("span", {
            className: "font-rockwell text-lg text-[#4B7163]"
        }, "$", item.price.toFixed(2)))));
    })), /* @__PURE__ */ React15.createElement("div", {
        className: "bg-[#F8FAF9] rounded-xl p-4 space-y-3"
    }, /* @__PURE__ */ React15.createElement("div", {
        className: "flex justify-between font-sourceSans text-[#5A7C6F]"
    }, /* @__PURE__ */ React15.createElement("span", null, "Subtotal"), /* @__PURE__ */ React15.createElement("span", null, "$", subtotal.toFixed(2))), /* @__PURE__ */ React15.createElement("div", {
        className: "flex justify-between font-sourceSans text-[#5A7C6F]"
    }, /* @__PURE__ */ React15.createElement("span", null, "Tax (8.25%)"), /* @__PURE__ */ React15.createElement("span", null, "$", tax.toFixed(2))), /* @__PURE__ */ React15.createElement("div", {
        className: "border-t border-[#5A7C6F]/20 pt-3"
    }, /* @__PURE__ */ React15.createElement("div", {
        className: "flex justify-between font-rockwell text-xl text-[#4B7163]"
    }, /* @__PURE__ */ React15.createElement("span", null, "Total"), /* @__PURE__ */ React15.createElement("span", null, "$", total.toFixed(2))))), /* @__PURE__ */ React15.createElement(CustomButton, {
        onClick: onCheckout,
        className: "w-full mt-6",
        variant: "cta"
    }, "Proceed to Checkout")));
};
// src/components/SwipeCardDeck.tsx
import React16, { useState as useState5, useEffect as useEffect2 } from "react";
var SwipeCardDeck = function(param) {
    var cards = param.cards, onSwipeLeft = param.onSwipeLeft, onSwipeRight = param.onSwipeRight, onEmpty = param.onEmpty;
    var _useState5 = _sliced_to_array(useState5(cards), 2), currentCards = _useState5[0], setCurrentCards = _useState5[1];
    var _useState51 = _sliced_to_array(useState5([]), 2), history = _useState51[0], setHistory = _useState51[1];
    useEffect2(function() {
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
    return /* @__PURE__ */ React16.createElement("div", {
        className: "relative w-full max-w-[300px] mx-auto h-[400px]"
    }, /* @__PURE__ */ React16.createElement("div", {
        className: "relative w-full h-full"
    }, currentCards.map(function(card, index) {
        var isTop = index === currentCards.length - 1;
        return /* @__PURE__ */ React16.createElement(SwipeCard, {
            key: card.id,
            imageUrl: card.imageUrl,
            alt: card.alt,
            isVisible: index >= currentCards.length - 3,
            onSwipe: function(direction) {
                return handleSwipe(direction, card);
            }
        }, card.content);
    })), history.length > 0 && /* @__PURE__ */ React16.createElement("button", {
        onClick: undoLastSwipe,
        className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-4 \n                     px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600\n                     hover:bg-gray-200 transition-colors"
    }, "Undo"));
};
// src/components/Toggle.tsx
import * as React17 from "react";
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
    return /* @__PURE__ */ React17.createElement(motion2.button, {
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
    }, /* @__PURE__ */ React17.createElement(motion2.span, {
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
import React18 from "react";
import NextImage from "next/image";
import { Menu } from "lucide-react";
var Header = function(param) {
    var menuItems = param.menuItems, logo = param.logo;
    return /* @__PURE__ */ React18.createElement("header", {
        className: "sticky top-0 z-50 w-full bg-[#4B7163] text-white shadow-lg"
    }, /* @__PURE__ */ React18.createElement("div", {
        className: "w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
    }, /* @__PURE__ */ React18.createElement("div", {
        className: "h-16 flex items-center justify-between"
    }, /* @__PURE__ */ React18.createElement("div", {
        className: "flex shrink-0 items-center"
    }, logo && /* @__PURE__ */ React18.createElement(NextImage, {
        src: logo.src,
        alt: logo.alt,
        width: logo.width || 300,
        height: logo.height || 75,
        className: "h-16 w-auto",
        priority: true
    })), /* @__PURE__ */ React18.createElement("div", {
        className: "flex md:hidden"
    }, /* @__PURE__ */ React18.createElement(Sheet, null, /* @__PURE__ */ React18.createElement(SheetTrigger, {
        asChild: true
    }, /* @__PURE__ */ React18.createElement(Button, {
        variant: "ghost",
        size: "icon",
        className: "text-white hover:bg-[#5a8575]"
    }, /* @__PURE__ */ React18.createElement(Menu, {
        className: "h-6 w-6"
    }))), /* @__PURE__ */ React18.createElement(SheetContent, {
        side: "right",
        className: "w-[80%] sm:w-[400px] bg-[#4B7163] border-l-white/20"
    }, /* @__PURE__ */ React18.createElement("nav", {
        className: "flex flex-col space-y-4 mt-8"
    }, menuItems.map(function(item) {
        return /* @__PURE__ */ React18.createElement("a", {
            key: item.label,
            href: item.href,
            className: "text-white text-lg hover:text-white/80 transition-colors p-2"
        }, item.label);
    }))))), /* @__PURE__ */ React18.createElement("nav", {
        className: "hidden md:flex items-center space-x-8"
    }, menuItems.map(function(item) {
        return /* @__PURE__ */ React18.createElement("a", {
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
export { Button, Card, CustomButton, Footer, FormDropdown, FormInput, Header, MessageBubble, Page, PickupRequestForm, PickupRequestManager, ProductCard, Progress, Sheet, SheetContent, SheetTrigger, ShoppingCart2 as ShoppingCart, SwipeCardDeck, Tag, Toggle };
//# sourceMappingURL=index.mjs.map