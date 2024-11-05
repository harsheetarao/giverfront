// src/components/AcceptedRequestManager.tsx
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
import React9, { useState as useState3 } from "react";
// src/components/CustomButton.tsx
import React2 from "react";
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
// src/components/CustomButton.tsx
var buttonVariants = cva("flex items-center justify-center text-base font-poppins rounded-md transition-colors duration-200 ease-in-out px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed", {
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
    return /* @__PURE__ */ React2.createElement("button", _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        }))
    }, props), icon, label || children);
};
// src/components/AcceptedRequestManager.tsx
import { Calendar, MapPin as MapPin2, Check as Check3, X as X4, ChevronRight } from "lucide-react";
// src/components/MessageThread.tsx
import React4, { useState } from "react";
import { MessageCircle } from "lucide-react";
// src/components/MessageBubble.tsx
import React3 from "react";
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
    return /* @__PURE__ */ React3.createElement("div", {
        className: "message-bubble p-4 mb-4 ".concat(getStateClasses(), " ").concat(className)
    }, children);
};
// src/components/MessageThread.tsx
var MessageThread = function(param) {
    var messages = param.messages, onSendMessage = param.onSendMessage, onMessageRead = param.onMessageRead, className = param.className;
    var _useState = _sliced_to_array(useState(false), 2), isExpanded = _useState[0], setIsExpanded = _useState[1];
    var _useState1 = _sliced_to_array(useState(""), 2), newMessage = _useState1[0], setNewMessage = _useState1[1];
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
    return /* @__PURE__ */ React4.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", className)
    }, /* @__PURE__ */ React4.createElement("button", {
        onClick: handleExpand,
        className: "w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#F8FAF9]"
    }, /* @__PURE__ */ React4.createElement("div", {
        className: "flex items-center gap-3"
    }, /* @__PURE__ */ React4.createElement(MessageCircle, {
        className: "h-5 w-5 text-[#4B7163]"
    }), /* @__PURE__ */ React4.createElement("span", {
        className: "font-medium text-[#4B7163]"
    }, "Messages"), unreadCount > 0 && /* @__PURE__ */ React4.createElement("span", {
        className: "bg-[#6AB098] text-white text-sm px-2 py-1 rounded-full"
    }, unreadCount, " new")), lastMessage && /* @__PURE__ */ React4.createElement("span", {
        className: "text-sm text-gray-500"
    }, "Last message ", lastMessageTime)), isExpanded && /* @__PURE__ */ React4.createElement("div", {
        className: "mt-4 space-y-4"
    }, messages.map(function(message) {
        return /* @__PURE__ */ React4.createElement("div", {
            key: message.id
        }, /* @__PURE__ */ React4.createElement(MessageBubble, {
            state: message.sender === "admin" ? "secondary" : "primary",
            className: cn(message.sender === "admin" ? "ml-8" : "mr-8")
        }, /* @__PURE__ */ React4.createElement("p", {
            className: "text-[#4B7163]"
        }, message.content), /* @__PURE__ */ React4.createElement("span", {
            className: "text-sm text-gray-500 mt-2 block"
        }, message.timestamp.toLocaleString())));
    }), /* @__PURE__ */ React4.createElement("form", {
        onSubmit: function(e) {
            e.preventDefault();
            if (newMessage.trim()) {
                onSendMessage(newMessage);
                setNewMessage("");
            }
        },
        className: "flex gap-2 mt-4"
    }, /* @__PURE__ */ React4.createElement("input", {
        type: "text",
        value: newMessage,
        onChange: function(e) {
            return setNewMessage(e.target.value);
        },
        placeholder: "Type your message...",
        className: "flex-1 p-2 border-2 border-[#4B7163] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6AB098]"
    }), /* @__PURE__ */ React4.createElement(CustomButton, {
        type: "submit",
        disabled: !newMessage.trim(),
        className: "bg-[#4B7163] text-white px-4 py-2 rounded-lg hover:bg-[#3A5A4F]"
    }, "Send"))));
};
// src/components/FormDropdown.tsx
import React5 from "react";
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
    var currentState = disabled ? "disabled" : state;
    var styles = stateStyles[currentState];
    return /* @__PURE__ */ React5.createElement("div", {
        className: "space-y-1.5"
    }, /* @__PURE__ */ React5.createElement("label", {
        className: cn("block text-sm font-medium uppercase", styles.text)
    }, label), /* @__PURE__ */ React5.createElement("div", {
        className: "relative"
    }, /* @__PURE__ */ React5.createElement("select", _object_spread({
        ref: ref,
        disabled: disabled,
        value: value,
        onChange: function(e) {
            return onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
        },
        className: cn("w-full px-3 py-2", "pr-16", "rounded-[4px]", "border-2", "font-poppins text-base", "appearance-none", "focus:outline-none focus:ring-2 focus:ring-offset-1", styles.border, disabled && "bg-gray-50 cursor-not-allowed", className)
    }, props), options.map(function(option) {
        return /* @__PURE__ */ React5.createElement("option", {
            key: option.value,
            value: option.value
        }, option.label);
    })), /* @__PURE__ */ React5.createElement("div", {
        className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none"
    }, styles.icon && /* @__PURE__ */ React5.createElement("div", {
        className: cn("rounded-full w-4 h-4 mr-2", "flex items-center justify-center", styles.iconBg)
    }, styles.icon), /* @__PURE__ */ React5.createElement(ChevronDown, {
        className: cn("h-5 w-5", styles.text)
    }))), hint && /* @__PURE__ */ React5.createElement("p", {
        className: cn("text-sm", styles.text)
    }, hint));
});
FormDropdown.displayName = "FormDropdown";
// src/components/SwipeCard.tsx
import React6, { useState as useState2 } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Check as Check2, X as X2 } from "lucide-react";
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
    return /* @__PURE__ */ React6.createElement(motion.div, {
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
        whileDrag: {
            cursor: "grabbing"
        },
        initial: {
            x: 0
        }
    }, /* @__PURE__ */ React6.createElement(motion.div, {
        className: "absolute inset-0 bg-green-500/20 rounded-2xl z-10",
        style: {
            opacity: rightBgOpacity
        }
    }, /* @__PURE__ */ React6.createElement("div", {
        className: "absolute top-1/2 right-8 transform -translate-y-1/2"
    }, /* @__PURE__ */ React6.createElement(Check2, {
        className: "w-12 h-12 text-green-500"
    }))), /* @__PURE__ */ React6.createElement(motion.div, {
        className: "absolute inset-0 bg-red-500/20 rounded-2xl z-10",
        style: {
            opacity: leftBgOpacity
        }
    }, /* @__PURE__ */ React6.createElement("div", {
        className: "absolute top-1/2 left-8 transform -translate-y-1/2"
    }, /* @__PURE__ */ React6.createElement(X2, {
        className: "w-12 h-12 text-red-500"
    }))), /* @__PURE__ */ React6.createElement("div", {
        className: "absolute inset-0 bg-white rounded-2xl border border-[#4B7163] p-4 flex flex-col"
    }, /* @__PURE__ */ React6.createElement("div", {
        className: "relative w-full h-3/5 rounded-2xl overflow-hidden mb-4"
    }, /* @__PURE__ */ React6.createElement("img", {
        src: imageUrl,
        alt: alt,
        className: "w-full h-full object-cover"
    })), /* @__PURE__ */ React6.createElement("div", {
        className: "flex-1 overflow-auto"
    }, children)));
};
// src/components/MapModal.tsx
import React8 from "react";
// src/components/Modal.tsx
import React7 from "react";
import { X as X3 } from "lucide-react";
var Modal = function(param) {
    var children = param.children, onClose = param.onClose, className = param.className;
    return /* @__PURE__ */ React7.createElement("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center"
    }, /* @__PURE__ */ React7.createElement("div", {
        className: "absolute inset-0 bg-black/50",
        onClick: onClose
    }), /* @__PURE__ */ React7.createElement("div", {
        className: cn("relative bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto", className)
    }, /* @__PURE__ */ React7.createElement("button", {
        onClick: onClose,
        className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700"
    }, /* @__PURE__ */ React7.createElement(X3, {
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
    return /* @__PURE__ */ React8.createElement(Modal, {
        onClose: onClose
    }, /* @__PURE__ */ React8.createElement("div", {
        className: "p-6"
    }, /* @__PURE__ */ React8.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-4"
    }, "Pickup Location"), /* @__PURE__ */ React8.createElement("div", {
        className: "mb-6"
    }, /* @__PURE__ */ React8.createElement("div", {
        className: "flex items-center gap-2 text-[#5A7C6F] mb-4"
    }, /* @__PURE__ */ React8.createElement(MapPin, {
        className: "h-4 w-4 flex-shrink-0"
    }), /* @__PURE__ */ React8.createElement("p", null, address)), /* @__PURE__ */ React8.createElement("div", {
        className: "relative w-full h-[300px] rounded-xl overflow-hidden mb-4 border-2 border-[#4B7163]"
    }, /* @__PURE__ */ React8.createElement("iframe", {
        width: "100%",
        height: "100%",
        style: {
            border: 0
        },
        loading: "lazy",
        src: mapUrl,
        allowFullScreen: true
    })), /* @__PURE__ */ React8.createElement(CustomButton, {
        onClick: openInGoogleMaps,
        className: "w-full flex items-center justify-center gap-2"
    }, /* @__PURE__ */ React8.createElement(Navigation, {
        className: "w-4 h-4"
    }), "Get Directions")), /* @__PURE__ */ React8.createElement("p", {
        className: "text-sm text-[#5A7C6F]"
    }, "Opening directions will use your current location as the starting point")));
};
// src/components/AcceptedRequestManager.tsx
var AcceptedRequestManager = function(param) {
    var _param_requests = param.requests, requests = _param_requests === void 0 ? [] : _param_requests, onUpdateItemStatus = param.onUpdateItemStatus, onAddPhoto = param.onAddPhoto, onReschedule = param.onReschedule, onCompletePickup = param.onCompletePickup, onSendMessage = param.onSendMessage, onMessageRead = param.onMessageRead, _param_availableDates = param.availableDates, availableDates = _param_availableDates === void 0 ? [] : _param_availableDates, className = param.className;
    var _useState3 = _sliced_to_array(useState3(null), 2), selectedRequest = _useState3[0], setSelectedRequest = _useState3[1];
    var _useState31 = _sliced_to_array(useState3(null), 2), selectedDate = _useState31[0], setSelectedDate = _useState31[1];
    var _useState32 = _sliced_to_array(useState3(false), 2), isMessagesExpanded = _useState32[0], setIsMessagesExpanded = _useState32[1];
    var _useState33 = _sliced_to_array(useState3(false), 2), isMapModalOpen = _useState33[0], setIsMapModalOpen = _useState33[1];
    var filteredRequests = (requests || []).sort(function(a, b) {
        return new Date(a.pickupDate || "").getTime() - new Date(b.pickupDate || "").getTime();
    }).filter(function(request) {
        return !selectedDate || request.pickupDate === selectedDate;
    });
    if (!selectedRequest) {
        return /* @__PURE__ */ React9.createElement("div", {
            className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", "flex flex-col", className)
        }, /* @__PURE__ */ React9.createElement("h2", {
            className: "font-rockwell text-2xl text-[#4B7163] mb-6"
        }, "Pickups (", filteredRequests.length, ")"), /* @__PURE__ */ React9.createElement("div", {
            className: "mb-4"
        }, /* @__PURE__ */ React9.createElement(FormDropdown, {
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
        })), /* @__PURE__ */ React9.createElement("div", {
            className: "space-y-4"
        }, filteredRequests.map(function(request) {
            return /* @__PURE__ */ React9.createElement("div", {
                key: request.id,
                onClick: function() {
                    return setSelectedRequest(request);
                },
                className: "flex items-center gap-4 p-4 rounded-xl bg-[#F8FAF9] hover:bg-[#F0F4F2] cursor-pointer transition-colors"
            }, /* @__PURE__ */ React9.createElement("div", {
                className: "flex-grow"
            }, /* @__PURE__ */ React9.createElement("h3", {
                className: "font-rockwell text-lg text-[#4B7163]"
            }, request.customerName), /* @__PURE__ */ React9.createElement("div", {
                className: "flex items-center gap-2 text-sm text-[#5A7C6F] mt-1"
            }, /* @__PURE__ */ React9.createElement(MapPin2, {
                className: "h-4 w-4"
            }), /* @__PURE__ */ React9.createElement("span", null, request.address)), /* @__PURE__ */ React9.createElement("div", {
                className: "flex items-center gap-2 text-sm text-[#5A7C6F] mt-1"
            }, /* @__PURE__ */ React9.createElement(Calendar, {
                className: "h-4 w-4"
            }), /* @__PURE__ */ React9.createElement("span", null, request.pickupDate ? new Date(request.pickupDate).toLocaleDateString() : "No date set"))), /* @__PURE__ */ React9.createElement(ChevronRight, {
                className: "h-6 w-6 text-[#5A7C6F]"
            }));
        })));
    }
    return /* @__PURE__ */ React9.createElement("div", {
        className: cn("max-w-4xl mx-auto", className)
    }, /* @__PURE__ */ React9.createElement(CustomButton, {
        variant: "secondary",
        onClick: function() {
            return setSelectedRequest(null);
        },
        className: "mb-4"
    }, "\u2190 Back to List"), /* @__PURE__ */ React9.createElement("div", {
        className: "bg-white rounded-2xl border-2 border-[#4B7163] p-6 space-y-6"
    }, /* @__PURE__ */ React9.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-4"
    }, "Pickup Details"), /* @__PURE__ */ React9.createElement("div", {
        className: "mb-6"
    }, /* @__PURE__ */ React9.createElement("h3", {
        className: "font-rockwell text-lg text-[#4B7163] mb-2"
    }, "Customer Information"), /* @__PURE__ */ React9.createElement("div", {
        className: "bg-[#F8FAF9] p-4 rounded-xl"
    }, /* @__PURE__ */ React9.createElement("p", {
        className: "text-[#5A7C6F] mb-2"
    }, /* @__PURE__ */ React9.createElement("strong", null, "Name:"), " ", selectedRequest.customerName), /* @__PURE__ */ React9.createElement("p", {
        className: "text-[#5A7C6F] mb-2"
    }, /* @__PURE__ */ React9.createElement("strong", null, "Contact:"), " ", selectedRequest.email || selectedRequest.phone), /* @__PURE__ */ React9.createElement("div", {
        className: "flex items-center gap-2 text-[#5A7C6F] cursor-pointer hover:text-[#4B7163] transition-colors",
        onClick: function() {
            return setIsMapModalOpen(true);
        }
    }, /* @__PURE__ */ React9.createElement(MapPin2, {
        className: "h-4 w-4"
    }), /* @__PURE__ */ React9.createElement("p", {
        className: "underline"
    }, selectedRequest.address)), /* @__PURE__ */ React9.createElement("div", {
        className: "flex items-center gap-2 text-[#5A7C6F] mt-2"
    }, /* @__PURE__ */ React9.createElement(Calendar, {
        className: "h-4 w-4"
    }), /* @__PURE__ */ React9.createElement("p", null, new Date(selectedRequest.pickupDate || "").toLocaleDateString())))), isMapModalOpen && /* @__PURE__ */ React9.createElement(MapModal, {
        address: selectedRequest.address,
        onClose: function() {
            return setIsMapModalOpen(false);
        }
    }), /* @__PURE__ */ React9.createElement("div", {
        className: "flex flex-col gap-4"
    }, /* @__PURE__ */ React9.createElement("h3", {
        className: "font-rockwell text-lg text-[#4B7163] mb-2"
    }, "Items"), /* @__PURE__ */ React9.createElement("div", {
        className: "grid grid-cols-1 gap-8 mb-4"
    }, selectedRequest.items.map(function(item) {
        var _item_photos;
        return /* @__PURE__ */ React9.createElement("div", {
            className: "aspect-[16/9] w-full relative",
            key: item.id
        }, /* @__PURE__ */ React9.createElement("div", {
            className: "absolute inset-0 -mx-8"
        }, /* @__PURE__ */ React9.createElement("div", {
            className: "relative h-full mx-8"
        }, /* @__PURE__ */ React9.createElement(SwipeCard, {
            imageUrl: ((_item_photos = item.photos) === null || _item_photos === void 0 ? void 0 : _item_photos[0]) || "",
            alt: item.name,
            onSwipe: function(direction) {
                onUpdateItemStatus(selectedRequest.id, item.id, direction === "right" ? "verified" : "incorrect");
            }
        }, /* @__PURE__ */ React9.createElement("div", {
            className: "bg-[#F8FAF9] p-4 rounded-xl"
        }, /* @__PURE__ */ React9.createElement("h4", {
            className: "font-semibold text-[#4B7163] mb-2"
        }, item.name), /* @__PURE__ */ React9.createElement("p", {
            className: "text-sm text-[#5A7C6F] mb-2"
        }, item.description), /* @__PURE__ */ React9.createElement("div", {
            className: "flex items-center gap-2"
        }, /* @__PURE__ */ React9.createElement("span", {
            className: cn("px-2 py-1 rounded-full text-xs", item.status === "verified" && "bg-green-100 text-green-800", item.status === "incorrect" && "bg-red-100 text-red-800", item.status === "pending" && "bg-yellow-100 text-yellow-800")
        }, item.status.charAt(0).toUpperCase() + item.status.slice(1))))))));
    })), /* @__PURE__ */ React9.createElement("div", {
        className: "flex justify-center gap-8 text-sm text-gray-500 mt-2"
    }, /* @__PURE__ */ React9.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ React9.createElement(X4, {
        className: "h-4 w-4 text-red-500"
    }), " Swipe left if not picking up item"), /* @__PURE__ */ React9.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ React9.createElement(Check3, {
        className: "h-4 w-4 text-green-500"
    }), " Swipe right if you have picked up the item"))), /* @__PURE__ */ React9.createElement("div", {
        className: "mt-6"
    }, /* @__PURE__ */ React9.createElement(MessageThread, {
        messages: selectedRequest.messages,
        onSendMessage: function(message) {
            return onSendMessage(selectedRequest.id, message);
        },
        onMessageRead: function(messageId) {
            return onMessageRead === null || onMessageRead === void 0 ? void 0 : onMessageRead(selectedRequest.id, messageId);
        }
    }))));
};
// src/components/button.tsx
import * as React10 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
var buttonVariants2 = cva2("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
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
var Button = React10.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React10.createElement(Comp, _object_spread({
        className: cn(buttonVariants2({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props));
});
Button.displayName = "Button";
// src/components/Card.tsx
import React11 from "react";
var Card = function(param) {
    var imageUrl = param.imageUrl, alt = param.alt, children = param.children;
    return /* @__PURE__ */ React11.createElement("div", {
        className: "card-custom"
    }, /* @__PURE__ */ React11.createElement("div", {
        className: "card-custom-image"
    }, /* @__PURE__ */ React11.createElement("img", {
        src: imageUrl,
        alt: alt,
        className: "w-full h-full object-cover"
    })), /* @__PURE__ */ React11.createElement("div", {
        className: "w-full"
    }, children));
};
// src/components/FormInput.tsx
import React12 from "react";
import { Check as Check4, X as X5, AlertCircle as AlertCircle2 } from "lucide-react";
var stateStyles2 = {
    normal: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: null
    },
    completed: {
        border: "border-[#5A7C6F]",
        text: "text-[#5A7C6F]",
        icon: /* @__PURE__ */ React12.createElement(Check4, {
            className: "h-3 w-3 text-white"
        }),
        iconBg: "bg-[#5A7C6F]"
    },
    error: {
        border: "border-red-500",
        text: "text-red-500",
        icon: /* @__PURE__ */ React12.createElement(X5, {
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
        icon: /* @__PURE__ */ React12.createElement(AlertCircle2, {
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
var FormInput = React12.forwardRef(function(_param, ref) {
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
    return /* @__PURE__ */ React12.createElement("div", {
        className: "space-y-1.5"
    }, /* @__PURE__ */ React12.createElement("label", {
        className: cn("block text-sm font-medium uppercase", styles.text)
    }, label), /* @__PURE__ */ React12.createElement("div", {
        className: "relative"
    }, /* @__PURE__ */ React12.createElement("input", _object_spread({
        ref: ref,
        disabled: disabled,
        className: cn("w-full px-3 py-2", "rounded-[4px]", "border-2", "font-poppins text-base", "placeholder:text-[#5A7C6F]/60", "focus:outline-none focus:ring-2 focus:ring-offset-1", styles.border, disabled && "bg-gray-50 cursor-not-allowed", className),
        value: value,
        onChange: function(e) {
            return onChange(e.target.value);
        },
        placeholder: placeholder
    }, props)), styles.icon && /* @__PURE__ */ React12.createElement("div", {
        className: cn("absolute right-3 top-1/2 -translate-y-1/2", "rounded-full w-4 h-4", "flex items-center justify-center", styles.iconBg)
    }, styles.icon)), hint && /* @__PURE__ */ React12.createElement("p", {
        className: cn("text-sm", styles.text)
    }, hint));
});
FormInput.displayName = "FormInput";
// src/components/ImageUpload.tsx
import React13 from "react";
import { Upload } from "lucide-react";
var ImageUpload = function(param) {
    var onUpload = param.onUpload, _param_maxFiles = param.maxFiles, maxFiles = _param_maxFiles === void 0 ? 5 : _param_maxFiles, className = param.className;
    var handleFileUpload = function(event) {
        var files = event.target.files;
        if (files) {
            var fileArray = Array.from(files).slice(0, maxFiles);
            var photoUrls = fileArray.map(function(file) {
                return URL.createObjectURL(file);
            });
            onUpload(photoUrls);
        }
    };
    return /* @__PURE__ */ React13.createElement("div", {
        className: cn("space-y-6", className)
    }, /* @__PURE__ */ React13.createElement("div", {
        className: "border-2 border-dashed border-[#5A7C6F] rounded-xl p-8 text-center"
    }, /* @__PURE__ */ React13.createElement("input", {
        type: "file",
        id: "photo-upload",
        multiple: true,
        accept: "image/*",
        className: "hidden",
        onChange: handleFileUpload
    }), /* @__PURE__ */ React13.createElement("label", {
        htmlFor: "photo-upload",
        className: "cursor-pointer space-y-4 block"
    }, /* @__PURE__ */ React13.createElement(Upload, {
        className: "h-12 w-12 mx-auto text-[#5A7C6F]"
    }), /* @__PURE__ */ React13.createElement("div", {
        className: "font-sourceSans"
    }, /* @__PURE__ */ React13.createElement("p", {
        className: "text-lg font-semibold text-[#4B7163]"
    }, "Drop photos here or click to upload"), /* @__PURE__ */ React13.createElement("p", {
        className: "text-sm text-[#5A7C6F]"
    }, "Upload clear photos (max ", maxFiles, " files)")))));
};
// src/components/InventoryItemProcessing.tsx
import React15, { useState as useState4 } from "react";
// src/components/Tag.tsx
import React14 from "react";
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
    return /* @__PURE__ */ React14.createElement("div", {
        className: cn("inline-flex items-center", "h-7 pl-1 pr-3", "rounded-full", "font-poppins font-semibold text-sm", "bg-[#F8FAF9]", "border-2", "transition-all duration-200", styles.border, styles.text, className)
    }, onDelete && /* @__PURE__ */ React14.createElement("div", {
        className: "flex items-center"
    }, /* @__PURE__ */ React14.createElement("button", {
        type: "button",
        onClick: onDelete,
        className: cn("flex items-center justify-center", "w-5 h-5 rounded-full mr-1", "transition-colors duration-200", styles.deleteButton, "focus:outline-none focus:ring-2 focus:ring-offset-1"),
        "aria-label": "Remove ".concat(text)
    }, /* @__PURE__ */ React14.createElement(X6, {
        className: "h-3 w-3 text-white"
    }))), /* @__PURE__ */ React14.createElement("span", {
        className: "truncate"
    }, text));
};
// src/components/InventoryItemProcessing.tsx
import { Save, Send } from "lucide-react";
var InventoryItemProcessing = function(param) {
    var items = param.items, onUpdateDetails = param.onUpdateDetails, onUpdateStatus = param.onUpdateStatus, onSaveDraft = param.onSaveDraft, className = param.className;
    var _formData_attributes;
    var _useState4 = _sliced_to_array(useState4(null), 2), selectedItem = _useState4[0], setSelectedItem = _useState4[1];
    var _useState41 = _sliced_to_array(useState4([]), 2), processingPhotos = _useState41[0], setProcessingPhotos = _useState41[1];
    var _useState42 = _sliced_to_array(useState4({
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
        storageLocation: ""
    }), 2), formData = _useState42[0], setFormData = _useState42[1];
    var _useState43 = _sliced_to_array(useState4(""), 2), newAttribute = _useState43[0], setNewAttribute = _useState43[1];
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
        return formData.title && formData.description && formData.condition && formData.category && formData.storageLocation && processingPhotos.length > 0;
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
        return /* @__PURE__ */ React15.createElement("div", {
            className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", className)
        }, /* @__PURE__ */ React15.createElement("h2", {
            className: "font-rockwell text-2xl text-[#4B7163] mb-6"
        }, "Items Pending Processing (", items.length, ")"), /* @__PURE__ */ React15.createElement("div", {
            className: "space-y-4"
        }, items.map(function(item) {
            return /* @__PURE__ */ React15.createElement("div", {
                key: item.id,
                onClick: function() {
                    return setSelectedItem(item);
                },
                className: "flex gap-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
            }, /* @__PURE__ */ React15.createElement("img", {
                src: item.pickupPhoto,
                alt: "Item ".concat(item.productId),
                className: "w-24 h-24 rounded-lg object-cover"
            }), /* @__PURE__ */ React15.createElement("div", {
                className: "flex-grow"
            }, /* @__PURE__ */ React15.createElement("div", {
                className: "flex justify-between items-start"
            }, /* @__PURE__ */ React15.createElement("h3", {
                className: "font-rockwell text-lg text-[#4B7163]"
            }, "Product ID: ", item.productId), /* @__PURE__ */ React15.createElement("span", {
                className: "text-sm text-gray-500"
            }, "Received: ", new Date(item.receivedDate).toLocaleDateString())), /* @__PURE__ */ React15.createElement("p", {
                className: "text-sm text-gray-600 mt-1"
            }, item.pickupDescription), /* @__PURE__ */ React15.createElement("p", {
                className: "text-sm text-gray-500 mt-2"
            }, "From: ", item.customerName)));
        })));
    }
    var _formData_title, _formData_description;
    return /* @__PURE__ */ React15.createElement("div", {
        className: cn("space-y-6", className)
    }, /* @__PURE__ */ React15.createElement(Card, {
        imageUrl: selectedItem.pickupPhoto,
        alt: "Original pickup photo"
    }, /* @__PURE__ */ React15.createElement("div", {
        className: "space-y-6"
    }, /* @__PURE__ */ React15.createElement("div", {
        className: "flex justify-between items-start"
    }, /* @__PURE__ */ React15.createElement("h3", {
        className: "font-rockwell text-lg text-[#4B7163]"
    }, "Processing Item: ", selectedItem.productId), /* @__PURE__ */ React15.createElement(Tag, {
        text: selectedItem.status,
        variant: "primary"
    })), /* @__PURE__ */ React15.createElement(ImageUpload, {
        onUpload: setProcessingPhotos,
        maxFiles: 5,
        className: "mb-4"
    }), /* @__PURE__ */ React15.createElement("div", {
        className: "grid grid-cols-2 gap-4"
    }, /* @__PURE__ */ React15.createElement(FormInput, {
        label: "Title",
        value: (_formData_title = formData.title) !== null && _formData_title !== void 0 ? _formData_title : "",
        onChange: function(value) {
            return setFormData(_object_spread_props(_object_spread({}, formData), {
                title: value
            }));
        },
        state: formData.title ? "completed" : "required"
    }), /* @__PURE__ */ React15.createElement("div", {
        className: "space-y-2"
    }, /* @__PURE__ */ React15.createElement("div", {
        className: "flex gap-2"
    }, /* @__PURE__ */ React15.createElement(FormInput, {
        label: "Add Attribute",
        value: newAttribute,
        onChange: setNewAttribute,
        onKeyDown: function(e) {
            return e.key === "Enter" && handleAddAttribute();
        }
    }), /* @__PURE__ */ React15.createElement(CustomButton, {
        onClick: handleAddAttribute,
        variant: "secondary",
        className: "mt-6"
    }, "Add")), /* @__PURE__ */ React15.createElement("div", {
        className: "flex flex-wrap gap-2"
    }, (_formData_attributes = formData.attributes) === null || _formData_attributes === void 0 ? void 0 : _formData_attributes.map(function(attr, index) {
        return /* @__PURE__ */ React15.createElement(Tag, {
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
    })))), /* @__PURE__ */ React15.createElement(FormDropdown, {
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
    }), /* @__PURE__ */ React15.createElement(FormInput, {
        label: "Description",
        value: (_formData_description = formData.description) !== null && _formData_description !== void 0 ? _formData_description : "",
        onChange: function(value) {
            return setFormData(_object_spread_props(_object_spread({}, formData), {
                description: value
            }));
        },
        state: formData.description ? "completed" : "required"
    }), /* @__PURE__ */ React15.createElement("div", {
        className: "flex justify-end gap-4 mt-6"
    }, /* @__PURE__ */ React15.createElement(CustomButton, {
        onClick: handleSaveDraft,
        variant: "secondary",
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React15.createElement(Save, {
        className: "h-4 w-4"
    }), "Save Draft"), /* @__PURE__ */ React15.createElement(CustomButton, {
        onClick: handleSubmit,
        variant: "cta",
        disabled: !isFormValid(),
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React15.createElement(Send, {
        className: "h-4 w-4"
    }), "Mark Ready for Sale")))));
};
// src/components/InventoryProcessing.tsx
import { useState as useState5 } from "react";
var InventoryProcessing = function(param) {
    var request = param.request, onUpdateStatus = param.onUpdateStatus, onUpdateDetails = param.onUpdateDetails, onAddProcessingPhotos = param.onAddProcessingPhotos, onConfirmReceipt = param.onConfirmReceipt;
    var _useState5 = _sliced_to_array(useState5(""), 2), productId = _useState5[0], setProductId = _useState5[1];
    var _useState51 = _sliced_to_array(useState5(""), 2), description = _useState51[0], setDescription = _useState51[1];
    var _useState52 = _sliced_to_array(useState5([]), 2), processingPhotos = _useState52[0], setProcessingPhotos = _useState52[1];
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
// src/components/InventoryProcessingManager.tsx
import React17, { useState as useState6 } from "react";
// src/components/ProcessingQueue.tsx
import React16 from "react";
import { ArrowRight } from "lucide-react";
var ProcessingQueue = function(param) {
    var items = param.items, onSelectItem = param.onSelectItem, className = param.className;
    return /* @__PURE__ */ React16.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", "flex flex-col", className)
    }, /* @__PURE__ */ React16.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-6"
    }, "Items Awaiting Processing (", items.length, " ", items.length === 1 ? "item" : "items", ")"), items.length === 0 ? /* @__PURE__ */ React16.createElement("div", {
        className: "text-center py-8 text-gray-500 font-sourceSans"
    }, "No items awaiting processing") : /* @__PURE__ */ React16.createElement("div", {
        className: "flex-grow space-y-6"
    }, items.map(function(item) {
        return /* @__PURE__ */ React16.createElement("div", {
            key: item.id,
            className: "flex gap-4 pb-6 border-b border-gray-100 last:border-b-0"
        }, /* @__PURE__ */ React16.createElement("div", {
            className: "w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
        }, /* @__PURE__ */ React16.createElement("img", {
            src: item.pickupPhoto,
            alt: "Item ".concat(item.productId),
            className: "w-full h-full object-cover"
        })), /* @__PURE__ */ React16.createElement("div", {
            className: "flex-grow min-w-0"
        }, /* @__PURE__ */ React16.createElement("div", {
            className: "flex justify-between items-start gap-2"
        }, /* @__PURE__ */ React16.createElement("div", null, /* @__PURE__ */ React16.createElement("h3", {
            className: "font-rockwell text-lg text-[#4B7163] mb-1"
        }, "Product ID: ", item.productId), /* @__PURE__ */ React16.createElement("p", {
            className: "text-sm text-gray-600 font-sourceSans"
        }, item.pickupDescription)), /* @__PURE__ */ React16.createElement(CustomButton, {
            onClick: function() {
                return onSelectItem(item.id);
            },
            variant: "secondary",
            className: "flex items-center gap-2"
        }, "Process ", /* @__PURE__ */ React16.createElement(ArrowRight, {
            className: "h-4 w-4"
        }))), /* @__PURE__ */ React16.createElement("div", {
            className: "flex justify-between items-center mt-4"
        }, /* @__PURE__ */ React16.createElement("span", {
            className: "text-sm text-gray-500"
        }, "From: ", item.customerName), /* @__PURE__ */ React16.createElement("span", {
            className: "text-sm text-gray-500"
        }, "Received: ", new Date(item.receivedDate).toLocaleDateString()))));
    })));
};
// src/components/InventoryProcessingManager.tsx
var InventoryProcessingManager = function(param) {
    var items = param.items, onUpdateDetails = param.onUpdateDetails, onUpdateStatus = param.onUpdateStatus, onSaveDraft = param.onSaveDraft, className = param.className;
    var _useState6 = _sliced_to_array(useState6(null), 2), selectedItemId = _useState6[0], setSelectedItemId = _useState6[1];
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
        return /* @__PURE__ */ React17.createElement("div", {
            className: className
        }, /* @__PURE__ */ React17.createElement("button", {
            onClick: handleBack,
            className: "mb-4 text-[#4B7163] hover:text-[#3A5A4F] font-sourceSans"
        }, "\u2190 Back to Queue"), /* @__PURE__ */ React17.createElement(InventoryItemProcessing, {
            items: processingItems.filter(function(item) {
                return item.id === selectedItemId;
            }),
            onUpdateDetails: onUpdateDetails,
            onUpdateStatus: onUpdateStatus,
            onSaveDraft: onSaveDraft
        }));
    }
    return /* @__PURE__ */ React17.createElement(ProcessingQueue, {
        items: items,
        onSelectItem: handleSelectItem,
        className: className
    });
};
// src/components/PickupItemQueue.tsx
import React19, { useState as useState8 } from "react";
// src/components/SwipeCardDeck.tsx
import React18, { useState as useState7, useEffect } from "react";
var SwipeCardDeck = function(param) {
    var cards = param.cards, onSwipeLeft = param.onSwipeLeft, onSwipeRight = param.onSwipeRight, onEmpty = param.onEmpty;
    var _useState7 = _sliced_to_array(useState7(cards), 2), currentCards = _useState7[0], setCurrentCards = _useState7[1];
    var _useState71 = _sliced_to_array(useState7([]), 2), history = _useState71[0], setHistory = _useState71[1];
    useEffect(function() {
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
    return /* @__PURE__ */ React18.createElement("div", {
        className: "relative w-full max-w-[300px] mx-auto h-[400px]"
    }, /* @__PURE__ */ React18.createElement("div", {
        className: "relative w-full h-full"
    }, currentCards.map(function(card, index) {
        var isTop = index === currentCards.length - 1;
        return /* @__PURE__ */ React18.createElement(SwipeCard, {
            key: card.id,
            imageUrl: card.imageUrl,
            alt: card.alt,
            isVisible: index >= currentCards.length - 3,
            onSwipe: function(direction) {
                return handleSwipe(direction, card);
            }
        }, card.content);
    })), history.length > 0 && /* @__PURE__ */ React18.createElement("button", {
        onClick: undoLastSwipe,
        className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-4 \n                     px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600\n                     hover:bg-gray-200 transition-colors"
    }, "Undo"));
};
// src/components/PickupItemQueue.tsx
var PickupItemQueue = function(param) {
    var items = param.items, onReceiveItem = param.onReceiveItem, onRejectItem = param.onRejectItem, onUpdateStatus = param.onUpdateStatus, onUpdateDetails = param.onUpdateDetails, onAddProcessingPhotos = param.onAddProcessingPhotos, className = param.className;
    var _useState8 = _sliced_to_array(useState8(null), 2), selectedItem = _useState8[0], setSelectedItem = _useState8[1];
    var _useState81 = _sliced_to_array(useState8(null), 2), processingItem = _useState81[0], setProcessingItem = _useState81[1];
    var pendingItems = items.filter(function(item) {
        return item.status === "pending";
    });
    var cardData = selectedItem ? [
        {
            id: selectedItem.id,
            imageUrl: selectedItem.imageUrl,
            alt: selectedItem.name,
            content: /* @__PURE__ */ React19.createElement("div", {
                className: "p-4"
            }, /* @__PURE__ */ React19.createElement("h3", {
                className: "font-rockwell text-lg text-[#4B7163] mb-2"
            }, selectedItem.name), /* @__PURE__ */ React19.createElement("p", {
                className: "text-sm text-gray-600"
            }, selectedItem.description), /* @__PURE__ */ React19.createElement("p", {
                className: "text-sm text-gray-500 mt-4"
            }, "Swipe right to receive or left to reject"))
        }
    ] : [];
    if (processingItem) {
        return /* @__PURE__ */ React19.createElement(InventoryProcessing, {
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
                setProcessingItem(null);
            }
        });
    }
    return /* @__PURE__ */ React19.createElement("div", {
        className: cn("space-y-6", className)
    }, !selectedItem ? /* @__PURE__ */ React19.createElement("div", {
        className: "bg-white rounded-2xl border-2 border-[#4B7163] p-6"
    }, /* @__PURE__ */ React19.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-6"
    }, "Pending Items (", pendingItems.length, ")"), /* @__PURE__ */ React19.createElement("div", {
        className: "space-y-4"
    }, pendingItems.map(function(item) {
        return /* @__PURE__ */ React19.createElement("div", {
            key: item.id,
            onClick: function() {
                return setSelectedItem(item);
            },
            className: "flex gap-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
        }, /* @__PURE__ */ React19.createElement("img", {
            src: item.imageUrl,
            alt: item.name,
            className: "w-24 h-24 rounded-lg object-cover"
        }), /* @__PURE__ */ React19.createElement("div", null, /* @__PURE__ */ React19.createElement("h3", {
            className: "font-rockwell text-lg text-[#4B7163]"
        }, item.name), /* @__PURE__ */ React19.createElement("p", {
            className: "text-sm text-gray-600"
        }, item.description)));
    }))) : /* @__PURE__ */ React19.createElement(SwipeCardDeck, {
        cards: cardData,
        onSwipeLeft: function() {
            onRejectItem(selectedItem.id);
            setSelectedItem(null);
        },
        onSwipeRight: function() {
            onReceiveItem(selectedItem.id);
            onUpdateStatus(selectedItem.id, "completed");
            setProcessingItem(selectedItem);
            setSelectedItem(null);
        }
    }));
};
// src/components/PickupRequestForm.tsx
import React21, { useState as useState9 } from "react";
// src/components/Progress.tsx
import React20 from "react";
import { Check as Check5 } from "lucide-react";
var Progress = function(param) {
    var steps = param.steps, currentStep = param.currentStep;
    return /* @__PURE__ */ React20.createElement("div", {
        className: "relative flex items-center justify-between w-full max-w-3xl mx-auto py-4 px-6"
    }, /* @__PURE__ */ React20.createElement("div", {
        className: "absolute top-[-10px] left-[12.5px] right-[12.5px] h-[3px] z-0",
        style: {
            backgroundColor: "rgba(90, 124, 111, 0.3)"
        }
    }), /* @__PURE__ */ React20.createElement("div", {
        className: "absolute top-[-10px] left-[12.5px] h-[3px] z-0 transition-all duration-300 ease-in-out",
        style: {
            backgroundColor: "#5A7C6F",
            width: "".concat(Math.max(0, Math.min(100, (currentStep - 1) / (steps.length - 1) * 100)), "%"),
            maxWidth: "calc(100% - ".concat(25, "px)")
        }
    }), /* @__PURE__ */ React20.createElement("div", {
        className: "relative z-10 flex items-center justify-between w-full px-[12.5px]"
    }, steps.map(function(step, index) {
        return /* @__PURE__ */ React20.createElement("div", {
            key: index,
            className: "absolute",
            style: {
                left: "".concat(index / (steps.length - 1) * 100, "%")
            }
        }, /* @__PURE__ */ React20.createElement("div", {
            className: "flex flex-col items-center -translate-x-1/2"
        }, /* @__PURE__ */ React20.createElement("div", {
            className: "\n                  w-[25px] h-[25px] rounded-full \n                  flex items-center justify-center\n                  border-[3px] border-[#5A7C6F]\n                  transition-colors duration-300 ease-in-out\n                  ".concat(index < currentStep ? "bg-[#5A7C6F]" : "bg-white", "\n                ")
        }, index < currentStep && /* @__PURE__ */ React20.createElement(Check5, {
            className: "w-4 h-4 text-white"
        })), /* @__PURE__ */ React20.createElement("span", {
            className: "mt-2 text-sm text-center hidden sm:block h-10 max-w-[80px]"
        }, step)));
    })));
};
// src/components/PickupRequestForm.tsx
import { Info, ChevronLeft, ChevronRight as ChevronRight2 } from "lucide-react";
import usePlacesAutocomplete from "use-places-autocomplete";
var PlacesAutocomplete = function(param) {
    var value = param.value, onChange = param.onChange, onSelect = param.onSelect;
    var _usePlacesAutocomplete = usePlacesAutocomplete({
        requestOptions: {
            componentRestrictions: {
                country: "us"
            }
        },
        debounce: 300,
        defaultValue: value
    }), ready = _usePlacesAutocomplete.ready, data = _usePlacesAutocomplete.suggestions.data, setValue = _usePlacesAutocomplete.setValue, clearSuggestions = _usePlacesAutocomplete.clearSuggestions;
    return /* @__PURE__ */ React21.createElement("div", {
        className: "relative"
    }, /* @__PURE__ */ React21.createElement(FormInput, {
        label: "Pickup Address",
        value: value,
        onChange: function(val) {
            setValue(val);
            onChange(val);
        },
        disabled: !ready
    }), data.length > 0 && /* @__PURE__ */ React21.createElement("ul", {
        className: "absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg"
    }, data.map(function(suggestion) {
        return /* @__PURE__ */ React21.createElement("li", {
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
    var _useState9 = _sliced_to_array(useState9(1), 2), currentStep = _useState9[0], setCurrentStep = _useState9[1];
    var _useState91 = _sliced_to_array(useState9([]), 2), uploadedItems = _useState91[0], setUploadedItems = _useState91[1];
    var _useState92 = _sliced_to_array(useState9([]), 2), availableTimes = _useState92[0], setAvailableTimes = _useState92[1];
    var _useState93 = _sliced_to_array(useState9(""), 2), address = _useState93[0], setAddress = _useState93[1];
    var _useState94 = _sliced_to_array(useState9({
        fullName: "",
        contact: ""
    }), 2), contactInfo = _useState94[0], setContactInfo = _useState94[1];
    var _useState95 = _sliced_to_array(useState9(false), 2), showTerms = _useState95[0], setShowTerms = _useState95[1];
    var _useState96 = _sliced_to_array(useState9({
        ownership: false,
        address: false,
        terms: false
    }), 2), confirmations = _useState96[0], setConfirmations = _useState96[1];
    var handleItemDescription = function(itemId, description) {
        setUploadedItems(function(items) {
            return items.map(function(item) {
                return item.id === itemId ? _object_spread_props(_object_spread({}, item), {
                    description: description
                }) : item;
            });
        });
    };
    var steps = [
        "Contact",
        "Photos",
        "Details",
        "Dates",
        "Location"
    ];
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
                return /* @__PURE__ */ React21.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ React21.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ React21.createElement("p", {
                    className: "text-[#4B7163] mb-4"
                }, "To better serve you, we need:"), /* @__PURE__ */ React21.createElement("ul", {
                    className: "list-disc ml-6 mb-4"
                }, /* @__PURE__ */ React21.createElement("li", null, "Your name"), /* @__PURE__ */ React21.createElement("li", null, "Either an email address or mobile number")), /* @__PURE__ */ React21.createElement("p", {
                    className: "text-[#4B7163]"
                }, "This allows us to send service updates through your preferred contact method. We'll only use these details to communicate about your specific request."), /* @__PURE__ */ React21.createElement("div", {
                    className: "mt-6"
                }, /* @__PURE__ */ React21.createElement(FormInput, {
                    label: "Full Name",
                    value: contactInfo.fullName,
                    onChange: function(value) {
                        return setContactInfo(function(prev) {
                            return _object_spread_props(_object_spread({}, prev), {
                                fullName: value
                            });
                        });
                    }
                }), /* @__PURE__ */ React21.createElement("div", {
                    className: "mt-6"
                }, /* @__PURE__ */ React21.createElement(FormInput, {
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
                return /* @__PURE__ */ React21.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ React21.createElement(ImageUpload, {
                    onUpload: function(photos) {
                        var newItems = photos.map(function(photoUrl) {
                            return {
                                id: Math.random().toString(36).substr(2, 9),
                                imageUrl: photoUrl
                            };
                        });
                        setUploadedItems(_to_consumable_array(uploadedItems).concat(_to_consumable_array(newItems)));
                    },
                    maxFiles: 5
                }), uploadedItems.length > 0 && /* @__PURE__ */ React21.createElement("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 gap-4"
                }, uploadedItems.map(function(item) {
                    return /* @__PURE__ */ React21.createElement("div", {
                        key: item.id,
                        className: "aspect-square rounded-lg overflow-hidden border-2 border-[#5A7C6F]"
                    }, /* @__PURE__ */ React21.createElement("img", {
                        src: item.imageUrl,
                        alt: "Uploaded item",
                        className: "w-full h-full object-cover"
                    }));
                })));
            case 3:
                return /* @__PURE__ */ React21.createElement("div", {
                    className: "space-y-6"
                }, uploadedItems.map(function(item) {
                    return /* @__PURE__ */ React21.createElement("div", {
                        key: item.id,
                        className: "flex gap-4 p-4 bg-[#F8FAF9] rounded-xl"
                    }, /* @__PURE__ */ React21.createElement("div", {
                        className: "w-32 h-32 rounded-lg overflow-hidden flex-shrink-0"
                    }, /* @__PURE__ */ React21.createElement("img", {
                        src: item.imageUrl,
                        alt: "Item",
                        className: "w-full h-full object-cover"
                    })), /* @__PURE__ */ React21.createElement("div", {
                        className: "flex-grow"
                    }, /* @__PURE__ */ React21.createElement(FormInput, {
                        label: "Item Description",
                        placeholder: "Describe the item, including condition and any relevant details",
                        value: item.description || "",
                        onChange: function(value) {
                            return handleItemDescription(item.id, value);
                        }
                    })));
                }));
            case 4:
                return /* @__PURE__ */ React21.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ React21.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ React21.createElement("h3", {
                    className: "font-rockwell text-lg text-[#4B7163] mb-4"
                }, "Available Pickup Times"), /* @__PURE__ */ React21.createElement("div", {
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
                    return /* @__PURE__ */ React21.createElement("button", {
                        key: time,
                        onClick: function() {
                            return handleTimeSelection(time);
                        },
                        className: cn("p-3 rounded-lg border-2 font-sourceSans transition-colors", availableTimes.includes(time) ? "border-[#6AB098] bg-[#6AB098] text-white" : "border-[#5A7C6F] text-[#5A7C6F] hover:bg-[#F0F4F2]")
                    }, time);
                }))));
            case 5:
                return /* @__PURE__ */ React21.createElement("div", {
                    className: "space-y-6"
                }, /* @__PURE__ */ React21.createElement("div", {
                    className: "bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ React21.createElement(PlacesAutocomplete, {
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
                }), /* @__PURE__ */ React21.createElement("p", {
                    className: "mt-2 text-sm text-[#5A7C6F] flex items-center gap-2"
                }, /* @__PURE__ */ React21.createElement(Info, {
                    className: "h-4 w-4"
                }), "Please ensure the address is accurate and items will be accessible at this location")), /* @__PURE__ */ React21.createElement("div", {
                    className: "mt-8 space-y-4 bg-[#F8FAF9] rounded-xl p-4"
                }, /* @__PURE__ */ React21.createElement("h3", {
                    className: "font-rockwell text-lg text-[#4B7163] mb-4"
                }, "Final Confirmation"), /* @__PURE__ */ React21.createElement("label", {
                    className: "flex items-start gap-3 cursor-pointer"
                }, /* @__PURE__ */ React21.createElement("input", {
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
                }), /* @__PURE__ */ React21.createElement("span", {
                    className: "text-sm text-[#5A7C6F]"
                }, "I confirm I own this item or have permission to request service for it")), /* @__PURE__ */ React21.createElement("label", {
                    className: "flex items-start gap-3 cursor-pointer"
                }, /* @__PURE__ */ React21.createElement("input", {
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
                }), /* @__PURE__ */ React21.createElement("span", {
                    className: "text-sm text-[#5A7C6F]"
                }, "I confirm the address provided is correct and I can receive services there")), /* @__PURE__ */ React21.createElement("label", {
                    className: "flex items-start gap-3 cursor-pointer"
                }, /* @__PURE__ */ React21.createElement("input", {
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
                }), /* @__PURE__ */ React21.createElement("span", {
                    className: "text-sm text-[#5A7C6F]"
                }, "I accept the", " ", /* @__PURE__ */ React21.createElement("button", {
                    onClick: function() {
                        return setShowTerms(true);
                    },
                    className: "text-[#6AB098] underline hover:text-[#4B7163]"
                }, "Terms of Service")))), showTerms && /* @__PURE__ */ React21.createElement(Modal, {
                    onClose: function() {
                        return setShowTerms(false);
                    }
                }, /* @__PURE__ */ React21.createElement("div", {
                    className: "p-6"
                }, /* @__PURE__ */ React21.createElement("h2", {
                    className: "font-rockwell text-2xl text-[#4B7163] mb-4"
                }, "Terms of Service"), /* @__PURE__ */ React21.createElement("div", {
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
    return /* @__PURE__ */ React21.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6 pt-8", className)
    }, /* @__PURE__ */ React21.createElement("div", {
        className: "mb-8"
    }, /* @__PURE__ */ React21.createElement(Progress, {
        steps: steps,
        currentStep: currentStep
    })), /* @__PURE__ */ React21.createElement("div", {
        className: "mb-8"
    }, /* @__PURE__ */ React21.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-6"
    }, steps[currentStep - 1]), renderStepContent()), /* @__PURE__ */ React21.createElement("div", {
        className: "flex justify-between"
    }, currentStep > 1 && /* @__PURE__ */ React21.createElement(CustomButton, {
        variant: "secondary",
        onClick: function() {
            return setCurrentStep(function(prev) {
                return prev - 1;
            });
        },
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React21.createElement(ChevronLeft, {
        className: "h-4 w-4"
    }), "Back"), /* @__PURE__ */ React21.createElement(CustomButton, {
        onClick: handleNext,
        disabled: !canProceed(),
        className: "flex items-center gap-2 ml-auto"
    }, currentStep === 5 ? "Submit Request" : "Continue", currentStep < 5 && /* @__PURE__ */ React21.createElement(ChevronRight2, {
        className: "h-4 w-4"
    }))));
};
// src/components/PickupRequestManager.tsx
import React22, { useState as useState10 } from "react";
import { Calendar as Calendar3, MapPin as MapPin4, X as X7, Check as Check6 } from "lucide-react";
var PickupRequestManager = function(param) {
    var requests = param.requests, onAcceptItem = param.onAcceptItem, onRejectItem = param.onRejectItem, onSendMessage = param.onSendMessage, onMessageRead = param.onMessageRead, className = param.className;
    var _useState10 = _sliced_to_array(useState10(0), 2), currentRequestIndex = _useState10[0], setCurrentRequestIndex = _useState10[1];
    var _useState101 = _sliced_to_array(useState10(requests[currentRequestIndex].items), 2), items = _useState101[0], setItems = _useState101[1];
    var _useState102 = _sliced_to_array(useState10(""), 2), newMessage = _useState102[0], setNewMessage = _useState102[1];
    var _useState103 = _sliced_to_array(useState10(false), 2), isMessagesExpanded = _useState103[0], setIsMessagesExpanded = _useState103[1];
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
    return /* @__PURE__ */ React22.createElement("div", {
        className: "max-w-4xl mx-auto space-y-8"
    }, /* @__PURE__ */ React22.createElement("div", {
        className: "flex justify-between items-center px-4"
    }, /* @__PURE__ */ React22.createElement(CustomButton, {
        onClick: function() {
            return setCurrentRequestIndex(function(prev) {
                return Math.max(0, prev - 1);
            });
        },
        disabled: currentRequestIndex === 0,
        className: "bg-[#4B7163] text-white px-4 py-2 rounded-lg"
    }, "<"), /* @__PURE__ */ React22.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163]"
    }, currentRequestIndex + 1, " of ", totalRequests), /* @__PURE__ */ React22.createElement(CustomButton, {
        onClick: function() {
            return setCurrentRequestIndex(function(prev) {
                return Math.min(totalRequests - 1, prev + 1);
            });
        },
        disabled: currentRequestIndex === totalRequests - 1,
        className: "bg-[#4B7163] text-white px-4 py-2 rounded-lg"
    }, ">")), /* @__PURE__ */ React22.createElement("div", {
        className: "bg-white rounded-2xl border-2 border-[#4B7163] p-6"
    }, /* @__PURE__ */ React22.createElement("h3", {
        className: "font-rockwell text-xl text-[#4B7163] mb-4"
    }, "Items to Review (", requests[currentRequestIndex].items.length, ")"), /* @__PURE__ */ React22.createElement("div", {
        className: "relative h-[500px]"
    }, requests[currentRequestIndex].items.map(function(item, index) {
        return /* @__PURE__ */ React22.createElement(SwipeCard, {
            key: item.id,
            imageUrl: item.imageUrl,
            alt: item.title || "Pickup request item",
            isVisible: index === requests[currentRequestIndex].items.length - 1,
            onSwipe: function(direction) {
                return handleSwipe(direction, item);
            }
        }, /* @__PURE__ */ React22.createElement("div", {
            className: "space-y-4"
        }, /* @__PURE__ */ React22.createElement("p", {
            className: "font-sourceSans text-gray-600"
        }, item.description), /* @__PURE__ */ React22.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ React22.createElement("div", {
            className: "flex items-center gap-2 text-[#5A7C6F]"
        }, /* @__PURE__ */ React22.createElement(MapPin4, {
            className: "h-4 w-4"
        }), /* @__PURE__ */ React22.createElement("span", {
            className: "text-sm"
        }, item.location)), /* @__PURE__ */ React22.createElement("div", {
            className: "flex items-center gap-2 text-[#5A7C6F]"
        }, /* @__PURE__ */ React22.createElement(Calendar3, {
            className: "h-4 w-4"
        }), /* @__PURE__ */ React22.createElement("div", {
            className: "text-sm"
        }, "Available:", item.availableDates.map(function(dateInfo, idx) {
            return /* @__PURE__ */ React22.createElement("span", {
                key: dateInfo.date
            }, idx > 0 && ", ", dateInfo.date, /* @__PURE__ */ React22.createElement("span", {
                className: "text-[#6AB098] ml-1"
            }, "(", dateInfo.requestCount, " request", dateInfo.requestCount !== 1 ? "s" : "", ")"));
        }))))));
    }), /* @__PURE__ */ React22.createElement("div", {
        className: "absolute bottom-0 left-0 right-0 flex justify-center gap-8 pb-4 text-sm text-gray-500"
    }, /* @__PURE__ */ React22.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ React22.createElement(X7, {
        className: "h-4 w-4 text-red-500"
    }), " Swipe left to reject"), /* @__PURE__ */ React22.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ React22.createElement(Check6, {
        className: "h-4 w-4 text-green-500"
    }), " Swipe right to accept")))), /* @__PURE__ */ React22.createElement(MessageThread, {
        messages: requests[currentRequestIndex].messages,
        onSendMessage: function(message) {
            return onSendMessage(requests[currentRequestIndex].id, message);
        },
        onMessageRead: function(messageId) {
            return onMessageRead === null || onMessageRead === void 0 ? void 0 : onMessageRead(requests[currentRequestIndex].id, messageId);
        },
        className: className
    }));
};
// src/components/ProductCard.tsx
import React23 from "react";
import { ShoppingCart } from "lucide-react";
var ProductCard = function(param) {
    var imageUrl = param.imageUrl, title = param.title, category = param.category, description = param.description, price = param.price, attributes = param.attributes, onAddToCart = param.onAddToCart, className = param.className;
    return /* @__PURE__ */ React23.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", "flex flex-col", className)
    }, /* @__PURE__ */ React23.createElement("div", {
        className: "w-full h-[200px] rounded-xl overflow-hidden mb-6"
    }, /* @__PURE__ */ React23.createElement("img", {
        src: imageUrl,
        alt: title,
        className: "w-full h-full object-cover"
    })), /* @__PURE__ */ React23.createElement("div", {
        className: "flex flex-col flex-grow"
    }, /* @__PURE__ */ React23.createElement("div", {
        className: "flex-grow space-y-4"
    }, /* @__PURE__ */ React23.createElement("div", null, /* @__PURE__ */ React23.createElement("span", {
        className: "text-sm font-sourceSans text-[#5A7C6F] mb-1 block"
    }, category), /* @__PURE__ */ React23.createElement("h3", {
        className: "font-rockwell text-2xl text-[#4B7163]"
    }, title)), /* @__PURE__ */ React23.createElement("p", {
        className: "font-sourceSans text-gray-600 text-base"
    }, description), /* @__PURE__ */ React23.createElement("div", {
        className: "flex flex-wrap gap-2"
    }, attributes.map(function(attr, index) {
        return /* @__PURE__ */ React23.createElement(Tag, {
            key: index,
            text: attr,
            variant: "secondary"
        });
    }))), /* @__PURE__ */ React23.createElement("div", {
        className: "flex items-center justify-between pt-6 mt-6 border-t border-gray-100"
    }, /* @__PURE__ */ React23.createElement("div", {
        className: "flex items-baseline gap-1"
    }, /* @__PURE__ */ React23.createElement("span", {
        className: "font-rockwell text-3xl text-[#4B7163]"
    }, "$", price.toFixed(2)), /* @__PURE__ */ React23.createElement("span", {
        className: "font-sourceSans text-sm text-gray-500"
    }, "USD")), /* @__PURE__ */ React23.createElement(CustomButton, {
        onClick: onAddToCart,
        className: "flex items-center gap-2 px-6"
    }, /* @__PURE__ */ React23.createElement(ShoppingCart, {
        className: "h-4 w-4"
    }), "Add to Cart"))));
};
// src/components/ShoppingCart.tsx
import React24, { useState as useState11, useEffect as useEffect2 } from "react";
import { X as X8 } from "lucide-react";
var ShoppingCart2 = function(param) {
    var initialItems = param.items, onRemoveItem = param.onRemoveItem, onCheckout = param.onCheckout, className = param.className;
    var _useState11 = _sliced_to_array(useState11(initialItems), 2), items = _useState11[0], setItems = _useState11[1];
    useEffect2(function() {
        setItems(initialItems);
    }, [
        initialItems
    ]);
    var subtotal = items.reduce(function(sum, item) {
        return sum + item.price;
    }, 0);
    var tax = subtotal * 0.0825;
    var total = subtotal + tax;
    return /* @__PURE__ */ React24.createElement("div", {
        className: cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", "flex flex-col", className)
    }, /* @__PURE__ */ React24.createElement("h2", {
        className: "font-rockwell text-2xl text-[#4B7163] mb-6"
    }, "Shopping Cart (", items.length, " ", items.length === 1 ? "item" : "items", ")"), items.length === 0 ? /* @__PURE__ */ React24.createElement("div", {
        className: "text-center py-8 text-gray-500 font-sourceSans"
    }, "Your cart is empty") : /* @__PURE__ */ React24.createElement(React24.Fragment, null, /* @__PURE__ */ React24.createElement("div", {
        className: "flex-grow space-y-6 mb-6"
    }, items.map(function(item) {
        return /* @__PURE__ */ React24.createElement("div", {
            key: item.id,
            className: "flex gap-4 pb-6 border-b border-gray-100 last:border-b-0"
        }, /* @__PURE__ */ React24.createElement("div", {
            className: "w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
        }, /* @__PURE__ */ React24.createElement("img", {
            src: item.imageUrl,
            alt: item.name,
            className: "w-full h-full object-cover"
        })), /* @__PURE__ */ React24.createElement("div", {
            className: "flex-grow min-w-0"
        }, /* @__PURE__ */ React24.createElement("div", {
            className: "flex justify-between items-start gap-2"
        }, /* @__PURE__ */ React24.createElement("div", null, /* @__PURE__ */ React24.createElement("h3", {
            className: "font-rockwell text-lg text-[#4B7163] mb-1"
        }, item.name), /* @__PURE__ */ React24.createElement("p", {
            className: "text-sm text-gray-600 font-sourceSans"
        }, item.description)), /* @__PURE__ */ React24.createElement("button", {
            onClick: function() {
                return onRemoveItem(item.id);
            },
            className: "text-gray-400 hover:text-gray-600 transition-colors p-1",
            "aria-label": "Remove ".concat(item.name, " from cart")
        }, /* @__PURE__ */ React24.createElement(X8, {
            className: "h-5 w-5"
        }))), /* @__PURE__ */ React24.createElement("div", {
            className: "flex justify-end items-center mt-4"
        }, /* @__PURE__ */ React24.createElement("span", {
            className: "font-rockwell text-lg text-[#4B7163]"
        }, "$", item.price.toFixed(2)))));
    })), /* @__PURE__ */ React24.createElement("div", {
        className: "bg-[#F8FAF9] rounded-xl p-4 space-y-3"
    }, /* @__PURE__ */ React24.createElement("div", {
        className: "flex justify-between font-sourceSans text-[#5A7C6F]"
    }, /* @__PURE__ */ React24.createElement("span", null, "Subtotal"), /* @__PURE__ */ React24.createElement("span", null, "$", subtotal.toFixed(2))), /* @__PURE__ */ React24.createElement("div", {
        className: "flex justify-between font-sourceSans text-[#5A7C6F]"
    }, /* @__PURE__ */ React24.createElement("span", null, "Tax (8.25%)"), /* @__PURE__ */ React24.createElement("span", null, "$", tax.toFixed(2))), /* @__PURE__ */ React24.createElement("div", {
        className: "border-t border-[#5A7C6F]/20 pt-3"
    }, /* @__PURE__ */ React24.createElement("div", {
        className: "flex justify-between font-rockwell text-xl text-[#4B7163]"
    }, /* @__PURE__ */ React24.createElement("span", null, "Total"), /* @__PURE__ */ React24.createElement("span", null, "$", total.toFixed(2))))), /* @__PURE__ */ React24.createElement(CustomButton, {
        onClick: onCheckout,
        className: "w-full mt-6",
        variant: "cta"
    }, "Proceed to Checkout")));
};
// src/components/Toggle.tsx
import * as React25 from "react";
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
    return /* @__PURE__ */ React25.createElement(motion2.button, {
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
    }, /* @__PURE__ */ React25.createElement(motion2.span, {
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
import React27 from "react";
import NextImage from "next/image";
import { Menu } from "lucide-react";
// src/components/sheet.tsx
import * as React26 from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva as cva3 } from "class-variance-authority";
import { X as X9 } from "lucide-react";
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React26.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React26.createElement(SheetPrimitive.Overlay, _object_spread_props(_object_spread({
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
var SheetContent = React26.forwardRef(function(_param, ref) {
    var _param_side = _param.side, side = _param_side === void 0 ? "right" : _param_side, className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "side",
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React26.createElement(SheetPortal, null, /* @__PURE__ */ React26.createElement(SheetOverlay, null), /* @__PURE__ */ React26.createElement(SheetPrimitive.Content, _object_spread({
        ref: ref,
        className: cn(sheetVariants({
            side: side
        }), className)
    }, props), children, /* @__PURE__ */ React26.createElement(SheetPrimitive.Close, {
        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
    }, /* @__PURE__ */ React26.createElement(X9, {
        className: "h-4 w-4"
    }), /* @__PURE__ */ React26.createElement("span", {
        className: "sr-only"
    }, "Close"))));
});
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React26.createElement("div", _object_spread({
        className: cn("flex flex-col space-y-2 text-center sm:text-left", className)
    }, props));
};
SheetHeader.displayName = "SheetHeader";
var SheetFooter = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React26.createElement("div", _object_spread({
        className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
    }, props));
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React26.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React26.createElement(SheetPrimitive.Title, _object_spread({
        ref: ref,
        className: cn("text-lg font-semibold text-foreground", className)
    }, props));
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React26.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React26.createElement(SheetPrimitive.Description, _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;
// src/components/Header.tsx
var Header = function(param) {
    var menuItems = param.menuItems, logo = param.logo;
    return /* @__PURE__ */ React27.createElement("header", {
        className: "sticky top-0 z-50 w-full bg-[#4B7163] text-white shadow-lg"
    }, /* @__PURE__ */ React27.createElement("div", {
        className: "w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
    }, /* @__PURE__ */ React27.createElement("div", {
        className: "h-16 flex items-center justify-between"
    }, /* @__PURE__ */ React27.createElement("div", {
        className: "flex shrink-0 items-center"
    }, logo && /* @__PURE__ */ React27.createElement(NextImage, {
        src: logo.src,
        alt: logo.alt,
        width: logo.width || 300,
        height: logo.height || 75,
        className: "h-16 w-auto",
        priority: true
    })), /* @__PURE__ */ React27.createElement("div", {
        className: "flex md:hidden"
    }, /* @__PURE__ */ React27.createElement(Sheet, null, /* @__PURE__ */ React27.createElement(SheetTrigger, {
        asChild: true
    }, /* @__PURE__ */ React27.createElement(Button, {
        variant: "ghost",
        size: "icon",
        className: "text-white hover:bg-[#5a8575]"
    }, /* @__PURE__ */ React27.createElement(Menu, {
        className: "h-6 w-6"
    }))), /* @__PURE__ */ React27.createElement(SheetContent, {
        side: "right",
        className: "w-[80%] sm:w-[400px] bg-[#4B7163] border-l-white/20"
    }, /* @__PURE__ */ React27.createElement("nav", {
        className: "flex flex-col space-y-4 mt-8"
    }, menuItems.map(function(item) {
        return /* @__PURE__ */ React27.createElement("a", {
            key: item.label,
            href: item.href,
            className: "text-white text-lg hover:text-white/80 transition-colors p-2"
        }, item.label);
    }))))), /* @__PURE__ */ React27.createElement("nav", {
        className: "hidden md:flex items-center space-x-8"
    }, menuItems.map(function(item) {
        return /* @__PURE__ */ React27.createElement("a", {
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
export { AcceptedRequestManager, Button, Card, CustomButton, Footer, FormDropdown, FormInput, Header, ImageUpload, InventoryItemProcessing, InventoryProcessing, InventoryProcessingManager, MapModal, MessageBubble, MessageThread, Modal, Page, PickupItemQueue, PickupRequestForm, PickupRequestManager, ProcessingQueue, ProductCard, Progress, ShoppingCart2 as ShoppingCart, SwipeCardDeck, Tag, Toggle };
//# sourceMappingURL=index.mjs.map