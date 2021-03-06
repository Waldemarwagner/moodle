/* YUI 3.9.0 (build 5827) Copyright 2013 Yahoo! Inc. http://yuilibrary.com/license/ */
if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/base-observable/base-observable.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/base-observable/base-observable.js",
    code: []
};
_yuitest_coverage["build/base-observable/base-observable.js"].code=["YUI.add('base-observable', function (Y, NAME) {","","    /**","    The `base-observable` submodule adds observability to Base's lifecycle and","    attributes, and also make it an `EventTarget`.","","    @module base","    @submodule base-observable","    **/","    var L = Y.Lang,","","        DESTROY = \"destroy\",","        INIT = \"init\",","","        BUBBLETARGETS = \"bubbleTargets\",","        _BUBBLETARGETS = \"_bubbleTargets\",","","        AttributeObservable = Y.AttributeObservable,","        BaseCore            = Y.BaseCore;","","    /**","    Provides an augmentable implementation of lifecycle and attribute events for","    `BaseCore`.","","    @class BaseObservable","    @extensionfor BaseCore","    @uses AttributeObservable","    @uses EventTarget","    @since 3.8.0","    **/","    function BaseObservable() {}","","    BaseObservable._ATTR_CFG      = AttributeObservable._ATTR_CFG.concat();","    BaseObservable._NON_ATTRS_CFG = [\"on\", \"after\", \"bubbleTargets\"];","","    BaseObservable.prototype = {","","        /**","         * Initializes Attribute","         *","         * @method _initAttribute","         * @private","         */","        _initAttribute: function(cfg) {","            BaseCore.prototype._initAttribute.apply(this, arguments);","            AttributeObservable.call(this);","","            this._eventPrefix = this.constructor.EVENT_PREFIX || this.constructor.NAME;","            this._yuievt.config.prefix = this._eventPrefix;","        },","","        /**","         * Init lifecycle method, invoked during construction.","         * Fires the init event prior to setting up attributes and","         * invoking initializers for the class hierarchy.","         *","         * @method init","         * @chainable","         * @param {Object} config Object with configuration property name/value pairs","         * @return {Base} A reference to this object","         */","        init: function(config) {","            /**","             * <p>","             * Lifecycle event for the init phase, fired prior to initialization.","             * Invoking the preventDefault() method on the event object provided","             * to subscribers will prevent initialization from occuring.","             * </p>","             * <p>","             * Subscribers to the \"after\" momemt of this event, will be notified","             * after initialization of the object is complete (and therefore","             * cannot prevent initialization).","             * </p>","             *","             * @event init","             * @preventable _defInitFn","             * @param {EventFacade} e Event object, with a cfg property which","             * refers to the configuration object passed to the constructor.","             */","            this.publish(INIT, {","                queuable:false,","                fireOnce:true,","                defaultTargetOnly:true,","                defaultFn:this._defInitFn","            });","","            this._preInitEventCfg(config);","","            this.fire(INIT, {cfg: config});","","            return this;","        },","","        /**","         * Handles the special on, after and target properties which allow the user to","         * easily configure on and after listeners as well as bubble targets during","         * construction, prior to init.","         *","         * @private","         * @method _preInitEventCfg","         * @param {Object} config The user configuration object","         */","        _preInitEventCfg : function(config) {","            if (config) {","                if (config.on) {","                    this.on(config.on);","                }","                if (config.after) {","                    this.after(config.after);","                }","            }","","            var i, l, target,","                userTargets = (config && BUBBLETARGETS in config);","","            if (userTargets || _BUBBLETARGETS in this) {","                target = userTargets ? (config && config.bubbleTargets) : this._bubbleTargets;","                if (L.isArray(target)) {","                    for (i = 0, l = target.length; i < l; i++) {","                        this.addTarget(target[i]);","                    }","                } else if (target) {","                    this.addTarget(target);","                }","            }","        },","","        /**","         * <p>","         * Destroy lifecycle method. Fires the destroy","         * event, prior to invoking destructors for the","         * class hierarchy.","         * </p>","         * <p>","         * Subscribers to the destroy","         * event can invoke preventDefault on the event object, to prevent destruction","         * from proceeding.","         * </p>","         * @method destroy","         * @return {Base} A reference to this object","         * @chainable","         */","        destroy: function() {","","            /**","             * <p>","             * Lifecycle event for the destroy phase,","             * fired prior to destruction. Invoking the preventDefault","             * method on the event object provided to subscribers will","             * prevent destruction from proceeding.","             * </p>","             * <p>","             * Subscribers to the \"after\" moment of this event, will be notified","             * after destruction is complete (and as a result cannot prevent","             * destruction).","             * </p>","             * @event destroy","             * @preventable _defDestroyFn","             * @param {EventFacade} e Event object","             */","            this.publish(DESTROY, {","                queuable:false,","                fireOnce:true,","                defaultTargetOnly:true,","                defaultFn: this._defDestroyFn","            });","            this.fire(DESTROY);","","            this.detachAll();","            return this;","        },","","        /**","         * Default init event handler","         *","         * @method _defInitFn","         * @param {EventFacade} e Event object, with a cfg property which","         * refers to the configuration object passed to the constructor.","         * @protected","         */","        _defInitFn : function(e) {","            this._baseInit(e.cfg);","        },","","        /**","         * Default destroy event handler","         *","         * @method _defDestroyFn","         * @param {EventFacade} e Event object","         * @protected","         */","        _defDestroyFn : function(e) {","            this._baseDestroy(e.cfg);","        }","    };","","    Y.mix(BaseObservable, AttributeObservable, false, null, 1);","","    Y.BaseObservable = BaseObservable;","","","}, '3.9.0', {\"requires\": [\"attribute-observable\"]});"];
_yuitest_coverage["build/base-observable/base-observable.js"].lines = {"1":0,"10":0,"31":0,"33":0,"34":0,"36":0,"45":0,"46":0,"48":0,"49":0,"80":0,"87":0,"89":0,"91":0,"104":0,"105":0,"106":0,"108":0,"109":0,"113":0,"116":0,"117":0,"118":0,"119":0,"120":0,"122":0,"123":0,"161":0,"167":0,"169":0,"170":0,"182":0,"193":0,"197":0,"199":0};
_yuitest_coverage["build/base-observable/base-observable.js"].functions = {"BaseObservable:31":0,"_initAttribute:44":0,"init:62":0,"_preInitEventCfg:103":0,"destroy:143":0,"_defInitFn:181":0,"_defDestroyFn:192":0,"(anonymous 1):1":0};
_yuitest_coverage["build/base-observable/base-observable.js"].coveredLines = 35;
_yuitest_coverage["build/base-observable/base-observable.js"].coveredFunctions = 8;
_yuitest_coverline("build/base-observable/base-observable.js", 1);
YUI.add('base-observable', function (Y, NAME) {

    /**
    The `base-observable` submodule adds observability to Base's lifecycle and
    attributes, and also make it an `EventTarget`.

    @module base
    @submodule base-observable
    **/
    _yuitest_coverfunc("build/base-observable/base-observable.js", "(anonymous 1)", 1);
_yuitest_coverline("build/base-observable/base-observable.js", 10);
var L = Y.Lang,

        DESTROY = "destroy",
        INIT = "init",

        BUBBLETARGETS = "bubbleTargets",
        _BUBBLETARGETS = "_bubbleTargets",

        AttributeObservable = Y.AttributeObservable,
        BaseCore            = Y.BaseCore;

    /**
    Provides an augmentable implementation of lifecycle and attribute events for
    `BaseCore`.

    @class BaseObservable
    @extensionfor BaseCore
    @uses AttributeObservable
    @uses EventTarget
    @since 3.8.0
    **/
    _yuitest_coverline("build/base-observable/base-observable.js", 31);
function BaseObservable() {}

    _yuitest_coverline("build/base-observable/base-observable.js", 33);
BaseObservable._ATTR_CFG      = AttributeObservable._ATTR_CFG.concat();
    _yuitest_coverline("build/base-observable/base-observable.js", 34);
BaseObservable._NON_ATTRS_CFG = ["on", "after", "bubbleTargets"];

    _yuitest_coverline("build/base-observable/base-observable.js", 36);
BaseObservable.prototype = {

        /**
         * Initializes Attribute
         *
         * @method _initAttribute
         * @private
         */
        _initAttribute: function(cfg) {
            _yuitest_coverfunc("build/base-observable/base-observable.js", "_initAttribute", 44);
_yuitest_coverline("build/base-observable/base-observable.js", 45);
BaseCore.prototype._initAttribute.apply(this, arguments);
            _yuitest_coverline("build/base-observable/base-observable.js", 46);
AttributeObservable.call(this);

            _yuitest_coverline("build/base-observable/base-observable.js", 48);
this._eventPrefix = this.constructor.EVENT_PREFIX || this.constructor.NAME;
            _yuitest_coverline("build/base-observable/base-observable.js", 49);
this._yuievt.config.prefix = this._eventPrefix;
        },

        /**
         * Init lifecycle method, invoked during construction.
         * Fires the init event prior to setting up attributes and
         * invoking initializers for the class hierarchy.
         *
         * @method init
         * @chainable
         * @param {Object} config Object with configuration property name/value pairs
         * @return {Base} A reference to this object
         */
        init: function(config) {
            /**
             * <p>
             * Lifecycle event for the init phase, fired prior to initialization.
             * Invoking the preventDefault() method on the event object provided
             * to subscribers will prevent initialization from occuring.
             * </p>
             * <p>
             * Subscribers to the "after" momemt of this event, will be notified
             * after initialization of the object is complete (and therefore
             * cannot prevent initialization).
             * </p>
             *
             * @event init
             * @preventable _defInitFn
             * @param {EventFacade} e Event object, with a cfg property which
             * refers to the configuration object passed to the constructor.
             */
            _yuitest_coverfunc("build/base-observable/base-observable.js", "init", 62);
_yuitest_coverline("build/base-observable/base-observable.js", 80);
this.publish(INIT, {
                queuable:false,
                fireOnce:true,
                defaultTargetOnly:true,
                defaultFn:this._defInitFn
            });

            _yuitest_coverline("build/base-observable/base-observable.js", 87);
this._preInitEventCfg(config);

            _yuitest_coverline("build/base-observable/base-observable.js", 89);
this.fire(INIT, {cfg: config});

            _yuitest_coverline("build/base-observable/base-observable.js", 91);
return this;
        },

        /**
         * Handles the special on, after and target properties which allow the user to
         * easily configure on and after listeners as well as bubble targets during
         * construction, prior to init.
         *
         * @private
         * @method _preInitEventCfg
         * @param {Object} config The user configuration object
         */
        _preInitEventCfg : function(config) {
            _yuitest_coverfunc("build/base-observable/base-observable.js", "_preInitEventCfg", 103);
_yuitest_coverline("build/base-observable/base-observable.js", 104);
if (config) {
                _yuitest_coverline("build/base-observable/base-observable.js", 105);
if (config.on) {
                    _yuitest_coverline("build/base-observable/base-observable.js", 106);
this.on(config.on);
                }
                _yuitest_coverline("build/base-observable/base-observable.js", 108);
if (config.after) {
                    _yuitest_coverline("build/base-observable/base-observable.js", 109);
this.after(config.after);
                }
            }

            _yuitest_coverline("build/base-observable/base-observable.js", 113);
var i, l, target,
                userTargets = (config && BUBBLETARGETS in config);

            _yuitest_coverline("build/base-observable/base-observable.js", 116);
if (userTargets || _BUBBLETARGETS in this) {
                _yuitest_coverline("build/base-observable/base-observable.js", 117);
target = userTargets ? (config && config.bubbleTargets) : this._bubbleTargets;
                _yuitest_coverline("build/base-observable/base-observable.js", 118);
if (L.isArray(target)) {
                    _yuitest_coverline("build/base-observable/base-observable.js", 119);
for (i = 0, l = target.length; i < l; i++) {
                        _yuitest_coverline("build/base-observable/base-observable.js", 120);
this.addTarget(target[i]);
                    }
                } else {_yuitest_coverline("build/base-observable/base-observable.js", 122);
if (target) {
                    _yuitest_coverline("build/base-observable/base-observable.js", 123);
this.addTarget(target);
                }}
            }
        },

        /**
         * <p>
         * Destroy lifecycle method. Fires the destroy
         * event, prior to invoking destructors for the
         * class hierarchy.
         * </p>
         * <p>
         * Subscribers to the destroy
         * event can invoke preventDefault on the event object, to prevent destruction
         * from proceeding.
         * </p>
         * @method destroy
         * @return {Base} A reference to this object
         * @chainable
         */
        destroy: function() {

            /**
             * <p>
             * Lifecycle event for the destroy phase,
             * fired prior to destruction. Invoking the preventDefault
             * method on the event object provided to subscribers will
             * prevent destruction from proceeding.
             * </p>
             * <p>
             * Subscribers to the "after" moment of this event, will be notified
             * after destruction is complete (and as a result cannot prevent
             * destruction).
             * </p>
             * @event destroy
             * @preventable _defDestroyFn
             * @param {EventFacade} e Event object
             */
            _yuitest_coverfunc("build/base-observable/base-observable.js", "destroy", 143);
_yuitest_coverline("build/base-observable/base-observable.js", 161);
this.publish(DESTROY, {
                queuable:false,
                fireOnce:true,
                defaultTargetOnly:true,
                defaultFn: this._defDestroyFn
            });
            _yuitest_coverline("build/base-observable/base-observable.js", 167);
this.fire(DESTROY);

            _yuitest_coverline("build/base-observable/base-observable.js", 169);
this.detachAll();
            _yuitest_coverline("build/base-observable/base-observable.js", 170);
return this;
        },

        /**
         * Default init event handler
         *
         * @method _defInitFn
         * @param {EventFacade} e Event object, with a cfg property which
         * refers to the configuration object passed to the constructor.
         * @protected
         */
        _defInitFn : function(e) {
            _yuitest_coverfunc("build/base-observable/base-observable.js", "_defInitFn", 181);
_yuitest_coverline("build/base-observable/base-observable.js", 182);
this._baseInit(e.cfg);
        },

        /**
         * Default destroy event handler
         *
         * @method _defDestroyFn
         * @param {EventFacade} e Event object
         * @protected
         */
        _defDestroyFn : function(e) {
            _yuitest_coverfunc("build/base-observable/base-observable.js", "_defDestroyFn", 192);
_yuitest_coverline("build/base-observable/base-observable.js", 193);
this._baseDestroy(e.cfg);
        }
    };

    _yuitest_coverline("build/base-observable/base-observable.js", 197);
Y.mix(BaseObservable, AttributeObservable, false, null, 1);

    _yuitest_coverline("build/base-observable/base-observable.js", 199);
Y.BaseObservable = BaseObservable;


}, '3.9.0', {"requires": ["attribute-observable"]});
